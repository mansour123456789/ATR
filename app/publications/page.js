import Layout from "@/components/layout/Layout";
import PublicationCard from "@/components/publications/PublicationCard";
import Link from "next/link";

export const metadata = {
  title: "Publications & Actualités | ATR",
  description: "Comptes-rendus et revues de presse documentant les activités de l'Association Tunisienne des Routes.",
  openGraph: {
    title: "Publications & Actualités | ATR",
    description: "Les publications vérifiées de l'Association Tunisienne des Routes.",
    type: "website",
    images: ["/images/atr-event.png"],
  },
};

const publications = [
  {
    badge: "Compte-rendu",
    date: "30 avril 2026",
    location: "Cité des Sciences, Tunis",
    source: "L'Obs Éco",
    title: "Rencontre ATR : Enjeux HSS et Sécurité Routière sur les Chantiers",
    summary: "Une rencontre consacrée aux enjeux HSS, à la sécurité routière sur les chantiers et à la responsabilité humaine dans les projets d'infrastructure.",
    image: "/images/atr-event.png",
    alt: "Participants à la rencontre ATR sur la sécurité routière et les enjeux HSS",
    href: "/publications/securite-routiere-hss-chantiers",
  },
  {
    badge: "Revue de presse",
    date: "6 août 2025",
    location: "Ministère de l'Équipement et de l'Habitat",
    source: "La Presse de Tunisie",
    title: "Le ministre de l'Équipement accueille le nouveau bureau de l'Association tunisienne des routes",
    summary: "Une audience officielle consacrée au nouveau bureau exécutif de l'ATR, à la coopération avec le ministère et au lien avec PIARC.",
    image: "/images/ministre-bureau-atr.png",
    alt: "Le ministre de l'Équipement lors de l'accueil du nouveau bureau de l'ATR",
    href: "/publications/ministre-equipement-accueille-bureau-atr",
  },
];

const styles = `
  .atr-publications-page { background: #f5f7fa; color: #17233d; }
  .atr-publications-intro { padding: 82px 0 55px; background: #fff; }
  .atr-publications-intro h1 { max-width: 760px; color: #102b54; font-size: 44px; line-height: 1.15; margin: 9px 0 15px; }
  .atr-publications-intro p:not(.section_heading_title_small) { max-width: 720px; color: #536175; font-size: 18px; line-height: 1.7; margin: 0; }
  .atr-publications-intro .section_heading_title_small, .atr-publications-section .section_heading_title_small { color: #bd7417; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  .atr-publications-section { padding: 58px 0 95px; }
  .atr-publications-section h2 { color: #102b54; font-size: 34px; margin: 8px 0 12px; }
  .atr-publications-count { color: #66758a; margin-bottom: 28px; }
  .atr-publications-grid { display: grid; gap: 26px; }
  .atr-publications-note { padding: 45px 0; background: #102b54; color: #fff; }
  .atr-publications-note h2 { color: #fff; font-size: 28px; margin: 0 0 10px; }
  .atr-publications-note p { color: #d5dfeb; line-height: 1.7; max-width: 760px; margin: 0; }
  .atr-publications-cta { padding: 64px 0; background: #102b54; color: #fff; }
  .atr-publications-cta .section_heading_title_small { color: #F69F1A; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  .atr-publications-cta h2 { max-width: 650px; color: #fff; font-size: 32px; line-height: 1.25; margin: 8px 0 12px; }
  .atr-publications-cta p:not(.section_heading_title_small) { max-width: 650px; color: #d5dfeb; line-height: 1.7; margin-bottom: 22px; }
  @media (max-width: 767px) { .atr-publications-intro { padding: 55px 0 38px; } .atr-publications-intro h1 { font-size: 32px; } .atr-publications-section { padding: 42px 0 65px; } }
`;

export default function PublicationsPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Publications & Actualités">
      <main className="atr-publications-page">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <section className="atr-publications-intro">
          <div className="auto-container">
            <p className="section_heading_title_small">Documentation ATR</p>
            <h1>Publications & Actualités</h1>
            <p>Cette page rassemble les comptes-rendus de rencontres et les revues de presse consacrés à l'ATR. Les guides techniques téléchargeables ne sont pas encore publiés ici : seules les deux publications documentées sont présentées.</p>
          </div>
        </section>
        <section className="atr-publications-section">
          <div className="auto-container">
            <p className="section_heading_title_small">Contenus vérifiés</p>
            <h2>Les publications disponibles</h2>
            <p className="atr-publications-count">2 publications · 2 pages de détail · sources externes accessibles</p>
            <div className="atr-publications-grid">
              {publications.map((publication) => <PublicationCard {...publication} key={publication.href} />)}
            </div>
          </div>
        </section>
        <section className="atr-publications-cta">
          <div className="auto-container">
            <p className="section_heading_title_small">Échanges professionnels</p>
            <h2>Vous souhaitez suivre les prochaines rencontres de l'ATR ?</h2>
            <p>Contactez le secrétariat pour recevoir les informations disponibles sur les événements, les comités et les futures publications.</p>
            <Link href="/contact" className="publication-card-cta">Nous contacter <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
