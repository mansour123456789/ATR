'use client'
import Link from "next/link"
import React from 'react';
import CounterUp from "@/components/elements/CounterUp"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.slider-control.slider-button-next',
        prevEl: '.slider-control.slider-button-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

}


export default function Chooseus() {
    return (
        <section className="whychoous-1-section" id="chooseus">
            <div className="whychoous-1-left-column">
                <div className="whychoous-1-bg" style={{ backgroundImage: "url(assets/images/background/pattern.png)" }}></div>
                 <div className="whychoous-1-small-container">
                    <div className="section_heading mb_40">
                        <span className="section_heading_title_small">Why Choose</span>
                        <h2 className="section_heading_title_big c_light mb_20">Why Choose Poolix</h2>
                        <p className="c_light">Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas turpis <br /> magna eu dolor nibh.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="whychoous-1-block mb_30">
                                <div className="whychoous-1-icon"><i className="icon-17"></i></div>
                                <div>
                                    <h4 className="whychoous-1-title">Quality Services</h4>
                                    <p className="whychoous-1-text">Amet mauris sed enim <br /> suspendise odio nullam <br /> sed eite.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="whychoous-1-block mb_30">
                            <div className="whychoous-1-icon"><i className="icon-18"></i></div>
                            <div>
                                <h4 className="whychoous-1-title">Experienced Team</h4>
                                <p className="whychoous-1-text">Amet mauris sed enim <br/>
                                    suspendise odio nullam <br/>
                                    sed eite.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="whychoous-1-block mb_30">
                            <div className="whychoous-1-icon"><i className="icon-20"></i></div>
                            <div>
                                <h4 className="whychoous-1-title">Affordable Pricing</h4>
                                <p className="whychoous-1-text">Amet mauris sed enim <br/>
                                    suspendise odio nullam <br/>
                                    sed eite.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="whychoous-1-block mb_30">
                            <div className="whychoous-1-icon"><i className="icon-21"></i></div>
                            <div>
                                <h4 className="whychoous-1-title">Quality Product</h4>
                                <p className="whychoous-1-text">Amet mauris sed enim <br/>
                                    suspendise odio nullam <br/>
                                    sed eite.</p>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
            <div className="whychoous-1-right-column">
                <div className="whychoous-1-image mb_70"><img src="assets/images/resource/image-1.jpg" alt="" /></div>
                <div className="whychoous-1-small-container p_relative">
                    
                    <Swiper {...swiperOptions} className="swiper-container three-item-carousel">
                        <div className="swiper-wrapper">
                        <SwiperSlide className="slide-item"> 
                            <div className="swiper-slide">
                                <div className="funfact-1-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="funfact-1-number odometer" data-count={20}>
                                        <CounterUp end={20} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix">+</h2>
                                    </div>
                                    <p className="funfact-1-title">Industry Awards</p>
                                </div>
                            </div>
                         </SwiperSlide>
                        <SwiperSlide className="slide-item"> 
                        <div className="swiper-slide">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                <h2 className="funfact-1-number odometer" data-count={20}>
                                        <CounterUp end={98} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix">%</h2>
                                </div>
                                <p className="funfact-1-title">Project Success</p>
                            </div>
                        </div>
                         </SwiperSlide>
                        <SwiperSlide className="slide-item"> 
                            <div className="swiper-slide">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                <h2 className="funfact-1-number odometer" data-count={20}>
                                        <CounterUp end={5} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix">K+</h2>
                                </div>
                                <p className="funfact-1-title">Happy Clients</p>
                            </div>
                        </div>
                         </SwiperSlide>
                        <SwiperSlide className="slide-item"> 
                            <div className="swiper-slide">
                                <div className="funfact-1-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="funfact-1-number odometer" data-count={20}>
                                        <CounterUp end={20} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix">+</h2>
                                    </div>
                                    <p className="funfact-1-title">Industry Awards</p>
                                </div>
                            </div>
                         </SwiperSlide>
                        <SwiperSlide className="slide-item"> 
                        <div className="swiper-slide">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                <h2 className="funfact-1-number odometer" data-count={20}>
                                        <CounterUp end={98} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix">%</h2>
                                </div>
                                <p className="funfact-1-title">Project Success</p>
                            </div>
                        </div>
                         </SwiperSlide>
                        <SwiperSlide className="slide-item"> 
                            <div className="swiper-slide">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                <h2 className="funfact-1-number odometer" data-count={20}>
                                        <CounterUp end={5} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix">K+</h2>
                                </div>
                                <p className="funfact-1-title">Happy Clients</p>
                            </div>
                        </div>
                         </SwiperSlide>
                            {/* Add the rest of the slides similarly */}
                        </div>
                        </Swiper>
                    <div className="slider-nav-style-1 alt">
                        <div className="slider-control slider-button-prev"><span></span></div>
                        <div className="slider-control slider-button-next"><span></span> </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

