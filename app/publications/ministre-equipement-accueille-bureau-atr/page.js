'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import { useLanguage } from '@/context/LanguageContext'

const STYLES = `
  .atr-article-page {
    padding: 80px 0 120px;
    background: #F8FAFC;
    font-family: 'Inter', sans-serif;
  }

  .atr-article-page .auto-container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 15% !important;
    padding-right: 15% !important;
    box-sizing: border-box !important;
  }
  @media (max-width: 991px) {
    .atr-article-page .auto-container {
      padding-left: 6% !important;
      padding-right: 6% !important;
    }
  }

  .atr-article-card {
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid rgba(27, 82, 153, 0.08);
    box-shadow: 0 10px 35px rgba(15, 23, 42, 0.04);
    overflow: hidden;
    padding: 45px 50px;
  }
  @media (max-width: 767px) {
    .atr-article-card {
      padding: 26px 20px;
    }
  }

  .atr-article-badge {
    display: inline-block;
    font-family: 'Inter', sans-serif !important;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #C07B1B;
    background: rgba(192, 123, 27, 0.08);
    border: 1px solid rgba(192, 123, 27, 0.2);
    padding: 6px 16px;
    border-radius: 50px;
    margin-bottom: 20px;
  }

  .atr-article-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: clamp(28px, 3.5vw, 40px);
    font-weight: 700;
    color: #0F172A;
    line-height: 1.25;
    margin-bottom: 22px;
    letter-spacing: -0.02em;
  }

  .atr-article-meta-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 16px 0;
    border-top: 1px solid #E2E8F0;
    border-bottom: 1px solid #E2E8F0;
    margin-bottom: 35px;
    font-size: 14px;
    color: #64748B;
  }

  .atr-meta-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .atr-meta-item strong {
    color: #0F172A;
  }

  .atr-article-hero-img {
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    background: #0F2A4A;
  }

  .atr-article-hero-img img {
    width: 100%;
    height: auto;
    max-height: 480px;
    object-fit: cover;
    display: block;
  }

  .atr-article-content {
    font-size: 16.5px;
    line-height: 1.85;
    color: #334155;
  }

  .atr-article-content p {
    margin-bottom: 22px;
  }

  .atr-article-lead {
    font-size: 18.5px;
    line-height: 1.8;
    color: #0F2A4A;
    font-weight: 500;
    background: #F0F6FF;
    padding: 24px 30px;
    border-radius: 16px;
    border-left: 5px solid #1B5299;
    margin-bottom: 35px;
  }

  .atr-speaker-block {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-left: 4px solid #C07B1B;
    border-radius: 14px;
    padding: 22px 26px;
    margin: 30px 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  }

  .atr-speaker-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .atr-speaker-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #1B5299;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    flex-shrink: 0;
  }

  .atr-speaker-name {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 17.5px;
    font-weight: 700;
    color: #0F172A;
    margin: 0;
  }

  .atr-speaker-title {
    font-size: 13px;
    color: #64748B;
    margin: 0;
  }

  .atr-quote-callout {
    background: linear-gradient(135deg, #0F2A4A 0%, #1B5299 100%);
    color: #ffffff;
    border-radius: 18px;
    padding: 30px 35px;
    margin: 35px 0;
    position: relative;
  }

  .atr-quote-callout p {
    font-size: 18px;
    font-style: italic;
    line-height: 1.7;
    margin-bottom: 10px;
    color: #ffffff !important;
  }

  .atr-quote-callout cite {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #FDE68A;
  }

  .atr-sidebar-card {
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid rgba(27, 82, 153, 0.08);
    padding: 30px;
    box-shadow: 0 5px 20px rgba(15, 23, 42, 0.03);
    margin-bottom: 30px;
  }

  .atr-sidebar-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 18px;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #E2E8F0;
  }

  .atr-article-actions {
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid #E2E8F0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .atr-btn-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 24px;
    background: #C07B1B;
    color: #ffffff !important;
    font-family: 'DM Sans', sans-serif !important;
    font-size: 14.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-radius: 8px;
    text-decoration: none !important;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(192, 123, 27, 0.2);
  }

  .atr-btn-back:hover {
    background: #a36612;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(192, 123, 27, 0.3);
    color: #ffffff !important;
  }

  .atr-btn-source {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 13px 26px;
    background: #1B5299;
    color: #ffffff !important;
    font-family: 'DM Sans', sans-serif !important;
    font-size: 14.5px;
    font-weight: 700;
    border-radius: 8px;
    text-decoration: none !important;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(27, 82, 153, 0.2);
    white-space: nowrap;
  }

  .atr-btn-source:hover {
    background: #123e75;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(27, 82, 153, 0.3);
    color: #ffffff !important;
  }

  @media (max-width: 640px) {
    .atr-article-actions {
      flex-direction: column;
      align-items: stretch;
    }
    .atr-btn-back,
    .atr-btn-source {
      width: 100%;
      justify-content: center;
      text-align: center;
      white-space: normal;
    }
  }

  /* RTL Enhancements */
  body[dir="rtl"] .atr-article-card {
    text-align: right;
  }
  body[dir="rtl"] .atr-article-lead {
    border-right: 5px solid #1B5299;
    border-left: none;
    text-align: right;
    font-size: 19.5px;
    line-height: 1.9;
  }
  body[dir="rtl"] .atr-speaker-block {
    border-right: 4px solid #C07B1B;
    border-left: 1px solid #E2E8F0;
    text-align: right;
  }
  body[dir="rtl"] .atr-quote-callout {
    text-align: right;
  }
  body[dir="rtl"] .atr-quote-callout p {
    font-style: normal !important;
    font-size: 19.5px;
    line-height: 1.85;
  }
  body[dir="rtl"] .atr-quote-callout cite {
    text-align: right;
  }
  body[dir="rtl"] .atr-sidebar-card {
    text-align: right;
  }
  body[dir="rtl"] .atr-sidebar-title {
    text-align: right;
  }
  body[dir="rtl"] .atr-article-content p {
    font-size: 17px;
    line-height: 1.85;
  }
`

export default function ArticlePresseMinistre() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    const title = t('pub_ministre.title', "Le ministre de l’Équipement accueille le nouveau bureau de l’Association tunisienne des routes");
    document.title = `${title} | ATR - Association Tunisienne des Routes`;
  }, [language, t]);

  const keywords = [
    t('pub_ministre.kw_1', '#MinistèreÉquipement'),
    t('pub_ministre.kw_2', '#SalahZouari'),
    t('pub_ministre.kw_3', '#LiliaSifaoui'),
    t('pub_ministre.kw_4', '#PIARC'),
    t('pub_ministre.kw_5', '#BureauExécutif'),
    t('pub_ministre.kw_6', '#Infrastructures'),
    t('pub_ministre.kw_7', '#LaPresse')
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('pub_ministre.breadcrumb', "Revue de Presse")}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="atr-article-page">
        <div className="auto-container">
          <div className="row">
            {/* Colonne Principale (8 cols) */}
            <div className="col-lg-8 col-md-12">
              <article className="atr-article-card">
                <span className="atr-article-badge">{t('pub_ministre.badge', "Revue de Presse · La Presse de Tunisie")}</span>

                <h1 className="atr-article-title">
                  {t('pub_ministre.title', "Le ministre de l’Équipement accueille le nouveau bureau de l’Association tunisienne des routes")}
                </h1>

                <div className="atr-article-meta-bar">
                  <span className="atr-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C07B1B" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <strong>{t('pub_ministre.date', "6 Août 2025")}</strong>
                  </span>
                  <span className="atr-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B5299" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {t('pub_ministre.location', "Ministère de l'Équipement et de l'Habitat, Tunis")}
                  </span>
                  <span className="atr-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    {t('pub_ministre.source', "ATR, Ministère de l'Équipement & PIARC")}
                  </span>
                </div>

                <div className="atr-article-hero-img">
                  <img src="/atrr.jpg" alt={t('pub_ministre.hero_alt', "Le ministre de l'Équipement lors de l'accueil du nouveau bureau de l'ATR")} />
                </div>

                <div className="atr-article-content">
                  {/* Lead / Paragraphe d'ouverture */}
                  <div className="atr-article-lead">
                    {t('pub_ministre.lead', "Ce lundi matin, M. Salah Zouari, ministre de l’Équipement et de l’Habitat, a reçu les membres du nouveau bureau exécutif élu de l’Association tunisienne des routes (ATR). La rencontre s’est déroulée en présence du premier délégué de l’Association mondiale de la route (PIARC) et de la conseillère technique de la PIARC.")}
                  </div>

                  {/* Déclaration du Ministre */}
                  <div className="atr-speaker-block">
                    <div className="atr-speaker-header">
                      <div className="atr-speaker-avatar">SZ</div>
                      <div>
                        <h4 className="atr-speaker-name">{t('pub_ministre.spk_min_name', "M. Salah Zouari")}</h4>
                        <p className="atr-speaker-title">{t('pub_ministre.spk_min_title', "Ministre de l’Équipement et de l’Habitat — République Tunisienne")}</p>
                      </div>
                    </div>
                    <p>
                      {t('pub_ministre.spk_min_p1', "Dès le début de la réunion, le ministre a salué le rôle important de l’association dans l’organisation de forums nationaux et internationaux sur les infrastructures et les transports, qui contribuent à l’échange d’expertises dans ce domaine.")}
                    </p>
                    <p className="mb-0">
                      {t('pub_ministre.spk_min_p2', "Il a souligné la nécessité de poursuivre ce travail afin de renforcer le rayonnement de l’association au niveau local et international et de développer la coopération avec le ministère.")}
                    </p>
                  </div>

                  <div className="atr-quote-callout">
                    <p>{t('pub_ministre.quote_text', "« Le ministre a salué le rôle important de l’association dans l’organisation de forums nationaux et internationaux sur les infrastructures et les transports, contribuant activement au partage des savoirs et au rayonnement de l'ingénierie tunisienne. »")}</p>
                    <cite>{t('pub_ministre.quote_author', "— M. Salah Zouari, Ministre de l’Équipement et de l’Habitat")}</cite>
                  </div>

                  {/* Déclaration de la Présidente ATR */}
                  <div className="atr-speaker-block">
                    <div className="atr-speaker-header">
                      <div className="atr-speaker-avatar">LS</div>
                      <div>
                        <h4 className="atr-speaker-name">{t('pub_ministre.spk_pres_name', "Mme Lilia Sifaoui")}</h4>
                        <p className="atr-speaker-title">{t('pub_ministre.spk_pres_title', "Présidente de l’Association Tunisienne des Routes (ATR) & Directrice Générale de l’unité de gestion du pont de Bizerte")}</p>
                      </div>
                    </div>
                    <p className="mb-0">
                      {t('pub_ministre.spk_pres_text', "Pour sa part, Mme Lilia Sifaoui, la présidente de l’association, a présenté un aperçu de la stratégie et des objectifs du nouveau bureau exécutif. Elle a indiqué qu’un programme de travail est en cours d’élaboration, en accord avec les nouvelles attentes et les visions futures, dans le but d’améliorer les performances de l’association et de renforcer son rôle dans le soutien du secteur routier et des infrastructures en République tunisienne.")}
                    </p>
                  </div>

                  <p>
                    {t('pub_ministre.conclusion', "Cette audience officielle scelle une coopération renforcée entre l'État et l'ATR, confirmant le statut d'interlocuteur privilégié de l'association auprès des autorités publiques et de l'Association Mondiale de la Route (PIARC).")}
                  </p>
                </div>

                {/* Boutons d'action et lien source officiel */}
                <div className="atr-article-actions">
                  <Link href="/publications" className="atr-btn-back">
                    {isRtl ? `${t('pub_ministre.btn_back', 'Retour aux Publications')} ←` : `← ${t('pub_ministre.btn_back', 'Retour aux Publications')}`}
                  </Link>
                  <a
                    href="https://www.lapresse.tn/2025/08/06/le-ministre-de-lequipement-accueille-le-nouveau-bureau-de-lassociation-tunisienne-des-routes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="atr-btn-source"
                  >
                    <span>{t('pub_ministre.btn_source', "Consulter l'article sur La Presse")}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
              <aside>
                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">{t('pub_ministre.sidebar_title', "Fiche de l'Audience")}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14.5px', color: '#475569' }}>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>{t('pub_ministre.sb_date_label', "Date :")}</strong> {t('pub_ministre.sb_date_val', "6 Août 2025")}
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>{t('pub_ministre.sb_loc_label', "Lieu :")}</strong> {t('pub_ministre.sb_loc_val', "Siège du Ministère de l'Équipement et de l'Habitat, Tunis")}
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>{t('pub_ministre.sb_parts_label', "Participants :")}</strong> {t('pub_ministre.sb_parts_val', "M. Salah Zouari (Ministre), Bureau Exécutif ATR, Délégué PIARC")}
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>{t('pub_ministre.sb_topic_label', "Objet :")}</strong> {t('pub_ministre.sb_topic_val', "Prise de fonction du nouveau bureau et feuille de route stratégique")}
                    </li>
                    <li>
                      <strong style={{ color: '#0F172A' }}>{t('pub_ministre.sb_source_label', "Source Journal :")}</strong>{' '}
                      <a
                        href="https://www.lapresse.tn/2025/08/06/le-ministre-de-lequipement-accueille-le-nouveau-bureau-de-lassociation-tunisienne-des-routes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#1B5299', fontWeight: '600', textDecoration: 'underline' }}
                      >
                        {t('pub_ministre.sb_source_link', "La Presse de Tunisie ↗")}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">{t('pub_ministre.sb_other_title', "Autres Publications")}</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Link
                      href="/publications/securite-routiere-hss-chantiers"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', textDecoration: 'none', color: '#1B5299', fontWeight: '600' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      {t('pub_ministre.sb_other_pub1', "Rencontre Enjeux HSS & Sécurité Routière")}
                    </Link>
                    <Link
                      href="/publications/glissements-de-terrain-resilience-infrastructures"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', textDecoration: 'none', color: '#1B5299', fontWeight: '600' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                      {t('pub_ministre.sb_other_pub2', "Journée Technique Glissements de Terrain")}
                    </Link>
                  </div>
                </div>

                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">{t('pub_ministre.sb_keywords_title', "Mots-clés")}</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {keywords.map((kw, idx) => (
                      <span key={idx} style={{ background: '#F1F5F9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
