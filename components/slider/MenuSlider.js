'use client'
import Link from "next/link"
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
export default function MenuSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="menu-block-two">
                                    <div className="title">
                                        <h2>Selected Menu</h2>
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                                    </div>
                                    <div className="inner-box">
                                        <div className="single-item">
                                        <figure className="menu-image"><img src="assets/images/resource/menu-1.jpg" alt="" /></figure>
                                        <div className="inner">
                                            <div className="upper-box">
                                            <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                            <span className="price">$12</span>
                                            </div>
                                            <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-2.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                                    <span className="price">$15</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-3.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">Optic Breakfast Combo</Link></h4>
                                                    <span className="price">$20</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="menu-block-two">
                                    <div className="title">
                                        <h2>Sweet Pleasure</h2>
                                        <div className="shape"  style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                                    </div>
                                    <div className="inner-box">
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-4.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                                    <span className="price">$12</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-5.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                                    <span className="price">$15</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-6.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">Optic Breakfast Combo</Link></h4>
                                                    <span className="price">$20</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="menu-block-two">
                                    <div className="title">
                                        <h2>Selected Menu</h2>
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                                    </div>
                                    <div className="inner-box">
                                        <div className="single-item">
                                        <figure className="menu-image"><img src="assets/images/resource/menu-1.jpg" alt="" /></figure>
                                        <div className="inner">
                                            <div className="upper-box">
                                            <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                            <span className="price">$12</span>
                                            </div>
                                            <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-2.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                                    <span className="price">$15</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-3.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">Optic Breakfast Combo</Link></h4>
                                                    <span className="price">$20</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="menu-block-two">
                                    <div className="title">
                                        <h2>Sweet Pleasure</h2>
                                        <div className="shape"  style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                                    </div>
                                    <div className="inner-box">
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-4.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                                    <span className="price">$12</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-5.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                                    <span className="price">$15</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <figure className="menu-image"><img src="assets/images/resource/menu-6.jpg" alt="" /></figure>
                                            <div className="inner">
                                                <div className="upper-box">
                                                    <h4><Link href="shop-details">Optic Breakfast Combo</Link></h4>
                                                    <span className="price">$20</span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </SwiperSlide>
               
            </Swiper>
        </>
    )
}
