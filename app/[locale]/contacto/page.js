'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  const [sent, setSent] = useState(false);

  function submit() {
    const fields = ['c-nombre','c-apellidos','c-email','c-asunto','c-mensaje'];
    for (const id of fields) {
      if (!document.getElementById(id).value) {
        alert('Por favor rellena todos los campos obligatorios.');
        return;
      }
    }
    if (!document.getElementById('c-rgpd').checked) {
      alert('Debes aceptar la política de privacidad.');
      return;
    }
    setSent(true);
  }

  return (
    <main>
      <Nav />
      <div className="page-hero">
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte. Te respondemos en menos de 24 horas.</p>
      </div>
      <section className="section">
        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>Información de contacto</h3>
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
                <div className="label">Teléfono</div>
                <div className="value">Por confirmar</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div className="contact-item-text">
                <div className="label">Horario</div>
                <div className="value">Lun–Vie · 9:00–18:00</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-item-text">
                <div className="label">Ubicación</div>
                <div className="value">Barcelona, Catalunya</div>
              </div>
            </div>
            <div style={{marginTop:'1.5rem', paddingTop:'1.5rem', borderTop:'1px solid rgba(255,255,255,.15)'}}>
              <div style={{fontSize:'.78rem', opacity:'.65', marginBottom:'.5rem'}}>IDIOMAS DE ATENCIÓN</div>
              <div style={{fontSize:'.88rem', fontWeight:'500'}}>ES · CA · EN · AR · 中文</div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3>Envíanos un mensaje</h3>
            <div className="form-row">
              <div className="form-group"><label>Nombre *</label><input id="c-nombre" type="text" placeholder="Tu nombre" /></div>
              <div className="form-group"><label>Apellidos *</label><input id="c-apellidos" type="text" placeholder="Tus apellidos" /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label>Email *</label><input id="c-email" type="email" placeholder="tu@correo.com" /></div>
              <div className="form-group"><label>Teléfono</label><input id="c-tel" type="tel" placeholder="+34 600 000 000" /></div>
            </div>
            <div className="form-group">
              <label>Asunto *</label>
              <select id="c-asunto">
                <option value="">Selecciona...</option>
                <option>Consulta general</option>
                <option>Información sobre un trámite</option>
                <option>Caso especial o urgente</option>
                <option>Información sobre precios</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="form-group"><label>Mensaje *</label><textarea id="c-mensaje" placeholder="Cuéntanos en qué podemos ayudarte..."></textarea></div>
            <div className="form-check">
              <input type="checkbox" id="c-rgpd" />
              <label htmlFor="c-rgpd">Acepto la <a href="#">política de privacidad</a> y el tratamiento de mis datos según el RGPD. *</label>
            </div>
            <div style={{marginTop:'1.25rem'}}>
              <button className="btn-primary" onClick={submit}>Enviar mensaje →</button>
            </div>
            {sent && (
              <div className="success-msg" style={{display:'block'}}>
                ✓ Mensaje enviado. Te respondemos en menos de 24 horas.
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}