'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { useLanguage } from "@/context/LanguageContext";

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    const { language, changeLanguage, t } = useLanguage();
    
    const getFlagIcon = (lang) => {
        if (lang === 'ar') return "tn";
        if (lang === 'en') return "gb";
        return "fr";
    };

    return (
        <>
            <header className={`main-header header-s2 ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-s2-header-top">
            <div className="auto-container">
                <div className="header-s2-wrapper">
                    <div className="logo"><Link href="/"><img src="/1000007112.png" alt="ATR Logo" style={{ height: "100px", width: "auto" }} /></Link></div>
                    <div className="right-column">
                        <div className="contact-info-1 d-flex align-items-center">
                            <i className="icon-28 contact-info-1-icon"></i>
                            <div>
                                <p className="contact-info-1-phone-tel fs_15 ff_oswald mb_0">Work Time</p>
                                <h6 className="contact-info-1-phone-number fs_20 fw_medium ">Mon-Sat: 9:00-18:00</h6>
                            </div>
                        </div>
                        <div className="contact-info-1 d-flex align-items-center">
                            <i className="icon-2 contact-info-1-icon"></i>
                            <div>
                                <p className="contact-info-1-phone-tel fs_15 ff_oswald mb_0">CALL US NOW!</p>
                                <h6 className="contact-info-1-phone-number fs_20 fw_medium "><Link href="tel:+912136660027">+91-213-666-0027</Link></h6>
                            </div>
                        </div>
                        <div className="contact-info-1 d-flex align-items-center">
                            <div className="header-language" style={{ marginRight: '20px', position: 'relative' }}
                                onMouseEnter={(e) => e.currentTarget.querySelector('.lang-dropdown').style.display = 'block'}
                                onMouseLeave={(e) => e.currentTarget.querySelector('.lang-dropdown').style.display = 'none'}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontWeight: 'bold', color: '#1E4C81', padding: '10px 0' }}>
                                    <img src={`https://flagcdn.com/w20/${getFlagIcon(language)}.png`} alt={language.toUpperCase()} width="20" /> {language.toUpperCase()} <span style={{ fontSize: '10px' }}>▼</span>
                                </div>
                                <div className="lang-dropdown" style={{ display: 'none', position: 'absolute', top: '100%', left: '-10px', background: '#fff', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', borderRadius: '5px', padding: '10px', minWidth: '90px', zIndex: 999 }}>
                                    <div onClick={() => changeLanguage('fr')} style={{ padding: '5px 10px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: '0.3s', color: '#1E4C81' }} onMouseOver={(e) => e.currentTarget.style.color = '#F69F1A'} onMouseOut={(e) => e.currentTarget.style.color = '#1E4C81'}><img src="https://flagcdn.com/w20/fr.png" alt="FR" width="20" /> FR</div>
                                    <div onClick={() => changeLanguage('ar')} style={{ padding: '5px 10px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: '0.3s', color: '#1E4C81' }} onMouseOver={(e) => e.currentTarget.style.color = '#F69F1A'} onMouseOut={(e) => e.currentTarget.style.color = '#1E4C81'}><img src="https://flagcdn.com/w20/tn.png" alt="TN" width="20" /> AR</div>
                                    <div onClick={() => changeLanguage('en')} style={{ padding: '5px 10px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: '0.3s', color: '#1E4C81' }} onMouseOver={(e) => e.currentTarget.style.color = '#F69F1A'} onMouseOut={(e) => e.currentTarget.style.color = '#1E4C81'}><img src="https://flagcdn.com/w20/gb.png" alt="EN" width="20" /> EN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-upper">
            <div className="auto-container">
                <div className="inner-container d-flex align-items-center justify-content-between">
                    <div className="left-column d-flex align-items-center">
                        <div className="nav-outer">
                            <div className="mobile-nav-toggler d-block d-xl-none" onClick={handleMobileMenu}>
                                <img src="assets/images/icons/icon-bar-2.png" alt="" /></div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu/>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="right-column d-flex align-items-center">
                        <div className="header-link-btn"><Link href="" className="btn-1">{t('menu.btn_join') || "Nous Rejoindre"} <span></span></Link></div>
                    </div>
                </div>
            </div>
        </div>
                {/*End Header Upper*/}
                
                <div className="sticky-header">
            <div className="auto-container">
                <div className="inner-container d-flex align-items-center justify-content-between">
                    <div className="left-column d-flex align-items-center">
                        <div className="nav-outer">
                            <div className="mobile-nav-toggler d-block d-xl-none" onClick={handleMobileMenu}>
                                <img src="assets/images/icons/icon-bar-2.png" alt="" /></div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                            <Menu/>
                            </nav>
                        </div>
                    </div>
                    <div className="right-column d-flex align-items-center">
                        <div className="header-link-btn"><Link href="" className="btn-1">{t('menu.btn_join') || "Nous Rejoindre"} <span></span></Link></div>
                    </div>
                </div>
            </div>
        </div>
               {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
