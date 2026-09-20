import React from 'react';
import Link from "next/link"
export default function Blog() {
    return (
        <section className="section-padding">
            <div className="auto-container">
                <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Nos Publications</span>
                    <h2 className="section_heading_title_big">Dernières Actualités & <br /> Rapports ATR</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image alt">
                                <Link href="/blog-details"><img src="/images/atr-bg-3.png" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content alt mb_30">
                                <div className="blog-1-postmeta">par <Link href="/blog-details" className="c_primary">CT 4.2</Link> / 12 Oct, 2024</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">Manuel de Conception <br /> des Chaussées 2024</Link></h4>
                                <p className="blog-1-excerpt">Le guide officiel pour le dimensionnement des chaussées neuves en Tunisie.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="btn-1 alt">Lire la suite <span></span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image alt">
                                <Link href="/blog-details"><img src="/images/atr-bg-1.png" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content alt mb_30">
                                <div className="blog-1-postmeta">par <Link href="/blog-details" className="c_primary">CT 3.1</Link> / 25 Sep, 2024</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">Rapport sur la Sécurité <br /> Routière</Link></h4>
                                <p className="blog-1-excerpt">Analyse approfondie des accidents de la route et propositions d'aménagements.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="btn-1 alt">Lire la suite <span></span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image alt">
                                <Link href="/blog-details"><img src="/images/road-feature-1.png" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content alt mb_30">
                                <div className="blog-1-postmeta">par <Link href="/blog-details" className="c_primary">CT 3.4</Link> / 10 Jul, 2024</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">Adaptation des Routes <br /> au Changement Climatique</Link></h4>
                                <p className="blog-1-excerpt">Étude d'impact des inondations sur le réseau routier tunisien.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="btn-1 alt">Lire la suite <span></span></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
