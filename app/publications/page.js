'use client'
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import PublicationCard from "@/components/publications/PublicationCard";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PublicationsPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    const pageTitle = t('breadcrumb.publications', "Publications & Actualités");
    document.title = `${pageTitle} | ATR - Association Tunisienne des Routes`;
  }, [language, t]);

  const publications = [
    {
      badge: t('publications.pub1_badge', "Compte-rendu"),
      date: t('publications.pub1_date', "30 avril 2026"),
      location: t('publications.pub1_location', "Cité des Sciences, Tunis"),
      source: t('publications.pub1_source', "L'Observatoire Économique"),
      title: t('publications.pub1_title', "Zéro décès : l'ATR relève le défi HSS d'une \"route qui pardonne\""),
      summary: t('publications.pub1_summary', "Le 30 avril 2026 à la Cité des Sciences, l'ATR a consacré une rencontre aux enjeux HSS et à la sécurité routière sur les chantiers, réunissant cadres du ministère de l'Équipement, ingénieurs et experts autour de la responsabilité humaine et du concept de route qui pardonne."),
      image: "/1000007112.png",
      alt: t('publications.pub1_alt', "Logo de l'Association Tunisienne des Routes (ATR)"),
      href: "/publications/securite-routiere-hss-chantiers",
    },
    {
      badge: t('publications.pub2_badge', "Revue de presse"),
      date: t('publications.pub2_date', "6 août 2025"),
      location: t('publications.pub2_location', "Ministère de l'Équipement et de l'Habitat"),
      source: t('publications.pub2_source', "La Presse de Tunisie"),
      title: t('publications.pub2_title', "Le ministre de l'Équipement accueille le nouveau bureau de l'Association tunisienne des routes"),
      summary: t('publications.pub2_summary', "Ce lundi matin, M. Salah Zouari, ministre de l'Équipement et de l'Habitat, a reçu les membres du nouveau bureau exécutif de l'ATR présidée par Mme Lilia Sifaoui, en présence de représentants de PIARC."),
      image: "/atrr.jpg",
      alt: t('publications.pub2_alt', "Le ministre de l'Équipement lors de l'accueil du nouveau bureau de l'ATR"),
      href: "/publications/ministre-equipement-accueille-bureau-atr",
    },
    {
      badge: t('publications.pub3_badge', "Compte-rendu technique"),
      date: t('publications.pub3_date', "03 juin 2026"),
      location: t('publications.pub3_location', "Hôtel El Mouradi Gammarth, Tunis"),
      source: t('publications.pub3_source', "ATR, ATMS & Ministère de l'Équipement"),
      title: t('publications.pub3_title', "Glissements de terrain, résilience des infrastructures et gestion des risques naturels"),
      summary: t('publications.pub3_summary', "Retour en images sur la journée technique organisée à l'Hôtel El Mouradi Gammarth en présence de M. le Ministre de l'Équipement et de l'Habitat, réunissant plus de 120 experts autour des risques géotechniques et de la stabilité des ouvrages."),
      image: "/716310905_1300568632262137_7434795582044664526_n.jpg",
      alt: t('publications.pub3_alt', "Journée technique ATR & ATMS à l'Hôtel El Mouradi Gammarth"),
      href: "/publications/glissements-de-terrain-resilience-infrastructures",
    },
  ];

  const styles = `
    .atr-publications-page { background: #F8FAFC; color: #17233D; }
    .atr-publications-intro { padding: 80px 0 60px; background: #FFFFFF; }
    .atr-publications-intro h1 { max-width: 760px; color: #102B54; font-size: clamp(32px, 4.5vw, 42px); line-height: 1.2; margin: 8px 0 16px; font-weight: 700; }
    .atr-publications-intro p:not(.section_heading_title_small) { max-width: 720px; color: #334155; font-size: 17px; line-height: 1.72; margin: 0; }
    .atr-publications-intro .section_heading_title_small, .atr-publications-section .section_heading_title_small { color: #C07B1B; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
    .atr-publications-section { padding: 64px 0 95px; }
    .atr-publications-section h2 { color: #102B54; font-size: clamp(26px, 3.2vw, 34px); margin: 8px 0 12px; font-weight: 700; }
    .atr-publications-count { color: #475569; margin-bottom: 28px; font-size: 15px; font-weight: 500; }
    .atr-publications-grid { display: grid; gap: 28px; }
    .atr-publications-note { padding: 45px 0; background: #102B54; color: #FFFFFF; }
    .atr-publications-note h2 { color: #FFFFFF; font-size: 28px; margin: 0 0 10px; font-weight: 700; }
    .atr-publications-note p { color: #E2E8F0; line-height: 1.7; max-width: 760px; margin: 0; font-size: 15.5px; }
    .atr-publications-cta { padding: 64px 0; background: #102B54; color: #FFFFFF; }
    .atr-publications-cta .section_heading_title_small { color: #C07B1B; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
    .atr-publications-cta h2 { max-width: 650px; color: #FFFFFF; font-size: clamp(24px, 3vw, 32px); line-height: 1.25; margin: 8px 0 12px; font-weight: 700; }
    .atr-publications-cta p:not(.section_heading_title_small) { max-width: 650px; color: #E2E8F0; line-height: 1.7; margin-bottom: 22px; font-size: 15.5px; }
    @media (max-width: 767px) { .atr-publications-intro { padding: 52px 0 38px; } .atr-publications-intro h1 { font-size: 32px; } .atr-publications-section { padding: 42px 0 65px; } }
  `;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.publications', "Publications & Actualités")}>
      <main className="atr-publications-page">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <section className="atr-publications-intro">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('publications.kicker', "Documentation ATR")}</p>
            <h1>{t('publications.title', "Publications & Actualités")}</h1>
            <p>{t('publications.intro', "Cette page rassemble les comptes-rendus de rencontres et les revues de presse consacrés à l'ATR. Les guides techniques téléchargeables ne sont pas encore publiés ici : seules les publications documentées sont présentées.")}</p>
          </div>
        </section>
        <section className="atr-publications-section">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('publications.section_kicker', "Contenus vérifiés")}</p>
            <h2>{t('publications.section_title', "Les publications disponibles")}</h2>
            <p className="atr-publications-count">{t('publications.count', "Publications documentées · pages de détail · sources externes accessibles")}</p>
            <div className="atr-publications-grid">
              {publications.map((publication) => (
                <PublicationCard {...publication} key={publication.href} />
              ))}
            </div>
          </div>
        </section>
        <section className="atr-publications-cta">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('publications.cta_kicker', "Échanges professionnels")}</p>
            <h2>{t('publications.cta_title', "Vous souhaitez suivre les prochaines rencontres de l'ATR ?")}</h2>
            <p>{t('publications.cta_text', "Contactez le secrétariat pour recevoir les informations disponibles sur les événements, les comités et les futures publications.")}</p>
            <Link href="/contact" className="publication-card-cta">{t('publications.cta_btn', isRtl ? "اتصل بنا ←" : "Nous contacter →")}</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
