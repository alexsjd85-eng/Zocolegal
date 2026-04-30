import { TRAMITES } from '@/lib/tramites';
import CatalogGrid from '@/components/CatalogGrid';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function TramitesPage() {
  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Catálogo de Trámites</h1>
        <p>Información oficial, tiempos estimados y documentación necesaria para cada trámite.</p>
      </div>
      <CatalogGrid tramites={TRAMITES} />
      <Footer />
    </main>
  );
}