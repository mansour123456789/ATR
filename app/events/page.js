'use client'
import { useEffect, useState } from 'react';
import Layout from "@/components/layout/Layout"
import Testmonial from "@/components/sections/home1/Testimonial"
import Link from "next/link"

const inputStyle = {
  width: '100%', padding: '12px 16px', border: '2px solid #e8edf5', borderRadius: '10px',
  fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
};

export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Reservation Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    useEffect(() => {
        fetch('/api/events?active=true')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const openModal = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
        setMessage('');
        setError('');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormLoading(true);
        setMessage('');
        setError('');

        try {
            const res = await fetch('/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, eventId: selectedEvent.id })
            });
            const data = await res.json();
            
            if (!res.ok) {
                setError(data.error || 'Une erreur est survenue.');
            } else {
                setMessage(data.message || 'Réservation réussie !');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => closeModal(), 3000);
            }
        } catch (err) {
            setError('Une erreur est survenue lors de la réservation.');
        } finally {
            setFormLoading(false);
        }
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nos Événements">
                <div>
                    <section className="blog-page-section pt_150 pb_140 gray-bg">
                        <div className="auto-container">
                            <div className="section_heading text-center mb_60">
                                <span className="section_heading_title_small">Agenda ATR</span>
                                <h2 className="section_heading_title_big">Conférences, Congrès <br/> & Journées Techniques</h2>
                            </div>
                            
                            {loading ? (
                                <div style={{ textAlign: 'center', padding: '50px', color: '#1E4C81', fontSize: '20px', fontWeight: 'bold' }}>
                                    <i className="fas fa-spinner fa-spin"></i> Chargement des événements...
                                </div>
                            ) : events.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
                                    Aucun événement prévu pour le moment.
                                </div>
                            ) : (
                                <div className="row clearfix justify-content-center">
                                    {events.map((event, index) => (
                                        <div key={event.id} className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="blog-1-block wow fadeInLeft" data-wow-delay={`${0.2 * (index % 3 + 1)}s`} data-wow-duration=".8s">
                                                <div className="blog-1-image" style={{ height: '240px', overflow: 'hidden' }}>
                                                    <Link href={`/blog-details?id=${event.id}`}>
                                                        <img src={event.imageUrl || "/images/atr-bg-3.png"} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </Link>
                                                </div>
                                                <div className="blog-1-bottom-content mb_40" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '0 0 10px 10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                                    <h4 className="blog-1-title" style={{ minHeight: '60px' }}>
                                                        <Link href={`/blog-details?id=${event.id}`}>{event.title}</Link>
                                                    </h4>
                                                    <div className="blog-1-postmeta" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '15px' }}>
                                                        <span style={{ fontSize: '14px' }}><i className="far fa-calendar-alt c_primary"></i> {new Date(event.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                                                        <span style={{ fontSize: '14px' }}><i className="fas fa-map-marker-alt c_primary"></i> {event.location}</span>
                                                    </div>
                                                    <p className="blog-1-excerpt mt_15" style={{ flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                        {event.description}
                                                    </p>
                                                    
                                                    <div className="mt_20" style={{ display: 'flex', gap: '10px' }}>
                                                        <Link href={`/blog-details?id=${event.id}`} className="btn-1 alt" style={{ flex: 1, textAlign: 'center', padding: '10px' }}>Détails</Link>
                                                        <button onClick={() => openModal(event)} style={{ flex: 1, backgroundColor: '#F69F1A', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={e => e.target.style.backgroundColor = '#d98b15'} onMouseLeave={e => e.target.style.backgroundColor = '#F69F1A'}>
                                                            Réserver
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Newsletter */}
                    <section className="newsletter-1" style={{ position: 'relative', marginTop: '-50px', zIndex: 2 }}>
                        <div className="auto-container">
                            <div className="newsletter-1-bg" style={{ backgroundColor: '#F69F1A', borderRadius: '15px', padding: '50px' }}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <h4 className="newsletter-1-title" style={{ color: '#fff' }}>Restez informés de nos<br/> prochains événements</h4>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="newsletter-1-form">
                                            <form style={{ display: 'flex', gap: '10px' }} onSubmit={e => e.preventDefault()}>
                                                <input type="email" placeholder="Votre adresse e-mail" style={{ flex: 1, padding: '15px 25px', border: 'none', borderRadius: '30px' }} />
                                                <button type="button" className="btn-1" style={{ backgroundColor: '#1E4C81', color: '#fff', border: 'none' }}>S'abonner <span></span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <div style={{ paddingTop: '80px', backgroundColor: '#fff' }}>
                        <Testmonial />
                    </div>
                </div>
            </Layout>

            {/* RESERVATION MODAL */}
            {isModalOpen && selectedEvent && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(5px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999, padding: '20px'
                }}>
                    <div style={{
                        backgroundColor: '#fff', borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '550px',
                        position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        animation: 'fadeInUp 0.3s ease-out'
                    }}>
                        <button onClick={closeModal} style={{
                            position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none',
                            fontSize: '24px', color: '#888', cursor: 'pointer'
                        }}>×</button>

                        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <span style={{ background: '#eef2f6', color: '#1E4C81', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Formulaire de Réservation
                            </span>
                            <h3 style={{ marginTop: '15px', color: '#1E4C81', fontSize: '22px', lineHeight: 1.3 }}>{selectedEvent.title}</h3>
                            <p style={{ color: '#666', fontSize: '14px', marginTop: '10px' }}>
                                <i className="far fa-calendar-alt"></i> {new Date(selectedEvent.date).toLocaleDateString('fr-FR')} &nbsp;|&nbsp; 
                                <i className="fas fa-map-marker-alt"></i> {selectedEvent.location}
                            </p>
                        </div>

                        {message && <div style={{ background: '#dcfce7', color: '#16a34a', padding: '15px', borderRadius: '10px', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>✅ {message}</div>}
                        {error && <div style={{ background: '#fee2e2', color: '#dc2626', padding: '15px', borderRadius: '10px', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>❌ {error}</div>}

                        {!message && (
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Nom complet *</label>
                                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={inputStyle} placeholder="Votre nom complet" onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                                </div>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Email *</label>
                                        <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={inputStyle} placeholder="adresse@email.com" onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Téléphone</label>
                                        <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={inputStyle} placeholder="Votre numéro" onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Remarque ou message (optionnel)</label>
                                    <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{...inputStyle, resize: 'vertical'}} placeholder="Une question ou demande particulière ?" onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                                </div>

                                <button type="submit" disabled={formLoading} style={{
                                    width: '100%', padding: '16px', background: formLoading ? '#8baed0' : '#1E4C81', color: '#fff',
                                    border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: formLoading ? 'not-allowed' : 'pointer',
                                    boxShadow: '0 8px 20px rgba(30, 76, 129, 0.2)', transition: 'all 0.3s', marginTop: '10px'
                                }}>
                                    {formLoading ? '⏳ Envoi en cours...' : 'Envoyer la demande de réservation'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}