# ZocoBot + n8n + Claude API — Guía de setup

## Lo que necesitas
- Cuenta n8n Cloud (plan gratuito vale: https://app.n8n.cloud)
- API Key de Anthropic (https://console.anthropic.com → API Keys)
- La URL del webhook de n8n (la obtienes en el paso 3)

---

## PASO 1 — Importar el workflow en n8n

1. Entra en **app.n8n.cloud** → tu instancia
2. Menú izquierdo → **Workflows** → botón **Import**
3. Sube el fichero `n8n-workflow.json` (está en esta misma carpeta)
4. El workflow aparece con 6 nodos en línea

---

## PASO 2 — Añadir la API Key de Anthropic en n8n

1. En n8n, ve a **Settings** → **Credentials** → **New Credential**
2. Busca **HTTP Header Auth**
3. Rellena:
   - **Name:** `Anthropic API Key`
   - **Name (header):** `x-api-key`
   - **Value:** `sk-ant-xxxxxxxxxxxxxxxx` ← tu clave real
4. Guarda. El nodo "Claude API (Haiku)" la referencia por nombre.

---

## PASO 3 — Activar el workflow y copiar la URL

1. Abre el workflow importado
2. Haz clic en el toggle **Inactive → Active** (arriba a la derecha)
3. Haz clic en el nodo **"Webhook entrada"**
4. Copia la **Webhook URL** de producción:
   ```
   https://TU-INSTANCIA.app.n8n.cloud/webhook/zocobot
   ```
5. Guarda esa URL — la necesitas en el paso siguiente.

---

## PASO 4 — Conectar ZocoBot.js al backend

Añade la variable de entorno al archivo `.env.local` del proyecto:

```
NEXT_PUBLIC_ZOCOBOT_WEBHOOK_URL=https://TU-INSTANCIA.app.n8n.cloud/webhook/zocobot
```

En producción (Vercel), añádela también en:
**Project Settings → Environment Variables → NEXT_PUBLIC_ZOCOBOT_WEBHOOK_URL**

El widget pasará automáticamente de modo demo a modo real.

---

## PASO 5 — Personalizar el system prompt (opcional)

En n8n → nodo **"Construir system prompt"** → edita el texto del prompt.
La versión completa está en `system-prompt-v3.js` (en esta misma carpeta).

Puedes añadir:
- Horarios de atención del equipo
- Precios actualizados
- Trámites específicos que gestionáis
- Instrucción para derivar al formulario de contacto

---

## Costes estimados (Claude Haiku)

| Uso mensual   | Coste aprox. |
|---------------|-------------|
| 100 consultas | ~0,05 €     |
| 500 consultas | ~0,25 €     |
| 2.000 consul. | ~1,00 €     |

Con el system prompt (~400 tokens) y respuestas de ~200 tokens,
cada consulta cuesta aproximadamente 0,0005 €.

---

## CORS — si ves errores de "blocked by CORS"

En el nodo **"Webhook entrada"** → campo `allowedOrigins`, comprueba que están
tus dominios exactos:
```
https://zocolegal.com,https://www.zocolegal.com
```
