'use client';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const router = useRouter();
  const t = useTranslations('footer');
  const tn = useTranslations('nav');

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
          <div style={{fontSize:'.75rem', opacity:'.6', color:'#fff'}}>{t('tagline')}</div>
        </div>
        <div className="footer-col">
          <h4>{t('nav_title')}</h4>
          <a onClick={() => router.push(`/${locale}`)}>{t('home')}</a>
          <a onClick={() => router.push(`/${locale}/tramites`)}>{tn('tramites')}</a>
          <a onClick={() => router.push(`/${locale}/servicios`)}>{tn('servicios')}</a>
          <a onClick={() => router.push(`/${locale}/contacto`)}>{tn('contacto')}</a>
        </div>
        <div className="footer-col">
          <h4>{t('legal_title')}</h4>
          <a onClick={() => router.push(`/${locale}/privacidad`)} style={{cursor:'pointer'}}>{t('privacy')}</a>
          <a onClick={() => router.push(`/${locale}/aviso-legal`)} style={{cursor:'pointer'}}>{t('legal_notice')}</a>
          <a onClick={() => router.push(`/${locale}/cookies`)} style={{cursor:'pointer'}}>{t('cookies')}</a>
        </div>
        <div className="footer-col">
          <h4>{t('contact_title')}</h4>
          <a href="mailto:tramites@zocolegal.com">tramites@zocolegal.com</a>
        </div>
      </footer>
      <div className="footer-bottom">© 2026 Zoco Legal · Proyecto académico UOC</div>
    </>
  );
}
