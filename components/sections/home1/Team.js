import React from 'react';
import Link from "next/link"

const technicalCommittees = [
    // Slide 1
    {
        code: "Comité technique 1.1",
        topic: "Performance des administrations de transport",
        members: ["Slah Zouari"]
    },
    {
        code: "Comité technique 1.2",
        topic: "Contribution des routes au développement économique et social",
        members: ["Imen Ben Hassine"]
    },
    {
        code: "Comité technique 1.4",
        topic: "Planification de la résilience des réseaux routiers - Changement climatique et autres aléas",
        members: ["Walid Hmama"]
    },
    {
        code: "Comité technique 1.1",
        topic: "Performance des administrations de transport",
        members: ["Saloua Trik", "Slim Dridi"]
    },
    {
        code: "Comité technique 1.2",
        topic: "Contribution des routes au développement économique et social",
        members: ["Imen Makhlouf", "Nejla HARIGA TLATLI"]
    },
    {
        code: "Comité technique 1.4",
        topic: "Planification de la résilience des réseaux routiers - Changement climatique et autres aléas",
        members: ["Kaouther Machta", "Mohamed Zmerli"]
    },
    // Slide 2
    {
        code: "Comité technique 3.1",
        topic: "Sécurité routière",
        members: ["Ahmed Kantini", "Ben Hfaiedh Saiefeddine"]
    },
    {
        code: "Comité technique 3.4",
        topic: "Infrastructures et transport routiers plus durables pour l'environnement",
        members: ["Eya Souab"]
    },
    {
        code: "Comité technique 4.1",
        topic: "Chaussée",
        members: ["Aida Bergaoui"]
    },
    {
        code: "Comité technique 4.2",
        topic: "Ponts",
        members: ["Lilia Sifaoui"]
    },
    {
        code: "Comité technique 4.3",
        topic: "Terrassements",
        members: ["Kamel Zaghouani", "Khaoula Bahri", "Sabrine BOUBAKER"]
    },
    {
        code: "Groupe d'étude 4.1",
        topic: "Normes de conception des routes",
        members: ["Tasnim Kessentin"]
    }
];

const getInitials = (name) => {
    return name
        .split(' ')
        .map(n => n[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('')
        .toUpperCase();
};

export default function Team() {
    return (
        <>
        <section className="section-padding">
            <div className="team-1-pattern d-none d-lg-block"><img src="/assets/images/shape/shape-4.png" alt="" /></div>
            <div className="auto-container">
                <div className="section_heading text-center mb_50">
                    <span className="section_heading_title_small">Gouvernance & Experts</span>
                    <h2 className="section_heading_title_big mb_20">Comité Directeur & <br /> Conseil d'Administration</h2>
                </div>
                <div className="row justify-content-center">
                    {/* Membre 1 : Présidente ATR */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/lilia-sifaoui.jpg" alt="Mme Lilia Sifaoui" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
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
                                <p>DG de l'Unité de Gestion du Pont de Bizerte.</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 2 : Vice-Président ATR */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">                              
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/sami-montassar.jpg" alt="M. Sami Montassar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">M. Sami Montassar</h4>
                                <p className="team-1-designaiton c_primary mb_10">Vice-Président de l'ATR</p>
                                <p>Professeur ENIT & Expert Génie Civil.</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 3 : Secrétaire Général */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/walid-torcheni.jpg" alt="M. Walid Torcheni" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">M. Walid Torcheni</h4>
                                <p className="team-1-designaiton c_primary mb_10">Secrétaire Général</p>
                                <p>Cadre supérieur au Ministère de l'Équipement (MEHAT).</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 4 : Secrétaire Générale Adjointe */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">                              
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/imen-ben-hassine.jpg" alt="Mme Imen Ben Hassine" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">Mme Imen Ben Hassine</h4>
                                <p className="team-1-designaiton c_primary mb_10">Secrétaire Générale Adjointe</p>
                                <p>Cadre au Ministère de l'Équipement (MEHAT).</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 5 : Trésorière Adjointe */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/zina-dekhil.jpg" alt="Mme Zina Dekhil" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">Mme Zina Dekhil</h4>
                                <p className="team-1-designaiton c_primary mb_10">Trésorière Adjointe</p>
                                <p>Gestion financière et administration de l'ATR.</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 6 : Expert Sécurité Routière */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">                              
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/saifeddine-ben-hfaiedh.jpg" alt="M. Saifeddine Ben Hfaiedh" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">M. Saifeddine Ben Hfaiedh</h4>
                                <p className="team-1-designaiton c_primary mb_10">Expert Sécurité Routière</p>
                                <p>Spécialiste Prévention Routière & HSS.</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 7 : Membre du Conseil d'Administration */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/eya-swab.jpg" alt="Mme Eya Souab" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">Mme Eya Souab (Swab)</h4>
                                <p className="team-1-designaiton c_primary mb_10">Membre du Conseil d'Administration</p>
                                <p>Ingénieure et membre active du CA de l'ATR.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2 : Tableau Comités Techniques */}
        <section className="atr-team-table-section section-padding pt_60 pb_80">
            <div className="auto-container">
                <div className="section_heading text-center mb_50">
                    <span className="section_heading_title_small">Comités Techniques & Groupes d'Étude</span>
                    <h2 className="section_heading_title_big mb_20">Notre Équipe dans les Comités Techniques</h2>
                    <p style={{ maxWidth: '750px', margin: '0 auto', color: '#64748b', fontSize: '15px', lineHeight: '1.6' }}>
                        Répartition et désignation des membres et experts de l'Association Tunisienne des Routes (ATR) au sein des comités techniques sectoriels.
                    </p>
                </div>

                <div className="atr-team-table-card">
                    <div className="atr-team-table-responsive">
                        <table className="atr-team-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '52%' }}>Comité Technique / Intitulé</th>
                                    <th style={{ width: '48%' }}>Membres & Experts Désignés</th>
                                </tr>
                            </thead>
                            <tbody>
                                {technicalCommittees.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <span className="atr-team-table-badge">{item.code}</span>
                                            <h5 className="atr-team-table-topic">{item.topic}</h5>
                                        </td>
                                        <td>
                                            <div className="atr-team-table-members">
                                                {item.members.map((member, mIdx) => (
                                                    <span className="atr-team-member-pill" key={mIdx}>
                                                        <span className="atr-team-member-avatar" aria-hidden="true">
                                                            {getInitials(member)}
                                                        </span>
                                                        <span>{member}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

