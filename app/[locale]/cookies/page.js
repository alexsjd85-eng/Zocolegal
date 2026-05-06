import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function CookiesPage() {
  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Política de Cookies</h1>
      </div>
      <section className="section">
        <div className="legal-wrap">

          <p>Este sitio utiliza únicamente cookies técnicas necesarias para el funcionamiento del sitio. No utilizamos cookies de seguimiento, analítica ni publicidad.</p>

          <h2>Cookies utilizadas</h2>
          <ul>
            <li><strong>Cookies técnicas de sesión:</strong> necesarias para la navegación. Se eliminan al cerrar el navegador.</li>
          </ul>

          <p>No utilizamos cookies de Google Analytics, publicidad ni redes sociales.</p>

          <h2>Cómo desactivarlas</h2>
          <p>Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar al funcionamiento del sitio.</p>
          <ul>
            <li><strong>Chrome:</strong> Configuración → Privacidad → Cookies</li>
            <li><strong>Firefox:</strong> Opciones → Privacidad → Cookies</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad</li>
            <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
          </ul>

          <p><strong>Contacto:</strong> <a href="mailto:tramites@zocolegal.com">tramites@zocolegal.com</a><br />
          <strong>Última actualización:</strong> mayo de 2026</p>

        </div>
      </section>
      <Footer />
    </main>
  );
}
