'use client';
import { useTranslations } from 'next-intl';
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
    role: 'Usuario de trámites de extranjería · Barcelona',
    quote: 'El proceso de regularización es muy difícil de entender si no tienes a alguien que te lo explique paso a paso y en tu idioma. La información oficial existe, pero no está pensada para quien no conoce el sistema.',
    stars: 5,
  },
];

const clientes = [
  {
    meta: 'Ana M. — Reagrupación familiar ✓ — Barcelona',
    quote: 'Por fin alguien que nos explicó todo desde el principio. En dos semanas teníamos toda la documentación lista.',
  },
  {
    meta: 'K.B. — Arraigo social ✓ — Lleida',
    quote: 'Pensaba que mi caso era imposible. Me ayudaron a entender qué opciones tenía y el proceso fue mucho más rápido de lo esperado.',
  },
  {
    meta: 'M.T. — Renovación TIE ✓ — Sabadell',
    quote: 'Sin complicaciones y sin sorpresas. Sabía en todo momento en qué punto estaba mi expediente.',
  },
];

function Stars({ count }) {
  return <div className="testi-stars">{'★'.repeat(count)}</div>;
}

export default function TestimoniosPage() {
  const t = useTranslations('testimonios');
  const tn = useTranslations('nav');

  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>{tn('testimonios')}</h1>
        <p>{t('page_sub')}</p>
      </div>

      <section className="section">
        <div className="sec-label">{t('experts_label')}</div>
        <h2 className="sec-title">{t('experts_title')}</h2>
        <p className="sec-sub">{t('experts_sub')}</p>
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
        <div className="sec-label">{t('clients_label')}</div>
        <h2 className="sec-title">{t('clients_title')}</h2>
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
