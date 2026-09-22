'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
const ProgressBar = ({ label, percent }) => (
    <div className="progress-box">
      <p>{label}</p>
      <div className="bar">
        <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
        <div className="count-text">{`${percent}%`}</div>
      </div>
    </div>
  );

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Profil du Membre">
                <div>

                <section className="team-details pt_150 pb_150">
            <div className="auto-container">
                <div className="team-details-content mb_140">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <figure className="image-box"><img src="assets/images/resource/team-9.jpg" alt="" /></figure>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box mt_150">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
                                <h2>Dr. Amine Trabelsi</h2>
                                <span className="designation">Expert en Ingénierie Routière & Matériaux</span>
                                <p>Membre actif du Comité Technique 4.6 (Chaussées Routières). Le Dr. Trabelsi contribue à l'élaboration des normes tunisiennes sur les enrobés bas carbone et participe régulièrement aux travaux de recherche de PIARC.</p>
                                <ul className="info-list clearfix">
                                    <li><span>Spécialité:</span> Matériaux Innovants, Résilience</li>
                                    <li><span>Expérience:</span> 15 Années</li>
                                    <li><span>Email:</span> <Link href="mailto:amine.trabelsi@atr.org.tn">amine.trabelsi@atr.org.tn</Link></li>
                                    <li><span>Organisation:</span> <Link href="#">Ministère de l'Équipement</Link></li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="biography-box mb_140">
                    <h2>Biographie</h2>
                    <p>Diplômé de l'École Nationale d'Ingénieurs de Tunis (ENIT), il a consacré sa carrière à l'amélioration des infrastructures routières en Tunisie. Son implication au sein de l'Association Tunisienne des Routes s'illustre par de nombreuses publications dans la Revue ATR et l'animation de séminaires internationaux, notamment sur l'adaptation climatique.</p>
                    <p>Il coordonne actuellement les essais de validation des nouveaux liants écologiques au sein des laboratoires centraux et représente la Tunisie dans les groupes de travail internationaux de PIARC (Association mondiale de la Route).</p>
                </div>
                <div className="team-info-content">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 skills-column">
                            <div className="skills-inner mr_20">
                                <div className="text">
                                    <h2>Domaines d'Expertise</h2>
                                    <p>Une maîtrise approfondie des cycles de vie des chaussées et de la gestion du patrimoine routier face aux contraintes économiques et climatiques.</p>
                                </div>
                                <div className="progress-inner">
                                    <div className="progress-box p_relative d_block mb_25">
                                        <ProgressBar label="Formulation d'Enrobés" percent={95} />
                                    </div>
                                    <div className="progress-box p_relative d_block mb_25">
                                        <ProgressBar label="Gestion des Actifs (GDR)" percent={85} />
                                    </div>
                                    <div className="progress-box p_relative d_block">
                                        <ProgressBar label="Diagnostic et Auscultation" percent={90} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 experience-column">
                            <div className="experience-inner ml_20">
                                <div className="text">
                                    <h2>Expérience Professionnelle</h2>
                                    <p>Plus de 15 ans au service de la direction générale des ponts et chaussées, avec une forte implication dans la refonte du manuel de conception routière de 2024.</p>
                                    <p>Participant clé au Séminaire PIARC 2026, il animera la session sur l'économie circulaire appliquée au secteur du BTP.</p>
                                </div>
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