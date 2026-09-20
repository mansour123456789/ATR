'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import Team from "@/components/sections/home1/Team"
import Cta from "@/components/sections/home1/Cta"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="À Propos de l'ATR">
                <section className="section-padding pt-150">
                    <div className="auto-container">
                        {/* Bloc 1 : Texte à gauche, Image à droite */}
                        <div className="row align-items-center mb_80">
                            <div className="col-lg-6 mb_30">
                                <div className="section_heading mb_20">
                                    <span className="section_heading_title_small">Notre Histoire</span>
                                    <h2 className="section_heading_title_big mb_20">Association Tunisienne des Routes</h2>
                                </div>
                                <p className="aboout-1-desc mb_30" style={{ color: '#000', fontWeight: '500', fontSize: '17px', lineHeight: '1.8' }}>
                                    Créée en 2018 et présidée par <strong>Mme Lilia Sifaoui</strong> (Directrice Générale de l’unité de gestion du nouveau pont de Bizerte), l'Association Tunisienne des Routes (ATR) est une organisation scientifique et technique de référence qui œuvre en étroite collaboration avec le Ministère de l’Équipement et de l’Habitat.
                                </p>
                                <h4 className="fs_24 fw_sbold mb_10" style={{ color: '#000' }}>Notre Mission</h4>
                                <p className="mb_25" style={{ color: '#000', fontSize: '16px' }}>Fédérer cadres publics, ingénieurs, entreprises de BTP, universitaires et experts pour promouvoir l'innovation technique, l'application rigoureuse des normes de qualité et la primauté de la vie humaine.</p>
                                
                                <h4 className="fs_24 fw_sbold mb_10" style={{ color: '#000' }}>Notre Vision & Engagement HSS</h4>
                                <p style={{ color: '#000', fontSize: '16px' }}>Mettre la sécurité routière et la prévention sur les chantiers au cœur de chaque projet d'infrastructure selon l'approche « Vision Zéro décès » et le principe fondamental que « la route doit pardonner ».</p>
                                <ul className="list-1 mt-3" style={{ color: '#000', fontSize: '15px', fontWeight: '500' }}>
                                    <li>Protection de la vie humaine et approche « Zéro Décès »</li>
                                    <li>Maîtrise des standards HSS et conformité internationale ISO</li>
                                    <li>Infrastructures résilientes pensées pour pallier l'erreur humaine</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 ps-lg-5 mb_30">
                                <div className="image-wrap p_relative hvr-img-zoom-1" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                                    <img src="/images/bizerte_bridge.png" alt="Infrastructure routière en Tunisie" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                                </div>
                            </div>
                        </div>

                        {/* Bloc 2 : Image à gauche, Texte à droite */}
                        <div className="row align-items-center mt_80 mb_50">
                            <div className="col-lg-6 pe-lg-5 mb_30 order-2 order-lg-1">
                                <div className="image-wrap p_relative hvr-img-zoom-1" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                                    <img src="/images/atr_seminar.png" alt="Séminaire ATR" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 mb_30 order-1 order-lg-2">
                                <h4 className="fs_30 fw_sbold mb_20" style={{ color: '#000' }}>Nos Activités Principales</h4>
                                <ul className="list-1 mt-3 mb_30" style={{ color: '#000', fontSize: '15px', fontWeight: '500' }}>
                                    <li>Organisation du <strong>Congrès National de la Route</strong></li>
                                    <li>Animation de <strong>comités techniques nationaux</strong> (CT)</li>
                                    <li>Publication de <strong>guides techniques</strong> et revues</li>
                                    <li>Collaboration étroite avec <strong>PIARC</strong></li>
                                </ul>

                                <h4 className="fs_30 fw_sbold mb_20" style={{ color: '#000' }}>Gouvernance & Réseau</h4>
                                <p className="mb_15" style={{ color: '#000', fontSize: '16px', lineHeight: '1.7' }}>L'ATR est gérée par un <strong>Comité Directeur</strong> regroupant divers collèges du secteur routier (Ministère, BTP, Bureaux d'études, Laboratoires, etc.).</p>
                                <p className="mb_30" style={{ color: '#000', fontSize: '16px', lineHeight: '1.7' }}>Nous représentons la Tunisie au sein de <strong>PIARC</strong> (fondée en 1909), permettant à nos experts de contribuer directement aux rapports et normes de référence mondiale.</p>
                                
                                <div className="about-1-btn mt_30">
                                    <Link href="/contact" className="btn-1">Nous Rejoindre<span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
