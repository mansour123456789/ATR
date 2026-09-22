'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Testimonial from '@/components/sections/home1/Testimonial';

const inputStyle = { width: '100%', padding: '12px 14px', border: '1px solid #d5dee8', borderRadius: '8px', fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', background: '#fbfcfd' };

function eventType(title = '') {
  const value = title.toLowerCase();
  if (value.includes('séminaire') || value.includes('congrès')) return { label: 'Séminaire / congrès', color: '#C07B1B' };
  if (value.includes('atelier') || value.includes('journée') || value.includes('formation')) return { label: 'Atelier technique', color: '#2E8B57' };
  return { label: 'Événement ATR', color: '#1B5299' };
}

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    fetch('/api/events?active=true').then((response) => response.json()).then((data) => setEvents(Array.isArray(data) ? data : [])).catch(() => setEvents([])).finally(() => setLoading(false));
  }, []);

  const openModal = (event) => { setSelectedEvent(event); setIsModalOpen(true); setMessage(''); setError(''); setFormData({ name: '', email: '', phone: '', message: '' }); };
  const closeModal = () => { setIsModalOpen(false); setSelectedEvent(null); };

  async function handleSubmit(event) {
    event.preventDefault(); setFormLoading(true); setMessage(''); setError('');
    try {
      const response = await fetch('/api/reservations', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, eventId: selectedEvent.id }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Une erreur est survenue.');
      setMessage(data.message || 'Votre demande a bien été enregistrée.'); setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (submitError) { setError(submitError.message); } finally { setFormLoading(false); }
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nos Événements">
      <main className="atr-events-page">
        <style dangerouslySetInnerHTML={{ __html: `
          .atr-events-page{background:#f5f7fa;color:#17233d;padding-bottom:90px}.atr-events-hero{padding:78px 0 62px;background:#fff}.atr-events-hero h1{color:#102b54;font-size:44px;line-height:1.15;margin:8px 0 14px}.atr-events-hero p{max-width:700px;color:#536175;font-size:18px;line-height:1.7}.atr-events-hero .section_heading_title_small,.atr-events-section .section_heading_title_small{color:#C07B1B;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.atr-events-section{padding:70px 0 52px;border-top:1px solid rgba(192,123,27,.3)}.atr-events-section h2{color:#102b54;font-size:34px;margin:8px 0 10px}.atr-events-intro{color:#68778c;line-height:1.7;margin-bottom:30px}.atr-events-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.atr-event-card{display:flex;flex-direction:column;overflow:hidden;background:#fff;border:1px solid #dfe6ee;border-radius:14px;box-shadow:0 10px 28px rgba(16,43,84,.07);transition:transform .2s,box-shadow .2s}.atr-event-card:hover{transform:translateY(-5px);box-shadow:0 18px 35px rgba(16,43,84,.14)}.atr-event-image{height:220px;overflow:hidden;background:#e9eef3}.atr-event-image img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .35s}.atr-event-card:hover .atr-event-image img{transform:scale(1.04)}.atr-event-body{display:flex;flex:1;flex-direction:column;padding:24px}.atr-event-badge{align-self:flex-start;padding:5px 9px;border-radius:999px;color:#fff;font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase}.atr-event-title{color:#102b54;font-size:22px;line-height:1.3;margin:15px 0 11px}.atr-event-meta{display:grid;gap:7px;color:#68778c;font-size:13px;line-height:1.5;padding-bottom:16px;border-bottom:1px solid #e5ebf1}.atr-event-description{color:#536175;font-size:14px;line-height:1.65;margin:16px 0 20px}.atr-event-actions{display:flex;gap:10px;margin-top:auto}.atr-event-actions a,.atr-event-actions button{flex:1;padding:11px 10px;border-radius:7px;text-align:center;font:inherit;font-size:13px;font-weight:800;text-decoration:none;cursor:pointer}.atr-event-details{border:1px solid #1B5299;background:#fff;color:#174f86}.atr-event-reserve{border:0;background:#1B5299;color:#fff}.atr-event-reserve:hover{background:#C07B1B}.atr-events-empty{padding:38px;background:#fff;border:1px solid #dfe6ee;border-radius:12px;color:#536175}.atr-events-cta{margin-top:35px;padding:42px;background:#102b54;border-radius:14px;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:25px}.atr-events-cta h2{color:#fff;font-size:27px;margin:0 0 8px}.atr-events-cta p{color:#d5dfeb;margin:0;line-height:1.6}.atr-events-cta a{padding:12px 18px;background:#C07B1B;color:#fff;border-radius:7px;text-decoration:none;font-weight:800;white-space:nowrap}.atr-events-modal{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:20px;background:rgba(10,27,50,.7)}.atr-events-modal-card{position:relative;width:100%;max-width:570px;max-height:90vh;overflow:auto;padding:34px;background:#fff;border-radius:16px;box-shadow:0 25px 60px rgba(0,0,0,.25)}.atr-events-modal-close{position:absolute;right:15px;top:10px;border:0;background:none;color:#68778c;font-size:26px;cursor:pointer}.atr-events-modal-card h2{color:#102b54;font-size:25px;line-height:1.3;margin:15px 0 8px}.atr-events-modal-card>p{color:#68778c;font-size:14px;line-height:1.6}.atr-events-form{display:grid;gap:15px;margin-top:22px}.atr-events-form label{display:grid;gap:7px;color:#304766;font-size:13px;font-weight:800}.atr-events-form button{padding:14px;border:0;border-radius:8px;background:#1B5299;color:#fff;font:inherit;font-weight:800;cursor:pointer}.atr-events-form button:disabled{opacity:.65;cursor:wait}.atr-events-message{padding:12px;border-radius:7px;background:#e9f7ef;color:#18794e;font-size:14px}.atr-events-error{padding:12px;border-radius:7px;background:#fff0ef;color:#b42318;font-size:14px}@media(max-width:991px){.atr-events-grid{grid-template-columns:1fr 1fr}}@media(max-width:767px){.atr-events-hero{padding:52px 0 38px}.atr-events-hero h1{font-size:34px}.atr-events-section{padding:48px 0 35px}.atr-events-grid{grid-template-columns:1fr}.atr-event-image{height:230px}.atr-events-cta{display:block;padding:28px}.atr-events-cta a{display:inline-block;margin-top:18px}}
        `}} />
        <section className="atr-events-hero"><div className="auto-container"><p className="section_heading_title_small">Agenda ATR</p><h1>Conférences, congrès et journées techniques</h1><p>Retrouvez les rendez-vous professionnels de l'Association Tunisienne des Routes : dates, lieux, sujets et modalités de réservation, dans une présentation claire et adaptée aux membres.</p></div></section>
        <section className="atr-events-section"><div className="auto-container"><p className="section_heading_title_small">Programme</p><h2>Événements à venir</h2><p className="atr-events-intro">Les événements actifs sont chargés depuis l'agenda de l'ATR. Chaque fiche présente les informations disponibles avant toute réservation.</p>{loading ? <div className="atr-events-empty">Chargement des événements…</div> : events.length === 0 ? <div className="atr-events-empty">Aucun événement n'est actuellement publié. Consultez le calendrier pour les prochaines mises à jour.</div> : <div className="atr-events-grid">{events.map((event) => { const type = eventType(event.title); return <article className="atr-event-card" key={event.id}><div className="atr-event-image"><Link href={`/blog-details?id=${event.id}`}><img src={event.imageUrl || '/images/atr-bg-3.png'} alt={event.title} /></Link></div><div className="atr-event-body"><span className="atr-event-badge" style={{ background: type.color }}>{type.label}</span><h3 className="atr-event-title">{event.title}</h3><div className="atr-event-meta"><span>◷ {new Date(event.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })} · {new Date(event.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span><span>⌖ {event.location}</span></div><p className="atr-event-description">{event.description}</p><div className="atr-event-actions"><Link href={`/blog-details?id=${event.id}`} className="atr-event-details">Détails</Link><button className="atr-event-reserve" onClick={() => openModal(event)}>Réserver</button></div></div></article>; })}</div>}<div className="atr-events-cta"><div><h2>Participer aux échanges de l'ATR</h2><p>Les événements et comités techniques permettent aux professionnels de partager leurs pratiques.</p></div><Link href="/contact">Devenir membre →</Link></div></div></section><section style={{ background: '#fff', padding: '35px 0 0' }}><Testimonial /></section>
      </main>
      {isModalOpen && selectedEvent && <div className="atr-events-modal" onClick={(event) => event.target === event.currentTarget && closeModal()}><div className="atr-events-modal-card"><button className="atr-events-modal-close" onClick={closeModal} aria-label="Fermer">×</button><span className="atr-event-badge" style={{ background: eventType(selectedEvent.title).color }}>{eventType(selectedEvent.title).label}</span><h2>{selectedEvent.title}</h2><p>{new Date(selectedEvent.date).toLocaleDateString('fr-FR')} · {selectedEvent.location}</p>{message && <div className="atr-events-message">{message}</div>}{error && <div className="atr-events-error">{error}</div>}{!message && <form className="atr-events-form" onSubmit={handleSubmit}><label>Nom complet *<input required type="text" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} style={inputStyle} /></label><label>Email *<input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} style={inputStyle} /></label><label>Téléphone<input type="tel" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} style={inputStyle} /></label><label>Message<textarea rows={3} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} style={{ ...inputStyle, resize: 'vertical' }} /></label><button type="submit" disabled={formLoading}>{formLoading ? 'Envoi en cours…' : 'Envoyer la demande de réservation'}</button></form>}</div></div>}
    </Layout>
  );
}
