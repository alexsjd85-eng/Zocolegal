'use client';
import { useTranslations } from 'next-intl';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function FaqPage() {
  const t = useTranslations('faq');
  const tn = useTranslations('nav');

  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>{tn('faq')}</h1>
        <p>{t('page_sub')}</p>
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}
