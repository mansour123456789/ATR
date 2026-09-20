
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

             <div className="filters text-center mb_60">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}> All </li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Swimming</li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Repair</li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Summer </li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all cat-1 swimming summer">
            <div className="gallery-block-1">
                <div className="gallery-block-1-inner-box">
                    <div className="gallery-block-10-image">
                        <img src="assets/images/gallery/gallery-18.jpg" alt="" />
                    </div>
                    <div className="gallery-block-1-overlay">
                        <div className="gallery-block-1-lower-content">
                            <div className="gallery-block-1-link-btn">
                                <Link href="assets/images/gallery/gallery-18.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
                {/* Case Block */}
                <div className="col-lg-8 col-md-12 col-sm-12 masonry-item small-column all cat-2 summer swimming">
            <div className="gallery-block-1">
                <div className="gallery-block-1-inner-box">
                    <div className="gallery-block-10-image">
                        <img src="assets/images/gallery/gallery-17.jpg" alt="" />
                    </div>
                    <div className="gallery-block-1-overlay">
                        <div className="gallery-block-1-lower-content">
                            <div className="gallery-block-1-link-btn">
                                <Link href="assets/images/gallery/gallery-17.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all cat-3 summer repair">
            <div className="gallery-block-1">
                <div className="gallery-block-1-inner-box">
                    <div className="gallery-block-10-image">
                        <img src="assets/images/gallery/gallery-19.jpg" alt="" />
                    </div>
                    <div className="gallery-block-1-overlay">
                        <div className="gallery-block-1-lower-content">
                            <div className="gallery-block-1-link-btn">
                                <Link href="assets/images/gallery/gallery-19.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all cat-1  cat-2 swimming repair">
            <div className="gallery-block-1">
                <div className="gallery-block-1-inner-box">
                    <div className="gallery-block-10-image">
                        <img src="assets/images/gallery/gallery-20.jpg" alt="" />
                    </div>
                    <div className="gallery-block-1-overlay">
                        <div className="gallery-block-1-lower-content">
                            <div className="gallery-block-1-link-btn">
                                <Link href="assets/images/gallery/gallery-20.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all cat-2  cat-3 summer repair">
            <div className="gallery-block-1">
                <div className="gallery-block-1-inner-box">
                    <div className="gallery-block-10-image">
                        <img src="assets/images/gallery/gallery-21.jpg" alt="" />
                    </div>
                    <div className="gallery-block-1-overlay">
                        <div className="gallery-block-1-lower-content">
                            <div className="gallery-block-1-link-btn">
                                <Link href="assets/images/gallery/gallery-21.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all cat-3  cat-1 swimming">
            <div className="gallery-block-1">
                <div className="gallery-block-1-inner-box">
                    <div className="gallery-block-10-image">
                        <img src="assets/images/gallery/gallery-22.jpg" alt="" />
                    </div>
                    <div className="gallery-block-1-overlay">
                        <div className="gallery-block-1-lower-content">
                            <div className="gallery-block-1-link-btn">
                                <Link href="assets/images/gallery/gallery-22.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all cat-1 cat-2  cat-3 summer repair">
            <div className="gallery-block-1">
                <div className="gallery-block-1-inner-box">
                    <div className="gallery-block-10-image">
                        <img src="assets/images/gallery/gallery-23.jpg" alt="" />
                    </div>
                    <div className="gallery-block-1-overlay">
                        <div className="gallery-block-1-lower-content">
                            <div className="gallery-block-1-link-btn">
                                <Link href="assets/images/gallery/gallery-23.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </>
    )
}
