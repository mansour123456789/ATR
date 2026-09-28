'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                
                {/* Header Upper */}
        <div className="header-upper">
            <div className="auto-container">
                <div className="inner-container d-flex align-items-center justify-content-between">
                    <div className="left-column d-flex align-items-center">
                        <div className="logo-box">
                            <div className="logo"><Link href="/"><img src="/1000007112.png" alt="ATR Logo" style={{ height: "100px", width: "auto" }} /></Link></div>
                        </div>                        
                    </div>
                    <div className="right-column d-flex align-items-center">
                        <div className="nav-outer">
                        <div className="mobile-nav-toggler d-block d-xl-none" onClick={handleMobileMenu}>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        {/* Main Menu */}
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu/>
                            </div>
                        </nav>
                        
                        </div>
                        </div>
                        {/* Menu Right Content */}
                        <div className="contact-info-1 d-flex align-items-center">
                            <i className="icon-2 contact-info-1-icon"></i>
                            <div>
                                <p className="contact-info-1-phone-tel fs_15 ff_oswald mb_0">CALL US NOW!</p>
                                <h6 className="contact-info-1-phone-number fs_20 fw_medium "><Link href="tel:+912136660027">+91-213-666-0027</Link></h6>
                            </div>
                        </div>
                        <div className="header-link-btn"><Link href="" className="btn-1">Request A Quote <span></span></Link></div>
                    
                    </div>
                </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className="sticky-header">
            <div className="auto-container">
                <div className="inner-container d-flex align-items-center justify-content-between">
                    <div className="left-column d-flex align-items-center">
                        <div className="logo-box">
                            <div className="logo"><Link href="/"><img src="/1000007112.png" alt="ATR Logo" style={{ height: "80px", width: "auto" }} /></Link></div>
                        </div>                        
                    </div>
                    <div className="right-column d-flex align-items-center">
                        <div className="nav-outer">
                            <div className="mobile-nav-toggler d-block d-xl-none" onClick={handleMobileMenu} aria-label="Menu" role="button">
                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <rect width="24" height="2.6" rx="1.3" fill="currentColor" />
                                    <rect y="7.7" width="24" height="2.6" rx="1.3" fill="currentColor" />
                                    <rect y="15.4" width="24" height="2.6" rx="1.3" fill="currentColor" />
                                </svg>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu/>
                            </div>
                            </nav>
                        </div> 
                       
                            <div className="contact-info-1 d-flex align-items-center">
                            <i className="icon-2 contact-info-1-icon"></i>
                            <div>
                                <p className="contact-info-1-phone-tel fs_15 ff_oswald mb_0">CALL US NOW!</p>
                                <h6 className="contact-info-1-phone-number fs_20 fw_medium "><Link href="tel:+912136660027">+91-213-666-0027</Link></h6>
                            </div>
                        </div>
                        <div className="header-link-btn"><Link href="" className="btn-1">Request A Quote <span></span></Link></div>
                    
                        
                        </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
