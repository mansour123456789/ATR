'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

export default function CommuniquesPage() {
  const { t } = useLanguage();

  const styles = `
    .atr-press-page{background:#F8FAFC;color:#17233D;padding-bottom:85px}
    .atr-press-intro{padding:70px 0 45px;background:#FFFFFF;border-bottom:1px solid #E2E8F0}
    .atr-press-intro h1{color:#102B54;font-size:clamp(30px,4.2vw,40px);line-height:1.2;margin:8px 0 14px;font-weight:700}
    .atr-press-intro p{max-width:760px;color:#334155;font-size:16.5px;line-height:1.7}
    .atr-press-intro .section_heading_title_small,.atr-press-contact .section_heading_title_small{color:#C07B1B;font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:13px}
    
    .atr-press-contact{margin:35px auto 0;padding:24px 28px;background:#EEF5FB;border-left:4px solid #C07B1B;border-radius:12px;max-width:1180px;display:flex;justify-content:space-between;gap:25px;align-items:center;box-shadow:0 6px 18px rgba(16,43,84,.04)}
    .atr-press-contact h2{color:#102B54;font-size:20px;margin:4px 0;font-weight:700}
    .atr-press-contact p{color:#334155;margin:0;line-height:1.65;font-size:14.5px}
    .atr-press-contact a{color:#1B5299;font-weight:700;text-decoration:none}
    .atr-press-contact a:hover{color:#C07B1B}
    
    .atr-press-list{padding:50px 0 65px}
    .atr-press-list h2{color:#102B54;font-size:clamp(24px,3vw,32px);margin:6px 0 24px;font-weight:700}
    
    /* Featured AG Card */
    .atr-press-featured-card{background:#FFFFFF;border:1px solid #E2E8F0;border-top:4px solid #C07B1B;border-radius:16px;padding:36px 40px;box-shadow:0 10px 30px rgba(16,43,84,.06);margin-bottom:35px}
    .atr-press-badge{display:inline-block;background:#FEF3E2;color:#C07B1B;font-size:12.5px;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:.04em;text-transform:uppercase;margin-bottom:12px}
    .atr-press-featured-header{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:15px;margin-bottom:16px}
    .atr-press-featured-title{color:#102B54;font-size:clamp(22px,2.6vw,26px);font-weight:800;line-height:1.3;margin:0}
    .atr-press-meta-pill{background:#F1F5F9;color:#475569;font-size:13.5px;font-weight:600;padding:6px 14px;border-radius:8px}
    
    .atr-press-event-boxes{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:20px 0;padding:18px;background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0}
    .atr-press-event-box strong{display:block;color:#102B54;font-size:13px;text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px}
    .atr-press-event-box p{margin:0;color:#334155;font-weight:600;font-size:14.5px}
    .atr-press-maps-link{color:#1B5299;font-weight:700;display:inline-flex;align-items:center;gap:4px;text-decoration:none;margin-top:3px;font-size:13px}
    .atr-press-maps-link:hover{color:#C07B1B;text-decoration:underline}
    
    .atr-press-agenda-block{margin:22px 0;padding:20px 24px;border-left:3px solid #1B5299;border-radius:0 10px 10px 0;background:#F9FBFE}
    .atr-press-agenda-block h4{color:#102B54;font-size:16px;font-weight:700;margin:0 0 12px}
    .atr-press-agenda-list{list-style:none;padding:0;margin:0}
    .atr-press-agenda-list li{position:relative;padding-left:22px;margin-bottom:8px;color:#334155;font-size:14.5px;line-height:1.6}
    .atr-press-agenda-list li::before{content:"•";position:absolute;left:4px;color:#C07B1B;font-size:18px;line-height:1}
    
    .atr-press-payment-info{padding:14px 18px;background:#FEF9ED;border-radius:10px;border:1px solid #FDE4BA;color:#92540A;font-size:14px;line-height:1.6;margin:18px 0}
    .atr-press-closing-note{color:#102B54;font-size:14.5px;font-weight:600;line-height:1.65;margin:16px 0}
    
    .atr-press-entry{display:grid;grid-template-columns:160px 1fr auto;gap:28px;align-items:start;padding:26px 0;border-top:1px solid #DFE6EE}
    .atr-press-ref{color:#64748B;font-family:monospace;font-size:13.5px;font-weight:600}
    .atr-press-date{display:block;margin-top:8px;color:#C07B1B;font-family:inherit;font-weight:700;font-size:13.5px}
    .atr-press-entry h3{color:#102B54;font-size:20px;line-height:1.35;margin:0 0 8px;font-weight:700}
    .atr-press-entry p{color:#334155;line-height:1.68;margin:0;max-width:680px;font-size:14.5px}
    
    .atr-press-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:20px}
    .atr-press-actions a{padding:10px 18px;border-radius:8px;text-align:center;text-decoration:none;font-size:13.5px;font-weight:700;transition:all .25s ease}
    .atr-press-read{border:1px solid #1B5299;color:#1B5299;background:#FFFFFF}
    .atr-press-read:hover{background:#EEF5FB;border-color:#1B5299}
    .atr-press-print{background:#1B5299;color:#FFFFFF}
    .atr-press-print:hover{background:#C07B1B}
    
    .atr-press-crosslink{padding:40px 45px;background:#102B54;border-radius:16px;box-shadow:0 12px 32px rgba(16,43,84,.15);margin-top:40px}
    .atr-press-crosslink h2{color:#FFFFFF;font-size:clamp(20px,2.6vw,26px);margin:0 0 10px;font-weight:700}
    .atr-press-crosslink p{color:#E2E8F0;line-height:1.68;margin:0 0 18px;font-size:15px}
    .atr-press-crosslink a{color:#FFFFFF;background:#C07B1B;padding:11px 20px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;margin-right:18px;display:inline-block;transition:all .3s ease}
    .atr-press-crosslink a:hover{background:#D98E28;transform:translateY(-2px)}
    
    @media(max-width:767px){
      .atr-press-intro{padding:45px 0 30px}
      .atr-press-featured-card{padding:24px 20px}
      .atr-press-contact{display:block;margin:25px 15px 0}
      .atr-press-entry{grid-template-columns:1fr;gap:12px}
      .atr-press-actions{flex-direction:column}
      .atr-press-actions a{width:100%}
      .atr-press-list{padding:35px 0}
      .atr-press-crosslink{padding:28px 22px}
      .atr-press-crosslink a{display:block;margin:10px 0}
    }
  `;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.press', "Communiqués de presse")}>
      <main className="atr-press-page">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <section className="atr-press-intro">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('communiques.kicker', "Salle de presse ATR")}</p>
            <h1>{t('communiques.title', "Communiqués de presse & Annonces officielles")}</h1>
            <p>{t('communiques.intro', "Déclarations, convocations et annonces officielles de l'Association Tunisienne des Routes (ATR).")}</p>
          </div>
        </section>

        <section className="atr-press-contact">
          <div>
            <p className="section_heading_title_small">{t('communiques.contact_kicker', "Contact secrétariat")}</p>
            <h2>{t('communiques.contact_title', "Association Tunisienne des Routes")}</h2>
            <p>{t('communiques.contact_text', "Pour toute information ou confirmation :")} <a href="mailto:contact@atr-tunisie.org">contact@atr-tunisie.org</a></p>
          </div>
          <span>{t('communiques.contact_badge', "Secrétariat permanent de l'ATR")}</span>
        </section>

        <section className="atr-press-list">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('communiques.archives_kicker', "Annonces & Archives officielles")}</p>
            <h2>{t('communiques.archives_title', "Communiqués disponibles")}</h2>

            {/* Featured Release: Assemblée Générale */}
            <div className="atr-press-featured-card">
              <span className="atr-press-badge">Convocation Officielle</span>
              <div className="atr-press-featured-header">
                <div>
                  <h3 className="atr-press-featured-title">ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)</h3>
                  <p style={{ color: '#64748B', fontSize: '14px', margin: '6px 0 0', fontWeight: '500' }}>Communiqué n°02-2026 · Destiné aux membres de l'ATR</p>
                </div>
                <div className="atr-press-meta-pill">
                  📅 Samedi 24 octobre 2026
                </div>
              </div>

              <p style={{ color: '#334155', fontSize: '15.5px', lineHeight: '1.7', margin: '14px 0 10px' }}>
                <strong>Chers membres,</strong><br />
                L’Association Tunisienne des Routes (ATR) a le plaisir de vous convier à son Assemblée Générale, qui se tiendra :
              </p>

              <div className="atr-press-event-boxes">
                <div className="atr-press-event-box">
                  <strong>Date</strong>
                  <p>Samedi 24 octobre 2026</p>
                </div>
                <div className="atr-press-event-box">
                  <strong>Horaire</strong>
                  <p>9h00</p>
                </div>
                <div className="atr-press-event-box">
                  <strong>Lieu</strong>
                  <p>Startup Village</p>
                  <a href="https://maps.app.goo.gl/3Vbb8kya3VsCa2NT8?g_st=ac" target="_blank" rel="noopener noreferrer" className="atr-press-maps-link">
                    📍 Voir sur Google Maps ↗
                  </a>
                </div>
              </div>

              <div className="atr-press-agenda-block">
                <h4>À l’ordre du jour :</h4>
                <ul className="atr-press-agenda-list">
                  <li>Présentation du rapport moral ;</li>
                  <li>Présentation du rapport financier ;</li>
                  <li>Présentation des activités réalisées par l’ATR ;</li>
                  <li>Échanges sur les activités et les perspectives de l’association ;</li>
                  <li>Présentation des projets et orientations à venir ;</li>
                  <li>Divers.</li>
                </ul>
              </div>

              <div className="atr-press-payment-info">
                💳 <strong>Cotisation 2026 :</strong> La cotisation 2026 pourra être réglée par virement bancaire <strong>N° 086030001520090580</strong> ou par chèque.
              </div>

              <p className="atr-press-closing-note">
                Votre présence est importante pour la vie de l’ATR et pour continuer à développer ensemble nos actions au service du secteur routier en Tunisie.<br />
                <em>Nous comptons sur votre présence !</em>
              </p>

              <div className="atr-press-actions">
                <Link href="/communiques/assemblee-generale-2026" className="atr-press-read">
                  {t('communiques.read_online', "Consulter la fiche complète")} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="atr-press-crosslink">
          <div className="auto-container">
            <h2>{t('communiques.cta_title', "Vous cherchez un autre contenu ?")}</h2>
            <p>{t('communiques.cta_text', "Les annonces courtes sont dans Actualités ; les comptes-rendus détaillés et revues de presse sont dans Publications.")}</p>
            <Link href="/actualites">{t('communiques.cta_news', "Voir les Actualités →")}</Link>
            <Link href="/publications">{t('communiques.cta_pubs', "Voir les Publications →")}</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
