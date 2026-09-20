
import Link from 'next/link';
import React from 'react';

export default function Cta() {
  return (
    <section className="cta-2-section">
    <div className="cta-2-bg" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
    <div className="cta-2-shape-1"><img src="assets/images/shape/shape-9.png" alt="" /></div>
    <div className="cta-2-shape-2"><img src="assets/images/shape/shape-10.png" alt="" /></div>
    <div className="cta-2-shape-3"><img src="assets/images/shape/shape-11.png" alt="" /></div>
    <div className="cta-2-shape-4"><img src="assets/images/shape/shape-12.png" alt="" /></div>
    <div className="auto-container">
        <div className="text-center">
            <h2 className="fs_70 c_light">Rejoignez l'Association Tunisienne <br /> des Routes</h2>
            <div className="cta-2-link-bt mt_30"><Link href="/contact" className="btn-1">Contactez-nous<span></span></Link></div>
        </div>
    </div>
</section>
  );
};
