'use client'
import React from 'react';
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const getInitials = (name) => {
    if (!name) return '';
    const clean = name.replace(/^(M\.|Mme|Mr\.|Mrs\.|السيد|السيدة)\s+/i, '').trim();
    const parts = clean.split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export default function Team() {
    const { t } = useLanguage();

    const technicalCommittees = [
        {
            codeKey: "team.tc_1_1",
            codeDefault: "Comité technique 1.1",
            topicKey: "team.tc_topic_transport_perf",
            topicDefault: "Performance des administrations de transport",
            members: [
                { nameKey: "team.m_slah_zouari", defaultName: "Slah Zouari" }
            ]
        },
        {
            codeKey: "team.tc_1_2",
            codeDefault: "Comité technique 1.2",
            topicKey: "team.tc_topic_economic_social",
            topicDefault: "Contribution des routes au développement économique et social",
            members: [
                { nameKey: "team.m_imen_ben_hassine", defaultName: "Imen Ben Hassine" }
            ]
        },
        {
            codeKey: "team.tc_1_4",
            codeDefault: "Comité technique 1.4",
            topicKey: "team.tc_topic_resilience",
            topicDefault: "Planification de la résilience des réseaux routiers - Changement climatique et autres aléas",
            members: [
                { nameKey: "team.m_walid_hmama", defaultName: "Walid Hmama" }
            ]
        },
        {
            codeKey: "team.tc_1_1",
            codeDefault: "Comité technique 1.1",
            topicKey: "team.tc_topic_transport_perf",
            topicDefault: "Performance des administrations de transport",
            members: [
                { nameKey: "team.m_saloua_trik", defaultName: "Saloua Trik" },
                { nameKey: "team.m_slim_dridi", defaultName: "Slim Dridi" }
            ]
        },
        {
            codeKey: "team.tc_1_2",
            codeDefault: "Comité technique 1.2",
            topicKey: "team.tc_topic_economic_social",
            topicDefault: "Contribution des routes au développement économique et social",
            members: [
                { nameKey: "team.m_imen_makhlouf", defaultName: "Imen Makhlouf" },
                { nameKey: "team.m_nejla_hariga", defaultName: "Nejla HARIGA TLATLI" }
            ]
        },
        {
            codeKey: "team.tc_1_4",
            codeDefault: "Comité technique 1.4",
            topicKey: "team.tc_topic_resilience",
            topicDefault: "Planification de la résilience des réseaux routiers - Changement climatique et autres aléas",
            members: [
                { nameKey: "team.m_kaouther_machta", defaultName: "Kaouther Machta" },
                { nameKey: "team.m_mohamed_zmerli", defaultName: "Mohamed Zmerli" }
            ]
        },
        {
            codeKey: "team.tc_3_1",
            codeDefault: "Comité technique 3.1",
            topicKey: "team.tc_topic_safety",
            topicDefault: "Sécurité routière",
            members: [
                { nameKey: "team.m_ahmed_kantini", defaultName: "Ahmed Kantini" },
                { nameKey: "team.m_saifeddine_ben_hfaiedh", defaultName: "Saifeddine Ben Hfaiedh" }
            ]
        },
        {
            codeKey: "team.tc_3_4",
            codeDefault: "Comité technique 3.4",
            topicKey: "team.tc_topic_sustainable",
            topicDefault: "Infrastructures et transport routiers plus durables pour l'environnement",
            members: [
                { nameKey: "team.m_eya_souab", defaultName: "Eya Souab" }
            ]
        },
        {
            codeKey: "team.tc_4_1",
            codeDefault: "Comité technique 4.1",
            topicKey: "team.tc_topic_pavement",
            topicDefault: "Chaussée",
            members: [
                { nameKey: "team.m_aida_bergaoui", defaultName: "Aida Bergaoui" }
            ]
        },
        {
            codeKey: "team.tc_4_2",
            codeDefault: "Comité technique 4.2",
            topicKey: "team.tc_topic_bridges",
            topicDefault: "Ponts",
            members: [
                { nameKey: "team.m_lilia_sifaoui", defaultName: "Lilia Sifaoui" }
            ]
        },
        {
            codeKey: "team.tc_4_3",
            codeDefault: "Comité technique 4.3",
            topicKey: "team.tc_topic_earthworks",
            topicDefault: "Terrassements",
            members: [
                { nameKey: "team.m_kamel_zaghouani", defaultName: "Kamel Zaghouani" },
                { nameKey: "team.m_khaoula_bahri", defaultName: "Khaoula Bahri" },
                { nameKey: "team.m_sabrine_boubaker", defaultName: "Sabrine BOUBAKER" }
            ]
        },
        {
            codeKey: "team.ge_4_1",
            codeDefault: "Groupe d'étude 4.1",
            topicKey: "team.tc_topic_design_standards",
            topicDefault: "Normes de conception des routes",
            members: [
                { nameKey: "team.m_tasnim_kessentini", defaultName: "Tasnim Kessentin" }
            ]
        }
    ];

    return (
        <>
        <section className="section-padding">
            <div className="team-1-pattern d-none d-lg-block"><img src="/assets/images/shape/shape-4.png" alt="" width="300" height="300" /></div>
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
                                    <img src="/membre/lilia-sifaoui.jpg" alt={t('team.member1_name', "Mme Lilia Sifaoui")} width="300" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
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
                                    <img src="/membre/sami-montassar.jpg" alt={t('team.member2_name', "M. Sami Montassar")} width="300" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
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
                                    <img src="/membre/walid.jpeg" alt={t('team.member3_name', "M. Walid Torchani")} width="300" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><a href="https://www.linkedin.com/in/walid-torchani-11327b6b" target="_blank" rel="noopener noreferrer" className="hvr-zoom-1-primary hvr-zoom-1" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">{t('team.member3_name', "M. Walid Torchani")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member3_role', "Secrétaire Général")}</p>
                                <p>{t('team.member3_detail', "Cadre supérieur au Ministère de l'Équipement .")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 4 : Membre de l'ATR */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">                              
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/imen-ben-hassine.jpg" alt={t('team.member4_name', "Mme Imen Ben Hassine")} width="300" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
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

                    {/* Membre 5 : Trésorière Adjointe */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/zina-dekhil.jpg" alt={t('team.member5_name', "Mme Zina Dekhil")} width="300" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
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

                    {/* Membre 6 : Trésorier */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">                              
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/saifeddine-ben-hfaiedh.jpg" alt={t('team.member6_name', "M. Saifeddine Ben Hfaiedh")} width="300" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                                </div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><a href="https://www.linkedin.com/in/saiefeddine-ben-hfaiedh-973ba213/" target="_blank" rel="noopener noreferrer" className="hvr-zoom-1-primary hvr-zoom-1" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">{t('team.member6_name', "M. Saifeddine Ben Hfaiedh")}</h4>
                                <p className="team-1-designaiton c_primary mb_10">{t('team.member6_role', "Trésorier")}</p>
                                <p>{t('team.member6_detail', "DGA Best Conseils")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Membre 7 : Membre de l'ATR */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/eya-swab.jpg" alt={t('team.member7_name', "Mme Eya Souab")} width="300" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
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

                    {/* Membre 8 : Secrétaire Général Adjoint */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb_30">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img src="/membre/izmzerli.jpg" alt={t('team.member8_name', "M. Mohamed Zmerli")} width="300" height="300" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
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
                                {technicalCommittees.map((item, index) => {
                                    const code = t(item.codeKey, item.codeDefault);
                                    const topic = t(item.topicKey, item.topicDefault);
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <span className="atr-team-table-badge">{code}</span>
                                                <h5 className="atr-team-table-topic">{topic}</h5>
                                            </td>
                                            <td>
                                                <div className="atr-team-table-members">
                                                    {item.members.map((member, mIdx) => {
                                                        const memberName = t(member.nameKey, member.defaultName);
                                                        return (
                                                            <span className="atr-team-member-pill" key={mIdx}>
                                                                <span className="atr-team-member-avatar" aria-hidden="true">
                                                                    {getInitials(memberName)}
                                                                </span>
                                                                <span>{memberName}</span>
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
