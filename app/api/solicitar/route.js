import { NextResponse } from 'next/server';
import { writeToExcel, createExpedienteFolder } from '@/lib/writeToExcel';

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

async function hsPatch(path, body) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    method: 'PATCH',
    headers: hsHeaders(),
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    console.error(`HubSpot PATCH ${path} → ${res.status}`, JSON.stringify(data));
  }
  return { ok: res.ok, status: res.status, data };
}

async function upsertContact({
  firstname, lastname, email, phone,
  nie, nacionalidad, tipo_de_tramite, plan_contratado, estado_actual, numero_de_caso,
  segundo_apellido, fecha_nacimiento, localidad, pais,
  nombre_padre, nombre_madre, estado_civil,
  domicilio, numero_piso, codigo_postal, provincia,
}) {
  const properties = {
    firstname,
    lastname,
    email,
    phone: phone || '',
    nie: nie || '',                         // TODO: crear en HubSpot
    nacionalidad: nacionalidad || '',       // TODO: crear en HubSpot
    tipo_de_tramite: tipo_de_tramite || '', // TODO: crear en HubSpot
    plan_contratado: plan_contratado || '', // TODO: crear en HubSpot
    estado_actual: estado_actual || '',     // TODO: crear en HubSpot
    numero_de_caso: numero_de_caso || '',   // TODO: crear en HubSpot
    segundo_apellido: segundo_apellido || '',  // TODO: crear en HubSpot
    fecha_nacimiento: fecha_nacimiento || '', // TODO: crear en HubSpot
    localidad: localidad || '',              // TODO: crear en HubSpot
    pais: pais || '',                        // TODO: crear en HubSpot
    nombre_padre: nombre_padre || '',        // TODO: crear en HubSpot
    nombre_madre: nombre_madre || '',        // TODO: crear en HubSpot
    estado_civil: estado_civil || '',        // TODO: crear en HubSpot
    domicilio: domicilio || '',              // TODO: crear en HubSpot
    numero_piso: numero_piso || '',          // TODO: crear en HubSpot
    codigo_postal: codigo_postal || '',      // TODO: crear en HubSpot
    provincia: provincia || '',              // TODO: crear en HubSpot
  };

  const { ok, status, data } = await hsPost('/crm/v3/objects/contacts', { properties });

  if (ok) return { id: data.id, error: null };

  if (status === 409) {
    // Extract existing ID from HubSpot error message ("Contact already exists. Existing ID: 12345")
    const match = data?.message?.match(/Existing ID[:\s]+(\d+)/i);
    if (match) {
      const existingId = match[1];
      console.log('Contacto duplicado, actualizando ID:', existingId);
      const { ok: pok } = await hsPatch(`/crm/v3/objects/contacts/${existingId}`, { properties });
      if (pok) return { id: existingId, error: null };
    }
    // Fallback: search by email
    const { ok: sok, data: sdata } = await hsPost('/crm/v3/objects/contacts/search', {
      filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }],
      properties: ['id'],
    });
    if (sok && sdata.results?.length) return { id: sdata.results[0].id, error: null };
  }

  return { id: null, error: data };
}

async function createDeal(contactId, { dealname, amount }) {
  const { ok, data } = await hsPost('/crm/v3/objects/deals', {
    properties: {
      dealname,
      pipeline: 'default',
      dealstage: '5301216445',
      amount,
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

  const {
    nombre, apellido1, apellido2, fechaNacimiento,
    email, telefono, tramite, plan, estado, obs, caseNumber,
    nie, pasaporte, nacionalidad, pais, localidad,
    nombrePadre, nombreMadre, estadoCivil,
    domicilio, numeroPiso, codigoPostal, provincia,
  } = body;
  console.log('Solicitar recibido:', { nombre, apellido1, email, tramite, plan, caseNumber });

  const firstname = nombre || '';
  const lastname = [apellido1, apellido2].filter(Boolean).join(' ');

  const { id: contactId, error: contactError } = await upsertContact({
    firstname, lastname, email, phone: telefono,
    nie, nacionalidad,
    tipo_de_tramite: tramite || '',
    plan_contratado: plan || '',
    estado_actual: estado || '',
    numero_de_caso: caseNumber || '',
    segundo_apellido: apellido2 || '',
    fecha_nacimiento: fechaNacimiento || '',
    localidad: localidad || '',
    pais: pais || '',
    nombre_padre: nombrePadre || '',
    nombre_madre: nombreMadre || '',
    estado_civil: estadoCivil || '',
    domicilio: domicilio || '',
    numero_piso: numeroPiso || '',
    codigo_postal: codigoPostal || '',
    provincia: provincia || '',
  });
  if (!contactId) {
    return NextResponse.json({ error: 'contact_failed', detail: contactError }, { status: 502 });
  }
  console.log('Contacto HubSpot id:', contactId);

  const importes = { 'Solo Orientación': 49, 'Revisión Profesional': 129, 'Gestión Completa': 299, 'A la Carta': 0 };
  const dealname = `Solicitud ${caseNumber}`;
  const { ok: dealOk, error: dealError } = await createDeal(contactId, { dealname, amount: importes[plan] ?? 0 });
  if (!dealOk) {
    console.error('Deal fallido:', dealError);
    return NextResponse.json({ ok: true, contact: contactId, deal_error: dealError });
  }

  console.log('Deal creado correctamente');

  const fecha = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
  try {
    await writeToExcel({
      fecha, caseNumber, nombre, apellido1, apellido2, fechaNacimiento,
      nie, pasaporte, nacionalidad, email, telefono, tramite, plan, estado, obs,
      domicilio, numeroPiso, codigoPostal, provincia, pais, localidad,
      nombrePadre, nombreMadre, estadoCivil,
    });
    console.log('Excel actualizado correctamente');
  } catch (err) {
    console.error('writeToExcel error (no bloquea flujo):', err.message);
  }

  try {
    await createExpedienteFolder({ caseNumber, nombre, apellido1 });
    console.log('Expediente creado en SharePoint');
  } catch (err) {
    console.error('createExpedienteFolder error (no bloquea flujo):', err.message);
  }

  return NextResponse.json({ ok: true, contact: contactId });
}
