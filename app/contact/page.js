'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
export default function Contact() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contactez-nous">
                <div>
                     <section className="contact-form-section text-center">
                          <div className="auto-container">
                              <div className="section_heading mb_50">
                                  <span className="section_heading_title_small">Nos Coordonnées</span>
                                  <h2 className="section_heading_title_big">Informations de Contact</h2>
                              </div>
                              <div className="row clearfix">
                                  <div className="col-lg-4 col-md-6 col-sm-12 info-column mb-4">
                                      <div className="info-block-one h-100">
                                          <div className="inner-box" style={{ padding: '30px 20px', borderRadius: '15px', background: '#fff', boxShadow: '0 15px 40px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease', borderBottom: '4px solid #1B5299', position: 'relative', overflow: 'hidden', height: '100%' }}>
                                              <div className="icon-box" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#f0f7ff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 10px 20px rgba(27, 82, 153, 0.15)' }}><i className="fas fa-phone" style={{fontSize: '24px', color: '#1B5299'}}></i></div>
                                              <h3 style={{fontSize: '20px', fontWeight: '700', color: '#111', marginBottom: '15px'}}>Téléphone</h3>
                                              <p style={{fontSize: '15px'}}>Secrétariat <br /><Link href="tel:+21671234567">+216 71 234 567</Link><br /><Link href="tel:+21671234568">+216 71 234 568</Link></p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-12 info-column mb-4">
                                      <div className="info-block-one h-100">
                                          <div className="inner-box" style={{ padding: '30px 20px', borderRadius: '15px', background: '#fff', boxShadow: '0 15px 40px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease', borderBottom: '4px solid #1B5299', position: 'relative', overflow: 'hidden', height: '100%' }}>
                                              <div className="icon-box" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#f0f7ff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 10px 20px rgba(27, 82, 153, 0.15)' }}><i className="fas fa-envelope" style={{fontSize: '24px', color: '#1B5299'}}></i></div>
                                              <h3 style={{fontSize: '20px', fontWeight: '700', color: '#111', marginBottom: '15px'}}>Email</h3>
                                              <p style={{fontSize: '15px'}}><Link href="mailto:contact@atr.org.tn">contact@atr.org.tn</Link><br /><Link href="mailto:sponsoring@atr.org.tn">sponsoring@atr.org.tn</Link></p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-12 info-column mb-4">
                                      <div className="info-block-one h-100">
                                          <div className="inner-box" style={{ padding: '30px 20px', borderRadius: '15px', background: '#fff', boxShadow: '0 15px 40px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease', borderBottom: '4px solid #1B5299', position: 'relative', overflow: 'hidden', height: '100%' }}>
                                              <div className="icon-box" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#f0f7ff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 10px 20px rgba(27, 82, 153, 0.15)' }}><i className="fas fa-map-marker-alt" style={{fontSize: '24px', color: '#1B5299'}}></i></div>
                                              <h3 style={{fontSize: '20px', fontWeight: '700', color: '#111', marginBottom: '15px'}}>Notre Adresse</h3>
                                              <p style={{fontSize: '15px'}}>Bureau 102, Imm. El Wifak,<br />Centre Urbain Nord, 1082 Tunis</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="contact-section pt_100 pb_120" style={{ backgroundColor: '#fcfcfc' }}>
                          <div className="auto-container">
                              <style dangerouslySetInnerHTML={{__html: `
                                  @keyframes floatAnim {
                                      0% { transform: translateY(0px); }
                                      50% { transform: translateY(-15px); }
                                      100% { transform: translateY(0px); }
                                  }
                                  .modern-contact-img {
                                      border-radius: 20px;
                                      width: 100%;
                                      box-shadow: 0 20px 50px rgba(27, 82, 153, 0.15);
                                      animation: floatAnim 6s ease-in-out infinite;
                                      border: 8px solid #fff;
                                  }
                                  .modern-form-wrapper {
                                      background: #ffffff;
                                      border-radius: 20px;
                                      padding: 50px;
                                      box-shadow: 0 15px 40px rgba(0,0,0,0.06);
                                      border: 1px solid #f0f2f5;
                                  }
                                  .modern-input {
                                      width: 100%;
                                      height: 60px;
                                      padding: 15px 25px;
                                      border: 1px solid #e2e8f0;
                                      border-radius: 12px;
                                      background-color: #f8fafc;
                                      transition: all 0.3s ease;
                                      font-size: 15px;
                                      margin-bottom: 20px;
                                  }
                                  .modern-input:focus {
                                      border-color: #1B5299;
                                      background-color: #ffffff;
                                      box-shadow: 0 0 0 4px rgba(27,82,153,0.1);
                                      outline: none;
                                  }
                                  .modern-textarea {
                                      height: 150px;
                                      padding-top: 20px;
                                      resize: none;
                                  }
                                  .modern-btn {
                                      width: 100%;
                                      height: 60px;
                                      border-radius: 12px;
                                      font-size: 16px;
                                      font-weight: 600;
                                      text-transform: uppercase;
                                      letter-spacing: 1px;
                                      margin-top: 10px;
                                  }
                              `}} />
                              
                              <div className="row align-items-center">
                                  <div className="col-lg-5 mb-5 mb-lg-0">
                                      <div className="image-box" style={{ position: 'relative' }}>
                                          {/* Decorative elements behind image */}
                                          <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: '#E89F16', borderRadius: '50%', zIndex: 0, opacity: 0.2 }}></div>
                                          <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '150px', height: '150px', background: '#1B5299', borderRadius: '50%', zIndex: 0, opacity: 0.1 }}></div>
                                          
                                          <img src="/images/contact_office_modern.png" alt="Contact ATR" className="modern-contact-img" style={{ position: 'relative', zIndex: 1 }} />
                                      </div>
                                  </div>
                                  
                                  <div className="col-lg-7 pl-lg-5">
                                      <div className="inner-container p_relative">
                                          <div className="section_heading mb_40">
                                              <span className="section_heading_title_small">Restons en Contact</span>
                                              <h2 className="section_heading_title_big">Envoyez-nous un message</h2>
                                              <p style={{ marginTop: '15px', color: '#666', fontSize: '16px' }}>Notre équipe est à votre disposition pour répondre à toutes vos questions concernant l'ATR.</p>
                                          </div>
                                          
                                          <div className="modern-form-wrapper">
                                              <form method="post" action="#" id="contact-form"> 
                                                  <div className="row clearfix">
                                                      <div className="col-lg-6 col-md-6 col-sm-12">
                                                          <input type="text" name="username" placeholder="Votre Nom complet" required className="modern-input" />
                                                      </div>
                                                      <div className="col-lg-6 col-md-6 col-sm-12">
                                                          <input type="email" name="email" placeholder="Votre Email" required className="modern-input" />
                                                      </div>
                                                      <div className="col-lg-12 col-md-12 col-sm-12">
                                                          <input type="text" name="phone" required placeholder="Téléphone" className="modern-input" />
                                                      </div>
                                                      <div className="col-lg-12 col-md-12 col-sm-12">
                                                          <select className="modern-input" required>
                                                              <option value="">Sélectionnez le sujet de votre demande...</option>
                                                              <option value="adhesion">Adhésion à l'ATR</option>
                                                              <option value="comite">Rejoindre un Comité Technique</option>
                                                              <option value="evenement">Participer à un événement</option>
                                                              <option value="partenariat">Proposition de Partenariat</option>
                                                              <option value="autre">Autre demande</option>
                                                          </select>
                                                      </div>
                                                      <div className="col-lg-12 col-md-12 col-sm-12">
                                                          <textarea name="message" placeholder="Détaillez votre message ici..." className="modern-input modern-textarea" required></textarea>
                                                      </div>
                                                      <div className="col-lg-12 col-md-12 col-sm-12 message-btn">
                                                          <button className="btn-1 modern-btn" type="submit" name="submit-form">Envoyer le message <span></span></button>
                                                      </div>
                                                  </div>
                                              </form>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="google-map-section">
                          <div className="map">
                              <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102148.16911571217!2d10.073238612984928!3d36.81897003058814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisie!5e0!3m2!1sfr!2stn!4v1698765432100!5m2!1sfr!2stn"
                                  width="600"
                                  height="535"
                                  frameBorder="0"
                                  style={{ border: 0, width: '100%' }}
                                  allowFullScreen=""
                                  aria-hidden="false"
                                  tabIndex="0"
                                  title="Google Map"
                              ></iframe>
                          </div>
                      </section>
                  </div>
            </Layout>
        </>
    )
}
