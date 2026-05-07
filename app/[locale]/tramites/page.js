import { TRAMITES } from '@/lib/tramites';
import CatalogGrid from '@/components/CatalogGrid';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Trámites de Extranjería en España | NIE, TIE, Residencia | Zoco Legal',
  description: 'Catálogo completo: NIE, renovación TIE, autorización de residencia, reagrupación familiar y nacionalidad española. Información oficial, documentación y plazos.',
  keywords: 'trámites extranjería España, NIE, renovación TIE, autorización residencia, reagrupación familiar, nacionalidad española, permiso trabajo España',
};

export default function TramitesPage() {
  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Trámites de Extranjería en España</h1>
        <p>Información oficial, tiempos estimados y documentación necesaria para NIE, TIE, residencia y más.</p>
      </div>
      <CatalogGrid tramites={TRAMITES} />
      <Footer />
    </main>
  );
}