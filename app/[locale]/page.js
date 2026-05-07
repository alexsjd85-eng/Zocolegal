import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Zoco Legal | Trámites de Extranjería en España',
  description: 'Gestiona tus trámites de extranjería en España desde 49€. NIE, renovación TIE, residencia y reagrupación familiar. Asesoramiento en 7 idiomas en Barcelona.',
  keywords: 'trámites extranjería España, NIE extranjero España, renovación permiso residencia, abogado extranjería Barcelona, gestión visado España, reagrupamiento familiar España',
};

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <CtaBand />
      <Footer />
    </main>
  );
}