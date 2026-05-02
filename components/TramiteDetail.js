'use client';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function TramiteDetail({ tramite: t2, onBack, locale }) {
  const t = useTranslations('tramites');
  const router = useRouter();

  const i18n = t2.i18n?.[locale] || {};
  const docs = i18n.docs || t2.docs;
  const where = i18n.where || t2.where;
  const links = i18n.links || t2.links;

  return (
    <>
      <div className="detail-hero">
        <div className="detail-hero-inner">
          <button className="detail-back" onClick={onBack}>{t('volver')}</button>
          <h1>{t2.title}</h1>
          <p>{t2.desc}</p>
        </div>
      </div>
      <section className="section">
        <div className="time-badge">⏱ {t2.time}</div>
        <div className="detail-grid">
          <div className="detail-card">
            <h3>📄 {t('docs')}</h3>
            <ul className="detail-list">
              {docs.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
          <div className="detail-card">
            <h3>📋 {t('forms')}</h3>
            {t2.forms.map((f, i) => (
              <a key={i} href={f.url} target="_blank" className="detail-link">
                {f.name} <span className="ext">↗</span>
              </a>
            ))}
          </div>
          <div className="detail-card">
            <h3>📍 {t('where')}</h3>
            {where.map((w, i) => (
              <a key={i} href={w.url} target="_blank" className="detail-link">
                📍 {w.name} <span className="ext">↗</span>
              </a>
            ))}
          </div>
          <div className="detail-card">
            <h3>🔗 {t('links')}</h3>
            {links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" className="detail-link">
                {l.name} <span className="ext">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="assist-banner">
          <h3>{t('assist_title')}</h3>
          <p>{t('assist_sub')}</p>
          <button className="btn-gold" onClick={() => router.push(`/${locale}/servicios`)}>
            {t('assist_btn')}
          </button>
        </div>
      </section>
    </>
  );
}