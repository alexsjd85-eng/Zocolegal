import { useTranslations } from 'next-intl';

export default function Stats() {
  const t = useTranslations('stats');
  return (
    <div className="stats">
      <div className="stat-cell">
        <span className="stat-n">{t('clients')}</span>
        <div className="stat-l">{t('clientsLabel')}</div>
      </div>
      <div className="stat-cell">
        <span className="stat-n">{t('foreign')}</span>
        <div className="stat-l">{t('foreignLabel')}</div>
      </div>
      <div className="stat-cell">
        <span className="stat-n">{t('langs')}</span>
        <div className="stat-l">{t('langsLabel')}</div>
      </div>
    </div>
  );
}