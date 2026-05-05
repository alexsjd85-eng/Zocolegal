'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'es';
  const t = useTranslations('notfound');

  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>{t('title')}</h1>
        <p>{t('msg')}</p>
      </div>
      <section className="section" style={{ textAlign: 'center', paddingTop: '1rem' }}>
        <Link href={`/${locale}`} className="btn-primary">{t('btn')}</Link>
      </section>
      <Footer />
    </main>
  );
}
