'use client'
import React, { useState } from 'react'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap');

  .atr-pillars-light-section {
    background-color: #ffffff;
    padding: 110px 0 120px;
    position: relative;
    overflow: hidden;
    border-top: 1px solid rgba(27, 82, 153, 0.06);
    border-bottom: 1px solid rgba(27, 82, 153, 0.06);
  }
  .atr-pillars-light-section .auto-container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 20% !important;
    padding-right: 20% !important;
    box-sizing: border-box !important;
  }
  @media (max-width: 1200px) {
    .atr-pillars-light-section .auto-container {
      padding-left: 10% !important;
      padding-right: 10% !important;
    }
  }
  @media (max-width: 767px) {
    .atr-pillars-light-section {
      padding: 60px 0 70px;
    }
    .atr-pillars-light-section .auto-container {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  /* Standard Theme Section Heading */
  .section_heading_title_small {
    font-family: 'Inter', sans-serif !important;
    font-weight: 600 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    font-size: 12.5px !important;
    color: #C07B1B !important;
    background: rgba(192, 123, 27, 0.08) !important;
    padding: 6px 18px !important;
    border-radius: 100px !important;
    display: inline-block !important;
    margin-bottom: 15px !important;
    border: 1px solid rgba(192, 123, 27, 0.2) !important;
  }

  .section_heading_title_big {
    font-family: 'DM Sans', sans-serif !important;
    font-size: clamp(32px, 5vw, 44px) !important;
    font-weight: 700 !important;
    color: #0F172A !important;
    line-height: 1.2 !important;
    margin-bottom: 18px !important;
    letter-spacing: -0.02em !important;
  }

  .section_heading_title_big span {
    color: #1B5299 !important;
  }

  .section_heading_desc {
    font-family: 'Inter', sans-serif !important;
    font-size: 16.5px !important;
    line-height: 1.7 !important;
    color: #334155 !important;
    max-width: 720px;
    margin: 0 auto;
    font-weight: 400 !important;
  }

  /* Nav Tabs */
  .atr-light-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 36px;
    margin-bottom: 45px;
  }

  .atr-light-tab-btn {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    color: #475569;
    font-family: 'DM Sans', sans-serif !important;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  }

  .atr-light-tab-btn:hover {
    background: #ffffff;
    color: #1B5299;
    border-color: #1B5299;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(27, 82, 153, 0.08);
  }

  .atr-light-tab-btn.is-active {
    background: #1B5299;
    color: #ffffff;
    border-color: #1B5299;
    box-shadow: 0 6px 20px rgba(27, 82, 153, 0.25);
    transform: translateY(-2px);
  }

  .atr-light-tab-num {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 12px;
    font-weight: 800;
    color: #C07B1B;
    background: rgba(192, 123, 27, 0.12);
    padding: 2px 8px;
    border-radius: 12px;
    transition: all 0.3s ease;
  }

  .atr-light-tab-btn.is-active .atr-light-tab-num {
    background: rgba(255, 255, 255, 0.2);
    color: #FDE68A;
  }

  /* Deck Container */
  .atr-light-deck {
    display: flex;
    gap: 18px;
    height: 520px;
    width: 100%;
  }

  .atr-light-panel {
    position: relative;
    flex: 1;
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid rgba(27, 82, 153, 0.1);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
    overflow: hidden;
    cursor: pointer;
    transition: flex 0.65s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
  }

  .atr-light-panel.is-active {
    flex: 3.8;
    border-color: rgba(27, 82, 153, 0.35);
    box-shadow: 0 20px 50px rgba(27, 82, 153, 0.12);
  }

  .atr-light-panel:hover:not(.is-active) {
    border-color: rgba(192, 123, 27, 0.4);
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
  }

  /* COLLAPSED VIEW */
  .atr-light-collapsed {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px 14px;
    background: #F8FAFC;
    transition: opacity 0.35s ease;
    z-index: 2;
  }

  .atr-light-panel.is-active .atr-light-collapsed {
    opacity: 0;
    pointer-events: none;
  }

  .atr-collapsed-top-thumb {
    width: 100%;
    height: 170px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }

  .atr-collapsed-top-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .atr-collapsed-mid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .atr-collapsed-num {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 24px;
    font-weight: 800;
    color: #C07B1B;
    line-height: 1;
  }

  .atr-collapsed-icon-box {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(27, 82, 153, 0.08);
    color: #1B5299;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .atr-light-panel:hover .atr-collapsed-icon-box {
    background: #1B5299;
    color: #ffffff;
    transform: scale(1.1);
  }

  .atr-collapsed-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 16px;
    font-weight: 700;
    color: #0F172A;
    text-align: center;
    line-height: 1.3;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    letter-spacing: 0.02em;
    padding: 10px 0;
  }

  /* EXPANDED VIEW */
  .atr-light-expanded {
    position: absolute;
    inset: 0;
    display: flex;
    background: #ffffff;
    padding: 24px;
    gap: 30px;
    z-index: 3;
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
    text-align: left;
  }

  .atr-light-panel:not(.is-active) .atr-light-expanded {
    opacity: 0;
    pointer-events: none;
  }

  /* Left Image Area in Expanded View */
  .atr-exp-media {
    flex: 0 0 42%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background: #0F172A;
    box-shadow: 0 10px 25px rgba(27, 82, 153, 0.12);
  }

  .atr-exp-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .atr-light-panel:hover .atr-exp-media img {
    transform: scale(1.05);
  }

  .atr-exp-media-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.15) 0%, rgba(15, 23, 42, 0.75) 100%);
    pointer-events: none;
  }

  .atr-exp-media-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(255, 255, 255, 0.95);
    color: #1B5299;
    font-family: 'Inter', sans-serif !important;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 6px 14px;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .atr-exp-media-number {
    position: absolute;
    bottom: 16px;
    left: 20px;
    font-family: 'DM Sans', sans-serif !important;
    font-size: 40px;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  }

  /* Right Text Area in Expanded View */
  .atr-exp-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 15px;
  }

  .atr-exp-committee-tag {
    font-family: 'Inter', sans-serif !important;
    font-size: 12px;
    font-weight: 700;
    color: #C07B1B;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 8px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .atr-exp-committee-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #C07B1B;
  }

  .atr-exp-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 26px;
    font-weight: 700;
    color: #0F172A;
    line-height: 1.25;
    margin-bottom: 16px;
    letter-spacing: -0.01em;
  }

  .atr-exp-desc {
    font-family: 'Inter', sans-serif !important;
    font-size: 15.5px;
    line-height: 1.7;
    color: #1E293B;
    font-weight: 450;
    margin-bottom: 24px;
  }

  .atr-exp-features-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 18px;
    border-top: 1px solid #E2E8F0;
  }

  .atr-exp-feat-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Inter', sans-serif !important;
    font-size: 14.5px;
    font-weight: 500;
    color: #1E293B;
  }

  .atr-exp-feat-check {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(27, 82, 153, 0.08);
    color: #1B5299;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Responsive Stacking */
  @media (max-width: 991px) {
    .atr-light-deck {
      flex-direction: column;
      height: auto;
      gap: 20px;
    }

    .atr-light-panel {
      height: auto;
      min-height: 200px;
      flex: none !important;
    }

    .atr-light-collapsed {
      display: none !important;
    }

    .atr-light-expanded {
      position: relative;
      opacity: 1 !important;
      pointer-events: auto !important;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }

    .atr-exp-media {
      height: 200px;
      flex: none;
    }

    .atr-exp-content {
      padding-right: 0;
    }

    .atr-light-tabs {
      display: none;
    }
  }
`

const pillarsData = [
  {
    id: 1,
    number: "01",
    title: "Administration & Résilience",
    shortTitle: "Gouvernance & Climat",
    tag: "Gouvernance & Prospective",
    image: "/images/atr-bg-1.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Modernisation de la gouvernance des réseaux routiers nationaux, intégration des politiques d'adaptation aux dérèglements climatiques extrêmes et gestion patrimoniale préventive des actifs d'infrastructures.",
    features: [
      "Politiques de gestion d'actifs et digitalisation des réseaux",
      "Résilience climatique et plans de continuité face aux crues",
      "Cadres réglementaires et partenariats public-privé (PPP)"
    ],
    committee: "Comité Technique National CT.1"
  },
  {
    id: 2,
    number: "02",
    title: "Mobilité Durable & STI",
    shortTitle: "Mobilité Intelligente & STI",
    tag: "Transition Écologique",
    image: "/images/atr-road-design.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    text: "Déploiement des Systèmes de Transport Intelligents (STI), décarbonation des corridors de transport, multimodalité urbaine et préparation des réseaux à l'électromobilité et aux véhicules connectés.",
    features: [
      "Déploiement des STI et supervision du trafic en temps réel",
      "Électrification des corridors et bornes de recharge rapide",
      "Plans de déplacement urbain durable et intermodalité"
    ],
    committee: "Comité Technique National CT.2"
  },
  {
    id: 3,
    number: "03",
    title: "Sécurité Routière & Usagers",
    shortTitle: "Vision Zéro & Prévention",
    tag: "Sécurité & Facteur Humain",
    image: "/images/atr-road-safety.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    text: "Mise en œuvre de l'approche « Vision Zéro » accident grave, audits d'infrastructure, traitement systématique des points noirs et sensibilisation active des usagers de la route.",
    features: [
      "Audits d'inspection de sécurité routière (RSI/RSA)",
      "Aménagements ciblés des traversées d'agglomérations",
      "Guides méthodologiques nationaux de prévention routière"
    ],
    committee: "Comité Technique National CT.3"
  },
  {
    id: 4,
    number: "04",
    title: "Infrastructures & Matériaux",
    shortTitle: "Génie Civil & Matériaux",
    tag: "Matériaux & Innovation",
    image: "/images/atr-bg-3.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    text: "Conception avancée et dimensionnement des structures de chaussées, auscultation non-destructive des ouvrages d'art, valorisation des matériaux recyclés et intégration des jumeaux numériques BIM.",
    features: [
      "Dimensionnement rationnel des couches d'assise et roulement",
      "Auscultation continue et santé structurelle des ponts",
      "Modélisation numérique BIM et valorisation d'éco-matériaux"
    ],
    committee: "Comité Technique National CT.4"
  }
]

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <section className="atr-pillars-light-section" id="service">
        <div className="auto-container">
          {/* En-tête officiel du projet (Style identique à Notre Équipe et Actualités) */}
          <div className="section_heading text-center mb_50">
            <span className="section_heading_title_small">Axes Stratégiques & Comités</span>
            <h2 className="section_heading_title_big mb_20">
              Les Piliers de <span>Notre Action</span>
            </h2>
            <p className="section_heading_desc">
              Une démarche scientifique et technique pluridisciplinaire au service de la performance, de la sécurité et de la durabilité des infrastructures routières en Tunisie.
            </p>
          </div>

          {/* Onglets sélecteurs rapides (Nav Tabs clairs) */}
          <div className="atr-light-tabs">
            {pillarsData.map((pillar, index) => (
              <button
                key={pillar.id}
                type="button"
                className={`atr-light-tab-btn ${activeIndex === index ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className="atr-light-tab-num">{pillar.number}</span>
                <span>{pillar.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* Deck interactif en thème clair (SANS AUCUN BOUTON) */}
          <div className="atr-light-deck">
            {pillarsData.map((pillar, index) => {
              const isActive = activeIndex === index
              return (
                <div
                  key={pillar.id}
                  className={`atr-light-panel ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Vue repliée (thème clair avec vignette photo en haut) */}
                  <div className="atr-light-collapsed">
                    <div className="atr-collapsed-top-thumb">
                      <img src={pillar.image} alt={pillar.title} />
                    </div>
                    <div className="atr-collapsed-mid">
                      <div className="atr-collapsed-num">{pillar.number}</div>
                      <div className="atr-collapsed-icon-box">{pillar.icon}</div>
                    </div>
                    <div className="atr-collapsed-title">{pillar.title}</div>
                  </div>

                  {/* Vue déployée (Thème clair scindé : Photo haute définition + Contenu texte riche) */}
                  <div className="atr-light-expanded">
                    {/* Zone Image */}
                    <div className="atr-exp-media">
                      <img src={pillar.image} alt={pillar.title} />
                      <div className="atr-exp-media-overlay"></div>
                      <span className="atr-exp-media-badge">{pillar.tag}</span>
                      <span className="atr-exp-media-number">{pillar.number}</span>
                    </div>

                    {/* Zone Contenu textuel riche (Fond blanc épuré) */}
                    <div className="atr-exp-content">
                      <div className="atr-exp-committee-tag">
                        <span className="atr-exp-committee-dot"></span>
                        <span>{pillar.committee}</span>
                      </div>

                      <h3 className="atr-exp-title">{pillar.title}</h3>
                      <p className="atr-exp-desc">{pillar.text}</p>

                      {/* Liste des points clés avec coches d'ingénierie */}
                      <div className="atr-exp-features-grid">
                        {pillar.features.map((feat, fIdx) => (
                          <div key={fIdx} className="atr-exp-feat-row">
                            <div className="atr-exp-feat-check">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
