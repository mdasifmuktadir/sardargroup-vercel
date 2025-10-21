// src/pages/api/submit.ts
import 'dotenv/config';
export const prerender = false;
import type { APIRoute } from 'astro';
import crypto from 'crypto';

const APPSCRIPT_URL = process.env.APPSCRIPT_URL!;
// const SECRET = process.env.API_SECRET!;


console.log(process.env.API_SECRET)

// function hmacHex(secret: string, data: string) {
//   return crypto.createHmac('sha256', secret).update(data).digest('hex');
// }

export const POST: APIRoute = async ({ request }) => {
  console.log("POST /api/submit called");

  try {
    const payload = await request.json();

    if (!payload.Name || !payload.Email || !payload.Message || !payload.Phone) {
      return new Response(
        JSON.stringify({ ok: false, error: 'missing fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const payloadString = JSON.stringify(payload);
  

    

    const resp = await fetch(APPSCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payloadString,
    });

    // Try to parse the response safely
    let result: any;
    try {
      result = await resp.json();
    } catch {
      // If Apps Script returns non-JSON, wrap it safely
      const text = await resp.text();
      result = { ok: resp.ok, message: text };
    }

    return new Response(
      JSON.stringify(result),
      {
        status: resp.status,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err: any) {
    console.error("API error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: err.message || String(err) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
