'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function SeminairePiarc() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Séminaire PIARC 2026">
                <section className="blog-details-section pt_150 pb_150">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="blog-details-content">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="/images/event-congress.png" alt="Séminaire PIARC 2026" style={{width: '100%', borderRadius: '15px'}} />
                                        </div>
                                        <div className="content-box mt_30">
                                            <div className="post-info mb_20">
                                                <ul className="d-flex align-items-center gap-4 list-unstyled">
                                                    <li><i className="far fa-calendar-alt" style={{color: '#F69F1A', marginRight: '5px'}}></i> Décembre 2026</li>
                                                    <li><i className="fas fa-map-marker-alt" style={{color: '#F69F1A', marginRight: '5px'}}></i> Tunis, Tunisie</li>
                                                </ul>
                                            </div>
                                            <h2 className="fs_40 fw_sbold mb_20">Séminaire International des Comités Techniques de PIARC</h2>
                                            <p className="fs_18 mb_30">L'Association Tunisienne des Routes (ATR), en collaboration avec l'Association mondiale de la Route (PIARC), organise un grand séminaire international à Tunis.</p>
                                            
                                            <blockquote className="blockquote-style-one mb_40" style={{backgroundColor: '#f4f7f9', padding: '30px', borderLeft: '5px solid #1E4C81', borderRadius: '0 15px 15px 0'}}>
                                                <h4 className="fs_20 fw_sbold" style={{color: '#1E4C81'}}>Thème Principal :</h4>
                                                <p className="fs_18 fst-italic mb-0">« Les chaussées routières et la gestion des actifs face aux défis climatiques et à la transition écologique »</p>
                                            </blockquote>

                                            <h3 className="fs_30 fw_sbold mb_20 mt_40">Objectifs de l'événement</h3>
                                            <ul className="list-style-one list-unstyled mb_40">
                                                <li className="mb-2"><i className="fas fa-check-circle" style={{color: '#F69F1A', marginRight: '10px'}}></i> Présenter les dernières innovations en matière de matériaux routiers durables et bas carbone.</li>
                                                <li className="mb-2"><i className="fas fa-check-circle" style={{color: '#F69F1A', marginRight: '10px'}}></i> Débattre des méthodologies d'adaptation des chaussées aux impacts climatiques.</li>
                                                <li className="mb-2"><i className="fas fa-check-circle" style={{color: '#F69F1A', marginRight: '10px'}}></i> Partager les meilleures pratiques de gestion patrimoniale des actifs routiers.</li>
                                                <li className="mb-2"><i className="fas fa-check-circle" style={{color: '#F69F1A', marginRight: '10px'}}></i> Promouvoir l'intégration de l'économie circulaire dans les projets routiers.</li>
                                            </ul>

                                            <div className="row mb_40">
                                                <div className="col-md-6">
                                                    <div className="p-4" style={{backgroundColor: '#1E4C81', borderRadius: '15px'}}>
                                                        <h4 className="fs_20 fw_sbold mb_15 text-white">Public Cible (300+ participants)</h4>
                                                        <ul className="list-unstyled text-white">
                                                            <li>- Décideurs publics & Ministères</li>
                                                            <li>- Ingénieurs des administrations</li>
                                                            <li>- Entreprises de BTP</li>
                                                            <li>- Bureaux d'études</li>
                                                            <li>- Chercheurs & Universitaires</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="p-4" style={{backgroundColor: '#f4f7f9', borderRadius: '15px', border: '1px solid #ddd'}}>
                                                        <h4 className="fs_20 fw_sbold mb_15" style={{color: '#1E4C81'}}>Programme (3 jours)</h4>
                                                        <ul className="list-unstyled">
                                                            <li><strong>Jour 1:</strong> Plénière & Cocktail</li>
                                                            <li><strong>Jour 2:</strong> Sessions & Dîner de gala</li>
                                                            <li><strong>Jour 3:</strong> Synthèse & Visites chantiers</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt_50">
                                                <h3 className="fs_30 fw_sbold mb_20">Sessions Techniques Détaillées</h3>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-style-one list-unstyled">
                                                            <li className="mb-2"><i className="fas fa-arrow-right" style={{color: '#F69F1A', marginRight: '10px'}}></i> Conception des chaussées face aux sollicitations extrêmes</li>
                                                            <li className="mb-2"><i className="fas fa-arrow-right" style={{color: '#F69F1A', marginRight: '10px'}}></i> Intégration du changement climatique dans la gestion patrimoniale</li>
                                                            <li className="mb-2"><i className="fas fa-arrow-right" style={{color: '#F69F1A', marginRight: '10px'}}></i> Matériaux innovants et bas carbone</li>
                                                            <li className="mb-2"><i className="fas fa-arrow-right" style={{color: '#F69F1A', marginRight: '10px'}}></i> Recyclage des chaussées et économie circulaire</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-style-one list-unstyled">
                                                            <li className="mb-2"><i className="fas fa-arrow-right" style={{color: '#F69F1A', marginRight: '10px'}}></i> Outils de collecte de données pour l'évaluation</li>
                                                            <li className="mb-2"><i className="fas fa-arrow-right" style={{color: '#F69F1A', marginRight: '10px'}}></i> Financement et prise de décision</li>
                                                            <li className="mb-2"><i className="fas fa-arrow-right" style={{color: '#F69F1A', marginRight: '10px'}}></i> Entretien sous contraintes environnementales</li>
                                                            <li className="mb-2"><i className="fas fa-arrow-right" style={{color: '#F69F1A', marginRight: '10px'}}></i> Cas d'études d'adaptation climatique réussies</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt_50 p-4" style={{backgroundColor: '#f9f9f9', borderRadius: '15px', borderLeft: '5px solid #F69F1A'}}>
                                                <h3 className="fs_24 fw_sbold mb_20">Exposition Technique Associée</h3>
                                                <p>En marge du séminaire, une exposition réunira les professionnels autour des thématiques suivantes :</p>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-unstyled">
                                                            <li className="mb-2"><strong>Matériaux :</strong> Enrobés bas carbone, bio-liants, recyclés</li>
                                                            <li className="mb-2"><strong>Équipements :</strong> Construction, entretien, recyclage</li>
                                                            <li className="mb-2"><strong>Ingénierie :</strong> Bureaux d'études, contrôle technique</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-unstyled">
                                                            <li className="mb-2"><strong>Laboratoire :</strong> Matériels de contrôle et d'auscultation</li>
                                                            <li className="mb-2"><strong>Systèmes :</strong> Gestion de banques de données routières</li>
                                                            <li className="mb-2"><strong>Sécurité :</strong> Signalisation et gestion du trafic</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar">
                                    <div className="sidebar-widget info-widget mb_40" style={{backgroundColor: '#f4f7f9', padding: '30px', borderRadius: '15px'}}>
                                        <h4 className="widget-title fs_24 fw_sbold mb_20" style={{color: '#1E4C81'}}>Informations Pratiques</h4>
                                        <ul className="info-list list-unstyled">
                                            <li className="mb_15"><i className="far fa-clock" style={{color: '#F69F1A', marginRight: '10px'}}></i> <strong>Date:</strong> Décembre 2026</li>
                                            <li className="mb_15"><i className="fas fa-map-marker-alt" style={{color: '#F69F1A', marginRight: '10px'}}></i> <strong>Lieu:</strong> Tunis, Tunisie</li>
                                            <li className="mb_15"><i className="fas fa-globe" style={{color: '#F69F1A', marginRight: '10px'}}></i> <strong>Organisateur:</strong> ATR & PIARC</li>
                                        </ul>
                                        <Link href="/contact" className="btn-1 mt_20 w-100 text-center">Participer / S'inscrire <span></span></Link>
                                    </div>

                                    <div className="sidebar-widget download-widget" style={{backgroundColor: '#1E4C81', padding: '30px', borderRadius: '15px'}}>
                                        <h4 className="widget-title fs_24 fw_sbold mb_20 text-white">Documents</h4>
                                        <ul className="download-list list-unstyled">
                                            <li className="mb_15">
                                                <Link href="#" className="d-flex align-items-center p-3" style={{backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', color: 'white'}}>
                                                    <i className="far fa-file-pdf fs_24" style={{marginRight: '15px', color: '#F69F1A'}}></i>
                                                    <div>
                                                        <h5 className="fs_16 fw_sbold mb-0">Dossier de Sponsoring</h5>
                                                        <span className="fs_13">PDF (2.5 MB)</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
