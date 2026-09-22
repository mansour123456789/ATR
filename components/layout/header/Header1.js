'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { useLanguage } from "@/context/LanguageContext";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    const { language, changeLanguage, t } = useLanguage();

    const getFlagIcon = (lang) => {
        if (lang === 'ar') return "tn";
        if (lang === 'en') return "gb";
        return "fr";
    };

    return (
        <>
            <header dir="ltr" className={`main-header  header-style-one ${scroll ? "fixed-header" : ""}`}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .main-header {
                        position: absolute !important;
                        top: 0;
                        left: 0;
                        width: 100%;
                        z-index: 999;
                        background: transparent !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                    }
                    .main-header.fixed-header {
                        position: fixed !important;
                        background: #ffffff !important;
                        box-shadow: 0 4px 30px rgba(0,0,0,0.08);
                        backdrop-filter: none;
                        border-bottom: none;
                    }
                    @media (min-width: 1201px) {
                        .main-header.fixed-header .header-upper {
                            display: none !important;
                        }
                        .main-header:not(.fixed-header) .sticky-header {
                            display: none !important;
                        }
                    }
                    .main-header:not(.fixed-header) .header-upper {
                        background: transparent !important;
                    }
                    .main-header:not(.fixed-header) .main-menu .navigation > li > a,
                    .main-header:not(.fixed-header) .contact-info-1-phone-tel,
                    .main-header:not(.fixed-header) .contact-info-1-phone-number a,
                    .main-header:not(.fixed-header) .header-language > div,
                    .main-header:not(.fixed-header) .contact-info-1-icon::before {
                        color: rgba(255,255,255,0.9) !important;
                    }
                    .main-header:not(.fixed-header) .main-menu .navigation > li > a:hover {
                        color: #C07B1B !important;
                    }
                    .main-header:not(.fixed-header) .logo img {
                        /* Logo stays colored */
                    }
                    .main-header.fixed-header .logo img {
                        filter: none;
                    }
                    .main-header:not(.fixed-header) .lang-dropdown div {
                        color: #1E4C81 !important;
                    }
                    .main-header .btn-1 {
                        background: #C07B1B !important;
                        color: #fff !important;
                        border-radius: 8px;
                        padding: 10px 24px;
                        font-weight: 600;
                        border: none;
                    }
                    .main-header .btn-1:before,
                    .main-header .btn-1:after {
                        display: none;
                    }
                    .main-header .btn-1:hover {
                        background: #e59320 !important;
                        box-shadow: 0 6px 20px rgba(192,123,27,0.4);
                        transform: translateY(-2px);
                    }
                    .atr-logo-img {
                        height: 100px;
                        width: auto;
                        transition: all 0.3s ease;
                    }
                    .fixed-header .atr-logo-img, .sticky-header .atr-logo-img {
                        height: 80px;
                    }
                    @media (max-width: 1200px) {
                        .atr-logo-img {
                            height: 85px !important;
                        }
                        .main-header {
                            position: absolute !important;
                            background: transparent !important;
                            padding: 5px 0;
                        }
                        .header-upper {
                            padding-top: 5px !important;
                            padding-bottom: 4px !important;
                        }
                        .auto-container, .inner-container, .logo-box, .logo, .left-column, .right-column {
                            padding-top: 0 !important;
                            padding-bottom: 0 !important;
                            margin-top: 0 !important;
                            margin-bottom: 0 !important;
                        }
                        .logo {
                            margin-top: -8px !important;
                            margin-bottom: -8px !important;
                        }
                        .main-header.fixed-header {
                            position: fixed !important;
                            top: 0 !important;
                            z-index: 9999 !important;
                            background: #ffffff !important;
                            backdrop-filter: none;
                            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                        }
                        .sticky-header {
                            display: none !important;
                        }
                        .main-header.fixed-header .header-upper {
                            display: block !important;
                        }
                    }
                ` }} />
                {/* Header Top */}

                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                            <div className="left-column d-flex align-items-center">
                                <div className="logo-box">
                                    <div className="logo"><Link href="/"><img src="/1000007112.png" alt="ATR Logo" className="atr-logo-img" /></Link></div>
                                </div>
                                <div className="ml_60 mr_60 d-none d-xl-block"><img src="assets/images/shape/shape-1.png" alt="" /></div>
                                <div className="nav-outer">
                                    {/* Your navigation component goes here */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <Menu />
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="right-column d-flex align-items-center">
                                <div className="header-language" style={{ marginRight: '40px', position: 'relative' }}
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
                                <div className="contact-info-1 d-flex align-items-center">
                                    <div>
                                        <p className="contact-info-1-phone-tel fs_15 ff_oswald mb_0">NOUS CONTACTER</p>
                                        <h6 className="contact-info-1-phone-number fs_20 fw_medium "><Link href="tel:+21671234567">+216 71 234 567</Link></h6>
                                    </div>
                                </div>
                                <div className="header-link-btn"><Link href="/contact" className="btn-1">{t('menu.btn_join') || "Nous Rejoindre"} <span></span></Link></div>
                                <div className="mobile-nav-toggler d-block d-xl-none" onClick={handleMobileMenu} style={{ marginLeft: '30px', cursor: 'pointer' }}>
                                    <img src="assets/images/icons/icon-bar-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                            <div className="left-column d-flex align-items-center">
                                <div className="logo-box">
                                    <div className="logo"><Link href="/"><img src="/1000007112.png" alt="ATR Logo" className="atr-logo-img" /></Link></div>
                                </div>
                                <div className="ml_60 mr_60 d-none d-xl-block"><img src="assets/images/shape/shape-1.png" alt="" /></div>
                                <div className="nav-outer">
                                    {/* Your navigation component goes here */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <Menu />
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="right-column d-flex align-items-center">
                                <div className="header-language" style={{ marginRight: '40px', position: 'relative' }}
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
                                <div className="contact-info-1 d-flex align-items-center">
                                    <div>
                                        <p className="contact-info-1-phone-tel fs_15 ff_oswald mb_0">NOUS CONTACTER</p>
                                        <h6 className="contact-info-1-phone-number fs_20 fw_medium "><Link href="tel:+21671234567">+216 71 234 567</Link></h6>
                                    </div>
                                </div>
                                <div className="header-link-btn"><Link href="/contact" className="btn-1">{t('menu.btn_join') || "Nous Rejoindre"} <span></span></Link></div>
                                <div className="mobile-nav-toggler d-block d-xl-none" onClick={handleMobileMenu} style={{ marginLeft: '30px', cursor: 'pointer' }}>
                                    <img src="assets/images/icons/icon-bar-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
