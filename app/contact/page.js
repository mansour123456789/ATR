'use client'
import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '', consent: false };

function ContactIcon({ type }) {
  const paths = {
    phone: <><path d="M6.6 3.5 9 3l2 4.7-1.8 1.5a14.7 14.7 0 0 0 5.6 5.6l1.5-1.8L21 15l-.5 2.4a2 2 0 0 1-2.1 1.6A16 16 0 0 1 5 5.6a2 2 0 0 1 1.6-2.1Z" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = t('contact.err_name', 'Indiquez votre nom complet.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = t('contact.err_email', 'Indiquez une adresse email valide.');
    if (!form.subject) nextErrors.subject = t('contact.err_subject', 'Sélectionnez le sujet de votre demande.');
    if (!form.message.trim()) nextErrors.message = t('contact.err_message', 'Veuillez saisir votre message.');
    if (!form.consent) nextErrors.consent = t('contact.err_consent', 'Votre consentement est nécessaire pour traiter la demande.');
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || t('contact.msg_error', 'Impossible d’envoyer votre message.'));
      setForm(initialForm);
      setErrors({});
      setStatus({ type: 'success', message: t('contact.msg_success', 'Votre message a bien été envoyé. Nous vous répondrons sous 48h ouvrées.') });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (field) => `atr-contact-field${errors[field] ? ' has-error' : ''}`;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.contact', "Contactez-nous")}>
      <main className="atr-contact-page">
        <style dangerouslySetInnerHTML={{ __html: `
          .atr-contact-page{background:#F8FAFC;color:#17233D;padding-bottom:85px}
          .atr-contact-page .auto-container{max-width:1180px}
          .atr-contact-intro{padding:80px 0 45px}
          .atr-contact-intro h1{color:#102B54;font-size:clamp(32px,4.5vw,42px);margin:8px 0 16px;font-weight:700;line-height:1.2}
          .atr-contact-intro p{color:#334155;max-width:720px;font-size:17px;line-height:1.72}
          .atr-contact-info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:44px}
          .atr-contact-info-card{padding:28px 26px;background:#FFFFFF;border:1px solid #DFE6EE;border-radius:16px;box-shadow:0 10px 28px rgba(16,43,84,.06);transition:transform .25s ease,box-shadow .25s ease}
          .atr-contact-info-card:hover{transform:translateY(-4px);box-shadow:0 18px 36px rgba(16,43,84,.12)}
          .atr-contact-icon{display:grid;place-items:center;width:48px;height:48px;background:#EEF5FB;border-radius:12px;color:#1B5299;margin-bottom:18px}
          .atr-contact-icon svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
          .atr-contact-info-card h2{color:#102B54;font-size:20px;margin:0 0 10px;font-weight:700}
          .atr-contact-info-card p,.atr-contact-info-card a{color:#334155;font-size:15px;line-height:1.68;margin:0;text-decoration:none}
          .atr-contact-info-card a:hover{color:#C07B1B}
          .atr-contact-info-card small{display:block;color:#64748B;margin-top:10px;font-size:13px;font-weight:500}
          .atr-contact-main{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:30px;align-items:start}
          .atr-contact-visual{background:#FFFFFF;border-radius:18px;overflow:hidden;border:1px solid #DFE6EE;box-shadow:0 12px 30px rgba(16,43,84,.07)}
          .atr-contact-visual img{display:block;width:100%;height:310px;object-fit:cover}
          .atr-contact-visual figcaption{padding:14px 18px;color:#475569;font-size:13.5px;line-height:1.55}
          .atr-contact-hours{padding:26px;background:#102B54;color:#FFFFFF;border-radius:0 0 18px 18px}
          .atr-contact-hours h2{font-size:20px;margin:0 0 12px;color:#FFFFFF;font-weight:700}
          .atr-contact-hours p{color:#E2E8F0;line-height:1.7;margin:0;font-size:14.5px}
          .atr-contact-form-card{padding:36px;background:#FFFFFF;border:1px solid #DFE6EE;border-radius:18px;box-shadow:0 12px 30px rgba(16,43,84,.07)}
          .atr-contact-form-card h2{color:#102B54;font-size:26px;margin:0 0 8px;font-weight:700}
          .atr-contact-form-card>p{color:#475569;margin:0 0 24px;line-height:1.65;font-size:15px}
          .atr-contact-form{display:grid;grid-template-columns:1fr 1fr;gap:18px}
          .atr-contact-field{display:flex;flex-direction:column;gap:7px}
          .atr-contact-field.full{grid-column:1/-1}
          .atr-contact-field label{color:#102B54;font-size:13.5px;font-weight:700}
          .atr-contact-field input,.atr-contact-field select,.atr-contact-field textarea{width:100%;border:1px solid #D5DEE8;border-radius:10px;background:#FBFCFD;padding:12px 16px;color:#102B54;font:inherit;font-size:14.5px;box-sizing:border-box;outline:none;transition:border-color .2s,box-shadow .2s}
          .atr-contact-field input,.atr-contact-field select{height:48px}
          .atr-contact-field textarea{min-height:125px;resize:vertical}
          .atr-contact-field input:focus,.atr-contact-field select:focus,.atr-contact-field textarea:focus{border-color:#C07B1B;box-shadow:0 0 0 3px rgba(192,123,27,.15);background:#FFFFFF}
          .atr-contact-field.has-error input,.atr-contact-field.has-error select,.atr-contact-field.has-error textarea{border-color:#C0392B}
          .atr-contact-error{color:#B42318;font-size:12.5px;font-weight:600}
          .atr-contact-form>.atr-contact-error{grid-column:1/-1;margin-top:-10px}
          .atr-contact-consent{display:flex;flex-direction:row;align-items:flex-start;gap:10px;grid-column:1/-1;color:#334155;font-size:13.5px;line-height:1.5}
          .atr-contact-consent input{accent-color:#1B5299;margin-top:3px}
          .atr-contact-submit{grid-column:1/-1;border:0;border-radius:10px;padding:14px 22px;background:#1B5299;color:#FFFFFF;font:inherit;font-weight:700;font-size:15px;cursor:pointer;transition:all .3s ease}
          .atr-contact-submit:hover{background:#C07B1B}
          .atr-contact-submit:disabled{opacity:.65;cursor:wait}
          .atr-contact-status{grid-column:1/-1;padding:14px 18px;border-radius:10px;font-size:14.5px;line-height:1.5;font-weight:600}
          .atr-contact-status.success{background:#E9F7EF;color:#18794E}
          .atr-contact-status.error{background:#FFF0EF;color:#B42318}
          .atr-contact-map{margin-top:28px;background:#FFFFFF;border:1px solid #DFE6EE;border-radius:18px;overflow:hidden}
          .atr-contact-map iframe{display:block;width:100%;height:340px;border:0}
          .atr-contact-map-footer{display:flex;justify-content:space-between;gap:18px;align-items:center;padding:18px 24px}
          .atr-contact-map-footer p{color:#334155;margin:0;font-size:14.5px}
          .atr-contact-map-footer a{color:#1B5299;font-weight:700;text-decoration:none}
          .atr-contact-map-footer a:hover{color:#C07B1B}
          @media(max-width:900px){.atr-contact-info-grid{grid-template-columns:1fr 1fr}.atr-contact-main{grid-template-columns:1fr}.atr-contact-visual img{height:260px}}
          @media(max-width:575px){.atr-contact-intro{padding:48px 0 30px}.atr-contact-intro h1{font-size:32px}.atr-contact-info-grid{grid-template-columns:1fr}.atr-contact-form-card{padding:24px 19px}.atr-contact-form{grid-template-columns:1fr}.atr-contact-field.full,.atr-contact-consent,.atr-contact-submit{grid-column:auto}.atr-contact-map-footer{display:block}.atr-contact-map-footer a{display:inline-block;margin-top:10px}}
        `}} />
        <div className="auto-container">
          <section className="atr-contact-intro">
            <p className="section_heading_title_small">{t('contact.kicker', "Secrétariat ATR")}</p>
            <h1>{t('contact.title', "Contactez-nous")}</h1>
            <p>{t('contact.intro', "Pour une adhésion, un partenariat ou une demande presse, adressez votre message au bon interlocuteur. Nous répondons habituellement sous 48h ouvrées.")}</p>
          </section>

          <section className="atr-contact-info-grid" aria-label="Coordonnées de l'ATR">
            <article className="atr-contact-info-card">
              <div className="atr-contact-icon"><ContactIcon type="phone" /></div>
              <h2>{t('contact.phone_title', "Téléphone")}</h2>
              <p>{t('contact.phone_sub', "Secrétariat")}<br /><a href="tel:+21671234567">+216 71 234 567</a></p>
              <small>{t('contact.phone_note', "Du lundi au vendredi")}</small>
            </article>

            <article className="atr-contact-info-card">
              <div className="atr-contact-icon"><ContactIcon type="email" /></div>
              <h2>{t('contact.email_title', "Email")}</h2>
              <p>{t('contact.email_general', "Demandes générales :")}<br /><a href="mailto:contact@atr-tunisie.org">contact@atr-tunisie.org</a><br />{t('contact.email_partner', "Partenariats :")} <a href="mailto:sponsoring@atr-tunisie.org">sponsoring@atr-tunisie.org</a></p>
            </article>

            <article className="atr-contact-info-card">
              <div className="atr-contact-icon"><ContactIcon type="location" /></div>
              <h2>{t('contact.address_title', "Adresse")}</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{t('contact.address_text', "Bureau 102, Imm. El Wifak,\nCentre Urbain Nord, 1082 Tunis")}</p>
              <small>{t('contact.address_note', "Accueil sur rendez-vous")}</small>
            </article>
          </section>

          <section className="atr-contact-main">
            <div>
              <figure className="atr-contact-visual">
                <img src="/images/atr-event.png" alt="Professionnels réunis lors d'une rencontre technique de l'ATR" />
                <figcaption>{t('contact.caption', "Rencontre technique de l'ATR — un cadre d'échange entre professionnels de la route.")}</figcaption>
              </figure>
              <div className="atr-contact-hours">
                <h2>{t('contact.hours_title', "Horaires du secrétariat")}</h2>
                <p>
                  {t('contact.hours_days', "Lundi – vendredi")}<br />
                  {t('contact.hours_time', "08h30 – 16h30")}<br />
                  {t('contact.hours_note', "Réponse aux demandes sous 48h ouvrées.")}
                </p>
              </div>
            </div>

            <section className="atr-contact-form-card">
              <h2>{t('contact.form_title', "Envoyez-nous un message")}</h2>
              <p>{t('contact.form_intro', "Précisez votre demande d'adhésion, de partenariat, de presse ou de participation à un comité technique.")}</p>
              <form className="atr-contact-form" onSubmit={handleSubmit} noValidate>
                <div className={fieldClass('name')}>
                  <label htmlFor="contact-name">{t('contact.label_name', "Nom complet *")}</label>
                  <input id="contact-name" value={form.name} onChange={(event) => update('name', event.target.value)} />
                  {errors.name && <span className="atr-contact-error">{errors.name}</span>}
                </div>

                <div className={fieldClass('email')}>
                  <label htmlFor="contact-email">{t('contact.label_email', "Email *")}</label>
                  <input id="contact-email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} />
                  {errors.email && <span className="atr-contact-error">{errors.email}</span>}
                </div>

                <div className="atr-contact-field">
                  <label htmlFor="contact-phone">{t('contact.label_phone', "Téléphone (optionnel)")}</label>
                  <input id="contact-phone" type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} />
                </div>

                <div className={fieldClass('subject')}>
                  <label htmlFor="contact-subject">{t('contact.label_subject', "Sujet *")}</label>
                  <select id="contact-subject" value={form.subject} onChange={(event) => update('subject', event.target.value)}>
                    <option value="">{t('contact.opt_select', "Sélectionnez un sujet")}</option>
                    <option value="adhesion">{t('contact.opt_adhesion', "Adhésion à l'ATR")}</option>
                    <option value="partenariat">{t('contact.opt_partenariat', "Partenariat / sponsoring")}</option>
                    <option value="presse">{t('contact.opt_presse', "Demande presse")}</option>
                    <option value="comite">{t('contact.opt_comite', "Comité technique")}</option>
                    <option value="evenement">{t('contact.opt_evenement', "Événement")}</option>
                    <option value="autre">{t('contact.opt_autre', "Autre demande")}</option>
                  </select>
                  {errors.subject && <span className="atr-contact-error">{errors.subject}</span>}
                </div>

                <div className={fieldClass('message') + ' full'}>
                  <label htmlFor="contact-message">{t('contact.label_message', "Message *")}</label>
                  <textarea id="contact-message" value={form.message} onChange={(event) => update('message', event.target.value)} />
                  {errors.message && <span className="atr-contact-error">{errors.message}</span>}
                </div>

                <label className="atr-contact-consent">
                  <input type="checkbox" checked={form.consent} onChange={(event) => update('consent', event.target.checked)} />
                  <span>{t('contact.consent_text', "J'accepte que mes données soient utilisées uniquement pour traiter ma demande.")}</span>
                </label>
                {errors.consent && <span className="atr-contact-error">{errors.consent}</span>}

                {status.message && <div className={`atr-contact-status ${status.type}`}>{status.message}</div>}

                <button className="atr-contact-submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.btn_sending', 'Envoi en cours…') : t('contact.btn_submit', 'Envoyer le message →')}
                </button>
              </form>
            </section>
          </section>

          <section className="atr-contact-map">
            <iframe src="https://www.google.com/maps?q=Bureau%20102%2C%20Imm.%20El%20Wifak%2C%20Centre%20Urbain%20Nord%2C%20Tunis&output=embed" title={t('contact.map_title', "Localisation du Bureau 102 de l'ATR à Tunis")} width="100%" height="450" style={{ border: 0, width: '100%', height: '450px' }} loading="lazy" />
            <div className="atr-contact-map-footer">
              <p>Bureau 102, Imm. El Wifak, Centre Urbain Nord, 1082 Tunis</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Bureau%20102%2C%20Imm.%20El%20Wifak%2C%20Centre%20Urbain%20Nord%2C%20Tunis" target="_blank" rel="noreferrer">
                {t('contact.map_open', "Ouvrir dans Google Maps ↗")}
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
