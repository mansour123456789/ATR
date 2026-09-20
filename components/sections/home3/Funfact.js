'use client'
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link";
import React from 'react';
export default function Funfact() {
   
    return (
        <section className="funfacts-2-section pb_150">
        <div className="funfacts-2-bg" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section_heading">
                <span className="section_heading_title_small">Notre Impact</span>
                <h2 className="section_heading_title_big mb_20">Des Chiffres qui <br /> Parlent d'Eux-mêmes</h2>
              </div>
              <p className="p_relative">L'Association Tunisienne des Routes s'investit quotidiennement pour bâtir <br />un réseau routier moderne, sûr et résilient. Notre action fédère <br />les meilleurs experts pour garantir l'excellence technique.</p>
            </div>
            <div className="col-lg-6">
              <div className="row no-gutters">
                {/* Note: You may need to import the corresponding icon components for "icon-29", "icon-30", and "icon-31" */}
                <div className="col-lg-6 col-md-6">
                  <div className="funfact-2-block style-2">
                    <div className="funfact-2-icon"><i className="icon-29"></i></div>
                    <div>
                      <div className="d-flex align-items-center">
                      <h2 className="funfact-2-number odometer" data-count={40}>
                      <CounterUp end={40} />
                      </h2>
                      <h2 className="funfact-2-number-prefix">+</h2>
                      </div>
                      <p className="funfact-2-title">Années d'Expertise</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                            <div className="funfact-2-block style-2 alt">
                                <div className="funfact-2-icon"><i className="icon-30"></i></div>
                                <div>
                                    <div className="d-flex align-items-center">
                                    <h2 className="funfact-2-number odometer" data-count={4}>
                                      <CounterUp end={4} />
                                      </h2>
                                      
                                      <h2 className="funfact-2-number-prefix"></h2>
                                    </div>
                                    <p className="funfact-2-title">Comités Techniques</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="funfact-2-block style-2 alt">
                                <div className="funfact-2-icon"><i className="icon-31"></i></div>
                                <div>
                                    <div className="d-flex align-items-center">
                                    <h2 className="funfact-2-number odometer" data-count={500}>
                                    <CounterUp end={500} />
                                    </h2>
                                    <h2 className="funfact-2-number-prefix">+</h2>
                                    </div>
                                    <p className="funfact-2-title">Membres Actifs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="funfact-2-block style-2">
                                <div className="funfact-2-icon"><i className="icon-31"></i></div>
                                <div>
                                    <div className="d-flex align-items-center">
                                    <h2 className="funfact-2-number odometer" data-count={20}>
                                      <CounterUp end={20} />
                                      </h2>
                                      <h2 className="funfact-2-number-prefix">+</h2>
                                    </div>
                                    <p className="funfact-2-title">Guides & Normes</p>
                                </div>
                            </div>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

