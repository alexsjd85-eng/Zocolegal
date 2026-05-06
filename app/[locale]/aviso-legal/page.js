import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function AvisoLegalPage() {
  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Aviso Legal</h1>
      </div>
      <section className="section">
        <div className="legal-wrap">

          <p><strong>Titular:</strong> Zoco Legal<br />
          <strong>Email:</strong> <a href="mailto:tramites@zocolegal.com">tramites@zocolegal.com</a><br />
          <strong>Web:</strong> zocolegal.com</p>

          <p>En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE), se informa que Zoco Legal es titular del sitio web zocolegal.com.</p>

          <h2>Objeto</h2>
          <p>Este sitio web ofrece información sobre servicios de asesoramiento y gestión de trámites de extranjería en España. Los servicios tienen carácter orientativo y de acompañamiento administrativo.</p>

          <h2>Propiedad intelectual</h2>
          <p>Los contenidos de este sitio web son propiedad de Zoco Legal o de sus licenciantes. Queda prohibida su reproducción sin autorización expresa.</p>

          <h2>Responsabilidad</h2>
          <p>Zoco Legal no se responsabiliza de los daños derivados del uso de la información contenida en este sitio. Los plazos, requisitos y tasas publicados son orientativos y pueden variar según la normativa vigente.</p>

          <h2>Legislación aplicable</h2>
          <p>Este aviso se rige por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Barcelona.</p>

        </div>
      </section>
      <Footer />
    </main>
  );
}
