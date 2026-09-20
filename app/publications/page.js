'use client'
import React, { useState } from 'react';
import Link from "next/link"; 
import Layout from "@/components/layout/Layout"

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap');

  .atr-pubs-page {
    background: #F8FAFC;
    font-family: 'Inter', sans-serif;
  }

  .atr-featured-card {
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid rgba(27, 82, 153, 0.1);
    box-shadow: 0 12px 40px rgba(15, 23, 42, 0.06);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .atr-featured-card:hover {
    box-shadow: 0 20px 50px rgba(27, 82, 153, 0.12);
  }

  .atr-featured-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: rgba(192, 123, 27, 0.1);
    color: #C07B1B;
    border: 1px solid rgba(192, 123, 27, 0.25);
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 15px;
  }

  .atr-featured-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: clamp(24px, 3vw, 32px);
    font-weight: 700;
    color: #0F172A;
    line-height: 1.3;
    margin-bottom: 18px;
  }

  .atr-featured-text {
    font-family: 'Inter', sans-serif !important;
    font-size: 15.5px;
    line-height: 1.75;
    color: #334155;
    margin-bottom: 25px;
  }

  .atr-featured-date {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13.5px;
    color: #64748B;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .atr-pub-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #1B5299;
    color: #ffffff !important;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 14.5px;
    padding: 13px 26px;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(27, 82, 153, 0.2);
  }
  .atr-pub-btn:hover {
    background: #C07B1B;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(192, 123, 27, 0.3);
  }

  .atr-news-item-card {
    display: flex;
    gap: 25px;
    align-items: center;
    background: #ffffff;
    padding: 24px;
    border-radius: 20px;
    border: 1px solid rgba(27, 82, 153, 0.08);
    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
    margin-bottom: 25px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .atr-news-item-card:hover {
    transform: translateY(-4px);
    border-color: rgba(27, 82, 153, 0.25);
    box-shadow: 0 15px 35px rgba(27, 82, 153, 0.08);
  }
  @media (max-width: 767px) {
    .atr-news-item-card {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .atr-news-thumb {
    width: 240px;
    height: 180px;
    flex-shrink: 0;
    border-radius: 14px;
    overflow: hidden;
  }
  @media (max-width: 767px) {
    .atr-news-thumb {
      width: 100%;
      height: 200px;
    }
  }

  .atr-news-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .atr-news-item-card:hover .atr-news-thumb img {
    transform: scale(1.05);
  }

  .atr-sidebar-widget {
    background: #ffffff;
    padding: 28px;
    border-radius: 20px;
    border: 1px solid rgba(27, 82, 153, 0.08);
    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
    margin-bottom: 30px;
  }

  .atr-sidebar-widget-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 18px;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 18px;
    padding-bottom: 12px;
    border-bottom: 1px solid #E2E8F0;
  }
`

export default function PublicationsPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Publications & Actualités">
            <style dangerouslySetInnerHTML={{ __html: STYLES }} />
            <div className="atr-pubs-page">
                {/* 1. Publication à la Une (Featured News) */}
                <section className="featured-news-section pt_80 pb_50">
                    <div className="auto-container">
                        <div className="atr-featured-card">
                            <div className="row align-items-center g-0">
                                <div className="col-lg-6">
                                    <div style={{ height: '440px', overflow: 'hidden' }}>
                                        <img 
                                            src="/images/atr-event.png" 
                                            alt="Rencontre ATR HSS et Sécurité Routière" 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-4 p-lg-5">
                                        <div className="atr-featured-badge">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                            </svg>
                                            Publication Spéciale & Rencontre
                                        </div>

                                        <div className="atr-featured-date">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C07B1B" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                                <line x1="16" y1="2" x2="16" y2="6"/>
                                                <line x1="8" y1="2" x2="8" y2="6"/>
                                                <line x1="3" y1="10" x2="21" y2="10"/>
                                            </svg>
                                            Le 30 avril 2026 · Cité des Sciences, Tunis
                                        </div>

                                        <h2 className="atr-featured-title">
                                            <Link href="/publications/securite-routiere-hss-chantiers" style={{ color: 'inherit', textDecoration: 'none' }}>
                                                Rencontre ATR : Enjeux HSS et Sécurité Routière sur les Chantiers
                                            </Link>
                                        </h2>

                                        {/* Paragraphe exact fourni par l'utilisateur */}
                                        <p className="atr-featured-text">
                                            Le 30 avril 2026, l’Association Tunisienne des Routes (ATR) a consacré une rencontre aux enjeux HSS et à la sécurité routière sur les chantiers, réunissant dès 13h30 à la cité des sciences cadres du ministère de l’Équipement et de l’Habitat, ingénieurs, responsables HSE, universitaires, étudiants et professionnels du secteur. Très vite, les échanges ont dépassé le cadre purement technique: derrière les normes, les procédures et les infrastructures, c’est la question de la responsabilité humaine qui s’est imposée au cœur du débat.
                                        </p>

                                        {/* Lien vers la publication complète */}
                                        <Link href="/publications/securite-routiere-hss-chantiers" className="atr-pub-btn">
                                            Lire la publication complète
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Dernières Publications & Guides Techniques */}
                <section className="technical-pubs-section pt_40 pb_50">
                    <div className="auto-container">
                        <div className="section_heading text-center mb_50">
                            <span className="section_heading_title_small">Ressources & Guides</span>
                            <h2 className="section_heading_title_big">Publications <span>Techniques</span></h2>
                            <p className="section_heading_desc">Consultez et téléchargez les référentiels officiels de conception, d'auscultation et de sécurité de l'ATR.</p>
                        </div>
                        <div className="row">
                            {/* Pub 1 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                                <div style={{ background: '#ffffff', borderRadius: '20px', padding: '32px', border: '1px solid rgba(27,82,153,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ width: '64px', height: '64px', backgroundColor: 'rgba(27,82,153,0.08)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1B5299', marginBottom: '20px' }}>
                                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                                        </div>
                                        <h4 style={{ fontFamily: 'DM Sans', fontWeight: '700', color: '#0F172A', marginBottom: '12px' }}>Manuel de Conception</h4>
                                        <p style={{ color: '#64748B', fontSize: '14.5px', lineHeight: '1.6' }}>Guide officiel 2024 pour le dimensionnement rationnel des chaussées neuves en Tunisie.</p>
                                    </div>
                                    <Link href="/publications/securite-routiere-hss-chantiers" style={{ color: '#C07B1B', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                                        Télécharger le PDF →
                                    </Link>
                                </div>
                            </div>
                            {/* Pub 2 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                                <div style={{ background: '#ffffff', borderRadius: '20px', padding: '32px', border: '1px solid rgba(27,82,153,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ width: '64px', height: '64px', backgroundColor: 'rgba(192,123,27,0.08)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C07B1B', marginBottom: '20px' }}>
                                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                                        </div>
                                        <h4 style={{ fontFamily: 'DM Sans', fontWeight: '700', color: '#0F172A', marginBottom: '12px' }}>Guide des Ouvrages d'Art</h4>
                                        <p style={{ color: '#64748B', fontSize: '14.5px', lineHeight: '1.6' }}>Directives de surveillance, maintenance et auscultation des ponts et viaducs.</p>
                                    </div>
                                    <Link href="/publications/securite-routiere-hss-chantiers" style={{ color: '#C07B1B', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                                        Télécharger le PDF →
                                    </Link>
                                </div>
                            </div>
                            {/* Pub 3 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                                <div style={{ background: '#ffffff', borderRadius: '20px', padding: '32px', border: '1px solid rgba(27,82,153,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ width: '64px', height: '64px', backgroundColor: 'rgba(16,185,129,0.08)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', marginBottom: '20px' }}>
                                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                        </div>
                                        <h4 style={{ fontFamily: 'DM Sans', fontWeight: '700', color: '#0F172A', marginBottom: '12px' }}>Rapport Sécurité Routière HSS</h4>
                                        <p style={{ color: '#64748B', fontSize: '14.5px', lineHeight: '1.6' }}>Standards HSS, prévention des chantiers et approche « la route doit pardonner ».</p>
                                    </div>
                                    <Link href="/publications/securite-routiere-hss-chantiers" style={{ color: '#C07B1B', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                                        Consulter le Rapport →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Fil d'actualités détaillé avec Sidebar */}
                <section className="sidebar-page-container pt_30 pb_100">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <h3 style={{ fontFamily: 'DM Sans', fontSize: '24px', fontWeight: '700', color: '#0F172A', marginBottom: '25px' }}>
                                    Toutes les Publications & Comptes-Rendus
                                </h3>
                                
                                {/* News Item 1 — La Presse de Tunisie (Audience Ministre) */}
                                <div className="atr-news-item-card">
                                    <div className="atr-news-thumb">
                                        <img src="/images/ministre-bureau-atr.png" alt="Le ministre de l'Équipement accueille le nouveau bureau de l'ATR" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ color: '#C07B1B', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', marginBottom: '6px' }}>
                                            6 Août 2025 · La Presse de Tunisie
                                        </div>
                                        <h4 style={{ fontFamily: 'DM Sans', fontWeight: '700', fontSize: '20px', marginBottom: '10px' }}>
                                            <Link href="/publications/ministre-equipement-accueille-bureau-atr" style={{ color: '#0F172A', textDecoration: 'none' }}>
                                                Le ministre de l’Équipement accueille le nouveau bureau de l’Association tunisienne des routes
                                            </Link>
                                        </h4>
                                        <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '14px' }}>
                                            M. Salah Zouari, ministre de l’Équipement et de l’Habitat, a reçu les membres du nouveau bureau exécutif élu de l’ATR présidé par Mme Lilia Sifaoui, en présence du premier délégué de la PIARC.
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                                            <Link href="/publications/ministre-equipement-accueille-bureau-atr" style={{ color: '#1B5299', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                Lire le compte-rendu →
                                            </Link>
                                            <a 
                                                href="https://www.lapresse.tn/2025/08/06/le-ministre-de-lequipement-accueille-le-nouveau-bureau-de-lassociation-tunisienne-des-routes/" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style={{ color: '#64748B', fontSize: '13px', fontWeight: '600', textDecoration: 'underline' }}
                                            >
                                                Source La Presse ↗
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* News Item 2 — Rencontre HSS */}
                                <div className="atr-news-item-card">
                                    <div className="atr-news-thumb">
                                        <img src="/images/atr-event.png" alt="Rencontre HSS ATR" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ color: '#C07B1B', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', marginBottom: '6px' }}>
                                            30 Avril 2026 · Cité des Sciences
                                        </div>
                                        <h4 style={{ fontFamily: 'DM Sans', fontWeight: '700', fontSize: '20px', marginBottom: '10px' }}>
                                            <Link href="/publications/securite-routiere-hss-chantiers" style={{ color: '#0F172A', textDecoration: 'none' }}>
                                                Enjeux HSS et sécurité routière sur les chantiers : la responsabilité humaine au cœur du débat
                                            </Link>
                                        </h4>
                                        <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '14px' }}>
                                            Le 30 avril 2026, l’ATR a consacré une rencontre aux enjeux HSS et à la sécurité routière sur les chantiers réunissant les cadres du ministère, ingénieurs et spécialistes...
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                                            <Link href="/publications/securite-routiere-hss-chantiers" style={{ color: '#1B5299', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                Lire l'article complet →
                                            </Link>
                                            <a 
                                                href="https://www.lobseco.com/zero-deces-latr-releve-le-defi-hss-dune-route-qui-pardonne/" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style={{ color: '#64748B', fontSize: '13px', fontWeight: '600', textDecoration: 'underline' }}
                                            >
                                                Source L'Obs Éco ↗
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* News Item 2 */}
                                <div className="atr-news-item-card">
                                    <div className="atr-news-thumb">
                                        <img src="/images/event-congress.png" alt="Congrès ATR" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ color: '#C07B1B', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', marginBottom: '6px' }}>
                                            15 Mars 2026 · Tunis
                                        </div>
                                        <h4 style={{ fontFamily: 'DM Sans', fontWeight: '700', fontSize: '20px', marginBottom: '10px' }}>
                                            <Link href="/publications/securite-routiere-hss-chantiers" style={{ color: '#0F172A', textDecoration: 'none' }}>
                                                Préparation du Séminaire International PIARC 2026 en Tunisie
                                            </Link>
                                        </h4>
                                        <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '14px' }}>
                                            L'Association Tunisienne des Routes affine la feuille de route technique pour le grand séminaire international avec les comités mondiaux.
                                        </p>
                                        <Link href="/publications/securite-routiere-hss-chantiers" style={{ color: '#1B5299', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                            Lire la suite →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Sidebar */}
                            <div className="col-lg-4 col-md-12">
                                <aside>
                                    <div className="atr-sidebar-widget">
                                        <h4 className="atr-sidebar-widget-title">Recherche</h4>
                                        <div style={{ display: 'flex' }}>
                                            <input 
                                                type="search" 
                                                placeholder="Mots-clés..." 
                                                style={{ flex: 1, padding: '12px 16px', border: '1px solid #E2E8F0', borderRadius: '10px 0 0 10px', outline: 'none', fontSize: '14px' }} 
                                            />
                                            <button style={{ backgroundColor: '#1B5299', color: '#fff', border: 'none', padding: '0 20px', borderRadius: '0 10px 10px 0' }}>
                                                🔍
                                            </button>
                                        </div>
                                    </div>

                                    <div className="atr-sidebar-widget">
                                        <h4 className="atr-sidebar-widget-title">Thématiques & Catégories</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
                                            <li style={{ padding: '10px 0', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between' }}>
                                                <Link href="/publications" style={{ color: '#1E293B', textDecoration: 'none' }}>Sécurité Routière & HSS</Link>
                                                <span style={{ color: '#C07B1B', fontWeight: '700' }}>(04)</span>
                                            </li>
                                            <li style={{ padding: '10px 0', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between' }}>
                                                <Link href="/publications" style={{ color: '#1E293B', textDecoration: 'none' }}>Comptes-Rendus de Rencontres</Link>
                                                <span style={{ color: '#C07B1B', fontWeight: '700' }}>(08)</span>
                                            </li>
                                            <li style={{ padding: '10px 0', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between' }}>
                                                <Link href="/publications" style={{ color: '#1E293B', textDecoration: 'none' }}>Normes & Guides Techniques</Link>
                                                <span style={{ color: '#C07B1B', fontWeight: '700' }}>(12)</span>
                                            </li>
                                            <li style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                                                <Link href="/publications" style={{ color: '#1E293B', textDecoration: 'none' }}>Publications PIARC Monde</Link>
                                                <span style={{ color: '#C07B1B', fontWeight: '700' }}>(05)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}