import Link from 'next/link';
import React from 'react';

export default function Cta() {
  return (
    <section className="cta-1-section">
            <div className="cta-1-bg" data-parallax='{"y": 30}' style={{ backgroundImage: "url(/images/cta-background.png)" }}></div>
            <div className="auto-container">
                <div className="section_heading text-center mb_40">
                    <h2 className="section_heading_title_big c_light fs_70">Engagez-vous pour l'avenir des <br /> infrastructures routières</h2>
                </div>
                <div className="text-center">
                    <div className="cta-1-link-bt"><Link href="/contact" className="btn-1">Rejoindre l'ATR<span></span></Link></div>
                </div>
            </div>
        </section>
  );
};
