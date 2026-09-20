'use client'
import React from 'react';
export default function About()  {
  return (
    <section className="section-padding">
    <div className="auto-container">
        <div className="row">
            <div className="col-lg-6">
                <div className="about-1-image-wrap text-center mb_30 p_relative">
                    <div className="">
                        <div className="about-1-image-1 alt"><img src="/images/about-history.png" alt="Histoire ATR" style={{borderRadius: '15px'}} /></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
                <div className="section_heading mb_20">
                    <span className="section_heading_title_small">À Propos de l'ATR</span>
                    <h2 className="section_heading_title_big">Association Tunisienne <br /> des Routes</h2>
                </div>
                <p className="aboout-1-desc fw_medium c_dark mb_30">L'Association Tunisienne des Routes (ATR) fédère les professionnels et scientifiques opérant dans le domaine des infrastructures routières.</p>
                <div className="row mb_10">
                    <div className="col-md-6">
                        <p><strong>Notre Mission</strong> <br />Promouvoir les avancées technologiques pour concevoir et entretenir des réseaux routiers de qualité, sûrs et durables en Tunisie.</p>
                    </div>
                    <div className="col-md-6">
                        <p><strong>Notre Vision</strong> <br />Faire de l'infrastructure routière un modèle de résilience face aux défis climatiques et économiques pour tous les usagers.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

