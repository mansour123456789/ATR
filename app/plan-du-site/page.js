import Link from "next/link";
import Layout from "@/components/layout/Layout";

export const metadata = { title: "Plan du site | ATR", description: "Plan du site de l'Association Tunisienne des Routes." };

const links = [
  ["Accueil", "/"], ["À propos de l'ATR", "/about-us"], ["Domaines techniques", "/domaines"], ["Actualités", "/actualites"], ["Communiqués de presse", "/communiques"], ["Publications", "/publications"], ["Événements", "/events"], ["Agenda", "/calendrier"], ["Membres", "/team"], ["Contact", "/contact"],
];

export default function SitemapPage() {
  return <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Plan du site"><main className="atr-legal-page"><div className="auto-container"><h1>Plan du site</h1><p>Retrouvez les principales rubriques de l'Association Tunisienne des Routes.</p><div className="atr-sitemap-grid">{links.map(([label, href]) => <Link href={href} key={href}>{label} <span aria-hidden="true">→</span></Link>)}</div></div></main></Layout>;
}
