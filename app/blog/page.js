'use client'
import React, { useState } from 'react';
import Link from "next/link"; 
import Layout from "@/components/layout/Layout"

export default function BlogGrid() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Publications & Actualités">
                <div>
                    <section className="sidebar-page-container">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                    <div className="blog-grid-content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                    <div className="blog-1-image">
                                        <Link href="/blog-details"><img src="/images/atr-bg-3.png" alt="Manuel de Conception" /></Link>
                                    </div>
                                    <div className="blog-1-bottom-content mb_40">
                                        <h4 className="blog-1-title"><Link href="/blog-details">Manuel de Conception des Chaussées 2024</Link></h4>
                                        <div className="blog-1-postmeta">par <Link href="/blog-details" className="c_primary">CT 4.2 Chaussées</Link> / 12 Oct, 2024</div>
                                        <p className="blog-1-excerpt">Le guide officiel pour le dimensionnement des chaussées neuves en Tunisie, élaboré en collaboration avec le Ministère de l'Équipement.</p>
                                        <div className="blog-1-link-btn"><Link href="/blog-details" className="btn-1 alt">Lire la suite <span></span></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                    <div className="blog-1-image">
                                        <Link href="/blog-details"><img src="/images/atr-bg-1.png" alt="Sécurité Routière" /></Link>
                                    </div>
                                    <div className="blog-1-bottom-content mb_40">
                                        <h4 className="blog-1-title"><Link href="/blog-details">Rapport sur la Sécurité Routière et les Infrastructures</Link></h4>
                                        <div className="blog-1-postmeta">par <Link href="/blog-details" className="c_primary">CT 3.1 Sécurité</Link> / 25 Sep, 2024</div>
                                        <p className="blog-1-excerpt">Analyse approfondie des accidents de la route et propositions d'aménagements pour réduire significativement la mortalité.</p>
                                        <div className="blog-1-link-btn"><Link href="/blog-details" className="btn-1 alt">Lire la suite <span></span></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                    <div className="blog-1-image">
                                        <Link href="/blog-details"><img src="/images/road-feature-1.png" alt="Adaptation Climatique" /></Link>
                                    </div>
                                    <div className="blog-1-bottom-content mb_40">
                                        <h4 className="blog-1-title"><Link href="/blog-details">Adaptation des Routes au Changement Climatique</Link></h4>
                                        <div className="blog-1-postmeta">par <Link href="/blog-details" className="c_primary">CT 3.4 Environnement</Link> / 10 Jul, 2024</div>
                                        <p className="blog-1-excerpt">Étude d'impact des inondations et des fortes chaleurs sur le réseau routier tunisien et les nouvelles méthodes de résilience.</p>
                                        <div className="blog-1-link-btn"><Link href="/blog-details" className="btn-1 alt">Lire la suite <span></span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                    <div className="blog-sidebar ml_40">
                        <div className="sidebar-widget search-widget">
                            <div className="widget-title">
                                <h3>Recherche</h3>
                            </div>
                            <div className="search-form">
                                <form method="post" action="blog">
                                    <div className="form-group">
                                        <input type="search" name="search-field" placeholder="Mots-clés..." required />
                                        <button type="submit"><i className="icon-37"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="sidebar-widget category-widget">
                            <div className="widget-title">
                                <h3>Catégories</h3>
                            </div>
                            <div className="widget-content">
                                <ul className="category-list clearfix">
                                    <li><Link href="/blog">Rapports Techniques</Link></li>
                                    <li><Link href="/blog">Événements</Link></li>
                                    <li><Link href="/blog">Actualités</Link></li>
                                    <li><Link href="/blog">Publications Scientifiques</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
             </div>
            </Layout>
        </>
    )
}