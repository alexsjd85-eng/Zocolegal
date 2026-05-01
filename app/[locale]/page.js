import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <FAQ />
      <CtaBand />
      <Footer />
    </main>
  );
}