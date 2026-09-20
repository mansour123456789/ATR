'use client'
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home1/Cta"

export default function Formation() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Formation & Académie">
        
        {/* Intro Section */}
        <section className="section-padding pb_0">
            <div className="auto-container">
                <div className="row align-items-center mb_80">
                    <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                        <div className="image-box p_relative" style={{ overflow: 'hidden', borderRadius: '15px' }}>
                            <img src="/images/hero-about.png" alt="Formation ATR" style={{width: '100%', display: 'block'}} className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 ps-lg-5">
                        <div className="section_heading mb_20">
                            <span className="section_heading_title_small">Académie ATR</span>
                            <h2 className="section_heading_title_big" style={{color: '#1E4C81'}}>Renforcer les <br /> Compétences</h2>
                        </div>
                        <p className="aboout-1-desc fw_medium c_dark mb_30">L'Académie de l'Association Tunisienne des Routes propose des programmes de formation continue dédiés aux ingénieurs et techniciens du secteur public et privé.</p>
                        
                        <div className="row">
                            <div className="col-md-6 col-sm-12 mb_20">
                                <div className="d-flex align-items-start">
                                    <div className="icon me-3" style={{color: '#F69F1A', fontSize: '30px'}}><i className="fas fa-certificate"></i></div>
                                    <div>
                                        <h5 style={{color: '#1E4C81'}}>Certifications</h5>
                                        <p className="mb-0 fs_14">Reconnues en conception et sécurité.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 mb_20">
                                <div className="d-flex align-items-start">
                                    <div className="icon me-3" style={{color: '#F69F1A', fontSize: '30px'}}><i className="fas fa-laptop-code"></i></div>
                                    <div>
                                        <h5 style={{color: '#1E4C81'}}>Ateliers Pratiques</h5>
                                        <p className="mb-0 fs_14">Maîtrise de logiciels métiers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Courses Grid Section */}
        <section className="service-page-section pt_80 pb_80 gray-bg">
            <div className="auto-container">
                <div className="section_heading text-center mb_50">
                    <h2 className="section_heading_title_big">Nos Programmes Phares</h2>
                </div>
                
                <div className="row clearfix justify-content-center">
                    {/* Course 1 */}
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block mb_30">
                        <div className="service-1-block text-center h-100" style={{backgroundColor: '#fff', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                            <div className="icon-box mb_20"><i className="fas fa-road" style={{fontSize: '50px', color: '#1E4C81'}}></i></div>
                            <h4 className="mb_15" style={{color: '#F69F1A'}}>Dimensionnement des Chaussées</h4>
                            <p className="mb_20">Formation avancée sur les nouvelles méthodes rationnelles et l'utilisation du catalogue tunisien.</p>
                        </div>
                    </div>
                    {/* Course 2 */}
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block mb_30">
                        <div className="service-1-block text-center h-100" style={{backgroundColor: '#fff', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                            <div className="icon-box mb_20"><i className="fas fa-shield-alt" style={{fontSize: '50px', color: '#1E4C81'}}></i></div>
                            <h4 className="mb_15" style={{color: '#F69F1A'}}>Audit de Sécurité Routière</h4>
                            <p className="mb_20">Cycle de certification pour devenir auditeur agrée en sécurité des infrastructures routières.</p>
                        </div>
                    </div>
                    {/* Course 3 */}
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block mb_30">
                        <div className="service-1-block text-center h-100" style={{backgroundColor: '#fff', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                            <div className="icon-box mb_20"><i className="fas fa-leaf" style={{fontSize: '50px', color: '#1E4C81'}}></i></div>
                            <h4 className="mb_15" style={{color: '#F69F1A'}}>Résilience Climatique</h4>
                            <p className="mb_20">Intégration des facteurs climatiques (inondations, chaleur) dans la conception des ouvrages.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section (Full width, outside padding) */}
        <Cta />
        
    </Layout>
  )
}
