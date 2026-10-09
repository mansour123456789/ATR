'use client'
import React, { useEffect } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

export default function SeminairePiarc() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const [copied, setCopied] = React.useState(false);
  const [previewOpen, setPreviewOpen] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPreviewOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    const title = t('event_piarc.title', "Concevoir et gérer les routes selon l'approche du système sûr");
    document.title = `${title} | ATR - Association Tunisienne des Routes`;
  }, [language, t]);

  const targetAudience = [
    t('event_piarc.target_1', "Décideurs publics & Ministères"),
    t('event_piarc.target_2', "Ingénieurs des administrations"),
    t('event_piarc.target_3', "Entreprises de BTP"),
    t('event_piarc.target_4', "Bureaux d'études"),
    t('event_piarc.target_5', "Chercheurs & Universitaires")
  ];

  const programDays = [
    { label: t('event_piarc.prog_d1_label', "Jour 1 (09 Déc) :"), text: t('event_piarc.prog_d1_text', "Plénière d'ouverture & Cocktail") },
    { label: t('event_piarc.prog_d2_label', "Jour 2 (10 Déc) :"), text: t('event_piarc.prog_d2_text', "Sessions techniques & Dîner de gala") },
    { label: t('event_piarc.prog_d3_label', "Jour 3 (11 Déc) :"), text: t('event_piarc.prog_d3_text', "Synthèse & Visites techniques") }
  ];

  const sessionsCol1 = [
    t('event_piarc.sess_1', "Conception des chaussées face aux sollicitations extrêmes"),
    t('event_piarc.sess_2', "Intégration du changement climatique dans la gestion patrimoniale"),
    t('event_piarc.sess_3', "Matériaux innovants et bas carbone"),
    t('event_piarc.sess_4', "Recyclage des chaussées et économie circulaire")
  ];

  const sessionsCol2 = [
    t('event_piarc.sess_5', "Outils de collecte de données pour l'évaluation"),
    t('event_piarc.sess_6', "Financement et prise de décision"),
    t('event_piarc.sess_7', "Entretien sous contraintes environnementales"),
    t('event_piarc.sess_8', "Cas d'études d'adaptation climatique réussies")
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('event_piarc.breadcrumb', "Séminaire PIARC 2026")}>
      <main className="atr-seminar-page" style={{ background: '#F8FAFC', padding: '80px 0 100px' }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .atr-seminar-card {
            background: #FFFFFF;
            border-radius: 20px;
            border: 1px solid #DFE6EE;
            box-shadow: 0 12px 36px rgba(16, 43, 84, 0.06);
            overflow: hidden;
            padding: 45px 50px;
          }
          .atr-seminar-hero-media {
            width: 100%;
            max-height: 480px;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 35px;
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
          .atr-seminar-meta {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
            color: #64748B;
            font-size: 14px;
            font-weight: 600;
            flex-wrap: wrap;
          }
          .atr-seminar-meta i {
            color: #C07B1B;
            margin-right: 6px;
          }
          .atr-seminar-title {
            color: #102B54;
            font-size: clamp(28px, 3.5vw, 38px);
            line-height: 1.25;
            margin-bottom: 18px;
            font-weight: 700;
          }
          .atr-seminar-lead {
            color: #334155;
            font-size: 17.5px;
            line-height: 1.75;
            margin-bottom: 30px;
          }
          .atr-seminar-theme-box {
            background: #EEF5FB;
            padding: 26px 30px;
            border-left: 5px solid #1B5299;
            border-radius: 0 14px 14px 0;
            margin-bottom: 35px;
          }
          .atr-seminar-theme-box h4 {
            color: #102B54;
            font-size: 19px;
            margin-bottom: 8px;
            font-weight: 700;
          }
          .atr-seminar-theme-box p {
            color: #1E293B;
            font-size: 16.5px;
            font-style: italic;
            line-height: 1.6;
            margin: 0;
          }
          .atr-seminar-h3 {
            color: #102B54;
            font-size: 22px;
            font-weight: 700;
            margin: 32px 0 16px;
          }
          .atr-seminar-list {
            padding: 0;
            list-style: none;
            margin-bottom: 30px;
          }
          .atr-seminar-list li {
            position: relative;
            padding-left: 28px;
            margin-bottom: 12px;
            color: #334155;
            font-size: 15px;
            line-height: 1.65;
          }
          .atr-seminar-list li i {
            position: absolute;
            left: 0;
            top: 4px;
            color: #C07B1B;
          }
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
            font-size: 20px;
            margin-bottom: 20px;
            font-weight: 700;
          }
          .atr-seminar-sidebar-widget.dark {
            background: #102B54;
            color: #FFFFFF;
            border: none;
          }
          .atr-seminar-sidebar-widget.dark h4 {
            color: #FFFFFF;
          }
          .atr-btn-back-events {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 22px;
            background: #C07B1B;
            color: #ffffff !important;
            font-family: 'DM Sans', sans-serif !important;
            font-size: 14.5px;
            font-weight: 700;
            border-radius: 8px;
            text-decoration: none !important;
            transition: all 0.25s ease;
            box-shadow: 0 4px 12px rgba(192, 123, 27, 0.2);
            margin-top: 25px;
          }
          .atr-btn-back-events:hover {
            background: #a36612;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(192, 123, 27, 0.3);
            color: #ffffff !important;
          }

          @media (max-width: 767px) {
            .atr-seminar-card { padding: 26px 20px; }
          }

          /* RTL Layout Support */
          body[dir="rtl"] .atr-seminar-card {
            text-align: right;
          }
          body[dir="rtl"] .atr-seminar-meta i {
            margin-right: 0;
            margin-left: 6px;
          }
          body[dir="rtl"] .atr-seminar-theme-box {
            border-right: 5px solid #1B5299;
            border-left: none;
            border-radius: 14px 0 0 14px;
            text-align: right;
          }
          body[dir="rtl"] .atr-seminar-theme-box p {
            font-style: normal !important;
            font-size: 18px;
            line-height: 1.8;
          }
          body[dir="rtl"] .atr-seminar-list li {
            padding-right: 28px;
            padding-left: 0;
          }
          body[dir="rtl"] .atr-seminar-list li i {
            right: 0;
            left: auto;
          }
          body[dir="rtl"] .atr-seminar-sidebar-widget {
            text-align: right;
          }
          body[dir="rtl"] .atr-seminar-lead {
            font-size: 18.5px;
            line-height: 1.85;
          }
        `}} />
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <article className="atr-seminar-card">
                <div 
                  className="atr-seminar-hero-media"
                  onClick={() => setPreviewOpen(true)}
                  title={isRtl ? "انقر لعرض الملصق بالحجم الكامل" : "Cliquer pour agrandir l'affiche"}
                >
                  <img src="/event9desember.jpg" alt={t('event_piarc.hero_alt', "Séminaire PIARC 09-11 Décembre 2026 Tunis")} />
                  <div className="atr-media-zoom-overlay">
                    <span className="atr-media-zoom-badge">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                      {t('events.zoom_poster', "Agrandir l'affiche")}
                    </span>
                  </div>
                </div>
                
                <div className="atr-seminar-meta">
                  <span><i className="far fa-calendar-alt"></i> {t('event_piarc.meta_date', "09 au 11 Décembre 2026")}</span>
                  <span><i className="fas fa-map-marker-alt"></i> {t('event_piarc.meta_location', "Tunis, Tunisie")}</span>
                </div>

                <h1 className="atr-seminar-title">{t('event_piarc.title', "Concevoir et gérer les routes selon l'approche du système sûr")}</h1>
                <p className="atr-seminar-lead">{t('event_piarc.lead', "L'Association Tunisienne des Routes (ATR), en collaboration avec l'Association mondiale de la Route (PIARC), organise un grand séminaire international à Tunis.")}</p>

                <div className="atr-seminar-theme-box">
                  <h4>{t('event_piarc.theme_heading', "Thème Principal :")}</h4>
                  <p>{t('event_piarc.theme_text', "« La sécurité routière, la conception géométrique et l'approche système sûr »")}</p>
                </div>

                <h3 className="atr-seminar-h3">{t('event_piarc.h3_objectives', "Objectifs de l'événement")}</h3>
                <ul className="atr-seminar-list">
                  <li><i className="fas fa-check-circle"></i> {t('event_piarc.obj_1', "Présenter les dernières innovations en matière de matériaux routiers durables et bas carbone.")}</li>
                  <li><i className="fas fa-check-circle"></i> {t('event_piarc.obj_2', "Débattre des méthodologies d'adaptation des chaussées aux impacts climatiques.")}</li>
                  <li><i className="fas fa-check-circle"></i> {t('event_piarc.obj_3', "Partager les meilleures pratiques de gestion patrimoniale des actifs routiers.")}</li>
                  <li><i className="fas fa-check-circle"></i> {t('event_piarc.obj_4', "Promouvoir l'intégration de l'économie circulaire dans les projets routiers.")}</li>
                </ul>

                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <div className="p-4" style={{ backgroundColor: '#102B54', borderRadius: '14px', color: '#FFFFFF', height: '100%' }}>
                      <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 700, marginBottom: '14px' }}>{t('event_piarc.target_heading', "Public Cible (300+ participants)")}</h4>
                      <ul style={{ paddingLeft: isRtl ? '0' : '18px', paddingRight: isRtl ? '18px' : '0', color: '#E2E8F0', fontSize: '14px', lineHeight: 1.7 }}>
                        {targetAudience.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-4" style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', border: '1px solid #DFE6EE', height: '100%' }}>
                      <h4 style={{ color: '#102B54', fontSize: '18px', fontWeight: 700, marginBottom: '14px' }}>{t('event_piarc.prog_heading', "Programme (3 jours)")}</h4>
                      <ul style={{ paddingLeft: isRtl ? '0' : '18px', paddingRight: isRtl ? '18px' : '0', color: '#334155', fontSize: '14px', lineHeight: 1.7 }}>
                        {programDays.map((d, idx) => (
                          <li key={idx}><strong>{d.label}</strong> {d.text}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="atr-seminar-h3">{t('event_piarc.h3_sessions', "Sessions Techniques Détaillées")}</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="atr-seminar-list">
                      {sessionsCol1.map((sess, idx) => (
                        <li key={idx}><i className={isRtl ? "fas fa-arrow-left" : "fas fa-arrow-right"}></i> {sess}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="atr-seminar-list">
                      {sessionsCol2.map((sess, idx) => (
                        <li key={idx}><i className={isRtl ? "fas fa-arrow-left" : "fas fa-arrow-right"}></i> {sess}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Link href="/events" className="atr-btn-back-events">
                    {isRtl ? `${t('event_piarc.btn_back_events', 'Retour aux Événements')} ←` : `← ${t('event_piarc.btn_back_events', 'Retour aux Événements')}`}
                  </Link>
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <aside>
                <div className="atr-seminar-sidebar-widget">
                  <h4>{t('event_piarc.sb_info_heading', "Informations & Inscription")}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: 1.8 }}>
                    <li className="mb-2">
                      <i className="far fa-clock" style={{ color: '#C07B1B', marginRight: isRtl ? '0' : '10px', marginLeft: isRtl ? '10px' : '0' }}></i>{' '}
                      <strong>{t('event_piarc.sb_date_label', "Date :")}</strong> {t('event_piarc.sb_date_val', "09 au 11 Décembre 2026")}
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-map-marker-alt" style={{ color: '#C07B1B', marginRight: isRtl ? '0' : '10px', marginLeft: isRtl ? '10px' : '0' }}></i>{' '}
                      <strong>{t('event_piarc.sb_loc_label', "Lieu :")}</strong> {t('event_piarc.sb_loc_val', "Tunis, Tunisie")}
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-globe" style={{ color: '#C07B1B', marginRight: isRtl ? '0' : '10px', marginLeft: isRtl ? '10px' : '0' }}></i>{' '}
                      <strong>{t('event_piarc.sb_org_label', "Organisateur :")}</strong> {t('event_piarc.sb_org_val', "ATR & PIARC")}
                    </li>
                  </ul>
                  <a
                    href="https://event.atr-tunisie.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-card-cta"
                    style={{ width: '100%', justifyContent: 'center', background: '#C07B1B', color: '#FFFFFF', padding: '14px 20px', borderRadius: '10px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span>{t('event_piarc.sb_btn_register', "S'inscrire sur event.atr-tunisie.org ↗")}</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyLink}
                    style={{
                      marginTop: '12px',
                      width: '100%',
                      justifyContent: 'center',
                      background: copied ? '#E8F5E9' : '#FFFFFF',
                      color: copied ? '#2E7D32' : '#102B54',
                      border: copied ? '1px solid #4CAF50' : '1px solid #CBD5E1',
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <i className={copied ? "fas fa-check" : "fas fa-share-alt"}></i>
                    <span>{copied ? t('event_piarc.btn_copied', "Lien copié dans le presse-papier !") : t('event_piarc.btn_share', "Partager / Copier le lien")}</span>
                  </button>
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
              src="/event9desember.jpg" 
              alt={t('event_piarc.hero_alt', "Séminaire PIARC 09-11 Décembre 2026 Tunis")} 
              className="atr-lightbox-img" 
            />
            <p className="atr-lightbox-caption">{t('event_piarc.title', "Concevoir et gérer les routes selon l'approche du système sûr")}</p>
          </div>
        </div>
      )}
    </Layout>
  )
}
