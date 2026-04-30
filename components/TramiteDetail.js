'use client';
import { useRouter } from 'next/navigation';

export default function TramiteDetail({ tramite: t, onBack, locale }) {
  const router = useRouter();

  return (
    <>
      <div className="detail-hero">
        <div className="detail-hero-inner">
          <button className="detail-back" onClick={onBack}>← Volver al catálogo</button>
          <h1>{t.title}</h1>
          <p>{t.desc}</p>
        </div>
      </div>
      <section className="section">
        <div className="time-badge">⏱ {t.time}</div>
        <div className="detail-grid">
          <div className="detail-card">
            <h3>📄 Documentación a aportar</h3>
            <ul className="detail-list">
              {t.docs.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
          <div className="detail-card">
            <h3>📋 Formularios oficiales</h3>
            {t.forms.map((f, i) => (
              <a key={i} href={f.url} target="_blank" className="detail-link">
                {f.name} <span className="ext">↗</span>
              </a>
            ))}
          </div>
          <div className="detail-card">
            <h3>📍 Dónde presentar</h3>
            {t.where.map((w, i) => (
              <a key={i} href={w.url} target="_blank" className="detail-link">
                📍 {w.name} <span className="ext">↗</span>
              </a>
            ))}
          </div>
          <div className="detail-card">
            <h3>🔗 Recursos oficiales</h3>
            {t.links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" className="detail-link">
                {l.name} <span className="ext">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="assist-banner">
          <h3>¿Necesitas ayuda con este trámite?</h3>
          <p>Nuestro equipo puede orientarte, revisar tu documentación o gestionarlo todo por ti.</p>
          <button className="btn-gold" onClick={() => router.push(`/${locale}/servicios`)}>
            Ver niveles de asistencia →
          </button>
        </div>
      </section>
    </>
  );
}