'use client'
import { useMemo, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';

export default function ActualitesPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    all: { label: t('actualites.filter_all', 'Tout'), color: '#1B5299' },
    announcement: { label: t('actualites.filter_announcement', 'Annonce'), color: '#1B5299' },
    application: { label: t('actualites.filter_application', 'Appel à candidature'), color: '#C07B1B' },
    life: { label: t('actualites.filter_life', "Vie de l'association"), color: '#7A4E9A' },
    event: { label: t('actualites.filter_event', 'Événement'), color: '#2E8B57' },
  };

  const news = [
    {
      id: 1,
      category: 'event',
      date: '03 Juin 2026',
      title: 'SAVE THE DATE ! Journée Technique : Glissements de Terrain – Gestion des Risques et Stabilité des Ouvrages',
      lead: "À l’ère d’intensification de l’effet des changements climatiques, des épisodes pluvieux extrêmes, de l’urbanisation croissante et de la complexité géotechnique de certains sites, les glissements de terrain représentent aujourd’hui un défi majeur pour la sécurité des populations et la résilience des infrastructures. Ces phénomènes engendrent des risques humains, techniques et économiques importants, nécessitant des approches innovantes en matière de prévention, de surveillance et de stabilisation des ouvrages.",
      summary: "Pour mieux comprendre et analyser ces enjeux, l’Association Tunisienne des Routes (ATR) et l’Association Tunisienne de Mécanique des Sols (ATMS), en partenariat avec le Ministère de l’Équipement et de l’Habitat, collaborent pour organiser une Journée Technique exceptionnelle.",
      location: {
        name: 'El Mouradi Gammarth, Tunis',
        url: 'https://maps.app.goo.gl/x3vxkK9zHRUUipYD7'
      },
      highlights: [
        'Risques géotechniques et analyse cinématique',
        'Techniques de stabilisation et confortement des versants',
        'Monitoring et auscultation en temps réel',
        'Solutions innovantes pour des infrastructures plus résilientes'
      ],
      fees: [
        { label: 'Tarif réservé Adhérents (ATR) et (ATMS) à jour de cotisation 2026', price: '200 DT' },
        { label: 'Tarif réservé aux professionnels', price: '250 DT' },
        { label: 'Tarif Étudiants', price: '150 DT' }
      ],
      note: "Experts nationaux et internationaux, conférences techniques, études de cas, retours d’expérience et table ronde seront au rendez-vous. Réservez dès maintenant cette date dans vos agendas !",
      href: '/publications/glissements-de-terrain-resilience-infrastructures',
      linkLabel: 'Consulter le compte-rendu & retour en images',
    },
    {
      id: 2,
      category: 'event',
      date: '30 avril 2026',
      title: 'Rencontre ATR sur les enjeux HSS et la sécurité routière',
      summary: 'À la Cité des Sciences de Tunis, les échanges ont porté sur la responsabilité humaine, la sécurité des chantiers et le concept de route qui pardonne.',
      href: '/publications/securite-routiere-hss-chantiers',
      linkLabel: t('actualites.read_publication', 'Lire la publication'),
    },
    {
      id: 3,
      category: 'announcement',
      date: '6 août 2025',
      title: 'Le nouveau bureau de l’ATR reçu par le ministre de l’Équipement',
      summary: 'Une audience officielle a réuni le nouveau bureau exécutif de l’ATR, le ministère de l\'Équipement et des représentants de PIARC.',
      href: '/publications/ministre-equipement-accueille-bureau-atr',
      linkLabel: t('actualites.read_report', 'Lire le compte-rendu'),
    },
    {
      id: 4,
      category: 'event',
      date: 'Décembre 2026',
      title: 'Le Séminaire international des Comités Techniques PIARC est annoncé à Tunis',
      summary: 'L’ATR et PIARC préparent un séminaire consacré aux pratiques et aux enjeux contemporains de la route.',
      href: '/events/seminaire-piarc-2026',
      linkLabel: t('actualites.see_seminar', 'Voir le séminaire'),
    },
  ];

  const visibleNews = useMemo(() => activeCategory === 'all' ? news : news.filter((item) => item.category === activeCategory), [activeCategory]);

  const styles = `
    .atr-news-page{background:#F8FAFC;color:#17233D;padding-bottom:85px}
    .atr-news-intro{padding:80px 0 55px;background:#FFFFFF}
    .atr-news-intro h1{color:#102B54;font-size:clamp(32px,4.5vw,42px);line-height:1.2;margin:8px 0 16px;font-weight:700}
    .atr-news-intro p{color:#334155;font-size:17px;line-height:1.72;max-width:720px}
    .atr-news-intro .section_heading_title_small,.atr-news-section .section_heading_title_small,.atr-news-crosslink .section_heading_title_small{color:#C07B1B;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
    .atr-news-section{padding:70px 0 40px;border-top:1px solid rgba(192,123,27,.25)}
    .atr-news-filters{display:flex;gap:10px;flex-wrap:wrap;margin:24px 0 36px}
    .atr-news-filter{border:1px solid #DFE6EE;border-radius:999px;background:#FFFFFF;color:#1B5299;padding:9px 18px;font:inherit;font-size:14px;font-weight:700;cursor:pointer;transition:all .25s ease}
    .atr-news-filter:hover{border-color:#1B5299;background:#EEF5FB}
    .atr-news-filter.active{background:#102B54;border-color:#102B54;color:#FFFFFF}
    .atr-news-timeline{position:relative;max-width:880px;padding-left:150px}
    .atr-news-timeline:before{content:'';position:absolute;left:118px;top:0;bottom:0;width:2px;background:#E2B56D}
    .atr-news-item{position:relative;padding:0 0 40px}
    .atr-news-item:before{content:'';position:absolute;left:-37px;top:4px;width:12px;height:12px;border:3px solid #FFFFFF;border-radius:50%;background:#C07B1B;box-shadow:0 0 0 2px #C07B1B}
    .atr-news-date{position:absolute;left:-150px;top:0;width:105px;color:#475569;font-size:13.5px;font-weight:700;line-height:1.4;text-align:right}
    .atr-news-entry{background:#FFFFFF;border:1px solid #DFE6EE;border-radius:16px;padding:28px 32px;box-shadow:0 8px 22px rgba(16,43,84,.06);transition:transform .25s ease,box-shadow .25s ease}
    .atr-news-entry:hover{transform:translateY(-3px);box-shadow:0 16px 32px rgba(16,43,84,.10)}
    .atr-news-category{display:inline-block;padding:5px 12px;border-radius:999px;color:#FFFFFF;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.05em}
    .atr-news-entry h2{color:#102B54;font-size:21px;line-height:1.35;margin:14px 0 10px;font-weight:700}
    .atr-news-entry p{color:#334155;line-height:1.68;margin:0 0 12px;font-size:15px}
    .atr-news-lead-box{background:#F0F6FF;border-left:4px solid #1B5299;border-radius:10px;padding:16px 20px;margin:16px 0;font-size:14.5px;color:#0F2A4A;line-height:1.7}
    .atr-news-location{display:inline-flex;align-items:center;gap:8px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:8px 14px;margin:10px 0 16px;font-size:14px;color:#1E293B}
    .atr-news-location a{color:#1B5299;font-weight:600;text-decoration:none}
    .atr-news-location a:hover{text-decoration:underline;color:#C07B1B}
    .atr-news-topics-title{font-size:14px;font-weight:700;color:#0F172A;margin:14px 0 8px}
    .atr-news-topics-list{list-style:none;padding:0;margin:0 0 16px;display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:8px}
    .atr-news-topics-list li{display:flex;align-items:flex-start;gap:8px;font-size:13.5px;color:#475569;background:#F8FAFC;border:1px solid #F1F5F9;padding:8px 12px;border-radius:8px}
    .atr-news-topics-bullet{color:#C07B1B;font-weight:bold}
    .atr-news-fees-box{background:#FEF9F0;border:1px solid rgba(192,123,27,0.25);border-radius:12px;padding:16px 20px;margin:16px 0}
    .atr-news-fees-title{font-size:14px;font-weight:700;color:#C07B1B;margin-bottom:8px;display:flex;align-items:center;gap:6px}
    .atr-news-fees-list{list-style:none;padding:0;margin:0}
    .atr-news-fees-list li{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px dashed rgba(192,123,27,0.2);font-size:13.5px;color:#334155}
    .atr-news-fees-list li:last-child{border-bottom:none}
    .atr-news-fee-badge{font-weight:700;color:#C07B1B;background:rgba(192,123,27,0.1);padding:3px 10px;border-radius:6px}
    .atr-news-note{font-size:13.5px;font-style:italic;color:#475569;margin:12px 0}
    .atr-news-link{display:inline-flex;align-items:center;gap:6px;margin-top:14px;padding:10px 18px;background:#1B5299;color:#FFFFFF !important;border-radius:8px;font-size:13.5px;font-weight:700;text-decoration:none !important;transition:all .25s ease}
    .atr-news-link:hover{background:#123e75;transform:translateY(-2px);color:#FFFFFF !important}
    .atr-news-link-simple{display:inline-block;margin-top:12px;color:#1B5299;font-size:14px;font-weight:700;text-decoration:none;transition:color .25s ease}
    .atr-news-link-simple:hover{color:#C07B1B}
    .atr-news-empty{padding:28px;background:#FFFFFF;border:1px solid #DFE6EE;border-radius:14px;color:#334155;font-size:15px}
    .atr-news-crosslink{margin-top:55px;padding:42px 48px;background:#102B54;color:#FFFFFF;border-radius:16px;box-shadow:0 12px 32px rgba(16,43,84,.15)}
    .atr-news-crosslink h2{color:#FFFFFF;font-size:clamp(22px,2.8vw,28px);margin:8px 0 10px;font-weight:700}
    .atr-news-crosslink p{color:#E2E8F0;line-height:1.68;margin:0 0 18px;font-size:15.5px}
    .atr-news-crosslink a{display:inline-block;padding:12px 22px;border-radius:10px;background:#C07B1B;color:#FFFFFF;font-weight:700;font-size:14.5px;text-decoration:none;transition:all .3s ease}
    .atr-news-crosslink a:hover{background:#D98E28;transform:translateY(-2px)}
    @media(max-width:767px){.atr-news-intro{padding:52px 0 35px}.atr-news-intro h1{font-size:32px}.atr-news-section{padding:48px 0 25px}.atr-news-timeline{padding-left:28px}.atr-news-timeline:before{left:5px}.atr-news-item:before{left:-26px}.atr-news-date{position:static;width:auto;text-align:left;margin-bottom:9px}.atr-news-entry{padding:20px}.atr-news-entry h2{font-size:18px}}
  `;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.news', "Actualités")}>
      <main className="atr-news-page">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <section className="atr-news-intro">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('actualites.kicker', "Vie de l'ATR")}</p>
            <h1>{t('actualites.title', "Actualités")}</h1>
            <p>{t('actualites.intro', "Brèves et annonces de l’ATR, mises à jour régulièrement. Cette page suit la vie institutionnelle et les rendez-vous de l’association ; les comptes-rendus détaillés et revues de presse sont regroupés dans Publications.")}</p>
          </div>
        </section>

        <section className="atr-news-section">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('actualites.section_kicker', "Fil chronologique")}</p>
            <h2>{t('actualites.section_title', "Les dernières nouvelles")}</h2>
            
            <div className="atr-news-filters" role="tablist" aria-label="Filtrer les actualités">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  className={`atr-news-filter ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {visibleNews.length ? (
              <div className="atr-news-timeline">
                {visibleNews.map((item) => (
                  <article className="atr-news-item" key={item.id}>
                    <time className="atr-news-date">{item.date}</time>
                    <div className="atr-news-entry">
                      <span className="atr-news-category" style={{ background: categories[item.category].color }}>
                        {categories[item.category].label}
                      </span>
                      <h2>{item.title}</h2>

                      {item.lead && (
                        <div className="atr-news-lead-box">
                          {item.lead}
                        </div>
                      )}

                      <p>{item.summary}</p>

                      {item.location && (
                        <div className="atr-news-location">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C07B1B" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          <span>Lieu : </span>
                          <a href={item.location.url} target="_blank" rel="noopener noreferrer">
                            <strong>{item.location.name}</strong> 📍 (Voir sur Google Maps ↗)
                          </a>
                        </div>
                      )}

                      {item.highlights && item.highlights.length > 0 && (
                        <div>
                          <div className="atr-news-topics-title">Une occasion unique d'échanger autour de :</div>
                          <ul className="atr-news-topics-list">
                            {item.highlights.map((topic, idx) => (
                              <li key={idx}>
                                <span className="atr-news-topics-bullet">•</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.fees && item.fees.length > 0 && (
                        <div className="atr-news-fees-box">
                          <div className="atr-news-fees-title">
                            💳 Frais d’inscription :
                          </div>
                          <ul className="atr-news-fees-list">
                            {item.fees.map((fee, idx) => (
                              <li key={idx}>
                                <span>{fee.label}</span>
                                <span className="atr-news-fee-badge">{fee.price}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.note && (
                        <p className="atr-news-note">{item.note}</p>
                      )}

                      {item.href && (
                        item.fees ? (
                          <Link href={item.href} className="atr-news-link">
                            <span>{item.linkLabel}</span>
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <Link href={item.href} className="atr-news-link-simple">
                            {item.linkLabel} <span aria-hidden="true">→</span>
                          </Link>
                        )
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="atr-news-empty">{t('actualites.empty', "Aucune actualité publiée dans cette catégorie pour le moment.")}</p>
            )}

            <div className="atr-news-crosslink">
              <p className="section_heading_title_small">{t('actualites.cta_kicker', "Pour aller plus loin")}</p>
              <h2>{t('actualites.cta_title', "Vous cherchez nos contenus détaillés ?")}</h2>
              <p>{t('actualites.cta_text', "Consultez les comptes-rendus de rencontres et les revues de presse vérifiés de l’ATR.")}</p>
              <Link href="/publications">{t('actualites.cta_btn', "Consulter les Publications →")}</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
