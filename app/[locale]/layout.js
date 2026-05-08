import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import '../globals.css';
import 'flag-icons/css/flag-icons.min.css';
import ZocoBot from '@/components/ZocoBot';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '800']
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600']
});

const locales = ['es', 'ca', 'en', 'ar', 'zh', 'ru', 'uk'];

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <meta name="google-site-verification" content="_G-Szl1IW6fD5JmE71Ts0EheSRmpqEr84oJWN6TOEA0" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T2WKR122GC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T2WKR122GC');
          `}
        </Script>
      </head>
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <ZocoBot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}