import React from 'react';
import Link from "next/link"
export default function Product () {
    return (
        <section className="product-1-section section-padding">
            <div className="auto-container">
                <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Our Products</span>
                    <h2 className="section_heading_title_big">Our Swimming Products</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="product-1-block mb_30">
                            <div className="product-1-thumb">
                                <img src="assets/images/resource/product-1.png" alt="" />
                                <div className="product-1-share-icon-area">
                                    <ul className="product-1-meta-icon">
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-39"></i></Link></li>
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-38"></i></Link></li>
                                        <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-37"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="product-1-title">Pool Water Pump</h4>
                            <p className="product-1-price">$10.00</p>
                            <div className="link-btn"><Link href="#" className="btn-1 btn-small alt">Buy Now <span></span></Link></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="product-1-block mb_30">
                        <div className="product-1-thumb">
                            <img src="assets/images/resource/product-2.png" alt="" />
                            <div className="product-1-share-icon-area">
                                <ul className="product-1-meta-icon">
                                    <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-39"></i></Link></li>
                                    <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-38"></i></Link></li>
                                    <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-37"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="product-1-title">Pool Vacuum Cleaner</h4>
                        <p className="product-1-price">$10.00</p>
                        <div className="link-btn"><Link href="#" className="btn-1 btn-small alt">Buy Now <span></span></Link></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="product-1-block mb_30">
                        <div className="product-1-thumb">
                            <img src="assets/images/resource/product-3.png" alt="" />
                            <div className="product-1-share-icon-area">
                                <ul className="product-1-meta-icon">
                                    <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-39"></i></Link></li>
                                    <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-38"></i></Link></li>
                                    <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-37"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="product-1-title">Floor Cleaning Kit</h4>
                        <p className="product-1-price">$10.00</p>
                        <div className="link-btn"><Link href="#" className="btn-1 btn-small alt">Buy Now <span></span></Link></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="product-1-block mb_30">
                        <div className="product-1-thumb">
                            <img src="assets/images/resource/product-4.png" alt="" />
                            <div className="product-1-share-icon-area">
                                <ul className="product-1-meta-icon">
                                    <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-39"></i></Link></li>
                                    <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-38"></i></Link></li>
                                    <li><Link href="" className="hvr-zoom-1-primary hvr-zoom-1"><i className="icon-37"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="product-1-title">Automated Surface Cleaner</h4>
                        <p className="product-1-price">$10.00</p>
                        <div className="link-btn"><Link href="#" className="btn-1 btn-small alt">Buy Now <span></span></Link></div>
                    </div>
                </div>
                </div>
                <div className="link-btn text-center mt_30 mb_30"><Link href="#" className="btn-1">More Product <span></span></Link></div>
            </div>
        </section>
    );
};

