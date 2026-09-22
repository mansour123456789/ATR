import Link from "next/link";
import Layout from "@/components/layout/Layout";

export const metadata = { title: "Mentions légales | ATR", description: "Mentions légales du site de l'Association Tunisienne des Routes." };

export default function MentionsLegalesPage() {
  return <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Mentions légales"><main className="atr-legal-page"><div className="auto-container"><h1>Mentions légales</h1><p>Ce site est édité par l'Association Tunisienne des Routes (ATR), association professionnelle et scientifique tunisienne.</p><h2>Éditeur</h2><p>Association Tunisienne des Routes<br />Bureau 102, Imm. El Wifak<br />Centre Urbain Nord, Tunis<br /><a href="mailto:contact@atr.org.tn">contact@atr.org.tn</a></p><h2>Contact</h2><p><a href="tel:+21671234567">+216 71 234 567</a></p><p className="atr-legal-back"><Link href="/">Retour à l'accueil</Link></p></div></main></Layout>;
}
