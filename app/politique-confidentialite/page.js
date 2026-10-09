import Layout from "@/components/layout/Layout";
import PolitiqueConfidentialiteContent from "@/components/legal/PolitiqueConfidentialiteContent";

export const metadata = {
  title: "Politique de Confidentialité | ATR - Association Tunisienne des Routes",
  description: "Politique de confidentialité, protection des données personnelles (Loi n° 2004-63 et RGPD) et gestion des cookies de l'Association Tunisienne des Routes (ATR).",
  alternates: {
    canonical: "https://atr-tunisie.org/politique-confidentialite",
  },
  openGraph: {
    title: "Politique de Confidentialité | ATR - Association Tunisienne des Routes",
    description: "Engagements de protection des données et respect de la vie privée de l'Association Tunisienne des Routes (ATR).",
    url: "https://atr-tunisie.org/politique-confidentialite",
    siteName: "ATR - Association Tunisienne des Routes",
    images: ["/1000007112.png"],
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Politique de confidentialité" titleKey="footer.privacy">
      <PolitiqueConfidentialiteContent />
    </Layout>
  );
}
