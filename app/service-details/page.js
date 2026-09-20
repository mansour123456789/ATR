'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'

export default function Service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false })
        } else {
            setIsActive({ status: true, key })
        }
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nos Axes Stratégiques">
                <div>
                <section className="service-details pt_150 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="service-details-content">
                            <div className="content-one">
                                <figure className="image-box">
                                <img src="/images/road-hero.png" alt="Axe Stratégique" />
                                </figure>
                                <div className="text-box">
                                <h2>Administration & Résilience</h2>
                                <p>
                                    Face aux défis posés par les changements climatiques et les impératifs de durabilité, l'Association Tunisienne des Routes s'engage à promouvoir une gouvernance et une administration routière résiliente. Cela passe par l'adoption de normes adaptées, la mise en place de politiques de gestion des risques et la formation continue des acteurs du secteur.
                                </p>
                                <p>
                                    Nous œuvrons à doter nos infrastructures de capacités d'adaptation face aux inondations, aux fortes chaleurs et à l'évolution du trafic, afin de garantir un niveau de service optimal et la continuité des échanges économiques.
                                </p>
                                </div>
                            </div>
                            <div className="content-two mt_40">
                                <div className="image-column">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure className="image-box">
                                        <img src="/images/road-feature-1.png" alt="" />
                                    </figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure className="image-box">
                                        <img src="/images/road-feature-2.png" alt="" />
                                    </figure>
                                    </div>
                                </div>
                                </div>
                                <div className="text-box">
                                <h3>Les bénéfices de notre action</h3>
                                <p>
                                    Notre démarche globale vise à instaurer des solutions concrètes pour le secteur routier.
                                </p>
                                <ul className="list-item clearfix">
                                    <li>Optimisation des coûts d'entretien</li>
                                    <li>Réduction de l'impact environnemental</li>
                                    <li>Amélioration continue de la sécurité</li>
                                </ul>
                                </div>
                            </div>
                            <div className="content-three mt_40">
                                <div className="text-box mb_55">
                                <h2>Nos Solutions</h2>
                                </div>
                                <div className="accordion-inner">
                                <ul className="accordion-box alt">
                                    <li className="accordion block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                            <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Gouvernance Stratégique</div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Mise en œuvre de politiques de gestion modernes et accompagnement des décideurs dans la planification à long terme des réseaux.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block active-block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                            <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Résilience Climatique</div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Développement de modèles prédictifs et intégration de matériaux innovants pour résister aux phénomènes météorologiques extrêmes.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                            <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Formation et Renforcement</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Programmes de transfert de compétences pour les ingénieurs et techniciens du secteur routier.</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="service-sidebar ml_40">
                            <div className="category-widget sidebar-widget">
                            <div className="widget-title">
                                <h3>Nos Axes</h3>
                            </div>
                            <div className="widget-content">
                                <ul className="category-list clearfix">
                                    <li><Link href="/service-details" className="current">Administration & Résilience</Link></li>
                                    <li><Link href="/service-details">Mobilité Durable</Link></li>
                                    <li><Link href="/service-details">Sécurité Routière</Link></li>
                                    <li><Link href="/service-details">Infrastructures et Ponts</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-widget">
                            <h2>Besoin <br />d'<span>Aide ?</span></h2>
                            <ul className="info-list clearfix">
                                <li>
                                    <span>Appelez-nous :</span>
                                    <h3><i className="icon-2"></i><Link href="tel:+21671000000">(+216) 71 000 000</Link></h3>
                                </li>
                                <li>
                                    <span>Écrivez-nous :</span>
                                    <h3><i className="icon-59"></i><Link href="mailto:contact@atr.tn">contact@atr.tn</Link></h3>
                                </li>
                            </ul>
                        </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                </div>
            </Layout>
        </>
    )
}