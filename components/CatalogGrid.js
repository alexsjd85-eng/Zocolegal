'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import TramiteDetail from './TramiteDetail';
import { TRAMITES } from '@/lib/tramites';

export default function CatalogGrid({ tramites }) {
  const [selected, setSelected] = useState(null);
  const t = useTranslations('tramites');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  if (selected) {
    return <TramiteDetail tramite={selected} onBack={() => setSelected(null)} locale={locale} />;
  }

  return (
    <section className="section">
      <div className="catalog-grid">
        {tramites.map((item, i) => {
          const i18n = t.raw(`items.${item.id}`);
          const title = i18n?.title || item.title;
          const desc = i18n?.desc || item.desc;
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
                <span style={{fontSize:'1.3rem'}}>{item.icon}</span>
                <h3>{title}</h3>
                <span className="catalog-badge">{badge}</span>
              </div>
              <div className="catalog-body">
                <p>{desc}</p>
                <div className="catalog-meta">
                  <span className="catalog-chip">⏱ {item.time_i18n?.[locale] || item.time}</span>
                  {chips.map(c => <span key={c} className="catalog-chip">{c}</span>)}
                </div>
                <button className="btn-primary btn-full">{t('ver_ficha')}</button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}