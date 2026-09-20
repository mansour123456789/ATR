'use client'
import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap');

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
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .atr-article-meta-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding-bottom: 25px;
    margin-bottom: 35px;
    border-bottom: 1px solid #E2E8F0;
    font-family: 'Inter', sans-serif !important;
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
    width: 100%;
    max-height: 480px;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 40px;
    position: relative;
    box-shadow: 0 15px 35px rgba(27, 82, 153, 0.1);
  }

  .atr-article-hero-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .atr-article-content {
    font-family: 'Inter', sans-serif !important;
    font-size: 16.5px;
    line-height: 1.85;
    color: #1E293B;
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
    margin: 30px 0;
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

  .atr-thanks-block {
    background: #FEF9F0;
    border: 1px solid rgba(192, 123, 27, 0.25);
    border-radius: 16px;
    padding: 26px 30px;
    margin: 35px 0;
  }

  .atr-thanks-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 18px;
    font-weight: 700;
    color: #C07B1B;
    margin-bottom: 10px;
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
`

export default function ArticleGlissementsTerrain() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Compte-Rendu Technique">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="atr-article-page">
        <div className="auto-container">
          <div className="row">
            {/* Colonne Principale (8 cols) */}
            <div className="col-lg-8 col-md-12">
              <article className="atr-article-card">
                <span className="atr-article-badge">Compte-Rendu Technique · ATR & ATMS</span>

                <h1 className="atr-article-title">
                  Retour en images sur la Journée Technique du 03 juin 2026 : Glissements de terrain, résilience des infrastructures et gestion des risques naturels
                </h1>

                <div className="atr-article-meta-bar">
                  <span className="atr-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C07B1B" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <strong>06 Juin 2026</strong> (Journée tenue le 03 Juin 2026)
                  </span>
                  <span className="atr-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B5299" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Hôtel El Mouradi Gammarth, Tunis
                  </span>
                  <span className="atr-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    ATR, ATMS & Ministère de l'Équipement
                  </span>
                </div>

                <div className="atr-article-hero-img">
                  <img src="/images/atr_seminar.png" alt="Journée Technique Glissements de Terrain ATR ATMS" />
                </div>

                <div className="atr-article-content">
                  {/* Lead / Paragraphe d'ouverture */}
                  <div className="atr-article-lead">
                    Cette rencontre a réuni experts, ingénieurs, universitaires, gestionnaires d’infrastructures et professionnels du secteur autour d’un objectif commun : <strong>mieux comprendre, anticiper et gérer les risques géotechniques</strong> qui menacent nos infrastructures de transport et nos territoires.
                  </div>

                  <p>
                    Au cours de cette journée, les participants ont pu échanger autour de plusieurs thématiques majeures : les mécanismes des glissements de terrain, les techniques de protection et de confortement, la gestion des eaux de ruissellement, les impacts des précipitations extrêmes, ainsi que des retours d’expérience concrets sur des ouvrages routiers et ferroviaires.
                  </p>

                  <h3 style={{ fontFamily: 'DM Sans', fontSize: '22px', fontWeight: '700', color: '#0F172A', margin: '30px 0 16px' }}>
                    Thématiques concrètes abordées lors des sessions :
                  </h3>

                  <div className="atr-theme-grid">
                    <div className="atr-theme-item">
                      <div className="atr-theme-bullet"></div>
                      <div><strong>Cinématique des glissements de terrain</strong> et stratégies de protection adaptées.</div>
                    </div>
                    <div className="atr-theme-item">
                      <div className="atr-theme-bullet"></div>
                      <div><strong>Typologies des glissements</strong> et études de cas géotechniques réelles.</div>
                    </div>
                    <div className="atr-theme-item">
                      <div className="atr-theme-bullet"></div>
                      <div><strong>Protection et confortement</strong> des zones sensibles et instables.</div>
                    </div>
                    <div className="atr-theme-item">
                      <div className="atr-theme-bullet"></div>
                      <div><strong>Risques liés aux précipitations extrêmes</strong> et optimisation continue du drainage.</div>
                    </div>
                    <div className="atr-theme-item">
                      <div className="atr-theme-bullet"></div>
                      <div><strong>Glissement d’un viaduc autoroutier :</strong> auscultation et confortement d'urgence.</div>
                    </div>
                    <div className="atr-theme-item">
                      <div className="atr-theme-bullet"></div>
                      <div><strong>Inspection des zones instables</strong> le long des réseaux routiers et ferroviaires.</div>
                    </div>
                    <div className="atr-theme-item">
                      <div className="atr-theme-bullet"></div>
                      <div><strong>Résilience des infrastructures</strong> et des territoires face aux aléas naturels.</div>
                    </div>
                    <div className="atr-theme-item">
                      <div className="atr-theme-bullet"></div>
                      <div><strong>Grande table ronde technique</strong> et retours d’expériences partagés.</div>
                    </div>
                  </div>

                  <p>
                    Les discussions ont mis en évidence l'importance d'une <strong>approche intégrée</strong> combinant expertise technique, innovation, surveillance continue et adaptation aux changements climatiques afin de renforcer la résilience des infrastructures et garantir leur durabilité.
                  </p>

                  <p>
                    La richesse des présentations, la qualité des échanges et la diversité des expériences partagées ont confirmé la nécessité de poursuivre ce type d'initiatives pour accompagner les acteurs du secteur face aux défis actuels et futurs.
                  </p>

                  {/* Bloc Remerciements Officiels */}
                  <div className="atr-thanks-block">
                    <div className="atr-thanks-title">
                      🙏 Remerciements Institutionnels
                    </div>
                    <p style={{ color: '#1E293B', marginBottom: '14px' }}>
                      Nous adressons nos plus sincères remerciements à <strong>Monsieur le Ministre de l'Équipement et de l'Habitat</strong> pour son soutien à cette initiative et pour l'intérêt accordé au développement des compétences techniques, à la sécurité des infrastructures et au renforcement de la résilience de nos territoires face aux risques naturels.
                    </p>
                    <p style={{ color: '#1E293B', margin: 0 }}>
                      Son engagement en faveur de la modernisation et de la pérennité des infrastructures constitue un encouragement précieux pour l'ensemble des acteurs du secteur. Nos sincères remerciements à l'ensemble des intervenants, partenaires, sponsors et participants qui ont contribué au succès de cet événement.
                    </p>
                  </div>

                  <div className="atr-quote-callout">
                    <p>« Ensemble pour des infrastructures plus sûres, plus résilientes et mieux adaptées aux défis climatiques de demain. »</p>
                    <cite>— Association Tunisienne des Routes (ATR) & ATMS</cite>
                  </div>
                </div>

                {/* Boutons d'action et lien source FindGlocal */}
                <div className="mt_40 pt_20 border-top d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <Link href="/publications" className="btn-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    ← Retour aux Publications
                  </Link>
                  <a
                    href="https://www.findglocal.com/XX/Unknown/568251543595076/Association-Tunisienne-des-Routes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-1"
                    style={{ background: '#1B5299', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                  >
                    <span>Consulter la publication sur FindGlocal ↗</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                  <h4 className="atr-sidebar-title">Fiche de l'Événement</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14.5px', color: '#475569' }}>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Date tenue :</strong> 03 Juin 2026
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Date publication :</strong> 06 Juin 2026
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Lieu :</strong> Hôtel El Mouradi Gammarth, Tunis
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Partenariat :</strong> ATR, ATMS & Ministère de l'Équipement
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Audience :</strong> Plus de 120 experts et gestionnaires d'infrastructures
                    </li>
                    <li>
                      <strong style={{ color: '#0F172A' }}>Source Officielle :</strong>{' '}
                      <a
                        href="https://www.findglocal.com/XX/Unknown/568251543595076/Association-Tunisienne-des-Routes"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#1B5299', fontWeight: '600', textDecoration: 'underline' }}
                      >
                        FindGlocal (Page ATR 2026) ↗
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">Autres Publications</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Link
                      href="/publications/securite-routiere-hss-chantiers"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', textDecoration: 'none', color: '#1B5299', fontWeight: '600' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      Rencontre Enjeux HSS & Sécurité
                    </Link>
                    <Link
                      href="/publications/ministre-equipement-accueille-bureau-atr"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', textDecoration: 'none', color: '#1B5299', fontWeight: '600' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                      Audience avec M. le Ministre de l'Équipement
                    </Link>
                  </div>
                </div>

                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">Mots-clés</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['#GlissementsDeTerrain', '#ATMS', '#ElMouradiGammarth', '#Résilience', '#Géotechnique', '#OuvragesDArt', '#MinistèreÉquipement', '#FindGlocal'].map((t, idx) => (
                      <span key={idx} style={{ background: '#F1F5F9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                        {t}
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
