import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('how');
  return (
    <section className="section">
      <div className="sec-label">{t('label')}</div>
      <h2 className="sec-title">{t('title')}</h2>
      <div className="steps-list">
        <div className="step-row">
          <div className="step-num">1</div>
          <div className="step-txt">
            <h3>{t('s1title')}</h3>
            <p>{t('s1text')}</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">2</div>
          <div className="step-txt">
            <h3>{t('s2title')}</h3>
            <p>{t('s2text')}</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">3</div>
          <div className="step-txt">
            <h3>{t('s3title')}</h3>
            <p>{t('s3text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}