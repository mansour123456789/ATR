'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function SeminairePiarc() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Séminaire PIARC 2026">
      <main className="atr-seminar-page" style={{ background: '#F8FAFC', padding: '80px 0 100px' }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .atr-seminar-card {
            background: #FFFFFF;
            border-radius: 20px;
            border: 1px solid #DFE6EE;
            box-shadow: 0 12px 36px rgba(16, 43, 84, 0.06);
            overflow: hidden;
            padding: 45px 50px;
          }
          .atr-seminar-hero-media {
            width: 100%;
            max-height: 480px;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 35px;
            box-shadow: 0 12px 30px rgba(16, 43, 84, 0.08);
          }
          .atr-seminar-hero-media img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
          }
          .atr-seminar-meta {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
            color: #64748B;
            font-size: 14px;
            font-weight: 600;
          }
          .atr-seminar-meta i {
            color: #C07B1B;
            margin-right: 6px;
          }
          .atr-seminar-title {
            color: #102B54;
            font-size: clamp(28px, 3.5vw, 38px);
            line-height: 1.25;
            margin-bottom: 18px;
            font-weight: 700;
          }
          .atr-seminar-lead {
            color: #334155;
            font-size: 17.5px;
            line-height: 1.75;
            margin-bottom: 30px;
          }
          .atr-seminar-theme-box {
            background: #EEF5FB;
            padding: 26px 30px;
            border-left: 5px solid #1B5299;
            border-radius: 0 14px 14px 0;
            margin-bottom: 35px;
          }
          .atr-seminar-theme-box h4 {
            color: #102B54;
            font-size: 19px;
            margin-bottom: 8px;
            font-weight: 700;
          }
          .atr-seminar-theme-box p {
            color: #1E293B;
            font-size: 16.5px;
            font-style: italic;
            line-height: 1.6;
            margin: 0;
          }
          .atr-seminar-h3 {
            color: #102B54;
            font-size: 22px;
            font-weight: 700;
            margin: 32px 0 16px;
          }
          .atr-seminar-list {
            padding: 0;
            list-style: none;
            margin-bottom: 30px;
          }
          .atr-seminar-list li {
            position: relative;
            padding-left: 28px;
            margin-bottom: 12px;
            color: #334155;
            font-size: 15px;
            line-height: 1.65;
          }
          .atr-seminar-list li i {
            position: absolute;
            left: 0;
            top: 4px;
            color: #C07B1B;
          }
          .atr-seminar-sidebar-widget {
            background: #FFFFFF;
            border: 1px solid #DFE6EE;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 10px 28px rgba(16, 43, 84, 0.05);
            margin-bottom: 25px;
          }
          .atr-seminar-sidebar-widget h4 {
            color: #102B54;
            font-size: 20px;
            margin-bottom: 20px;
            font-weight: 700;
          }
          .atr-seminar-sidebar-widget.dark {
            background: #102B54;
            color: #FFFFFF;
            border: none;
          }
          .atr-seminar-sidebar-widget.dark h4 {
            color: #FFFFFF;
          }
          @media (max-width: 767px) {
            .atr-seminar-card { padding: 26px 20px; }
          }
        `}} />
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <article className="atr-seminar-card">
                <div className="atr-seminar-hero-media">
                  <img src="/event9desember.jpg" alt="Séminaire PIARC 09-11 Décembre 2026 Tunis" />
                </div>
                
                <div className="atr-seminar-meta">
                  <span><i className="far fa-calendar-alt"></i> 09 au 11 Décembre 2026</span>
                  <span><i className="fas fa-map-marker-alt"></i> Tunis, Tunisie</span>
                </div>

                <h1 className="atr-seminar-title">Séminaire International des Comités Techniques de PIARC</h1>
                <p className="atr-seminar-lead">L'Association Tunisienne des Routes (ATR), en collaboration avec l'Association mondiale de la Route (PIARC), organise un grand séminaire international à Tunis.</p>

                <div className="atr-seminar-theme-box">
                  <h4>Thème Principal :</h4>
                  <p>« Les chaussées routières et la gestion des actifs face aux défis climatiques et à la transition écologique »</p>
                </div>

                <h3 className="atr-seminar-h3">Objectifs de l'événement</h3>
                <ul className="atr-seminar-list">
                  <li><i className="fas fa-check-circle"></i> Présenter les dernières innovations en matière de matériaux routiers durables et bas carbone.</li>
                  <li><i className="fas fa-check-circle"></i> Débattre des méthodologies d'adaptation des chaussées aux impacts climatiques.</li>
                  <li><i className="fas fa-check-circle"></i> Partager les meilleures pratiques de gestion patrimoniale des actifs routiers.</li>
                  <li><i className="fas fa-check-circle"></i> Promouvoir l'intégration de l'économie circulaire dans les projets routiers.</li>
                </ul>

                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <div className="p-4" style={{ backgroundColor: '#102B54', borderRadius: '14px', color: '#FFFFFF', height: '100%' }}>
                      <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 700, marginBottom: '14px' }}>Public Cible (300+ participants)</h4>
                      <ul style={{ paddingLeft: '18px', color: '#E2E8F0', fontSize: '14px', lineHeight: 1.7 }}>
                        <li>Décideurs publics & Ministères</li>
                        <li>Ingénieurs des administrations</li>
                        <li>Entreprises de BTP</li>
                        <li>Bureaux d'études</li>
                        <li>Chercheurs & Universitaires</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-4" style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', border: '1px solid #DFE6EE', height: '100%' }}>
                      <h4 style={{ color: '#102B54', fontSize: '18px', fontWeight: 700, marginBottom: '14px' }}>Programme (3 jours)</h4>
                      <ul style={{ paddingLeft: '18px', color: '#334155', fontSize: '14px', lineHeight: 1.7 }}>
                        <li><strong>Jour 1 (09 Déc) :</strong> Plénière d'ouverture & Cocktail</li>
                        <li><strong>Jour 2 (10 Déc) :</strong> Sessions techniques & Dîner de gala</li>
                        <li><strong>Jour 3 (11 Déc) :</strong> Synthèse & Visites techniques</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="atr-seminar-h3">Sessions Techniques Détaillées</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="atr-seminar-list">
                      <li><i className="fas fa-arrow-right"></i> Conception des chaussées face aux sollicitations extrêmes</li>
                      <li><i className="fas fa-arrow-right"></i> Intégration du changement climatique dans la gestion patrimoniale</li>
                      <li><i className="fas fa-arrow-right"></i> Matériaux innovants et bas carbone</li>
                      <li><i className="fas fa-arrow-right"></i> Recyclage des chaussées et économie circulaire</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="atr-seminar-list">
                      <li><i className="fas fa-arrow-right"></i> Outils de collecte de données pour l'évaluation</li>
                      <li><i className="fas fa-arrow-right"></i> Financement et prise de décision</li>
                      <li><i className="fas fa-arrow-right"></i> Entretien sous contraintes environnementales</li>
                      <li><i className="fas fa-arrow-right"></i> Cas d'études d'adaptation climatique réussies</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <aside>
                <div className="atr-seminar-sidebar-widget">
                  <h4>Informations & Inscription</h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: 1.8 }}>
                    <li className="mb-2"><i className="far fa-clock" style={{ color: '#C07B1B', marginRight: '10px' }}></i> <strong>Date :</strong> 09 au 11 Décembre 2026</li>
                    <li className="mb-2"><i className="fas fa-map-marker-alt" style={{ color: '#C07B1B', marginRight: '10px' }}></i> <strong>Lieu :</strong> Tunis, Tunisie</li>
                    <li className="mb-3"><i className="fas fa-globe" style={{ color: '#C07B1B', marginRight: '10px' }}></i> <strong>Organisateur :</strong> ATR & PIARC</li>
                  </ul>
                  <a
                    href="https://event.atr-tunisie.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-card-cta"
                    style={{ width: '100%', justifyContent: 'center', background: '#C07B1B', color: '#FFFFFF', padding: '14px 20px', borderRadius: '10px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span>S'inscrire sur event.atr-tunisie.org ↗</span>
                  </a>
                </div>

                <div className="atr-seminar-sidebar-widget dark">
                  <h4>Documents</h4>
                  <Link href="#" style={{ display: 'flex', alignItems: 'center', padding: '14px 18px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', color: '#FFFFFF', textDecoration: 'none' }}>
                    <i className="far fa-file-pdf" style={{ fontSize: '24px', marginRight: '15px', color: '#C07B1B' }}></i>
                    <div>
                      <h5 style={{ color: '#FFFFFF', fontSize: '15px', margin: 0, fontWeight: 700 }}>Dossier de Sponsoring</h5>
                      <span style={{ fontSize: '12.5px', color: '#CBD5E1' }}>PDF (2.5 MB)</span>
                    </div>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
