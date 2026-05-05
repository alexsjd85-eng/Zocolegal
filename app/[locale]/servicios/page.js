'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const PLAN_IDS = [
  { id: 1, icon: '📖', price: '49€',       featured: false },
  { id: 2, icon: '🔍', price: '129€',      featured: true  },
  { id: 3, icon: '🛡️', price: '299€',      featured: false },
  { id: 4, icon: '⭐', price: null,         featured: false },
];

export default function ServiciosPage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const t = useTranslations('servicios');

  const planes = [
    {
      ...PLAN_IDS[0],
      name: t('p1_name'),
      price: '49€',
      priceLabel: t('price_unique'),
      desc: t('p1_desc'),
      features: [t('p1_f1'), t('p1_f2'), t('p1_f3'), t('p1_f4')],
    },
    {
      ...PLAN_IDS[1],
      name: t('p2_name'),
      price: '129€',
      priceLabel: t('price_unique'),
      desc: t('p2_desc'),
      features: [t('p2_f1'), t('p2_f2'), t('p2_f3'), t('p2_f4'), t('p2_f5')],
    },
    {
      ...PLAN_IDS[2],
      name: t('p3_name'),
      price: '299€',
      priceLabel: t('price_from'),
      desc: t('p3_desc'),
      features: [t('p3_f1'), t('p3_f2'), t('p3_f3'), t('p3_f4'), t('p3_f5')],
    },
    {
      ...PLAN_IDS[3],
      name: t('p4_name'),
      price: t('price_ask'),
      priceLabel: '',
      desc: t('p4_desc'),
      features: [t('p4_f1'), t('p4_f2'), t('p4_f3'), t('p4_f4'), t('p4_f5')],
    },
  ];

  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>{t('page_title')}</h1>
        <p>{t('page_sub')}</p>
      </div>
      <section className="section">
        <div className="sec-label">{t('level_label')}</div>
        <h2 className="sec-title">{t('level_title')}</h2>
        <p className="sec-sub">{t('level_sub')}</p>
        <div className="pricing-grid">
          {planes.map(plan => (
            <div key={plan.id} className={`price-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="price-badge">{t('popular')}</div>}
              <div className="price-icon">{plan.icon}</div>
              <div className="price-name">{plan.name}</div>
              <div className="price-amount">{plan.price} <span>{plan.priceLabel}</span></div>
              <p className="price-desc">{plan.desc}</p>
              <ul className="price-features">
                {plan.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              {plan.id === 4
                ? <Link href={`/${locale}/contacto`} className="btn-secondary btn-full">{t('contact_btn')}</Link>
                : <Link href={`/${locale}/servicios/solicitar?plan=${plan.id}`} className="btn-primary btn-full">{t('solicitar_btn')}</Link>
              }
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
