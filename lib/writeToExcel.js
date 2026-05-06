import { deflateRawSync } from 'zlib';
import { getGraphToken } from './graphClient.js';

const GRAPH       = 'https://graph.microsoft.com/v1.0';
const FILE_FOLDER = 'BASE DE DATOS';
const FILE_NAME   = 'Solicitudes.xlsx';
const FILE_PATH   = `${FILE_FOLDER}/${FILE_NAME}`;

const EXPEDIENTES_BASE = 'Expedientes/Activos';
const SUBFOLDERS = [
  '01_Documentacion_Cliente',
  '02_Formularios_Oficiales',
  '03_Correspondencia',
  '04_Resoluciones',
  '05_Facturas',
];

const COLUMNS = [
  'Fecha solicitud', 'Nº de caso', 'Nombre', 'Apellido 1', 'Apellido 2',
  'Fecha nacimiento', 'NIE', 'Pasaporte', 'Nacionalidad', 'Email', 'Teléfono',
  'Trámite', 'Plan', 'Estado', 'Observaciones', 'Domicilio', 'Número/Piso',
  'Código postal', 'Provincia', 'País nacimiento', 'Localidad nacimiento',
  'Nombre padre', 'Nombre madre', 'Estado civil',
];

// ─── CRC-32 ──────────────────────────────────────────────────────────────────

const CRC32 = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    t[i] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (const b of buf) c = (c >>> 8) ^ CRC32[(c ^ b) & 0xFF];
  return (c ^ 0xFFFFFFFF) >>> 0;
}

// ─── Minimal XLSX (valid ZIP + Open XML) ─────────────────────────────────────

function createMinimalXlsx() {
  const files = {
    '[Content_Types].xml':
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
      '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>' +
      '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' +
      '</Types>',
    '_rels/.rels':
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>' +
      '</Relationships>',
    'xl/workbook.xml':
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
      '<sheets><sheet name="Solicitudes" sheetId="1" r:id="rId1"/></sheets>' +
      '</workbook>',
    'xl/_rels/workbook.xml.rels':
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>' +
      '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
      '</Relationships>',
    'xl/worksheets/sheet1.xml':
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData/></worksheet>',
    'xl/styles.xml':
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
      '<fonts count="1"><font><sz val="11"/><name val="Calibri"/></font></fonts>' +
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>' +
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>' +
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
      '<cellXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/></cellXfs>' +
      '</styleSheet>',
  };

  const locals = [];
  const cds    = [];
  let offset   = 0;

  for (const [name, content] of Object.entries(files)) {
    const nameBuf = Buffer.from(name, 'utf8');
    const rawBuf  = Buffer.from(content, 'utf8');
    const compBuf = deflateRawSync(rawBuf);
    const crc     = crc32(rawBuf);

    const lh = Buffer.alloc(30 + nameBuf.length);
    lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4);
    lh.writeUInt16LE(0, 6);          lh.writeUInt16LE(8, 8);
    lh.writeUInt16LE(0, 10);         lh.writeUInt16LE(0, 12);
    lh.writeUInt32LE(crc, 14);       lh.writeUInt32LE(compBuf.length, 18);
    lh.writeUInt32LE(rawBuf.length, 22); lh.writeUInt16LE(nameBuf.length, 26);
    lh.writeUInt16LE(0, 28);         nameBuf.copy(lh, 30);
    locals.push(lh, compBuf);

    const cd = Buffer.alloc(46 + nameBuf.length);
    cd.writeUInt32LE(0x02014b50, 0); cd.writeUInt16LE(20, 4);
    cd.writeUInt16LE(20, 6);         cd.writeUInt16LE(0, 8);
    cd.writeUInt16LE(8, 10);         cd.writeUInt16LE(0, 12);
    cd.writeUInt16LE(0, 14);         cd.writeUInt32LE(crc, 16);
    cd.writeUInt32LE(compBuf.length, 20); cd.writeUInt32LE(rawBuf.length, 24);
    cd.writeUInt16LE(nameBuf.length, 28); cd.writeUInt16LE(0, 30);
    cd.writeUInt16LE(0, 32);         cd.writeUInt16LE(0, 34);
    cd.writeUInt16LE(0, 36);         cd.writeUInt32LE(0, 38);
    cd.writeUInt32LE(offset, 42);    nameBuf.copy(cd, 46);
    cds.push(cd);

    offset += lh.length + compBuf.length;
  }

  const cdBuf = Buffer.concat(cds);
  const eocd  = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0); eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);          eocd.writeUInt16LE(cds.length, 8);
  eocd.writeUInt16LE(cds.length, 10); eocd.writeUInt32LE(cdBuf.length, 12);
  eocd.writeUInt32LE(offset, 16);    eocd.writeUInt16LE(0, 20);

  return Buffer.concat([...locals, cdBuf, eocd]);
}

// ─── Graph API helpers ────────────────────────────────────────────────────────

function encodePath(path) {
  return path.split('/').map(encodeURIComponent).join('/');
}

async function gFetch(token, path, opts = {}) {
  return fetch(`${GRAPH}${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...opts.headers,
    },
  });
}

async function getSiteId(token) {
  const { hostname, pathname } = new URL(process.env.SHAREPOINT_SITE);
  const res = await gFetch(token, `/sites/${hostname}:${pathname}`);
  if (!res.ok) throw new Error(`getSiteId ${res.status}: ${await res.text()}`);
  return (await res.json()).id;
}

// Crea cada nivel de carpeta verificando primero si ya existe.
// Si existe (200) continúa. Si no existe (404) la crea. Cualquier otro error lanza excepción.
async function ensureFolder(token, siteId, folderPath) {
  const parts = folderPath.split('/').filter(Boolean);
  let current = '';

  for (const name of parts) {
    const checkPath = current ? `${current}/${name}` : name;
    const checkEndpoint = `/sites/${siteId}/drive/root:/${encodePath(checkPath)}`;

    // Primero comprobamos si ya existe
    const checkRes = await gFetch(token, checkEndpoint);
    if (checkRes.ok) {
      current = checkPath;
      continue;
    }

    // Si no existe (404), la creamos
    const parentEndpoint = current
      ? `/sites/${siteId}/drive/root:/${encodePath(current)}:/children`
      : `/sites/${siteId}/drive/root/children`;

    const createRes = await fetch(`${GRAPH}${parentEndpoint}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        folder: {},
      }),
    });

    if (!createRes.ok) {
      throw new Error(`ensureFolder "${name}" ${createRes.status}: ${await createRes.text()}`);
    }

    current = checkPath;
  }
}

async function getOrCreateFile(token, siteId) {
  await ensureFolder(token, siteId, FILE_FOLDER);

  const encoded = encodePath(FILE_PATH);
  const res = await gFetch(token, `/sites/${siteId}/drive/root:/${encoded}`);
  if (res.ok) return { id: (await res.json()).id, isNew: false };
  if (res.status !== 404) throw new Error(`getFile ${res.status}: ${await res.text()}`);

  const up = await fetch(`${GRAPH}/sites/${siteId}/drive/root:/${encoded}:/content`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
    body: createMinimalXlsx(),
  });
  if (!up.ok) throw new Error(`createFile ${up.status}: ${await up.text()}`);
  return { id: (await up.json()).id, isNew: true };
}

async function getWorksheetId(token, siteId, fileId) {
  const res = await gFetch(token, `/sites/${siteId}/drive/items/${fileId}/workbook/worksheets`);
  if (!res.ok) throw new Error(`getWorksheets ${res.status}: ${await res.text()}`);
  const { value } = await res.json();
  return encodeURIComponent(value[0].id);
}

async function getRowCount(token, siteId, fileId, wsId) {
  const res = await gFetch(
    token,
    `/sites/${siteId}/drive/items/${fileId}/workbook/worksheets/${wsId}/usedRange`,
  );
  if (!res.ok) return 0;
  return (await res.json()).rowCount ?? 0;
}

async function writeRow(token, siteId, fileId, wsId, rowNum, values) {
  const addr = `A${rowNum}:X${rowNum}`;
  const res = await gFetch(
    token,
    `/sites/${siteId}/drive/items/${fileId}/workbook/worksheets/${wsId}/range(address='${addr}')`,
    { method: 'PATCH', body: JSON.stringify({ values: [values] }) },
  );
  if (!res.ok) throw new Error(`writeRow ${rowNum} ${res.status}: ${await res.text()}`);
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function writeToExcel(data) {
  const token  = await getGraphToken();
  const siteId = await getSiteId(token);
  const { id: fileId, isNew } = await getOrCreateFile(token, siteId);
  const wsId   = await getWorksheetId(token, siteId, fileId);

  const rowCount = isNew ? 0 : await getRowCount(token, siteId, fileId, wsId);
  if (rowCount === 0) await writeRow(token, siteId, fileId, wsId, 1, COLUMNS);

  const nextRow = Math.max(rowCount + 1, 2);
  await writeRow(token, siteId, fileId, wsId, nextRow, [
    data.fecha,        data.caseNumber,      data.nombre,       data.apellido1,
    data.apellido2,    data.fechaNacimiento,  data.nie,          data.pasaporte,
    data.nacionalidad, data.email,            data.telefono,     data.tramite,
    data.plan,         data.estado,           data.obs,          data.domicilio,
    data.numeroPiso,   data.codigoPostal,     data.provincia,    data.pais,
    data.localidad,    data.nombrePadre,      data.nombreMadre,  data.estadoCivil,
  ]);
}

const TRAMITE_PDF_MAP = {
  'NIE': 'FORM EX15 NIE Certificados v1.pdf',
  'Autorización de residencia inicial': 'FORM EX01 Residencia Temporal No Lucrativa v1.pdf',
  'Renovación de TIE': 'FORM EX17 Tarjeta Identidad Extranjero v1.pdf',
  'Reagrupación familiar': 'FORM EX02 Reagrupacion Familiar v1.pdf',
  'Autorización de trabajo por cuenta ajena': 'FORM EX03 Residencia Trabajo Cuenta Ajena v1.pdf',
  'Autorización de trabajo por cuenta propia': 'FORM EX07 Residencia Trabajo Cuenta Propia v1.pdf',
  'Certificado de registro UE': 'FORM EX18 Residencia Ciudadano UE v1.pdf',
  'Nacionalidad española por residencia': 'FORM EX15 NIE Certificados v1.pdf',
};

export async function createExpedienteFolder({ caseNumber, nombre, apellido1, files = [], tramite = '' }) {
  const token  = await getGraphToken();
  const siteId = await getSiteId(token);

  const clientName = `${nombre} ${apellido1}`.replace(/[\\/:*?"<>|]/g, '').trim();
  const folderName = `${caseNumber}_${clientName}`;
  const expedientePath = `${EXPEDIENTES_BASE}/${folderName}`;

  // Crear la carpeta del expediente completa
  await ensureFolder(token, siteId, expedientePath);

  // Crear las 5 subcarpetas una a una (no en paralelo para evitar problemas de concurrencia)
  for (const sub of SUBFOLDERS) {
    const subPath = `${expedientePath}/${sub}`;
    const checkRes = await gFetch(token, `/sites/${siteId}/drive/root:/${encodePath(subPath)}`);
    if (checkRes.ok) continue; // ya existe

    const createRes = await fetch(
      `${GRAPH}/sites/${siteId}/drive/root:/${encodePath(expedientePath)}:/children`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: sub,
          folder: {},
        }),
      }
    );

    if (!createRes.ok) {
      console.error(`Error creando subcarpeta ${sub}: ${createRes.status}`);
    }
  }

  // Subir archivos adjuntos a 01_Documentacion_Cliente
  for (const { file } of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadUrl = `${GRAPH}/sites/${siteId}/drive/root:/${encodePath(expedientePath)}/01_Documentacion_Cliente/${encodeURIComponent(file.name)}:/content`;
    const uploadRes = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': file.type || 'application/octet-stream',
      },
      body: buffer,
    });
    if (!uploadRes.ok) {
      console.error(`Error subiendo archivo ${file.name}: ${uploadRes.status}`);
    }
  }

  // Copiar PDF del trámite a 02_Formularios_Oficiales
  const pdfName = TRAMITE_PDF_MAP[tramite];
  if (pdfName) {
    try {
      const sourcePath = encodePath(`Formatos oficiales/${pdfName}`);
      await gFetch(token, `/sites/${siteId}/drive/root:/${sourcePath}:/copy`, {
        method: 'POST',
        body: JSON.stringify({
          parentReference: {
            siteId: siteId,
            path: `/drive/root:/${encodePath(`${expedientePath}/02_Formularios_Oficiales`)}`,
          },
          name: `${caseNumber}_${pdfName}`,
        }),
      });
      console.log(`PDF copiado: ${pdfName}`);
    } catch (e) {
      console.error(`Error copiando PDF: ${e.message}`);
    }
  }

  console.log(`Expediente creado: ${expedientePath}`);
}