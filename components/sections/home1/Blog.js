'use client'
import Link from "next/link"
import React from 'react';

const STYLES = `
  .atr-blog-section {
    padding: 120px 0;
    background: #F8FAFC;
    position: relative;
    z-index: 10;
  }
  .atr-blog-section .container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 20% !important;
    padding-right: 20% !important;
  }
  @media (max-width: 767px) {
    .atr-blog-section {
      padding: 60px 0;
    }
    .atr-blog-section .container {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  .atr-blog-card {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(27, 82, 153, 0.04);
    border: 1px solid rgba(27, 82, 153, 0.06);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .atr-blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(27, 82, 153, 0.12);
    border-color: rgba(27, 82, 153, 0.15);
  }

  .atr-blog-image {
    position: relative;
    overflow: hidden;
  }

  .atr-blog-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .atr-blog-card:hover .atr-blog-image img {
    transform: scale(1.05);
  }

  .atr-blog-content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .atr-blog-meta {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #64748B;
    margin-bottom: 15px;
    font-weight: 500;
  }
  
  .atr-blog-meta a {
    color: #C07B1B;
    font-weight: 600;
  }

  .atr-blog-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 15px;
  }

  .atr-blog-title a {
    color: #0F172A; /* Black/Dark text */
    transition: color 0.3s ease;
  }

  .atr-blog-title a:hover {
    color: #1B5299;
  }

  .atr-blog-excerpt {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: #334155; /* Darker text instead of light gray */
    line-height: 1.6;
    margin-bottom: 25px;
    flex-grow: 1;
  }

  .atr-blog-btn {
    display: inline-flex;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #1B5299;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
  }
  
  .atr-blog-btn i {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  .atr-blog-btn:hover {
    color: #C07B1B;
  }

  .atr-blog-btn:hover i {
    transform: translateX(5px);
  }

  .section_heading_title_small {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #C07B1B;
    margin-bottom: 15px;
    display: block;
  }

  .section_heading_title_big {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(32px, 5vw, 44px);
    font-weight: 700;
    color: #0F172A;
    line-height: 1.2;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }
`;

export default function Blog() {
  const [inView, setInView] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="atr-blog-section" ref={sectionRef}>
      <style>{STYLES}</style>
      <div className="container">
        <div className={`section_heading text-center mb_60 atr-animate ${inView ? 'atr-in-view' : ''}`}>
          <span className="section_heading_title_small">Dernières Actualités</span>
          <h2 className="section_heading_title_big">Publications et Rapports <br /> de l'ATR</h2>
        </div>
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className={`atr-blog-card atr-animate ${inView ? 'atr-in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="atr-blog-image">
                <Link href="/publications/ministre-equipement-accueille-bureau-atr">
                  <img src="/images/ministre-bureau-atr.png" alt="Le ministre de l'Équipement accueille le nouveau bureau de l'ATR" />
                </Link>
              </div>
              <div className="atr-blog-content">
                <div className="atr-blog-meta">
                  par <Link href="/publications/ministre-equipement-accueille-bureau-atr">La Presse de Tunisie</Link> / 06 Août, 2025
                </div>
                <h4 className="atr-blog-title">
                  <Link href="/publications/ministre-equipement-accueille-bureau-atr">Le ministre de l’Équipement accueille le nouveau bureau de l’ATR</Link>
                </h4>
                <p className="atr-blog-excerpt">
                  M. Salah Zouari, ministre de l’Équipement et de l’Habitat, a reçu les membres du nouveau bureau exécutif de l’ATR présidé par Mme Lilia Sifaoui.
                </p>
                <div>
                  <Link href="/publications/ministre-equipement-accueille-bureau-atr" className="atr-blog-btn">
                    Lire la suite <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={`atr-blog-card atr-animate ${inView ? 'atr-in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="atr-blog-image">
                <Link href="/publications/securite-routiere-hss-chantiers">
                  <img src="/images/atr-event.png" alt="Rencontre HSS et Sécurité Routière" />
                </Link>
              </div>
              <div className="atr-blog-content">
                <div className="atr-blog-meta">
                  par <Link href="/publications/securite-routiere-hss-chantiers">ATR & Ministère Équipement</Link> / 30 Avr, 2026
                </div>
                <h4 className="atr-blog-title">
                  <Link href="/publications/securite-routiere-hss-chantiers">Rencontre ATR : Enjeux HSS et Sécurité Routière</Link>
                </h4>
                <p className="atr-blog-excerpt">
                  Rencontre consacrée aux enjeux HSS et à la sécurité routière sur les chantiers à la Cité des Sciences : la primauté de la vie humaine et de la responsabilité partagée.
                </p>
                <div>
                  <Link href="/publications/securite-routiere-hss-chantiers" className="atr-blog-btn">
                    Lire la suite <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={`atr-blog-card atr-animate ${inView ? 'atr-in-view' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <div className="atr-blog-image">
                <Link href="/blog-details">
                  <img src="/images/road-feature-1.png" alt="Adaptation Climatique" />
                </Link>
              </div>
              <div className="atr-blog-content">
                <div className="atr-blog-meta">
                  par <Link href="/blog-details">CT 3.4 Environnement</Link> / 10 Jul, 2024
                </div>
                <h4 className="atr-blog-title">
                  <Link href="/blog-details">Adaptation des Routes au Changement Climatique</Link>
                </h4>
                <p className="atr-blog-excerpt">
                  Étude d'impact des inondations et des fortes chaleurs sur le réseau routier tunisien et les nouvelles méthodes de résilience.
                </p>
                <div>
                  <Link href="/blog-details" className="atr-blog-btn">
                    Lire la suite <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

