'use client';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function CtaBand() {
  const t = useTranslations('cta');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const router = useRouter();

  return (
    <div className="cta-band">
      <h2>{t('title')}</h2>
      <p>{t('subtitle')}</p>
      <div className="cta-btns">
        <button className="btn-white" onClick={() => router.push(`/${locale}/contacto`)}>{t('btn1')}</button>
        <button className="btn-ghost-white" onClick={() => router.push(`/${locale}/servicios`)}>{t('btn2')}</button>
      </div>
    </div>
  );
}