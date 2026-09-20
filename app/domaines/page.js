'use client'
import Layout from "@/components/layout/Layout"
import Funfact from "@/components/sections/home3/Funfact"
import Cta from "@/components/sections/home1/Cta"
import Link from "next/link"

export default function DomainesPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Domaines Techniques">
                <div>
                    <section className="service-page-section pt_150 pb_140 gray-bg" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="auto-container">
                            <div className="section_heading text-center mb_60">
                                <span className="section_heading_title_small">Expertise ATR</span>
                                <h2 className="section_heading_title_big">Nos Domaines <br/> d'Intervention</h2>
                            </div>
                            <div className="inner-container">
                                <div className="row clearfix justify-content-center">
                                    
                                    {/* Domain 1 */}
                                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                        <div className="service-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                                            <div className="service-1-image hvr-img-zoom-1" style={{ height: '250px' }}>
                                                <img src="/assets/images/conception_route.png" alt="Conception de routes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/domaines" style={{ backgroundColor: '#F69F1A' }}><i className="icon-9"></i></Link></div>
                                            <h4 className="service-1-title" style={{ color: '#1E4C81', padding: '20px 0' }}>Conception de routes</h4>
                                            <div className="service-1-block-overlay text-center" style={{ backgroundColor: '#1E4C81' }}>
                                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/domaines" style={{ backgroundColor: '#F69F1A' }}><i className="icon-3"></i></Link></div>
                                                <h4 className="service-1-title" style={{ color: '#ffffff' }}>Conception de routes</h4>
                                                <p className="service-1-text" style={{ color: 'rgba(255,255,255,0.8)' }}>Ingénierie, tracé, intégration environnementale <br/> et matériaux innovants pour des routes durables.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Domain 2 */}
                                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                        <div className="service-1-block text-center wow fadeInLeft" data-wow-delay=".4s" data-wow-duration=".8s" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                                            <div className="service-1-image hvr-img-zoom-1" style={{ height: '250px' }}>
                                                <img src="/assets/images/risques_route.png" alt="Risques de route" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/domaines" style={{ backgroundColor: '#F69F1A' }}><i className="icon-10"></i></Link></div>
                                            <h4 className="service-1-title" style={{ color: '#1E4C81', padding: '20px 0' }}>Risques de route</h4>
                                            <div className="service-1-block-overlay text-center" style={{ backgroundColor: '#1E4C81' }}>
                                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/domaines" style={{ backgroundColor: '#F69F1A' }}><i className="icon-3"></i></Link></div>
                                                <h4 className="service-1-title" style={{ color: '#ffffff' }}>Risques de route</h4>
                                                <p className="service-1-text" style={{ color: 'rgba(255,255,255,0.8)' }}>Analyse des risques, prévention, <br/> signalisation et aménagement sécurisé.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Domain 3 */}
                                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                        <div className="service-1-block text-center wow fadeInLeft" data-wow-delay=".6s" data-wow-duration=".8s" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                                            <div className="service-1-image hvr-img-zoom-1" style={{ height: '250px' }}>
                                                <img src="/assets/images/ponts_entretien.png" alt="Ponts et entretien" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/domaines" style={{ backgroundColor: '#F69F1A' }}><i className="icon-11"></i></Link></div>
                                            <h4 className="service-1-title" style={{ color: '#1E4C81', padding: '20px 0' }}>Ponts et entretien</h4>
                                            <div className="service-1-block-overlay text-center" style={{ backgroundColor: '#1E4C81' }}>
                                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/domaines" style={{ backgroundColor: '#F69F1A' }}><i className="icon-3"></i></Link></div>
                                                <h4 className="service-1-title" style={{ color: '#ffffff' }}>Ponts et entretien</h4>
                                                <p className="service-1-text" style={{ color: 'rgba(255,255,255,0.8)' }}>Conception, surveillance et maintenance <br/> des ouvrages d'art pour la pérennité.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                    <Funfact />
                    <Cta />
                </div>
            </Layout>
        </>
    )
}
