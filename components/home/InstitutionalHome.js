'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const featuredEvents = [
  {
    id: 5,
    title: 'ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)',
    description: 'L’Association Tunisienne des Routes (ATR) a le plaisir de vous convier à son Assemblée Générale. Votre présence est essentielle pour la vie de l’association et pour le développement continu de nos projets techniques.',
    location: 'Startup Village, Tunis',
    date: '2026-10-24T09:00:00',
    dateDisplay: '24 octobre 2026 · 09h00',
    imageUrl: '/1000007112.png',
    mapsUrl: 'https://maps.app.goo.gl/3Vbb8kya3VsCa2NT8',
    category: 'Assemblée Générale',
    badge: 'Membres ATR',
    actionType: 'modal',
    actionLabel: 'Confirmer ma présence',
    detailUrl: '/events',
    tags: ['Rapports moral & financier', 'Perspectives 2026-2027', 'Cotisations']
  },
  {
    id: 1,
    title: 'Séminaire International des Comités Techniques PIARC Tunis 2026',
    description: 'L’ATR et l’Association mondiale de la Route (PIARC) organisent ce grand séminaire international sous le thème : « Les chaussées routières et la gestion des actifs face aux défis climatiques et à la transition écologique ».',
    location: 'Tunis, Tunisie',
    date: '2026-12-09T09:00:00',
    dateDisplay: '09 – 11 décembre 2026',
    imageUrl: '/event9desember.jpg',
    mapsUrl: null,
    category: 'Séminaire International',
    badge: 'ATR & PIARC',
    actionType: 'external',
    actionUrl: 'https://event.atr-tunisie.org/',
    actionLabel: 'S’inscrire sur le portail officiel ↗',
    detailUrl: '/events/seminaire-piarc-2026',
    tags: ['Chaussées bas carbone', 'Résilience climatique', 'Gestion des actifs']
  }
];

const pastRecentEvents = [
  {
    title: 'Journée Technique Glissements de Terrain & Risques',
    date: '03 juin 2026',
    location: 'Hôtel El Mouradi Gammarth',
    link: '/publications/glissements-de-terrain-resilience-infrastructures'
  },
  {
    title: 'Enjeux HSS & Sécurité Routière sur les Chantiers',
    date: '30 avril 2026',
    location: 'Cité des Sciences, Tunis',
    link: '/publications/securite-routiere-hss-chantiers'
  }
];

const publications = [
  {
    date: '06 août 2025',
    source: 'La Presse de Tunisie',
    title: "Le ministre de l'Équipement accueille le nouveau bureau de l'ATR",
    href: '/publications/ministre-equipement-accueille-bureau-atr',
    image: '/atrr.jpg',
  },
  {
    date: '30 avril 2026',
    source: "L'Observatoire Économique",
    title: "Zéro décès : l'ATR relève le défi HSS d'une route qui pardonne",
    href: '/publications/securite-routiere-hss-chantiers',
    image: '/1000007112.png',
  },
  {
    date: '03 juin 2026',
    source: "ATR, ATMS & Ministère de l'Équipement",
    title: 'Glissements de terrain et résilience des infrastructures',
    href: '/publications/glissements-de-terrain-resilience-infrastructures',
    image: '/716310905_1300568632262137_7434795582044664526_n.jpg',
  },
];

const committees = [
  {
    code: 'CT.1',
    title: 'Gouvernance et résilience',
    text: 'Gestion patrimoniale des réseaux, adaptation aux crues et continuité des services.',
  },
  {
    code: 'CT.2',
    title: 'Mobilité durable et STI',
    text: 'Systèmes de transport intelligents, décarbonation des corridors et intermodalité.',
  },
  {
    code: 'CT.3',
    title: 'Sécurité routière et usagers',
    text: 'Audits de sécurité, traitement des points noirs et prévention du risque routier.',
  },
  {
    code: 'CT.4',
    title: 'Infrastructures et matériaux',
    text: "Techniques de chaussées, ouvrages d'art et innovation dans les matériaux routiers.",
  },
];

const board = [
  {
    nameKey: 'team.member1_name',
    nameDefault: 'Mme Lilia Sifaoui',
    roleKey: 'team.member1_role',
    roleDefault: "Présidente de l'ATR",
    detailKey: 'team.member1_detail',
    detailDefault: "DG de l'Unité de Gestion du Pont de Bizerte.",
    image: '/membre/lilia-sifaoui.jpg',
    position: 'top center',
  },
  {
    nameKey: 'team.member3_name',
    nameDefault: 'M. Walid Torcheni',
    roleKey: 'team.member3_role',
    roleDefault: "Secrétaire Général",
    detailKey: 'team.member3_detail',
    detailDefault: "Cadre supérieur au Ministère de l'Équipement .",
    image: '/membre/walid-torcheni.jpg',
    position: 'top center',
  },
  {
    nameKey: 'team.member6_name',
    nameDefault: 'M. Saifeddine Ben Hfaiedh',
    roleKey: 'team.member6_role',
    roleDefault: "Expert Sécurité Routière",
    detailKey: 'team.member6_detail',
    detailDefault: "DGA Best Conseils",
    image: '/membre/saifeddine-ben-hfaiedh.jpg',
    position: 'top center',
  },
];

const pillars = [
  {
    title: 'Expertise technique',
    text: "Partager les méthodes et les retours d'expérience du secteur routier.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h20" />
        <path d="M5 18a7 7 0 0 1 14 0" />
        <path d="M10 5a2 2 0 0 1 4 0v6h-4V5z" />
        <path d="M12 11v7" />
      </svg>
    ),
  },
  {
    title: 'Sécurité routière',
    text: "Placer la protection des usagers et des équipes au centre des projets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Résilience',
    text: 'Préparer les infrastructures aux contraintes climatiques et territoriales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    text: 'Relier recherche, normes, matériaux et pratiques opérationnelles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5h6.18z" />
      </svg>
    ),
  },
];

export default function InstitutionalHome() {
  const { t } = useLanguage();
  const [previewImage, setPreviewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formLoading, setFormLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPreviewImage(null);
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

  async function handleSubmit(e) {
    e.preventDefault();
    setFormLoading(true);
    setMessage('');
    setError('');
    try {
      const emailPromise = fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: 'evenement',
          message: `[Confirmation de présence — ${selectedEvent?.title}]\n\nÉvénement : ${selectedEvent?.title}\nDate : ${selectedEvent?.dateDisplay || selectedEvent?.date}\nLieu : ${selectedEvent?.location}\n\nParticipant :\n- Nom : ${formData.name}\n- Email : ${formData.email}\n- Téléphone : ${formData.phone || 'Non renseigné'}\n\nMessage :\n${formData.message || 'Présence confirmée.'}`,
          consent: true,
        }),
      });

      const resPromise = fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, eventId: selectedEvent?.id }),
      });

      await Promise.allSettled([emailPromise, resPromise]);
      setMessage(`Votre confirmation pour « ${selectedEvent?.title} » a bien été transmise à contact@atr-tunisie.org.`);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de l’envoi.');
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <main className="atr-home">
      {/* 1. HERO */}
      <section className="atr-home-hero">
        <div className="atr-home-hero-media" aria-hidden="true" />
        <div className="atr-home-hero-inner">
          <div className="atr-home-container">
            <div className="atr-home-hero-copy">
              <p className="atr-home-kicker">{t('common.discover')} · PIARC</p>
              <h1>{t('home.title').replace('<br/>', ' ')}</h1>
              <p className="atr-home-lead">{t('home.welcome')}</p>
              <div className="atr-home-actions">
                <Link href="/about-us" className="atr-home-button atr-home-button-primary">{t('common.discover')} <span aria-hidden="true">↗</span></Link>
                <Link href="/contact" className="atr-home-button atr-home-button-light">{t('common.join')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLASH NEWS */}
      <section className="atr-home-news" aria-label="Actualités institutionnelles">
        <div className="atr-home-container atr-home-news-inner">
          <span className="atr-home-news-label">{t('common.featured')}</span>
          <Link href="/events">24 octobre 2026 · Assemblée Générale de l’Association Tunisienne des Routes (ATR) à Tunis</Link>
          <Link href="/events" className="atr-home-news-next">{t('common.agenda')} <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      {/* 3. À PROPOS & PILIERS */}
      <section className="atr-home-section atr-home-about">
        <div className="atr-home-container atr-home-two-col">
          <div>
            <p className="atr-home-eyebrow">{t('common.about')}</p>
            <h2>{t('common.aboutTitle')}</h2>
            <p>{t('common.aboutText')}</p>
            <Link href="/about-us" className="atr-home-text-link">{t('common.readAbout')} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="atr-home-about-image"><img src="/home.jpg" alt="Association Tunisienne des Routes" /></div>
        </div>
        <div className="atr-home-container atr-home-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <div className="atr-home-pillar-icon" aria-hidden="true">
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. 🌟 SECTION ÉVÉNEMENTS (SIMPLE, CLAIRE, PARFAITEMENT INTÉGRÉE AU THÈME) 🌟 */}
      <section className="atr-home-section atr-home-events-theme" aria-label="Agenda des événements">
        <div className="atr-home-container">
          <div className="atr-home-section-heading">
            <div>
              <p className="atr-home-eyebrow">Agenda & Conférences</p>
              <h2>Événements & Séminaires</h2>
            </div>
            <Link href="/events" className="atr-home-text-link">
              Consulter tout l’agenda <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Grille des cartes d'événements */}
          <div className="atr-home-events-grid-clean">
            {featuredEvents.map((evt) => (
              <article key={evt.id} className="atr-home-event-card-clean">
                <div 
                  className="atr-home-event-card-image"
                  onClick={() => setPreviewImage(evt.imageUrl)}
                  title="Agrandir l'affiche"
                >
                  <img src={evt.imageUrl} alt={evt.title} width="400" height="220" style={{ width: '100%', height: '220px', objectFit: 'cover' }} loading="lazy" />
                  <span className="atr-home-event-card-badge">{evt.category}</span>
                </div>

                <div className="atr-home-event-card-content">
                  <p className="atr-home-meta">
                    <strong>{evt.dateDisplay}</strong> · {evt.location}
                  </p>

                  <h3 className="atr-home-event-card-title">
                    <Link href={evt.detailUrl}>{evt.title}</Link>
                  </h3>

                  <p className="atr-home-event-card-desc">{evt.description}</p>

                  {evt.tags && (
                    <div className="atr-home-event-card-tags">
                      {evt.tags.map((tag, i) => (
                        <span key={i} className="atr-home-event-tag">✓ {tag}</span>
                      ))}
                    </div>
                  )}

                  <div className="atr-home-event-card-actions">
                    {evt.actionType === 'modal' && (
                      <button
                        type="button"
                        className="atr-home-btn-action-primary"
                        onClick={() => openModal(evt)}
                      >
                        {evt.actionLabel}
                      </button>
                    )}

                    {evt.actionType === 'external' && (
                      <a
                        href={evt.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="atr-home-btn-action-primary"
                      >
                        {evt.actionLabel}
                      </a>
                    )}

                    <Link href={evt.detailUrl} className="atr-home-small-link">
                      Détails de l’événement <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Note sur les dernières rencontres */}
          <div className="atr-home-events-subnote">
            <div className="atr-subnote-left">
              <strong>Dernières rencontres organisées par l’ATR :</strong>
              <div className="atr-subnote-items">
                {pastRecentEvents.map((pe, idx) => (
                  <span key={idx} className="atr-subnote-item">
                    • <em>{pe.title}</em> ({pe.date})
                  </span>
                ))}
              </div>
            </div>
            <Link href="/publications" className="atr-home-small-link">
              Consulter les rapports & actes techniques <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PUBLICATIONS & ACTUALITÉS */}
      <section className="atr-home-section atr-home-publications">
        <div className="atr-home-container">
          <div className="atr-home-section-heading">
            <div>
              <p className="atr-home-eyebrow">{t('common.resources')}</p>
              <h2>{t('common.publications')}</h2>
            </div>
            <Link href="/publications" className="atr-home-text-link">{t('common.allPublications')} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="atr-home-publication-grid">
            {publications.map((publication) => (
              <article className="atr-home-publication" key={publication.href}>
                <Link href={publication.href}><img src={publication.image} alt={publication.title} width="400" height="220" style={{ width: '100%', height: '180px', objectFit: 'cover' }} loading="lazy" /></Link>
                <div>
                  <p className="atr-home-meta">{publication.date} · {publication.source}</p>
                  <h3><Link href={publication.href}>{publication.title}</Link></h3>
                  <Link href={publication.href} className="atr-home-small-link">Consulter la publication <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMITÉS TECHNIQUES */}
      <section className="atr-home-section atr-home-committees">
        <div className="atr-home-container">
          <p className="atr-home-eyebrow">{t('common.technicalWork')}</p>
          <h2>{t('common.committeesTitle')}</h2>
          <p className="atr-home-section-intro">{t('common.committeesText')}</p>
          <div className="atr-home-committee-grid">
            {committees.map((committee) => (
              <article key={committee.code}>
                <span>{committee.code}</span>
                <h3>{committee.title}</h3>
                <p>{committee.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BUREAU & GOUVERNANCE */}
      <section className="atr-home-section atr-home-board">
        <div className="atr-home-container">
          <div className="atr-home-section-heading">
            <div>
              <p className="atr-home-eyebrow">{t('common.governance')}</p>
              <h2>{t('common.board')}</h2>
            </div>
            <Link href="/team" className="atr-home-text-link">{t('common.team')} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="atr-home-board-grid">
            {board.map((member) => (
              <article key={member.nameKey}>
                <div className="atr-home-board-img-wrap">
                  <img src={member.image} alt={t(member.nameKey, member.nameDefault)} width="300" height="360" style={{ width: '100%', height: '100%', objectPosition: member.position || 'top center', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div className="atr-home-board-info">
                  <h3>{t(member.nameKey, member.nameDefault)}</h3>
                  <p>{t(member.roleKey, member.roleDefault)}</p>
                  <small>{t(member.detailKey, member.detailDefault)}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PARTENAIRES INSTITUTIONNELS */}
      <section className="atr-home-section atr-home-trust">
        <div className="atr-home-container atr-home-trust-grid">
          <div>
            <p className="atr-home-eyebrow">{t('common.cooperation')}</p>
            <h2>{t('common.cooperationTitle')}</h2>
            <p>{t('common.cooperationText')}</p>
          </div>
          <div className="atr-home-partners">
            <a href="https://www.piarc.org/fr/" target="_blank" rel="noreferrer" className="atr-home-partner-card">
              <div className="atr-home-partner-logo-box">
                <img src="/images/partners/piarc.png" alt="Logo PIARC - Association mondiale de la Route" width="180" height="70" style={{ width: 'auto', height: '55px', objectFit: 'contain' }} loading="lazy" />
              </div>
              <div className="atr-home-partner-info">
                <div className="atr-home-partner-header">
                  <strong>PIARC</strong>
                  <span className="atr-home-partner-badge">Comité National</span>
                </div>
                <h4>Association mondiale de la Route</h4>
                <p>Organisation internationale de référence pour les politiques, techniques et normes routières mondiales.</p>
                <span className="atr-home-partner-link">Visiter le site officiel <span aria-hidden="true">↗</span></span>
              </div>
            </a>

            <a href="http://www.equipement.tn/" target="_blank" rel="noreferrer" className="atr-home-partner-card">
              <div className="atr-home-partner-logo-box">
                <img src="/images/partners/mehat.jpg" alt="Logo MEHAT - Ministère de l'Équipement et de l'Habitat" width="180" height="70" style={{ width: 'auto', height: '55px', objectFit: 'contain' }} loading="lazy" />
              </div>
              <div className="atr-home-partner-info">
                <div className="atr-home-partner-header">
                  <strong>MEHAT</strong>
                  <span className="atr-home-partner-badge">Tutelle Institutionnelle</span>
                </div>
                <h4>Ministère de l'Équipement et de l'Habitat</h4>
                <p>Tutelle gouvernementale et partenaire stratégique dans le développement des réseaux d'infrastructures en Tunisie.</p>
                <span className="atr-home-partner-link">Visiter le portail officiel <span aria-hidden="true">↗</span></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 9. REJOINDRE L'ATR */}
      <section className="atr-home-join">
        <div className="atr-home-container">
          <p className="atr-home-eyebrow">{t('common.membership')}</p>
          <h2>{t('common.membershipTitle')}</h2>
          <Link href="/contact" className="atr-home-button atr-home-button-primary">{t('common.membershipButton')} <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      {/* MODAL DE CONFIRMATION DE PRÉSENCE */}
      {isModalOpen && selectedEvent && (
        <div className="atr-home-modal-backdrop" onClick={closeModal}>
          <div className="atr-home-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="atr-home-modal-close" onClick={closeModal} aria-label="Fermer">✕</button>
            <div className="atr-home-modal-header">
              <span className="atr-home-modal-kicker">Secrétariat ATR</span>
              <h3>Confirmer ma présence</h3>
              <p className="atr-home-modal-event-name">{selectedEvent.title}</p>
              <div className="atr-home-modal-event-date">
                📅 {selectedEvent.dateDisplay} · 📍 {selectedEvent.location}
              </div>
            </div>

            <p className="atr-home-modal-notice">
              Votre confirmation de présence sera transmise au secrétariat de l’ATR à <strong>contact@atr-tunisie.org</strong>.
            </p>

            {message && <div className="atr-home-modal-success">{message}</div>}
            {error && <div className="atr-home-modal-error">{error}</div>}

            <form onSubmit={handleSubmit} className="atr-home-modal-form">
              <div className="atr-home-modal-field">
                <label>Nom et Prénom *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Mohamed Ben Salah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="atr-home-modal-field">
                <label>Adresse Email *</label>
                <input
                  type="email"
                  required
                  placeholder="Ex : membre@domaine.tn"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="atr-home-modal-field">
                <label>Numéro de Téléphone</label>
                <input
                  type="tel"
                  placeholder="Ex : +216 98 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="atr-home-modal-field">
                <label>Note ou message (optionnel)</label>
                <textarea
                  rows="3"
                  placeholder="Ex : Précisions ou remarques..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="atr-home-modal-actions">
                <button type="button" className="atr-home-modal-cancel" onClick={closeModal}>
                  Annuler
                </button>
                <button type="submit" disabled={formLoading} className="atr-home-modal-submit">
                  {formLoading ? 'Envoi...' : 'Confirmer ma présence'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* LIGHTBOX PREVIEW */}
      {previewImage && (
        <div className="atr-home-lightbox-backdrop" onClick={() => setPreviewImage(null)}>
          <div className="atr-home-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="atr-home-lightbox-close" onClick={() => setPreviewImage(null)} aria-label="Fermer">✕</button>
            <img src={previewImage} alt="Affiche agrandie" />
          </div>
        </div>
      )}
    </main>
  );
}
