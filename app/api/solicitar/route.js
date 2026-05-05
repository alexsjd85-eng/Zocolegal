import { NextResponse } from 'next/server';

const BASE = 'https://api.hubapi.com';

function hsHeaders() {
  return {
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    'Content-Type': 'application/json',
  };
}

async function hsPost(path, body) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: hsHeaders(),
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    console.error(`HubSpot POST ${path} → ${res.status}`, JSON.stringify(data));
  }
  return { ok: res.ok, status: res.status, data };
}

async function upsertContact({ firstname, lastname, email, phone }) {
  const { ok, status, data } = await hsPost('/crm/v3/objects/contacts', {
    properties: { firstname, lastname, email, phone: phone || '' },
  });

  if (ok) return { id: data.id, error: null };

  if (status === 409) {
    const { ok: sok, data: sdata } = await hsPost('/crm/v3/objects/contacts/search', {
      filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }],
      properties: ['id'],
    });
    if (sok && sdata.results?.length) return { id: sdata.results[0].id, error: null };
  }

  return { id: null, error: data };
}

async function createDeal(contactId, { dealname }) {
  const { ok, data } = await hsPost('/crm/v3/objects/deals', {
    properties: {
      dealname,
      pipeline: 'default',
      dealstage: 'appointmentscheduled',
    },
    associations: [{
      to: { id: contactId },
      types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }],
    }],
  });

  return { ok, error: ok ? null : data };
}

export async function POST(req) {
  const apiKey = process.env.HUBSPOT_API_KEY;
  if (!apiKey) {
    console.error('HUBSPOT_API_KEY no está definida');
    return NextResponse.json({ error: 'missing_api_key' }, { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const { nombre, email, telefono, tramite, plan, estado, obs, caseNumber } = body;
  console.log('Solicitar recibido:', { nombre, email, tramite, plan, caseNumber });

  const nameParts = (nombre || '').trim().split(/\s+/);
  const firstname = nameParts[0] || '';
  const lastname = nameParts.slice(1).join(' ') || '';

  const { id: contactId, error: contactError } = await upsertContact({ firstname, lastname, email, phone: telefono });
  if (!contactId) {
    return NextResponse.json({ error: 'contact_failed', detail: contactError }, { status: 502 });
  }
  console.log('Contacto HubSpot id:', contactId);

  const dealname = [tramite, plan, estado, obs, caseNumber].filter(Boolean).join(' · ');
  const { ok: dealOk, error: dealError } = await createDeal(contactId, { dealname });
  if (!dealOk) {
    console.error('Deal fallido:', dealError);
    return NextResponse.json({ ok: true, contact: contactId, deal_error: dealError });
  }

  console.log('Deal creado correctamente');
  return NextResponse.json({ ok: true, contact: contactId });
}
