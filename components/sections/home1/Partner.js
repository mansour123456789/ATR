'use client'
import React from 'react';
import Link from 'next/link';

export default function Partner() {
  return (
    <section className="section-padding pb-4">
      <div className="auto-container">
        <div className="section_heading text-center mb_50">
          <span className="section_heading_title_small">Partenaires Institutionnels</span>
          <h2 className="section_heading_title_big mb_20" style={{ fontSize: 'clamp(20px, 4vw, 32px)' }}>
            Entreprises publiques et établissements publics à caractère non administratif<br />
            sous tutelle du ministère de l'équipement et de l'habitat
          </h2>
        </div>
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-3 col-md-4 col-sm-6 mb_30">
            <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '15px', border: '1px solid #eee', height: '100%' }}>
              <Link href="https://www.piarc.org/fr/" target="_blank">
                <h4 style={{ color: '#1E4C81', fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>PIARC</h4>
                <p className="mb-0 fs_14">Association mondiale de la Route</p>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb_30">
            <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '15px', border: '1px solid #eee', height: '100%' }}>
              <Link href="http://www.equipement.tn/" target="_blank">
                <h4 style={{ color: '#1E4C81', fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>MEHAT</h4>
                <p className="mb-0 fs_14">Ministère de l'Équipement</p>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb_30">
            <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '15px', border: '1px solid #eee', height: '100%' }}>
              <Link href="#" target="_blank">
                <h4 style={{ color: '#1E4C81', fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>OACA</h4>
                <p className="mb-0 fs_14">Office de l'Aviation Civile</p>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb_30">
            <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '15px', border: '1px solid #eee', height: '100%' }}>
              <Link href="#" target="_blank">
                <h4 style={{ color: '#1E4C81', fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>ONPC</h4>
                <p className="mb-0 fs_14">Protection Civile</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
