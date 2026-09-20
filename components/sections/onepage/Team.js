import React from 'react';
import Link from "next/link"
export default function Team() {
    return (
        <section className="section-padding" id="team">
            <div className="team-1-pattern d-none d-lg-block"><img src="assets/images/shape/shape-4.png" alt="" /></div>
            <div className="auto-container">
                <div className="section_heading text-center mb_50">
                    <span className="section_heading_title_small">Our Experts</span>
                    <h2 className="section_heading_title_big mb_20">Expert Swimming Pool Repair <br /> Team Member</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/resource/team-1.jpg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                    <div className="team-1-share-icon"><i className="icon-23"></i></div>
                                </div>
                            </div>
                            <div className="team-1-content">
                                <h4 className="team-1-title">Robertson</h4>
                                <p className="team-1-designaiton c_primary mb_10">Manager</p>
                                <p>Amet minim mollit nonest <br /> deserunt ulamco.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="team-1-block">
                        <div className="team-1-image">                              
                            <div className="team-1-image-wrap"><img src="assets/images/resource/team-2.jpg" alt="" /></div>
                            <div className="team-1-share-icon-area">
                                <ul className="team-1-social-icon">
                                    <li><Link href=""><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href=""><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href=""><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                                <div className="team-1-share-icon"><i className="icon-23"></i></div>
                            </div>
                        </div>
                        <div className="team-1-content">
                            <h4 className="team-1-title">Esther Howard</h4>
                            <p className="team-1-designaiton c_primary mb_10">Engineer</p>
                            <p>Amet minim mollit nonest <br/> deserunt ulamco.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="team-1-block">
                        <div className="team-1-image">                              
                            <div className="team-1-image-wrap"><img src="assets/images/resource/team-3.jpg" alt="" /></div>
                            <div className="team-1-share-icon-area">
                                <ul className="team-1-social-icon">
                                    <li><Link href=""><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href=""><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href=""><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                                <div className="team-1-share-icon"><i className="icon-23"></i></div>
                            </div>
                        </div>
                        <div className="team-1-content">
                            <h4 className="team-1-title">Albert Flores</h4>
                            <p className="team-1-designaiton c_primary mb_10">Technologist</p>
                            <p>Amet minim mollit nonest <br/>
                                deserunt ulamco.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="team-1-block">
                        <div className="team-1-image">                              
                            <div className="team-1-image-wrap"><img src="assets/images/resource/team-4.jpg" alt="" /></div>
                            <div className="team-1-share-icon-area">
                                <ul className="team-1-social-icon">
                                    <li><Link href=""><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href=""><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href=""><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                                <div className="team-1-share-icon"><i className="icon-23"></i></div>
                            </div>
                        </div>
                        <div className="team-1-content">
                            <h4 className="team-1-title">Ronald Richards</h4>
                            <p className="team-1-designaiton c_primary mb_10">Engineer</p>
                            <p>Amet minim mollit nonest <br/>
                                deserunt ulamco.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};
