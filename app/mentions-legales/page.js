import Layout from "@/components/layout/Layout";
import MentionsLegalesContent from "@/components/legal/MentionsLegalesContent";

export const metadata = {
  title: "Mentions Légales | ATR - Association Tunisienne des Routes",
  description: "Mentions légales, éditeur officiel, hébergement sécurisé, statut juridique et propriété intellectuelle de l'Association Tunisienne des Routes (ATR).",
  alternates: {
    canonical: "https://atr-tunisie.org/mentions-legales",
  },
  openGraph: {
    title: "Mentions Légales | ATR - Association Tunisienne des Routes",
    description: "Mentions légales et informations réglementaires officielles de l'Association Tunisienne des Routes (ATR).",
    url: "https://atr-tunisie.org/mentions-legales",
    siteName: "ATR - Association Tunisienne des Routes",
    images: ["/1000007112.png"],
    type: "website",
  },
};

export default function MentionsLegalesPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Mentions légales" titleKey="footer.legal">
      <MentionsLegalesContent />
    </Layout>
  );
}
