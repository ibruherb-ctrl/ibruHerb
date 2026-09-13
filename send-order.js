// /api/send-order.js
// Runs on the server (Vercel serverless function) — NEVER shipped to the browser.
// Reads the Telegram bot secret from environment variables and forwards the
// order message. The frontend never sees TG_BOT_TOKEN or TG_CHAT_ID.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { text } = req.body || {};
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ ok: false, error: 'Missing order text' });
  }

  const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
  const TG_CHAT_ID = process.env.TG_CHAT_ID;

  if (!TG_BOT_TOKEN || !TG_CHAT_ID) {
    console.error('Telegram env vars not configured (TG_BOT_TOKEN / TG_CHAT_ID missing)');
    return res.status(500).json({ ok: false, error: 'Server not configured' });
  }

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT_ID, text })
    });
    const data = await tgRes.json();

    if (!data.ok) {
      console.error('Telegram API error:', data);
      return res.status(502).json({ ok: false, error: data.description || 'Telegram send failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Order send error:', err);
    return res.status(500).json({ ok: false, error: 'Internal error' });
  }
}
