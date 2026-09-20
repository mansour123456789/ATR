
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.banner-slider-control.slider-button-next',
        prevEl: '.banner-slider-control.slider-button-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Testimonial() {
    return (
        <>
             
             <section className="section-padding style-two">
            <div className="testimonial-1-top-bg" style={{ backgroundImage: 'url(/images/road-hero.png)' }}></div>
            <div className="auto-container">
                <div className="section_heading text-center">
                    <span className="section_heading_title_small">Témoignages & Preuve Sociale</span>
                    <h2 className="section_heading_title_big mb_20 c_light">Ce que disent nos <br /> partenaires</h2>
                </div>
            </div>
            <div className="auto-container">
      <Swiper {...swiperOptions} className="swiper-container two-item-carousel">
      <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                <div className="testimonial-1-block alt">
                                <div className="testimonial-1-rating">
                                    <i className="icon-26"></i>
                                    <i className="icon-26"></i>
                                    <i className="icon-26"></i>
                                    <i className="icon-26"></i>
                                    <i className="icon-27"></i>
                                </div>
                                <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                                <p className="testimonial-1-review-desc">“L'Association Tunisienne des Routes joue un rôle crucial dans le développement et la modernisation de nos infrastructures. Elle est un partenaire indispensable pour l'État.”</p>
                                <div className="testimonial-1-author-info d-flex">
                                    <div className="testimonial-1-thumb"><img src="/images/atr-avatar-1.png" alt="Ministre de l'Équipement" /></div>
                                    <div className="testimonial-1-name">
                                        <span className="fs_24 fw_bold ff_oswald c_dark">Ministre de l'Équipement,</span> <br />
                                        <span>Gouvernement Tunisien</span>
                                    </div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="testimonial-1-block alt">
                            <div className="testimonial-1-rating">
                                <i className="icon-26"></i>
                                <i className="icon-26"></i>
                                <i className="icon-26"></i>
                                <i className="icon-26"></i>
                                <i className="icon-27"></i></div>
                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                            <p className="testimonial-1-review-desc">“La collaboration avec l'ATR permet un échange précieux de bonnes pratiques au niveau mondial. Leur engagement envers l'innovation est exemplaire.”</p>
                            <div className="testimonial-1-author-info d-flex">
                                <div className="testimonial-1-thumb"><img src="/images/atr-avatar-2.png" alt="Président PIARC" /></div>
                                <div className="testimonial-1-name">
                                    <span className="fs_24 fw_sbold ff_oswald c_dark">Président,</span> <br/>
                                    <span>PIARC (Association Mondiale de la Route)</span>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="testimonial-1-block alt">
                            <div className="testimonial-1-rating">
                                <i className="icon-26"></i>
                                <i className="icon-26"></i>
                                <i className="icon-26"></i>
                                <i className="icon-26"></i>
                                <i className="icon-27"></i></div>
                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                            <p className="testimonial-1-review-desc">“Les formations techniques organisées par l'ATR nous permettent de maintenir nos ingénieurs à la pointe des nouvelles réglementations et technologies de construction routière.”</p>
                            <div className="testimonial-1-author-info d-flex">
                                <div className="testimonial-1-thumb"><img src="/images/atr-avatar-3.png" alt="Membre CT 4.6" /></div>
                                <div className="testimonial-1-name">
                                    <span className="fs_24 fw_bold ff_oswald c_dark">Ingénieur Expert,</span> <br />
                                    <span>Membre du CT 4.6 Normes & Standards</span>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="testimonial-1-block alt">
                            <div className="testimonial-1-rating">
                                <i className="icon-26"></i>
                                <i className="icon-26"></i>
                                <i className="icon-26"></i>
                                <i className="icon-26"></i>
                                <i className="icon-27"></i></div>
                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                            <p className="testimonial-1-review-desc">“Les comités techniques de l'ATR sont le cœur battant de la recherche routière en Tunisie. C'est ici que se décide l'avenir de nos infrastructures.”</p>
                            <div className="testimonial-1-author-info d-flex">
                                <div className="testimonial-1-thumb"><img src="/images/atr-avatar-4.png" alt="Directrice d'études" /></div>
                                <div className="testimonial-1-name">
                                    <span className="fs_24 fw_sbold ff_oswald c_dark">Directrice d'Études,</span> <br/>
                                    <span>Bureau d'Ingénierie</span>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
             </div>    
        </Swiper>
        <div className="nav-style-one">
            <div className="banner-slider-control slider-button-prev">
                <span><i className="icon-4"></i>PREV</span>
            </div>
            <div className="banner-slider-control slider-button-next">
                <span>NEXT<i className="icon-3"></i></span>
            </div>
        </div>
    </div>
            </section>
        </>
    )
}

