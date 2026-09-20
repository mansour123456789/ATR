'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnPoppinsaction: false,
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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper-container single-item-carousel">
            <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                <div className="testimonial-1-block">
                                            <div className="testimonial-1-rating">
                                                <i className="icon-26"></i>
                                                <i className="icon-26"></i>
                                                <i className="icon-26"></i>
                                                <i className="icon-26"></i>
                                                <i className="icon-27"></i>
                                            </div>
                                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                                            <p className="testimonial-1-review-desc">Amet egestas fusce sit varius viverra neque ipsum lorem mauris a accumsan nibh id mauris vestibulum eu nunc lectus faucibus sem augue molestie blandit neque quisque dolor dui consequat in et cras sit orci malesuada tristique.</p>
                                            <div className="testimonial-1-name"><span className="fs_20 fw_medium ff_oswald c_dark">Leslie Alexander,</span> <span>Service taker</span></div>
                                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="testimonial-1-block">
                                            <div className="testimonial-1-rating">
                                                <i className="icon-26"></i>
                                                <i className="icon-26"></i>
                                                <i className="icon-26"></i>
                                                <i className="icon-26"></i>
                                                <i className="icon-27"></i>
                                            </div>
                                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                                            <p className="testimonial-1-review-desc">Amet egestas fusce sit varius viverra neque ipsum lorem mauris a accumsan nibh id mauris vestibulum eu nunc lectus faucibus sem augue molestie blandit neque quisque dolor dui consequat in et cras sit orci malesuada tristique.</p>
                                            <div className="testimonial-1-name"><span className="fs_20 fw_medium ff_oswald c_dark">Leslie Alexander,</span> <span>Service taker</span></div>
                                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="testimonial-1-block">
                                            <div className="testimonial-1-rating">
                                                <i className="icon-26"></i>
                                                <i className="icon-26"></i>
                                                <i className="icon-26"></i>
                                                <i className="icon-26"></i>
                                                <i className="icon-27"></i>
                                            </div>
                                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                                            <p className="testimonial-1-review-desc">Amet egestas fusce sit varius viverra neque ipsum lorem mauris a accumsan nibh id mauris vestibulum eu nunc lectus faucibus sem augue molestie blandit neque quisque dolor dui consequat in et cras sit orci malesuada tristique.</p>
                                            <div className="testimonial-1-name"><span className="fs_20 fw_medium ff_oswald c_dark">Leslie Alexander,</span> <span>Service taker</span></div>
                                        </div>
                </SwiperSlide>
                </div>
                
            </Swiper>
        </>
    )
}
