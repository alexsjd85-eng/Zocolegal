import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Política de Privacidad | Zoco Legal',
};

export default function PrivacidadPage() {
  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Política de Privacidad</h1>
        <p>Información sobre el tratamiento de sus datos personales conforme al RGPD.</p>
      </div>

      <section className="section" style={{ maxWidth: 760 }}>

        <div style={{ marginBottom: '2.5rem' }}>
          <p className="sec-label">1. Responsable del tratamiento</p>
          <h2 className="sec-title" style={{ fontSize: '1.2rem' }}>¿Quién trata sus datos?</h2>
          <p style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8 }}>
            <strong>Zoco Legal</strong><br />
            Correo electrónico: <a href="mailto:tramites@zocolegal.com" style={{ color: 'var(--navy)' }}>tramites@zocolegal.com</a><br />
            En adelante, <em>el Responsable</em>.
          </p>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <p className="sec-label">2. Finalidad</p>
          <h2 className="sec-title" style={{ fontSize: '1.2rem' }}>¿Para qué tratamos sus datos?</h2>
          <ul style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
            <li>Gestionar las consultas y solicitudes enviadas a través del formulario de contacto.</li>
            <li>Prestar los servicios de gestoría y tramitación de expedientes de extranjería contratados.</li>
            <li>Enviar comunicaciones relacionadas con el estado de los trámites en curso.</li>
            <li>Cumplir con las obligaciones legales aplicables.</li>
          </ul>
          <p style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8, marginTop: '.75rem' }}>
            Los datos no serán utilizados para finalidades incompatibles con las descritas. El plazo de conservación es el necesario para la prestación del servicio y, posteriormente, durante los plazos de prescripción legal aplicables.
          </p>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <p className="sec-label">3. Legitimación</p>
          <h2 className="sec-title" style={{ fontSize: '1.2rem' }}>¿Cuál es la base legal?</h2>
          <ul style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
            <li><strong>Ejecución de un contrato</strong>: tratamiento necesario para la prestación del servicio solicitado (art. 6.1.b RGPD).</li>
            <li><strong>Consentimiento del interesado</strong>: para el envío de comunicaciones informativas y la respuesta a consultas (art. 6.1.a RGPD).</li>
            <li><strong>Obligación legal</strong>: cuando el tratamiento sea exigido por la normativa vigente (art. 6.1.c RGPD).</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <p className="sec-label">4. Destinatarios</p>
          <h2 className="sec-title" style={{ fontSize: '1.2rem' }}>¿Con quién compartimos sus datos?</h2>
          <p style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8 }}>
            Los datos personales no se cederán a terceros salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio (por ejemplo, organismos públicos como la Oficina de Extranjería, el Consulado o la Policía Nacional). En tales casos se comunicará al interesado salvo que la ley lo impida.
          </p>
          <p style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8, marginTop: '.75rem' }}>
            No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo. En caso de ser necesario, se adoptarán las garantías adecuadas previstas en el RGPD.
          </p>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <p className="sec-label">5. Derechos del usuario</p>
          <h2 className="sec-title" style={{ fontSize: '1.2rem' }}>¿Cuáles son sus derechos?</h2>
          <p style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8 }}>
            Conforme al RGPD y la LOPDGDD, puede ejercer los siguientes derechos dirigiéndose al Responsable:
          </p>
          <ul style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8, paddingLeft: '1.25rem', marginTop: '.5rem' }}>
            <li><strong>Acceso</strong>: conocer qué datos personales tratamos sobre usted.</li>
            <li><strong>Rectificación</strong>: corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión</strong>: solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
            <li><strong>Oposición</strong>: oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
            <li><strong>Limitación del tratamiento</strong>: solicitar la restricción del tratamiento en los casos previstos por la ley.</li>
            <li><strong>Portabilidad</strong>: recibir sus datos en formato estructurado y de uso común.</li>
            <li><strong>Retirada del consentimiento</strong>: en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
          </ul>
          <p style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8, marginTop: '.75rem' }}>
            Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navy)' }}>www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.
          </p>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <p className="sec-label">6. Contacto</p>
          <h2 className="sec-title" style={{ fontSize: '1.2rem' }}>¿Cómo ejercer sus derechos?</h2>
          <p style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8 }}>
            Para ejercer cualquiera de los derechos anteriores o para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactarnos en:
          </p>
          <p style={{ fontSize: '.92rem', color: 'var(--ink2)', lineHeight: 1.8, marginTop: '.5rem' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:tramites@zocolegal.com" style={{ color: 'var(--navy)' }}>tramites@zocolegal.com</a>
          </p>
          <p style={{ fontSize: '.85rem', color: 'var(--ink3)', lineHeight: 1.8, marginTop: '1rem' }}>
            Última actualización: abril de 2026
          </p>
        </div>

      </section>
      <Footer />
    </main>
  );
}
