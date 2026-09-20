'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOninteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function ServiceSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper-container four-item-carousel">
            <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                <div className="service-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-1.jpg" alt="" /></div>
                                <div className="service-1-link"><a className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i className="icon-9"></i></a></div>
                                <h4 className="service-1-title">Equipment Install</h4>
                                <div className="service-1-block-overlay text-center">
                                    <div className="service-1-link"><a className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i className="icon-3"></i></a></div>
                                    <h4 className="service-1-title">Equipment Install</h4>
                                    <p className="service-1-text">Lorem ipsum dolor amet coset <br /> etur adipiscing elit.</p>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="service-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-2.jpg" alt="" /></div>
                                <div className="service-1-link"><a className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i className="icon-10"></i></a></div>
                                <h4 className="service-1-title">Drain & Clean</h4>
                                <div className="service-1-block-overlay text-center">
                                    <div className="service-1-link"><a className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i className="icon-3"></i></a></div>
                                    <h4 className="service-1-title">Drain & Clean</h4>
                                    <p className="service-1-text">Lorem ipsum dolor amet coset <br /> etur adipiscing elit.</p>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="service-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-3.jpg" alt="" /></div>
                                <div className="service-1-link"><a className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i className="icon-11"></i></a></div>
                                <h4 className="service-1-title">Water Analysis</h4>
                                <div className="service-1-block-overlay text-center">
                                    <div className="service-1-link"><a className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i className="icon-3"></i></a></div>
                                    <h4 className="service-1-title">Water Analysis</h4>
                                    <p className="service-1-text">Lorem ipsum dolor amet coset <br /> etur adipiscing elit.</p>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="service-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-4.jpg" alt="" /></div>
                                <div className="service-1-link"><a className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i className="icon-12"></i></a></div>
                                <h4 className="service-1-title">Pool Maintenance</h4>
                                <div className="service-1-block-overlay text-center">
                                    <div className="service-1-link"><a className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details.html"><i className="icon-3"></i></a></div>
                                    <h4 className="service-1-title">Pool Maintenance</h4>
                                    <p className="service-1-text">Lorem ipsum dolor amet coset <br /> etur adipiscing elit.</p>
                                </div>
                            </div>
                </SwiperSlide>
                </div>
               
            </Swiper>
        </>
    )
}
