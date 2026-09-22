'use client'
import Link from 'next/link';
import { institutionalFacts } from '@/data/institutional';
import { useLanguage } from '@/context/LanguageContext';

const publications = [
  {
    date: '06 août 2025',
    source: 'La Presse de Tunisie',
    title: "Le ministre de l'Équipement accueille le nouveau bureau de l'ATR",
    href: '/publications/ministre-equipement-accueille-bureau-atr',
    image: '/images/ministre-bureau-atr.png',
  },
  {
    date: '30 avril 2026',
    source: "ATR & Ministère de l'Équipement",
    title: 'Rencontre ATR : enjeux HSS et sécurité routière',
    href: '/publications/securite-routiere-hss-chantiers',
    image: '/images/atr-event.png',
  },
  {
    date: '06 juin 2026',
    source: "ATR, ATMS & Ministère de l'Équipement",
    title: 'Glissements de terrain et résilience des infrastructures',
    href: '/publications/glissements-terrain-resilience',
    image: '/images/atr-event.png',
  },
];

const committees = [
  {
    code: 'CT.1',
    title: 'Gouvernance et résilience',
    text: 'Gestion patrimoniale des réseaux, adaptation aux crues et continuité des services.',
  },
  {
    code: 'CT.2',
    title: 'Mobilité durable et STI',
    text: 'Systèmes de transport intelligents, décarbonation des corridors et intermodalité.',
  },
  {
    code: 'CT.3',
    title: 'Sécurité routière et usagers',
    text: 'Audits de sécurité, traitement des points noirs et prévention du risque routier.',
  },
  {
    code: 'CT.4',
    title: 'Infrastructures et matériaux',
    text: "Techniques de chaussées, ouvrages d'art et innovation dans les matériaux routiers.",
  },
];

const board = [
  { name: 'Mme Lilia Sifaoui', role: "Présidente de l'ATR", detail: "DG de l'unité de gestion du nouveau pont de Bizerte", image: '/images/avatars/atr2.png' },
  { name: 'Mme Eya Soueb', role: "Membre de l'ATR", detail: "Cadre du Ministère de l'Équipement et de l'Habitat", image: '/images/avatars/atr4.png' },
  { name: 'M. Ahmed Ksentini', role: 'Expert sécurité routière', detail: 'Universitaire et spécialiste HSS', image: '/images/avatars/atr1.png' },
  { name: 'M. Khaled Sioud', role: 'Ingénieur génie civil', detail: 'Expert HSS et prévention', image: '/images/avatars/atr3.png' },
];

const pillars = [
  ['fa-hard-hat', 'Expertise technique', "Partager les méthodes et les retours d'expérience du secteur routier."],
  ['fa-shield-alt', 'Sécurité routière', "Placer la protection des usagers et des équipes au centre des projets."],
  ['fa-leaf', 'Résilience', 'Préparer les infrastructures aux contraintes climatiques et territoriales.'],
  ['fa-lightbulb', 'Innovation', 'Relier recherche, normes, matériaux et pratiques opérationnelles.'],
];

export default function InstitutionalHome() {
  const { t } = useLanguage();
  return (
    <main className="atr-home">
      <section className="atr-home-hero">
        {/* Background image - pleine largeur en absolute */}
        <div className="atr-home-hero-media" aria-hidden="true" />
        {/* Contenu centré au-dessus */}
        <div className="atr-home-hero-inner">
          <div className="atr-home-container">
            <div className="atr-home-hero-copy">
              <p className="atr-home-kicker">{t('common.discover')} · PIARC</p>
              <h1>{t('home.title').replace('<br/>', ' ')}</h1>
              <p className="atr-home-lead">{t('home.welcome')}</p>
              <div className="atr-home-actions">
                <Link href="/about-us" className="atr-home-button atr-home-button-primary">{t('common.discover')} <span aria-hidden="true">↗</span></Link>
                <Link href="/contact" className="atr-home-button atr-home-button-light">{t('common.join')}</Link>
              </div>
            </div>
            <div className="atr-home-facts" aria-label="Repères institutionnels">
              <div><strong>{institutionalFacts.foundingYear}</strong><span>{t('common.about')}</span></div>
              <div><strong>CT.1–CT.4</strong><span>Axes techniques documentés</span></div>
              <div><strong>2024–2028</strong><span>Convention cadre citée</span></div>
              <div><strong>PIARC</strong><span>Comité national en Tunisie</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="atr-home-news" aria-label="Actualités institutionnelles">
        <div className="atr-home-container atr-home-news-inner">
          <span className="atr-home-news-label">{t('common.featured')}</span>
          <Link href="/actualites">30 avril 2026 · Rencontre ATR sur les enjeux HSS et la sécurité routière sur les chantiers</Link>
          <Link href="/calendrier" className="atr-home-news-next">{t('common.agenda')} <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="atr-home-section atr-home-about">
        <div className="atr-home-container atr-home-two-col">
          <div>
            <p className="atr-home-eyebrow">{t('common.about')}</p>
            <h2>{t('common.aboutTitle')}</h2>
            <p>{t('common.aboutText')}</p>
            <Link href="/about-us" className="atr-home-text-link">{t('common.readAbout')} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="atr-home-about-image"><img src="/images/bizerte_bridge.png" alt="Pont de Bizerte et infrastructure routière tunisienne" /></div>
        </div>
        <div className="atr-home-container atr-home-pillars">
          {pillars.map(([icon, title, text]) => <article key={title}><span className={`fas ${icon}`} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="atr-home-section atr-home-publications">
        <div className="atr-home-container">
          <div className="atr-home-section-heading"><div><p className="atr-home-eyebrow">{t('common.resources')}</p><h2>{t('common.publications')}</h2></div><Link href="/publications" className="atr-home-text-link">{t('common.allPublications')} <span aria-hidden="true">→</span></Link></div>
          <div className="atr-home-publication-grid">
            {publications.map((publication) => <article className="atr-home-publication" key={publication.href}><Link href={publication.href}><img src={publication.image} alt="" loading="lazy" /></Link><div><p className="atr-home-meta">{publication.date} · {publication.source}</p><h3><Link href={publication.href}>{publication.title}</Link></h3><Link href={publication.href} className="atr-home-small-link">Consulter la publication <span aria-hidden="true">↗</span></Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="atr-home-section atr-home-committees">
        <div className="atr-home-container">
          <p className="atr-home-eyebrow">{t('common.technicalWork')}</p><h2>{t('common.committeesTitle')}</h2><p className="atr-home-section-intro">{t('common.committeesText')}</p>
          <div className="atr-home-committee-grid">{committees.map((committee) => <article key={committee.code}><span>{committee.code}</span><h3>{committee.title}</h3><p>{committee.text}</p></article>)}</div>
        </div>
      </section>

      <section className="atr-home-section atr-home-board">
        <div className="atr-home-container"><div className="atr-home-section-heading"><div><p className="atr-home-eyebrow">{t('common.governance')}</p><h2>{t('common.board')}</h2></div><Link href="/team" className="atr-home-text-link">{t('common.team')} <span aria-hidden="true">→</span></Link></div><div className="atr-home-board-grid">{board.map((member) => <article key={member.name}><img src={member.image} alt={member.name} loading="lazy" /><div><h3>{member.name}</h3><p>{member.role}</p><small>{member.detail}</small></div></article>)}</div></div>
      </section>

      <section className="atr-home-section atr-home-trust">
        <div className="atr-home-container atr-home-trust-grid"><div><p className="atr-home-eyebrow">{t('common.cooperation')}</p><h2>{t('common.cooperationTitle')}</h2><p>{t('common.cooperationText')}</p></div><div className="atr-home-partners"><a href="https://www.piarc.org/fr/" target="_blank" rel="noreferrer">PIARC<span>Association mondiale de la Route</span></a><a href="http://www.equipement.tn/" target="_blank" rel="noreferrer">MEHAT<span>Ministère de l'Équipement et de l'Habitat</span></a></div></div>
      </section>

      <section className="atr-home-join"><div className="atr-home-container"><p className="atr-home-eyebrow">{t('common.membership')}</p><h2>{t('common.membershipTitle')}</h2><Link href="/contact" className="atr-home-button atr-home-button-primary">{t('common.membershipButton')} <span aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}
