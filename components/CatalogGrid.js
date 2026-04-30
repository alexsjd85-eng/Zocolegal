'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import TramiteDetail from './TramiteDetail';

export default function CatalogGrid({ tramites }) {
  const [selected, setSelected] = useState(null);
  const t = useTranslations('tramites');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const router = useRouter();

  if (selected) {
    return <TramiteDetail tramite={selected} onBack={() => setSelected(null)} locale={locale} />;
  }

  return (
    <section className="section">
      <div className="catalog-grid">
        {tramites.map(t2 => (
          <div key={t2.id} className="catalog-card" onClick={() => setSelected(t2)}>
            <div className="catalog-head">
              <span style={{fontSize:'1.3rem'}}>{t2.icon}</span>
              <h3>{t2.title}</h3>
              <span className="catalog-badge">{t2.badge}</span>
            </div>
            <div className="catalog-body">
              <p>{t2.desc}</p>
              <div className="catalog-meta">
                <span className="catalog-chip">⏱ {t2.time}</span>
                {t2.chips.map(c => <span key={c} className="catalog-chip">{c}</span>)}
              </div>
              <button className="btn-primary btn-full">{t('ver_ficha')}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}