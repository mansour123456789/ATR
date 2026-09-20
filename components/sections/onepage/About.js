
'use client'
import Link from "next/link";
import React from 'react';

export default function about() {
  return (
    <section className="section-padding pt-0"  id="about">
            <div className="about-1-shape-2" data-parallax='{"y": -50}'><img src="assets/images/shape/shape-3.png" alt="" /></div>
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-1-image-wrap text-center mb_30 p_relative">
                            <div className="about-1-shape-1" data-parallax='{"y": -50}'><img src="assets/images/shape/shape-2.png" alt="" /></div>
                            <div className="d_iblock">
                                <div className="about-1-image-1 hvr-img-zoom-1"><img src="assets/images/resource/about.jpg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="section_heading mb_20">
                            <span className="section_heading_title_small">About Poolix</span>
                            <h2 className="section_heading_title_big">Swimming Pool Repair and <br /> Maintenance Company</h2>
                        </div>
                        <p className="aboout-1-desc mb_30">Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas turpis nibh
                            magna eu dolor nibh. Consequat praesent maecenas senectus semper present
                            feugiat consequat senectus.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="fs_24 fw_sbold mb_20">Mission</h4>
                                <p className="fs_16 fw_medium mb_30 c_dark">Fegiat consequt senectus sit amet <br /> dictum eu volutpat magna.</p>
                                <p className="mb_25">Lorem ipsum dolor sit amet coset etur adipicing elit Macenas semper
                                    magna eu dolor nibh consequat semper dictum</p>
                            </div>
                            <div className="col-md-6">
                                <h4 className="fs_24 fw_sbold mb_20">Vision</h4>
                                <p>Lorem ipsum dolor sit amet coseter etur adipiscing elit. Maecenas tor
                                    magna eu dolor</p>
                                <ul className="list-1">
                                    <li><i className="icon-8"></i> Olympic Size Pool</li>
                                    <li><i className="icon-8"></i> Food & Drinks Service</li>
                                    <li><i className="icon-8"></i> Relax Atmosphere</li>
                                </ul>
                            </div>
                        </div>
                        <div className="about-1-btn mb_30">
                            <Link href="about" className="btn-1">Discover More<span></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};
