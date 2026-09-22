import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { institutionalFacts } from "@/data/institutional";

export const metadata = {
  title: "À propos de l'ATR | Association Tunisienne des Routes",
  description: `Histoire, mission, gouvernance et activités de l'Association Tunisienne des Routes, créée en ${institutionalFacts.foundingYear}.`,
  openGraph: {
  title: "À propos de l'ATR | Association Tunisienne des Routes",
    description: "Découvrez l'histoire, la mission et le réseau institutionnel de l'ATR.",
    type: "article",
    images: ["/images/bizerte_bridge.png"],
  },
};

const pillars = [
  { icon: "fa-heartbeat", title: "Protection de la vie humaine", text: "Réduire les risques pour les usagers, les agents et les équipes de chantier." },
  { icon: "fa-certificate", title: "Standards HSS et ISO", text: "Diffuser des pratiques de santé, sécurité et qualité compatibles avec les référentiels internationaux." },
  { icon: "fa-road", title: "Route qui pardonne", text: "Concevoir des infrastructures qui limitent les conséquences de l'erreur humaine." },
];

const activities = [
  { icon: "fa-users", title: "Congrès National de la Route", text: "Réunir les acteurs publics, privés et universitaires autour des enjeux techniques du réseau routier.", href: "/events" },
  { icon: "fa-project-diagram", title: "Comités techniques", text: "Organiser le travail d'expertise sur la conception, la sécurité, les ouvrages et la résilience.", href: "/domaines" },
  { icon: "fa-book-open", title: "Guides et publications", text: "Mettre à disposition des ressources techniques et des retours d'expérience pour les professionnels.", href: "/publications" },
  { icon: "fa-globe-africa", title: "Coopération avec PIARC", text: "Relier les experts tunisiens aux travaux de l'Association mondiale de la Route, fondée en 1909.", href: "https://www.piarc.org/fr/", external: true },
];

const committees = [
  ["CT.1", "Gouvernance et résilience", "Gestion patrimoniale, adaptation climatique et continuité des services."],
  ["CT.2", "Mobilité durable et systèmes intelligents", "Données, mobilité connectée, décarbonation des corridors et intermodalité."],
  ["CT.3", "Sécurité routière et usagers", "Audits de sécurité, traitement des points noirs et prévention du risque routier."],
  ["CT.4", "Infrastructures et matériaux", "Dimensionnement, auscultation, entretien des ouvrages et matériaux recyclés."],
];

const colleges = [
  ["Ministère", "Cadres publics et représentants de l'administration routière."],
  ["Entreprises de BTP", "Entreprises de travaux publics et acteurs de la réalisation."],
  ["Bureaux d'études", "Compétences de conception, d'ingénierie et d'assistance technique."],
  ["Laboratoires et universités", "Recherche appliquée, essais, formation et transfert de connaissances."],
];

const publications = [
  ["06 août 2025", "Le ministre de l'Équipement accueille le nouveau bureau de l'ATR", "/publications/ministre-equipement-accueille-bureau-atr"],
  ["30 avril 2026", "Sécurité routière et HSS sur les chantiers", "/publications/securite-routiere-hss-chantiers"],
  ["06 juin 2026", "Glissements de terrain et résilience des infrastructures", "/publications/glissements-de-terrain-resilience-infrastructures"],
];

function ExternalArrow({ external }) {
  return <span aria-hidden="true">{external ? " ↗" : " →"}</span>;
}

export default function AboutUsPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="À propos de l'ATR">
      <main className="atr-about-page">
        <section className="atr-about-intro section-padding">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb_30">
                <p className="section_heading_title_small">Repère institutionnel</p>
                <h2 className="section_heading_title_big">Une organisation technique au service de la route tunisienne.</h2>
                <p className="atr-about-lead">Créée en <strong>{institutionalFacts.foundingYear}</strong>, l'Association Tunisienne des Routes fédère les cadres publics, ingénieurs, entreprises de BTP, universitaires et experts autour de l'innovation technique, de la qualité et de la sécurité des infrastructures.</p>
                <p className="atr-about-body">L'ATR est présidée par <strong>{institutionalFacts.president}</strong>, {institutionalFacts.presidentRole}. Elle travaille en lien avec le Ministère de l'Équipement et de l'Habitat et représente la Tunisie auprès de PIARC.</p>
              </div>
              <div className="col-lg-6 mb_30">
                <figure className="atr-about-figure">
                  <img src="/images/bizerte_bridge.png" alt="Ouvrage routier et pont de Bizerte en Tunisie" />
                  <figcaption>Ouvrage routier de Bizerte — visuel institutionnel de l'ATR.</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="atr-about-section atr-about-history">
          <div className="auto-container">
            <div className="atr-about-section-heading"><p className="section_heading_title_small">Notre histoire</p><h2>Une trajectoire ancrée dans l'échange technique</h2></div>
            <div className="atr-about-timeline">
              <article><strong>{institutionalFacts.foundingYear}</strong><h3>Création de l'ATR</h3><p>Naissance de l'association tunisienne dédiée aux échanges scientifiques et professionnels sur les routes.</p></article>
              <article><strong>{institutionalFacts.piarcFoundedYear}</strong><h3>Repère international</h3><p>PIARC, partenaire international de l'ATR, est fondée comme Association mondiale de la Route.</p></article>
              <article><strong>Aujourd'hui</strong><h3>Un réseau national</h3><p>L'ATR rapproche administration, BTP, ingénierie, laboratoires et universités autour de projets concrets.</p></article>
            </div>
          </div>
        </section>

        <section className="atr-about-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-5 mb_30"><p className="section_heading_title_small">Notre mission</p><h2>Fédérer les compétences qui font la route.</h2></div>
              <div className="col-lg-7 mb_30"><p className="atr-about-body">L'ATR crée un cadre de dialogue entre les acteurs qui conçoivent, construisent, entretiennent et étudient les infrastructures routières. Elle favorise le partage de méthodes, l'application des normes de qualité et la transformation de la recherche en solutions opérationnelles.</p><div className="atr-about-audience"><span>Cadres publics</span><span>Ingénieurs</span><span>Entreprises de BTP</span><span>Universitaires</span><span>Experts</span></div></div>
            </div>
          </div>
        </section>

        <section className="atr-about-section atr-about-hss">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-5 mb_30"><p className="section_heading_title_small">Vision & engagement HSS</p><h2>La route doit pardonner.</h2><p className="atr-about-body">L'approche « Vision Zéro décès » place la protection de la vie humaine au cœur des choix de conception, d'exploitation et de prévention.</p></div>
              <div className="col-lg-7"><div className="atr-about-pillars">{pillars.map((pillar) => <article key={pillar.title}><i className={`fas ${pillar.icon}`} aria-hidden="true" /><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div></article>)}</div></div>
            </div>
          </div>
        </section>

        <section className="atr-about-section">
          <div className="auto-container">
            <div className="atr-about-section-heading"><p className="section_heading_title_small">Ce que nous faisons</p><h2>Nos activités principales</h2></div>
            <div className="atr-about-activity-grid">{activities.map((activity) => <article key={activity.title}><i className={`fas ${activity.icon}`} aria-hidden="true" /><h3>{activity.title}</h3><p>{activity.text}</p><Link href={activity.href} target={activity.external ? "_blank" : undefined} rel={activity.external ? "noreferrer" : undefined}>En savoir plus<ExternalArrow external={activity.external} /></Link></article>)}</div>
          </div>
        </section>

        <section className="atr-about-section atr-about-committees">
          <div className="auto-container"><div className="atr-about-section-heading"><p className="section_heading_title_small">Expertise collective</p><h2>Axes techniques et comités</h2></div><div className="atr-about-committee-grid">{committees.map(([code, title, text]) => <article key={code}><span>{code}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </section>

        <section className="atr-about-section">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb_30"><figure className="atr-about-figure"><img src="/images/atr_seminar.png" alt="Participants réunis lors d'un séminaire technique de l'ATR" /><figcaption>Séminaire technique de l'ATR — échange entre professionnels de la route.</figcaption></figure></div>
              <div className="col-lg-6 mb_30"><p className="section_heading_title_small">Gouvernance & réseau</p><h2>Une gouvernance ouverte aux collèges du secteur.</h2><p className="atr-about-body">Le Comité Directeur rassemble les principales familles de compétences nécessaires à une politique routière documentée et applicable.</p><div className="atr-about-colleges">{colleges.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}</div><p className="atr-about-body atr-about-piarc"><strong>PIARC</strong> permet aux membres tunisiens d'accéder à des travaux internationaux, de comparer les pratiques et de contribuer aux échanges de l'Association mondiale de la Route.</p></div>
            </div>
          </div>
        </section>

        <section className="atr-about-section atr-about-publications"><div className="auto-container"><div className="atr-about-section-heading"><p className="section_heading_title_small">Documentation</p><h2>Publications récentes</h2></div><div className="atr-about-publication-list">{publications.map(([date, title, href]) => <article key={href}><time>{date}</time><h3>{title}</h3><Link href={href}>Lire la publication <ExternalArrow /></Link></article>)}</div></div></section>

        <section className="atr-about-join"><div className="auto-container"><p className="section_heading_title_small">Participer au réseau</p><h2>Nous rejoindre</h2><p>Pour connaître les modalités d'adhésion et les activités ouvertes aux professionnels, contactez l'ATR.</p><Link href="/contact" className="btn-1">Demander les informations d'adhésion <span aria-hidden="true">→</span></Link></div></section>
      </main>
    </Layout>
  );
}
