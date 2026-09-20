import Link from "next/link"
import React from 'react';

export default function About() {
    return (
        <>
        <section className="section-padding">
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6 pe-lg-5">
                        <div className="section_heading mb_20">
                            <span className="section_heading_title_small">À Propos de l'ATR</span>
                            <h2 className="section_heading_title_big">Association Tunisienne <br /> des Routes</h2>
                        </div>
                        <p className="aboout-1-desc mb_30">L'Association Tunisienne des Routes (ATR) fédère les professionnels et scientifiques opérant dans le domaine des infrastructures routières en Tunisie, pour construire l'avenir.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="mb_15">Engagée pour promouvoir les avancées technologiques et la résilience.</p>
                                <ul className="list-1">
                                    <li><i className="icon-8"></i> Gestion des Infrastructures</li>
                                    <li><i className="icon-8"></i> Sécurité et Mobilité</li>
                                    <li><i className="icon-8"></i> Innovation Technologique</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <div className="image"><img src="/images/road-feature-1.png" alt="ATR Media" style={{borderRadius: '15px'}} /></div>
                            </div>
                        </div>
                        <div className="about-1-btn mb_30">
                            <Link href="/about-us" className="btn-1">En Savoir Plus<span></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-1-image-wrap text-end mb_30 p_relative">
                            <div className="d_iblock">
                                <div className="about-1-image-1 alt2 hvr-img-zoom-1"><img src="/images/about-history.png" alt="Histoire" style={{borderRadius: '15px'}} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
