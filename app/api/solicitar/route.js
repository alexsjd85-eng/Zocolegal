import { NextResponse } from 'next/server';

const BASE = 'https://api.hubapi.com';

function headers() {
  return {
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    'Content-Type': 'application/json',
  };
}

async function upsertContact({ firstname, lastname, email, phone, nationality }) {
  const res = await fetch(`${BASE}/crm/v3/objects/contacts`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      properties: { firstname, lastname, email, phone: phone || '', country: nationality || '' },
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return data.id;
  }

  if (res.status === 409) {
    const search = await fetch(`${BASE}/crm/v3/objects/contacts/search`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }],
        properties: ['id'],
      }),
    });
    const data = await search.json();
    return data.results?.[0]?.id ?? null;
  }

  return null;
}

async function createDeal(contactId, { dealname, tramite, plan, estado, obs, caseNumber }) {
  const description = [
    `Trámite: ${tramite}`,
    `Plan: ${plan}`,
    `Estado actual: ${estado}`,
    obs ? `Observaciones: ${obs}` : '',
    `Número de caso: ${caseNumber}`,
  ].filter(Boolean).join('\n');

  const res = await fetch(`${BASE}/crm/v3/objects/deals`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      properties: {
        dealname,
        pipeline: 'default',
        dealstage: 'appointmentscheduled',
        description,
      },
      associations: [{
        to: { id: contactId },
        types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }],
      }],
    }),
  });

  return res.ok;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { nombre, email, telefono, nacionalidad, tramite, plan, estado, obs, caseNumber } = body;

    const nameParts = nombre.trim().split(' ');
    const firstname = nameParts[0] || nombre;
    const lastname = nameParts.slice(1).join(' ') || '';

    const contactId = await upsertContact({ firstname, lastname, email, phone: telefono, nationality: nacionalidad });

    if (contactId) {
      await createDeal(contactId, {
        dealname: `${tramite} — ${plan} (${caseNumber})`,
        tramite,
        plan,
        estado,
        obs,
        caseNumber,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('HubSpot solicitar error:', err);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
