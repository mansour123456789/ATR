'use client'
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}><span className="fas fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/1000007112.png" alt="ATR Logo" style={{ height: "80px", width: "auto" }} />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li><Link href="/" onClick={handleMobileMenu}>Accueil</Link></li>
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="/about-us">Découvrir l'ATR</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                    <li><Link href="/about-us" onClick={handleMobileMenu}>Qui sommes-nous ?</Link></li>
                    <li className={isActive.subMenuKey == 2 ? "dropdown current" : "dropdown"}>
                      <Link href="/#">Notre Organisation</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 2 ? "block" : "none"}` }}>
                        <li><Link href="/team" onClick={handleMobileMenu}>Comité Directeur</Link></li>
                        <li><Link href="/secretariat" onClick={handleMobileMenu}>Secrétariat Général</Link></li>
                        <li><Link href="/domaines" onClick={handleMobileMenu}>Comités Techniques</Link></li>
                      </ul>
                      <div className={isActive.subMenuKey == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1, 2)}><span className="fa fa-angle-right" /></div>
                    </li>
                    <li className={isActive.subMenuKey == 3 ? "dropdown current" : "dropdown"}>
                      <Link href="/#">Nos Membres</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 3 ? "block" : "none"}` }}>
                        <li><Link href="/membres" onClick={handleMobileMenu}>Répertoire des membres</Link></li>
                        <li><Link href="/contact" onClick={handleMobileMenu}>Devenir membre</Link></li>
                      </ul>
                      <div className={isActive.subMenuKey == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1, 3)}><span className="fa fa-angle-right" /></div>
                    </li>
                    <li><Link href="/strategie" onClick={handleMobileMenu}>Plan Stratégique</Link></li>
                  </ul>
                  <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>


                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}>
                  <Link href="/#">Nos Activités</Link>
                  <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                    <li className={isActive.subMenuKey == 6 ? "dropdown current" : "dropdown"}>
                      <Link href="/#">Événements</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 6 ? "block" : "none"}` }}>
                        <li><Link href="/events/seminaire-piarc-2026" onClick={handleMobileMenu}>Séminaire PIARC 2026</Link></li>
                        <li><Link href="/events" onClick={handleMobileMenu}>Congrès National</Link></li>
                      </ul>
                      <div className={isActive.subMenuKey == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5, 6)}><span className="fa fa-angle-right" /></div>
                    </li>
                    <li><Link href="/publications" onClick={handleMobileMenu}>Publications</Link></li>
                    <li><Link href="/formation" onClick={handleMobileMenu}>Formation</Link></li>
                    <li><Link href="/ressources" onClick={handleMobileMenu}>Ressources</Link></li>
                  </ul>
                  <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                </li>

                <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}>
                  <Link href="/#">Actualités</Link>
                  <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                    <li><Link href="/publications" onClick={handleMobileMenu}>Actualités</Link></li>
                    <li><Link href="/events" onClick={handleMobileMenu}>Agenda</Link></li>
                  </ul>
                  <div className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}><span className="fa fa-angle-right" /></div>
                </li>

                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact ATR</h4>
            <ul>
                <li>Bureau 102, Imm. El Wifak, Centre Urbain Nord, Tunis</li>
                <li><Link href="tel:+21671234567">+216 71 234 567</Link></li>
                <li><Link href="mailto:contact@atr.org.tn">contact@atr.org.tn</Link></li>
            </ul>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href="/#"><span className="fab fa-linkedin-in" /></Link></li>
              <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
            </ul>
          </div>
        </nav>
      </div>{/* End Mobile Menu */}
      <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
    </>
  );
};

