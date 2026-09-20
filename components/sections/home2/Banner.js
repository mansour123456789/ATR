
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.banner-slider-control.banner-slider-button-next',
        prevEl: '.banner-slider-control.banner-slider-button-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
          
<section className="banner-section banner-s2">
      <Swiper {...swiperOptions} className="swiper-container banner-slider-2">
            <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <div className="content-outer">
                        <div className="content-box">
                            <div className="inner">
                                <h1>Réseau <br/> Routier <br/> Tunisien</h1>
                                <div className="text">L'Association Tunisienne des Routes s'engage pour <br/> des infrastructures modernes et durables.</div>
                                <div className="link-box">
                                    <Link href="/about-us" className="btn-1">Découvrir l'ATR <span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-feature-image d-none d-lg-block"><img src="/images/road-hero.png" alt="Réseau Routier" /></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="content-outer">
                        <div className="content-box">
                            <div className="inner">
                                <h1>Innovation <br/> & Résilience <br/> Routière</h1>
                                <div className="text">Construire pour l'avenir face aux <br/> défis climatiques en Tunisie.</div>
                                <div className="link-box">
                                    <Link href="/about-us" className="btn-1">Découvrir l'ATR <span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-feature-image d-none d-lg-block"><img src="/images/road-feature-1.png" alt="Innovation Routière" /></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="content-outer">
                        <div className="content-box">
                            <div className="inner">
                                <h1>Mobilité <br /> Durable <br /> & Sécurité</h1>
                                <div className="text">Fédérer les professionnels pour garantir <br /> la sécurité de tous les usagers.</div>
                                <div className="link-box">
                                    <Link href="/about-us" className="btn-1">Découvrir l'ATR <span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-feature-image d-none d-lg-block"><img src="/images/road-feature-2.png" alt="Mobilité Durable" /></div>
                </SwiperSlide>
                </div>
            </Swiper>
            <div className="banner-slider-nav">
                <div className="banner-slider-control banner-slider-button-prev"><span><i className="icon-4"></i></span></div>
                <div className="banner-slider-control banner-slider-button-next"><span><i className="icon-3"></i></span> </div>
            </div>
            </section>
        </>
    )
}

