import { useTranslations } from 'next-intl';
import { FadeUp, SlideIn } from './Motion';

export default function HowItWorks() {
  const t = useTranslations('how');
  return (
    <section className="section">
      <FadeUp>
        <div className="sec-label">{t('label')}</div>
        <h2 className="sec-title">{t('title')}</h2>
      </FadeUp>
      <div className="steps-list">
        <SlideIn delay={0.1} direction="left">
          <div className="step-row">
            <div className="step-num">1</div>
            <div className="step-txt"><h3>{t('s1title')}</h3><p>{t('s1text')}</p></div>
          </div>
        </SlideIn>
        <SlideIn delay={0.2} direction="left">
          <div className="step-row">
            <div className="step-num">2</div>
            <div className="step-txt"><h3>{t('s2title')}</h3><p>{t('s2text')}</p></div>
          </div>
        </SlideIn>
        <SlideIn delay={0.3} direction="left">
          <div className="step-row">
            <div className="step-num">3</div>
            <div className="step-txt"><h3>{t('s3title')}</h3><p>{t('s3text')}</p></div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}