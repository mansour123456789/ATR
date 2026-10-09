'use client'
import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { institutionalFacts } from "@/data/institutional";
import { useLanguage } from "@/context/LanguageContext";

function ExternalArrow({ external, isRtl }) {
  if (external) return <span aria-hidden="true">{isRtl ? " ↖" : " ↗"}</span>;
  return <span aria-hidden="true">{isRtl ? " ←" : " →"}</span>;
}

export default function AboutUsPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    const pageTitle = t('breadcrumb.about', "À propos de l'ATR");
    document.title = `${pageTitle} | ATR - Association Tunisienne des Routes`;
  }, [language, t]);

  const pillars = [
    { icon: "fa-heartbeat", title: t('about.pillar1_title', "Protection de la vie humaine"), text: t('about.pillar1_text', "Réduire les risques pour les usagers, les agents et les équipes de chantier.") },
    { icon: "fa-certificate", title: t('about.pillar2_title', "Standards HSS et ISO"), text: t('about.pillar2_text', "Diffuser des pratiques de santé, sécurité et qualité compatibles avec les référentiels internationaux.") },
    { icon: "fa-road", title: t('about.pillar3_title', "Route qui pardonne"), text: t('about.pillar3_text', "Concevoir des infrastructures qui limitent les conséquences de l'erreur humaine.") },
  ];

  const activities = [
    { icon: "fa-users", title: t('about.activity1_title', "Congrès national, séminaires et journées techniques"), text: t('about.activity1_text', "Réunir les acteurs publics, privés et universitaires autour des enjeux techniques du réseau routier."), href: "/events" },
    { icon: "fa-project-diagram", title: t('about.activity2_title', "Comités techniques"), text: t('about.activity2_text', "Organiser le travail d'expertise sur la conception, la sécurité, les ouvrages et la résilience."), href: "/domaines" },
    { icon: "fa-book-open", title: t('about.activity3_title', "Guides et publications"), text: t('about.activity3_text', "Mettre à disposition des ressources techniques et des retours d'expérience pour les professionnels."), href: "/publications" },
    { icon: "fa-globe-africa", title: t('about.activity4_title', "Coopération avec PIARC"), text: t('about.activity4_text', "Relier les experts tunisiens aux travaux de l'Association mondiale de la Route, fondée en 1909."), href: language === 'en' ? "https://www.piarc.org/en/" : "https://www.piarc.org/fr/", external: true },
  ];

  const committees = [
    [t('about.ct1_code', "CT.1"), t('about.ct1_title', "Gouvernance et résilience"), t('about.ct1_text', "Gestion patrimoniale, adaptation climatique et continuité des services.")],
    [t('about.ct2_code', "CT.2"), t('about.ct2_title', "Mobilité durable et systèmes intelligents"), t('about.ct2_text', "Données, mobilité connectée, décarbonation des corridors et intermodalité.")],
    [t('about.ct3_code', "CT.3"), t('about.ct3_title', "Sécurité routière et usagers"), t('about.ct3_text', "Audits de sécurité, traitement des points noirs et prévention du risque routier.")],
    [t('about.ct4_code', "CT.4"), t('about.ct4_title', "Infrastructures et matériaux"), t('about.ct4_text', "Dimensionnement, auscultation, entretien des ouvrages et matériaux recyclés.")],
  ];

  const colleges = [
    [t('about.college1_title', "Ministère"), t('about.college1_text', "Cadres publics et représentants de l'administration routière.")],
    [t('about.college2_title', "Entreprises de BTP"), t('about.college2_text', "Entreprises de travaux publics et acteurs de la réalisation.")],
    [t('about.college3_title', "Bureaux d'études"), t('about.college3_text', "Compétences de conception, d'ingénierie et d'assistance technique.")],
    [t('about.college4_title', "Laboratoires et universités"), t('about.college4_text', "Recherche appliquée, essais, formation et transfert de connaissances.")],
  ];

  const audiences = [
    t('about.audiences.0', "Cadres publics"),
    t('about.audiences.1', "Ingénieurs"),
    t('about.audiences.2', "Entreprises de BTP"),
    t('about.audiences.3', "Universitaires"),
    t('about.audiences.4', "Experts"),
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.about', "À propos de l'ATR")}>
      <main className="atr-about-page">
        <section className="atr-about-intro section-padding">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb_30">
                <p className="section_heading_title_small">{t('about.kicker', "Repère institutionnel")}</p>
                <h2 className="section_heading_title_big">{t('about.title', "Une organisation technique au service de la route tunisienne.")}</h2>
                <p className="atr-about-lead">{t('about.lead', `Créée en ${institutionalFacts.foundingYear}, l'Association Tunisienne des Routes fédère les cadres publics, ingénieurs, entreprises de BTP, universitaires et experts autour de l'innovation technique, de la qualité et de la sécurité des infrastructures.`)}</p>
                <p className="atr-about-body">{t('about.body', `L'ATR est présidée par ${institutionalFacts.president}, ${institutionalFacts.presidentRole}. Elle travaille en lien avec le Ministère de l'Équipement et de l'Habitat et représente la Tunisie auprès de PIARC.`)}</p>
              </div>
              <div className="col-lg-6 mb_30">
                <figure className="atr-about-figure">
                  <img src="/home.jpg" alt={t('about.caption1', "Association Tunisienne des Routes")} width="600" height="400" />
                  <figcaption>{t('about.caption1', "Association Tunisienne des Routes — visuel institutionnel de l'ATR.")}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="atr-about-section atr-about-history">
          <div className="auto-container">
            <div className="atr-about-section-heading">
              <p className="section_heading_title_small">{t('about.history_kicker', "Notre histoire")}</p>
              <h2>{t('about.history_title', "Une trajectoire ancrée dans l'échange technique")}</h2>
            </div>
            <div className="atr-about-timeline">
              <article>
                <strong>{t('about.history_2_year', institutionalFacts.piarcFoundedYear || "1909")}</strong>
                <h3>{t('about.history_2_title', "Repère international")}</h3>
                <p>{t('about.history_2_text', "PIARC, partenaire international de l'ATR, est fondée comme Association mondiale de la Route.")}</p>
              </article>
              <article>
                <strong>{t('about.history_1_year', institutionalFacts.foundingYear || "2018")}</strong>
                <h3>{t('about.history_1_title', "Création de l'ATR")}</h3>
                <p>{t('about.history_1_text', "Naissance de l'association tunisienne dédiée aux échanges scientifiques et professionnels sur les routes.")}</p>
              </article>
              <article>
                <strong>{t('about.history_3_year', "Aujourd'hui")}</strong>
                <h3>{t('about.history_3_title', "Un réseau national")}</h3>
                <p>{t('about.history_3_text', "L'ATR rapproche administration, BTP, ingénierie, laboratoires et universités autour de projets concrets.")}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="atr-about-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-5 mb_30">
                <p className="section_heading_title_small">{t('about.mission_kicker', "Notre mission")}</p>
                <h2>{t('about.mission_title', "Fédérer les compétences qui font la route.")}</h2>
              </div>
              <div className="col-lg-7 mb_30">
                <p className="atr-about-body">{t('about.mission_body', "L'ATR crée un cadre de dialogue entre les acteurs qui conçoivent, construisent, entretiennent et étudient les infrastructures routières. Elle favorise le partage de méthodes, l'application des normes de qualité et la transformation de la recherche en solutions opérationnelles.")}</p>
                <div className="atr-about-audience">
                  {audiences.map((aud, idx) => <span key={idx}>{aud}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="atr-about-section atr-about-hss">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-5 mb_30">
                <p className="section_heading_title_small">{t('about.hss_kicker', "Vision & engagement HSS")}</p>
                <h2>{t('about.hss_title', "La route doit pardonner.")}</h2>
                <p className="atr-about-body">{t('about.hss_body', "L'approche « Vision Zéro décès » place la protection de la vie humaine au cœur des choix de conception, d'exploitation et de prévention.")}</p>
              </div>
              <div className="col-lg-7">
                <div className="atr-about-pillars">
                  {pillars.map((pillar) => (
                    <article key={pillar.title}>
                      <i className={`fas ${pillar.icon}`} aria-hidden="true" />
                      <div>
                        <h3>{pillar.title}</h3>
                        <p>{pillar.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="atr-about-section">
          <div className="auto-container">
            <div className="atr-about-section-heading">
              <p className="section_heading_title_small">{t('about.activities_kicker', "Ce que nous faisons")}</p>
              <h2>{t('about.activities_title', "Nos activités principales")}</h2>
            </div>
            <div className="atr-about-activity-grid">
              {activities.map((activity) => (
                <article key={activity.title}>
                  <i className={`fas ${activity.icon}`} aria-hidden="true" />
                  <h3>{activity.title}</h3>
                  <p>{activity.text}</p>
                  <Link href={activity.href} target={activity.external ? "_blank" : undefined} rel={activity.external ? "noreferrer" : undefined}>
                    {t('common.readAbout', "En savoir plus")}<ExternalArrow external={activity.external} isRtl={isRtl} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atr-about-section atr-about-committees">
          <div className="auto-container">
            <div className="atr-about-section-heading">
              <p className="section_heading_title_small">{t('about.committees_kicker', "Expertise collective")}</p>
              <h2>{t('about.committees_title', "Axes techniques et comités")}</h2>
            </div>
            <div className="atr-about-committee-grid">
              {committees.map(([code, title, text]) => (
                <article key={code}>
                  <span>{code}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atr-about-section">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb_30">
                <figure className="atr-about-figure">
                  <img src="/images/atr_seminar.png" alt={t('about.caption2', "Séminaire technique de l'ATR")} width="600" height="400" />
                  <figcaption>{t('about.caption2', "Séminaire technique de l'ATR — échange entre professionnels de la route.")}</figcaption>
                </figure>
              </div>
              <div className="col-lg-6 mb_30">
                <p className="section_heading_title_small">{t('about.governance_kicker', "Gouvernance & réseau")}</p>
                <h2>{t('about.governance_title', "Une gouvernance ouverte aux collèges du secteur.")}</h2>
                <p className="atr-about-body">{t('about.governance_body', "Le Comité Directeur rassemble les principales familles de compétences nécessaires à une politique routière documentée et applicable.")}</p>
                <div className="atr-about-colleges">
                  {colleges.map(([title, text]) => (
                    <div key={title}>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <p className="atr-about-body atr-about-piarc">{t('about.piarc_note', "PIARC permet aux membres tunisiens d'accéder à des travaux internationaux, de comparer les pratiques et de contribuer aux échanges de l'Association mondiale de la Route.")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="atr-about-join">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('about.join_kicker', "Participer au réseau")}</p>
            <h2>{t('about.join_title', "Nous rejoindre")}</h2>
            <p>{t('about.join_text', "Pour connaître les modalités d'adhésion et les activités ouvertes aux professionnels, contactez l'ATR.")}</p>
            <Link href="/contact" className="btn-1">{t('about.join_btn', "Demander les informations d'adhésion")} <span aria-hidden="true">{isRtl ? '←' : '→'}</span></Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
