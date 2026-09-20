import React from 'react';
import Link from "next/link"
export default function Feature(){
    return (
        <section className="section-padding pt_130">
            <div className="gray-bg p_absolute l_0 t_0 r_0 b_0"></div>
            <div className="auto-container">
                <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Nos Comités Techniques</span>
                    <h2 className="section_heading_title_big">Expertise pour les Infrastructures <br /> Routières</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 feature-1-column">
                        <div className="feature-1-block alt text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/service-details"><i className="icon-9"></i></Link></div>
                            <h4 className="feature-1-title">Administration & <br /> Résilience</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 feature-1-column">
                    <div className="feature-1-block alt text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">                        
                        <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/service-details"><i className="icon-10"></i></Link></div>
                        <h4 className="feature-1-title">Mobilité <br/> Durable</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 feature-1-column">
                    <div className="feature-1-block alt text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">                        
                        <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/service-details"><i className="icon-12"></i></Link></div>
                        <h4 className="feature-1-title">Sécurité <br/> Routière</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 feature-1-column">
                    <div className="feature-1-block alt text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">                        
                        <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/service-details"><i className="icon-13"></i></Link></div>
                        <h4 className="feature-1-title">Infrastructures <br/> & Ponts</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 feature-1-column">
                    <div className="feature-1-block alt text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">                        
                        <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/service-details"><i className="icon-14"></i></Link></div>
                        <h4 className="feature-1-title">Innovation & <br/> Formation</h4>
                    </div>
                </div>
                </div>
                <div className="text-center">
                    <div className="cta-1-link-bt mt_30"><Link href="/service-details" className="btn-1 alt">Plus de détails<span></span></Link></div>
                </div>
            </div>
        </section>
    );
};
