import { useTranslations } from 'next-intl';
import { FadeIn } from './Motion';

export default function Stats() {
  const t = useTranslations('stats');
  return (
    <div className="stats">
      <FadeIn delay={0}>
        <div className="stat-cell">
          <span className="stat-n">{t('clients')}</span>
          <div className="stat-l">{t('clientsLabel')}</div>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="stat-cell">
          <span className="stat-n">{t('foreign')}</span>
          <div className="stat-l">{t('foreignLabel')}</div>
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="stat-cell">
          <span className="stat-n">{t('langs')}</span>
          <div className="stat-l">{t('langsLabel')}</div>
        </div>
      </FadeIn>
    </div>
  );
}