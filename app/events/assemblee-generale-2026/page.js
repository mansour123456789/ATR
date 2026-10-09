'use client'
import React, { useState, useEffect } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

export default function AssembleeGeneralePage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: true
  });
  const [formLoading, setFormLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPreviewOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const title = t('event_ag.page_title', "Assemblée Générale – Association Tunisienne des Routes (ATR)");
    document.title = `${title} | ATR - Association Tunisienne des Routes`;
  }, [language, t]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const agendaItems = [
    t('event_ag.agenda_1', "Présentation et approbation du rapport moral"),
    t('event_ag.agenda_2', "Présentation et approbation du rapport financier"),
    t('event_ag.agenda_3', "Bilan exhaustif des activités et réalisations de l'ATR"),
    t('event_ag.agenda_4', "Échanges sur les perspectives, comités techniques et actions futures"),
    t('event_ag.agenda_5', "Présentation des projets phares et partenariats nationaux et internationaux"),
    t('event_ag.agenda_6', "Questions diverses, interventions des membres et débats ouverts")
  ];

  const highlights = [
    {
      icon: "fas fa-users",
      title: t('event_ag.hl_1_title', "Réseau d'Experts"),
      desc: t('event_ag.hl_1_desc', "Rencontre privilégiée entre ingénieurs, institutionnels, universitaires et entreprises du secteur routier.")
    },
    {
      icon: "fas fa-chart-line",
      title: t('event_ag.hl_2_title', "Bilan & Stratégie"),
      desc: t('event_ag.hl_2_desc', "Découverte des grandes orientations de l'ATR pour le développement des infrastructures durables.")
    },
    {
      icon: "fas fa-handshake",
      title: t('event_ag.hl_3_title', "Engagement & Échange"),
      desc: t('event_ag.hl_3_desc', "Participation active aux décisions et adhésion aux nouveaux comités techniques.")
    }
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setFormLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage(t('event_ag.err_required', "Veuillez renseigner votre nom et votre adresse email."));
      setFormLoading(false);
      return;
    }

    try {
      const emailPromise = fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: 'evenement',
          message: `[Inscription — Assemblée Générale ATR 2026]\n\nÉvénement : ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)\nDate : Samedi 24 Octobre 2026 · 09h00\nLieu : Startup Village, Tunis\n\nCoordonnées du participant :\n- Nom complet : ${formData.name.trim()}\n- Email : ${formData.email.trim()}\n- Téléphone : ${formData.phone.trim() || 'Non renseigné'}\n\nRemarques / Message :\n${formData.message.trim() || 'Demande d’inscription transmise via le site web officiel.'}\n\n---\nNotification envoyée automatiquement au secrétariat ATR à contact@atr-tunisie.org.`,
          consent: formData.consent,
        }),
      });

      const resPromise = fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId: 5,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim() || null,
        }),
      });

      await Promise.allSettled([emailPromise, resPromise]);

      setSuccessMessage(t('event_ag.msg_success', "Votre demande d’inscription à l’Assemblée Générale a bien été transmise à contact@atr-tunisie.org. Nous vous remercions pour votre engagement !"));

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: true
      });
    } catch (err) {
      setErrorMessage(t('event_ag.msg_error', "Une erreur est survenue lors de l’envoi. Veuillez réessayer ou contacter directement contact@atr-tunisie.org."));
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('event_ag.breadcrumb', "Assemblée Générale 2026")}>
      <main className="atr-seminar-page" style={{ background: '#F8FAFC', padding: '70px 0 100px' }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .atr-ag-card {
            background: #FFFFFF;
            border-radius: 20px;
            border: 1px solid #DFE6EE;
            box-shadow: 0 12px 36px rgba(16, 43, 84, 0.06);
            overflow: hidden;
            padding: 45px 50px;
          }
          .atr-seminar-hero-media {
            width: 100%;
            max-height: 520px;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 30px;
            box-shadow: 0 12px 30px rgba(16, 43, 84, 0.08);
            position: relative;
            cursor: pointer;
          }
          .atr-seminar-hero-media img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            transition: transform 0.35s ease;
          }
          .atr-seminar-hero-media:hover img {
            transform: scale(1.02);
          }
          .atr-media-zoom-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(16, 43, 84, 0.5) 0%, transparent 60%);
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            padding: 16px 20px;
            opacity: 0;
            transition: opacity 0.25s ease;
          }
          .atr-seminar-hero-media:hover .atr-media-zoom-overlay {
            opacity: 1;
          }
          .atr-media-zoom-badge {
            background: rgba(16, 43, 84, 0.92);
            color: #FFFFFF;
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 13.5px;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            gap: 7px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(4px);
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
            background: rgba(10, 27, 50, 0.9);
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
          .atr-seminar-title {
            color: #102B54;
            font-size: clamp(24px, 3.2vw, 36px);
            line-height: 1.25;
            margin-bottom: 18px;
            font-weight: 800;
          }
          .atr-ag-hero-banner::after {
            content: "";
            position: absolute;
            right: -30px;
            bottom: -30px;
            width: 220px;
            height: 220px;
            background: radial-gradient(circle, rgba(192, 123, 27, 0.25) 0%, rgba(192, 123, 27, 0) 70%);
            border-radius: 50%;
            pointer-events: none;
          }
          .atr-ag-hero-logo {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            padding: 8px 16px;
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 13.5px;
            font-weight: 700;
            color: #FFD18A;
            margin-bottom: 18px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .atr-ag-hero-title {
            color: #FFFFFF;
            font-size: clamp(24px, 3.2vw, 36px);
            font-weight: 800;
            line-height: 1.25;
            margin-bottom: 12px;
          }
          .atr-ag-hero-subtitle {
            color: #E2E8F0;
            font-size: 16.5px;
            line-height: 1.6;
            margin-bottom: 0;
            max-width: 650px;
          }
          .atr-seminar-meta {
            display: flex;
            align-items: center;
            gap: 22px;
            margin-bottom: 25px;
            color: #64748B;
            font-size: 14.5px;
            font-weight: 600;
            flex-wrap: wrap;
          }
          .atr-seminar-meta i {
            color: #C07B1B;
            margin-right: 6px;
          }
          .atr-ag-lead {
            color: #334155;
            font-size: 17px;
            line-height: 1.8;
            margin-bottom: 30px;
          }
          .atr-ag-agenda-box {
            background: #EEF5FB;
            padding: 30px 32px;
            border-left: 5px solid #1B5299;
            border-radius: 0 14px 14px 0;
            margin-bottom: 35px;
          }
          .atr-ag-agenda-box h4 {
            color: #102B54;
            font-size: 20px;
            margin-bottom: 18px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .atr-ag-agenda-list {
            padding: 0;
            list-style: none;
            margin: 0;
          }
          .atr-ag-agenda-list li {
            position: relative;
            padding-left: 28px;
            margin-bottom: 12px;
            color: #1E293B;
            font-size: 15.5px;
            line-height: 1.6;
          }
          .atr-ag-agenda-list li:last-child {
            margin-bottom: 0;
          }
          .atr-ag-agenda-list li i {
            position: absolute;
            left: 0;
            top: 4px;
            color: #C07B1B;
          }
          .atr-ag-payment-card {
            background: #FFFBF4;
            border: 1px solid #F5DEB3;
            border-left: 5px solid #C07B1B;
            border-radius: 0 14px 14px 0;
            padding: 22px 26px;
            margin-bottom: 40px;
          }
          .atr-ag-payment-card h5 {
            color: #8C550A;
            font-size: 16.5px;
            font-weight: 700;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .atr-ag-payment-card p {
            color: #4A3319;
            font-size: 14.5px;
            line-height: 1.65;
            margin: 0;
          }
          .atr-ag-highlights {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 40px;
          }
          .atr-ag-hl-item {
            background: #FFFFFF;
            border: 1px solid #DFE6EE;
            border-radius: 12px;
            padding: 22px 20px;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .atr-ag-hl-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(16, 43, 84, 0.08);
          }
          .atr-ag-hl-item i {
            font-size: 24px;
            color: #1B5299;
            margin-bottom: 12px;
            display: inline-block;
          }
          .atr-ag-hl-item h5 {
            color: #102B54;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 8px;
          }
          .atr-ag-hl-item p {
            color: #64748B;
            font-size: 13.5px;
            line-height: 1.55;
            margin: 0;
          }
          /* FORM SECTION */
          .atr-ag-form-section {
            background: #FFFFFF;
            border: 2px solid #1B5299;
            border-radius: 18px;
            padding: 38px 42px;
            margin-top: 45px;
            box-shadow: 0 16px 40px rgba(27, 82, 153, 0.08);
            position: relative;
          }
          .atr-ag-form-badge {
            position: absolute;
            top: -15px;
            left: 35px;
            background: #1B5299;
            color: #FFFFFF;
            font-size: 13px;
            font-weight: 800;
            padding: 5px 16px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .atr-ag-form-header {
            margin-bottom: 26px;
          }
          .atr-ag-form-header h3 {
            color: #102B54;
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 8px;
          }
          .atr-ag-form-header p {
            color: #64748B;
            font-size: 14.5px;
            margin: 0;
            line-height: 1.6;
          }
          .atr-ag-form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
          .atr-ag-form-grid .full {
            grid-column: span 2;
          }
          .atr-ag-field label {
            display: block;
            color: #1E293B;
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 7px;
          }
          .atr-ag-field input,
          .atr-ag-field select,
          .atr-ag-field textarea {
            width: 100%;
            background: #F8FAFC;
            border: 1px solid #CBD5E1;
            border-radius: 10px;
            padding: 12px 16px;
            font-size: 14.5px;
            color: #1E293B;
            outline: none;
            transition: all 0.2s;
            font-family: inherit;
          }
          .atr-ag-field input:focus,
          .atr-ag-field select:focus,
          .atr-ag-field textarea:focus {
            background: #FFFFFF;
            border-color: #1B5299;
            box-shadow: 0 0 0 3px rgba(27, 82, 153, 0.15);
          }
          .atr-ag-form-actions {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 24px;
            flex-wrap: wrap;
          }
          .atr-btn-submit-ag {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: #C07B1B;
            color: #FFFFFF !important;
            border: none;
            border-radius: 10px;
            padding: 14px 28px;
            font-size: 15.5px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.25s ease;
            box-shadow: 0 6px 16px rgba(192, 123, 27, 0.25);
          }
          .atr-btn-submit-ag:hover:not(:disabled) {
            background: #a36612;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(192, 123, 27, 0.35);
          }
          .atr-btn-submit-ag:disabled {
            opacity: 0.65;
            cursor: not-allowed;
          }
          /* COPY LINK BUTTON */
          .atr-btn-copy-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: #FFFFFF;
            color: #102B54 !important;
            border: 1px solid #CBD5E1;
            border-radius: 10px;
            padding: 13px 22px;
            font-size: 14.5px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .atr-btn-copy-link:hover {
            border-color: #102B54;
            background: #F1F5F9;
            transform: translateY(-1px);
          }
          .atr-btn-copy-link.copied {
            background: #E8F5E9;
            border-color: #4CAF50;
            color: #2E7D32 !important;
          }
          /* SIDEBAR */
          .atr-seminar-sidebar-widget {
            background: #FFFFFF;
            border: 1px solid #DFE6EE;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 10px 28px rgba(16, 43, 84, 0.05);
            margin-bottom: 25px;
          }
          .atr-seminar-sidebar-widget h4 {
            color: #102B54;
            font-size: 19px;
            margin-bottom: 18px;
            font-weight: 700;
            border-bottom: 1px solid #F1F5F9;
            padding-bottom: 12px;
          }
          .atr-btn-cta-sidebar {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            background: #1B5299;
            color: #FFFFFF !important;
            padding: 13px 18px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 14.5px;
            text-decoration: none !important;
            transition: all 0.2s;
            margin-bottom: 12px;
          }
          .atr-btn-cta-sidebar:hover {
            background: #102B54;
            transform: translateY(-1px);
            color: #FFFFFF !important;
          }
          .atr-btn-back-events {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 22px;
            background: #C07B1B;
            color: #ffffff !important;
            font-family: inherit;
            font-size: 14.5px;
            font-weight: 700;
            border-radius: 8px;
            text-decoration: none !important;
            transition: all 0.25s ease;
            box-shadow: 0 4px 12px rgba(192, 123, 27, 0.2);
            margin-top: 30px;
          }
          .atr-btn-back-events:hover {
            background: #a36612;
            transform: translateY(-2px);
            color: #ffffff !important;
          }

          @media (max-width: 991px) {
            .atr-ag-card { padding: 30px 24px; }
            .atr-ag-highlights { grid-template-columns: 1fr; }
            .atr-ag-form-section { padding: 28px 22px; }
            .atr-ag-form-grid { grid-template-columns: 1fr; }
            .atr-ag-form-grid .full { grid-column: span 1; }
          }

          /* RTL SUPPORT */
          body[dir="rtl"] .atr-ag-card { text-align: right; }
          body[dir="rtl"] .atr-seminar-meta i { margin-right: 0; margin-left: 6px; }
          body[dir="rtl"] .atr-ag-agenda-box {
            border-right: 5px solid #1B5299;
            border-left: none;
            border-radius: 14px 0 0 14px;
            text-align: right;
          }
          body[dir="rtl"] .atr-ag-agenda-list li {
            padding-right: 28px;
            padding-left: 0;
          }
          body[dir="rtl"] .atr-ag-agenda-list li i {
            right: 0;
            left: auto;
          }
          body[dir="rtl"] .atr-ag-payment-card {
            border-right: 5px solid #C07B1B;
            border-left: none;
            border-radius: 14px 0 0 14px;
            text-align: right;
          }
          body[dir="rtl"] .atr-ag-form-badge {
            left: auto;
            right: 35px;
          }
          body[dir="rtl"] .atr-seminar-sidebar-widget { text-align: right; }
        `}} />

        <div className="auto-container">
          <div className="row">
            {/* MAIN CONTENT COLUMN */}
            <div className="col-lg-8 col-md-12 col-sm-12">
              <article className="atr-ag-card">
                {/* HERO POSTER MEDIA AVEC ZOOM LIGHTBOX */}
                <div 
                  className="atr-seminar-hero-media"
                  onClick={() => setPreviewOpen(true)}
                  title={isRtl ? "انقر لعرض الملصق بالحجم الكامل" : "Cliquer pour afficher l'affiche en grand"}
                >
                  <img src="/affiche.jpg" alt={t('event_ag.banner_title', "Affiche Assemblée Générale ATR 2026")} />
                  <div className="atr-media-zoom-overlay">
                    <span className="atr-media-zoom-badge">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                      {t('events.zoom_poster', "Agrandir l'affiche")}
                    </span>
                  </div>
                </div>

                {/* META INFO */}
                <div className="atr-seminar-meta">
                  <span><i className="far fa-calendar-alt"></i> {t('event_ag.meta_date', "Samedi 24 Octobre 2026 · 09h00")}</span>
                  <span><i className="fas fa-map-marker-alt"></i> {t('event_ag.meta_location', "Startup Village, Tunis")}</span>
                </div>

                <h1 className="atr-seminar-title">{t('event_ag.banner_title', "ASSEMBLÉE GÉNÉRALE ORDINAIRE")}</h1>
                <p className="atr-ag-lead">
                  {t('event_ag.lead', "L’Association Tunisienne des Routes (ATR) a le grand plaisir de convier l’ensemble de ses membres et partenaires à son Assemblée Générale annuelle. Votre présence est déterminante pour la vitalité de l’ATR et pour continuer à développer ensemble nos actions et notre expertise au service du secteur routier en Tunisie.")}
                </p>

                {/* HIGHLIGHTS */}
                <div className="atr-ag-highlights">
                  {highlights.map((hl, idx) => (
                    <div key={idx} className="atr-ag-hl-item">
                      <i className={hl.icon}></i>
                      <h5>{hl.title}</h5>
                      <p>{hl.desc}</p>
                    </div>
                  ))}
                </div>

                {/* AGENDA BOX */}
                <div className="atr-ag-agenda-box">
                  <h4>
                    <i className="fas fa-clipboard-list" style={{ color: '#1B5299' }}></i>
                    {t('event_ag.agenda_title', "Ordre du Jour :")}
                  </h4>
                  <ul className="atr-ag-agenda-list">
                    {agendaItems.map((item, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check-circle"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COTISATION & PAYMENT CARD */}
                <div className="atr-ag-payment-card">
                  <h5>
                    <i className="fas fa-credit-card"></i>
                    {t('event_ag.payment_title', "Cotisation annuelle 2026 & Virement :")}
                  </h5>
                  <p>
                    {t('event_ag.payment_desc', "La cotisation annuelle 2026 pourra être réglée par virement bancaire sur le compte de l'ATR (RIB N° 08603000152009058019) ou par chèque à l'ordre de l'Association Tunisienne des Routes.")}
                  </p>
                </div>

                {/* PRE-REGISTRATION FORM SECTION */}
                <section id="inscription" className="atr-ag-form-section">
                  <span className="atr-ag-form-badge">{t('event_ag.form_badge', "Formulaire Officiel")}</span>
                  <div className="atr-ag-form-header">
                    <h3>{t('event_ag.form_title', "Inscription à l’Assemblée Générale")}</h3>
                    <p>
                      {t('event_ag.form_desc', "Remplissez ce formulaire pour confirmer votre participation. Votre demande sera transmise instantanément au secrétariat de l'ATR à contact@atr-tunisie.org.")}
                    </p>
                  </div>

                  {successMessage && (
                    <div style={{ background: '#E8F5E9', border: '1px solid #81C784', color: '#1B5E20', padding: '16px 20px', borderRadius: '10px', marginBottom: '22px', fontSize: '15px', fontWeight: 600 }}>
                      <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i> {successMessage}
                    </div>
                  )}

                  {errorMessage && (
                    <div style={{ background: '#FFEBEE', border: '1px solid #EF9A9A', color: '#C62828', padding: '16px 20px', borderRadius: '10px', marginBottom: '22px', fontSize: '15px', fontWeight: 600 }}>
                      <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i> {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="atr-ag-form-grid">
                      <div className="atr-ag-field">
                        <label>{t('event_ag.f_name', "Nom et Prénom *")}</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={isRtl ? "الاسم واللقب" : (language === 'en' ? "Full Name" : "Nom et Prénom")}
                        />
                      </div>

                      <div className="atr-ag-field">
                        <label>{t('event_ag.f_email', "Adresse Email *")}</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={isRtl ? "nom@example.com :مثال" : "Ex : nom@example.com"}
                        />
                      </div>

                      <div className="atr-ag-field full">
                        <label>{t('event_ag.f_phone', "Numéro de Téléphone *")}</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="EX : +216 ** *** ***"
                        />
                      </div>

                      <div className="atr-ag-field full">
                        <label>{t('event_ag.f_msg', "Message ou remarque (optionnel)")}</label>
                        <textarea
                          rows="3"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={isRtl ? "ملاحظات أو استفسارات إضافية..." : "Ex : Précisions ou remarques éventuelles..."}
                        />
                      </div>
                    </div>

                    <div className="atr-ag-form-actions">
                      <button
                        type="submit"
                        disabled={formLoading}
                        className="atr-btn-submit-ag"
                      >
                        {formLoading ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i>
                            <span>{t('event_ag.btn_sending', "Transmission en cours...")}</span>
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane"></i>
                            <span>{t('event_ag.btn_submit', "Confirmer mon inscription")}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </section>

                {/* BOTTOM ACTIONS / BACK & SHARE */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginTop: '30px' }}>
                  <Link href="/events" className="atr-btn-back-events" style={{ marginTop: 0 }}>
                    {isRtl ? `${t('event_ag.btn_back', 'Retour aux Événements')} ←` : `← ${t('event_ag.btn_back', 'Retour aux Événements')}`}
                  </Link>

                  <button
                    type="button"
                    onClick={copyLink}
                    className={`atr-btn-copy-link ${copied ? 'copied' : ''}`}
                  >
                    {copied ? (
                      <>
                        <i className="fas fa-check"></i>
                        <span>{t('event_ag.btn_copied', "Lien copié dans le presse-papier !")}</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-link"></i>
                        <span>{t('event_ag.btn_copy', "Copier le lien")}</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            </div>

            {/* SIDEBAR COLUMN */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              <aside>
                {/* WIDGET 1: INFORMATIONS */}
                <div className="atr-seminar-sidebar-widget">
                  <h4>{t('event_ag.sb_info_title', "Informations Pratiques")}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: 1.85, margin: 0 }}>
                    <li className="mb-2">
                      <i className="far fa-calendar-alt" style={{ color: '#C07B1B', marginRight: isRtl ? '0' : '10px', marginLeft: isRtl ? '10px' : '0' }}></i>
                      <strong>{t('event_ag.sb_date_label', "Date :")}</strong> {t('event_ag.sb_date_val', "Samedi 24 Octobre 2026")}
                    </li>
                    <li className="mb-2">
                      <i className="far fa-clock" style={{ color: '#C07B1B', marginRight: isRtl ? '0' : '10px', marginLeft: isRtl ? '10px' : '0' }}></i>
                      <strong>{t('event_ag.sb_time_label', "Horaire :")}</strong> {t('event_ag.sb_time_val', "09h00")}
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-map-marker-alt" style={{ color: '#C07B1B', marginRight: isRtl ? '0' : '10px', marginLeft: isRtl ? '10px' : '0' }}></i>
                      <strong>{t('event_ag.sb_loc_label', "Lieu :")}</strong> {t('event_ag.sb_loc_val', "Startup Village, Tunis")}
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-landmark" style={{ color: '#C07B1B', marginRight: isRtl ? '0' : '10px', marginLeft: isRtl ? '10px' : '0' }}></i>
                      <strong>{t('event_ag.sb_org_label', "Organisateur :")}</strong> {t('event_ag.sb_org_val', "Bureau Exécutif ATR")}
                    </li>
                  </ul>

                  <a
                    href="https://maps.app.goo.gl/3Vbb8kya3VsCa2NT8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', color: '#1B5299', fontWeight: 700, textDecoration: 'none', marginBottom: '18px' }}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span>{t('event_ag.sb_map_link', "Ouvrir dans Google Maps ↗")}</span>
                  </a>

                  <a
                    href="#inscription"
                    className="atr-btn-cta-sidebar"
                  >
                    <span>{t('event_ag.sb_cta_inscribe', "Accéder à la pré-inscription ↓")}</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyLink}
                    className={`atr-btn-copy-link ${copied ? 'copied' : ''}`}
                    style={{ width: '100%' }}
                  >
                    {copied ? (
                      <>
                        <i className="fas fa-check"></i>
                        <span>{t('event_ag.btn_copied', "Lien copié !")}</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-share-alt"></i>
                        <span>{t('event_ag.btn_share', "Partager / Copier le lien")}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* WIDGET 2: SECRETARIAT */}
                <div className="atr-seminar-sidebar-widget">
                  <h4>{t('event_ag.sb_contact_title', "Secrétariat ATR")}</h4>
                  <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '14px' }}>
                    {t('event_ag.sb_contact_desc', "Pour toute question relative aux adhésions ou à l'Assemblée Générale :")}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, color: '#1E293B', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>
                    <li>
                      <i className="fas fa-envelope" style={{ color: '#1B5299', marginRight: isRtl ? '0' : '8px', marginLeft: isRtl ? '8px' : '0' }}></i>
                      <a href="mailto:contact@atr-tunisie.org" style={{ color: '#1B5299', fontWeight: 600, textDecoration: 'none' }}>contact@atr-tunisie.org</a>
                    </li>
                    <li>
                      <i className="fas fa-phone-alt" style={{ color: '#1B5299', marginRight: isRtl ? '0' : '8px', marginLeft: isRtl ? '8px' : '0' }}></i>
                      <a href="tel:+21670630624" style={{ color: '#1B5299', fontWeight: 600, textDecoration: 'none' }}>+216 70 630 624</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      {previewOpen && (
        <div className="atr-lightbox-modal" onClick={() => setPreviewOpen(false)}>
          <div className="atr-lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
            <button 
              className="atr-lightbox-close" 
              onClick={() => setPreviewOpen(false)} 
              aria-label="Fermer l'affiche"
              title="Fermer (Échap)"
            >
              ×
            </button>
            <img 
              src="/affiche.jpg" 
              alt={t('event_ag.banner_title', "Affiche Assemblée Générale ATR 2026")} 
              className="atr-lightbox-img" 
            />
            <p className="atr-lightbox-caption">{t('event_ag.banner_title', "ASSEMBLÉE GÉNÉRALE ORDINAIRE – ATR")}</p>
          </div>
        </div>
      )}
    </Layout>
  )
}
