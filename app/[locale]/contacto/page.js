'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  const { locale } = useParams();
  const t = useTranslations('contacto');
  const tn = useTranslations('nav');

  const [form, setForm] = useState({
    nombre: '', apellidos: '', email: '', telefono: '', asunto: '', mensaje: '', rgpd: false,
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  async function submit() {
    const { nombre, apellidos, email, asunto, mensaje } = form;
    if (!nombre || !apellidos || !email || !asunto || !mensaje) {
      alert(t('alert_fields'));
      return;
    }
    if (!form.rgpd) {
      alert(t('alert_rgpd'));
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert(t('alert_fields'));
      }
    } catch {
      alert(t('alert_fields'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>{tn('contacto')}</h1>
        <p>{t('page_sub')}</p>
      </div>
      <section className="section">
        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>{t('info_title')}</h3>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-item-text">
                <div className="label">Email</div>
                <div className="value">tramites@zocolegal.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-item-text">
                <div className="label">{t('phone')}</div>
                <div className="value">608 332 394</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div className="contact-item-text">
                <div className="label">{t('hours_label')}</div>
                <div className="value">{t('hours_val')}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-item-text">
                <div className="label">{t('location_label')}</div>
                <div className="value">{t('location_val')}</div>
              </div>
            </div>
            <div style={{marginTop:'1.5rem', paddingTop:'1.5rem', borderTop:'1px solid rgba(255,255,255,.15)'}}>
              <div style={{fontSize:'.78rem', opacity:'.65', marginBottom:'.5rem'}}>{t('langs_label')}</div>
              <div style={{fontSize:'.88rem', fontWeight:'500'}}>{t('langs_val')}</div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3>{t('form_title')}</h3>
            <div className="form-row">
              <div className="form-group">
                <label>{t('name')}</label>
                <input type="text" placeholder={t('name_ph')}
                  value={form.nombre} onChange={e => set('nombre', e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t('surname')}</label>
                <input type="text" placeholder={t('surname_ph')}
                  value={form.apellidos} onChange={e => set('apellidos', e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{t('email_label')}</label>
                <input type="email" placeholder="tu@correo.com"
                  value={form.email} onChange={e => set('email', e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t('phone')}</label>
                <input type="tel" placeholder={t('phone_ph')}
                  value={form.telefono} onChange={e => set('telefono', e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>{t('subject')}</label>
              <select value={form.asunto} onChange={e => set('asunto', e.target.value)}>
                <option value="">{t('subject_ph')}</option>
                <option value="opt1">{t('opt1')}</option>
                <option value="opt2">{t('opt2')}</option>
                <option value="opt3">{t('opt3')}</option>
                <option value="opt4">{t('opt4')}</option>
                <option value="opt5">{t('opt5')}</option>
              </select>
            </div>
            <div className="form-group">
              <label>{t('message')}</label>
              <textarea placeholder={t('message_ph')}
                value={form.mensaje} onChange={e => set('mensaje', e.target.value)} />
            </div>
            <div className="form-check">
              <input type="checkbox" id="c-rgpd"
                checked={form.rgpd} onChange={e => set('rgpd', e.target.checked)} />
              <label htmlFor="c-rgpd">{t('rgpd')}</label>
            </div>
            <div style={{marginTop:'1.25rem'}}>
              <button className="btn-primary" onClick={submit} disabled={loading}>
                {loading ? '...' : t('send')}
              </button>
            </div>
            {sent && (
              <div className="success-msg" style={{display:'block'}}>
                {t('success')}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
