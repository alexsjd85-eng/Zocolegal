'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import TramiteDetail from './TramiteDetail';

export default function CatalogGrid({ tramites }) {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const t = useTranslations('tramites');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  if (selected) {
    return <TramiteDetail tramite={selected} onBack={() => setSelected(null)} locale={locale} />;
  }

  const q = query.trim().toLowerCase();
  const filtered = q
    ? tramites.filter(item => {
        const i18n = t.raw(`items.${item.id}`);
        const title = (i18n?.title || item.title || '').toLowerCase();
        const desc  = (i18n?.desc  || item.desc  || '').toLowerCase();
        const chips = (i18n?.chips || item.chips || []).join(' ').toLowerCase();
        return title.includes(q) || desc.includes(q) || chips.includes(q);
      })
    : tramites;

  return (
    <section className="section">
      <div className="catalog-search-wrap">
        <div className="catalog-search-inner">
          <span className="catalog-search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
          <input
            className="catalog-search-input"
            type="text"
            placeholder={t('search_placeholder')}
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button className="catalog-search-clear" onClick={() => setQuery('')} aria-label="Limpiar búsqueda">
              ×
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="catalog-no-results">{t('no_results')}</p>
      ) : (
        <div className="catalog-grid">
          {filtered.map((item, i) => {
            const i18n = t.raw(`items.${item.id}`);
            const title = i18n?.title || item.title;
            const desc  = i18n?.desc  || item.desc;
            const badge = i18n?.badge || item.badge;
            const chips = i18n?.chips || item.chips;

            return (
              <motion.div
                key={item.id}
                className="catalog-card"
                onClick={() => setSelected({...item, title, desc, badge, chips})}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(27,58,92,0.18)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="catalog-head">
                  <h3>{title}</h3>
                  <span className="catalog-badge">{badge}</span>
                </div>
                <div className="catalog-body">
                  <p>{desc}</p>
                  <div className="catalog-meta">
                    <span className="catalog-chip">{item.time_i18n?.[locale] || item.time}</span>
                    {chips.map(c => <span key={c} className="catalog-chip">{c}</span>)}
                  </div>
                  <button className="btn-primary btn-full">{t('ver_ficha')}</button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
