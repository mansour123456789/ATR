
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



}

export default function Service() {
    return (
        <>
          <section className="section-padding pt_150 gray-bg" id="service">
            <div className="auto-container">
                <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Services</span>
                    <h2 className="section_heading_title_big">Swimming Pool Facilities <br /> & Services</h2>
                </div>
            <Swiper {...swiperOptions} className="swiper-container four-item-carousel">
            <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide"> 
                            <div className="service-1-block text-center wow fadeInLeft">
                                <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-1.jpg" alt="" /></div>
                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-9"></i></Link></div>
                                <h4 className="service-1-title">Equipment Install</h4>
                                <div className="service-1-block-overlay text-center">
                                    <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-3"></i></Link></div>
                                    <h4 className="service-1-title">Equipment Install</h4>
                                    <p className="service-1-text">Lorem ipsum dolor amet coset <br /> etur adipiscing elit.</p>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-2.jpg" alt="" /></div>
                            <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-10"></i></Link></div>
                            <h4 className="service-1-title">Drain & Clean</h4>
                            <div className="service-1-block-overlay text-center">
                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-3"></i></Link></div>
                                <h4 className="service-1-title">Drain & Clean</h4>
                                <p className="service-1-text">Lorem ipsum dolor amet coset <br/> etur adipiscing elit.</p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-3.jpg" alt="" /></div>
                            <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-11"></i></Link></div>
                            <h4 className="service-1-title">Water Analysis</h4>
                            <div className="service-1-block-overlay text-center">
                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-3"></i></Link></div>
                                <h4 className="service-1-title">Water Analysis</h4>
                                <p className="service-1-text">Lorem ipsum dolor amet coset <br/> etur adipiscing elit.</p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-4.jpg" alt="" /></div>
                            <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-12"></i></Link></div>
                            <h4 className="service-1-title">Pool Maintenance</h4>
                            <div className="service-1-block-overlay text-center">
                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-3"></i></Link></div>
                                <h4 className="service-1-title">Pool Maintenance</h4>
                                <p className="service-1-text">Lorem ipsum dolor amet coset <br/> etur adipiscing elit.</p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide"> 
                            <div className="service-1-block text-center wow fadeInLeft">
                                <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-1.jpg" alt="" /></div>
                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-9"></i></Link></div>
                                <h4 className="service-1-title">Equipment Install</h4>
                                <div className="service-1-block-overlay text-center">
                                    <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-3"></i></Link></div>
                                    <h4 className="service-1-title">Equipment Install</h4>
                                    <p className="service-1-text">Lorem ipsum dolor amet coset <br /> etur adipiscing elit.</p>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-2.jpg" alt="" /></div>
                            <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-10"></i></Link></div>
                            <h4 className="service-1-title">Drain & Clean</h4>
                            <div className="service-1-block-overlay text-center">
                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-3"></i></Link></div>
                                <h4 className="service-1-title">Drain & Clean</h4>
                                <p className="service-1-text">Lorem ipsum dolor amet coset <br/> etur adipiscing elit.</p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-3.jpg" alt="" /></div>
                            <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-11"></i></Link></div>
                            <h4 className="service-1-title">Water Analysis</h4>
                            <div className="service-1-block-overlay text-center">
                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-3"></i></Link></div>
                                <h4 className="service-1-title">Water Analysis</h4>
                                <p className="service-1-text">Lorem ipsum dolor amet coset <br/> etur adipiscing elit.</p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                        <div className="service-1-block text-center wow fadeInLeft">
                            <div className="service-1-image hvr-img-zoom-1"><img src="assets/images/resource/service-4.jpg" alt="" /></div>
                            <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-12"></i></Link></div>
                            <h4 className="service-1-title">Pool Maintenance</h4>
                            <div className="service-1-block-overlay text-center">
                                <div className="service-1-link"><Link className="service-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="service-details"><i className="icon-3"></i></Link></div>
                                <h4 className="service-1-title">Pool Maintenance</h4>
                                <p className="service-1-text">Lorem ipsum dolor amet coset <br/> etur adipiscing elit.</p>
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

