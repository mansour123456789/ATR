'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider5() {
    return (
        <>
            <Swiper {...swiperOptions} className="two-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
               
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div className="quote-box-2"><i className="icon-20"></i></div>
                            
                            <div className="author-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                <h4>Juelion Amanda</h4>
                                <span className="designation">UI Designer</span>
                            </div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quison nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div className="quote-box-2"><i className="icon-20"></i></div>
                           
                            <div className="author-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                <h4>Ronald Rogan</h4>
                                <span className="designation">UI Designer</span>
                            </div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quison nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div className="quote-box-2"><i className="icon-20"></i></div>
                            
                            <div className="author-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                <h4>Juelion Amanda</h4>
                                <span className="designation">UI Designer</span>
                            </div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quison nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div className="quote-box-2"><i className="icon-20"></i></div>
                           
                            <div className="author-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                <h4>Ronald Rogan</h4>
                                <span className="designation">UI Designer</span>
                            </div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quison nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div className="quote-box-2"><i className="icon-20"></i></div>
                            
                            <div className="author-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                <h4>Juelion Amanda</h4>
                                <span className="designation">UI Designer</span>
                            </div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quison nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                        <div className="inner-box">
                            <div className="quote-box-2"><i className="icon-20"></i></div>
                           
                            <div className="author-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                <h4>Ronald Rogan</h4>
                                <span className="designation">UI Designer</span>
                            </div>
                            <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quison nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}
