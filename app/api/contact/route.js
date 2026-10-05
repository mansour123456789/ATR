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

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const contactTo = process.env.CONTACT_TO || 'contact@atr-tunisie.org';

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json({ error: 'Le service de messagerie est momentanément indisponible. Écrivez directement à contact@atr-tunisie.org.' }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subjectLabels = {
      adhesion: 'Adhésion à l’ATR',
      partenariat: 'Partenariat / sponsoring',
      presse: 'Demande presse',
      comite: 'Comité technique',
      evenement: 'Événement',
      autre: 'Autre demande'
    };

    const formattedSubject = `[ATR Contact] ${subjectLabels[subject] || subject} - ${name}`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `Association Tunisienne des Routes <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: formattedSubject,
      text: `Nouveau message reçu depuis le formulaire de contact ATR :\n\n` +
            `Nom complet : ${name}\n` +
            `Email : ${email}\n` +
            `Téléphone : ${phone || 'Non indiqué'}\n` +
            `Objet / Catégorie : ${subjectLabels[subject] || subject}\n\n` +
            `Message :\n${message}\n\n` +
            `---\nCet email a été envoyé automatiquement depuis le site web de l'ATR.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #dfe6ee; border-radius: 10px; background-color: #ffffff;">
          <div style="background-color: #102B54; padding: 16px 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Nouveau message de contact - ATR</h2>
          </div>
          <div style="padding: 24px 20px;">
            <p style="font-size: 15px; color: #334155; margin-top: 0;">Un visiteur a soumis un message depuis le site web de l'Association Tunisienne des Routes :</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-weight: bold; width: 140px;">Nom :</td>
                <td style="padding: 8px 0; color: #102B54; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-weight: bold;">Email :</td>
                <td style="padding: 8px 0; color: #1B5299;"><a href="mailto:${email}" style="color: #1B5299; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-weight: bold;">Téléphone :</td>
                <td style="padding: 8px 0; color: #102B54;">${phone || 'Non indiqué'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-weight: bold;">Objet :</td>
                <td style="padding: 8px 0; color: #C07B1B; font-weight: bold;">${subjectLabels[subject] || subject}</td>
              </tr>
            </table>
            <div style="background-color: #F8FAFC; border-left: 4px solid #C07B1B; padding: 16px 18px; border-radius: 0 8px 8px 0; margin-top: 15px;">
              <h4 style="margin: 0 0 8px; color: #102B54; font-size: 14px; text-transform: uppercase;">Message :</h4>
              <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="border-top: 1px solid #DFE6EE; padding-top: 14px; text-align: center; color: #94A3B8; font-size: 12px;">
            Association Tunisienne des Routes • <a href="mailto:contact@atr-tunisie.org" style="color: #94A3B8;">contact@atr-tunisie.org</a>
          </div>
        </div>
      `
    });

    return NextResponse.json({ message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Une erreur est survenue pendant l’envoi. Réessayez ou écrivez à contact@atr-tunisie.org.' }, { status: 500 });
  }
}
