'use client'
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function CommuniqueDetailPage() {
  const params = useParams();
  const refParam = params?.reference || '';
  const [copied, setCopied] = useState(false);

  const is01_2025 = refParam === '01-2025';

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
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Communiqué de presse">
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
                  <span className="mark">Communiqué n°01-2025</span>
                  <time>6 août 2025</time>
                  <h1>Audience officielle consacrée au nouveau bureau exécutif de l'Association Tunisienne des Routes</h1>
                </header>
                <p>L'Association Tunisienne des Routes informe qu'une audience officielle consacrée à son nouveau bureau exécutif s'est tenue auprès de M. Salah Zouari, ministre de l'Équipement et de l'Habitat.</p>
                <p>La rencontre s'est déroulée en présence du premier délégué de l'Association mondiale de la Route (PIARC) et de sa conseillère technique. Elle a porté sur le rôle de l'ATR dans l'organisation de forums nationaux et internationaux consacrés aux infrastructures et aux transports.</p>
                <p>Cette audience a également permis de présenter les orientations de travail du nouveau bureau exécutif et de rappeler l'importance de la coopération entre l'ATR, le ministère et les réseaux professionnels et scientifiques de la route.</p>
                <p className="atr-press-signature">Mme Lilia Sifaoui<br /><span>Présidente de l'Association Tunisienne des Routes</span></p>
              </>
            ) : (
              <>
                <header>
                  <span className="mark">Communiqué n°02-2026 · Convocation officielle</span>
                  <time>Samedi 24 octobre 2026</time>
                  <h1>ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)</h1>
                </header>

                <p><strong>Chers membres,</strong></p>
                <p>L’Association Tunisienne des Routes (ATR) a le plaisir de vous convier à son Assemblée Générale, qui se tiendra :</p>

                <div className="atr-press-event-box">
                  <div className="atr-press-event-box-row">
                    <span>📅 <strong>Date :</strong> Samedi 24 octobre 2026</span>
                  </div>
                  <div className="atr-press-event-box-row">
                    <span>⏰ <strong>Horaire :</strong> 9h00</span>
                  </div>
                  <div className="atr-press-event-box-row">
                    <span>📍 <strong>Lieu :</strong> Startup Village — <a href="https://maps.app.goo.gl/3Vbb8kya3VsCa2NT8?g_st=ac" target="_blank" rel="noopener noreferrer">Localisation Google Maps ↗</a></span>
                  </div>
                </div>

                <div className="atr-press-agenda-block">
                  <h3>À l’ordre du jour :</h3>
                  <ul className="atr-press-agenda-list">
                    <li>Présentation du rapport moral ;</li>
                    <li>Présentation du rapport financier ;</li>
                    <li>Présentation des activités réalisées par l’ATR ;</li>
                    <li>Échanges sur les activités et les perspectives de l’association ;</li>
                    <li>Présentation des projets et orientations à venir ;</li>
                    <li>Divers.</li>
                  </ul>
                </div>

                <div className="atr-press-payment-card">
                  💳 <strong>Cotisation :</strong> La cotisation 2026 pourra être réglée par virement bancaire <strong>N° 086030001520090580</strong> ou par chèque.
                </div>

                <p>Votre présence est importante pour la vie de l’ATR et pour continuer à développer ensemble nos actions au service du secteur routier en Tunisie.</p>
                <p style={{ fontWeight: '700', color: '#102B54', fontSize: '16px' }}><em>Nous comptons sur votre présence !</em></p>

                <p className="atr-press-signature">
                  Le Bureau Exécutif<br />
                  <span>Association Tunisienne des Routes (ATR)</span>
                </p>
              </>
            )}

            <div className="atr-press-tools">
              <button className="secondary" onClick={share}>{copied ? 'Lien copié !' : 'Partager le communiqué'}</button>
            </div>
            <p><Link href="mailto:contact@atr-tunisie.org">Contact secrétariat : contact@atr-tunisie.org</Link></p>
            <Link href="/communiques" className="atr-press-back">← Retour à la liste des communiqués</Link>
          </article>
        </div>
      </main>
    </Layout>
  );
}
