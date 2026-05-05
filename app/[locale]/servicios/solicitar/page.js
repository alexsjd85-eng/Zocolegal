'use client';
import { Suspense, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { DOCUMENTOS_REQUERIDOS, TRAMITE_KEYS, PLAN_KEYS } from '@/lib/documentos';

const PLANES = [
  { id: 1, icon: '📖', nameKey: 'p1_name', price: '49€',       priceLabelKey: 'price_unique' },
  { id: 2, icon: '🔍', nameKey: 'p2_name', price: '129€',      priceLabelKey: 'price_unique' },
  { id: 3, icon: '🛡️', nameKey: 'p3_name', price: '299€',      priceLabelKey: 'price_from'   },
  { id: 4, icon: '⭐', nameKey: 'p4_name', price: null,         priceLabelKey: ''             },
];

function SolicitarContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split('/')[1];
  const t = useTranslations('solicitar');
  const ts = useTranslations('servicios');

  const planId = searchParams.get('plan') || '1';
  const planMeta = PLANES.find(p => String(p.id) === planId) || PLANES[0];
  const planKey = PLAN_KEYS[planId] || 'orientacion';

  const [form, setForm] = useState({
    nombre: '', apellido1: '', apellido2: '',
    fechaNacimiento: '', nacionalidad: '', nie: '',
    pasaporte: '', caducidad: '', pais: '', localidad: '',
    nombrePadre: '', nombreMadre: '', estadoCivil: '',
    email: '', telefono: '',
    domicilio: '', numeroPiso: '', codigoPostal: '', poblacion: '', provincia: '',
    tramite: '', estado: '', obs: '', rgpd: false,
  });
  const [files, setFiles] = useState({});
  const [caseNumber, setCaseNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const tramiteKey = TRAMITE_KEYS[form.tramite];
  const docsRequeridos = tramiteKey ? (DOCUMENTOS_REQUERIDOS[tramiteKey]?.[planKey] || []) : [];

  const planName = ts(planMeta.nameKey);
  const planPrice = planMeta.price ?? ts('price_ask');
  const planPriceLabel = planMeta.priceLabelKey ? ts(planMeta.priceLabelKey) : '';

  const PLAN_ES = { '1': 'Solo Orientación', '2': 'Revisión Profesional', '3': 'Gestión Completa', '4': 'A la Carta' };
  const planNameES = PLAN_ES[planId] || 'Solo Orientación';

  async function submit() {
    const required = ['nombre', 'apellido1', 'pasaporte', 'email', 'telefono', 'localidad', 'pais', 'estadoCivil', 'domicilio', 'codigoPostal', 'poblacion', 'provincia', 'tramite', 'estado'];
    for (const k of required) {
      if (!form[k]) {
        alert(t('alert_required'));
        document.getElementById(`q-${k}`)?.focus();
        return;
      }
    }
    if (!form.rgpd) {
      alert(t('alert_rgpd'));
      return;
    }
    const year = new Date().getFullYear();
    const num = String(Math.floor(Math.random() * 90000) + 10000);
    const cn = `ZL-${year}-${num}`;
    setLoading(true);
    try {
      const res = await fetch('/api/solicitar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, plan: planNameES, caseNumber: cn }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        console.error('Error API solicitar:', data);
      } else {
        console.log('API solicitar OK:', data);
      }
    } catch (err) {
      console.error('Fetch error solicitar:', err);
    } finally {
      setLoading(false);
    }
    setCaseNumber(cn);
  }

  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>{t('page_title')}</h1>
        <p>{t('plan_selected')} <strong>{planMeta.icon} {planName} — {planPrice} {planPriceLabel}</strong></p>
      </div>
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="form-wrap">

          <div className="form-section-title">{t('personal_data')}</div>
          <div className="form-row">
            <div className="form-group">
              <label>{t('full_name')}</label>
              <input id="q-nombre" type="text" placeholder={t('full_name_ph')}
                value={form.nombre} onChange={e => set('nombre', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('apellido1')}</label>
              <input id="q-apellido1" type="text" placeholder={t('apellido1_ph')}
                value={form.apellido1} onChange={e => set('apellido1', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t('apellido2')}</label>
              <input id="q-apellido2" type="text" placeholder={t('apellido2_ph')}
                value={form.apellido2} onChange={e => set('apellido2', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('birthdate')}</label>
              <input id="q-fechaNacimiento" type="date"
                value={form.fechaNacimiento} onChange={e => set('fechaNacimiento', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t('nationality')}</label>
              <input id="q-nacionalidad" type="text" placeholder={t('nationality_ph')}
                value={form.nacionalidad} onChange={e => set('nacionalidad', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('nie')}</label>
              <input id="q-nie" type="text" placeholder={t('nie_ph')}
                value={form.nie} onChange={e => set('nie', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t('passport')}</label>
              <input id="q-pasaporte" type="text" placeholder={t('passport_ph')}
                value={form.pasaporte} onChange={e => set('pasaporte', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('passport_expiry')}</label>
              <input id="q-caducidad" type="date"
                value={form.caducidad} onChange={e => set('caducidad', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t('pais')}</label>
              <input id="q-pais" type="text" placeholder={t('pais_ph')}
                value={form.pais} onChange={e => set('pais', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('localidad')}</label>
              <input id="q-localidad" type="text" placeholder={t('localidad_ph')}
                value={form.localidad} onChange={e => set('localidad', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t('nombre_padre')}</label>
              <input id="q-nombrePadre" type="text" placeholder={t('nombre_padre_ph')}
                value={form.nombrePadre} onChange={e => set('nombrePadre', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('nombre_madre')}</label>
              <input id="q-nombreMadre" type="text" placeholder={t('nombre_madre_ph')}
                value={form.nombreMadre} onChange={e => set('nombreMadre', e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label>{t('estado_civil')}</label>
            <select id="q-estadoCivil" value={form.estadoCivil} onChange={e => set('estadoCivil', e.target.value)}>
              <option value="">{t('estado_civil_ph')}</option>
              <option value="Soltero/a">{t('civil_soltero')}</option>
              <option value="Casado/a">{t('civil_casado')}</option>
              <option value="Viudo/a">{t('civil_viudo')}</option>
              <option value="Divorciado/a">{t('civil_divorciado')}</option>
              <option value="Separado/a">{t('civil_separado')}</option>
            </select>
          </div>

          <div className="form-section-title">{t('contact_data')}</div>
          <div className="form-row">
            <div className="form-group">
              <label>{t('email')}</label>
              <input id="q-email" type="email" placeholder={t('email_ph')}
                value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('phone')}</label>
              <input id="q-telefono" type="tel" placeholder={t('phone_ph')}
                value={form.telefono} onChange={e => set('telefono', e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label>{t('address')}</label>
            <input id="q-domicilio" type="text" placeholder={t('address_ph')}
              value={form.domicilio} onChange={e => set('domicilio', e.target.value)} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t('numero_piso')}</label>
              <input id="q-numeroPiso" type="text" placeholder={t('numero_piso_ph')}
                value={form.numeroPiso} onChange={e => set('numeroPiso', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('zip')}</label>
              <input id="q-codigoPostal" type="text" placeholder={t('zip_ph')}
                value={form.codigoPostal} onChange={e => set('codigoPostal', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t('city')}</label>
              <input id="q-poblacion" type="text" placeholder={t('city_ph')}
                value={form.poblacion} onChange={e => set('poblacion', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t('province')}</label>
              <input id="q-provincia" type="text" placeholder={t('province_ph')}
                value={form.provincia} onChange={e => set('provincia', e.target.value)} />
            </div>
          </div>

          <div className="form-section-title">{t('tramite_data')}</div>
          <div className="form-group">
            <label>{t('tramite_type')}</label>
            <select id="q-tramite" value={form.tramite} onChange={e => { set('tramite', e.target.value); setFiles({}); }}>
              <option value="">{t('tramite_ph')}</option>
              <option value="Autorización de residencia inicial">{t('tramite_opt1')}</option>
              <option value="Renovación de TIE">{t('tramite_opt2')}</option>
              <option value="Reagrupación familiar">{t('tramite_opt3')}</option>
              <option value="Autorización de trabajo por cuenta ajena">{t('tramite_opt4')}</option>
              <option value="Autorización de trabajo por cuenta propia">{t('tramite_opt5')}</option>
              <option value="Nacionalidad española por residencia">{t('tramite_opt6')}</option>
              <option value="NIE">{t('tramite_opt7')}</option>
              <option value="Certificado de registro UE">{t('tramite_opt8')}</option>
              <option value="Otro">{t('tramite_opt9')}</option>
            </select>
          </div>
          <div className="form-group">
            <label>{t('current_status')}</label>
            <select id="q-estado" value={form.estado} onChange={e => set('estado', e.target.value)}>
              <option value="">{t('status_ph')}</option>
              <option value="Nuevo — nunca he tenido permiso">{t('status1')}</option>
              <option value="En proceso — tengo una solicitud en curso">{t('status2')}</option>
              <option value="Renovación — mi permiso caduca o ha caducado">{t('status3')}</option>
            </select>
          </div>
          <div className="form-group">
            <label>{t('observations')}</label>
            <textarea id="q-obs" placeholder={t('obs_ph')}
              value={form.obs} onChange={e => set('obs', e.target.value)} />
          </div>

          {docsRequeridos.length > 0 && (
            <>
              <div className="form-section-title">{t('docs_section')}</div>
              <p style={{ fontSize: '.83rem', color: 'var(--ink2)', marginBottom: '1rem', lineHeight: 1.6 }}>
                {t('docs_hint')}
              </p>
              {docsRequeridos.map(doc => (
                <div className="form-group upload-group" key={doc.name}>
                  <label>
                    {doc.name}
                    <span className="doc-tooltip">
                      ℹ️
                      <span className="doc-tooltip-text">{doc.tooltip?.[locale] || doc.tooltip?.es}</span>
                    </span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={e => setFiles(prev => ({ ...prev, [doc.name]: e.target.files[0] || null }))}
                  />
                  {files[doc.name] && <span className="upload-ok">✓ {files[doc.name].name}</span>}
                </div>
              ))}
            </>
          )}

          <div className="form-check" style={{ marginTop: '1.25rem' }}>
            <input type="checkbox" id="q-rgpd"
              checked={form.rgpd} onChange={e => set('rgpd', e.target.checked)} />
            <label htmlFor="q-rgpd">{t('rgpd')}</label>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={submit} disabled={loading}>
              {loading ? t('loading') : t('submit')}
            </button>
            <button className="btn-secondary" onClick={() => router.push(`/${locale}/servicios`)}>{t('back')}</button>
          </div>

          {caseNumber && (
            <div className="case-number">
              <div className="cn-label">{t('case_title')}</div>
              <div className="cn-code">{caseNumber}</div>
              <p>{t('case_msg')}</p>
            </div>
          )}
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}

export default function SolicitarPage() {
  return (
    <Suspense fallback={<main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span>...</span></main>}>
      <SolicitarContent />
    </Suspense>
  );
}
