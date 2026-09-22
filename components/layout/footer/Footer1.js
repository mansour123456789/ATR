import Link from "next/link";

const externalLinks = [
  ["PIARC", "https://www.piarc.org/fr/"],
  ["Ministère de l'Équipement et de l'Habitat", "http://www.equipement.tn/"],
];

export default function Footer1() {
  return (
    <footer className="atr-footer">
      <div className="atr-footer-road-mark" aria-hidden="true" />
      <div className="atr-footer-main">
        <div className="auto-container">
          <div className="atr-footer-grid">
            <section className="atr-footer-identity">
              <Link href="/" className="atr-footer-logo" aria-label="ATR, accueil">
                <img src="/1000007112.png" alt="Association Tunisienne des Routes" />
              </Link>
              <p>Fédérer les compétences routières tunisiennes autour de la sécurité, de la qualité et du partage technique.</p>
            </section>

            <nav className="atr-footer-column" aria-label="Navigation du pied de page">
              <h2>Navigation</h2>
              <Link href="/about-us">Découvrir l'ATR</Link>
              <Link href="/domaines">Domaines Techniques</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/calendrier">Agenda</Link>
              <Link href="/contact">Devenir membre</Link>
              <Link href="/plan-du-site">Plan du site</Link>
            </nav>

            <nav className="atr-footer-column" aria-label="Ressources et partenaires">
              <h2>Ressources</h2>
              {externalLinks.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <span aria-hidden="true">↗</span></a>)}
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/politique-confidentialite">Politique de confidentialité</Link>
            </nav>

            <section className="atr-footer-column atr-footer-contact">
              <h2>Contact</h2>
              <address>
                <p><span aria-hidden="true">⌖</span> Bureau 102, Imm. El Wifak,<br />Centre Urbain Nord, Tunis</p>
                <p><span aria-hidden="true">✆</span> <a href="tel:+21671234567">+216 71 234 567</a></p>
                <p><span aria-hidden="true">@</span> <a href="mailto:contact@atr.org.tn">contact@atr.org.tn</a></p>
              </address>
              <Link href="/contact" className="atr-footer-join">Nous rejoindre <span aria-hidden="true">→</span></Link>
            </section>
          </div>

          <div className="atr-footer-partners" aria-label="Partenaires institutionnels">
            <span>Partenaires institutionnels</span>
            <a href="https://www.piarc.org/fr/" target="_blank" rel="noreferrer"><strong>PIARC</strong><small>Association mondiale de la Route ↗</small></a>
            <a href="http://www.equipement.tn/" target="_blank" rel="noreferrer"><strong>MEHAT</strong><small>Ministère de l'Équipement ↗</small></a>
          </div>

          <div className="atr-footer-bottom">
            <span>© {new Date().getFullYear()} Association Tunisienne des Routes</span>
            <span className="atr-footer-legal"><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-confidentialite">Confidentialité</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
