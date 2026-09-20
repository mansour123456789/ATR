import React from 'react';

export default function Chooseus() {
    return (
        <section className="section-padding">
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6 pe-lg-5">
                        <div className="image p_relative z_5 mb_30">
                            <img src="/images/hero-home.png" alt="ATR Infrastructure" style={{borderRadius: '15px'}} />
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="section_heading mb_20 mt_50">
                            <span className="section_heading_title_small">Notre Valeur Ajoutée</span>
                            <h2 className="section_heading_title_big">Pourquoi Rejoindre l'ATR ?</h2>
                        </div>
                        <p className="mb_50">L'Association Tunisienne des Routes rassemble l'expertise nationale pour bâtir des infrastructures durables, résilientes et sécurisées.</p>
                        <div className="whychoous-1-wrapper">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="whychoous-1-block alt mb_30">
                                        <div className="whychoous-1-icon"><i className="icon-17"></i></div>
                                        <div>
                                            <h4 className="whychoous-1-title">Expertise Reconnue</h4>
                                            <p className="whychoous-1-text">Plus de 40 ans d'expérience <br /> dans le secteur routier <br /> tunisien.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="whychoous-1-block alt mb_30">
                                        <div className="whychoous-1-icon"><i className="icon-18"></i></div>
                                        <div>
                                            <h4 className="whychoous-1-title">Réseau International</h4>
                                            <p className="whychoous-1-text">Membre actif de l'Association <br />
                                                Mondiale de la Route <br />
                                                (PIARC).</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="whychoous-1-block alt mb_30">
                                        <div className="whychoous-1-icon"><i className="icon-20"></i></div>
                                        <div>
                                            <h4 className="whychoous-1-title">Innovation Permanente</h4>
                                            <p className="whychoous-1-text">Veille technologique pour des <br />
                                                infrastructures modernes et <br />
                                                résilientes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="whychoous-1-block alt mb_30">
                                        <div className="whychoous-1-icon"><i className="icon-21"></i></div>
                                        <div>
                                            <h4 className="whychoous-1-title">Formation Continue</h4>
                                            <p className="whychoous-1-text">Programmes académiques <br />
                                                spécialisés pour développer <br />
                                                les compétences.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

