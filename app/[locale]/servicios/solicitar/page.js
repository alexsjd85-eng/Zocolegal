'use client';
import { Suspense, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const planes = [
  { id: 1, icon: '📖', name: 'Solo Orientación',       price: '49€',      priceLabel: '/único pago' },
  { id: 2, icon: '🔍', name: 'Revisión Profesional',   price: '129€',     priceLabel: '/único pago' },
  { id: 3, icon: '🛡️', name: 'Gestión Completa',       price: '299€',     priceLabel: 'desde'       },
  { id: 4, icon: '⭐', name: 'A la Carta',             price: 'Consultar', priceLabel: ''            },
];

function SolicitarContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split('/')[1];

  const planName = searchParams.get('plan') || '';
  const plan = planes.find(p => p.name === planName) || planes[0];

  const [caseNumber, setCaseNumber] = useState(null);

  function submit() {
    const required = ['q-nombre','q-pasaporte','q-email','q-telefono','q-domicilio','q-cp','q-poblacion','q-provincia','q-tramite','q-estado'];
    for (const id of required) {
      if (!document.getElementById(id).value) {
        alert('Por favor rellena todos los campos obligatorios (*)');
        document.getElementById(id).focus();
        return;
      }
    }
    if (!document.getElementById('q-rgpd').checked) {
      alert('Debes aceptar la política de privacidad.');
      return;
    }
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
            <div className="form-group"><label>Nombre completo *</label><input id="q-nombre" type="text" placeholder="Nombre y apellidos" /></div>
            <div className="form-group"><label>Fecha de nacimiento</label><input id="q-nacimiento" type="date" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Nacionalidad</label><input id="q-nacionalidad" type="text" placeholder="País de origen" /></div>
            <div className="form-group"><label>NIE (si dispone)</label><input id="q-nie" type="text" placeholder="X-0000000-A" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Número de pasaporte *</label><input id="q-pasaporte" type="text" placeholder="Número completo" /></div>
            <div className="form-group"><label>Caducidad pasaporte</label><input id="q-caducidad" type="date" /></div>
          </div>

          <div className="form-section-title">Datos de contacto y domicilio</div>
          <div className="form-row">
            <div className="form-group"><label>Correo electrónico *</label><input id="q-email" type="email" placeholder="tu@correo.com" /></div>
            <div className="form-group"><label>Teléfono *</label><input id="q-telefono" type="tel" placeholder="+34 600 000 000" /></div>
          </div>
          <div className="form-group"><label>Domicilio *</label><input id="q-domicilio" type="text" placeholder="Calle Mayor, 10, 3º 2ª" /></div>
          <div className="form-row">
            <div className="form-group"><label>Código postal *</label><input id="q-cp" type="text" placeholder="08001" /></div>
            <div className="form-group"><label>Población *</label><input id="q-poblacion" type="text" placeholder="Barcelona" /></div>
          </div>
          <div className="form-group"><label>Provincia *</label><input id="q-provincia" type="text" placeholder="Barcelona" /></div>

          <div className="form-section-title">Datos del trámite</div>
          <div className="form-group">
            <label>Tipo de trámite *</label>
            <select id="q-tramite">
              <option value="">Selecciona...</option>
              <option>Autorización de residencia inicial</option>
              <option>Renovación de TIE</option>
              <option>Reagrupación familiar</option>
              <option>Autorización de trabajo por cuenta ajena</option>
              <option>Autorización de trabajo por cuenta propia</option>
              <option>Nacionalidad española por residencia</option>
              <option>NIE</option>
              <option>Certificado de registro UE</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label>Estado actual *</label>
            <select id="q-estado">
              <option value="">Selecciona...</option>
              <option>Nuevo — nunca he tenido permiso</option>
              <option>En proceso — tengo una solicitud en curso</option>
              <option>Renovación — mi permiso caduca o ha caducado</option>
            </select>
          </div>
          <div className="form-group"><label>Observaciones</label><textarea id="q-obs" placeholder="Cualquier información relevante..."></textarea></div>
          <div className="form-check">
            <input type="checkbox" id="q-rgpd" />
            <label htmlFor="q-rgpd">Acepto la <a href="#">política de privacidad</a> y el tratamiento de mis datos según el RGPD. *</label>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '12px' }}>
            <button className="btn-primary" onClick={submit}>Enviar solicitud →</button>
            <button className="btn-secondary" onClick={() => router.push(`/${locale}/servicios`)}>← Volver a planes</button>
          </div>

          {caseNumber && (
            <div className="case-number">
              <div className="cn-label">Tu número de caso</div>
              <div className="cn-code">{caseNumber}</div>
              <p>Guarda este número. Te confirmaremos por email. Nos pondremos en contacto en menos de 24 horas.</p>
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
