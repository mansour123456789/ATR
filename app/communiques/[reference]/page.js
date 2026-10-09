'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';

export default function CommuniqueDetailPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const params = useParams();
  const refParam = params?.reference || '';
  const [copied, setCopied] = useState(false);

  const is01_2025 = refParam === '01-2025';

  useEffect(() => {
    const title = is01_2025
      ? t('communiques.c01_title', "Audience officielle consacrée au nouveau bureau exécutif de l'Association Tunisienne des Routes")
      : t('communiques.ag_title', "ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)");
    document.title = `${title} | ATR - Association Tunisienne des Routes`;
  }, [language, is01_2025, t]);

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.press', "Communiqué de presse")}>
      <main className="atr-press-detail">
        <style dangerouslySetInnerHTML={{ __html: `
          .atr-press-detail {
            background: #F8FAFC;
            padding: 75px 0 95px;
          }
          .atr-press-sheet {
            max-width: 840px;
            margin: auto;
            background: #FFFFFF;
            border: 1px solid #DFE6EE;
            border-top: 5px solid #C07B1B;
            border-radius: 16px;
            padding: 50px 60px;
            box-shadow: 0 14px 36px rgba(16, 43, 84, 0.08);
          }
          .atr-press-sheet header {
            border-bottom: 1px solid #DFE6EE;
            padding-bottom: 25px;
            margin-bottom: 28px;
          }
          .atr-press-sheet .mark {
            color: #64748B;
            font-family: monospace;
            font-size: 13.5px;
            font-weight: 600;
          }
          .atr-press-sheet time {
            display: block;
            color: #C07B1B;
            font-weight: 700;
            margin-top: 8px;
            font-size: 14px;
          }
          .atr-press-sheet h1 {
            color: #102B54;
            font-size: clamp(24px, 3vw, 30px);
            line-height: 1.3;
            margin: 16px 0 0;
            font-weight: 800;
          }
          .atr-press-sheet p {
            color: #334155;
            font-size: 15.5px;
            line-height: 1.8;
            margin-bottom: 16px;
          }
          .atr-press-event-box {
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 20px 24px;
            margin: 24px 0;
          }
          .atr-press-event-box-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;
            color: #102B54;
            font-size: 15px;
            font-weight: 600;
          }
          .atr-press-event-box-row:last-child {
            margin-bottom: 0;
          }
          .atr-press-event-box-row a {
            color: #1B5299;
            font-weight: 700;
            text-decoration: underline;
          }
          .atr-press-event-box-row a:hover {
            color: #C07B1B;
          }
          .atr-press-agenda-block {
            background: #F9FBFE;
            border-left: 4px solid #1B5299;
            border-radius: 0 12px 12px 0;
            padding: 22px 26px;
            margin: 25px 0;
          }
          .atr-press-agenda-block h3 {
            color: #102B54;
            font-size: 17px;
            font-weight: 700;
            margin: 0 0 14px;
          }
          .atr-press-agenda-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .atr-press-agenda-list li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px;
            color: #334155;
            font-size: 15px;
            line-height: 1.6;
          }
          .atr-press-agenda-list li::before {
            content: "•";
            position: absolute;
            left: 2px;
            color: #C07B1B;
            font-size: 20px;
            line-height: 1;
          }
          .atr-press-payment-card {
            background: #FEF9ED;
            border: 1px solid #FDE4BA;
            border-radius: 10px;
            padding: 16px 20px;
            color: #92540A;
            font-size: 15px;
            line-height: 1.65;
            margin: 22px 0;
          }
          .atr-press-signature {
            margin-top: 35px;
            padding-top: 22px;
            border-top: 1px solid #DFE6EE;
            color: #102B54;
            font-weight: 700;
            font-size: 16px;
          }
          .atr-press-signature span {
            color: #475569;
            font-weight: 500;
            font-size: 14px;
          }
          .atr-press-tools {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin: 30px 0;
          }
          .atr-press-tools button,
          .atr-press-tools a {
            border: 0;
            border-radius: 10px;
            padding: 12px 20px;
            background: #1B5299;
            color: #FFFFFF;
            font: inherit;
            font-weight: 700;
            font-size: 14px;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.25s ease;
          }
          .atr-press-tools button:hover,
          .atr-press-tools a:hover {
            background: #C07B1B;
          }
          .atr-press-tools button.secondary {
            background: #EEF5FB;
            color: #1B5299;
            border: 1px solid #DFE6EE;
          }
          .atr-press-tools button.secondary:hover {
            background: #DFEBF7;
          }
          .atr-press-note {
            padding: 16px 20px;
            background: #EEF5FB;
            border-radius: 10px;
            color: #475569;
            font-size: 13.5px;
            line-height: 1.6;
          }
          .atr-press-back {
            display: inline-block;
            margin-top: 20px;
            color: #1B5299;
            font-weight: 700;
            font-size: 14.5px;
            text-decoration: none;
          }
          .atr-press-back:hover {
            color: #C07B1B;
          }

          /* RTL Layout Overrides */
          body[dir="rtl"] .atr-press-sheet { text-align: right; }
          body[dir="rtl"] .atr-press-agenda-block { border-left: none; border-right: 4px solid #1B5299; border-radius: 12px 0 0 12px; }
          body[dir="rtl"] .atr-press-agenda-list li { padding-left: 0; padding-right: 20px; }
          body[dir="rtl"] .atr-press-agenda-list li::before { left: auto; right: 2px; }
          body[dir="rtl"] .atr-press-event-box-row { justify-content: flex-start; }
          body[dir="rtl"] .atr-press-tools { justify-content: flex-start; }

          @media print {
            .atr-press-detail { padding: 0; background: #FFFFFF; }
            .atr-press-sheet { border: 0; box-shadow: none; padding: 25px; max-width: none; }
            .atr-press-tools, .atr-press-back { display: none; }
          }
          @media (max-width: 767px) {
            .atr-press-detail { padding: 42px 0; }
            .atr-press-sheet { padding: 30px 20px; }
            .atr-press-sheet h1 { font-size: 22px; }
          }
        `}} />
        <div className="auto-container">
          <article className="atr-press-sheet">
            {is01_2025 ? (
              <>
                <header>
                  <span className="mark">{t('communiques.c01_mark', "Communiqué n°01-2025")}</span>
                  <time>{t('communiques.c01_date', "6 août 2025")}</time>
                  <h1>{t('communiques.c01_title', "Audience officielle consacrée au nouveau bureau exécutif de l'Association Tunisienne des Routes")}</h1>
                </header>
                <p>{t('communiques.c01_p1', "L'Association Tunisienne des Routes informe qu'une audience officielle consacrée à son nouveau bureau exécutif s'est tenue auprès de M. Salah Zouari, ministre de l'Équipement et de l'Habitat.")}</p>
                <p>{t('communiques.c01_p2', "La rencontre s'est déroulée en présence du premier délégué de l'Association mondiale de la Route (PIARC) et de sa conseillère technique. Elle a porté sur le rôle de l'ATR dans l'organisation de forums nationaux et internationaux consacrés aux infrastructures et aux transports.")}</p>
                <p>{t('communiques.c01_p3', "Cette audience a également permis de présenter les orientations de travail du nouveau bureau exécutif et de rappeler l'importance de la coopération entre l'ATR, le ministère et les réseaux professionnels et scientifiques de la route.")}</p>
                <p className="atr-press-signature">
                  {t('communiques.c01_sign_name', "Mme Lilia Sifaoui")}<br />
                  <span>{t('communiques.c01_sign_role', "Présidente de l'Association Tunisienne des Routes")}</span>
                </p>
              </>
            ) : (
              <>
                <header>
                  <span className="mark">{t('communiques.ag_subtitle', "Communiqué n°02-2026 · Destiné aux membres de l'ATR")}</span>
                  <time>{t('communiques.ag_date_val', "Samedi 24 octobre 2026")}</time>
                  <h1>{t('communiques.ag_title', "ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)")}</h1>
                </header>

                <p><strong>{t('communiques.ag_dear_members', "Chers membres,")}</strong></p>
                <p>{t('communiques.ag_invite', "L’Association Tunisienne des Routes (ATR) a le plaisir de vous convier à son Assemblée Générale, qui se tiendra :")}</p>

                <div className="atr-press-event-box">
                  <div className="atr-press-event-box-row">
                    <span>📅 <strong>{t('communiques.label_date', "Date")} :</strong> {t('communiques.ag_date_val', "Samedi 24 octobre 2026")}</span>
                  </div>
                  <div className="atr-press-event-box-row">
                    <span>⏰ <strong>{t('communiques.label_time', "Horaire")} :</strong> {t('communiques.ag_time_val', "9h00")}</span>
                  </div>
                  <div className="atr-press-event-box-row">
                    <span>📍 <strong>{t('communiques.label_location', "Lieu")} :</strong> {t('communiques.ag_loc_val', "Startup Village")} — <a href="https://maps.app.goo.gl/3Vbb8kya3VsCa2NT8?g_st=ac" target="_blank" rel="noopener noreferrer">{t('communiques.maps_link', "📍 Voir sur Google Maps ↗")}</a></span>
                  </div>
                </div>

                <div className="atr-press-agenda-block">
                  <h3>{t('communiques.ag_agenda_title', "À l’ordre du jour :")}</h3>
                  <ul className="atr-press-agenda-list">
                    <li>{t('communiques.ag_agenda_1', "Présentation du rapport moral ;")}</li>
                    <li>{t('communiques.ag_agenda_2', "Présentation du rapport financier ;")}</li>
                    <li>{t('communiques.ag_agenda_3', "Présentation des activités réalisées par l’ATR ;")}</li>
                    <li>{t('communiques.ag_agenda_4', "Échanges sur les activités et les perspectives de l’association ;")}</li>
                    <li>{t('communiques.ag_agenda_5', "Présentation des projets et orientations à venir ;")}</li>
                    <li>{t('communiques.ag_agenda_6', "Divers.")}</li>
                  </ul>
                </div>

                <div className="atr-press-payment-card">
                  <strong>{t('communiques.ag_payment_prefix', "💳 Cotisation 2026 :")}</strong> {t('communiques.ag_payment_text', "La cotisation 2026 pourra être réglée par virement bancaire N° 08603000152009058019 ou par chèque.")}
                </div>

                <p>{t('communiques.ag_closing_1', "Votre présence est importante pour la vie de l’ATR et pour continuer à développer ensemble nos actions au service du secteur routier en Tunisie.")}</p>
                <p style={{ fontWeight: '700', color: '#102B54', fontSize: '16px' }}><em>{t('communiques.ag_closing_2', "Nous comptons sur votre présence !")}</em></p>

                <p className="atr-press-signature">
                  {t('communiques.c02_sign_name', "Le Bureau Exécutif")}<br />
                  <span>{t('communiques.c02_sign_org', "Association Tunisienne des Routes (ATR)")}</span>
                </p>
              </>
            )}

            <div className="atr-press-tools">
              <button className="secondary" onClick={share}>{copied ? t('communiques.btn_copied', 'Lien copié !') : t('communiques.btn_share', 'Partager le communiqué')}</button>
            </div>
            <p><Link href="mailto:contact@atr-tunisie.org">contact@atr-tunisie.org</Link></p>
            <Link href="/communiques" className="atr-press-back">
              <span aria-hidden="true">{isRtl ? '→' : '←'}</span> {t('communiques.btn_back', "← Retour à la liste des communiqués").replace(/[←→]/g, '').trim()}
            </Link>
          </article>
        </div>
      </main>
    </Layout>
  );
}
