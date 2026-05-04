'use client';
import { usePathname, useRouter } from 'next/navigation';
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

export { planes };

export default function ServiciosPage() {
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
                : <button className="btn-primary btn-full" onClick={() => router.push(`/${locale}/servicios/solicitar?plan=${encodeURIComponent(plan.name)}`)}>Solicitar →</button>
              }
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
