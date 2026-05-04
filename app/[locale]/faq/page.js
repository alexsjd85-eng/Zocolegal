'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function FaqPage() {
  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Preguntas Frecuentes</h1>
        <p>Todo lo que necesitas saber antes de empezar tu trámite.</p>
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}
