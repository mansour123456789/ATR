import React from 'react';
import Link from "next/link"
export default function Feature() {
    return (
        <section className="section-padding pt_130">
            <div className="gray-bg p_absolute l_0 t_0 r_0 h_548"></div>
            <div className="auto-container">
                <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Features Services</span>
                    <h2 className="section_heading_title_big">Expert Swimming Pool <br /> Maintenance</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-1.jpg" alt="" /></div>
                            <h4 className="feature-1-title">Residential Pool Services</h4>
                            <p className="feature-1-text">Amet minim mollit no deserunt ulamco sit <br /> enim aliqua dolor sint velit officia  praesent <br /> maecenas senectus.</p>
                            <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-5"></i></Link></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-2.jpg" alt="" /></div>
                            <h4 className="feature-1-title">Commercial Pool Services</h4>
                            <p className="feature-1-text">Amet minim mollit no deserunt ulamco sit <br /> enim aliqua dolor sint velit officia  praesent <br /> maecenas senectus.</p>
                            <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-6"></i></Link></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-3.jpg" alt="" /></div>
                            <h4 className="feature-1-title">Get Support Directly</h4>
                            <p className="feature-1-text">Amet minim mollit no deserunt ulamco sit <br /> enim aliqua dolor sint velit officia  praesent <br /> maecenas senectus.</p>
                            <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-7"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

