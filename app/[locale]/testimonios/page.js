'use client';
import { useTranslations } from 'next-intl';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const EXPERTS = [
  { name: 'Josep Maria Giménez Sentís', roleKey: 'expert1_role', quoteKey: 'expert1_quote', stars: 5 },
  { name: 'Sihang Chen',                roleKey: 'expert2_role', quoteKey: 'expert2_quote', stars: 5 },
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
          {EXPERTS.map(e => (
            <div key={e.name} className="testi-card expert-card">
              <p className="testi-quote">"{t(e.quoteKey)}"</p>
              <div className="testi-name">{e.name}</div>
              <div className="testi-role">{t(e.roleKey)}</div>
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
