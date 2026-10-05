'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid #d5dee8',
  borderRadius: '8px',
  fontSize: '15px',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  background: '#fbfcfd'
};

function eventType(title = '', t) {
  const value = title.toLowerCase();
  if (value.includes('assemblée') || value.includes('general') || value.includes('ag') || value.includes('جلسة')) {
    return { label: 'Assemblée Générale · ATR', color: '#1B5299' };
  }
  if (value.includes('séminaire') || value.includes('congrès') || value.includes('seminar') || value.includes('piarc') || value.includes('ندوة')) {
    return { label: 'Séminaire International · PIARC', color: '#C07B1B' };
  }
  if (value.includes('glissement') || value.includes('stabilité') || value.includes('atms')) {
    return { label: 'Journée Technique · ATR & ATMS', color: '#1B5299' };
  }
  if (value.includes('hss') || value.includes('sécurité')) {
    return { label: 'Après-Midi Technique · HSS', color: '#C07B1B' };
  }
  if (value.includes('atelier') || value.includes('journée') || value.includes('formation') || value.includes('workshop') || value.includes('ورشة')) {
    return { label: t ? t('calendrier.type_workshop', 'Atelier technique') : 'Atelier technique', color: '#2E8B57' };
  }
  return { label: t ? t('calendrier.type_committee', 'Événement ATR') : 'Événement ATR', color: '#1B5299' };
}

export default function EventsPage() {
  const { t, language } = useLanguage();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');

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

  const defaultEvents = [
    {
      id: 5,
      title: 'ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)',
      description: 'L’Association Tunisienne des Routes (ATR) a le plaisir de vous convier à son Assemblée Générale. Votre présence est importante pour la vie de l’ATR et pour continuer à développer ensemble nos actions au service du secteur routier en Tunisie. Nous comptons sur votre présence !',
      location: 'Startup Village, Tunis',
      date: '2026-10-24T09:00:00',
      capacity: 120,
      imageUrl: '/1000007112.png',
      mapsUrl: 'https://maps.app.goo.gl/3Vbb8kya3VsCa2NT8',
      formLabel: 'Confirmer ma présence',
      badge: 'Assemblée Générale · ATR',
      hook: 'Chers membres, nous comptons vivement sur votre présence !',
      topics: [
        'Présentation du rapport moral',
        'Présentation du rapport financier',
        'Présentation des activités réalisées par l’ATR',
        'Échanges sur les activités et les perspectives de l’association',
        'Présentation des projets et orientations à venir',
        'Divers & Débats ouverts'
      ],
      paymentInfo: 'La cotisation 2026 pourra être réglée par virement bancaire N° 086030001520090580 ou par chèque.',
      slogan: 'Construire ensemble l’avenir de l’infrastructure routière tunisienne.',
    },
    {
      id: 1,
      title: 'Séminaire International des Comités Techniques PIARC Tunis 2026',
      description: 'L’Association Tunisienne des Routes (ATR), en collaboration avec l’Association mondiale de la Route (PIARC), organise un grand séminaire international sous le thème : « Les chaussées routières et la gestion des actifs face aux défis climatiques et à la transition écologique ».',
      location: 'Tunis, Tunisie',
      date: '2026-12-09T09:00:00',
      capacity: 350,
      imageUrl: '/event9desember.jpg',
      formUrl: 'https://event.atr-tunisie.org/',
      formLabel: 'S’inscrire sur event.atr-tunisie.org',
      publicationUrl: '/events/seminaire-piarc-2026',
      publicationLabel: 'Programme & Détails du séminaire',
      badge: 'Séminaire International · ATR & PIARC',
      topics: [
        'Matériaux routiers durables et bas carbone',
        'Adaptation des chaussées aux impacts climatiques',
        'Gestion patrimoniale des actifs routiers',
        'Économie circulaire et recyclage des chaussées'
      ],
      slogan: 'Grand rendez-vous international regroupant plus de 300 experts mondiaux, délégations et décideurs publics.',
    },
    {
      id: 4,
      title: 'SAVE THE DATE ! Glissements de Terrain : Gestion des Risques et Stabilité des Ouvrages',
      description: 'À l’ère d’intensification de l’effet des changements climatiques, des épisodes pluvieux extrêmes, de l’urbanisation croissante et de la complexité géotechnique de certains sites, les glissements de terrain représentent aujourd’hui un défi majeur pour la sécurité des populations et la résilience des infrastructures.',
      location: 'Hôtel El Mouradi Gammarth, Tunis',
      date: '2026-06-03T08:30:00',
      capacity: 200,
      imageUrl: '/event3juin.jpg',
      mapsUrl: 'https://maps.app.goo.gl/x3vxkK9zHRUUipYD7',
      formUrl: 'https://forms.gle/qSB5JZEoT59MAK2Q7',
      formLabel: 'Inscrivez-vous (Google Forms)',
      publicationUrl: '/publications/glissements-de-terrain-resilience-infrastructures',
      publicationLabel: 'Compte-rendu & Retour en images',
      badge: 'Journée Technique · ATR & ATMS',
      topics: [
        'Risques géotechniques et cinématique des versants',
        'Techniques de stabilisation et de confortement',
        'Monitoring et surveillance en temps réel',
        'Solutions innovantes pour des infrastructures résilientes'
      ],
      fees: [
        { label: 'Adhérents ATR & ATMS (Cotisation 2026)', price: '200 DT' },
        { label: 'Professionnels', price: '250 DT' },
        { label: 'Étudiants', price: '150 DT' }
      ],
      slogan: 'Experts nationaux et internationaux, conférences techniques, études de cas et table ronde.',
    },
    {
      id: 3,
      title: '« Les enjeux HSS et sécurité routière sur nos chantiers »',
      description: 'Vous travaillez sur chantier ? Cet après-midi est faite pour vous ! Nous avons le plaisir de vous inviter à l’après-midi de l\'ATR dédiée à un sujet qui nous tient tous à cœur : parce que chaque vie compte, parce que chaque trajet mérite d\'être sécurisé.',
      location: 'Cité des Sciences à Tunis',
      date: '2026-04-30T13:30:00',
      capacity: 150,
      imageUrl: '/event30avr.jpg',
      mapsUrl: 'https://maps.app.goo.gl/K42Nef78RzCXbHwv5',
      formUrl: 'https://forms.gle/p3cx3P5NXG3L3fqA8',
      formLabel: 'Inscrivez-vous (Google Forms)',
      publicationUrl: '/publications/securite-routiere-hss-chantiers',
      publicationLabel: 'Compte-rendu technique & Témoignages',
      badge: 'Après-Midi Technique · HSS & Sécurité',
      hook: 'Vous travaillez sur chantier ? Cet après-midi est faite pour vous !',
      topics: [
        'Des experts à votre écoute',
        'Des cas pratiques tirés du terrain',
        'Des engagements collectifs pour protéger nos équipes'
      ],
      fees: [
        { label: 'Membres de l’ATR', price: '10 DT' },
        { label: 'Non-adhérents', price: '20 DT' }
      ],
      slogan: 'Securing Sites. Protecting Lives. Paving the Future.',
    }
  ];

  useEffect(() => {
    fetch('/api/events?active=true')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const merged = data.map(item => {
            const def = defaultEvents.find(d => d.id === item.id);
            return def ? { ...def, ...item, topics: def.topics || item.topics, fees: def.fees || item.fees, paymentInfo: def.paymentInfo || item.paymentInfo, mapsUrl: def.mapsUrl, formUrl: def.formUrl, formLabel: def.formLabel, publicationUrl: def.publicationUrl, publicationLabel: def.publicationLabel, slogan: def.slogan, hook: def.hook, badge: def.badge } : item;
          });
          defaultEvents.forEach(def => {
            if (!merged.some(m => m.id === def.id)) {
              merged.unshift(def);
            }
          });
          setEvents(merged);
        } else {
          setEvents(defaultEvents);
        }
      })
      .catch(() => {
        setEvents(defaultEvents);
      })
      .finally(() => setLoading(false));
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

  async function handleSubmit(event) {
    event.preventDefault();
    setFormLoading(true);
    setMessage('');
    setError('');
    try {
      // 1. Envoyer notification email à contact@atr-tunisie.org via /api/contact
      const emailPromise = fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: 'evenement',
          message: `[Confirmation de présence — ${selectedEvent?.title}]\n\nÉvénement : ${selectedEvent?.title}\nDate : ${selectedEvent?.date ? new Date(selectedEvent.date).toLocaleDateString(dateLocale, { day: '2-digit', month: 'long', year: 'numeric' }) : ''}\nLieu : ${selectedEvent?.location}\n\nCoordonnées du membre / participant :\n- Nom complet : ${formData.name}\n- Email : ${formData.email}\n- Téléphone : ${formData.phone || 'Non renseigné'}\n\nMessage / Note :\n${formData.message || 'Présence confirmée à l’événement.'}`,
          consent: true,
        }),
      });

      // 2. Enregistrer également la réservation si possible
      const resPromise = fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, eventId: selectedEvent?.id }),
      });

      await Promise.allSettled([emailPromise, resPromise]);
      setMessage(`Votre confirmation de présence pour « ${selectedEvent?.title} » a bien été transmise à contact@atr-tunisie.org.`);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (submitError) {
      setError(submitError.message || t('events.modal_error', 'Une erreur est survenue.'));
    } finally {
      setFormLoading(false);
    }
  }

  const dateLocale = language === 'ar' ? 'ar-TN' : (language === 'en' ? 'en-US' : 'fr-FR');

  const styles = `
    .atr-events-page {
      background: #F8FAFC;
      color: #17233D;
      padding-bottom: 90px;
      font-family: 'Inter', sans-serif;
    }

    .atr-events-hero {
      padding: 80px 0 60px;
      background: #FFFFFF;
      border-bottom: 1px solid #E2E8F0;
    }
    .atr-events-hero h1 {
      color: #102B54;
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(32px, 4.5vw, 42px);
      line-height: 1.2;
      margin: 8px 0 16px;
      font-weight: 700;
    }
    .atr-events-hero p {
      max-width: 760px;
      color: #334155;
      font-size: 17px;
      line-height: 1.72;
    }
    .atr-events-hero .section_heading_title_small,
    .atr-events-section .section_heading_title_small {
      color: #C07B1B;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
      font-size: 13px;
    }

    .atr-events-section {
      padding: 60px 0 55px;
    }

    /* Filter & Sort Toolbar */
    .atr-events-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 28px;
      padding: 14px 20px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 14px;
      box-shadow: 0 4px 16px rgba(16, 43, 84, 0.04);
    }
    .atr-events-filters {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .atr-filter-btn {
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13.5px;
      font-weight: 700;
      border: 1px solid #CBD5E1;
      background: #F8FAFC;
      color: #334155;
      cursor: pointer;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .atr-filter-btn:hover {
      background: #F1F5F9;
      border-color: #94A3B8;
    }
    .atr-filter-btn.active {
      background: #1B5299;
      color: #FFFFFF;
      border-color: #1B5299;
      box-shadow: 0 3px 10px rgba(27, 82, 153, 0.25);
    }
    .atr-sort-select-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 700;
      color: #475569;
    }
    .atr-sort-select {
      padding: 8px 14px;
      border-radius: 8px;
      border: 1px solid #CBD5E1;
      background: #FFFFFF;
      font-size: 13.5px;
      font-weight: 700;
      color: #102B54;
      outline: none;
      cursor: pointer;
      font-family: inherit;
    }

    /* Featured Event Spotlight Card */
    .atr-featured-event {
      background: #FFFFFF;
      border-radius: 20px;
      border: 1px solid rgba(27, 82, 153, 0.12);
      box-shadow: 0 10px 30px rgba(16, 43, 84, 0.06);
      overflow: hidden;
      margin-bottom: 28px;
      display: grid;
      grid-template-columns: 36% 64%;
      transition: all 0.3s ease;
    }
    .atr-featured-event:hover {
      box-shadow: 0 16px 40px rgba(16, 43, 84, 0.10);
      transform: translateY(-2px);
    }

    .atr-featured-media {
      position: relative;
      background: #0F2A4A;
      overflow: hidden;
      height: 100%;
      min-height: 280px;
      max-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .atr-featured-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    .atr-featured-event:hover .atr-featured-media img {
      transform: scale(1.05);
    }
    .atr-media-zoom-overlay {
      position: absolute;
      inset: 0;
      background: rgba(16, 43, 84, 0.45);
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 700;
      backdrop-filter: blur(2px);
    }
    .atr-featured-media:hover .atr-media-zoom-overlay {
      opacity: 1;
    }
    .atr-media-zoom-badge {
      background: rgba(255, 255, 255, 0.95);
      color: #102B54;
      padding: 8px 16px;
      border-radius: 50px;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
    }

    .atr-featured-badge-float {
      position: absolute;
      top: 14px;
      left: 14px;
      background: #C07B1B;
      color: #FFFFFF;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 4px 12px;
      border-radius: 50px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .atr-featured-content {
      position: relative;
      padding: 24px 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Rubber Stamp Cachet "ÉVÉNEMENT PASSÉ" */
    .atr-stamp-passed {
      position: absolute;
      top: 16px;
      right: 20px;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5px 12px;
      border: 2px solid #DC2626;
      border-radius: 6px;
      color: #DC2626;
      font-family: 'DM Sans', sans-serif;
      text-transform: uppercase;
      line-height: 1.15;
      background: rgba(254, 242, 242, 0.96);
      transform: rotate(-8deg);
      box-shadow: 0 4px 12px rgba(220, 38, 38, 0.16);
      pointer-events: none;
      z-index: 4;
      letter-spacing: 0.08em;
      outline: 1.5px dashed #DC2626;
      outline-offset: -3px;
    }
    .atr-stamp-passed-star {
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 0.1em;
    }
    .atr-stamp-passed-sub {
      font-size: 9px;
      font-weight: 800;
      letter-spacing: 0.16em;
      margin-top: 1px;
      color: #991B1B;
    }

    .atr-status-pill {
      font-size: 11px;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 20px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .atr-status-pill-past {
      background: #FEE2E2;
      color: #991B1B;
      border: 1px solid #FCA5A5;
    }
    .atr-status-pill-upcoming {
      background: #DCFCE7;
      color: #15803D;
      border: 1px solid #86EFAC;
    }

    .atr-btn-closed {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
      color: #64748B;
      font-size: 13px;
      font-weight: 700;
      padding: 9px 15px;
      border-radius: 8px;
      cursor: not-allowed;
      user-select: none;
    }

    .atr-btn-publication-primary {
      background: #1B5299 !important;
      color: #FFFFFF !important;
      box-shadow: 0 4px 12px rgba(27, 82, 153, 0.25) !important;
    }
    .atr-btn-publication-primary:hover {
      background: #123e75 !important;
      transform: translateY(-2px);
    }

    .atr-featured-payment-info {
      background: #F0F6FF;
      border: 1px solid rgba(27, 82, 153, 0.2);
      border-radius: 8px;
      padding: 9px 14px;
      margin-bottom: 12px;
      font-size: 13px;
      color: #1E293B;
      display: flex;
      align-items: center;
      gap: 9px;
      line-height: 1.45;
    }
    .atr-featured-payment-info strong {
      color: #1B5299;
    }

    .atr-featured-media img.atr-media-is-logo {
      object-fit: contain !important;
      padding: 26px;
      background: #FFFFFF;
    }

    .atr-featured-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      margin-bottom: 10px;
    }
    .atr-featured-tag-primary {
      background: rgba(27, 82, 153, 0.08);
      color: #1B5299;
      border: 1px solid rgba(27, 82, 153, 0.2);
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 4px 10px;
      border-radius: 6px;
    }
    .atr-featured-tag-date {
      color: #C07B1B;
      font-weight: 700;
      font-size: 13px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .atr-featured-title {
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(20px, 1.8vw, 24px);
      font-weight: 800;
      color: #102B54;
      line-height: 1.25;
      margin: 0 0 8px;
    }

    .atr-featured-hook {
      font-size: 14px;
      font-weight: 700;
      color: #C07B1B;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .atr-featured-desc {
      color: #334155;
      font-size: 13.5px;
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .atr-featured-pillars {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 6px;
      margin: 6px 0 10px;
    }
    .atr-pillar-item {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 6px 10px;
      font-size: 12px;
      font-weight: 600;
      color: #1E293B;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .atr-featured-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 8px 14px;
      background: #F0F6FF;
      border-radius: 10px;
      margin-bottom: 10px;
      font-size: 13px;
    }
    .atr-featured-meta-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #1E293B;
    }
    .atr-featured-meta-item a {
      color: #1B5299;
      font-weight: 700;
      text-decoration: underline;
    }

    .atr-featured-pricing {
      background: #FEF9F0;
      border: 1px solid rgba(192, 123, 27, 0.25);
      border-radius: 10px;
      padding: 8px 14px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
    }
    .atr-pricing-label {
      font-size: 12.5px;
      color: #475569;
      font-weight: 600;
    }
    .atr-pricing-badges {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .atr-price-badge {
      background: #FFFFFF;
      border: 1px solid rgba(192, 123, 27, 0.35);
      border-radius: 6px;
      padding: 3px 8px;
      font-size: 12px;
      color: #0F172A;
    }
    .atr-price-badge strong {
      color: #C07B1B;
      font-weight: 800;
    }

    .atr-featured-slogan {
      font-size: 12px;
      font-weight: 700;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 12px;
    }

    .atr-featured-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
    }

    .atr-btn-register-form {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #C07B1B;
      color: #FFFFFF !important;
      font-family: 'DM Sans', sans-serif;
      font-size: 13.5px;
      font-weight: 700;
      padding: 10px 18px;
      border-radius: 8px;
      text-decoration: none !important;
      box-shadow: 0 4px 12px rgba(192, 123, 27, 0.25);
      transition: all 0.25s ease;
    }
    .atr-btn-register-form:hover {
      background: #a36612;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(192, 123, 27, 0.35);
      color: #FFFFFF !important;
    }

    .atr-btn-publication {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #1B5299;
      color: #FFFFFF !important;
      font-family: 'DM Sans', sans-serif;
      font-size: 13.5px;
      font-weight: 700;
      padding: 10px 16px;
      border-radius: 8px;
      text-decoration: none !important;
      box-shadow: 0 4px 10px rgba(27, 82, 153, 0.2);
      transition: all 0.25s ease;
    }
    .atr-btn-publication:hover {
      background: #123e75;
      transform: translateY(-2px);
      box-shadow: 0 6px 14px rgba(27, 82, 153, 0.3);
      color: #FFFFFF !important;
    }

    .atr-btn-quick-reserve {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      color: #1E293B;
      font-size: 13px;
      font-weight: 700;
      padding: 9px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .atr-btn-quick-reserve:hover {
      background: #F1F5F9;
      border-color: #94A3B8;
    }

    /* Grid for Other Events */
    .atr-events-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }
    .atr-event-card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background: #FFFFFF;
      border: 1px solid #DFE6EE;
      border-radius: 18px;
      box-shadow: 0 10px 28px rgba(16, 43, 84, 0.06);
      transition: transform .25s ease, box-shadow .25s ease;
    }
    .atr-event-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px rgba(16, 43, 84, 0.12);
    }
    .atr-event-image {
      height: 220px;
      overflow: hidden;
      background: #DFE7EF;
      position: relative;
    }
    .atr-event-image img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .5s ease;
    }
    .atr-event-card:hover .atr-event-image img {
      transform: scale(1.05);
    }
    .atr-event-body {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 24px;
    }
    .atr-event-badge {
      align-self: flex-start;
      padding: 5px 12px;
      border-radius: 999px;
      color: #FFFFFF;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .05em;
      text-transform: uppercase;
    }
    .atr-event-title {
      color: #102B54;
      font-family: 'DM Sans', sans-serif;
      font-size: 20px;
      line-height: 1.35;
      margin: 14px 0 10px;
      font-weight: 700;
    }
    .atr-event-meta {
      display: grid;
      gap: 8px;
      color: #475569;
      font-size: 13.5px;
      line-height: 1.5;
      padding-bottom: 14px;
      border-bottom: 1px solid #E5EBF1;
      font-weight: 500;
    }
    .atr-event-description {
      color: #334155;
      font-size: 14.5px;
      line-height: 1.68;
      margin: 14px 0 20px;
    }
    .atr-event-actions {
      display: flex;
      gap: 10px;
      margin-top: auto;
    }
    .atr-event-actions a,
    .atr-event-actions button {
      flex: 1;
      padding: 12px 14px;
      border-radius: 10px;
      text-align: center;
      font: inherit;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      transition: all .25s ease;
    }
    .atr-event-details {
      border: 1px solid #1B5299;
      background: #FFFFFF;
      color: #1B5299;
    }
    .atr-event-details:hover {
      background: #EEF5FB;
      border-color: #1B5299;
    }
    .atr-event-reserve {
      border: 0;
      background: #1B5299;
      color: #FFFFFF;
    }
    .atr-event-reserve:hover {
      background: #C07B1B;
    }

    .atr-events-empty {
      padding: 38px;
      background: #FFFFFF;
      border: 1px solid #DFE6EE;
      border-radius: 12px;
      color: #334155;
      font-size: 15.5px;
    }

    .atr-events-cta {
      margin-top: 50px;
      padding: 42px 48px;
      background: #102B54;
      border-radius: 18px;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
      box-shadow: 0 12px 32px rgba(16, 43, 84, 0.15);
    }
    .atr-events-cta h2 {
      color: #FFFFFF;
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(22px, 2.8vw, 28px);
      margin: 0 0 8px;
      font-weight: 700;
    }
    .atr-events-cta p {
      color: #E2E8F0;
      margin: 0;
      line-height: 1.65;
      font-size: 15.5px;
    }
    .atr-events-cta a {
      padding: 13px 24px;
      background: #C07B1B;
      color: #FFFFFF;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 700;
      font-size: 14.5px;
      white-space: nowrap;
      transition: all .3s ease;
    }
    .atr-events-cta a:hover {
      background: #D98E28;
      transform: translateY(-2px);
    }

    /* Lightbox Modal */
    .atr-lightbox-modal {
      position: fixed;
      inset: 0;
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      background: rgba(10, 27, 50, 0.88);
      backdrop-filter: blur(8px);
      animation: atrFadeIn 0.2s ease-out;
    }
    @keyframes atrFadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
    .atr-lightbox-wrapper {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .atr-lightbox-img {
      max-width: 100%;
      max-height: 80vh;
      object-fit: contain;
      border-radius: 12px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
      border: 2px solid rgba(255, 255, 255, 0.2);
      background: #0B192C;
    }
    .atr-lightbox-close {
      position: absolute;
      top: -16px;
      right: -16px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #FFFFFF;
      color: #102B54;
      border: none;
      font-size: 26px;
      font-weight: 700;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
      transition: all 0.2s ease;
      z-index: 10;
    }
    .atr-lightbox-close:hover {
      background: #C07B1B;
      color: #FFFFFF;
      transform: scale(1.1);
    }
    .atr-lightbox-caption {
      margin-top: 14px;
      color: #FFFFFF;
      font-size: 15px;
      font-weight: 600;
      text-align: center;
      max-width: 700px;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
    }

    /* Modal */
    .atr-events-modal {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: grid;
      place-items: center;
      padding: 20px;
      background: rgba(10, 27, 50, 0.75);
      backdrop-filter: blur(4px);
    }
    .atr-events-modal-card {
      position: relative;
      width: 100%;
      max-width: 580px;
      max-height: 90vh;
      overflow: auto;
      padding: 36px;
      background: #FFFFFF;
      border-radius: 20px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
    }
    .atr-events-modal-close {
      position: absolute;
      right: 16px;
      top: 14px;
      border: 0;
      background: none;
      color: #64748B;
      font-size: 26px;
      cursor: pointer;
    }
    .atr-events-modal-card h2 {
      color: #102B54;
      font-family: 'DM Sans', sans-serif;
      font-size: 22px;
      line-height: 1.3;
      margin: 15px 0 8px;
      font-weight: 700;
    }
    .atr-events-modal-card > p {
      color: #475569;
      font-size: 14.5px;
      line-height: 1.6;
    }
    .atr-events-form {
      display: grid;
      gap: 16px;
      margin-top: 22px;
    }
    .atr-events-form label {
      display: grid;
      gap: 7px;
      color: #102B54;
      font-size: 13.5px;
      font-weight: 700;
    }
    .atr-events-form button {
      padding: 14px;
      border: 0;
      border-radius: 10px;
      background: #1B5299;
      color: #FFFFFF;
      font: inherit;
      font-weight: 700;
      font-size: 15px;
      cursor: pointer;
      transition: all .3s ease;
    }
    .atr-events-form button:hover {
      background: #C07B1B;
    }
    .atr-events-form button:disabled {
      opacity: .65;
      cursor: wait;
    }
    .atr-events-message {
      padding: 13px 16px;
      border-radius: 8px;
      background: #E9F7EF;
      color: #18794E;
      font-size: 14px;
      font-weight: 600;
    }
    .atr-events-error {
      padding: 13px 16px;
      border-radius: 8px;
      background: #FFF0EF;
      color: #B42318;
      font-size: 14px;
      font-weight: 600;
    }

    @media (max-width: 991px) {
      .atr-featured-event {
        grid-template-columns: 1fr;
      }
      .atr-featured-media {
        min-height: 300px;
      }
      .atr-featured-content {
        padding: 28px 24px;
      }
      .atr-featured-pillars {
        grid-template-columns: 1fr;
      }
      .atr-events-grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 767px) {
      .atr-events-hero {
        padding: 52px 0 38px;
      }
      .atr-events-hero h1 {
        font-size: 30px;
      }
      .atr-events-section {
        padding: 40px 0 35px;
      }
      .atr-featured-buttons {
        flex-direction: column;
        align-items: stretch;
      }
      .atr-btn-register-form,
      .atr-btn-publication,
      .atr-btn-quick-reserve {
        width: 100%;
        justify-content: center;
        text-align: center;
      }
      .atr-events-cta {
        display: block;
        padding: 28px;
      }
      .atr-events-cta a {
        display: inline-block;
        margin-top: 18px;
      }
    }
  `;

  // Sort events strictly by date with filter support
  const now = new Date();
  const allTargetEvents = events.filter(e => [5, 1, 4, 3].includes(e.id));

  const featuredEvents = allTargetEvents
    .filter(e => {
      const isPast = new Date(e.date) < now;
      if (filter === 'upcoming') return !isPast;
      if (filter === 'past') return isPast;
      return true;
    })
    .sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
    });

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.events', "Nos Événements")}>
      <main className="atr-events-page">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        
        <section className="atr-events-hero">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('events.hero_kicker', "Agenda ATR")}</p>
            <h1>{t('events.hero_title', "Conférences, journées techniques & grands séminaires")}</h1>
            <p>{t('events.hero_lead', "Retrouvez les grands rendez-vous professionnels et rencontres techniques de l'Association Tunisienne des Routes : programmes, intervenants, lieux et inscriptions en ligne.")}</p>
          </div>
        </section>

        <section className="atr-events-section">
          <div className="auto-container">

            {/* BARRE DE TRI ET FILTRES PAR DATE */}
            <div className="atr-events-toolbar">
              <div className="atr-events-filters">
                <button 
                  className={`atr-filter-btn ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  📅 Tous ({allTargetEvents.length})
                </button>
                <button 
                  className={`atr-filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
                  onClick={() => setFilter('upcoming')}
                >
                  🟢 À venir ({allTargetEvents.filter(e => new Date(e.date) >= now).length})
                </button>
                <button 
                  className={`atr-filter-btn ${filter === 'past' ? 'active' : ''}`}
                  onClick={() => setFilter('past')}
                >
                  📁 Clôturés ({allTargetEvents.filter(e => new Date(e.date) < now).length})
                </button>
              </div>

              <div className="atr-sort-select-wrapper">
                <span>Ordre :</span>
                <select 
                  className="atr-sort-select" 
                  value={sortOrder} 
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="desc">🗓️ Du plus récent au plus ancien (Décembre → Avril)</option>
                  <option value="asc">🗓️ Du plus ancien au plus récent (Avril → Décembre)</option>
                </select>
              </div>
            </div>

            {/* ÉVÉNEMENTS PHARES / SPOTLIGHTS TRIÉS PAR DATE */}
            {featuredEvents.map((evt) => {
              const isPast = new Date(evt.date) < now;
              const isLogo = evt.imageUrl === '/1000007112.png';
              return (
                <div className={`atr-featured-event ${isPast ? 'atr-event-is-past' : 'atr-event-is-upcoming'}`} key={evt.id}>
                  <div 
                    className="atr-featured-media"
                    onClick={() => setPreviewImage({
                      src: evt.imageUrl || '/images/atr-bg-3.png',
                      alt: evt.title,
                      title: evt.title
                    })}
                    title="Cliquer pour afficher l'affiche en grand"
                  >
                    <img 
                      src={evt.imageUrl || '/images/atr-bg-3.png'} 
                      alt={evt.title} 
                      className={isLogo ? 'atr-media-is-logo' : ''}
                    />
                    <span className="atr-featured-badge-float">
                      {evt.id === 5 ? '🏛️ Assemblée Générale' : (evt.id === 1 ? '🌟 Séminaire International' : (isPast ? '📁 Archive Technique' : '⭐ Événement Spécial'))}
                    </span>
                    <div className="atr-media-zoom-overlay">
                      <span className="atr-media-zoom-badge">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                        Agrandir l'affiche
                      </span>
                    </div>
                  </div>
                  <div className="atr-featured-content">
                    {isPast && (
                      <div className="atr-stamp-passed" title="Événement passé et clôturé">
                        <span className="atr-stamp-passed-star">★ ÉVÉNEMENT PASSÉ ★</span>
                        <span className="atr-stamp-passed-sub">CLÔTURÉ</span>
                      </div>
                    )}
                    <div>
                      <div className="atr-featured-tags">
                        <span className="atr-featured-tag-primary">
                          {evt.badge || eventType(evt.title, t).label}
                        </span>
                        <span className="atr-featured-tag-date">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {evt.id === 1 ? '09 au 11 Décembre 2026' : (evt.id === 5 ? 'Samedi 24 Octobre 2026 · 09h00' : new Date(evt.date).toLocaleDateString(dateLocale, { day: '2-digit', month: 'long', year: 'numeric' }))}
                        </span>
                        {isPast ? (
                          <span className="atr-status-pill atr-status-pill-past">
                            🔴 Clôturé
                          </span>
                        ) : (
                          <span className="atr-status-pill atr-status-pill-upcoming">
                            🟢 Inscriptions ouvertes
                          </span>
                        )}
                      </div>

                      <h2 className="atr-featured-title">
                        {evt.title}
                      </h2>

                      {evt.hook && (
                        <div className="atr-featured-hook">
                          <span>🏗️</span> {evt.hook}
                        </div>
                      )}

                      <p className="atr-featured-desc">
                        {evt.description}
                      </p>

                      {evt.topics && (
                        <div className="atr-featured-pillars">
                          {Array.isArray(evt.topics) ? evt.topics.map((tItem, idx) => (
                            <div className="atr-pillar-item" key={idx}>
                              <span>•</span>
                              <span>{tItem}</span>
                            </div>
                          )) : (
                            <div className="atr-pillar-item">
                              <span>•</span>
                              <span>{evt.topics}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="atr-featured-meta-row">
                        <div className="atr-featured-meta-item">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C07B1B" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          <span><strong>Lieu :</strong> {evt.location}</span>
                        </div>
                        {evt.mapsUrl && (
                          <div className="atr-featured-meta-item">
                            <a
                              href={evt.mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              📍 Localiser sur Google Maps ↗
                            </a>
                          </div>
                        )}
                      </div>

                      {evt.paymentInfo && (
                        <div className="atr-featured-payment-info">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B5299" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                          <span><strong>Cotisation & Virement :</strong> {evt.paymentInfo}</span>
                        </div>
                      )}

                      {evt.fees && (
                        <div className="atr-featured-pricing">
                          <span className="atr-pricing-label">💳 Frais d’inscription :</span>
                          <div className="atr-pricing-badges">
                            {evt.fees.map((fee, fIdx) => (
                              <span className="atr-price-badge" key={fIdx}>
                                {fee.label} : <strong>{fee.price}</strong>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {evt.slogan && (
                        <div className="atr-featured-slogan">
                          🛡️ {evt.slogan}
                        </div>
                      )}
                    </div>

                    <div className="atr-featured-buttons">
                      {isPast ? (
                        <>
                          <span className="atr-btn-closed">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            Inscriptions terminées
                          </span>
                          {evt.publicationUrl && (
                            <Link href={evt.publicationUrl} className="atr-btn-publication atr-btn-publication-primary">
                              <span>{evt.publicationLabel || 'Compte-rendu & Photos →'}</span>
                            </Link>
                          )}
                        </>
                      ) : (
                        <>
                          {evt.formUrl ? (
                            <a
                              href={evt.formUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="atr-btn-register-form"
                            >
                              <span>{evt.formLabel || 'S’inscrire dès maintenant'}</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </a>
                          ) : (
                            <button
                              className="atr-btn-register-form"
                              onClick={() => openModal(evt)}
                            >
                              <span>{evt.formLabel || 'Confirmer ma présence'}</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </button>
                          )}

                          {evt.publicationUrl && (
                            <Link href={evt.publicationUrl} className="atr-btn-publication">
                              <span>{evt.publicationLabel || 'Programme & Détails →'}</span>
                            </Link>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="atr-events-cta">
              <div>
                <h2>{t('events.cta_title', "Participer aux échanges de l'ATR")}</h2>
                <p>{t('events.cta_text', "Les événements et comités techniques permettent aux professionnels de partager leurs pratiques.")}</p>
              </div>
              <Link href="/contact">{t('events.cta_btn', "Devenir membre →")}</Link>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && selectedEvent && (
        <div className="atr-events-modal" onClick={(event) => event.target === event.currentTarget && closeModal()}>
          <div className="atr-events-modal-card">
            <button className="atr-events-modal-close" onClick={closeModal} aria-label="Fermer">×</button>
            <span className="atr-event-badge" style={{ background: eventType(selectedEvent.title, t).color }}>{eventType(selectedEvent.title, t).label}</span>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.date ? new Date(selectedEvent.date).toLocaleDateString(dateLocale, { day: '2-digit', month: 'long', year: 'numeric' }) : ''} · {selectedEvent.location}</p>
            <div style={{ background: '#F0F6FF', border: '1px solid rgba(27, 82, 153, 0.2)', padding: '11px 15px', borderRadius: '8px', fontSize: '13px', color: '#1E293B', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✉️</span>
              <span>En validant ce formulaire, votre confirmation de présence sera directement envoyée par email au secrétariat de l'ATR à <strong>contact@atr-tunisie.org</strong>.</span>
            </div>
            {message && <div className="atr-events-message">{message}</div>}
            {error && <div className="atr-events-error">{error}</div>}
            {!message && (
              <form className="atr-events-form" onSubmit={handleSubmit}>
                <label>
                  {t('events.modal_name', "Nom complet *")}
                  <input required type="text" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} style={inputStyle} placeholder="Ex: Mohamed Ben Ali" />
                </label>
                <label>
                  {t('events.modal_email', "Email professionnel ou personnel *")}
                  <input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} style={inputStyle} placeholder="nom@exemple.com" />
                </label>
                <label>
                  {t('events.modal_phone', "Téléphone")}
                  <input type="tel" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} style={inputStyle} placeholder="+216 -- --- ---" />
                </label>
                <label>
                  {t('events.modal_message', "Message / Remarques")}
                  <textarea rows={3} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Précisez votre organisme ou toute remarque éventuelle…" />
                </label>
                <button type="submit" disabled={formLoading}>
                  {formLoading ? t('events.modal_sending', 'Envoi en cours…') : '✉️ Confirmer ma présence (Envoyer à contact@atr-tunisie.org)'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {previewImage && (
        <div className="atr-lightbox-modal" onClick={() => setPreviewImage(null)}>
          <div className="atr-lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
            <button 
              className="atr-lightbox-close" 
              onClick={() => setPreviewImage(null)} 
              aria-label="Fermer l'affiche"
              title="Fermer (Échap)"
            >
              ×
            </button>
            <img 
              src={previewImage.src} 
              alt={previewImage.alt} 
              className="atr-lightbox-img" 
            />
            {previewImage.title && (
              <p className="atr-lightbox-caption">{previewImage.title}</p>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
