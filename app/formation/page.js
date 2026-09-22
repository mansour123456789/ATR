import Link from "next/link";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Formation & Académie | ATR",
  description: "Programmes de formation continue de l'Association Tunisienne des Routes pour ingénieurs, techniciens et professionnels du BTP.",
  openGraph: {
    title: "Formation & Académie | ATR",
    description: "Découvrez les formats de certification et les ateliers pratiques de l'ATR.",
    images: ["/images/atr-road-design.png"],
    type: "website",
  },
};

const programs = [
  {
    format: "Certification",
    formatClass: "certification",
    icon: "fa-shield-alt",
    title: "Audit de sécurité routière",
    duration: "Cycle de certification",
    audience: "Ingénieurs, cadres publics et professionnels de l'ingénierie routière.",
    prerequisites: "Prérequis : expérience ou formation en infrastructures routières.",
    mode: "Présentiel à Tunis · sessions à confirmer",
    description: "Un parcours structuré autour de l'identification des risques, de l'audit des infrastructures et de l'approche « Vision Zéro décès ». L'évaluation et les modalités d'attestation sont communiquées par le secrétariat lors de l'inscription.",
    href: "/contact?subject=comite",
    cta: "Demander les modalités",
  },
  {
    format: "Atelier",
    formatClass: "workshop",
    icon: "fa-road",
    title: "Dimensionnement des chaussées",
    duration: "Session courte · durée à confirmer",
    audience: "Ingénieurs d'études, techniciens et entreprises de travaux publics.",
    prerequisites: "Prérequis : bases en conception routière et matériaux.",
    mode: "Présentiel ou hybride · date à confirmer",
    description: "Une session pratique consacrée aux méthodes de dimensionnement, à la lecture des données de chaussée et à l'utilisation des référentiels techniques tunisiens.",
    href: "/contact?subject=formation",
    cta: "S'inscrire sur la liste",
  },
  {
    format: "Atelier",
    formatClass: "workshop",
    icon: "fa-leaf",
    title: "Résilience climatique des infrastructures",
    duration: "Atelier technique · durée à confirmer",
    audience: "Décideurs publics, bureaux d'études, ingénieurs et chercheurs.",
    prerequisites: "Prérequis : aucune certification préalable indiquée.",
    mode: "Format et lieu à confirmer",
    description: "Un atelier pour intégrer les risques d'inondation, de chaleur et de glissement dans la conception, la gestion patrimoniale et l'entretien des infrastructures.",
    href: "/contact?subject=formation",
    cta: "Demander le programme",
  },
];

const speakers = [
  ["M. Ahmed Ksentini", "Universitaire, expert en sécurité routière et spécialiste HSS", "fa-shield-alt"],
  ["M. Khaled Sioud", "Ingénieur génie civil, expert HSS et prévention", "fa-hard-hat"],
  ["Mme Eya Soueb", "Sous-directrice au Ministère de l'Équipement et de l'Habitat", "fa-book"],
];

const faqs = [
  ["Comment s'inscrire ?", "Envoyez votre demande via le formulaire Contact en indiquant le programme choisi. Le secrétariat vous transmettra les modalités et la prochaine date confirmée."],
  ["Les formations sont-elles réservées aux membres ?", "Les conditions varient selon le programme. Contactez l'ATR pour connaître les modalités d'accès et les éventuels avantages membres."],
  ["Une attestation est-elle délivrée ?", "Le format Certification prévoit une évaluation et une attestation selon les modalités du cycle. Les ateliers pratiques ne valent pas certification sauf indication contraire."],
];

const styles = `
  .atr-training-page{background:#f5f7fa;color:#17233d}.atr-training-hero{padding:76px 0 72px;background:#fff}.atr-training-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:55px;align-items:center}.atr-training-hero h1{color:#102b54;font-size:46px;line-height:1.12;margin:10px 0 17px}.atr-training-hero p{color:#536175;font-size:18px;line-height:1.7;max-width:630px}.atr-training-hero-media{margin:0;border-radius:18px;overflow:hidden;box-shadow:0 16px 35px rgba(16,43,84,.12)}.atr-training-hero-media img{display:block;width:100%;height:360px;object-fit:cover}.atr-training-hero-media figcaption{padding:12px 16px;background:#fff;color:#68778c;font-size:13px}.atr-training-intro{padding:72px 0 18px}.atr-training-section-heading{margin-bottom:32px}.atr-training-section-heading .section_heading_title_small,.atr-training-hero .section_heading_title_small,.atr-training-cta .section_heading_title_small{color:#C07B1B;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.atr-training-section-heading h2{color:#102b54;font-size:36px;margin:8px 0}.atr-training-section-heading p{color:#536175;line-height:1.7;max-width:700px}.atr-training-formats{display:grid;grid-template-columns:1fr 1fr;gap:22px}.atr-training-format{display:flex;gap:18px;padding:27px;background:#fff;border:1px solid #dfe6ee;border-radius:14px;box-shadow:0 10px 26px rgba(16,43,84,.06)}.atr-training-format i{color:#C07B1B;font-size:26px;margin-top:3px}.atr-training-format h3{color:#102b54;font-size:21px;margin:0 0 8px}.atr-training-format p{color:#536175;line-height:1.65;margin:0}.atr-training-programs{padding:76px 0 88px;border-top:1px solid rgba(192,123,27,.3);margin-top:48px}.atr-training-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.atr-training-card{display:flex;flex-direction:column;background:#fff;border:1px solid #dfe6ee;border-radius:14px;overflow:hidden;box-shadow:0 10px 26px rgba(16,43,84,.07);transition:transform .2s,box-shadow .2s}.atr-training-card:hover{transform:translateY(-5px);box-shadow:0 18px 35px rgba(16,43,84,.14)}.atr-training-card-top{display:flex;align-items:center;justify-content:space-between;padding:24px 24px 15px}.atr-training-card-icon{display:grid;place-items:center;width:43px;height:43px;background:#eef5fb;color:#1B5299;border-radius:9px;font-size:20px}.atr-training-badge{padding:6px 10px;border-radius:999px;font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase}.atr-training-badge.certification{background:#fff0d8;color:#a65e0c}.atr-training-badge.workshop{background:#e4f4ea;color:#267348}.atr-training-card-body{display:flex;flex:1;flex-direction:column;padding:0 24px 25px}.atr-training-card h3{color:#102b54;font-size:23px;line-height:1.25;margin:0 0 14px}.atr-training-card-description{color:#536175;font-size:14px;line-height:1.65;margin:0 0 18px}.atr-training-meta{display:grid;gap:8px;padding:14px 0;border-top:1px solid #e5ebf1;border-bottom:1px solid #e5ebf1;color:#536175;font-size:13px;line-height:1.5}.atr-training-meta strong{color:#102b54}.atr-training-card-footer{display:flex;flex-direction:column;gap:13px;margin-top:auto;padding-top:20px}.atr-training-card-footer a{display:block;padding:12px 15px;background:#1B5299;color:#fff;text-align:center;border-radius:7px;text-decoration:none;font-size:14px;font-weight:800}.atr-training-card-footer a:hover{background:#C07B1B}.atr-training-calendar{padding:42px;background:#102b54;border-radius:14px;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:30px}.atr-training-calendar h2{color:#fff;font-size:27px;margin:0 0 8px}.atr-training-calendar p{color:#d5dfeb;margin:0;line-height:1.6}.atr-training-calendar a,.atr-training-cta a{display:inline-block;white-space:nowrap;padding:12px 18px;background:#C07B1B;color:#fff;border-radius:7px;text-decoration:none;font-weight:800}.atr-training-speakers{padding:78px 0}.atr-training-speaker-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.atr-training-speaker{display:flex;gap:14px;padding:21px;background:#fff;border:1px solid #dfe6ee;border-radius:14px}.atr-training-speaker i{color:#C07B1B;font-size:22px}.atr-training-speaker h3{color:#102b54;font-size:17px;margin:0 0 5px}.atr-training-speaker p{color:#68778c;font-size:13px;line-height:1.5;margin:0}.atr-training-faq{padding:70px 0;background:#eef3f7}.atr-training-faq-list{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.atr-training-faq article{padding:23px;background:#fff;border-radius:12px;border:1px solid #dfe6ee}.atr-training-faq h3{color:#102b54;font-size:18px;margin:0 0 9px}.atr-training-faq p{color:#536175;font-size:14px;line-height:1.65;margin:0}.atr-training-cta{padding:65px 0;background:#fff}.atr-training-cta h2{color:#102b54;font-size:34px;margin:8px 0 12px}.atr-training-cta p{color:#536175;line-height:1.7;max-width:650px;margin-bottom:22px}.atr-training-cta a{margin-right:10px}.atr-training-cta a.secondary{background:#1B5299}@media(max-width:991px){.atr-training-hero-grid{grid-template-columns:1fr;gap:30px}.atr-training-hero-media{order:-1}.atr-training-grid{grid-template-columns:1fr 1fr}.atr-training-speaker-grid,.atr-training-faq-list{grid-template-columns:1fr 1fr}}@media(max-width:767px){.atr-training-hero{padding:48px 0}.atr-training-hero h1{font-size:34px}.atr-training-hero-media img{height:250px}.atr-training-formats,.atr-training-grid,.atr-training-speaker-grid,.atr-training-faq-list{grid-template-columns:1fr}.atr-training-intro,.atr-training-speakers{padding:48px 0}.atr-training-programs{padding:48px 0 55px}.atr-training-section-heading h2{font-size:29px}.atr-training-calendar{display:block;padding:27px}.atr-training-calendar a{margin-top:18px}.atr-training-cta a{display:block;margin:10px 0 0;text-align:center}}
`;

export default function FormationPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Formation & Académie">
      <main className="atr-training-page"><style dangerouslySetInnerHTML={{ __html: styles }} />
        <section className="atr-training-hero"><div className="auto-container atr-training-hero-grid"><div><p className="section_heading_title_small">Académie ATR</p><h1>Développer les compétences qui rendent les routes plus sûres.</h1><p>L'Académie ATR propose des formats de formation continue pour les ingénieurs, techniciens, cadres publics et entreprises du secteur routier. Les dates et modalités sont confirmées par le secrétariat pour chaque session.</p></div><figure className="atr-training-hero-media"><img src="/images/atr-road-design.png" alt="Conception technique d'une infrastructure routière pour la formation ATR" /><figcaption>Visuel technique de conception routière — les sessions de l'Académie privilégient l'application aux projets réels.</figcaption></figure></div></section>
        <section className="atr-training-intro"><div className="auto-container"><div className="atr-training-section-heading"><p className="section_heading_title_small">Deux formats</p><h2>Choisir le bon format d'apprentissage</h2></div><div className="atr-training-formats"><article className="atr-training-format"><i className="fas fa-certificate" aria-hidden="true" /><div><h3>Certifications</h3><p>Un cycle structuré avec progression pédagogique, évaluation et attestation selon le programme. Il s'adresse aux professionnels qui souhaitent formaliser une compétence dans la durée.</p></div></article><article className="atr-training-format"><i className="fas fa-laptop-code" aria-hidden="true" /><div><h3>Ateliers pratiques</h3><p>Une session courte centrée sur un problème métier, des méthodes et des cas concrets. L'atelier favorise la mise en pratique et ne vaut pas certification sauf indication explicite.</p></div></article></div></div></section>
        <section className="atr-training-programs"><div className="auto-container"><div className="atr-training-section-heading"><p className="section_heading_title_small">Programmes phares</p><h2>Des parcours lisibles avant l'inscription</h2><p>Les prochaines dates n'étant pas encore publiées, chaque fiche indique clairement ce qui est confirmé et ce qui doit être demandé au secrétariat.</p></div><div className="atr-training-grid">{programs.map((program) => <article className="atr-training-card" key={program.title}><div className="atr-training-card-top"><span className="atr-training-card-icon"><i className={`fas ${program.icon}`} aria-hidden="true" /></span><span className={`atr-training-badge ${program.formatClass}`}>{program.format}</span></div><div className="atr-training-card-body"><h3>{program.title}</h3><p className="atr-training-card-description">{program.description}</p><div className="atr-training-meta"><span><strong>Durée :</strong> {program.duration}</span><span><strong>Public :</strong> {program.audience}</span><span><strong>{program.prerequisites}</strong></span><span><strong>Modalité :</strong> {program.mode}</span><span><strong>Prochaine session :</strong> à confirmer</span></div><div className="atr-training-card-footer"><Link href={program.href}>{program.cta} <span aria-hidden="true">→</span></Link></div></div></article>)}</div></div></section>
        <section className="auto-container"><div className="atr-training-calendar"><div><h2>Voir les sessions publiées dans l'agenda</h2><p>Les dates confirmées sont centralisées dans le calendrier de l'ATR pour éviter les informations contradictoires.</p></div><Link href="/calendrier">Ouvrir le calendrier →</Link></div></section>
        <section className="atr-training-speakers"><div className="auto-container"><div className="atr-training-section-heading"><p className="section_heading_title_small">Intervenants identifiés</p><h2>Une expertise issue du terrain</h2></div><div className="atr-training-speaker-grid">{speakers.map(([name, role, icon]) => <article className="atr-training-speaker" key={name}><i className={`fas ${icon}`} aria-hidden="true" /><div><h3>{name}</h3><p>{role}</p></div></article>)}</div></div></section>
        <section className="atr-training-faq"><div className="auto-container"><div className="atr-training-section-heading"><p className="section_heading_title_small">Questions fréquentes</p><h2>Avant de vous inscrire</h2></div><div className="atr-training-faq-list">{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></div></section>
        <section className="atr-training-cta"><div className="auto-container"><p className="section_heading_title_small">Prochaine étape</p><h2>Construire votre parcours avec l'ATR</h2><p>Demandez le programme détaillé, les conditions d'accès et les prochaines dates au secrétariat.</p><Link href="/contact?subject=formation">Demander les informations <span aria-hidden="true">→</span></Link><Link href="/calendrier" className="secondary">Voir le calendrier <span aria-hidden="true">→</span></Link></div></section>
      </main>
    </Layout>
  );
}
