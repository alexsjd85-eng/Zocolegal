'use client';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const locales = [
  { code: 'es', label: '🇪🇸 ES'  },
  { code: 'ca', label: 'CAT'     },
  { code: 'en', label: '🇬🇧 EN'  },
  { code: 'ar', label: '🇸🇦 AR'  },
  { code: 'zh', label: '🇨🇳 中文' },
  { code: 'ru', label: '🇷🇺 RU'  },
  { code: 'uk', label: '🇺🇦 UK'  },
];

export default function Nav() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];

  function switchLang(locale) {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  }

  return (
    <nav className="nav">
      <Link href={`/${currentLocale}`} className="nav-logo">
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
            >
              {l.label}
            </button>
          ))}
        </div>
        <a href="https://www.uoc.edu" target="_blank" className="uoc-badge">UOC Proyecto</a>
      </div>
    </nav>
  );
}
