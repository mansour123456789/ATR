import React from 'react';
import Link from "next/link"

export default function Team() {
    return (
        <section className="section-padding">
            <div className="team-1-pattern d-none d-lg-block"><img src="assets/images/shape/shape-4.png" alt="" /></div>
            <div className="auto-container">
                <div className="section_heading text-center mb_50">
                    <span className="section_heading_title_small">Gouvernance & Experts</span>
                    <h2 className="section_heading_title_big mb_20">Bureau Exécutif et <br /> Experts Routiers</h2>
                </div>
                <div className="row">
                    {/* Membre 1 : Présidente ATR */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="/images/avatars/atr2.png" alt="Mme Lilia Sifaoui" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">Mme Lilia Sifaoui</h4>
                                <p className="team-1-designaiton c_primary mb_10">Présidente de l'ATR</p>
                                <p>DG Unité Pont de Bizerte.</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 2 : Eya Soueb */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">                              
                                <div className="team-1-image-wrap"><img src="/images/avatars/atr4.png" alt="Mme Eya Soueb" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href=""><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">Mme Eya Soueb</h4>
                                <p className="team-1-designaiton c_primary mb_10">Membre ATR & Cadre MEHAT</p>
                                <p>Sous-directrice au Ministère.</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 3 : Ahmed Ksentini */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">                              
                                <div className="team-1-image-wrap"><img src="/images/avatars/atr1.png" alt="M. Ahmed Ksentini" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href=""><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">M. Ahmed Ksentini</h4>
                                <p className="team-1-designaiton c_primary mb_10">Expert Sécurité Routière</p>
                                <p>Universitaire & Spécialiste HSS.</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 4 : Khaled Sioud */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">                              
                                <div className="team-1-image-wrap"><img src="/images/avatars/atr3.png" alt="M. Khaled Sioud" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href=""><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">M. Khaled Sioud</h4>
                                <p className="team-1-designaiton c_primary mb_10">Ingénieur Génie Civil</p>
                                <p>Expert HSS & Prévention.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
