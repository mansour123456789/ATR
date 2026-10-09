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

  .atr-theme-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 30px 0 35px;
  }
  @media (max-width: 767px) {
    .atr-theme-grid {
      grid-template-columns: 1fr;
    }
  }

  .atr-theme-item {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .atr-theme-bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #1B5299;
    margin-top: 8px;
    flex-shrink: 0;
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

  .atr-thanks-block {
    background: #FEF9F0;
    border: 1px solid rgba(192, 123, 27, 0.25);
    border-radius: 16px;
    padding: 26px 30px;
    margin: 35px 0;
  }

  .atr-thanks-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 19px;
    font-weight: 700;
    color: #C07B1B;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
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
  body[dir="rtl"] .atr-thanks-block {
    text-align: right;
    border-right: 4px solid #C07B1B;
    border-left: 1px solid rgba(192, 123, 27, 0.25);
  }
  body[dir="rtl"] .atr-thanks-title {
    justify-content: flex-start;
  }
  body[dir="rtl"] .atr-theme-item {
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

export default function ArticleGlissementsTerrain() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    const title = t('pub_glissements.title', "Journée Technique : Glissements de terrain et résilience des infrastructures");
    document.title = `${title} | ATR - Association Tunisienne des Routes`;
  }, [language, t]);

  const keywords = [
    t('pub_glissements.kw_1', '#GlissementsDeTerrain'),
    t('pub_glissements.kw_2', '#ATMS'),
    t('pub_glissements.kw_3', '#ElMouradiGammarth'),
    t('pub_glissements.kw_4', '#Résilience'),
    t('pub_glissements.kw_5', '#Géotechnique'),
    t('pub_glissements.kw_6', '#OuvragesDArt'),
    t('pub_glissements.kw_7', '#MinistèreÉquipement'),
    t('pub_glissements.kw_8', '#FindGlocal')
  ];

  const themes = [
    { title: t('pub_glissements.theme_1_title', 'Cinématique des glissements de terrain'), desc: t('pub_glissements.theme_1_desc', 'et stratégies de protection adaptées.') },
    { title: t('pub_glissements.theme_2_title', 'Typologies des glissements'), desc: t('pub_glissements.theme_2_desc', 'et études de cas géotechniques réelles.') },
    { title: t('pub_glissements.theme_3_title', 'Protection et confortement'), desc: t('pub_glissements.theme_3_desc', 'des zones sensibles et instables.') },
    { title: t('pub_glissements.theme_4_title', 'Risques liés aux précipitations extrêmes'), desc: t('pub_glissements.theme_4_desc', 'et optimisation continue du drainage.') },
    { title: t('pub_glissements.theme_5_title', 'Glissement d’un viaduc autoroutier :'), desc: t('pub_glissements.theme_5_desc', 'auscultation et confortement d\'urgence.') },
    { title: t('pub_glissements.theme_6_title', 'Inspection des zones instables'), desc: t('pub_glissements.theme_6_desc', 'le long des réseaux routiers et ferroviaires.') },
    { title: t('pub_glissements.theme_7_title', 'Résilience des infrastructures'), desc: t('pub_glissements.theme_7_desc', 'et des territoires face aux aléas naturels.') },
    { title: t('pub_glissements.theme_8_title', 'Grande table ronde technique'), desc: t('pub_glissements.theme_8_desc', 'et retours d’expériences partagés.') }
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('pub_glissements.breadcrumb', "Journée Technique")}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="atr-article-page">
        <div className="auto-container">
          <div className="row">
            {/* Colonne Principale (8 cols) */}
            <div className="col-lg-8 col-md-12">
              <article className="atr-article-card">
                <span className="atr-article-badge">{t('pub_glissements.badge', "Journée Technique · Résilience & Géotechnique")}</span>

                <h1 className="atr-article-title">
                  {t('pub_glissements.title', "Journée Technique : Glissements de terrain et résilience des infrastructures")}
                </h1>

                <div className="atr-article-meta-bar">
                  <span className="atr-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C07B1B" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <strong>{t('pub_glissements.date_line', "06 Juin 2026 (Journée tenue le 03 Juin 2026)")}</strong>
                  </span>
                  <span className="atr-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B5299" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {t('pub_glissements.location', "Hôtel El Mouradi Gammarth, Tunis")}
                  </span>
                  <span className="atr-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    {t('pub_glissements.source', "ATR, ATMS & Ministère de l'Équipement")}
                  </span>
                </div>

                <div className="atr-article-hero-img">
                  <img src="/716310905_1300568632262137_7434795582044664526_n.jpg" alt={t('pub_glissements.hero_alt', "Journée Technique Glissements de Terrain ATR ATMS - Hôtel El Mouradi Gammarth")} />
                </div>

                <div className="atr-article-content">
                  {/* Lead / Paragraphe d'ouverture */}
                  <div className="atr-article-lead">
                    {t('pub_glissements.lead', "Cette rencontre a réuni experts, ingénieurs, universitaires, gestionnaires d’infrastructures et professionnels du secteur autour d’un objectif commun : mieux comprendre, anticiper et gérer les risques géotechniques qui menacent nos infrastructures de transport et nos territoires.")}
                  </div>

                  <p>
                    {t('pub_glissements.p_1', "Au cours de cette journée, les participants ont pu échanger autour de plusieurs thématiques majeures : les mécanismes des glissements de terrain, les techniques de protection et de confortement, la gestion des eaux de ruissellement, les impacts des précipitations extrêmes, ainsi que des retours d’expérience concrets sur des ouvrages routiers et ferroviaires.")}
                  </p>

                  <h3 style={{ fontFamily: 'DM Sans', fontSize: '22px', fontWeight: '700', color: '#0F172A', margin: '30px 0 16px' }}>
                    {t('pub_glissements.h3_themes', "Thématiques concrètes abordées lors des sessions :")}
                  </h3>

                  <div className="atr-theme-grid">
                    {themes.map((th, idx) => (
                      <div className="atr-theme-item" key={idx}>
                        <div className="atr-theme-bullet"></div>
                        <div><strong>{th.title}</strong> {th.desc}</div>
                      </div>
                    ))}
                  </div>

                  <p>
                    {t('pub_glissements.p_2', "Les discussions ont mis en évidence l'importance d'une approche intégrée combinant expertise technique, innovation, surveillance continue et adaptation aux changements climatiques afin de renforcer la résilience des infrastructures et garantir leur durabilité.")}
                  </p>

                  <p>
                    {t('pub_glissements.p_3', "La richesse des présentations, la qualité des échanges et la diversité des expériences partagées ont confirmé la nécessité de poursuivre ce type d'initiatives pour accompagner les acteurs du secteur face aux défis actuels et futurs.")}
                  </p>

                  {/* Bloc Remerciements Officiels */}
                  <div className="atr-thanks-block">
                    <div className="atr-thanks-title">
                      {t('pub_glissements.thanks_title', "🙏 Remerciements Institutionnels")}
                    </div>
                    <p style={{ color: '#1E293B', marginBottom: '14px' }}>
                      {t('pub_glissements.thanks_p1', "Nous adressons nos plus sincères remerciements à Monsieur le Ministre de l'Équipement et de l'Habitat pour son soutien à cette initiative et pour l'intérêt accordé au développement des compétences techniques, à la sécurité des infrastructures et au renforcement de la résilience de nos territoires face aux risques naturels.")}
                    </p>
                    <p style={{ color: '#1E293B', margin: 0 }}>
                      {t('pub_glissements.thanks_p2', "Son engagement en faveur de la modernisation et de la pérennité des infrastructures constitue un encouragement précieux pour l'ensemble des acteurs du secteur. Nos sincères remerciements à l'ensemble des intervenants, partenaires, sponsors et participants qui ont contribué au succès de cet événement.")}
                    </p>
                  </div>

                  <div className="atr-quote-callout">
                    <p>{t('pub_glissements.quote_text', "« Ensemble pour des infrastructures plus sûres, plus résilientes et mieux adaptées aux défis climatiques de demain. »")}</p>
                    <cite>{t('pub_glissements.quote_author', "— Association Tunisienne des Routes (ATR) & ATMS")}</cite>
                  </div>
                </div>

                {/* Boutons d'action et lien source FindGlocal */}
                <div className="atr-article-actions">
                  <Link href="/publications" className="atr-btn-back">
                    {isRtl ? `${t('pub_glissements.btn_back', 'Retour aux Publications')} ←` : `← ${t('pub_glissements.btn_back', 'Retour aux Publications')}`}
                  </Link>
                  <a
                    href="https://www.findglocal.com/XX/Unknown/568251543595076/Association-Tunisienne-des-Routes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="atr-btn-source"
                  >
                    <span>{t('pub_glissements.btn_source', "Consulter la publication sur FindGlocal")}</span>
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
                  <h4 className="atr-sidebar-title">{t('pub_glissements.sidebar_title', "Fiche de l'Événement")}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14.5px', color: '#475569' }}>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>{t('pub_glissements.sb_date_held_label', "Date tenue :")}</strong> {t('pub_glissements.sb_date_held_val', "03 Juin 2026")}
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>{t('pub_glissements.sb_date_pub_label', "Date publication :")}</strong> {t('pub_glissements.sb_date_pub_val', "06 Juin 2026")}
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>{t('pub_glissements.sb_loc_label', "Lieu :")}</strong> {t('pub_glissements.sb_loc_val', "Hôtel El Mouradi Gammarth, Tunis")}
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>{t('pub_glissements.sb_partner_label', "Partenariat :")}</strong> {t('pub_glissements.sb_partner_val', "ATR, ATMS & Ministère de l'Équipement")}
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>{t('pub_glissements.sb_audience_label', "Audience :")}</strong> {t('pub_glissements.sb_audience_val', "Plus de 120 experts et gestionnaires d'infrastructures")}
                    </li>
                    <li>
                      <strong style={{ color: '#0F172A' }}>{t('pub_glissements.sb_source_label', "Source Officielle :")}</strong>{' '}
                      <a
                        href="https://www.findglocal.com/XX/Unknown/568251543595076/Association-Tunisienne-des-Routes"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#1B5299', fontWeight: '600', textDecoration: 'underline' }}
                      >
                        {t('pub_glissements.sb_source_link', "FindGlocal (Page ATR 2026) ↗")}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">{t('pub_glissements.sb_other_title', "Autres Publications")}</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Link
                      href="/publications/securite-routiere-hss-chantiers"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', textDecoration: 'none', color: '#1B5299', fontWeight: '600' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      {t('pub_glissements.sb_other_pub1', "Rencontre Enjeux HSS & Sécurité")}
                    </Link>
                    <Link
                      href="/publications/ministre-equipement-accueille-bureau-atr"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', textDecoration: 'none', color: '#1B5299', fontWeight: '600' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                      {t('pub_glissements.sb_other_pub2', "Audience avec M. le Ministre de l'Équipement")}
                    </Link>
                  </div>
                </div>

                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">{t('pub_glissements.sb_keywords_title', "Mots-clés")}</h4>
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
