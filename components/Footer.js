'use client';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const router = useRouter();

  return (
    <>
      <div className="uoc-bar">
        <Image src="/uoc-logo.jpg" alt="UOC" width={80} height={32} style={{objectFit:'contain'}} />
        <div className="uoc-text">
          <strong>Proyecto académico</strong> · Universitat Oberta de Catalunya · Innovació i Iniciativa Emprenedora 2025-26
        </div>
      </div>
      <footer>
        <div className="footer-col">
          <div className="footer-brand">Zoco Legal</div>
          <div style={{fontSize:'.75rem', opacity:'.6', color:'#fff'}}>Trámites de extranjería en Barcelona</div>
        </div>
        <div className="footer-col">
          <h4>Navegación</h4>
          <a onClick={() => router.push(`/${locale}`)}>Inicio</a>
          <a onClick={() => router.push(`/${locale}/tramites`)}>Trámites</a>
          <a onClick={() => router.push(`/${locale}/servicios`)}>Servicios</a>
          <a onClick={() => router.push(`/${locale}/contacto`)}>Contacto</a>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Política de privacidad</a>
          <a href="#">Aviso legal</a>
          <a href="#">Cookies</a>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <a href="mailto:tramites@zocolegal.com">tramites@zocolegal.com</a>
        </div>
      </footer>
      <div className="footer-bottom">© 2026 Zoco Legal · Proyecto académico UOC</div>
    </>
  );
}