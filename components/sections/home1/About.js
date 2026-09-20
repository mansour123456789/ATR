'use client'
import React, { useEffect, useRef, useState } from 'react';

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap');

  .atr-about-section {
    background-color: #ffffff;
    padding: 120px 0;
    position: relative;
    overflow: hidden;
  }
  .atr-about-section .container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 20% !important;
    padding-right: 20% !important;
  }
  @media (max-width: 767px) {
    .atr-about-section {
      padding: 60px 0;
    }
    .atr-about-section .container {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  .about-left-item {
    position: relative;
    z-index: 9;
  }

  .section-title {
    margin-bottom: 30px;
  }

  .sub-title {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #C07B1B;
    background: rgba(192, 123, 27, 0.08);
    padding: 6px 16px;
    border-radius: 100px;
    display: inline-block;
    margin-bottom: 15px;
  }

  .section-title h2 {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(32px, 5vw, 44px);
    font-weight: 700;
    color: #0F172A;
    line-height: 1.2;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }
  
  .section-title h2 span {
    color: #1B5299;
  }

  .about-left-item p.text {
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    color: #1E293B; /* Darker text */
    font-weight: 500;
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 90%;
  }
  @media (max-width: 767px) {
    .about-left-item p.text {
      max-width: 100%;
      font-size: 15px;
    }
  }

  .about-image {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(27, 82, 153, 0.1);
  }

  .about-image img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .about-image:hover img {
    transform: scale(1.03);
  }

  .about-left-item .about-image {
    max-width: 95%;
  }

  .about-right-item {
    position: relative;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .about-right-item .about-image {
    margin-bottom: 30px;
    max-height: 250px;
  }

  .about-icon-main-item {
    background: #F8FAFC;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
    border: 1px solid rgba(27, 82, 153, 0.05);
  }

  .about-icon-item {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 25px;
  }
  @media (max-width: 575px) {
    .about-icon-item {
      gap: 15px;
    }
    .about-icon-main-item {
      padding: 20px;
    }
  }

  .about-icon-item.mb-0 {
    margin-bottom: 0;
  }

  .icon-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    transition: all 0.3s ease;
  }

  .icon-item:hover {
    transform: translateX(5px);
  }

  .icon-item .icon {
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(27, 82, 153, 0.08);
    flex-shrink: 0;
    color: #1B5299;
    font-size: 20px;
  }

  .icon-item .content h5 {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0F172A; /* Dark title */
    margin-bottom: 6px;
  }

  .icon-item .content p {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: #334155; /* Darker description */
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 0;
  }

  /* Intersection Observer Animations */
  .atr-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .atr-animate.atr-in-view {
    opacity: 1;
    transform: translateY(0);
  }

  .atr-delay-1 { transition-delay: 0.1s; }
  .atr-delay-2 { transition-delay: 0.2s; }
  .atr-delay-3 { transition-delay: 0.3s; }

  @media (max-width: 991px) {
    .about-right-item {
      margin-top: 40px;
      padding-left: 0;
    }
    .about-left-item .about-image {
      max-width: 100%;
    }
  }
`;

export default function AboutModern() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
    <section className="atr-about-section" ref={sectionRef} id="about">
      <style>{STYLES}</style>

      <div className="container">
        <div className="row g-4 align-items-center">

          {/* Left Column */}
          <div className="col-lg-7">
            <div className="about-left-item">
              <div className={`section-title style-2 mb-0 atr-animate ${inView ? 'atr-in-view' : ''}`}>
                <span className="sub-title">À propos de l'ATR</span>
                <h2>
                  <span>B</span>âtissons ensemble l'infrastructure<br /> de demain.
                </h2>
              </div>
              <p className={`text atr-animate atr-delay-1 ${inView ? 'atr-in-view' : ''}`}>
                Créée en 2018 et présidée par Mme Lilia Sifaoui, l'Association Tunisienne des Routes (ATR) est une organisation de référence qui réunit les cadres du Ministère de l’Équipement et de l’Habitat, ingénieurs et experts du secteur pour bâtir des infrastructures modernes, résilientes et hautement sécurisées.
              </p>
              <div className={`about-image atr-animate atr-delay-2 ${inView ? 'atr-in-view' : ''}`}>
                <img src="/images/road-hero.png" alt="ATR Infrastructure" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-5">
            <div className="about-right-item">
              <div className={`about-image atr-animate atr-delay-1 ${inView ? 'atr-in-view' : ''}`}>
                <img src="/images/road-feature-1.png" alt="ATR Routes" />
              </div>

              <div className={`about-icon-main-item atr-animate atr-delay-2 ${inView ? 'atr-in-view' : ''}`}>
                <div className="about-icon-item">

                  <div className="icon-item">
                    <div className="icon">
                      <i className="fas fa-hard-hat"></i>
                    </div>
                    <div className="content">
                      <h5>Expertise Technique</h5>
                      <p>Développement de l'ingénierie routière et des travaux publics.</p>
                    </div>
                  </div>

                  <div className="icon-item">
                    <div className="icon">
                      <i className="fas fa-leaf"></i>
                    </div>
                    <div className="content">
                      <h5>Développement Durable</h5>
                      <p>Réseaux routiers respectueux de l'environnement.</p>
                    </div>
                  </div>

                </div>

                <div className="about-icon-item mb-0">
                  <div className="icon-item">
                    <div className="icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="content">
                      <h5>Sécurité Routière</h5>
                      <p>Sensibilisation et prévention pour la sécurité des usagers.</p>
                    </div>
                  </div>

                  <div className="icon-item">
                    <div className="icon">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="content">
                      <h5>Innovation</h5>
                      <p>Nouvelles technologies dans le secteur des transports.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
