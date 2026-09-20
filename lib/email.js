import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendReservationConfirmation({ to, name, eventTitle, eventDate, eventLocation }) {
  const formattedDate = new Date(eventDate).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmation de Réservation - ATR</title>
    </head>
    <body style="margin:0;padding:0;background-color:#f4f6f9;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
              
              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#1E4C81,#2a6ab5);padding:40px 40px 30px;text-align:center;">
                  <div style="background:#ffffff;display:inline-block;padding:12px 24px;border-radius:8px;margin-bottom:20px;">
                    <span style="font-size:22px;font-weight:bold;color:#1E4C81;">ATR</span>
                    <span style="font-size:12px;color:#888;display:block;">Association Tunisienne des Routes</span>
                  </div>
                  <h1 style="color:#ffffff;margin:0;font-size:26px;font-weight:700;">✅ Réservation Confirmée !</h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px;">
                  <p style="color:#444;font-size:16px;margin-top:0;">Bonjour <strong>${name}</strong>,</p>
                  <p style="color:#444;font-size:15px;line-height:1.7;">
                    Nous avons le plaisir de vous confirmer votre inscription à l'événement suivant organisé par l'<strong>Association Tunisienne des Routes (ATR)</strong>.
                  </p>
                  
                  <!-- Event Card -->
                  <div style="background:#f0f5fc;border-left:4px solid #F69F1A;border-radius:8px;padding:24px;margin:28px 0;">
                    <h2 style="color:#1E4C81;margin:0 0 16px 0;font-size:20px;">${eventTitle}</h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;">
                          <span style="color:#F69F1A;font-size:16px;margin-right:10px;">📅</span>
                          <span style="color:#555;font-size:14px;">${formattedDate}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <span style="color:#F69F1A;font-size:16px;margin-right:10px;">📍</span>
                          <span style="color:#555;font-size:14px;">${eventLocation}</span>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <p style="color:#444;font-size:15px;line-height:1.7;">
                    Nous vous invitons à être présent(e) à l'heure indiquée. Pour toute question, n'hésitez pas à nous contacter.
                  </p>

                  <!-- CTA Button -->
                  <div style="text-align:center;margin:32px 0;">
                    <a href="http://localhost:3333/events" 
                       style="background:#F69F1A;color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-size:15px;font-weight:bold;display:inline-block;">
                      Voir tous nos événements
                    </a>
                  </div>

                  <p style="color:#888;font-size:13px;border-top:1px solid #eee;padding-top:20px;margin-bottom:0;">
                    Cordialement,<br>
                    <strong style="color:#1E4C81;">L'équipe de l'Association Tunisienne des Routes</strong><br>
                    <span>📧 contact@atr.org.tn &nbsp;|&nbsp; 📞 +216 71 234 567</span>
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#1E4C81;padding:16px 40px;text-align:center;">
                  <p style="color:rgba(255,255,255,0.6);font-size:12px;margin:0;">
                    © 2026 Association Tunisienne des Routes. Tous droits réservés.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"ATR - Association Tunisienne des Routes" <${process.env.SMTP_USER}>`,
      to,
      subject: `✅ Confirmation de votre inscription - ${eventTitle}`,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
}
