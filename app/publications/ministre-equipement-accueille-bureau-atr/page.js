'use client'
import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import PublicationCard from '@/components/publications/PublicationCard'

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
    max-height: 520px;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 40px;
    position: relative;
    box-shadow: 0 15px 35px rgba(27, 82, 153, 0.1);
  }

  .atr-article-hero-img img {
    width: 100%;
    height: auto;
    display: block;
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
`

export default function ArticlePresseMinistre() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Revue de Presse">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="atr-article-page">
        <div className="auto-container">
          <div className="row">
            {/* Colonne Principale (8 cols) */}
            <div className="col-lg-8 col-md-12">
              <PublicationCard
                className="publication-card--detail"
                badge="Revue de presse"
                date="6 août 2025"
                location="Ministère de l'Équipement et de l'Habitat"
                source="La Presse de Tunisie"
                title="Le ministre de l’Équipement accueille le nouveau bureau de l’Association tunisienne des routes"
                summary="Une audience officielle consacrée au nouveau bureau exécutif de l’ATR, à la coopération avec le ministère et au lien avec PIARC."
                image="/images/ministre-bureau-atr.png"
                alt="Le ministre de l'Équipement lors de l'accueil du nouveau bureau de l'ATR"
                href="/publications/ministre-equipement-accueille-bureau-atr"
              />
              <article className="atr-article-card">
                <div className="atr-article-content">
                  <div className="atr-article-lead">
                    Ce lundi matin, M. Salah Zouari, ministre de l’Équipement et de l’Habitat, a reçu les membres du nouveau bureau exécutif élu de l’Association tunisienne des routes (ATR). La rencontre s’est déroulée en présence du premier délégué de l’Association mondiale de la route (PIARC) et de la conseillère technique de la PIARC.
                  </div>

                  {/* Déclaration du Ministre */}
                  <div className="atr-speaker-block">
                    <div className="atr-speaker-header">
                      <div className="atr-speaker-avatar">SZ</div>
                      <div>
                        <h4 className="atr-speaker-name">M. Salah Zouari</h4>
                        <p className="atr-speaker-title">Ministre de l’Équipement et de l’Habitat — République Tunisienne</p>
                      </div>
                    </div>
                    <p>
                      Dès le début de la réunion, le ministre a salué le rôle important de l’association dans l’organisation de forums nationaux et internationaux sur les infrastructures et les transports, qui contribuent à l’échange d’expertises dans ce domaine.
                    </p>
                    <p className="mb-0">
                      Il a souligné la nécessité de poursuivre ce travail afin de renforcer le rayonnement de l’association au niveau local et international et de développer la coopération avec le ministère.
                    </p>
                  </div>

                  <div className="atr-quote-callout">
                    <p>« Le ministre a salué le rôle important de l’association dans l’organisation de forums nationaux et internationaux sur les infrastructures et les transports, contribuant activement au partage des savoirs et au rayonnement de l'ingénierie tunisienne. »</p>
                    <cite>— M. Salah Zouari, Ministre de l’Équipement et de l’Habitat</cite>
                  </div>

                  {/* Déclaration de la Présidente ATR */}
                  <div className="atr-speaker-block">
                    <div className="atr-speaker-header">
                      <div className="atr-speaker-avatar">LS</div>
                      <div>
                        <h4 className="atr-speaker-name">Mme Lilia Sifaoui</h4>
                        <p className="atr-speaker-title">Présidente de l’Association Tunisienne des Routes (ATR) & Directrice Générale de l’unité de gestion du pont de Bizerte</p>
                      </div>
                    </div>
                    <p className="mb-0">
                      Pour sa part, Mme Lilia Sifaoui, la présidente de l’association, a présenté un aperçu de la stratégie et des objectifs du nouveau bureau exécutif. Elle a indiqué qu’un programme de travail est en cours d’élaboration, en accord avec les nouvelles attentes et les visions futures, dans le but d’améliorer les performances de l’association et de renforcer son rôle dans le soutien du secteur routier et des infrastructures en République tunisienne.
                    </p>
                  </div>

                  <p>
                    Cette audience officielle scelle une coopération renforcée entre l'État et l'ATR, confirmant le statut d'interlocuteur privilégié de l'association auprès des autorités publiques et de l'Association Mondiale de la Route (PIARC).
                  </p>
                </div>

                {/* Boutons d'action et lien source officiel */}
                <div className="mt_40 pt_20 border-top d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <Link href="/publications" className="btn-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    ← Retour aux Publications
                  </Link>
                  <a
                    href="https://www.lapresse.tn/2025/08/06/le-ministre-de-lequipement-accueille-le-nouveau-bureau-de-lassociation-tunisienne-des-routes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-1"
                    style={{ background: '#1B5299', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                  >
                    <span>Consulter l'article sur La Presse ↗</span>
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
                  <h4 className="atr-sidebar-title">Fiche de l'Audience</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14.5px', color: '#475569' }}>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Date :</strong> 6 août 2025
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Lieu :</strong> Siège du Ministère de l'Équipement et de l'Habitat, Tunis
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Participants :</strong> M. Salah Zouari (Ministre), Bureau Exécutif ATR, Délégué PIARC
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Objet :</strong> Prise de fonction du nouveau bureau et feuille de route stratégique
                    </li>
                    <li>
                      <strong style={{ color: '#0F172A' }}>Source Journal :</strong>{' '}
                      <a
                        href="https://www.lapresse.tn/2025/08/06/le-ministre-de-lequipement-accueille-le-nouveau-bureau-de-lassociation-tunisienne-des-routes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#1B5299', fontWeight: '600', textDecoration: 'underline' }}
                      >
                        La Presse de Tunisie ↗
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
                      Rencontre Enjeux HSS & Sécurité Routière
                    </Link>
                  </div>
                </div>

                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">Mots-clés</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['#MinistèreÉquipement', '#SalahZouari', '#LiliaSifaoui', '#PIARC', '#BureauExécutif', '#Infrastructures', '#LaPresse'].map((t, idx) => (
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
