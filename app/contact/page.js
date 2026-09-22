'use client'
import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

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
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Indiquez votre nom complet.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Indiquez une adresse email valide.';
    if (!form.subject) nextErrors.subject = 'Sélectionnez le sujet de votre demande.';
    if (form.message.trim().length < 15) nextErrors.message = 'Votre message doit contenir au moins 15 caractères.';
    if (!form.consent) nextErrors.consent = 'Votre consentement est nécessaire pour traiter la demande.';
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
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Impossible d’envoyer votre message.');
      setForm(initialForm);
      setErrors({});
      setStatus({ type: 'success', message: 'Votre message a bien été envoyé. Nous vous répondrons sous 48h ouvrées.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (field) => `atr-contact-field${errors[field] ? ' has-error' : ''}`;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contactez-nous">
      <main className="atr-contact-page">
        <style dangerouslySetInnerHTML={{ __html: `
          .atr-contact-page{background:#f5f7fa;color:#17233d;padding-bottom:85px}.atr-contact-page .auto-container{max-width:1180px}.atr-contact-intro{padding:70px 0 42px}.atr-contact-intro h1{color:#102b54;font-size:43px;margin:8px 0 13px}.atr-contact-intro p{color:#536175;max-width:700px;font-size:18px;line-height:1.7}.atr-contact-info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:42px}.atr-contact-info-card{padding:27px 24px;background:#fff;border:1px solid #dfe6ee;border-radius:16px;box-shadow:0 12px 30px rgba(16,43,84,.07)}.atr-contact-icon{display:grid;place-items:center;width:48px;height:48px;background:#eef5fb;border-radius:10px;color:#1B5299;margin-bottom:18px}.atr-contact-icon svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.atr-contact-info-card h2{color:#102b54;font-size:19px;margin:0 0 9px}.atr-contact-info-card p,.atr-contact-info-card a{color:#536175;font-size:14px;line-height:1.65;margin:0;text-decoration:none}.atr-contact-info-card a:hover{color:#C07B1B}.atr-contact-info-card small{display:block;color:#8b98a8;margin-top:9px}.atr-contact-main{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:28px;align-items:start}.atr-contact-visual{background:#fff;border-radius:18px;overflow:hidden;border:1px solid #dfe6ee;box-shadow:0 12px 30px rgba(16,43,84,.07)}.atr-contact-visual img{display:block;width:100%;height:310px;object-fit:cover}.atr-contact-visual figcaption{padding:14px 18px;color:#68778c;font-size:13px;line-height:1.55}.atr-contact-hours{padding:22px;background:#102b54;color:#fff}.atr-contact-hours h2{font-size:20px;margin:0 0 12px}.atr-contact-hours p{color:#d5dfeb;line-height:1.7;margin:0}.atr-contact-form-card{padding:34px;background:#fff;border:1px solid #dfe6ee;border-radius:18px;box-shadow:0 12px 30px rgba(16,43,84,.07)}.atr-contact-form-card h2{color:#102b54;font-size:28px;margin:0 0 8px}.atr-contact-form-card>p{color:#68778c;margin:0 0 24px;line-height:1.6}.atr-contact-form{display:grid;grid-template-columns:1fr 1fr;gap:18px}.atr-contact-field{display:flex;flex-direction:column;gap:7px}.atr-contact-field.full{grid-column:1/-1}.atr-contact-field label{color:#304766;font-size:13px;font-weight:800}.atr-contact-field input,.atr-contact-field select,.atr-contact-field textarea{width:100%;border:1px solid #d5dee8;border-radius:8px;background:#fbfcfd;padding:12px 14px;color:#17233d;font:inherit;box-sizing:border-box;outline:none}.atr-contact-field input,.atr-contact-field select{height:48px}.atr-contact-field textarea{min-height:125px;resize:vertical}.atr-contact-field input:focus,.atr-contact-field select:focus,.atr-contact-field textarea:focus{border-color:#C07B1B;box-shadow:0 0 0 3px rgba(192,123,27,.15);background:#fff}.atr-contact-field.has-error input,.atr-contact-field.has-error select,.atr-contact-field.has-error textarea{border-color:#c0392b}.atr-contact-error{color:#b42318;font-size:12px}.atr-contact-form>.atr-contact-error{grid-column:1/-1;margin-top:-10px}.atr-contact-consent{display:flex;flex-direction:row;align-items:flex-start;gap:9px;grid-column:1/-1;color:#536175;font-size:13px;line-height:1.5}.atr-contact-consent input{accent-color:#1B5299;margin-top:3px}.atr-contact-submit{grid-column:1/-1;border:0;border-radius:8px;padding:14px 20px;background:#1B5299;color:#fff;font:inherit;font-weight:800;cursor:pointer}.atr-contact-submit:hover{background:#C07B1B}.atr-contact-submit:disabled{opacity:.65;cursor:wait}.atr-contact-status{grid-column:1/-1;padding:13px 15px;border-radius:8px;font-size:14px;line-height:1.5}.atr-contact-status.success{background:#e9f7ef;color:#18794e}.atr-contact-status.error{background:#fff0ef;color:#b42318}.atr-contact-map{margin-top:28px;background:#fff;border:1px solid #dfe6ee;border-radius:18px;overflow:hidden}.atr-contact-map iframe{display:block;width:100%;height:340px;border:0}.atr-contact-map-footer{display:flex;justify-content:space-between;gap:18px;align-items:center;padding:16px 20px}.atr-contact-map-footer p{color:#536175;margin:0;font-size:14px}.atr-contact-map-footer a{color:#174f86;font-weight:800;text-decoration:none}.atr-contact-map-footer a:hover{color:#C07B1B}@media(max-width:900px){.atr-contact-info-grid{grid-template-columns:1fr 1fr}.atr-contact-main{grid-template-columns:1fr}.atr-contact-visual img{height:260px}}@media(max-width:575px){.atr-contact-intro{padding:48px 0 30px}.atr-contact-intro h1{font-size:32px}.atr-contact-info-grid{grid-template-columns:1fr}.atr-contact-form-card{padding:24px 19px}.atr-contact-form{grid-template-columns:1fr}.atr-contact-field.full,.atr-contact-consent,.atr-contact-submit{grid-column:auto}.atr-contact-map-footer{display:block}.atr-contact-map-footer a{display:inline-block;margin-top:10px}}
        `}} />
        <div className="auto-container">
          <section className="atr-contact-intro"><p className="section_heading_title_small">Secrétariat ATR</p><h1>Contactez-nous</h1><p>Pour une adhésion, un partenariat ou une demande presse, adressez votre message au bon interlocuteur. Nous répondons habituellement sous 48h ouvrées.</p></section>
          <section className="atr-contact-info-grid" aria-label="Coordonnées de l'ATR">
            <article className="atr-contact-info-card"><div className="atr-contact-icon"><ContactIcon type="phone" /></div><h2>Téléphone</h2><p>Secrétariat<br /><a href="tel:+21671234567">+216 71 234 567</a></p><small>Du lundi au vendredi</small></article>
            <article className="atr-contact-info-card"><div className="atr-contact-icon"><ContactIcon type="email" /></div><h2>Email</h2><p>Demandes générales :<br /><a href="mailto:contact@atr.org.tn">contact@atr.org.tn</a><br />Partenariats : <a href="mailto:sponsoring@atr.org.tn">sponsoring@atr.org.tn</a></p></article>
            <article className="atr-contact-info-card"><div className="atr-contact-icon"><ContactIcon type="location" /></div><h2>Adresse</h2><p>Bureau 102, Imm. El Wifak,<br />Centre Urbain Nord, 1082 Tunis</p><small>Accueil sur rendez-vous</small></article>
          </section>
          <section className="atr-contact-main">
            <div><figure className="atr-contact-visual"><img src="/images/atr-event.png" alt="Professionnels réunis lors d'une rencontre technique de l'ATR" /><figcaption>Rencontre technique de l'ATR — un cadre d'échange entre professionnels de la route.</figcaption></figure><div className="atr-contact-hours"><h2>Horaires du secrétariat</h2><p>Lundi – vendredi<br />08h30 – 16h30<br />Réponse aux demandes sous 48h ouvrées.</p></div></div>
            <section className="atr-contact-form-card"><h2>Envoyez-nous un message</h2><p>Précisez votre demande d'adhésion, de partenariat, de presse ou de participation à un comité technique.</p><form className="atr-contact-form" onSubmit={handleSubmit} noValidate>
              <div className={fieldClass('name')}><label htmlFor="contact-name">Nom complet *</label><input id="contact-name" value={form.name} onChange={(event) => update('name', event.target.value)} />{errors.name && <span className="atr-contact-error">{errors.name}</span>}</div>
              <div className={fieldClass('email')}><label htmlFor="contact-email">Email *</label><input id="contact-email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} />{errors.email && <span className="atr-contact-error">{errors.email}</span>}</div>
              <div className="atr-contact-field"><label htmlFor="contact-phone">Téléphone (optionnel)</label><input id="contact-phone" type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} /></div>
              <div className={fieldClass('subject')}><label htmlFor="contact-subject">Sujet *</label><select id="contact-subject" value={form.subject} onChange={(event) => update('subject', event.target.value)}><option value="">Sélectionnez un sujet</option><option value="adhesion">Adhésion à l'ATR</option><option value="partenariat">Partenariat / sponsoring</option><option value="presse">Demande presse</option><option value="comite">Comité technique</option><option value="evenement">Événement</option><option value="autre">Autre demande</option></select>{errors.subject && <span className="atr-contact-error">{errors.subject}</span>}</div>
              <div className={fieldClass('message') + ' full'}><label htmlFor="contact-message">Message *</label><textarea id="contact-message" value={form.message} onChange={(event) => update('message', event.target.value)} />{errors.message && <span className="atr-contact-error">{errors.message}</span>}</div>
              <label className="atr-contact-consent"><input type="checkbox" checked={form.consent} onChange={(event) => update('consent', event.target.checked)} /> <span>J'accepte que mes données soient utilisées uniquement pour traiter ma demande.</span></label>{errors.consent && <span className="atr-contact-error">{errors.consent}</span>}
              {status.message && <div className={`atr-contact-status ${status.type}`}>{status.message}</div>}
              <button className="atr-contact-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Envoi en cours…' : 'Envoyer le message →'}</button>
            </form></section>
          </section>
          <section className="atr-contact-map"><iframe src="https://www.google.com/maps?q=Bureau%20102%2C%20Imm.%20El%20Wifak%2C%20Centre%20Urbain%20Nord%2C%20Tunis&output=embed" title="Localisation du Bureau 102 de l'ATR à Tunis" loading="lazy" /><div className="atr-contact-map-footer"><p>Bureau 102, Imm. El Wifak, Centre Urbain Nord, 1082 Tunis</p><a href="https://www.google.com/maps/search/?api=1&query=Bureau%20102%2C%20Imm.%20El%20Wifak%2C%20Centre%20Urbain%20Nord%2C%20Tunis" target="_blank" rel="noreferrer">Ouvrir dans Google Maps ↗</a></div></section>
        </div>
      </main>
    </Layout>
  );
}
