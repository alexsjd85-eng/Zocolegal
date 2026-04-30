'use client';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const router = useRouter();

  return (
    <div className="hero">
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-tag">{t('tag')}</div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('title')}<br /><em>{t('titleEm')}</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="btn-white" onClick={() => router.push(`/${locale}/tramites`)}>{t('cta1')}</button>
          <button className="btn-ghost-white" onClick={() => router.push(`/${locale}/servicios`)}>{t('cta2')}</button>
        </motion.div>
      </div>
    </div>
  );
}