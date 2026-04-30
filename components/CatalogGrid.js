'use client';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import TramiteDetail from './TramiteDetail';

export default function CatalogGrid({ tramites }) {
  const [selected, setSelected] = useState(null);
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const router = useRouter();

  if (selected) {
    return <TramiteDetail tramite={selected} onBack={() => setSelected(null)} locale={locale} />;
  }

  return (
    <section className="section">
      <div className="catalog-grid">
        {tramites.map(t => (
          <div key={t.id} className="catalog-card" onClick={() => setSelected(t)}>
            <div className="catalog-head">
              <span style={{fontSize:'1.3rem'}}>{t.icon}</span>
              <h3>{t.title}</h3>
              <span className="catalog-badge">{t.badge}</span>
            </div>
            <div className="catalog-body">
              <p>{t.desc}</p>
              <div className="catalog-meta">
                <span className="catalog-chip">⏱ {t.time}</span>
                {t.chips.map(c => <span key={c} className="catalog-chip">{c}</span>)}
              </div>
              <button className="btn-primary btn-full">Ver ficha completa →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}