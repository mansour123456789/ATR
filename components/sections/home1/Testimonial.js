'use client'
import React, { useState } from 'react'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap');

  .atr-testimonial-section {
    padding: 110px 0 120px;
    background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%);
    position: relative;
    overflow: hidden;
    border-top: 1px solid rgba(27, 82, 153, 0.06);
    border-bottom: 1px solid rgba(27, 82, 153, 0.06);
  }
  .atr-testimonial-section .auto-container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 20% !important;
    padding-right: 20% !important;
    box-sizing: border-box !important;
  }
  @media (max-width: 1200px) {
    .atr-testimonial-section .auto-container {
      padding-left: 10% !important;
      padding-right: 10% !important;
    }
  }
  @media (max-width: 767px) {
    .atr-testimonial-section {
      padding: 60px 0 70px;
    }
    .atr-testimonial-section .auto-container {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  /* Ambient background glow */
  .atr-testi-bg-glow-1 {
    position: absolute;
    top: 5%;
    left: -5%;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(27, 82, 153, 0.05) 0%, transparent 70%);
    pointer-events: none;
    border-radius: 50%;
  }
  .atr-testi-bg-glow-2 {
    position: absolute;
    bottom: 5%;
    right: -5%;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(192, 123, 27, 0.06) 0%, transparent 70%);
    pointer-events: none;
    border-radius: 50%;
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

  /* 2 Dual Cards Grid */
  .atr-testi-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    position: relative;
    z-index: 2;
    margin-bottom: 40px;
  }
  @media (max-width: 991px) {
    .atr-testi-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  /* Individual Partner Card */
  .atr-testi-pro-card {
    background: #ffffff;
    border: 1px solid rgba(27, 82, 153, 0.12);
    border-radius: 24px;
    padding: 38px 36px 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
    overflow: hidden;
  }
  @media (max-width: 575px) {
    .atr-testi-pro-card {
      padding: 28px 22px 24px;
    }
  }

  /* Top Animated Shimmer Border */
  .atr-testi-card-topline {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1B5299 0%, #C07B1B 50%, #1B5299 100%);
    background-size: 200% 100%;
    opacity: 0.6;
    transition: opacity 0.4s ease, height 0.4s ease;
  }

  .atr-testi-pro-card:hover {
    transform: translateY(-8px);
    border-color: rgba(27, 82, 153, 0.3);
    box-shadow: 0 25px 55px rgba(27, 82, 153, 0.12), 0 0 0 1px rgba(27, 82, 153, 0.1);
  }

  .atr-testi-pro-card:hover .atr-testi-card-topline {
    opacity: 1;
    height: 5px;
    animation: atrToplineShimmer 2.5s infinite linear;
  }

  @keyframes atrToplineShimmer {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  /* Card Header: Badge & Status */
  .atr-testi-card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    margin-bottom: 22px;
    flex-wrap: wrap;
  }

  .atr-testi-type-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: #F0F6FF;
    border: 1px solid rgba(27, 82, 153, 0.15);
    border-radius: 50px;
    font-family: 'Inter', sans-serif !important;
    font-size: 11.5px;
    font-weight: 700;
    color: #1B5299;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .atr-testi-status-pulse {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: 'Inter', sans-serif !important;
    font-size: 12px;
    font-weight: 600;
    color: #475569;
  }

  .atr-testi-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }

  .atr-testi-dot.green {
    background: #10B981;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    animation: atrPulseGreen 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
  }

  .atr-testi-dot.blue {
    background: #1B5299;
    box-shadow: 0 0 0 0 rgba(27, 82, 153, 0.7);
    animation: atrPulseBlue 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes atrPulseGreen {
    0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
    70% { box-shadow: 0 0 0 9px rgba(16, 185, 129, 0); }
    100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
  }

  @keyframes atrPulseBlue {
    0% { box-shadow: 0 0 0 0 rgba(27, 82, 153, 0.7); }
    70% { box-shadow: 0 0 0 9px rgba(27, 82, 153, 0); }
    100% { box-shadow: 0 0 0 0 rgba(27, 82, 153, 0); }
  }

  /* Quote & Stars Area */
  .atr-testi-quote-wrap {
    position: relative;
    margin-bottom: 24px;
  }

  .atr-testi-stars-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .atr-testi-stars {
    display: flex;
    gap: 4px;
    color: #F59E0B;
  }

  .atr-testi-quote-symbol {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: rgba(192, 123, 27, 0.1);
    color: #C07B1B;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease, background-color 0.4s ease;
  }

  .atr-testi-pro-card:hover .atr-testi-quote-symbol {
    transform: rotate(10deg) scale(1.08);
    background: #C07B1B;
    color: #ffffff;
  }

  .atr-testi-quote-body {
    font-family: 'Inter', sans-serif !important;
    font-size: 15.5px;
    line-height: 1.8;
    color: #1E293B;
    font-weight: 450;
    font-style: italic;
    position: relative;
    z-index: 1;
  }

  /* Tags / Pills inside card */
  .atr-testi-tags-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 18px;
    margin-bottom: 24px;
  }

  .atr-testi-tag-pill {
    font-family: 'Inter', sans-serif !important;
    font-size: 12px;
    font-weight: 600;
    color: #334155;
    background: #F1F5F9;
    padding: 4px 12px;
    border-radius: 6px;
    border: 1px solid #E2E8F0;
    transition: all 0.25s ease;
  }

  .atr-testi-pro-card:hover .atr-testi-tag-pill {
    background: #ffffff;
    border-color: rgba(27, 82, 153, 0.2);
    color: #1B5299;
  }

  /* Card Signatory Footer */
  .atr-testi-author-footer {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-top: 20px;
    border-top: 1px solid #F1F5F9;
  }

  .atr-testi-seal-badge {
    width: 54px;
    height: 54px;
    border-radius: 16px;
    background: linear-gradient(135deg, #0F2A4A 0%, #1B5299 100%);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-family: 'DM Sans', sans-serif !important;
    font-size: 13px;
    letter-spacing: 0.04em;
    flex-shrink: 0;
    box-shadow: 0 6px 16px rgba(27, 82, 153, 0.25);
    position: relative;
    transition: transform 0.4s ease;
  }

  .atr-testi-pro-card:hover .atr-testi-seal-badge {
    transform: scale(1.05);
  }

  .atr-testi-seal-check {
    position: absolute;
    bottom: -3px;
    right: -3px;
    width: 18px;
    height: 18px;
    background: #10B981;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
  }

  .atr-testi-author-meta {
    flex: 1;
    min-width: 0;
  }

  .atr-testi-author-name {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 17.5px;
    font-weight: 700;
    color: #0F172A;
    line-height: 1.25;
    margin-bottom: 4px;
  }

  .atr-testi-author-role {
    font-family: 'Inter', sans-serif !important;
    font-size: 13.5px;
    color: #64748B;
    font-weight: 500;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Bottom Trust & Impact Strip */
  .atr-testi-trust-strip {
    background: #ffffff;
    border: 1px solid rgba(27, 82, 153, 0.1);
    border-radius: 20px;
    padding: 24px 32px;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
  }
  @media (max-width: 767px) {
    .atr-testi-trust-strip {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      padding: 20px;
    }
  }

  .atr-trust-item {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .atr-trust-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(27, 82, 153, 0.08);
    color: #1B5299;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .atr-trust-val {
    font-family: 'DM Sans', sans-serif !important;
    font-weight: 800;
    font-size: 17px;
    color: #0F172A;
    line-height: 1.2;
  }

  .atr-trust-lbl {
    font-family: 'Inter', sans-serif !important;
    font-size: 12.5px;
    color: #64748B;
    font-weight: 500;
  }
`

const testimonialsData = [
  {
    id: 1,
    code: "DGPC",
    typeBadge: "Partenaire Institutionnel National",
    statusText: "Convention Cadre Active",
    statusDotClass: "green",
    quote: "« L'Association Tunisienne des Routes joue un rôle fondamental dans la standardisation des normes techniques, le partage d'expériences de chantier et la formation continue de nos cadres et ingénieurs. C'est le carrefour incontournable pour l'ingénierie routière en Tunisie et notre passerelle d'excellence avec l'Association Mondiale de la Route (PIARC). »",
    authorName: "Direction Générale des Ponts et Chaussées (DGPC)",
    authorRole: "Ministère de l'Équipement et de l'Habitat — République Tunisienne",
    tags: ["🏛️ Ministère de l'Équipement", "📋 Convention Cadre 2024-2028", "👷 Formation Continue"],
    metric: "Partenariat technique national"
  },
  {
    id: 2,
    code: "PIARC",
    typeBadge: "Comité National Officiel PIARC",
    statusText: "Affiliation Mondiale Permanente",
    statusDotClass: "blue",
    quote: "« En tant que Comité National officiel en Tunisie, l'ATR accomplit un travail remarquable de diffusion des connaissances mondiales et de valorisation du savoir-faire tunisien. La qualité des contributions scientifiques et l'organisation rigoureuse des congrès de la route font de l'ATR un modèle de dynamisme pour toute la région méditerranéenne et africaine. »",
    authorName: "Association Mondiale de la Route (PIARC)",
    authorRole: "Secrétariat Général & Comité National — Paris / International",
    tags: ["🌍 Comité National Tunisie", "🌐 140+ Pays Membres", "🏆 Congrès Mondiaux"],
    metric: "Réseau mondial depuis 1980"
  }
]

export default function Testimonial() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <section className="atr-testimonial-section" id="testimonials">
        <div className="atr-testi-bg-glow-1"></div>
        <div className="atr-testi-bg-glow-2"></div>

        <div className="auto-container">
          {/* En-tête officiel du projet (Style identique à Notre Équipe et Actualités) */}
          <div className="section_heading text-center mb_50">
            <span className="section_heading_title_small">Témoignages & Alliances</span>
            <h2 className="section_heading_title_big mb_20">
              La Parole à Nos <span>Partenaires</span>
            </h2>
            <p className="section_heading_desc">
              Découvrez la vision et la reconnaissance des plus hautes instances routières nationales et mondiales collaborant avec l'Association Tunisienne des Routes.
            </p>
          </div>

          {/* Affichage des deux avis animés côte à côte */}
          <div className="atr-testi-grid">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="atr-testi-pro-card"
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="atr-testi-card-topline"></div>

                <div>
                  {/* Tête de carte : Type de partenariat & Statut en temps réel */}
                  <div className="atr-testi-card-head">
                    <span className="atr-testi-type-badge">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      {item.typeBadge}
                    </span>
                    <div className="atr-testi-status-pulse">
                      <span className={`atr-testi-dot ${item.statusDotClass}`}></span>
                      <span>{item.statusText}</span>
                    </div>
                  </div>

                  {/* Étoiles & Icône de citation animée */}
                  <div className="atr-testi-quote-wrap">
                    <div className="atr-testi-stars-row">
                      <div className="atr-testi-stars">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <div className="atr-testi-quote-symbol">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Texte du témoignage */}
                    <p className="atr-testi-quote-body">
                      {item.quote}
                    </p>
                  </div>

                  {/* Mots-clés & Badges de convention */}
                  <div className="atr-testi-tags-row">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="atr-testi-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Pied de carte : Sceau institutionnel et Signataire */}
                <div className="atr-testi-author-footer">
                  <div className="atr-testi-seal-badge">
                    <span>{item.code}</span>
                    <span className="atr-testi-seal-check">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </div>
                  <div className="atr-testi-author-meta">
                    <h4 className="atr-testi-author-name">{item.authorName}</h4>
                    <p className="atr-testi-author-role" title={item.authorRole}>{item.authorRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bandeau de réassurance et d'impact institutionnel */}
          <div className="atr-testi-trust-strip">
            <div className="atr-trust-item">
              <div className="atr-trust-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="atr-trust-val">+35 Ans</div>
                <div className="atr-trust-lbl">Coopération État & Ingénierie</div>
              </div>
            </div>

            <div className="atr-trust-item">
              <div className="atr-trust-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="atr-trust-val">140+ Pays</div>
                <div className="atr-trust-lbl">Réseau International PIARC</div>
              </div>
            </div>

            <div className="atr-trust-item">
              <div className="atr-trust-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div>
                <div className="atr-trust-val">100% Rigueur</div>
                <div className="atr-trust-lbl">Normes & Bonnes Pratiques</div>
              </div>
            </div>

            <div className="atr-trust-item">
              <div className="atr-trust-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <div className="atr-trust-val">15+ Éditions</div>
                <div className="atr-trust-lbl">Congrès & Séminaires Majeurs</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
