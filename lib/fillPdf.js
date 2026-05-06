import { PDFDocument } from 'pdf-lib';

// Datos fijos del representante (Josep Maria Giménez Sentís)
const REP = {
  nombre: 'Josep Maria Giménez Sentís',
  nif: '',
  domicilio: 'Carrer Humbert Torres 6',
  numero: '6',
  piso: '1º1ª',
  localidad: 'Lleida',
  codigo_postal: '25007',
  provincia: 'Lleida',
  telefono: '',
  email: 'tramites@zocolegal.com',
};

function getFechaHoy() {
  const d = new Date();
  return {
    dia: String(d.getDate()).padStart(2, '0'),
    mes: String(d.getMonth() + 1).padStart(2, '0'),
    anio: String(d.getFullYear()),
    mes_texto: d.toLocaleString('es-ES', { month: 'long' }),
  };
}

function splitFechaNacimiento(fechaNacimiento) {
  if (!fechaNacimiento) return { dia: '', mes: '', anio: '' };
  const parts = fechaNacimiento.split(/[-/]/);
  if (parts.length === 3) {
    if (parts[0].length === 4) return { anio: parts[0], mes: parts[1], dia: parts[2] };
    return { dia: parts[0], mes: parts[1], anio: parts[2] };
  }
  return { dia: '', mes: '', anio: '' };
}

function setField(form, name, value) {
  try {
    const field = form.getTextField(name);
    if (field) field.setText(value || '');
  } catch {}
}

function checkField(form, name, condition) {
  try {
    const field = form.getCheckBox(name);
    if (field && condition) field.check();
  } catch {}
}

export async function fillPdf(pdfBytes, data) {
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const form = pdfDoc.getForm();
  const fecha = getFechaHoy();
  const fn = splitFechaNacimiento(data.fechaNacimiento);

  // ── 1) DATOS DE LA PERSONA EXTRANJERA ──────────────────────────────────
  setField(form, 'pasaporte',             data.pasaporte);
  setField(form, 'nie_numero',            data.nie);
  setField(form, 'primer_apellido',       data.apellido1);
  setField(form, 'segundo_apellido',      data.apellido2);
  setField(form, 'nombre',                data.nombre);
  setField(form, 'fecha_nacimiento_dia',  fn.dia);
  setField(form, 'fecha_nacimiento_mes',  fn.mes);
  setField(form, 'fecha_nacimiento_anio', fn.anio);
  setField(form, 'lugar_nacimiento',      data.localidad);
  setField(form, 'pais_nacimiento',       data.pais);
  setField(form, 'nacionalidad',          data.nacionalidad);
  setField(form, 'nombre_padre',          data.nombrePadre);
  setField(form, 'nombre_madre',          data.nombreMadre);
  setField(form, 'domicilio',             data.domicilio);
  setField(form, 'domicilio_numero',      data.numeroPiso);
  setField(form, 'localidad',             data.localidad);
  setField(form, 'codigo_postal',         data.codigoPostal);
  setField(form, 'provincia',             data.provincia);
  setField(form, 'telefono',              data.telefono);
  setField(form, 'email',                 data.email);

  // Estado civil
  const ec = (data.estadoCivil || '').toLowerCase();
  checkField(form, 'estado_civil_s',  ec.includes('soltero'));
  checkField(form, 'estado_civil_c',  ec.includes('casado'));
  checkField(form, 'estado_civil_v',  ec.includes('viudo'));
  checkField(form, 'estado_civil_d',  ec.includes('divorciado'));
  checkField(form, 'estado_civil_sp', ec.includes('separado'));

  // ── 2) DATOS DEL REPRESENTANTE ─────────────────────────────────────────
  setField(form, 'rep_nombre',          REP.nombre);
  setField(form, 'rep_nif',             REP.nif);
  setField(form, 'rep_domicilio',       REP.domicilio);
  setField(form, 'rep_domicilio_piso',  REP.piso);
  setField(form, 'rep_localidad',       REP.localidad);
  setField(form, 'rep_codigo_postal',   REP.codigo_postal);
  setField(form, 'rep_provincia',       REP.provincia);
  setField(form, 'rep_telefono',        REP.telefono);
  setField(form, 'rep_email',           REP.email);

  // ── 3) NOTIFICACIONES (mismo que representante) ─────────────────────────
  setField(form, 'notif_nombre',         REP.nombre);
  setField(form, 'notif_domicilio',      REP.domicilio);
  setField(form, 'notif_domicilio_piso', REP.piso);
  setField(form, 'notif_localidad',      REP.localidad);
  setField(form, 'notif_codigo_postal',  REP.codigo_postal);
  setField(form, 'notif_provincia',      REP.provincia);
  setField(form, 'notif_telefono',       REP.telefono);
  setField(form, 'notif_email',          REP.email);

  // ── FECHA Y LUGAR DE FIRMA ──────────────────────────────────────────────
  setField(form, 'localidad_firma', 'Lleida');
  setField(form, 'dia_firma',       fecha.dia);
  setField(form, 'mes_firma',       fecha.mes_texto);
  setField(form, 'anio_firma',      fecha.anio);

  return await pdfDoc.save();
}
