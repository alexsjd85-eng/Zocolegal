import { useTranslations } from 'next-intl';
import { FadeUp, ScaleIn } from './Motion';

const features = [
  { key: 'f1' },
  { key: 'f2' },
  { key: 'f3' },
  { key: 'f4' },
  { key: 'f5' },
  { key: 'f6' },
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
              <div className="feat-icon">{i + 1}</div>
              <h3>{t(`${f.key}title`)}</h3>
              <p>{t(`${f.key}text`)}</p>
            </div>
          </ScaleIn>
        ))}
      </div>
    </section>
  );
}