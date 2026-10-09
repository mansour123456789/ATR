'use client'
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const externalLinks = [
  ["PIARC", "https://www.piarc.org/fr/"],
  ["Ministère de l'Équipement et de l'Habitat", "http://www.equipement.tn/"],
];

function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Footer1() {
  const { t } = useLanguage();

  return (
    <footer className="atr-footer">
      <div className="atr-footer-road-mark" aria-hidden="true" />
      <div className="atr-footer-main">
        <div className="auto-container">
          <div className="atr-footer-grid">
            <section className="atr-footer-identity">
              <Link href="/" className="atr-footer-logo" aria-label="ATR - Association Tunisienne des Routes, accueil">
                <img src="/1000007112.png" alt="ATR - Association Tunisienne des Routes" title="ATR - Association Tunisienne des Routes" />
              </Link>
              <p>{t('footer.tagline', 'Fédérer les compétences routières tunisiennes autour de la sécurité, de la qualité et du partage technique.')}</p>
            </section>

            <nav className="atr-footer-column" aria-label="Navigation du pied de page">
              <h2>{t('footer.nav_title', 'Navigation')}</h2>
              <Link href="/about-us">{t('menu.discover_atr', "Découvrir l'ATR")}</Link>
              <Link href="/domaines">{t('menu.technical_domains', 'Domaines Techniques')}</Link>
              <Link href="/publications">{t('footer.publications', 'Publications')}</Link>
              <Link href="/calendrier">{t('menu.agenda', 'Agenda')}</Link>
              <Link href="/contact">{t('footer.become_member', 'Devenir membre')}</Link>
              <Link href="/plan-du-site">{t('footer.sitemap', 'Plan du site')}</Link>
            </nav>

            <nav className="atr-footer-column" aria-label="Ressources et partenaires">
              <h2>{t('footer.resources_title', 'Ressources')}</h2>
              {externalLinks.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <span aria-hidden="true">↗</span></a>)}
              <Link href="/mentions-legales">{t('footer.legal', 'Mentions légales')}</Link>
              <Link href="/politique-confidentialite">{t('footer.privacy', 'Politique de confidentialité')}</Link>
            </nav>

            <section className="atr-footer-column atr-footer-contact">
              <h2>{t('footer.contact_title', 'Contact')}</h2>
              <address>
                <p><span aria-hidden="true">⌖</span> {t('footer.address', "App n°2, 2ème étage, bloc « B » du complexe immobilier Espace Tunis Montplaisir, rue 8002, Tunis 1002")}</p>
                <p><span aria-hidden="true">@</span> <a href="mailto:contact@atr-tunisie.org">contact@atr-tunisie.org</a></p>
              </address>
              <Link href="/contact" className="atr-footer-join">{t('footer.join_link', 'Nous rejoindre')} <span aria-hidden="true">→</span></Link>
            </section>
          </div>

          {/* SECTION RÉSEAUX SOCIAUX (REMPLACE LES PARTENAIRES INSTITUTIONNELS) */}
          <div className="atr-footer-partners atr-footer-social-bar" aria-label="Réseaux sociaux">
            <span>{t('footer.social_title', 'Réseaux Sociaux')}</span>
            <a 
              href="https://www.facebook.com/atroutes" 
              target="_blank" 
              rel="noreferrer" 
              className="atr-footer-social-link atr-footer-social-fb"
              title="Page Facebook officielle de l’ATR"
            >
              <span className="atr-footer-social-icon"><IconFacebook /></span>
              <strong>Facebook</strong>
              <small>atroutes ↗</small>
            </a>
            <a 
              href="https://www.linkedin.com/company/association-tunisienne-des-routes/" 
              target="_blank" 
              rel="noreferrer" 
              className="atr-footer-social-link atr-footer-social-li"
              title="Page LinkedIn officielle de l’Association Tunisienne des Routes"
            >
              <span className="atr-footer-social-icon"><IconLinkedIn /></span>
              <strong>LinkedIn</strong>
              <small>Association Tunisienne des Routes ↗</small>
            </a>
          </div>

          <div className="atr-footer-bottom">
            <span>© {new Date().getFullYear()} {t('footer.copyright', 'Association Tunisienne des Routes')}</span>
            <span className="atr-footer-legal"><Link href="/mentions-legales">{t('footer.legal', 'Mentions légales')}</Link><Link href="/politique-confidentialite">{t('footer.privacy', 'Confidentialité')}</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
