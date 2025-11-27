// src/pages/api/submit.ts
import 'dotenv/config';
export const prerender = false;
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { Name, Email, Phone, Message } = await request.json();

    if (!Name || !Email || !Phone || !Message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'missing fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ✅ BREVO SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.user, // your sender email (optional)
        pass: process.env.api, // Brevo API key
      },
    });

    const formattedMessage = `
      New Contact Form Submission:
      
      Name: ${Name}
      Email: ${Email}
      Phone: ${Phone}

      Message:
      ${Message}
    `;

    await transporter.sendMail({
      from: `"sardargroup" <mdgolammuktadirasif@gmail.com>"`,   // Your verified email
      to: "faruk1978y@yahoo.com",      // Receiver
      subject: "New Contact Form Submission",
      text: formattedMessage, 
    });

    return new Response(
      JSON.stringify({ ok: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("API error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: err.message || String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
