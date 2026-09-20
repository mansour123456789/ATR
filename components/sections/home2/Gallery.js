import React from 'react';
import Link from "next/link"
export default function Gallery ()  {
    return (
        <section className="section-padding pt-0 pb-0">
            <div className="auto-container fullwidth p-0">
                <div className="row row-10">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="gallery-block-1">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-10-image">
                                    <img src="assets/images/gallery/gallery-1.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                    <div className="gallery-block-1-lower-content">
                                        <div className="gallery-block-1-link-btn">
                                            <Link href="assets/images/gallery/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-block-1">
                        <div className="gallery-block-1-inner-box">
                            <div className="gallery-block-10-image">
                                <img src="assets/images/gallery/gallery-2.jpg" alt="" />
                            </div> 
                            <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                        <Link href="assets/images/gallery/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-block-1">
                        <div className="gallery-block-1-inner-box">
                            <div className="gallery-block-10-image">
                                <img src="assets/images/gallery/gallery-3.jpg" alt="" />
                            </div> 
                            <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                        <Link href="assets/images/gallery/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-block-1">
                        <div className="gallery-block-1-inner-box">
                            <div className="gallery-block-10-image">
                                <img src="assets/images/gallery/gallery-4.jpg" alt="" />
                            </div> 
                            <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                        <Link href="assets/images/gallery/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
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

