'use client'
import Link from "next/link";
export default function Footer1() {
    return (
        <>
            <footer className="main-footer" style={{ color: '#ffffff', paddingTop: '90px', marginTop: '30px' }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                .main-footer {
                    padding-top: 90px !important;
                    margin-top: 0 !important;
                }
                .footer-1-middle {
                    padding-top: 50px !important;
                    padding-bottom: 50px !important;
                }
            `}} />
                <div className="footer-1-middle">
                    <div className="auto-container">
                        <div className="p_relative">
                            <div className="logo mb_40">
                                <img src="/1000007112.png" alt="ATR Logo" style={{ height: "130px", backgroundColor: '#ffffff', padding: '10px 10px', borderRadius: '12px' }} />
                            </div>
                        </div>
                        <div className="row" style={{ paddingBottom: '40px' }}>
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-widget-1 mb_30">
                                    <div className="mb_20"><h4 className="fw_bold" style={{ color: '#F69F1A', fontSize: '22px' }}>À propos de l'ATR</h4></div>
                                    <p className="mb_30" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>Créée en 2018, l'Association Tunisienne des Routes (ATR) est une organisation à but non lucratif qui regroupe les professionnels de la route en Tunisie en partenariat étroit avec le Ministère de l'Équipement.</p>
                                    <ul className="footer-social-icon d-flex align-items-center" style={{ gap: '15px' }}>
                                        <li><Link href="#" className="hvr-zoom-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#F69F1A', color: '#fff', borderRadius: '50%', transition: 'all 0.3s' }}><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="#" className="hvr-zoom-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#F69F1A', color: '#fff', borderRadius: '50%', transition: 'all 0.3s' }}><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="link-widget-1 mb_30">
                                    <div className="mb_20"><h4 className="fw_bold" style={{ color: '#F69F1A', fontSize: '22px' }}>Liens Rapides</h4></div>
                                    <ul className="link-widget-1-list" style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '10px' }}><Link href="/about-us" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F69F1A'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Découvrir l'ATR</Link></li>
                                        <li style={{ marginBottom: '10px' }}><Link href="/domaines" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F69F1A'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Domaines Techniques</Link></li>
                                        <li style={{ marginBottom: '10px' }}><Link href="/events" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F69F1A'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Agenda & Événements</Link></li>
                                        <li style={{ marginBottom: '10px' }}><Link href="/blog" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F69F1A'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Publications</Link></li>
                                        <li style={{ marginBottom: '10px' }}><Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F69F1A'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Devenir Membre</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="link-widget-1 mb_30">
                                    <div className="mb_20"><h4 className="fw_bold" style={{ color: '#F69F1A', fontSize: '22px' }}>Liens Utiles</h4></div>
                                    <ul className="link-widget-1-list" style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '10px' }}><Link href="https://www.piarc.org/fr/" target="_blank" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F69F1A'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>PIARC (Association mondiale de la Route)</Link></li>
                                        <li style={{ marginBottom: '10px' }}><Link href="http://www.equipement.tn/" target="_blank" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F69F1A'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Ministère de l'Équipement</Link></li>
                                        <li style={{ marginBottom: '10px' }}><Link href="/events/seminaire-piarc-2026" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#F69F1A'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Séminaire PIARC Tunis 2026</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="contact-widget-1 mb_30">
                                    <div className="mb_20"><h4 className="fw_bold" style={{ color: '#F69F1A', fontSize: '22px' }}>Contact</h4></div>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>N'hésitez pas à nous contacter pour toute demande.</p>
                                    <ul className="contact-widget-1-list" style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.8)' }}><i className="fas fa-map-marker-alt" style={{ color: '#F69F1A', marginRight: '10px' }}></i> Centre Urbain Nord, Tunis</li>
                                        <li style={{ marginBottom: '10px' }}><i className="fas fa-envelope" style={{ color: '#F69F1A', marginRight: '10px' }}></i> <Link href="mailto:contact@atr.org.tn" style={{ color: 'rgba(255,255,255,0.8)' }}>contact@atr.org.tn</Link></li>
                                        <li style={{ marginBottom: '10px' }}><i className="fas fa-phone-alt" style={{ color: '#F69F1A', marginRight: '10px' }}></i> <Link href="tel:+21671234567" style={{ color: 'rgba(255,255,255,0.8)' }}>+216 71 234 567</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom" style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="auto-container">
                        <div className="footer-bottom-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="footer-bottom-text" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                Copyright © 2026 par <Link href="/" style={{ color: '#F69F1A', fontWeight: 'bold' }}>Association Tunisienne des Routes</Link> - Tous droits réservés.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
