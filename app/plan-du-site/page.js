import Link from "next/link";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Plan du site | ATR - Association Tunisienne des Routes",
  description: "Plan du site et arborescence des rubriques de l'Association Tunisienne des Routes (ATR).",
  alternates: {
    canonical: "https://atr-tunisie.org/plan-du-site",
  },
};

const links = [
  ["Accueil", "/"],
  ["À propos de l'ATR", "/about-us"],
  ["Domaines techniques", "/domaines"],
  ["Actualités", "/actualites"],
  ["Communiqués de presse", "/communiques"],
  ["Publications", "/publications"],
  ["Événements", "/events"],
  ["Séminaire PIARC 2026", "/events/seminaire-piarc-2026"],
  ["Calendrier & Agenda", "/calendrier"],
  ["Formation & Académie", "/formation"],
  ["Comité & Équipe", "/team"],
  ["Contact & Adhésion", "/contact"],
  ["Mentions légales", "/mentions-legales"],
  ["Politique de confidentialité", "/politique-confidentialite"],
];

export default function SitemapPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Plan du site" titleKey="footer.sitemap">
      <main className="atr-legal-page">
        <div className="auto-container">
          <header className="atr-legal-header-box">
            <div className="atr-legal-badge-top">
              <span aria-hidden="true">🗺️</span> Arborescence du portail
            </div>
            <h1>Plan du site</h1>
            <p className="atr-legal-lead">Retrouvez l’ensemble des rubriques, publications et services de l’Association Tunisienne des Routes (ATR).</p>
          </header>
          <div className="atr-sitemap-grid">
            {links.map(([label, href]) => (
              <Link href={href} key={href}>
                {label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
