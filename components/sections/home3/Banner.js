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
    navigation: {
        nextEl: '.banner-slider-control.banner-slider-button-next',
        prevEl: '.banner-slider-control.banner-slider-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <>
            <section className="banner-section banner-style-3">
      <Swiper {...swiperOptions} className="swiper-container banner-slider">
      <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide" style={{backgroundImage: "url(/images/road-hero.png)"}}>
                <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h4>Depuis 20 Ans</h4>
                                    <h1>Réseau Routier <br />
                                        Tunisien</h1>
                                    <div className="text">Construire l'avenir avec des infrastructures de qualité <br /> face aux défis modernes.</div>
                                    <div className="link-box">
                                        <Link href="/about-us" className="btn-1">Découvrir l'ATR <span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" style={{backgroundImage: "url(/images/road-feature-1.png)"}}>
                <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h4>Technologie & Sécurité</h4>
                                    <h1>Innovation & <br />
                                        Résilience</h1>
                                    <div className="text">Des solutions durables pour lutter contre <br /> le changement climatique.</div>
                                    <div className="link-box">
                                        <Link href="/about-us" className="btn-1">Découvrir l'ATR <span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" style={{backgroundImage: "url(/images/road-feature-2.png)"}}>
                <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h4>Pour Tous Les Usagers</h4>
                                    <h1>Mobilité <br />
                                        Durable</h1>
                                    <div className="text">Fédérer les experts pour garantir la sécurité <br /> de tous les usagers de la route.</div>
                                    <div className="link-box">
                                        <Link href="/about-us" className="btn-1">Découvrir l'ATR <span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </SwiperSlide>
                 </div>
            </Swiper>
            <div className="banner-slider-nav">
            <div className="banner-slider-control banner-slider-button-prev">
                <span><i className="icon-4"></i></span>
            </div>
            <div className="banner-slider-control banner-slider-button-next">
                <span><i className="icon-3"></i></span>
            </div>
        </div>
            </section>
        </>
    )
}
