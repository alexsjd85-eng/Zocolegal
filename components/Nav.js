'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const locales = [
  { code: 'es', flag: 'es'    },
  { code: 'ca', flag: 'es-ct' },
  { code: 'en', flag: 'gb'    },
  { code: 'ar', flag: 'ma'    },
  { code: 'zh', flag: 'cn'    },
  { code: 'ru', flag: 'ru'    },
  { code: 'uk', flag: 'ua'    },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const tf = useTranslations('footer');
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];

  function switchLang(locale) {
    const segments = pathname.split('/');
    segments[1] = locale;
    setOpen(false);
    router.push(segments.join('/'));
  }

  function close() { setOpen(false); }

  return (
    <>
      <nav className="nav">
        <button className="nav-back-btn" onClick={() => router.back()} aria-label="Atrás">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15,18 9,12 15,6"/></svg>
        </button>
        <Link href={`/${currentLocale}`} className="nav-logo" onClick={close}>
          <svg width="28" height="34" viewBox="0 0 28 34" fill="none">
            <path d="M3 32V16C3 8.3 8 2 14 2C20 2 25 8.3 25 16V32" stroke="#1B3A5C" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M14 2C14 2 9 5.5 9 10.5C9 13.5 11 15.5 13 16.5C13.5 16.8 14 17 14 17C14 17 14.5 16.8 15 16.5C17 15.5 19 13.5 19 10.5C19 5.5 14 2 14 2Z" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="1" y="30" width="26" height="4" rx="2" fill="#1B3A5C"/>
          </svg>
          <div>
            <div className="brand-name">Zoco Legal</div>
            <div className="brand-tag">Trámites fáciles</div>
          </div>
        </Link>
        <div className="nav-right">
          <ul className="nav-links">
            <li><Link href={`/${currentLocale}/tramites`}>{t('tramites')}</Link></li>
            <li><Link href={`/${currentLocale}/servicios`}>{t('servicios')}</Link></li>
            <li><Link href={`/${currentLocale}/faq`}>{t('faq')}</Link></li>
            <li><Link href={`/${currentLocale}/testimonios`}>{t('testimonios')}</Link></li>
            <li><Link href={`/${currentLocale}/contacto`}>{t('contacto')}</Link></li>
          </ul>
          <div className="lang-sw">
            {locales.map(l => (
              <button
                key={l.code}
                className={`lb ${currentLocale === l.code ? 'active' : ''}`}
                onClick={() => switchLang(l.code)}
                title={l.code.toUpperCase()}
              >
                <span className={`fi fi-${l.flag}`}></span>
              </button>
            ))}
          </div>
          <a href="https://www.uoc.edu" target="_blank" className="uoc-badge">UOC Proyecto</a>
          <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-mobile-overlay">
          <button className="nav-mobile-close" onClick={close} aria-label="Cerrar">×</button>
          <ul className="nav-mobile-links">
            <li><Link href={`/${currentLocale}`} onClick={close}>{tf('home')}</Link></li>
            <li><Link href={`/${currentLocale}/tramites`} onClick={close}>{t('tramites')}</Link></li>
            <li><Link href={`/${currentLocale}/servicios`} onClick={close}>{t('servicios')}</Link></li>
            <li><Link href={`/${currentLocale}/faq`} onClick={close}>{t('faq')}</Link></li>
            <li><Link href={`/${currentLocale}/testimonios`} onClick={close}>{t('testimonios')}</Link></li>
            <li><Link href={`/${currentLocale}/contacto`} onClick={close}>{t('contacto')}</Link></li>
          </ul>
          <div className="lang-sw lang-sw-mobile">
            {locales.map(l => (
              <button
                key={l.code}
                className={`lb ${currentLocale === l.code ? 'active' : ''}`}
                onClick={() => switchLang(l.code)}
                title={l.code.toUpperCase()}
              >
                <span className={`fi fi-${l.flag}`}></span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
