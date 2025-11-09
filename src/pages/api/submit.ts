// src/pages/api/submit.ts
import 'dotenv/config';
export const prerender = false;
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  console.log("POST /api/submit called");

  try {
    const { Name, Email, Phone, Message } = await request.json();

    if (!Name || !Email || !Phone || !Message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'missing fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
    });

    const formattedMessage = `New Contact Form Submission:\n\nName: ${Name}\nEmail: ${Email}\nPhone: ${Phone}\n\nMessage:\n${Message}`;

    await transporter.sendMail({
      from: 'mdgolammuktadirasif@gmail.com',
      to: 'faruk1978y@yahoo.com',
      subject: 'New Contact Form Submission',
      text: formattedMessage,
    });

    return new Response(
      JSON.stringify({ ok: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error("API error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: err.message || String(err) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
