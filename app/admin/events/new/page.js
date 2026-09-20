'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const inputStyle = {
  width: '100%', padding: '12px 16px', border: '2px solid #e8edf5', borderRadius: '10px',
  fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
};

const monthNames = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

export default function NewEvent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPreview, setShowPreview] = useState(true); // Open by default or make the user click it
  
  const [form, setForm] = useState({
    title: '', description: '', location: '', date: '', capacity: 100, imageUrl: '',
    quote: '', topics: '', partners: '', tags: '',
  });

  function set(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || 'Erreur lors de la création');
    } else {
      router.push('/admin/events');
    }
  }

  // Default values to mimic blog-details
  const defaultTitle = "GLISSEMENTS DE TERRAIN : GESTION DES RISQUES ET STABILITÉ DES OUVRAGES";
  const defaultDesc = `À l'ère d'intensification de l'effet des changements climatiques, des épisodes pluvieux extrêmes, de l'urbanisation croissante et de la complexité géotechnique de certains sites, les glissements de terrain représentent aujourd'hui un défi majeur pour la sécurité des populations et la résilience des infrastructures.\n\nCes phénomènes engendrent des risques humains, techniques et économiques importants, nécessitant des approches innovantes en matière de prévention, de surveillance et de stabilisation des ouvrages.`;
  const defaultLocation = "Hôtel Mouradi Gammarth, Tunis";
  const defaultImage = "/images/atr-bg-3.png";
  const defaultQuote = "Des experts nationaux et internationaux, des conférences techniques, des études de cas, des retours d'expérience et une table ronde seront au rendez-vous.";
  const defaultTopics = `Des risques géotechniques\nDes techniques de stabilisation\nDu monitoring des versants\nDes solutions innovantes pour des infrastructures plus résilientes`;
  const defaultPartners = "Cet événement est co-organisé par l'Association Tunisienne des Routes (ATR), le Ministère de l'Équipement et de l'Habitat, et l'Association Tunisienne de Mécanique des Sols et des Travaux de Fondations. Ne manquez pas ce rendez-vous incontournable pour les ingénieurs et professionnels du domaine.";
  const defaultTags = "#ATR #ATMS #Geotechnique #GlissementsDeTerrain";

  const displayTitle = form.title || defaultTitle;
  const displayDesc = form.description || defaultDesc;
  const displayLocation = form.location || defaultLocation;
  const displayImage = form.imageUrl || defaultImage;
  const displayQuote = form.quote || defaultQuote;
  const displayTopics = (form.topics || defaultTopics).split('\n').filter(t => t.trim());
  const displayPartners = form.partners || defaultPartners;
  const displayTags = (form.tags || defaultTags).split(/[\s,]+/).filter(t => t.startsWith('#'));

  const eventDate = form.date ? new Date(form.date) : new Date(2026, 5, 3);
  const daysInMonth = new Date(eventDate.getFullYear(), eventDate.getMonth() + 1, 0).getDate();
  const dayOfMonth = eventDate.getDate();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <Link href="/admin/events" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>← Retour</Link>
        <div>
          <h1 style={{ color: '#1E4C81', fontSize: '26px', fontWeight: 800, margin: 0 }}>➕ Nouvel Événement</h1>
          <p style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>Mode d'édition visuelle</p>
        </div>
      </div>

      {!showPreview ? (
        <div style={{ background: '#fff', borderRadius: '16px', padding: '60px 36px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <img src="/1000007112.png" alt="ATR" style={{ height: '60px', marginBottom: '20px' }} />
          <h2 style={{ color: '#1E4C81', marginBottom: '15px' }}>Éditeur d'Événement</h2>
          <p style={{ color: '#666', marginBottom: '30px', fontSize: '16px' }}>Ouvrez l'éditeur visuel pour créer votre événement en voyant le résultat en temps réel.</p>
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
                              <p className="c_light">"{displayQuote}"</p>
                              <h4 className="c_light mt_10">{eventDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} - {displayLocation}</h4>
                            </blockquote>
                          </div>
                        </div>

                        {/* PHASE 2 */}
                        <div className="content-one">
                            <h2>Une occasion unique d'échanger autour :</h2>
                            <ul className="list-item clearfix mt_20">
                                {displayTopics.map((topic, i) => <li key={i}>{topic}</li>)}
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
                            <p>{displayPartners}</p>
                            <ul className="tags-list pt_30 clearfix">
                                {displayTags.map((tag, i) => <li key={i}><Link href="#" onClick={e => e.preventDefault()}>{tag}</Link></li>)}
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
                        placeholder={defaultTitle}
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Description détaillée *</label>
                      <textarea value={form.description} onChange={e => set('description', e.target.value)} required rows={6}
                        style={{ ...inputStyle, resize: 'vertical' }} placeholder="Saisissez la description de l'événement ici..."
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Lieu *</label>
                        <input value={form.location} onChange={e => set('location', e.target.value)} required style={inputStyle}
                          placeholder={defaultLocation}
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
                        <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>URL de l'image (optionnel)</label>
                        <input value={form.imageUrl} onChange={e => set('imageUrl', e.target.value)} style={inputStyle}
                          placeholder={defaultImage}
                          onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                      </div>
                    </div>

                    {/* ── SEPARATOR ── */}
                    <div style={{ borderTop: '2px dashed #e1e8f0', paddingTop: '24px', marginTop: '8px' }}>
                      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <span style={{ background: '#eef2f6', color: '#1E4C81', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>📝 Contenu détaillé (Phases 1 → 3)</span>
                      </div>
                    </div>

                    {/* PHASE 1 — Citation */}
                    <div>
                      <label style={{ display: 'block', color: '#1E4C81', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>💬 Phase 1 — Citation (encadré bleu)</label>
                      <p style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>Cette phrase apparaît dans l'encadré bleu sous la description principale.</p>
                      <textarea value={form.quote} onChange={e => set('quote', e.target.value)} rows={3}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        placeholder={defaultQuote}
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>

                    {/* PHASE 2 — Topics */}
                    <div>
                      <label style={{ display: 'block', color: '#1E4C81', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>📋 Phase 2 — Sujets de discussion (liste)</label>
                      <p style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>Saisir un sujet par ligne. Chaque ligne = un élément de la liste.</p>
                      <textarea value={form.topics} onChange={e => set('topics', e.target.value)} rows={5}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        placeholder={defaultTopics}
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>

                    {/* PHASE 3 — Partners */}
                    <div>
                      <label style={{ display: 'block', color: '#1E4C81', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>🤝 Phase 3 — Texte des partenaires</label>
                      <textarea value={form.partners} onChange={e => set('partners', e.target.value)} rows={3}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        placeholder={defaultPartners}
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>

                    {/* PHASE 3 — Tags */}
                    <div>
                      <label style={{ display: 'block', color: '#1E4C81', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>🏷️ Tags (séparés par des espaces)</label>
                      <input value={form.tags} onChange={e => set('tags', e.target.value)} style={inputStyle}
                        placeholder="#ATR #ATMS #Geotechnique #GlissementsDeTerrain"
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>

                    <div style={{ display: 'flex', gap: '16px', paddingTop: '16px', borderTop: '1px solid #eee', marginTop: '10px' }}>
                      <button type="submit" disabled={loading} style={{
                        flex: 1, padding: '16px', background: loading ? '#8baed0' : '#1B5299', color: '#fff',
                        border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                        boxShadow: '0 8px 20px rgba(27, 82, 153, 0.2)', transition: 'all 0.3s'
                      }}>
                        {loading ? '⏳ Création en cours...' : '✅ Publier l\'événement'}
                      </button>
                      <button type="button" onClick={() => setShowPreview(false)} style={{
                        padding: '16px 32px', background: '#f1f5f9', color: '#475569', borderRadius: '12px', border: '1px solid #cbd5e1',
                        fontWeight: 600, fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s'
                      }}>Annuler</button>
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
