import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message, consent } = await request.json();
    if (!name?.trim() || !email?.trim() || !subject || !message?.trim() || !consent) {
      return NextResponse.json({ error: 'Veuillez compléter les champs obligatoires et accepter le consentement.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 });
    }
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      return NextResponse.json({ error: 'Le service de messagerie est momentanément indisponible. Écrivez directement à contact@atr.org.tn.' }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    });
    const subjectLabels = { adhesion: 'Adhésion à l’ATR', partenariat: 'Partenariat / sponsoring', presse: 'Demande presse', comite: 'Comité technique', evenement: 'Événement', autre: 'Autre demande' };
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || 'contact@atr.org.tn',
      replyTo: email,
      subject: `[ATR] ${subjectLabels[subject] || subject}`,
      text: `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone || 'Non indiqué'}\nSujet : ${subjectLabels[subject] || subject}\n\n${message}`,
    });
    return NextResponse.json({ message: 'Message envoyé.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Une erreur est survenue pendant l’envoi. Réessayez ou écrivez à contact@atr.org.tn.' }, { status: 500 });
  }
}
