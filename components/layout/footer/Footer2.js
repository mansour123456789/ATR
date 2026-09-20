'use client'
import Link from "next/link";
export default function Footer2() {
    return (
        <>           
            <footer className="main-footer" >
            <div className="footer-1-middle alt">
                <div className="auto-container">
                    <div className="p_relative">
                        <div className="logo mb_70"><img src="/images/logo/logo-white.png" alt="ATR Logo" style={{ height: "60px" }} /></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-widget-1 mb_30">
                                <div className="mb_30"><h4 className="fw_sbold c_light">À propos de l'ATR</h4></div>
                                <p className="mb_30">L'Association Tunisienne des Routes est une organisation scientifique et professionnelle œuvrant pour le développement des infrastructures routières en Tunisie.</p>
                                <ul className="footer-social-icon d-flex align-items-center">
                                    <li><Link href="#" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="#" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="link-widget-1 mb_30">
                                <div className="mb_30"><h4 className="fw_sbold c_light">Liens Rapides</h4></div>
                                <ul className="link-widget-1-list">
                                    <li><Link href="/about-us">À Propos</Link></li>
                                    <li><Link href="/service">Axes Stratégiques</Link></li>
                                    <li><Link href="/team">Notre Équipe</Link></li>
                                    <li><Link href="/blog">Publications</Link></li>
                                    <li><Link href="/contact">Contactez-nous</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="link-widget-1 mb_30">
                                <div className="mb_30"><h4 className="fw_sbold c_light">Notre Vision</h4></div>
                                <p className="mb_25">Promouvoir les avancées <br/>
                                technologiques et la résilience.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-widget-1 mb_30">
                                <div className="mb_30"><h4 className="fw_sbold c_light">Contact</h4></div>
                                <p>N'hésitez pas à nous contacter.</p>
                                <ul className="contact-widget-1-list">
                                    <li><span>Adresse:</span> Tunis, Tunisie</li>
                                    <li><span>Email:</span><Link href="mailto:contact@atr.tn">contact@atr.tn</Link></li>
                                    <li><span>Tél:</span><Link href="tel:+21671000000">+216 71 000 000</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="footer-bottom-row">
                        <div className="footer-bottom-text">Copyright 2024 par <Link href="/">Association Tunisienne des Routes</Link> - Tous droits réservés.</div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
