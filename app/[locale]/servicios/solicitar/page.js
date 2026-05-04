'use client';
import { Suspense, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { DOCUMENTOS_REQUERIDOS, TRAMITE_KEYS, PLAN_KEYS } from '@/lib/documentos';

const planes = [
  { id: 1, icon: '📖', name: 'Solo Orientación',     price: '49€',       priceLabel: '/único pago' },
  { id: 2, icon: '🔍', name: 'Revisión Profesional', price: '129€',      priceLabel: '/único pago' },
  { id: 3, icon: '🛡️', name: 'Gestión Completa',     price: '299€',      priceLabel: 'desde'       },
  { id: 4, icon: '⭐', name: 'A la Carta',           price: 'Consultar', priceLabel: ''            },
];

const TRAMITES = [
  'Autorización de residencia inicial',
  'Renovación de TIE',
  'Reagrupación familiar',
  'Autorización de trabajo por cuenta ajena',
  'Autorización de trabajo por cuenta propia',
  'Nacionalidad española por residencia',
  'NIE',
  'Certificado de registro UE',
  'Otro',
];

function SolicitarContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split('/')[1];

  const planName = searchParams.get('plan') || '';
  const plan = planes.find(p => p.name === planName) || planes[0];

  const [form, setForm] = useState({
    nombre: '', nacimiento: '', nacionalidad: '', nie: '',
    pasaporte: '', caducidad: '', email: '', telefono: '',
    domicilio: '', cp: '', poblacion: '', provincia: '',
    tramite: '', estado: '', obs: '', rgpd: false,
  });
  const [files, setFiles] = useState({});
  const [caseNumber, setCaseNumber] = useState(null);

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const tramiteKey = TRAMITE_KEYS[form.tramite];
  const planKey = PLAN_KEYS[plan.name] || 'orientacion';
  const docsRequeridos = tramiteKey ? (DOCUMENTOS_REQUERIDOS[tramiteKey]?.[planKey] || []) : [];

  function submit() {
    const required = ['nombre', 'pasaporte', 'email', 'telefono', 'domicilio', 'cp', 'poblacion', 'provincia', 'tramite', 'estado'];
    for (const k of required) {
      if (!form[k]) {
        alert('Por favor rellena todos los campos obligatorios (*)');
        document.getElementById(`q-${k}`)?.focus();
        return;
      }
    }
    if (!form.rgpd) {
      alert('Debes aceptar la política de privacidad.');
      return;
    }
    // TODO: conectar con SharePoint / HubSpot / Supabase Storage
    console.log('Formulario de solicitud:', form);
    console.log('Archivos adjuntos:', files);
    const year = new Date().getFullYear();
    const num = String(Math.floor(Math.random() * 90000) + 10000);
    setCaseNumber(`ZL-${year}-${num}`);
  }

  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Formulario de solicitud</h1>
        <p>Plan seleccionado: <strong>{plan.icon} {plan.name} — {plan.price}</strong></p>
      </div>
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="form-wrap">

          <div className="form-section-title">Datos personales</div>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre completo *</label>
              <input id="q-nombre" type="text" placeholder="Nombre y apellidos"
                value={form.nombre} onChange={e => set('nombre', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Fecha de nacimiento</label>
              <input id="q-nacimiento" type="date"
                value={form.nacimiento} onChange={e => set('nacimiento', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Nacionalidad</label>
              <input id="q-nacionalidad" type="text" placeholder="País de origen"
                value={form.nacionalidad} onChange={e => set('nacionalidad', e.target.value)} />
            </div>
            <div className="form-group">
              <label>NIE (si dispone)</label>
              <input id="q-nie" type="text" placeholder="X-0000000-A"
                value={form.nie} onChange={e => set('nie', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Número de pasaporte *</label>
              <input id="q-pasaporte" type="text" placeholder="Número completo"
                value={form.pasaporte} onChange={e => set('pasaporte', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Caducidad pasaporte</label>
              <input id="q-caducidad" type="date"
                value={form.caducidad} onChange={e => set('caducidad', e.target.value)} />
            </div>
          </div>

          <div className="form-section-title">Datos de contacto y domicilio</div>
          <div className="form-row">
            <div className="form-group">
              <label>Correo electrónico *</label>
              <input id="q-email" type="email" placeholder="tu@correo.com"
                value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Teléfono *</label>
              <input id="q-telefono" type="tel" placeholder="+34 600 000 000"
                value={form.telefono} onChange={e => set('telefono', e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label>Domicilio *</label>
            <input id="q-domicilio" type="text" placeholder="Calle Mayor, 10, 3º 2ª"
              value={form.domicilio} onChange={e => set('domicilio', e.target.value)} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Código postal *</label>
              <input id="q-cp" type="text" placeholder="08001"
                value={form.cp} onChange={e => set('cp', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Población *</label>
              <input id="q-poblacion" type="text" placeholder="Barcelona"
                value={form.poblacion} onChange={e => set('poblacion', e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label>Provincia *</label>
            <input id="q-provincia" type="text" placeholder="Barcelona"
              value={form.provincia} onChange={e => set('provincia', e.target.value)} />
          </div>

          <div className="form-section-title">Datos del trámite</div>
          <div className="form-group">
            <label>Tipo de trámite *</label>
            <select id="q-tramite" value={form.tramite} onChange={e => { set('tramite', e.target.value); setFiles({}); }}>
              <option value="">Selecciona...</option>
              {TRAMITES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Estado actual *</label>
            <select id="q-estado" value={form.estado} onChange={e => set('estado', e.target.value)}>
              <option value="">Selecciona...</option>
              <option>Nuevo — nunca he tenido permiso</option>
              <option>En proceso — tengo una solicitud en curso</option>
              <option>Renovación — mi permiso caduca o ha caducado</option>
            </select>
          </div>
          <div className="form-group">
            <label>Observaciones</label>
            <textarea id="q-obs" placeholder="Cualquier información relevante..."
              value={form.obs} onChange={e => set('obs', e.target.value)} />
          </div>

          {docsRequeridos.length > 0 && (
            <>
              <div className="form-section-title">Documentos a adjuntar</div>
              <p style={{ fontSize: '.83rem', color: 'var(--ink2)', marginBottom: '1rem', lineHeight: 1.6 }}>
                Adjunta cada documento en PDF, JPG o PNG. Puedes enviar los que tengas disponibles ahora.
              </p>
              {docsRequeridos.map(doc => (
                <div className="form-group upload-group" key={doc}>
                  <label>{doc}</label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={e => setFiles(prev => ({ ...prev, [doc]: e.target.files[0] || null }))}
                  />
                  {files[doc] && <span className="upload-ok">✓ {files[doc].name}</span>}
                </div>
              ))}
            </>
          )}

          <div className="form-check" style={{ marginTop: '1.25rem' }}>
            <input type="checkbox" id="q-rgpd"
              checked={form.rgpd} onChange={e => set('rgpd', e.target.checked)} />
            <label htmlFor="q-rgpd">
              Acepto la <a href="#">política de privacidad</a> y el tratamiento de mis datos según el RGPD. *
            </label>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={submit}>Enviar solicitud →</button>
            <button className="btn-secondary" onClick={() => router.push(`/${locale}/servicios`)}>← Volver a planes</button>
          </div>

          {caseNumber && (
            <div className="case-number">
              <div className="cn-label">Tu número de caso</div>
              <div className="cn-code">{caseNumber}</div>
              <p>Guarda este número. Te confirmaremos por email en menos de 24 horas.</p>
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
    <Suspense fallback={<main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando...</main>}>
      <SolicitarContent />
    </Suspense>
  );
}
