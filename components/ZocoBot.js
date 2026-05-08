'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_ZOCOBOT_WEBHOOK_URL || 'https://zocolegal.app.n8n.cloud/webhook/zocobot';

const LANGS = {
  es: {
    greeting:    '¡Hola! Soy ZocoBot. ¿En qué trámite de extranjería te puedo ayudar hoy?',
    placeholder: 'Escribe tu consulta...',
    status:      'Asistente legal · En línea',
    tip:         '¿Tienes dudas? ¡Pregúntame!',
    thinking:    'Escribiendo...',
    error:       'No se pudo conectar. Inténtalo de nuevo.',
    fallback:    'Recibido. Un abogado/a te responderá pronto. Visita nuestra sección de <strong>trámites habituales</strong>.',
    dir:         'ltr',
  },
  ca: {
    greeting:    "Hola! Soc ZocoBot. En quin tràmit d'estrangeria et puc ajudar avui?",
    placeholder: 'Escriu la teva consulta...',
    status:      'Assistent legal · En línia',
    tip:         "Tens dubtes? Pregunta'm!",
    thinking:    'Escrivint...',
    error:       "No s'ha pogut connectar. Torna-ho a intentar.",
    fallback:    "Rebut. Un advocat/ada et respondrà aviat. Visita la nostra secció de <strong>tràmits habituals</strong>.",
    dir:         'ltr',
  },
  en: {
    greeting:    "Hi! I'm ZocoBot. How can I help you with your immigration procedure today?",
    placeholder: 'Type your question...',
    status:      'Legal assistant · Online',
    tip:         'Have questions? Ask me!',
    thinking:    'Typing...',
    error:       'Connection failed. Please try again.',
    fallback:    'Message received. A lawyer will get back to you soon. Meanwhile, check our <strong>common procedures</strong> section.',
    dir:         'ltr',
  },
  ar: {
    greeting:    'مرحباً! أنا ZocoBot. كيف يمكنني مساعدتك في إجراءات الإقامة اليوم؟',
    placeholder: 'اكتب سؤالك هنا...',
    status:      'مساعد قانوني · متصل',
    tip:         'لديك أسئلة؟ اسألني!',
    thinking:    'يكتب...',
    error:       'فشل الاتصال. يرجى المحاولة مرة أخرى.',
    fallback:    'تم الاستلام. سيرد عليك محامٍ قريباً. تفضل بزيارة قسم <strong>الإجراءات الشائعة</strong>.',
    dir:         'rtl',
  },
  zh: {
    greeting:    '你好！我是 ZocoBot。今天我能帮您办理什么移民手续？',
    placeholder: '请输入您的问题...',
    status:      '法律助手 · 在线',
    tip:         '有疑问？来问我！',
    thinking:    '正在输入...',
    error:       '连接失败，请重试。',
    fallback:    '已收到。律师会尽快回复您。同时，请查看我们的<strong>常见手续</strong>部分。',
    dir:         'ltr',
  },
};

const LANG_LABELS = ['es', 'ca', 'en', 'ar', 'zh'];
const LANG_DISPLAY = { es: 'ES', ca: 'CA', en: 'EN', ar: 'عر', zh: '中文' };

function ZocoBotSVG({ size = 'lg' }) {
  const w = size === 'lg' ? 58 : 26;
  const h = size === 'lg' ? 65 : 29;
  return (
    <svg width={w} height={h} viewBox="0 0 90 110" fill="none" aria-hidden="true">
      <path d="M22 65 Q10 100 35 107 L55 107 Q80 100 68 65 Q57 54 45 54 Q33 54 22 65Z" fill="#1B3A5C"/>
      <path d="M45 56 L28 68 L32 107 L45 95Z" fill="#082040"/>
      <path d="M45 56 L62 68 L58 107 L45 95Z" fill="#082040"/>
      <path d="M38 57 Q45 66 52 57" stroke="#B89050" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="45" cy="74" r="3.5" fill="#B89050"/>
      <circle cx="45" cy="87" r="3.5" fill="#B89050"/>
      <circle cx="45" cy="100" r="3.5" fill="#B89050"/>
      <ellipse cx="45" cy="36" rx="30" ry="32" fill="#fde68a"/>
      <ellipse cx="31" cy="44" rx="7" ry="5" fill="#fca5a5" opacity=".55"/>
      <ellipse cx="59" cy="44" rx="7" ry="5" fill="#fca5a5" opacity=".55"/>
      <ellipse cx="35" cy="33" rx="6.5" ry="7.5" fill="white"/>
      <ellipse cx="55" cy="33" rx="6.5" ry="7.5" fill="white"/>
      <circle cx="36" cy="34" r="4.5" fill="#082040"/>
      <circle cx="56" cy="34" r="4.5" fill="#082040"/>
      <circle cx="38" cy="31.5" r="1.8" fill="white"/>
      <circle cx="58" cy="31.5" r="1.8" fill="white"/>
      <path d="M28.5 24.5 Q35 21 41.5 24.5" stroke="#92400e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M48.5 24.5 Q55 21 61.5 24.5" stroke="#92400e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="45" cy="41" rx="3" ry="2" fill="#e9a54a" opacity=".6"/>
      <path d="M33 48 Q45 60 57 48" stroke="#92400e" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <rect x="24" y="12" width="42" height="12" rx="4" fill="#082040"/>
      <rect x="10" y="4" width="70" height="11" rx="3" fill="#082040"/>
      <rect x="10" y="4" width="70" height="11" rx="3" fill="none" stroke="#B89050" strokeWidth="1.8"/>
      <path d="M74 9 Q78 18 80 30" stroke="#B89050" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="80" cy="32" r="5.5" fill="#B89050"/>
      <line x1="77.5" y1="36" x2="75" y2="44" stroke="#D4B27A" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="80" y1="37" x2="80" y2="45" stroke="#D4B27A" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="82.5" y1="36" x2="85" y2="44" stroke="#D4B27A" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export default function ZocoBot() {
  const pathname = usePathname();
  const urlLang  = pathname.split('/')[1];
  const init     = LANGS[urlLang] ? urlLang : 'es';

  const [open, setOpen]       = useState(false);
  const [lang, setLang]       = useState(init);
  const [bubble, setBubble]   = useState(LANGS[init].greeting);
  const [input, setInput]     = useState('');
  const [busy, setBusy]       = useState(false);
  const [showTip, setShowTip] = useState(false);
  const inputRef              = useRef(null);

  const t = LANGS[lang];

  useEffect(() => {
    const id = setTimeout(() => { if (!open) setShowTip(true); }, 4000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (showTip && !open) {
      const id = setTimeout(() => setShowTip(false), 4000);
      return () => clearTimeout(id);
    }
  }, [showTip, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 320);
  }, [open]);

  function switchLang(l) {
    setLang(l);
    setBubble(LANGS[l].greeting);
  }

  async function send() {
    const msg = input.trim();
    if (!msg || busy) return;
    setInput('');
    setBusy(true);
    setBubble(t.thinking);
    try {
      if (WEBHOOK_URL) {
        const res  = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: msg, lang }),
        });
        const data = await res.json();
        setBubble(data.reply || t.fallback);
      } else {
        await new Promise(r => setTimeout(r, 900));
        setBubble(t.fallback);
      }
    } catch {
      setBubble(t.error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Panel */}
      <div className={`zb-panel${open ? ' zb-open' : ''}`} role="dialog" aria-modal="true" aria-label="Chat ZocoBot" aria-hidden={!open}>
        <div className="zb-head">
          <div className="zb-head-avatar"><ZocoBotSVG size="sm" /></div>
          <div className="zb-head-info">
            <div className="zb-head-name">ZocoBot</div>
            <div className="zb-head-status">{t.status}</div>
          </div>
          <button className="zb-head-close" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
        </div>

        <div className="zb-langs" role="group" aria-label="Idioma">
          {LANG_LABELS.map(l => (
            <button
              key={l}
              className={`zb-lang-btn${lang === l ? ' zb-lang-active' : ''}`}
              onClick={() => switchLang(l)}
              lang={l}
            >
              {LANG_DISPLAY[l]}
            </button>
          ))}
        </div>

        <div className="zb-body">
          <div
            className={`zb-bubble${t.dir === 'rtl' ? ' zb-rtl' : ''}`}
            dir={t.dir}
            dangerouslySetInnerHTML={{ __html: bubble }}
          />
          <div className="zb-input-row">
            <input
              ref={inputRef}
              className={`zb-input${t.dir === 'rtl' ? ' zb-rtl' : ''}`}
              dir={t.dir}
              type="text"
              placeholder={t.placeholder}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              aria-label="Mensaje para ZocoBot"
              disabled={busy}
            />
            <button className="zb-send" onClick={send} aria-label="Enviar" disabled={busy}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="zb-foot">Powered by <span>Zoco Legal</span> · Trámites fáciles</div>
      </div>

      {/* Botón flotante */}
      <div className="zb-wrap">
        <div className={`zb-tip${showTip && !open ? ' zb-tip-visible' : ''}`}>{t.tip}</div>
        <button
          className="zb-btn"
          onClick={() => { setOpen(o => !o); setShowTip(false); }}
          aria-label="Abrir chat ZocoBot"
          aria-expanded={open}
          aria-controls="zocoPanel"
        >
          <ZocoBotSVG size="lg" />
          <div className="zb-dot" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
