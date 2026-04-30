'use client';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Hero() {
  const t = useTranslations('hero');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const router = useRouter();

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-tag">{t('tag')}</div>
        <h1>{t('title')}<br /><em>{t('titleEm')}</em></h1>
        <p>{t('subtitle')}</p>
        <div className="hero-ctas">
          <button className="btn-white" onClick={() => router.push(`/${locale}/tramites`)}>{t('cta1')}</button>
          <button className="btn-ghost-white" onClick={() => router.push(`/${locale}/servicios`)}>{t('cta2')}</button>
        </div>
      </div>
    </div>
  );
}