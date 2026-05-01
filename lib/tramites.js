export const TRAMITES = [
  {
    id: 'residencia',
    icon: '🏠',
    title: 'Autorización de Residencia Temporal',
    badge: 'Muy solicitado',
    desc: 'Permite vivir legalmente en España entre 90 días y 5 años. Necesario para establecerse y trabajar en Catalunya.',
    time: '3–6 meses',
    chips: ['No comunitarios', 'Desde 0'],
    docs: [
      'Pasaporte en vigor + fotocopias de todas las páginas',
      'Formulario EX-01 cumplimentado y firmado',
      'Certificado de empadronamiento',
      'Justificación de medios económicos suficientes',
      'Seguro médico público o privado',
      'Tasa modelo 790 (código 052) pagada'
    ],
    forms: [
      { name: 'Formulario EX-01', url: 'https://www.inclusion.gob.es/documents/d/migraciones/ex01-formulario-autorizacion-de-residencia-temporal-no-lucrativa' },
      { name: 'Tasa modelo 790 código 052', url: 'https://sede.administracionespublicas.gob.es/tasasPDF/prepareProvincia?idModelo=790&idTasa=052' }
    ],
    where: [
      { name: 'Oficina de Extranjería de Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' },
      { name: 'Sede electrónica — presentación online', url: 'https://sede.administracionespublicas.gob.es' }
    ],
    links: [
      { name: 'Ministerio de Inclusión — Procedimiento oficial', url: 'https://extranjeros.inclusion.gob.es/es/InformacionInteres/InformacionProcedimientos/CiudadanosNoComunitarios/hoja040/index.html' },
      { name: 'Solicitar cita previa online', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
    ]
  },
  {
    id: 'tie',
    icon: '🪪',
    title: 'Renovación de la Tarjeta de Residencia (TIE)',
    badge: 'Recurrente',
    desc: 'Renueva tu TIE antes de que caduque. Solicítala entre 60 días antes y 90 días después de la caducidad.',
    time: '1–3 meses',
    chips: ['Residentes', 'Renovación'],
    docs: [
      'TIE actual (caducada o a punto de caducar)',
      'Pasaporte en vigor + fotocopias',
      'Formulario EX-17 cumplimentado',
      'Fotografía reciente en color (fondo blanco)',
      'Justificación situación laboral o económica',
      'Tasa modelo 790 (código 012) pagada'
    ],
    forms: [
      { name: 'Formulario EX-17', url: 'https://www.inclusion.gob.es/documents/410169/2156469/17-Formulario_TIE.pdf' },
      { name: 'Tasa modelo 790 código 012', url: 'https://sede.policia.gob.es/Tasa790_012/' }
    ],
    where: [
      { name: 'Comisaría de Policía (cita previa)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' },
      { name: 'Oficina de Extranjería de Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
    ],
    links: [
      { name: 'Ministerio de Inclusión — Renovación TIE', url: 'https://extranjeros.inclusion.gob.es/es/InformacionInteres/InformacionProcedimientos/CiudadanosNoComunitarios/hoja069/index.html' },
      { name: 'Nova Ciutadania — Ajuntament de Barcelona', url: 'https://www.barcelona.cat/novaciutadania/ca' }
    ]
  },
  {
    id: 'reagrupacion',
    icon: '👨‍👩‍👧',
    title: 'Reagrupación Familiar',
    badge: 'Frecuente',
    desc: 'Permite reunirse con familiares directos si ya tienes residencia legal en España.',
    time: '3–8 meses',
    chips: ['Residentes', 'Familias'],
    docs: [
      'Pasaporte del reagrupante + fotocopias',
      'TIE en vigor del reagrupante',
      'Formulario EX-02 cumplimentado',
      'Certificado de empadronamiento',
      'Documentos acreditativos del vínculo familiar',
      'Justificación de vivienda adecuada',
      'Medios económicos suficientes',
      'Tasa modelo 790 (código 052)'
    ],
    forms: [
      { name: 'Formulario EX-02', url: 'https://www.inclusion.gob.es/documents/d/migraciones/ex02-autorizacion-de-residencia-temporal-por-reagrupacion-familiar-definitivo-l-inclusivo-' }
    ],
    where: [
      { name: 'Oficina de Extranjería de Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
    ],
    links: [
      { name: 'Ministerio de Inclusión — Reagrupación familiar', url: 'https://extranjeros.inclusion.gob.es' }
    ]
  },
  {
    id: 'nie',
    icon: '🆔',
    title: 'NIE — Número de Identificación de Extranjero',
    badge: 'Básico',
    desc: 'Número imprescindible para cualquier gestión legal, fiscal o laboral en España.',
    time: '1–4 semanas',
    chips: ['Todos', 'Urgente posible'],
    docs: [
      'Pasaporte en vigor + fotocopia',
      'Formulario EX-15 cumplimentado',
      'Justificación del motivo de la solicitud',
      'Tasa modelo 790 (código 012) pagada',
      'Fotografía reciente (en algunos casos)'
    ],
    forms: [
      { name: 'Formulario EX-15', url: 'https://www.inclusion.gob.es/documents/d/migraciones/ex15-formulario-nie-y-certificados' }
    ],
    where: [
      { name: 'Comisaría de Policía (cita previa)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
    ],
    links: [
      { name: 'Policía Nacional — Información NIE', url: 'https://www.policia.es/nie.html' }
    ]
  },
  {
    id: 'nacionalidad',
    icon: '🏅',
    title: 'Nacionalidad Española por Residencia',
    badge: 'Complejo',
    desc: 'Solicita la nacionalidad española tras 10 años de residencia legal (2 años para iberoamericanos).',
    time: '12–36 meses',
    chips: ['Larga duración'],
    docs: [
      'Pasaporte en vigor + fotocopias',
      'NIE o TIE en vigor',
      'Certificado de empadronamiento histórico',
      'Certificado de antecedentes penales del país de origen',
      'Certificado de nacimiento apostillado',
      'Prueba DELE A2 o superior',
      'Prueba CCSE (Constitución y realidad social)'
    ],
    forms: [
      { name: 'Solicitud de nacionalidad — Ministerio de Justicia', url: 'https://www.mjusticia.gob.es/es/ciudadanos/tramites/nacionalidad-residencia' }
    ],
    where: [
      { name: 'Registro Civil o Notaría', url: 'https://www.mjusticia.gob.es' }
    ],
    links: [
      { name: 'Ministerio de Justicia — Nacionalidad', url: 'https://www.mjusticia.gob.es/es/ciudadanos/tramites/nacionalidad-residencia' }
    ]
  },
  {
    id: 'trabajo-ajena',
    icon: '💼',
    title: 'Autorización de Trabajo por Cuenta Ajena',
    badge: 'Solicitado',
    desc: 'Permiso para trabajar como empleado en España. Generalmente la solicita el empleador.',
    time: '2–5 meses',
    chips: ['No comunitarios', 'Trabajo'],
    docs: [
      'Pasaporte del trabajador extranjero',
      'Formulario EX-03 cumplimentado',
      'Contrato laboral u oferta de trabajo',
      'Documentación de la empresa empleadora',
      'Titulación o experiencia acreditada'
    ],
    forms: [
      { name: 'Formulario EX-03', url: 'https://www.inclusion.gob.es/documents/d/migraciones/ex03-formulario-autorizacion-de-residencia-temporal-y-trabajo-por-cuenta-ajena-o-autorizacion-de-trabajo-por-cuenta-ajena' }
    ],
    where: [
      { name: 'Oficina de Extranjería — presentación por empleador', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
    ],
    links: [
      { name: 'Ministerio de Inclusión — Trabajo cuenta ajena', url: 'https://extranjeros.inclusion.gob.es' }
    ]
  },
  {
    id: 'trabajo-propia',
    icon: '🧑‍💻',
    title: 'Autorización de Trabajo por Cuenta Propia',
    badge: 'Autónomos',
    desc: 'Permiso para trabajar como autónomo o emprendedor en España siendo ciudadano no comunitario.',
    time: '3–6 meses',
    chips: ['No comunitarios', 'Autónomos'],
    docs: [
      'Pasaporte en vigor + fotocopias',
      'Formulario EX-07 cumplimentado',
      'Plan de negocio detallado',
      'Acreditación de titulación o experiencia',
      'Medios económicos suficientes'
    ],
    forms: [
      { name: 'Formulario EX-07', url: 'https://www.inclusion.gob.es/documents/d/migraciones/ex07-autorizacion-de-residencia-temporal-y-trabajo-por-cuenta-propia' }
    ],
    where: [
      { name: 'Oficina de Extranjería de Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
    ],
    links: [
      { name: 'Ministerio de Inclusión — Trabajo cuenta propia', url: 'https://extranjeros.inclusion.gob.es' }
    ]
  },
  {
    id: 'ue',
    icon: '🇪🇺',
    title: 'Certificado de Registro de Ciudadano UE',
    badge: 'UE',
    desc: 'Registro obligatorio para ciudadanos de la UE que residan en España más de 3 meses.',
    time: 'Inmediato',
    chips: ['Ciudadanos UE', 'Rápido'],
    docs: [
      'DNI o pasaporte comunitario en vigor',
      'Formulario EX-18',
      'Justificación de actividad (trabajo, estudios o medios económicos)',
      'Seguro médico si no cotiza en España',
      'Tasa modelo 790 (código 012)'
    ],
    forms: [
      { name: 'Formulario EX-18', url: 'https://www.inclusion.gob.es/documents/d/migraciones/ex18-formulario-inscripcion-en-el-rce-residencia-ciudadano-de-la-ue' }
    ],
    where: [
      { name: 'Comisaría de Policía (cita previa)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
    ],
    links: [
      { name: 'Ministerio de Inclusión — Ciudadanos UE', url: 'https://extranjeros.inclusion.gob.es' }
    ]
  }
];