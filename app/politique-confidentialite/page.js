import Link from "next/link";
import Layout from "@/components/layout/Layout";

export const metadata = { title: "Politique de confidentialité | ATR", description: "Politique de confidentialité du site de l'Association Tunisienne des Routes." };

export default function PrivacyPage() {
  return <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Politique de confidentialité"><main className="atr-legal-page"><div className="auto-container"><h1>Politique de confidentialité</h1><p>L'ATR limite la collecte de données aux informations nécessaires au traitement des demandes envoyées via ses formulaires de contact.</p><h2>Données de contact</h2><p>Les informations transmises par email ou formulaire sont utilisées uniquement pour répondre à votre demande et ne sont pas cédées à des tiers.</p><h2>Vos droits</h2><p>Pour toute question relative à vos données, contactez l'ATR à <a href="mailto:contact@atr.org.tn">contact@atr.org.tn</a>.</p><p className="atr-legal-back"><Link href="/">Retour à l'accueil</Link></p></div></main></Layout>;
}
