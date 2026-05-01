'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items');
  const [open, setOpen] = useState(null);

  return (
    <section className="section">
      <p className="sec-label">{t('label')}</p>
      <h2 className="sec-title">{t('title')}</h2>
      <div style={{ marginTop: '2rem', maxWidth: 720 }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{ borderBottom: '1px solid rgba(27,58,92,0.12)' }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.1rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1rem',
              }}
            >
              <span style={{
                fontSize: '.95rem',
                fontWeight: 600,
                color: open === i ? '#1B3A5C' : '#1A2630',
                lineHeight: 1.5,
                flex: 1,
              }}>
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: open === i ? '#1B3A5C' : 'rgba(27,58,92,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: open === i ? '#C9A84C' : '#1B3A5C',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{
                    fontSize: '.88rem',
                    color: '#4A5A68',
                    lineHeight: 1.75,
                    paddingBottom: '1.1rem',
                  }}>
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
