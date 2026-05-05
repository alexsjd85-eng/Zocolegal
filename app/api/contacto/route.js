import { NextResponse } from 'next/server';

const BASE = 'https://api.hubapi.com';

function headers() {
  return {
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    'Content-Type': 'application/json',
  };
}

async function upsertContact({ firstname, lastname, email, phone }) {
  const res = await fetch(`${BASE}/crm/v3/objects/contacts`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ properties: { firstname, lastname, email, phone: phone || '' } }),
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

async function createNote(contactId, body) {
  await fetch(`${BASE}/crm/v3/objects/notes`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      properties: {
        hs_note_body: body,
        hs_timestamp: String(Date.now()),
      },
      associations: [{
        to: { id: contactId },
        types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }],
      }],
    }),
  });
}

export async function POST(req) {
  try {
    const { nombre, apellidos, email, telefono, asunto, mensaje } = await req.json();

    const contactId = await upsertContact({
      firstname: nombre,
      lastname: apellidos,
      email,
      phone: telefono,
    });

    if (contactId) {
      const noteBody = `<b>Asunto:</b> ${asunto}<br><br><b>Mensaje:</b><br>${mensaje}`;
      await createNote(contactId, noteBody);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('HubSpot contacto error:', err);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
