'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const inputStyle = {
  width: '100%', padding: '12px 16px', border: '2px solid #e8edf5', borderRadius: '10px',
  fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
};


const monthNames = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const inputStyle = {
  width: '100%', padding: '12px 16px', border: '2px solid #e8edf5', borderRadius: '10px',
  fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
};

const monthNames = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

export default function EditEvent() {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState(null);
  const [showPreview, setShowPreview] = useState(true); // Open by default

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then(r => r.json())
      .then(data => {
        const d = new Date(data.date);
        const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
        setForm({ title: data.title, description: data.description, location: data.location, date: local, capacity: data.capacity, imageUrl: data.imageUrl || '', isActive: data.isActive });
      })
      .finally(() => setFetching(false));
  }, [id]);

  function set(field, value) { setForm(prev => ({ ...prev, [field]: value })); }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch(`/api/events/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, date: new Date(form.date).toISOString() }),
    });

    const data = await res.json();
    setLoading(false);
    if (!res.ok) setError(data.error || 'Erreur lors de la mise à jour');
    else router.push('/admin/events');
  }

  if (fetching) return <div style={{ textAlign: 'center', padding: '60px', color: '#888' }}>⏳ Chargement...</div>;

  // Default values to mimic blog-details
  const defaultTitle = "Titre de l'événement";
  const defaultDesc = `Description détaillée de l'événement...`;
  const defaultLocation = "Lieu non défini";
  const defaultImage = "/images/atr-bg-3.png";
  
  const displayTitle = form.title || defaultTitle;
  const displayDesc = form.description || defaultDesc;
  const displayLocation = form.location || defaultLocation;
  const displayImage = form.imageUrl || defaultImage;

  const eventDate = form.date ? new Date(form.date) : new Date();
  const daysInMonth = new Date(eventDate.getFullYear(), eventDate.getMonth() + 1, 0).getDate();
  const dayOfMonth = eventDate.getDate();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <Link href="/admin/events" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>← Retour</Link>
        <div>
          <h1 style={{ color: '#1E4C81', fontSize: '26px', fontWeight: 800, margin: 0 }}>✏️ Modifier l'Événement</h1>
          <p style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>Mode d'édition visuelle</p>
        </div>
      </div>

      {!showPreview ? (
        <div style={{ background: '#fff', borderRadius: '16px', padding: '60px 36px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <img src="/1000007112.png" alt="ATR" style={{ height: '60px', marginBottom: '20px' }} />
          <h2 style={{ color: '#1E4C81', marginBottom: '15px' }}>Éditeur d'Événement</h2>
          <p style={{ color: '#666', marginBottom: '30px', fontSize: '16px' }}>Ouvrez l'éditeur visuel pour modifier votre événement en voyant le résultat en temps réel.</p>
          <button type="button" onClick={() => setShowPreview(true)} style={{
            padding: '16px 32px', background: '#F69F1A', color: '#fff', borderRadius: '12px',
            border: 'none', fontWeight: 700, fontSize: '16px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px',
            boxShadow: '0 10px 25px rgba(246, 159, 26, 0.3)'
          }}>
            <i className="fas fa-magic"></i> Lancer l'éditeur visuel
          </button>
        </div>
      ) : null}

      {/* MODAL DE PRÉVISUALISATION ET ÉDITION */}
      {showPreview && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center',
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{
            background: '#f4f7fb', width: '95%', height: '95%', borderRadius: '24px',
            overflowY: 'auto', position: 'relative', display: 'flex', flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '20px 30px', borderBottom: '1px solid #e1e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: '#fff', zIndex: 100, borderTopLeftRadius: '24px', borderTopRightRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <h3 style={{ margin: 0, color: '#1E4C81', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px' }}>
                <i className="fas fa-magic text-warning"></i> Éditeur Visuel d'Événement
              </h3>
              <button onClick={() => setShowPreview(false)} style={{
                background: '#f8f9fa', color: '#666', border: '1px solid #ddd', width: '40px', height: '40px',
                borderRadius: '50%', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px',
                transition: 'all 0.2s'
              }} onMouseOver={e => {e.currentTarget.style.background='#ffefef'; e.currentTarget.style.color='#e74c3c'; e.currentTarget.style.borderColor='#ffefef'}} onMouseOut={e => {e.currentTarget.style.background='#f8f9fa'; e.currentTarget.style.color='#666'; e.currentTarget.style.borderColor='#ddd'}}><i className="fas fa-times"></i></button>
            </div>

            {/* Modal Content - Live Preview (Top) */}
            <div style={{ padding: '40px 20px', flex: 1, background: '#fff' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span style={{ background: '#eef2f6', color: '#1E4C81', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>👁️ Aperçu en direct</span>
              </div>
              <section className="sidebar-page-container" style={{ padding: 0 }}>
                <div className="auto-container">
                  <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                      <div className="blog-details-content">
                        <div className="blog-1-block">
                          <div className="blog-1-image">
                            <img src={displayImage} alt="Event" style={{ width: '100%', borderRadius: '15px', objectFit: 'cover', maxHeight: '450px' }} />
                          </div>
                          <div className="blog-1-bottom-content">
                            <div className="mb_10"><span className="c_primary fw_sbold">ÉVÉNEMENT ATR</span></div>
                            <h3 className="blog-1-title" style={{fontSize: '36px'}}>{displayTitle}</h3>
                            <div className="blog-1-postmeta mt_10 mb_20">
                              <i className="fas fa-map-marker-alt"></i> {displayLocation} &nbsp;|&nbsp;
                              <i className="fas fa-calendar-alt"></i> {eventDate.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute:'2-digit' })}
                            </div>
                            
                            <p className="blog-1-excerpt" style={{ whiteSpace: 'pre-wrap' }}>
                              {displayDesc}
                            </p>
                            
                            <blockquote style={{backgroundColor: '#1E4C81', color: 'white', marginTop: '30px'}}>
                              <p className="c_light">"Des experts nationaux et internationaux, des conférences techniques, des études de cas, des retours d'expérience et une table ronde seront au rendez-vous."</p>
                              <h4 className="c_light mt_10">{eventDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} - {displayLocation}</h4>
                            </blockquote>
                          </div>
                        </div>

                        {/* PHASE 2 */}
                        <div className="content-one">
                            <h2>Une occasion unique d'échanger autour :</h2>
                            <ul className="list-item clearfix mt_20">
                                <li>Des risques géotechniques</li>
                                <li>Des techniques de stabilisation</li>
                                <li>Du monitoring des versants</li>
                                <li>Des solutions innovantes pour des infrastructures plus résilientes</li>
                            </ul>
                            <div className="image-box">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure className="image"><img src="/images/road-feature-1.png" alt="Travaux" style={{borderRadius: '10px'}} /></figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure className="image"><img src="/images/road-feature-2.png" alt="Route" style={{borderRadius: '10px'}} /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PHASE 3 */}
                        <div className="content-two mb_50 mt_50">
                            <h2>Partenaires de l'Événement</h2>
                            <p>Cet événement est co-organisé par l'Association Tunisienne des Routes (ATR), le Ministère de l'Équipement et de l'Habitat, et l'Association Tunisienne de Mécanique des Sols et des Travaux de Fondations. Ne manquez pas ce rendez-vous incontournable pour les ingénieurs et professionnels du domaine.</p>
                            <ul className="tags-list pt_30 clearfix">
                                <li><Link href="#" onClick={e => e.preventDefault()}>#ATR</Link></li>
                                <li><Link href="#" onClick={e => e.preventDefault()}>#ATMS</Link></li>
                                <li><Link href="#" onClick={e => e.preventDefault()}>#Geotechnique</Link></li>
                                <li><Link href="#" onClick={e => e.preventDefault()}>#GlissementsDeTerrain</Link></li>
                            </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                      <div className="blog-sidebar ml_40">
                        {/* Fake Search */}
                        <div className="sidebar-widget search-widget">
                            <div className="widget-title"><h3>Recherche</h3></div>
                            <div className="search-form">
                                <div className="form-group">
                                    <input type="search" placeholder="Rechercher..." disabled style={{background: '#f8f8f8'}} />
                                    <button type="button" disabled><i className="icon-37"></i></button>
                                </div>
                            </div>
                        </div>

                        {/* Event Calendar Widget */}
                        <div className="calendar" style={{ marginTop: '40px' }}>
                          <div className="title"><span>Calendrier</span></div>
                          <div className="header">
                            <button type="button" disabled>&lt;</button>
                            <div>{monthNames[eventDate.getMonth()]} {eventDate.getFullYear()}</div>
                            <button type="button" disabled>&gt;</button>
                          </div>
                          <div className="days">
                            {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day => (
                              <div key={day}>{day}</div>
                            ))}
                          </div>
                          <div className="dates">
                            {[...Array(daysInMonth).keys()].map(day => {
                              const isEventDay = (day + 1 === dayOfMonth);
                              return (
                                <div key={day + 1} style={isEventDay ? {background: '#F69F1A', color: 'white', borderRadius: '50%'} : {}}>
                                  {day + 1}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        
                        <div className="sidebar-widget tags-widget mt_50">
                            <div className="widget-title"><h3>Tags</h3></div>
                            <div className="widget-content">
                                <ul className="tags-list clearfix">
                                    <li><Link href="#" onClick={e => e.preventDefault()}>#ATR</Link></li>
                                    <li><Link href="#" onClick={e => e.preventDefault()}>#Événement</Link></li>
                                    <li><Link href="#" onClick={e => e.preventDefault()}>#Infrastructure</Link></li>
                                </ul>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Formulario (Bottom) */}
            <div style={{ background: '#f8fafc', borderTop: '2px solid #e1e8f0', padding: '40px' }}>
              <div className="auto-container" style={{ maxWidth: '900px' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <span style={{ background: '#F69F1A', color: '#fff', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>✍️ Zone d'édition</span>
                  <h3 style={{ marginTop: '15px', color: '#1E4C81' }}>Modifiez les informations ci-dessous</h3>
                </div>
                
                {error && (
                  <div style={{ background: '#fff0f0', border: '1px solid #ffc9c9', borderRadius: '8px', padding: '12px 16px', color: '#c92a2a', fontSize: '14px', marginBottom: '20px' }}>
                    ⚠️ {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'grid', gap: '24px' }}>
                    <div>
                      <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Titre de l'événement *</label>
                      <input value={form.title} onChange={e => set('title', e.target.value)} required style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Description détaillée *</label>
                      <textarea value={form.description} onChange={e => set('description', e.target.value)} required rows={6}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Lieu *</label>
                        <input value={form.location} onChange={e => set('location', e.target.value)} required style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Capacité de la salle *</label>
                        <input type="number" value={form.capacity} onChange={e => set('capacity', e.target.value)} required min={1} style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Date et heure *</label>
                        <input type="datetime-local" value={form.date} onChange={e => set('date', e.target.value)} required style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>URL de l'image</label>
                        <input value={form.imageUrl} onChange={e => set('imageUrl', e.target.value)} style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#f8f9fb', borderRadius: '12px', border: '1px solid #e1e8f0' }}>
                      <input type="checkbox" id="isActive" checked={form.isActive} onChange={e => set('isActive', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: '#1E4C81' }} />
                      <label htmlFor="isActive" style={{ color: '#444', fontWeight: 600, fontSize: '15px', cursor: 'pointer', margin: 0 }}>Événement actif (visible sur le site)</label>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', paddingTop: '16px', borderTop: '1px solid #eee', marginTop: '10px' }}>
                      <button type="submit" disabled={loading} style={{
                        flex: 1, padding: '16px', background: loading ? '#8baed0' : '#1B5299', color: '#fff',
                        border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                        boxShadow: '0 8px 20px rgba(27, 82, 153, 0.2)', transition: 'all 0.3s'
                      }}>
                        {loading ? '⏳ Enregistrement...' : '💾 Enregistrer les modifications'}
                      </button>
                      <button type="button" onClick={() => setShowPreview(false)} style={{
                        padding: '16px 32px', background: '#f1f5f9', color: '#475569', borderRadius: '12px', border: '1px solid #cbd5e1',
                        fontWeight: 600, fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s'
                      }}>Fermer l'éditeur</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
