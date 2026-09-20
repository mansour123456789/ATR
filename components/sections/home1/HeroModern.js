'use client'
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

/* ─── keyframes injected via a <style> tag ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

  :root {
    --atr-primary:   #1B5299;
    --atr-secondary: #C07B1B;
    --atr-tertiary:  #F4F7FA;
    --atr-neutral:   #2D3136;
  }

  @keyframes atrFadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes atrFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes atrSlideLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to   { opacity: 1; transform: translateX(0);     }
  }
  @keyframes atrSlideRight {
    from { opacity: 0; transform: translateX(50px); }
    to   { opacity: 1; transform: translateX(0);    }
  }
  @keyframes atrScaleIn {
    from { opacity: 0; transform: scale(0.88); }
    to   { opacity: 1; transform: scale(1);    }
  }
  @keyframes atrWordReveal {
    from { opacity: 0; transform: translateY(110%); filter: blur(6px); }
    to   { opacity: 1; transform: translateY(0);    filter: blur(0);   }
  }
  @keyframes atrPulseGold {
    0%,100% { box-shadow: 0 0 0 0 rgba(192,123,27,.45); }
    50%      { box-shadow: 0 0 0 14px rgba(192,123,27,0); }
  }
  @keyframes atrLineScan {
    from { transform: translateX(-100%); }
    to   { transform: translateX(100%);  }
  }
  @keyframes atrCardFade {
    0%   { opacity:0; transform:translateY(16px); }
    15%  { opacity:1; transform:translateY(0);    }
    85%  { opacity:1; transform:translateY(0);    }
    100% { opacity:0; transform:translateY(-16px);}
  }
  @keyframes atrCountUp {
    from { opacity:0; transform:scale(.7); }
    to   { opacity:1; transform:scale(1);  }
  }

  /* ── Utility easing ── */
  .atr-ease { animation-timing-function: cubic-bezier(0.16,1,0.3,1); animation-fill-mode: both; }
  .atr-fade-in    { animation: atrFadeIn    0.8s; }
  .atr-fade-up    { animation: atrFadeUp    0.9s; }
  .atr-slide-l    { animation: atrSlideLeft 0.9s; }
  .atr-slide-r    { animation: atrSlideRight 0.9s; }
  .atr-scale-in   { animation: atrScaleIn   1.1s; }

  .atr-d0  { animation-delay: 0s;    }
  .atr-d1  { animation-delay: 0.15s; }
  .atr-d2  { animation-delay: 0.3s;  }
  .atr-d3  { animation-delay: 0.45s; }
  .atr-d4  { animation-delay: 0.6s;  }
  .atr-d5  { animation-delay: 0.75s; }
  .atr-d6  { animation-delay: 0.9s;  }
  .atr-d7  { animation-delay: 1.05s; }
  .atr-d8  { animation-delay: 1.2s;  }
  .atr-d9  { animation-delay: 1.35s; }
  .atr-d10 { animation-delay: 1.5s;  }
  .atr-d11 { animation-delay: 1.65s; }

  /* ── Word reveal ── */
  .atr-word-wrap {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
    line-height: 1.15;
  }
  .atr-word {
    display: inline-block;
    animation: atrWordReveal 0.75s cubic-bezier(0.16,1,0.3,1) both;
  }

  /* ── Hero wrapper ── */
  .atr-hero-root {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Manrope', sans-serif;
  }

  /* ── Background ── */
  .atr-bg {
    position: absolute;
    inset: 0;
    background-image: url('/images/bizerte_bridge.png');
    background-size: 110%;
    background-position: center 20%;
    z-index: 0;
  }
  .atr-bg::after {
    content:'';
    position:absolute;
    inset:0;
    background: linear-gradient(
      120deg,
      rgba(27,82,153,.65) 0%,
      rgba(27,82,153,.45) 45%,
      rgba(15,23,42,.65) 100%
    );
  }

  /* ── scan line ── */
  .atr-scan-line {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 2px;
    background: linear-gradient(90deg, transparent, rgba(192,123,27,.7), transparent);
    animation: atrLineScan 3.5s linear infinite;
    z-index: 1;
  }

  /* ── Grid overlay ── */
  .atr-grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
    background-size: 60px 60px;
    z-index: 1;
  }

  /* ── Geometric accents ── */
  .atr-geo-1 {
    position: absolute;
    top: 12%; right: 8%;
    width: 320px; height: 320px;
    border-radius: 50%;
    border: 1.5px solid rgba(192,123,27,.2);
    z-index: 1;
    pointer-events: none;
  }
  .atr-geo-2 {
    position: absolute;
    top: 18%; right: 12%;
    width: 200px; height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(192,123,27,.12) 0%, transparent 70%);
    z-index: 1;
  }
  .atr-geo-3 {
    position: absolute;
    bottom: 28%; left: -80px;
    width: 260px; height: 260px;
    border: 1px solid rgba(27,82,153,.3);
    transform: rotate(45deg);
    z-index: 1;
  }

  /* ── Content area ── */
  .atr-content {
    position: relative;
    z-index: 10;
    flex: 1;
    display: flex;
    align-items: center;
    padding: 150px 10% 60px;
  }
  @media (max-width: 767px) {
    .atr-content {
      padding: 100px 5% 40px;
      align-items: flex-start;
    }
  }

  .atr-text-wrapper {
    max-width: 55%;
    min-width: 280px;
  }
  @media (max-width: 1024px) {
    .atr-text-wrapper {
      max-width: 80%;
    }
  }
  @media (max-width: 767px) {
    .atr-text-wrapper {
      max-width: 100%;
    }
  }

  /* ── Badge ── */
  .atr-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(192,123,27,.15);
    border: 1px solid rgba(192,123,27,.4);
    border-radius: 100px;
    padding: 6px 16px;
    margin-bottom: 28px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #E8A835;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .atr-badge-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #C07B1B;
    animation: atrPulseGold 2s ease-in-out infinite;
  }

  /* ── Headline ── */
  .atr-headline {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: clamp(42px, 6vw, 88px);
    line-height: 1.05;
    letter-spacing: -0.04em;
    color: #fff;
    margin-bottom: 28px;
  }
  .atr-headline .gold { color: #E8A835; }
  .atr-headline .dim  { color: rgba(255,255,255,.45); }

  /* ── Sub text ── */
  .atr-subtext {
    font-family: 'Inter', sans-serif;
    font-size: clamp(15px, 1.4vw, 18px);
    color: rgba(255,255,255,.75);
    line-height: 1.65;
    max-width: 460px;
    margin-bottom: 44px;
    letter-spacing: -0.01em;
  }

  /* ── CTA Row ── */
  .atr-cta-row {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .atr-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--atr-secondary);
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    padding: 16px 32px;
    border-radius: 6px;
    text-decoration: none;
    transition: background .25s ease, transform .25s ease, box-shadow .25s ease;
    box-shadow: 0 8px 30px rgba(192,123,27,.35);
  }
  .atr-btn-primary:hover {
    background: #d4891e;
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(192,123,27,.5);
  }
  .atr-btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: -0.02em;
    padding: 15px 28px;
    border-radius: 6px;
    border: 1.5px solid rgba(255,255,255,.35);
    text-decoration: none;
    transition: border-color .25s, background .25s, transform .25s;
  }
  .atr-btn-outline:hover {
    border-color: rgba(255,255,255,.7);
    background: rgba(255,255,255,.07);
    transform: translateY(-2px);
  }

  /* ── Stats strip ── */
  .atr-stats-strip {
    display: flex;
    gap: 40px;
    margin-top: 56px;
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    .atr-stats-strip {
      gap: 20px;
      margin-top: 40px;
    }
  }
  .atr-stat-item {}
  .atr-stat-number {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: clamp(30px, 3.5vw, 48px);
    color: #E8A835;
    letter-spacing: -0.05em;
    line-height: 1;
    animation: atrCountUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
  }
  .atr-stat-label {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: rgba(255,255,255,.55);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-top: 4px;
  }
  .atr-stat-divider {
    width: 1px;
    height: 50px;
    background: rgba(255,255,255,.15);
    align-self: center;
  }

  /* ── Road image panel ── */
  .atr-road-panel {
    position: absolute;
    z-index: 5;
    right: 0; top: 0; bottom: 0;
    width: 42%;
    overflow: hidden;
    display: none;
  }
  @media (min-width: 1024px) { .atr-road-panel { display: block; } }
  .atr-road-panel img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(.85) saturate(1.1);
  }
  .atr-road-panel::before {
    content:'';
    position:absolute;
    inset:0;
    background: linear-gradient(90deg, rgba(27,82,153,.55) 0%, transparent 50%);
    z-index: 1;
  }

  /* ── Feature badges on road image ── */
  .atr-feature-badge {
    position: absolute;
    z-index: 5;
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 12px;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    animation: atrFadeUp 1s cubic-bezier(0.16,1,0.3,1) both;
  }
  .atr-feature-badge .badge-icon {
    width: 36px; height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }

  /* ── Bottom Panels ── */
  .atr-panels {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    .atr-panels { grid-template-columns: 2fr 1fr 2fr; }
  }

  /* Panel 1 */
  .atr-panel-1 {
    background: var(--atr-tertiary);
    padding: 44px 40px;
    position: relative;
    overflow: hidden;
  }
  @media (max-width: 767px) {
    .atr-panel-1 {
      padding: 30px 20px;
    }
  }
  .atr-panel-1-title {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: clamp(20px, 2vw, 30px);
    color: var(--atr-neutral);
    line-height: 1.15;
    letter-spacing: -0.04em;
    max-width: 280px;
    margin-bottom: 20px;
  }
  .atr-panel-1-title span { color: var(--atr-primary); }
  .atr-panel-1-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--atr-secondary);
    text-decoration: none;
    border-bottom: 1.5px solid var(--atr-secondary);
    padding-bottom: 2px;
    letter-spacing: -0.01em;
    transition: opacity .2s;
  }
  .atr-panel-1-link:hover { opacity: .75; }
  .atr-panel-1-deco {
    position: absolute;
    right: -20px; bottom: -20px;
    width: 150px; height: 150px;
    border-radius: 50%;
    background: rgba(27,82,153,.07);
    pointer-events: none;
  }
  .atr-panel-1-deco2 {
    position: absolute;
    right: 30px; bottom: 30px;
    width: 80px; height: 80px;
    border-radius: 50%;
    border: 1.5px solid rgba(27,82,153,.15);
    pointer-events: none;
  }

  /* Panel 2 – rotating cards */
  .atr-panel-2 {
    background: #fff;
    padding: 44px 28px;
    position: relative;
    overflow: hidden;
    min-height: 220px;
  }
  @media (max-width: 767px) {
    .atr-panel-2 {
      padding: 30px 20px;
      min-height: 200px;
    }
  }
  .atr-card-outer {
    position: relative;
    height: 120px;
  }
  .atr-card {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: opacity .5s ease, transform .5s ease;
  }
  .atr-card.active  { opacity: 1; transform: translateY(0);  pointer-events: auto; }
  .atr-card.inactive{ opacity: 0; transform: translateY(20px); pointer-events: none; }
  .atr-card-icon-wrap {
    width: 44px; height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  .atr-card-text {
    font-family: 'Inter', sans-serif;
    font-size: clamp(13px, 1.1vw, 16px);
    color: rgba(45,49,54,.8);
    line-height: 1.3;
    letter-spacing: -0.02em;
  }
  .atr-dots {
    display: flex;
    gap: 6px;
    margin-top: 18px;
  }
  .atr-dot {
    flex: 1;
    height: 3px;
    border-radius: 100px;
    background: rgba(45,49,54,.15);
    transition: background .4s;
    cursor: pointer;
  }
  .atr-dot.active { background: var(--atr-primary); }

  /* Panel 3 */
  .atr-panel-3 {
    background: var(--atr-neutral);
    padding: 44px 40px;
    display: flex;
    align-items: center;
    gap: 24px;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 767px) {
    .atr-panel-3 {
      padding: 30px 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
  }
  .atr-panel-3-img {
    width: 110px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    flex-shrink: 0;
    filter: brightness(.9) saturate(1.1);
  }
  .atr-panel-3-number {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    font-size: clamp(28px, 3vw, 42px);
    color: #E8A835;
    letter-spacing: -0.05em;
    line-height: 1;
  }
  .atr-panel-3-text {
    font-family: 'Inter', sans-serif;
    font-size: clamp(13px, 1.1vw, 16px);
    color: rgba(255,255,255,.6);
    line-height: 1.3;
    letter-spacing: -0.02em;
    margin-top: 6px;
    max-width: 180px;
  }
  .atr-panel-3-deco {
    position: absolute;
    right: -40px; top: -40px;
    width: 160px; height: 160px;
    border-radius: 50%;
    border: 1.5px solid rgba(192,123,27,.15);
    pointer-events: none;
  }

  /* ── Scroll cue ── */
  .atr-scroll-cue {
    position: absolute;
    bottom: calc(280px + 20px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    opacity: .6;
    animation: atrFadeIn 1s 2s both;
  }
  @media (min-width: 768px) { .atr-scroll-cue { bottom: calc(200px + 20px); } }
  .atr-scroll-cue span {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    color: #fff;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .atr-scroll-mouse {
    width: 22px; height: 34px;
    border: 1.5px solid rgba(255,255,255,.5);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding-top: 6px;
  }
  .atr-scroll-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: #fff;
    animation: atrFadeUp 1.2s ease infinite;
  }
`

/* ── Card data ── */
const CARDS = [
  { bg: 'var(--atr-primary)', icon: '🛣️', text: 'Développement du réseau routier tunisien pour une mobilité durable' },
  { bg: '#1a6b3a', icon: '🌿', text: 'Infrastructures respectueuses de l\'environnement et du changement climatique' },
  { bg: '#0e6b7a', icon: '🔬', text: 'Recherche et innovation dans les matériaux de chaussées' },
  { bg: '#7a5c0e', icon: '🛡️', text: 'Sécurité routière : objectif zéro accident grave en Tunisie' },
]

/* ── Word reveal helper ── */
function WordReveal({ words, delays }) {
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="atr-word-wrap">
          <span
            className="atr-word"
            style={{ animationDelay: `${delays[i]}s`, animationTimingFunction: 'cubic-bezier(0.16,1,0.3,1)', animationFillMode: 'both' }}
          >
            {w.text}
          </span>
        </span>
      ))}
    </>
  )
}

/* ════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════ */
export default function HeroModern() {
  const [activeCard, setActiveCard] = useState(0)

  /* auto-rotate cards */
  useEffect(() => {
    const id = setInterval(() => {
      setActiveCard(c => (c + 1) % CARDS.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <style>{STYLES}</style>

      <div className="atr-hero-root">
        {/* ── Background ── */}
        <div className="atr-bg" />
        <div className="atr-scan-line" />
        <div className="atr-grid-overlay" />

        {/* ── Geometric accents ── */}
        <div className="atr-geo-1" />
        <div className="atr-geo-2" />
        <div className="atr-geo-3" />

        {/* ── Road image side panel (desktop) ── */}
        <div className={`atr-road-panel atr-ease atr-scale-in atr-d3`}>
          <img src="/images/atr_seminar.png" alt="Séminaire ATR" />

          {/* floating badges */}
          <div className="atr-feature-badge" style={{ top: '22%', left: '8%', animationDelay: '1.1s' }}>
            <div className="badge-icon" style={{ background: 'rgba(27,82,153,.8)' }}>🛡️</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.03em' }}>Sécurité Routière</div>
              <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>Comités techniques actifs</div>
            </div>
          </div>

          <div className="atr-feature-badge" style={{ bottom: '35%', left: '5%', animationDelay: '1.4s' }}>
            <div className="badge-icon" style={{ background: 'rgba(192,123,27,.85)' }}>⚡</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.03em' }}>Mobilité Intelligente</div>
              <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>Innovation & smart roads</div>
            </div>
          </div>
        </div>

        {/* ════ HERO CONTENT ════ */}
        <div className="atr-content">
          <div className="atr-text-wrapper">

            {/* Badge */}
            <div className={`atr-badge atr-ease atr-fade-in atr-d1`}>
              <span className="atr-badge-dot" />
              Association Tunisienne des Routes
            </div>

            {/* Headline */}
            <h1 className="atr-headline">
              <div>
                <WordReveal
                  words={[
                    { text: 'Façonner' },
                    { text: '\u00a0' },
                    { text: 'les\u00a0' },
                  ]}
                  delays={[0.3, 0.4, 0.45]}
                />
                <span className="gold atr-word-wrap">
                  <span className="atr-word" style={{ animationDelay: '0.55s', animationTimingFunction: 'cubic-bezier(0.16,1,0.3,1)', animationFillMode: 'both' }}>Routes</span>
                </span>
              </div>
              <div>
                <span className="dim atr-word-wrap">
                  <span className="atr-word" style={{ animationDelay: '0.65s', animationTimingFunction: 'cubic-bezier(0.16,1,0.3,1)', animationFillMode: 'both' }}>de&nbsp;</span>
                </span>
                <WordReveal
                  words={[
                    { text: 'Demain' },
                  ]}
                  delays={[0.75]}
                />
              </div>
              <div>
                <span className="dim atr-word-wrap">
                  <span className="atr-word" style={{ animationDelay: '0.85s', animationTimingFunction: 'cubic-bezier(0.16,1,0.3,1)', animationFillMode: 'both' }}>en&nbsp;</span>
                </span>
                <span className="atr-word-wrap">
                  <span className="atr-word" style={{ animationDelay: '0.95s', animationTimingFunction: 'cubic-bezier(0.16,1,0.3,1)', animationFillMode: 'both' }}>Tunisie</span>
                </span>
              </div>
            </h1>

            {/* Sub-text */}
            <p className={`atr-subtext atr-ease atr-fade-up atr-d5`}>
              L'ATR rassemble les experts de l'infrastructure routière pour bâtir des
              réseaux plus sûrs, durables et intelligents — pour la Tunisie d'aujourd'hui
              et de demain.
            </p>

            {/* CTA Row */}
            <div className={`atr-cta-row atr-ease atr-fade-up atr-d6`}>
              <Link href="/about-us" className="atr-btn-primary">
                Découvrir l'ATR
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link href="/events" className="atr-btn-outline">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polygon points="10,8 16,12 10,16 10,8" />
                </svg>
                Nos Événements
              </Link>
            </div>

            {/* Stats strip */}
            <div className={`atr-stats-strip atr-ease atr-fade-up atr-d8`}>
              <div className="atr-stat-item">
                <div className="atr-stat-number" style={{ animationDelay: '1.4s' }}>30+</div>
                <div className="atr-stat-label">Ans d'expertise</div>
              </div>
              <div className="atr-stat-divider" />
              <div className="atr-stat-item">
                <div className="atr-stat-number" style={{ animationDelay: '1.5s' }}>500+</div>
                <div className="atr-stat-label">Membres actifs</div>
              </div>
              <div className="atr-stat-divider" />
              <div className="atr-stat-item">
                <div className="atr-stat-number" style={{ animationDelay: '1.6s' }}>6</div>
                <div className="atr-stat-label">Comités techniques</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll cue ── */}
        <div className="atr-scroll-cue">
          <div className="atr-scroll-mouse">
            <div className="atr-scroll-dot" />
          </div>
          <span>Défiler</span>
        </div>

        {/* ════ BOTTOM 3 PANELS ════ */}
        <div className="atr-panels">

          {/* ── Panel 1 ── */}
          <div className={`atr-panel-1 atr-ease atr-fade-up atr-d9`}>
            <div className="atr-panel-1-title">
              Votre voie vers une infrastructure <span>de qualité mondiale</span>
            </div>
            <Link href="/strategie" className="atr-panel-1-link">
              Plan stratégique ATR
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="atr-panel-1-deco" />
            <div className="atr-panel-1-deco2" />
          </div>

          {/* ── Panel 2 – rotating cards ── */}
          <div className={`atr-panel-2 atr-ease atr-fade-up atr-d10`}>
            <div className="atr-card-outer">
              {CARDS.map((card, i) => (
                <div key={i} className={`atr-card ${i === activeCard ? 'active' : 'inactive'}`}>
                  <div className="atr-card-icon-wrap" style={{ background: card.bg }}>
                    <span>{card.icon}</span>
                  </div>
                  <div className="atr-card-text">{card.text}</div>
                </div>
              ))}
            </div>
            <div className="atr-dots">
              {CARDS.map((_, i) => (
                <div
                  key={i}
                  className={`atr-dot ${i === activeCard ? 'active' : ''}`}
                  onClick={() => setActiveCard(i)}
                />
              ))}
            </div>
          </div>

          {/* ── Panel 3 ── */}
          <div className={`atr-panel-3 atr-ease atr-fade-up atr-d11`}>
            <img src="/images/atr-panel-stats.png" alt="Réseau routier" className="atr-panel-3-img" />
            <div>
              <div className="atr-panel-3-number">10 000+</div>
              <div className="atr-panel-3-text">
                km de routes tunisiennes bénéficiant des standards ATR
              </div>
            </div>
            <div className="atr-panel-3-deco" />
          </div>

        </div>
        {/* ════ END PANELS ════ */}

      </div>
    </>
  )
}
