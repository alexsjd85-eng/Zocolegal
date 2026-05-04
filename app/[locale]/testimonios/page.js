'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const expertos = [
  {
    name: 'Josep Maria Giménez Sentís',
    role: 'Abogado de extranjería · Lleida · +4 años de experiencia',
    quote: 'La carga administrativa es el mayor obstáculo en este trabajo. Cada expediente genera decenas de documentos, plazos y comunicaciones que consumen tiempo que debería dedicarse al asesoramiento jurídico real.',
    stars: 5,
  },
  {
    name: 'Sihang Chen',
    role: 'Usuaria de trámites de extranjería · Barcelona',
    quote: 'El proceso de regularización es muy difícil de entender si no tienes a alguien que te lo explique paso a paso y en tu idioma. La información oficial existe, pero no está pensada para quien no conoce el sistema.',
    stars: 5,
  },
];

// TODO: reemplazar con testimonios reales validados por los entrevistados
const clientes = [
  {
    meta: 'Ana M. — Reagrupación familiar ✓ — Barcelona',
    quote: 'Gestión rápida y sin complicaciones. Por fin alguien que explica todo claramente.',
  },
  {
    meta: 'K.B. — Arraigo social ✓ — Lleida',
    quote: 'Gestión rápida y sin complicaciones. Por fin alguien que explica todo claramente.',
  },
  {
    meta: 'M.T. — Renovación TIE ✓ — Sabadell',
    quote: 'Gestión rápida y sin complicaciones. Por fin alguien que explica todo claramente.',
  },
];

function Stars({ count }) {
  return <div className="testi-stars">{'★'.repeat(count)}</div>;
}

export default function TestimoniosPage() {
  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Testimonios</h1>
        <p>Lo que dicen quienes conocen el sistema y quienes lo han vivido.</p>
      </div>

      <section className="section">
        <div className="sec-label">Expertos</div>
        <h2 className="sec-title">Voces del sector</h2>
        <p className="sec-sub">Profesionales del ámbito jurídico y personas que han pasado por el proceso migratorio.</p>
        <div className="testi-grid">
          {expertos.map(e => (
            <div key={e.name} className="testi-card expert-card">
              <p className="testi-quote">"{e.quote}"</p>
              <div className="testi-name">{e.name}</div>
              <div className="testi-role">{e.role}</div>
              <Stars count={e.stars} />
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="sec-label">Clientes</div>
        <h2 className="sec-title">Resultados reales</h2>
        <div className="testi-grid testi-grid-3">
          {clientes.map(c => (
            <div key={c.meta} className="testi-card testi-placeholder">
              <p className="testi-quote">"{c.quote}"</p>
              <div className="testi-name" style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--navy)' }}>{c.meta}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
