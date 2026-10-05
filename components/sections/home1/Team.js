'use client'
import React from 'react';
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

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
    const { t } = useLanguage();

    const technicalCommittees = [
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

    return (
        <>
        <section className="section-padding">
            <div className="team-1-pattern d-none d-lg-block"><img src="/assets/images/shape/shape-4.png" alt="" /></div>
            <div className="auto-container">
                <div className="section_heading text-center mb_50">
                    <span className="section_heading_title_small">{t('team.kicker', "Gouvernance & Experts")}</span>
                    <h2 className="section_heading_title_big mb_20" dangerouslySetInnerHTML={{ __html: t('team.title', "Comité Directeur & <br /> Conseil d'Administration") }} />
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
                                <h4 className="team-1-title">{t('team.member1_name', "Mme Lilia Sifaoui")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member1_role', "Présidente de l'ATR")}</p>
                                <p>{t('team.member1_detail', "DG de l'Unité de Gestion du Pont de Bizerte.")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 2 : Vice-Président */}
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
                                <h4 className="team-1-title">{t('team.member2_name', "M. Sami Montassar")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member2_role', "Vice-Président")}</p>
                                <p>{t('team.member2_detail', "DG Structures & Géotechnique")}</p>
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
                                <h4 className="team-1-title">{t('team.member3_name', "M. Walid Torcheni")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member3_role', "Secrétaire Général")}</p>
                                <p>{t('team.member3_detail', "Cadre supérieur au Ministère de l'Équipement .")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 3 : Membre de l'ATR */}
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
                                <h4 className="team-1-title">{t('team.member4_name', "Mme Imen Ben Hassine")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member4_role', "Membre de l'ATR")}</p>
                                <p>{t('team.member4_detail', "Cadre au Ministère de l'Équipement")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 4 : Trésorière Adjointe */}
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
                                <h4 className="team-1-title">{t('team.member5_name', "Mme Zina Dekhil")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member5_role', "Trésorière Adjointe")}</p>
                                <p>{t('team.member5_detail', "Cadre au Ministère de l'Équipement")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 5 : Expert Sécurité Routière */}
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
                                <h4 className="team-1-title">{t('team.member6_name', "M. Saifeddine Ben Hfaiedh")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member6_role', "Expert Sécurité Routière")}</p>
                                <p>{t('team.member6_detail', "DGA Best Conseils")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 6 : Membre de l'ATR */}
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
                                <h4 className="team-1-title">{t('team.member7_name', "Mme Eya Souab")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member7_role', "Membre de l'ATR")}</p>
                                <p>{t('team.member7_detail', "Cadre au Ministère de l'Équipement")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 7 : Secrétaire Général Adjoint */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/izmzerli.jpg" alt="M. Mohamed Zmerli" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">{t('team.member8_name', "M. Mohamed Zmerli")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member8_role', "Secrétaire Général Adjoint")}</p>
                                <p>{t('team.member8_detail', "Cadre au Ministère de l'Équipement .")}</p>
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
                    <span className="section_heading_title_small">{t('team.table_kicker', "Comités Techniques & Groupes d'Étude")}</span>
                    <h2 className="section_heading_title_big mb_20">{t('team.table_title', "Notre Équipe dans les Comités Techniques")}</h2>
                    <p style={{ maxWidth: '720px', margin: '0 auto', color: '#334155', fontSize: '17px', lineHeight: '1.72' }}>
                        {t('team.table_desc', "Répartition et désignation des membres et experts de l'Association Tunisienne des Routes (ATR) au sein des comités techniques sectoriels.")}
                    </p>
                </div>

                <div className="atr-team-table-card">
                    <div className="atr-team-table-responsive">
                        <table className="atr-team-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '52%' }}>{t('team.th_committee', "Comité Technique / Intitulé")}</th>
                                    <th style={{ width: '48%' }}>{t('team.th_members', "Membres & Experts Désignés")}</th>
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
