'use client'
import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import PublicationCard from '@/components/publications/PublicationCard'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap');

  .atr-article-page {
    padding: 80px 0 120px;
    background: #F8FAFC;
  }

  .atr-article-page .auto-container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 15% !important;
    padding-right: 15% !important;
    box-sizing: border-box !important;
  }
  @media (max-width: 991px) {
    .atr-article-page .auto-container {
      padding-left: 6% !important;
      padding-right: 6% !important;
    }
  }

  .atr-article-card {
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid rgba(27, 82, 153, 0.08);
    box-shadow: 0 10px 35px rgba(15, 23, 42, 0.04);
    overflow: hidden;
    padding: 45px 50px;
  }
  @media (max-width: 767px) {
    .atr-article-card {
      padding: 26px 20px;
    }
  }

  .atr-article-badge {
    display: inline-block;
    font-family: 'Inter', sans-serif !important;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #C07B1B;
    background: rgba(192, 123, 27, 0.08);
    border: 1px solid rgba(192, 123, 27, 0.2);
    padding: 6px 16px;
    border-radius: 50px;
    margin-bottom: 20px;
  }

  .atr-article-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: clamp(28px, 3.5vw, 42px);
    font-weight: 700;
    color: #0F172A;
    line-height: 1.25;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .atr-article-meta-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding-bottom: 25px;
    margin-bottom: 35px;
    border-bottom: 1px solid #E2E8F0;
    font-family: 'Inter', sans-serif !important;
    font-size: 14px;
    color: #64748B;
  }

  .atr-meta-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .atr-meta-item strong {
    color: #0F172A;
  }

  .atr-article-hero-img {
    width: 100%;
    height: 420px;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 40px;
    position: relative;
    box-shadow: 0 15px 35px rgba(27, 82, 153, 0.1);
  }
  @media (max-width: 767px) {
    .atr-article-hero-img {
      height: 240px;
    }
  }

  .atr-article-hero-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .atr-article-content {
    font-family: 'Inter', sans-serif !important;
    font-size: 16.5px;
    line-height: 1.85;
    color: #1E293B;
  }

  .atr-article-lead {
    font-size: 18.5px;
    line-height: 1.8;
    color: #0F2A4A;
    font-weight: 500;
    background: #F0F6FF;
    padding: 24px 30px;
    border-radius: 16px;
    border-left: 5px solid #1B5299;
    margin-bottom: 35px;
  }

  .atr-speaker-block {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-left: 4px solid #C07B1B;
    border-radius: 14px;
    padding: 22px 26px;
    margin: 30px 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  }

  .atr-speaker-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .atr-speaker-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #1B5299;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
  }

  .atr-speaker-name {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 17px;
    font-weight: 700;
    color: #0F172A;
    margin: 0;
  }

  .atr-speaker-title {
    font-size: 13px;
    color: #64748B;
    margin: 0;
  }

  .atr-quote-callout {
    background: linear-gradient(135deg, #0F2A4A 0%, #1B5299 100%);
    color: #ffffff;
    border-radius: 18px;
    padding: 30px 35px;
    margin: 35px 0;
    position: relative;
  }

  .atr-quote-callout p {
    font-size: 18px;
    font-style: italic;
    line-height: 1.7;
    margin-bottom: 10px;
    color: #ffffff !important;
  }

  .atr-quote-callout cite {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #FDE68A;
  }

  .atr-article-h3 {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 22px;
    font-weight: 700;
    color: #0F172A;
    margin: 35px 0 16px;
  }

  .atr-sidebar-card {
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid rgba(27, 82, 153, 0.08);
    padding: 30px;
    box-shadow: 0 5px 20px rgba(15, 23, 42, 0.03);
    margin-bottom: 30px;
  }

  .atr-sidebar-title {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 18px;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #E2E8F0;
  }
`

export default function ArticleHSS() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Publication Technique">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="atr-article-page">
        <div className="auto-container">
          <div className="row">
            {/* Main Article Content (8 cols) */}
            <div className="col-lg-8 col-md-12">
              <PublicationCard
                className="publication-card--detail"
                badge="Compte-rendu"
                date="30 avril 2026"
                location="Cité des Sciences, Tunis"
                source="L'Obs Éco"
                title="Rencontre ATR : Enjeux HSS et Sécurité Routière sur les Chantiers"
                summary="Une rencontre consacrée aux enjeux HSS, à la sécurité routière sur les chantiers et à la responsabilité humaine dans les projets d'infrastructure."
                image="/images/atr-event.png"
                alt="Participants à la rencontre ATR sur la sécurité routière et les enjeux HSS"
                href="/publications/securite-routiere-hss-chantiers"
              />
              <article className="atr-article-card">
                <div className="atr-article-content">
                  {/* Paragraphe d'introduction fourni par l'utilisateur */}
                  <div className="atr-article-lead">
                    Le 30 avril 2026, l’Association Tunisienne des Routes (ATR) a consacré une rencontre aux enjeux HSS et à la sécurité routière sur les chantiers, réunissant dès 13h30 à la Cité des Sciences cadres du ministère de l’Équipement et de l’Habitat, ingénieurs, responsables HSE, universitaires, étudiants et professionnels du secteur.
                  </div>

                  <p>
                    Très vite, les échanges ont dépassé le cadre purement technique : derrière les normes, les procédures et les infrastructures, c’est la question de la responsabilité humaine qui s’est imposée au cœur du débat.
                  </p>

                  {/* Intervenant 1 : Lilia Sifaoui */}
                  <div className="atr-speaker-block">
                    <div className="atr-speaker-header">
                      <div className="atr-speaker-avatar">LS</div>
                      <div>
                        <h4 className="atr-speaker-name">Lilia Sifaoui</h4>
                        <p className="atr-speaker-title">Présidente de l’Association Tunisienne des Routes (ATR) & Directrice Générale de l’unité de gestion du nouveau pont de Bizerte</p>
                      </div>
                    </div>
                    <p className="mb-0">
                      Le mot d’ouverture a été assuré par Lilia Sifaoui. Présentant l’ATR, créée en 2018, elle a rappelé le travail mené par l’association en étroite collaboration avec le Ministère de l’Équipement et de l’Habitat autour des enjeux liés aux infrastructures et à la sécurité routière. Elle a également salué l’engagement constant du ministère en faveur de ces mêmes priorités.
                    </p>
                  </div>

                  <p>
                    Au fil des interventions, le <strong>HSS (Health, Safety and Security)</strong> s’est imposé comme une composante désormais incontournable dans la conduite des grands projets d’infrastructure.
                  </p>

                  <p>
                    Plusieurs intervenants ont insisté sur la nécessité de dépasser une perception encore répandue selon laquelle les exigences de sécurité freineraient l’avancement des travaux ou pèseraient sur la rentabilité des projets. À l’inverse, la maîtrise des standards HSS apparaît aujourd’hui comme un indicateur de crédibilité, de gouvernance et de performance pour les entreprises comme pour les institutions publiques.
                  </p>

                  {/* Intervenant 2 : Eya Soueb */}
                  <div className="atr-speaker-block">
                    <div className="atr-speaker-header">
                      <div className="atr-speaker-avatar">ES</div>
                      <div>
                        <h4 className="atr-speaker-name">Eya Soueb</h4>
                        <p className="atr-speaker-title">Sous-directrice au Ministère de l’Équipement et de l’Habitat & Membre de l’ATR</p>
                      </div>
                    </div>
                    <p>
                      Intervenant à son tour, Eya Soueb est revenue sur les normes ISO ainsi que sur les défis liés à leur application sur le terrain. Elle a rappelé qu’aucune politique de prévention ne pouvait produire de résultats sans une coordination réelle entre promoteurs, entreprises et autorités publiques.
                    </p>
                    <p className="mb-0">
                      À ce stade, il a été question d’échanger avec l’audience sur le fait que les bailleurs de fonds exigent la conformité aux normes internationales de sécurité routière et sur les chantiers, comme conditions pour investir dans les projets. Car le vrai problème des bailleurs de fonds est le souci de protéger et éviter le risque de toucher à leurs réputations. Lors de cette intervention, Eya Soueb a exposé aussi les problèmes des retards de décaissement, et sur le fait de recruter afin de former. En effet, elle a insisté sur l’importance de la sensibilisation continue de l’ensemble des acteurs du secteur, anciens comme nouveaux.
                    </p>
                  </div>

                  <p>
                    Dans une salle particulièrement attentive, les discussions ont ensuite quitté le terrain des référentiels techniques pour aborder une réalité plus lourde : celle des drames humains provoqués par les défaillances en matière de sécurité.
                  </p>

                  {/* Intervenant 3 : Ahmed Ksentini */}
                  <div className="atr-speaker-block">
                    <div className="atr-speaker-header">
                      <div className="atr-speaker-avatar">AK</div>
                      <div>
                        <h4 className="atr-speaker-name">Ahmed Ksentini</h4>
                        <p className="atr-speaker-title">Expert en sécurité routière et universitaire</p>
                      </div>
                    </div>
                    <p>
                      L’intervention de Ahmed Ksentini a marqué l’assistance par son ton direct et profondément humain. Évoquant les morts sur les routes comme un véritable fléau, il a regretté que ces décès soient encore perçus comme une fatalité.
                    </p>
                    <div className="atr-quote-callout">
                      <p>« Quand on veut, on peut. L'objectif du "zéro décès" ne doit pas être considéré comme un slogan institutionnel, mais comme une exigence absolue : une seule vie perdue représente déjà une perte immense. »</p>
                      <cite>— Ahmed Ksentini, Expert Sécurité Routière</cite>
                    </div>
                    <p className="mb-0">
                      Rappelant qu’une route sécurisée relève avant tout d’un droit humain fondamental, il a également plaidé pour une meilleure intégration des questions de sécurité dans les parcours universitaires destinés aux futurs professionnels du secteur.
                    </p>
                  </div>

                  <h3 className="atr-article-h3">Réflexion collective et causes concrètes sur les chantiers</h3>

                  <p>
                    Lors d’un échange avec une audience attentive et engagée, une réflexion s’est faite sur les causes des accidents sur les chantiers. Parmi les pistes évoquées figurent notamment :
                  </p>
                  <ul>
                    <li><strong>Le renforcement des contrôles rigoureux</strong> sur l'ensemble des chantiers de travaux publics.</li>
                    <li><strong>La délivrance stricte des certificats de conformité</strong> avant tout démarrage effectif des travaux.</li>
                    <li><strong>La mise à disposition de matériel adéquat</strong> et certifié par les entreprises pour les grands projets.</li>
                  </ul>

                  {/* Intervenant 4 : Arij Naili */}
                  <div className="atr-speaker-block">
                    <div className="atr-speaker-header">
                      <div className="atr-speaker-avatar">AN</div>
                      <div>
                        <h4 className="atr-speaker-name">Arij Naili</h4>
                        <p className="atr-speaker-title">Chef de service à l’unité de réalisation du pont de Bizerte</p>
                      </div>
                    </div>
                    <p>
                      De son côté, Arij Naili a évoqué plusieurs causes d’accidents liées à la non-conformité sur les chantiers. Revenant sur le décès de la victime survenu suite à un accident qui a eu lieu le 20 mars 2023 à la suite d’une mauvaise gestion des conditions de sécurité sur un chantier, son intervention a rappelé avec gravité les conséquences concrètes des défaillances humaines et organisationnelles.
                    </p>
                    <p className="mb-0">
                      Elle a notamment souligné que, malgré les procédures existantes, le principal défi reste souvent lié au comportement humain et au respect effectif des règles de sécurité, aussi bien chez certains ouvriers que chez certains responsables hiérarchiques. Selon elle, l’enjeu ne se limite plus à l’application des textes, mais repose également sur l’installation d’une véritable culture de responsabilité au sein des entreprises et des spécialistes de terrain.
                    </p>
                  </div>

                  {/* Intervenant 5 : Khaled Sioud */}
                  <div className="atr-speaker-block">
                    <div className="atr-speaker-header">
                      <div className="atr-speaker-avatar">KS</div>
                      <div>
                        <h4 className="atr-speaker-name">Khaled Sioud</h4>
                        <p className="atr-speaker-title">Ingénieur en génie civil et expert HSS</p>
                      </div>
                    </div>
                    <p>
                      La dimension réglementaire a également occupé une place importante dans les discussions tout en proposant l’établissement d’un guide applicatif. Khaled Sioud a insisté sur la nécessité de disposer de textes plus précis afin de mieux encadrer les sanctions liées aux manquements en matière de sécurité.
                    </p>
                    <div className="atr-quote-callout">
                      <p>« La route doit pardonner. Il ne s’agit pas uniquement d'un problème d'inattention du piéton ou de l'usager, mais des circonstances et de l’environnement dans lesquels il évolue. L'infrastructure doit être pensée pour réduire autant que possible les conséquences de l'erreur humaine. »</p>
                      <cite>— Khaled Sioud, Ingénieur Génie Civil & Expert HSS</cite>
                    </div>
                  </div>

                  <h3 className="atr-article-h3">Les résolutions et orientations retenues</h3>

                  <p>
                    Au terme des échanges, une idée s’est imposée avec clarté : la sécurité ne peut plus être traitée comme un simple volet technique ajouté en fin de projet. Elle implique :
                  </p>
                  <ul>
                    <li><strong>Des moyens matériels adaptés</strong> et disponibles dès la phase d'installation de chantier.</li>
                    <li><strong>Un budget clair et préétabli</strong> dans les bordereaux de prix afin d’éviter tout déficit ou arbitrage au détriment de la protection.</li>
                    <li><strong>Des contrôles inopinés et réguliers</strong> menés conjointement avec les équipes HSE.</li>
                    <li><strong>Une responsabilité pleinement partagée</strong> entre les institutions donneuses d'ordre et les entreprises exécutantes.</li>
                    <li><strong>Une vision durable et pérenne de la prévention</strong> intégrée dès la formation universitaire.</li>
                  </ul>

                  <div className="atr-article-lead mt_40">
                    La rencontre s’est achevée à 17h autour d’un moment d’échange convivial. Mais au-delà des discussions techniques et institutionnelles, une conviction commune semblait dominer les débats : <strong>la modernisation des infrastructures ne peut plus être dissociée de la protection de la vie humaine.</strong>
                  </div>
                </div>

                <div className="mt_40 pt_20 border-top d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <Link href="/publications" className="btn-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    ← Retour aux Publications
                  </Link>
                  <a
                    href="https://www.lobseco.com/zero-deces-latr-releve-le-defi-hss-dune-route-qui-pardonne/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-1"
                    style={{ background: '#1B5299', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                  >
                    <span>Consulter la publication sur L'Obs Éco</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
              <aside>
                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">Fiche de la Rencontre</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14.5px', color: '#475569' }}>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Date :</strong> 30 Avril 2026 (13h30 - 17h00)
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Lieu :</strong> Cité des Sciences, Tunis
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Organisation :</strong> ATR en coordination avec le Ministère de l'Équipement
                    </li>
                    <li style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
                      <strong style={{ color: '#0F172A' }}>Thématique :</strong> HSS, Sécurité Routière & Chantiers
                    </li>
                    <li>
                      <strong style={{ color: '#0F172A' }}>Source Médias :</strong>{' '}
                      <a
                        href="https://www.lobseco.com/zero-deces-latr-releve-le-defi-hss-dune-route-qui-pardonne/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#1B5299', fontWeight: '600', textDecoration: 'underline' }}
                      >
                        L'Obs Éco (Article complet)
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="atr-sidebar-card">
                  <h4 className="atr-sidebar-title">Mots-clés</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['#SécuritéRoutière', '#HSS', '#NormesISO', '#PontDeBizerte', '#ZéroDécès', '#PréventionChantiers', '#ATR2026', '#MinistèreÉquipement'].map((t, idx) => (
                      <span key={idx} style={{ background: '#F1F5F9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
