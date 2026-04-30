'use client';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const planes = [
  {
    id: 1,
    icon: '📖',
    name: 'Solo Orientación',
    price: '49€',
    priceLabel: '/único pago',
    desc: 'Te decimos exactamente qué trámite necesitas, qué documentos preparar y cómo solicitarlo.',
    features: ['Análisis de tu situación', 'Checklist de documentos personalizado', 'Guía paso a paso en tu idioma', 'Respuesta en 24h'],
    featured: false
  },
  {
    id: 2,
    icon: '🔍',
    name: 'Revisión Profesional',
    price: '129€',
    priceLabel: '/único pago',
    desc: 'Revisamos toda tu documentación antes de presentarla. Garantizamos que todo esté correcto.',
    features: ['Todo lo del plan Orientación', 'Revisión completa de documentos', 'Corrección de formularios', 'Videollamada de 30 min', 'Respuesta prioritaria en 12h'],
    featured: true
  },
  {
    id: 3,
    icon: '🛡️',
    name: 'Gestión Completa',
    price: '299€',
    priceLabel: 'desde',
    desc: 'Nos encargamos de todo. Preparamos, presentamos y hacemos seguimiento hasta la resolución.',
    features: ['Todo lo del plan Revisión', 'Presentación de la solicitud', 'Seguimiento del expediente', 'Gestión de requerimientos', 'Soporte hasta la resolución'],
    featured: false
  },
  {
    id: 4,
    icon: '⭐',
    name: 'A la Carta',
    price: 'Consultar',
    priceLabel: '',
    desc: 'Servicio exclusivo para casos complejos o empresas que gestionan múltiples expedientes.',
    features: ['Atención exclusiva', 'Gestión de múltiples expedientes', 'Coordinación con abogados', 'Informes de seguimiento', 'Precio negociado por volumen'],
    featured: false
  }
];

export default function ServiciosPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const router = useRouter();

  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Servicios y Precios</h1>
        <p>Elige el nivel de asistencia que necesitas. Sin letra pequeña, precios fijos.</p>
      </div>
      <section className="section">
        <div className="sec-label">Niveles de asistencia</div>
        <h2 className="sec-title">Cuatro niveles, un objetivo</h2>
        <p className="sec-sub">Desde una orientación básica hasta la gestión completa de tu expediente.</p>
        <div className="pricing-grid">
          {planes.map(plan => (
            <div key={plan.id} className={`price-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="price-badge">Más popular</div>}
              <div className="price-icon">{plan.icon}</div>
              <div className="price-name">{plan.name}</div>
              <div className="price-amount">{plan.price} <span>{plan.priceLabel}</span></div>
              <p className="price-desc">{plan.desc}</p>
              <ul className="price-features">
                {plan.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              {plan.id === 4
                ? <button className="btn-secondary btn-full" onClick={() => router.push(`/${locale}/contacto`)}>Contactar →</button>
                : <button className="btn-primary btn-full" onClick={() => setSelectedPlan(plan.id)}>Solicitar →</button>
              }
            </div>
          ))}
        </div>
      </section>

      {selectedPlan && <Questionnaire plan={planes.find(p => p.id === selectedPlan)} locale={locale} onClose={() => setSelectedPlan(null)} />}

      <Footer />
    </main>
  );
}

function Questionnaire({ plan, locale, onClose }) {
  const [caseNumber, setCaseNumber] = useState(null);
  const router = useRouter();

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
    <section className="section">
      <div className="form-wrap">
        <h3>Formulario de solicitud</h3>
        <p className="form-sub">Plan seleccionado: <strong>{plan.name} — {plan.price}</strong></p>

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
        <div style={{marginTop:'1.5rem', display:'flex', gap:'12px'}}>
          <button className="btn-primary" onClick={submit}>Enviar solicitud →</button>
          <button className="btn-secondary" onClick={onClose}>Cancelar</button>
        </div>

        {caseNumber && (
          <div className="case-number">
            <div className="cn-label">Tu número de caso</div>
            <div className="cn-code">{caseNumber}</div>
            <p>Guarda este número. Te confirmaremos por email. Nos pondremos en contacto en menos de 24 horas.</p>
          </div>
        )}
      </div>
    </section>
  );
}