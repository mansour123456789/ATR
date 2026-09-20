'use client'
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link";
import React from 'react';
export default function Funfact() {
   
    return (
        
        <section className="funfacts-2-section z_1">
          <div className="auto-container">
            <div className="row no-gutters">
              <div className="col-lg-4 col-md-6">
                <div className="funfact-2-block">
                  <div className="funfact-2-icon">
                    <i className="icon-29" />
                  </div>
                  <div>
                    <div className="d-flex align-items-center">
                      <h2 className="funfact-2-number odometer" data-count={20}>
                      <CounterUp end={20} />
                      </h2>
                      <h2 className="funfact-2-number-prefix">+</h2>
                    </div>
                    <p className="funfact-2-title">Industry Awards</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="funfact-2-block alt">
                  <div className="funfact-2-icon">
                    <i className="icon-30" />
                  </div>
                  <div>
                    <div className="d-flex align-items-center">
                      <h2 className="funfact-2-number odometer" data-count={98}>
                      <CounterUp end={98} />
                      </h2>
                      
                      <h2 className="funfact-2-number-prefix">%</h2>
                    </div>
                    <p className="funfact-2-title">Project Success</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="funfact-2-block alt2">
                  <div className="funfact-2-icon">
                    <i className="icon-31" />
                  </div>
                  <div>
                    <div className="d-flex align-items-center">
                      <h2 className="funfact-2-number odometer" data-count={5}>
                      <CounterUp end={5} />
                      </h2>
                      <h2 className="funfact-2-number-prefix">k+</h2>
                    </div>
                    <p className="funfact-2-title">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
    );
};

