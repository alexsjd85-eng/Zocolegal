import { useTranslations } from 'next-intl';
import { TRAMITES } from '@/lib/tramites';
import CatalogGrid from '@/components/CatalogGrid';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function TramitesPage() {
  return (
    <main>
      <Nav />
      <TramitesContent />
      <Footer />
    </main>
  );
}

function TramitesContent() {
  const t = useTranslations('tramites');
  return (
    <>
      <div className="page-hero">
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_sub')}</p>
      </div>
      <CatalogGrid tramites={TRAMITES} />
    </>
  );
}