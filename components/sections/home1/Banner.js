
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
          <section className="banner-section banner-style-1">
            <Swiper {...swiperOptions} className="swiper-container banner-slider">
            <div className="swiper-wrapper">
                <SwiperSlide className="slide-item"> 
                <div className="swiper-slide" style={{ backgroundImage: 'url(/images/hero-home.png)' }}>
                        <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h4>Association Tunisienne des Routes</h4>
                                    <h1>Vers une infrastructure <br />
                                        routière durable</h1>
                                    <div className="text">L'ATR œuvre pour le développement et la sécurité <br /> des réseaux routiers en Tunisie.</div>
                                    <div className="link-box">
                                        <Link href="/about-us" className="btn-1">Découvrir l'ATR <span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="swiper-slide" style={{ backgroundImage: 'url(/images/atr-bg-1.png)' }}>
                        <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h4>Réseau d'experts</h4>
                                    <h1>Échangeons nos <br />
                                        Savoir-Faire</h1>
                                    <div className="text">Rejoignez nos comités techniques pour façonner <br /> l'avenir de la mobilité tunisienne.</div>
                                    <div className="link-box">
                                        <Link href="/team" className="btn-1">Voir nos experts <span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="swiper-slide" style={{ backgroundImage: 'url(/images/hero-about.png)' }}>
                        <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h4>Congrès National</h4>
                                    <h1>L'Innovation au <br />
                                        Cœur de nos Routes</h1>
                                    <div className="text">Participez à nos événements nationaux et internationaux <br /> pour rester à la pointe des technologies.</div>
                                    <div className="link-box">
                                        <Link href="/events" className="btn-1">Nos Événements <span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
            </Swiper>
            <div className="banner-slider-nav">
            <div className="banner-slider-control banner-slider-button-prev"><span><i className="icon-4"></i></span></div>
            <div className="banner-slider-control banner-slider-button-next"><span><i className="icon-3"></i></span></div>
        </div>
          
            </section>
        </>
    )
}
