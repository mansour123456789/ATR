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
        <section className="whychoous-1-section">
            <div className="whychoous-1-left-column">
                <div className="whychoous-1-bg" style={{ backgroundImage: "url(assets/images/background/pattern.png)" }}></div>
                 <div className="whychoous-1-small-container">
                    <div className="section_heading mb_40">
                        <span className="section_heading_title_small">Rejoindre l'Association</span>
                        <h2 className="section_heading_title_big c_light mb_20">Pourquoi Rejoindre l'ATR ?</h2>
                        <p className="c_light">L'Association Tunisienne des Routes est le carrefour d'échange incontournable pour les professionnels de la route, de l'infrastructure et de la mobilité en Tunisie.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="whychoous-1-block mb_30">
                                <div className="whychoous-1-icon"><i className="fas fa-users" style={{color: '#F69F1A', fontSize: '40px'}}></i></div>
                                <div>
                                    <h4 className="whychoous-1-title">Réseau d'Experts</h4>
                                    <p className="whychoous-1-text">Rejoignez une communauté de<br /> plus de 500 professionnels,<br /> décideurs et chercheurs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="whychoous-1-block mb_30">
                            <div className="whychoous-1-icon"><i className="fas fa-cogs" style={{color: '#F69F1A', fontSize: '40px'}}></i></div>
                            <div>
                                <h4 className="whychoous-1-title">Comités Techniques</h4>
                                <p className="whychoous-1-text">Participez activement aux<br /> travaux de recherche et à la<br /> rédaction des guides.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="whychoous-1-block mb_30">
                            <div className="whychoous-1-icon"><i className="fas fa-calendar-alt" style={{color: '#F69F1A', fontSize: '40px'}}></i></div>
                            <div>
                                <h4 className="whychoous-1-title">Événements Majeurs</h4>
                                <p className="whychoous-1-text">Bénéficiez de tarifs préférentiels<br /> pour le Congrès National et<br /> les Séminaires.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="whychoous-1-block mb_30">
                            <div className="whychoous-1-icon"><i className="fas fa-book" style={{color: '#F69F1A', fontSize: '40px'}}></i></div>
                            <div>
                                <h4 className="whychoous-1-title">Veille Technologique</h4>
                                <p className="whychoous-1-text">Accédez en exclusivité aux<br /> dernières publications, normes<br /> et innovations du secteur.</p>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
            <div className="whychoous-1-right-column">
                <div className="whychoous-1-image mb_70"><img src="/images/hero-home.png" alt="ATR Team" style={{borderRadius: '15px'}} /></div>
                <div className="whychoous-1-small-container p_relative">
                    
                    <Swiper {...swiperOptions} className="swiper-container three-item-carousel">
                        <div className="swiper-wrapper">
                        <SwiperSlide className="slide-item"> 
                            <div className="swiper-slide">
                                <div className="funfact-1-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="funfact-1-number odometer" data-count={40}>
                                        <CounterUp end={40} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix">+</h2>
                                    </div>
                                    <p className="funfact-1-title">Années d'Expertise</p>
                                </div>
                            </div>
                         </SwiperSlide>
                        <SwiperSlide className="slide-item"> 
                        <div className="swiper-slide">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                <h2 className="funfact-1-number odometer" data-count={500}>
                                        <CounterUp end={500} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix">+</h2>
                                </div>
                                <p className="funfact-1-title">Membres Actifs</p>
                            </div>
                        </div>
                         </SwiperSlide>
                        <SwiperSlide className="slide-item"> 
                            <div className="swiper-slide">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                <h2 className="funfact-1-number odometer" data-count={4}>
                                        <CounterUp end={4} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix"></h2>
                                </div>
                                <p className="funfact-1-title">Comités Techniques</p>
                            </div>
                        </div>
                         </SwiperSlide>
                        <SwiperSlide className="slide-item"> 
                            <div className="swiper-slide">
                                <div className="funfact-1-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="funfact-1-number odometer" data-count={100}>
                                        <CounterUp end={100} />
                                        </h2>
                                    <h2 className="funfact-1-number-prefix">%</h2>
                                    </div>
                                    <p className="funfact-1-title">Engagement</p>
                                </div>
                            </div>
                         </SwiperSlide>
                        <SwiperSlide className="slide-item"> 
                        <div className="swiper-slide">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                <h2 className="funfact-1-number odometer" data-count={98}>
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
                                <h2 className="funfact-1-number odometer" data-count={5}>
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

