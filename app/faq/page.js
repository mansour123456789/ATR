'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
export default function WhyChooseUs() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <> 
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Faq's">        

        <section className="faq-page-section section-padding">
            <div className="auto-container">
                <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Foire Aux Questions</span>
                    <h2 className="section_heading_title_big">Questions Fréquentes</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        {/* Accordian Box */}
                        <ul className="accordion-box alt">
                            {/* Block */}
                            <li className="accordion block">
                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                  <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Comment adhérer à l'Association Tunisienne des Routes ?</div>
                                  <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">L'adhésion est ouverte aux professionnels, entreprises et étudiants du secteur. Vous pouvez remplir le formulaire en ligne sur la page Contact ou nous envoyer un email à contact@atr.org.tn.</div>
                                    </div>
                                </div>
                            </li>
                            {/* Block */}
                            <li className="accordion block active-block">
                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                  <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Quels sont les avantages d'être membre ?</div>
                                  <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">Vous bénéficiez de réductions sur les événements, d'un accès prioritaire aux guides techniques, et vous intégrez un réseau de plus de 500 experts nationaux et internationaux via PIARC.</div>
                                    </div>
                                </div>
                            </li>
                            {/* Block */}
                            <li className="accordion block">
                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                  <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Puis-je rejoindre un Comité Technique (CT) ?</div>
                                  <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">Oui, les membres actifs peuvent postuler pour intégrer l'un de nos Comités Techniques en fonction de leur spécialité (Chaussées, Sécurité, Gestion des actifs, etc.).</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        {/* Accordian Box */}
                        <ul className="accordion-box alt">
                            {/* Block */}
                            <li className="accordion block">
                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                  <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>À quelle fréquence a lieu le Congrès National ?</div>
                                  <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">Le Congrès National de la Route est un événement majeur organisé périodiquement pour réunir tous les acteurs et débattre des grandes orientations stratégiques.</div>
                                    </div>
                                </div>
                            </li>
                            {/* Block */}
                            <li className="accordion block">
                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                  <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>L'ATR propose-t-elle des formations ?</div>
                                  <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">Tout à fait. L'Académie ATR organise des sessions de formation continue et des ateliers de renforcement des capacités pour les ingénieurs.</div>
                                    </div>
                                </div>
                            </li>
                            {/* Block */}
                            <li className="accordion block">
                            <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}>
                                  <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Comment soumettre un article scientifique ?</div>
                                  <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <div className="text">Les chercheurs et ingénieurs peuvent soumettre leurs articles pour la Revue ATR via la section Publications. Un comité de lecture évaluera la proposition.</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
                {/* faq-form-style */}
                <section className="faq-form-section section-padding bg-color-1 text-center">
        <div className="pattern-layer" data-parallax='{"y": -50}'><img src="assets/images/shape/shape-3.png" alt="" /></div>
        <div className="auto-container">
            <div className="section_heading text-center mb_60">
                <span className="section_heading_title_small">Une question supplémentaire ?</span>
                <h2 className="section_heading_title_big">Contactez-nous</h2>
            </div>
            <div className="form-inner">
                <form action="faq" method="post">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input type="text" name="name" placeholder="Votre nom" required="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input type="email" name="email" placeholder="Adresse email" required="" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="text" name="phone" placeholder="Numéro de téléphone" required="" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <div className="select-box">
                                <select className="selectmenu">
                                    <option>Sujet de la demande</option>
                                    <option>Adhésion</option>
                                    <option>Événements & Séminaires</option>
                                    <option>Comités Techniques</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <textarea name="message" placeholder="Votre message"></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                            <button className="btn-1" type="submit">Envoyer <span></span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <section className="newsletter-1 bg-color-1">
        <div className="auto-container">
            <div className="newsletter-1-bg">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <h4 className="newsletter-1-title">Subscribe To Our Newsletter</h4>
                    </div>
                    <div className="col-lg-7">
                        <div className="newsletter-1-form">
                            <form>
                                <input type="email" placeholder="e-mail address" />
                                <button className="btn-1">Subscribe Now <span></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            {/* faq-form end */} 
                </Layout>   
        </>
    )
}



