'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Service() {
    return (
        <>
          <section className="section-padding pt_150 gray-bg" id="service">
            <div className="auto-container">
                <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Nos Comités Techniques</span>
                    <h2 className="section_heading_title_big">Les 4 Axes Stratégiques <br /> de l'ATR</h2>
                </div>
            <Swiper {...swiperOptions} className="swiper-container four-item-carousel">
            <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"> 
                            <div className="service-1-block text-center wow fadeInLeft">
                                <div className="service-1-image hvr-img-zoom-1"><img src="/images/road-feature-1.png" alt="" /></div>
                                <h4 className="service-1-title mt_20">Administration & Résilience</h4>
                                <div className="service-1-block-overlay text-center">
                                    <h4 className="service-1-title">Administration & Résilience</h4>
                                    <p className="service-1-text">Renforcer la gouvernance face <br /> aux défis climatiques.</p>
                                    <div className="mt_15"><Link className="btn-1 alt" href="/service-details">Détails<span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="/images/road-feature-2.png" alt="" /></div>
                            <h4 className="service-1-title mt_20">Mobilité Durable</h4>
                            <div className="service-1-block-overlay text-center">
                                <h4 className="service-1-title">Mobilité Durable</h4>
                                <p className="service-1-text">Optimiser les déplacements et <br/> respecter l'environnement.</p>
                                <div className="mt_15"><Link className="btn-1 alt" href="/service-details">Détails<span></span></Link></div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="/images/atr-bg-1.png" alt="" /></div>
                            <h4 className="service-1-title mt_20">Sécurité Routière</h4>
                            <div className="service-1-block-overlay text-center">
                                <h4 className="service-1-title">Sécurité Routière</h4>
                                <p className="service-1-text">Réduire les accidents par des <br/> normes strictes.</p>
                                <div className="mt_15"><Link className="btn-1 alt" href="/service-details">Détails<span></span></Link></div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="/images/atr-bg-2.png" alt="" /></div>
                            <h4 className="service-1-title mt_20">Infrastructures</h4>
                            <div className="service-1-block-overlay text-center">
                                <h4 className="service-1-title">Infrastructures</h4>
                                <p className="service-1-text">Conception et entretien des <br/> routes tunisiennes.</p>
                                <div className="mt_15"><Link className="btn-1 alt" href="/service-details">Détails<span></span></Link></div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide"> 
                            <div className="service-1-block text-center wow fadeInLeft">
                                <div className="service-1-image hvr-img-zoom-1"><img src="/images/road-feature-1.png" alt="" /></div>
                                <h4 className="service-1-title mt_20">Administration & Résilience</h4>
                                <div className="service-1-block-overlay text-center">
                                    <h4 className="service-1-title">Administration & Résilience</h4>
                                    <p className="service-1-text">Renforcer la gouvernance face <br /> aux défis climatiques.</p>
                                    <div className="mt_15"><Link className="btn-1 alt" href="/service-details">Détails<span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="/images/road-feature-2.png" alt="" /></div>
                            <h4 className="service-1-title mt_20">Mobilité Durable</h4>
                            <div className="service-1-block-overlay text-center">
                                <h4 className="service-1-title">Mobilité Durable</h4>
                                <p className="service-1-text">Optimiser les déplacements et <br/> respecter l'environnement.</p>
                                <div className="mt_15"><Link className="btn-1 alt" href="/service-details">Détails<span></span></Link></div>
                            </div>
                        </div>
                </SwiperSlide>
            </div>
            <div className="mt_40"></div>
                <div className="swiper-pagination"></div>
            </Swiper>
                    
            </div>
          
            </section>
        </>
    )
}
