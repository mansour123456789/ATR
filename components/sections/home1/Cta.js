import React from 'react';
import Link from "next/link"
export default function Cta() {

    return (
        <>
            
            <section className="cta-1-section">
            <div className="cta-1-bg" data-parallax='{"y": 30}' style={{ backgroundImage: "url(/images/cta-background.png)" }}></div>
            <div className="auto-container">
                <div className="section_heading text-center mb_40">
                    <h2 className="section_heading_title_big c_light" style={{ fontSize: 'clamp(32px, 5vw, 70px)' }}>Rejoignez notre réseau de <br />
                        professionnels de la route.</h2>
                </div>
                <div className="text-center">
                    <div className="cta-1-link-bt">
                        <Link href="/contact" className="btn-1">Devenir Membre<span></span></Link>
                    </div>
                </div>
            </div>
        </section>

          
        </>
    )
}