import React from 'react';
import Link from "next/link"
export default function Gallery() {
    return (
        <section className="p-0">
            <div className="auto-container fullwidth p-0">
                <div className="row row-10">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="gallery-block-1">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                    <img src="assets/images/gallery/gallery-5.jpg" alt="" />
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
                    {/* Repeat similar structure for other gallery blocks */}
                    {/* Gallery Block 2 */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="gallery-block-1">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                    <img src="assets/images/gallery/gallery-6.jpg" alt="" />
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
                            <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-7.jpg" alt="" />
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
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="gallery-block-1">
                        <div className="gallery-block-1-inner-box">
                            <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-8.jpg" alt="" />
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
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-block-1">
                        <div className="gallery-block-1-inner-box">
                            <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-9.jpg" alt="" />
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
                            <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-10.jpg" alt="" />
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

