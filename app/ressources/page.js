'use client'
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home1/Cta"
import Link from "next/link"

export default function Ressources() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Outils & Ressources">
            <section className="section-padding">
                <div className="auto-container">
                    <div className="row mb_50">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="mb_20" style={{color: '#1E4C81'}}>Bibliothèque Technique & Outils</h2>
                            <p className="fs_18">Accédez aux ressources essentielles pour la conception, l'évaluation et la gestion des infrastructures routières.</p>
                        </div>
                    </div>
                    
                    <div className="row mt_50">
                        <div className="col-lg-4 col-md-6 mb_30">
                            <div className="p-4" style={{backgroundColor: '#f4f7f9', borderRadius: '15px', height: '100%', borderTop: '5px solid #F69F1A'}}>
                                <h4 className="mb_15" style={{color: '#1E4C81'}}><i className="fas fa-database me-2"></i> Base de Données PIARC</h4>
                                <p>Accès direct à la bibliothèque mondiale des rapports techniques de l'Association mondiale de la Route.</p>
                                <Link href="https://www.piarc.org/fr/" target="_blank" className="c_primary fw_sbold">Accéder au portail <i className="fas fa-arrow-right ms-1"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb_30">
                            <div className="p-4" style={{backgroundColor: '#f4f7f9', borderRadius: '15px', height: '100%', borderTop: '5px solid #1E4C81'}}>
                                <h4 className="mb_15" style={{color: '#1E4C81'}}><i className="fas fa-laptop-code me-2"></i> Logiciels de Dimensionnement</h4>
                                <p>Outils et feuilles de calcul validés par le CT 4.6 pour le dimensionnement des chaussées neuves.</p>
                                <Link href="/contact" className="c_primary fw_sbold">Demander l'accès <i className="fas fa-arrow-right ms-1"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb_30">
                            <div className="p-4" style={{backgroundColor: '#f4f7f9', borderRadius: '15px', height: '100%', borderTop: '5px solid #F69F1A'}}>
                                <h4 className="mb_15" style={{color: '#1E4C81'}}><i className="fas fa-book-open me-2"></i> Normes Tunisiennes</h4>
                                <p>Référentiel des normes applicables en Tunisie pour les matériaux et la signalisation (INNORPI).</p>
                                <Link href="#" className="c_primary fw_sbold">Consulter la liste <i className="fas fa-arrow-right ms-1"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </Layout>
    )
}
