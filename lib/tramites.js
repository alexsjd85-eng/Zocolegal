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
    ],
    i18n: {
      en: {
        docs: [
          'Valid passport + photocopies of all pages',
          'Completed and signed EX-01 form',
          'Certificate of registration (empadronamiento)',
          'Proof of sufficient financial means',
          'Public or private health insurance',
          'Tax form model 790 (code 052) paid'
        ],
        where: [
          { name: 'Immigration Office of Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' },
          { name: 'Electronic headquarters — online submission', url: 'https://sede.administracionespublicas.gob.es' }
        ],
        links: [
          { name: 'Ministry of Inclusion — Official procedure', url: 'https://extranjeros.inclusion.gob.es' },
          { name: 'Request prior appointment online', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ]
      },
      ca: {
        docs: [
          'Passaport en vigor + fotocòpies de totes les pàgines',
          'Formulari EX-01 emplenat i signat',
          'Certificat d\'empadronament',
          'Justificació de mitjans econòmics suficients',
          'Assegurança mèdica pública o privada',
          'Taxa model 790 (codi 052) pagada'
        ],
        where: [
          { name: 'Oficina d\'Estrangeria de Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' },
          { name: 'Seu electrònica — presentació online', url: 'https://sede.administracionespublicas.gob.es' }
        ],
        links: [
          { name: 'Ministeri d\'Inclusió — Procediment oficial', url: 'https://extranjeros.inclusion.gob.es' },
          { name: 'Sol·licitar cita prèvia online', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ]
      },
      ar: {
        docs: [
          'جواز سفر ساري المفعول + صور من جميع الصفحات',
          'نموذج EX-01 مكتمل وموقع',
          'شهادة التسجيل في البلدية',
          'إثبات توفر موارد مالية كافية',
          'تأمين صحي عام أو خاص',
          'رسوم نموذج 790 (رمز 052) مدفوعة'
        ],
        where: [
          { name: 'مكتب الأجانب في برشلونة', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' },
          { name: 'المقر الإلكتروني — تقديم إلكتروني', url: 'https://sede.administracionespublicas.gob.es' }
        ],
        links: [
          { name: 'وزارة الإدماج — الإجراء الرسمي', url: 'https://extranjeros.inclusion.gob.es' },
          { name: 'حجز موعد مسبق عبر الإنترنت', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ]
      },
      zh: {
        docs: [
          '有效护照 + 所有页面的复印件',
          '已填写并签署的EX-01表格',
          '居民登记证明',
          '足够经济来源证明',
          '公共或私人医疗保险',
          '已缴纳790税单（代码052）'
        ],
        where: [
          { name: '巴塞罗那外国人事务办公室', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' },
          { name: '电子总部 — 在线提交', url: 'https://sede.administracionespublicas.gob.es' }
        ],
        links: [
          { name: '包容部 — 官方程序', url: 'https://extranjeros.inclusion.gob.es' },
          { name: '在线预约', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ]
      }
    }
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
    ],
    i18n: {
      en: {
        docs: [
          'Current TIE (expired or about to expire)',
          'Valid passport + photocopies',
          'Completed EX-17 form',
          'Recent color photograph (white background)',
          'Proof of employment or financial situation',
          'Tax form model 790 (code 012) paid'
        ],
        where: [
          { name: 'Police Station (prior appointment required)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' },
          { name: 'Immigration Office of Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'Ministry of Inclusion — TIE Renewal', url: 'https://extranjeros.inclusion.gob.es/es/InformacionInteres/InformacionProcedimientos/CiudadanosNoComunitarios/hoja069/index.html' },
          { name: 'Nova Ciutadania — Barcelona City Council', url: 'https://www.barcelona.cat/novaciutadania/ca' }
        ]
      },
      ca: {
        docs: [
          'TIE actual (caducada o a punt de caducar)',
          'Passaport en vigor + fotocòpies',
          'Formulari EX-17 emplenat',
          'Fotografia recent en color (fons blanc)',
          'Justificació de situació laboral o econòmica',
          'Taxa model 790 (codi 012) pagada'
        ],
        where: [
          { name: 'Comissaria de Policia (cita prèvia)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' },
          { name: 'Oficina d\'Estrangeria de Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'Ministeri d\'Inclusió — Renovació TIE', url: 'https://extranjeros.inclusion.gob.es/es/InformacionInteres/InformacionProcedimientos/CiudadanosNoComunitarios/hoja069/index.html' },
          { name: 'Nova Ciutadania — Ajuntament de Barcelona', url: 'https://www.barcelona.cat/novaciutadania/ca' }
        ]
      },
      ar: {
        docs: [
          'بطاقة الإقامة الحالية (منتهية الصلاحية أو على وشك الانتهاء)',
          'جواز سفر ساري + صور',
          'نموذج EX-17 مكتمل',
          'صورة حديثة ملونة (خلفية بيضاء)',
          'إثبات الوضع الوظيفي أو المالي',
          'رسوم نموذج 790 (رمز 012) مدفوعة'
        ],
        where: [
          { name: 'مركز الشرطة (بموعد مسبق)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' },
          { name: 'مكتب الأجانب في برشلونة', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'وزارة الإدماج — تجديد TIE', url: 'https://extranjeros.inclusion.gob.es/es/InformacionInteres/InformacionProcedimientos/CiudadanosNoComunitarios/hoja069/index.html' },
          { name: 'Nova Ciutadania — أيونتامنت دي برشلونة', url: 'https://www.barcelona.cat/novaciutadania/ca' }
        ]
      },
      zh: {
        docs: [
          '当前TIE（已过期或即将过期）',
          '有效护照 + 复印件',
          '已填写的EX-17表格',
          '近期彩色照片（白色背景）',
          '就业或经济状况证明',
          '已缴纳790税单（代码012）'
        ],
        where: [
          { name: '警察局（需提前预约）', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' },
          { name: '巴塞罗那外国人事务办公室', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: '包容部 — TIE续签', url: 'https://extranjeros.inclusion.gob.es/es/InformacionInteres/InformacionProcedimientos/CiudadanosNoComunitarios/hoja069/index.html' },
          { name: 'Nova Ciutadania — 巴塞罗那市政厅', url: 'https://www.barcelona.cat/novaciutadania/ca' }
        ]
      }
    }
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
    ],
    i18n: {
      en: {
        docs: [
          'Sponsor\'s passport + photocopies',
          'Valid sponsor\'s TIE',
          'Completed EX-02 form',
          'Certificate of registration (empadronamiento)',
          'Documents proving family relationship',
          'Proof of adequate housing',
          'Sufficient financial means',
          'Tax form model 790 (code 052)'
        ],
        where: [
          { name: 'Immigration Office of Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'Ministry of Inclusion — Family reunification', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      ca: {
        docs: [
          'Passaport del reagrupant + fotocòpies',
          'TIE en vigor del reagrupant',
          'Formulari EX-02 emplenat',
          'Certificat d\'empadronament',
          'Documents acreditatius del vincle familiar',
          'Justificació d\'habitatge adequat',
          'Medis econòmics suficients',
          'Taxa model 790 (codi 052)'
        ],
        where: [
          { name: 'Oficina d\'Estrangeria de Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'Ministeri d\'Inclusió — Reagrupació familiar', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      ar: {
        docs: [
          'جواز سفر المقيم الراعي + صور',
          'بطاقة إقامة الراعي سارية المفعول',
          'نموذج EX-02 مكتمل',
          'شهادة التسجيل في البلدية',
          'وثائق تثبت صلة القرابة',
          'إثبات توفر مسكن مناسب',
          'موارد مالية كافية',
          'رسوم نموذج 790 (رمز 052)'
        ],
        where: [
          { name: 'مكتب الأجانب في برشلونة', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'وزارة الإدماج — لم شمل الأسرة', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      zh: {
        docs: [
          '申请人护照 + 复印件',
          '申请人有效居留证（TIE）',
          '已填写的EX-02表格',
          '居民登记证明',
          '家庭关系证明文件',
          '适宜住房证明',
          '足够经济来源',
          '已缴纳790税单（代码052）'
        ],
        where: [
          { name: '巴塞罗那外国人事务办公室', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: '包容部 — 家庭团聚', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      }
    }
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
    ],
    i18n: {
      en: {
        docs: [
          'Valid passport + photocopy',
          'Completed EX-15 form',
          'Proof of reason for application',
          'Tax form model 790 (code 012) paid',
          'Recent photograph (in some cases)'
        ],
        where: [
          { name: 'Police Station (prior appointment required)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ],
        links: [
          { name: 'National Police — NIE Information', url: 'https://www.policia.es/nie.html' }
        ]
      },
      ca: {
        docs: [
          'Passaport en vigor + fotocòpia',
          'Formulari EX-15 emplenat',
          'Justificació del motiu de la sol·licitud',
          'Taxa model 790 (codi 012) pagada',
          'Fotografia recent (en alguns casos)'
        ],
        where: [
          { name: 'Comissaria de Policia (cita prèvia)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ],
        links: [
          { name: 'Policia Nacional — Informació NIE', url: 'https://www.policia.es/nie.html' }
        ]
      },
      ar: {
        docs: [
          'جواز سفر ساري + صورة',
          'نموذج EX-15 مكتمل',
          'إثبات سبب الطلب',
          'رسوم نموذج 790 (رمز 012) مدفوعة',
          'صورة حديثة (في بعض الحالات)'
        ],
        where: [
          { name: 'مركز الشرطة (بموعد مسبق)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ],
        links: [
          { name: 'الشرطة الوطنية — معلومات NIE', url: 'https://www.policia.es/nie.html' }
        ]
      },
      zh: {
        docs: [
          '有效护照 + 复印件',
          '已填写的EX-15表格',
          '申请理由证明',
          '已缴纳790税单（代码012）',
          '近期照片（某些情况下需要）'
        ],
        where: [
          { name: '警察局（需提前预约）', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ],
        links: [
          { name: '国家警察 — NIE信息', url: 'https://www.policia.es/nie.html' }
        ]
      }
    }
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
    ],
    i18n: {
      en: {
        docs: [
          'Valid passport + photocopies',
          'Valid NIE or TIE',
          'Historical certificate of registration (empadronamiento)',
          'Criminal record certificate from country of origin',
          'Apostilled birth certificate',
          'DELE A2 exam or higher',
          'CCSE exam (Constitution and social reality of Spain)'
        ],
        where: [
          { name: 'Civil Registry or Notary', url: 'https://www.mjusticia.gob.es' }
        ],
        links: [
          { name: 'Ministry of Justice — Nationality', url: 'https://www.mjusticia.gob.es/es/ciudadanos/tramites/nacionalidad-residencia' }
        ]
      },
      ca: {
        docs: [
          'Passaport en vigor + fotocòpies',
          'NIE o TIE en vigor',
          'Certificat d\'empadronament històric',
          'Certificat d\'antecedents penals del país d\'origen',
          'Certificat de naixement apostillat',
          'Prova DELE A2 o superior',
          'Prova CCSE (Constitució i realitat social)'
        ],
        where: [
          { name: 'Registre Civil o Notaria', url: 'https://www.mjusticia.gob.es' }
        ],
        links: [
          { name: 'Ministeri de Justícia — Nacionalitat', url: 'https://www.mjusticia.gob.es/es/ciudadanos/tramites/nacionalidad-residencia' }
        ]
      },
      ar: {
        docs: [
          'جواز سفر ساري + صور',
          'NIE أو TIE ساري المفعول',
          'شهادة التسجيل التاريخية في البلدية',
          'شهادة عدم وجود سوابق جنائية من بلد الأصل',
          'شهادة الميلاد مصادق عليها',
          'اجتياز اختبار DELE A2 أو أعلى',
          'اجتياز اختبار CCSE (الدستور والواقع الاجتماعي الإسباني)'
        ],
        where: [
          { name: 'السجل المدني أو الموثق', url: 'https://www.mjusticia.gob.es' }
        ],
        links: [
          { name: 'وزارة العدل — الجنسية', url: 'https://www.mjusticia.gob.es/es/ciudadanos/tramites/nacionalidad-residencia' }
        ]
      },
      zh: {
        docs: [
          '有效护照 + 复印件',
          '有效的NIE或TIE',
          '历史居民登记证明',
          '原籍国无犯罪记录证明',
          '经认证的出生证明',
          'DELE A2或以上考试证书',
          'CCSE考试证书（西班牙宪法与社会现实）'
        ],
        where: [
          { name: '民事登记处或公证处', url: 'https://www.mjusticia.gob.es' }
        ],
        links: [
          { name: '司法部 — 国籍申请', url: 'https://www.mjusticia.gob.es/es/ciudadanos/tramites/nacionalidad-residencia' }
        ]
      }
    }
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
    ],
    i18n: {
      en: {
        docs: [
          'Foreign worker\'s passport',
          'Completed EX-03 form',
          'Employment contract or job offer',
          'Documentation from the employer company',
          'Certified qualifications or experience'
        ],
        where: [
          { name: 'Immigration Office — submission by employer', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'Ministry of Inclusion — Employed work permit', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      ca: {
        docs: [
          'Passaport del treballador estranger',
          'Formulari EX-03 emplenat',
          'Contracte laboral o oferta de treball',
          'Documentació de l\'empresa ocupadora',
          'Titulació o experiència acreditada'
        ],
        where: [
          { name: 'Oficina d\'Estrangeria — presentació per l\'empresari', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'Ministeri d\'Inclusió — Treball per compte d\'altri', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      ar: {
        docs: [
          'جواز سفر العامل الأجنبي',
          'نموذج EX-03 مكتمل',
          'عقد عمل أو عرض عمل',
          'وثائق الشركة الموظِّفة',
          'مؤهلات أو خبرة موثقة'
        ],
        where: [
          { name: 'مكتب الأجانب — تقديم من قِبَل صاحب العمل', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'وزارة الإدماج — تصريح عمل بالأجر', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      zh: {
        docs: [
          '外籍劳工护照',
          '已填写的EX-03表格',
          '劳动合同或工作邀请函',
          '雇主公司文件',
          '经认证的学历或工作经验'
        ],
        where: [
          { name: '外国人事务办公室 — 由雇主提交', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: '包容部 — 受雇工作许可', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      }
    }
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
    ],
    i18n: {
      en: {
        docs: [
          'Valid passport + photocopies',
          'Completed EX-07 form',
          'Detailed business plan',
          'Certified qualifications or experience',
          'Sufficient financial means'
        ],
        where: [
          { name: 'Immigration Office of Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'Ministry of Inclusion — Self-employed work permit', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      ca: {
        docs: [
          'Passaport en vigor + fotocòpies',
          'Formulari EX-07 emplenat',
          'Pla de negoci detallat',
          'Acreditació de titulació o experiència',
          'Medis econòmics suficients'
        ],
        where: [
          { name: 'Oficina d\'Estrangeria de Barcelona', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'Ministeri d\'Inclusió — Treball per compte propi', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      ar: {
        docs: [
          'جواز سفر ساري + صور',
          'نموذج EX-07 مكتمل',
          'خطة عمل مفصلة',
          'اعتماد المؤهلات أو الخبرة',
          'موارد مالية كافية'
        ],
        where: [
          { name: 'مكتب الأجانب في برشلونة', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: 'وزارة الإدماج — تصريح عمل مستقل', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      zh: {
        docs: [
          '有效护照 + 复印件',
          '已填写的EX-07表格',
          '详细商业计划书',
          '学历或经验认证',
          '足够经济来源'
        ],
        where: [
          { name: '巴塞罗那外国人事务办公室', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_oficinas_extranjeria' }
        ],
        links: [
          { name: '包容部 — 自雇工作许可', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      }
    }
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
    ],
    i18n: {
      en: {
        docs: [
          'Valid EU national ID card or passport',
          'EX-18 form',
          'Proof of activity (employment, studies or financial means)',
          'Health insurance if not paying social security in Spain',
          'Tax form model 790 (code 012)'
        ],
        where: [
          { name: 'Police Station (prior appointment required)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ],
        links: [
          { name: 'Ministry of Inclusion — EU Citizens', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      ca: {
        docs: [
          'DNI o passaport comunitari en vigor',
          'Formulari EX-18',
          'Justificació d\'activitat (treball, estudis o medis econòmics)',
          'Assegurança mèdica si no cotitza a Espanya',
          'Taxa model 790 (codi 012)'
        ],
        where: [
          { name: 'Comissaria de Policia (cita prèvia)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ],
        links: [
          { name: 'Ministeri d\'Inclusió — Ciutadans UE', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      ar: {
        docs: [
          'بطاقة هوية وطنية أوروبية أو جواز سفر ساري',
          'نموذج EX-18',
          'إثبات النشاط (عمل، دراسة أو موارد مالية)',
          'تأمين صحي إذا لم يكن مسجلاً في الضمان الاجتماعي الإسباني',
          'رسوم نموذج 790 (رمز 012)'
        ],
        where: [
          { name: 'مركز الشرطة (بموعد مسبق)', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ],
        links: [
          { name: 'وزارة الإدماج — مواطنو الاتحاد الأوروبي', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      },
      zh: {
        docs: [
          '有效欧盟身份证或护照',
          'EX-18表格',
          '活动证明（工作、学习或经济来源）',
          '医疗保险（如未在西班牙缴纳社保）',
          '790税单（代码012）'
        ],
        where: [
          { name: '警察局（需提前预约）', url: 'https://sede.administracionespublicas.gob.es/pagina/index/directorio/cita_previa_ciudadania' }
        ],
        links: [
          { name: '包容部 — 欧盟公民', url: 'https://extranjeros.inclusion.gob.es' }
        ]
      }
    }
  }
];
