import { useTranslations } from 'next-intl';
import { FadeUp, ScaleIn } from './Motion';

const features = [
  { icon: '🗺️', key: 'f1' },
  { icon: '💬', key: 'f2' },
  { icon: '📋', key: 'f3' },
  { icon: '⏰', key: 'f4' },
  { icon: '⚖️', key: 'f5' },
  { icon: '🔍', key: 'f6' },
];

export default function Services() {
  const t = useTranslations('services');
  return (
    <section className="section">
      <FadeUp>
        <div className="sec-label">{t('label')}</div>
        <h2 className="sec-title">{t('title')}</h2>
        <p className="sec-sub">{t('subtitle')}</p>
      </FadeUp>
      <div className="feat-grid">
        {features.map((f, i) => (
          <ScaleIn key={f.key} delay={i * 0.07}>
            <div className="feat-card">
              <div className="feat-icon">{f.icon}</div>
              <h3>{t(`${f.key}title`)}</h3>
              <p>{t(`${f.key}text`)}</p>
            </div>
          </ScaleIn>
        ))}
      </div>
    </section>
  );
}