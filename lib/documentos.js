export const DOCUMENTOS_REQUERIDOS = {
  residencia: {
    orientacion: [
      'Pasaporte (todas las páginas)',
      'Certificado de empadronamiento',
    ],
    revision: [
      'Pasaporte (todas las páginas)',
      'Certificado de empadronamiento',
      'Formulario EX-01 cumplimentado',
      'Justificación medios económicos (3 últimas nóminas o extracto bancario)',
    ],
    gestion: [
      'Pasaporte (todas las páginas)',
      'Certificado de empadronamiento',
      'Formulario EX-01 cumplimentado',
      'Justificación medios económicos (3 últimas nóminas o extracto bancario)',
      'Póliza de seguro médico',
      'Justificante tasa modelo 790-052',
    ],
  },
  tie: {
    orientacion: [
      'TIE actual',
      'Pasaporte en vigor',
    ],
    revision: [
      'TIE actual',
      'Pasaporte en vigor',
      'Formulario EX-17 cumplimentado',
      'Fotografía reciente (fondo blanco)',
    ],
    gestion: [
      'TIE actual',
      'Pasaporte en vigor',
      'Formulario EX-17 cumplimentado',
      'Fotografía reciente (fondo blanco)',
      'Justificación situación laboral (contrato o nóminas)',
      'Justificante tasa modelo 790-012',
    ],
  },
  reagrupacion: {
    orientacion: [
      'Pasaporte del reagrupante',
      'TIE en vigor del reagrupante',
    ],
    revision: [
      'Pasaporte del reagrupante',
      'TIE en vigor del reagrupante',
      'Formulario EX-02 cumplimentado',
      'Documentos acreditativos del vínculo familiar',
      'Certificado de empadronamiento',
    ],
    gestion: [
      'Pasaporte del reagrupante',
      'TIE en vigor del reagrupante',
      'Formulario EX-02 cumplimentado',
      'Documentos acreditativos del vínculo familiar',
      'Certificado de empadronamiento',
      'Justificación de vivienda adecuada',
      'Justificación de medios económicos',
      'Justificante tasa modelo 790-052',
    ],
  },
  trabajo_ajena: {
    orientacion: [
      'Pasaporte del trabajador',
      'Oferta de trabajo o precontrato',
    ],
    revision: [
      'Pasaporte del trabajador',
      'Oferta de trabajo o precontrato',
      'Formulario EX-03 cumplimentado',
      'Documentación de la empresa empleadora (CIF, escrituras)',
    ],
    gestion: [
      'Pasaporte del trabajador',
      'Oferta de trabajo o precontrato',
      'Formulario EX-03 cumplimentado',
      'Documentación de la empresa empleadora (CIF, escrituras)',
      'Titulación o certificado de experiencia profesional',
      'Justificante tasa modelo 790-052',
    ],
  },
  trabajo_propia: {
    orientacion: [
      'Pasaporte en vigor',
      'Plan de negocio (borrador)',
    ],
    revision: [
      'Pasaporte en vigor',
      'Plan de negocio detallado',
      'Formulario EX-07 cumplimentado',
      'Acreditación de titulación o experiencia profesional',
    ],
    gestion: [
      'Pasaporte en vigor',
      'Plan de negocio detallado',
      'Formulario EX-07 cumplimentado',
      'Acreditación de titulación o experiencia profesional',
      'Justificación de medios económicos',
      'Licencias o permisos sectoriales necesarios',
      'Justificante tasa modelo 790-052',
    ],
  },
  nacionalidad: {
    orientacion: [
      'Pasaporte en vigor',
      'NIE o TIE en vigor',
    ],
    revision: [
      'Pasaporte en vigor',
      'NIE o TIE en vigor',
      'Certificado de empadronamiento histórico',
      'Certificado de antecedentes penales del país de origen (apostillado)',
      'Certificado de nacimiento apostillado',
    ],
    gestion: [
      'Pasaporte en vigor',
      'NIE o TIE en vigor',
      'Certificado de empadronamiento histórico',
      'Certificado de antecedentes penales del país de origen (apostillado)',
      'Certificado de nacimiento apostillado',
      'Diploma DELE A2 o superior',
      'Diploma CCSE',
      'Solicitud de nacionalidad (Ministerio de Justicia)',
    ],
  },
  nie: {
    orientacion: [
      'Pasaporte en vigor',
      'Justificación del motivo de la solicitud',
    ],
    revision: [
      'Pasaporte en vigor',
      'Justificación del motivo de la solicitud',
      'Formulario EX-15 cumplimentado',
      'Justificante tasa modelo 790-012',
    ],
    gestion: [
      'Pasaporte en vigor',
      'Justificación del motivo de la solicitud',
      'Formulario EX-15 cumplimentado',
      'Justificante tasa modelo 790-012',
      'Fotografía reciente (fondo blanco)',
    ],
  },
  ue: {
    orientacion: [
      'DNI o pasaporte comunitario en vigor',
    ],
    revision: [
      'DNI o pasaporte comunitario en vigor',
      'Formulario EX-18',
      'Justificación de actividad (contrato de trabajo, matrícula o medios económicos)',
    ],
    gestion: [
      'DNI o pasaporte comunitario en vigor',
      'Formulario EX-18',
      'Justificación de actividad (contrato de trabajo, matrícula o medios económicos)',
      'Póliza de seguro médico (si no cotiza en España)',
      'Justificante tasa modelo 790-012',
    ],
  },
};

export const TRAMITE_KEYS = {
  'Autorización de residencia inicial': 'residencia',
  'Renovación de TIE': 'tie',
  'Reagrupación familiar': 'reagrupacion',
  'Autorización de trabajo por cuenta ajena': 'trabajo_ajena',
  'Autorización de trabajo por cuenta propia': 'trabajo_propia',
  'Nacionalidad española por residencia': 'nacionalidad',
  'NIE': 'nie',
  'Certificado de registro UE': 'ue',
};

export const PLAN_KEYS = {
  'Solo Orientación': 'orientacion',
  'Revisión Profesional': 'revision',
  'Gestión Completa': 'gestion',
  'A la Carta': 'gestion',
};
