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
    href: '/publications/glissements-de-terrain-resilience-infrastructures',
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
  {
    name: 'Mme Lilia Sifaoui',
    role: "Présidente de l'ATR",
    detail: "DG de l'unité de gestion du nouveau pont de Bizerte",
    image: '/membre/lilia-sifaoui.jpg',
    position: 'top center',
  },
  {
    name: 'M. Sami Montassar',
    role: "Vice-Président de l'ATR",
    detail: "Professeur de l'enseignement supérieur & spécialiste en génie civil (ENIT)",
    image: '/membre/sami-montassar.jpg',
    position: 'top center',
  },
  {
    name: 'Mme Imen Ben Hassine',
    role: "Secrétaire Générale Adjointe",
    detail: "Cadre au Ministère de l'Équipement et de l'Habitat",
    image: '/membre/imen-ben-hassine.jpg',
    position: 'top center',
  },
  {
    name: 'M. Saifeddine Ben Hfaiedh',
    role: "Expert Sécurité Routière",
    detail: "Spécialiste en sécurité routière et prévention des risques HSS",
    image: '/membre/saifeddine-ben-hfaiedh.jpg',
    position: 'top center',
  },
];

const pillars = [
  {
    title: 'Expertise technique',
    text: "Partager les méthodes et les retours d'expérience du secteur routier.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h20" />
        <path d="M5 18a7 7 0 0 1 14 0" />
        <path d="M10 5a2 2 0 0 1 4 0v6h-4V5z" />
        <path d="M12 11v7" />
      </svg>
    ),
  },
  {
    title: 'Sécurité routière',
    text: "Placer la protection des usagers et des équipes au centre des projets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Résilience',
    text: 'Préparer les infrastructures aux contraintes climatiques et territoriales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    text: 'Relier recherche, normes, matériaux et pratiques opérationnelles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5h6.18z" />
      </svg>
    ),
  },
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
          <div className="atr-home-about-image"><img src="/home.jpg" alt="Association Tunisienne des Routes" /></div>
        </div>
        <div className="atr-home-container atr-home-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <div className="atr-home-pillar-icon" aria-hidden="true">
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
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
        <div className="atr-home-container">
          <div className="atr-home-section-heading">
            <div>
              <p className="atr-home-eyebrow">{t('common.governance')}</p>
              <h2>{t('common.board')}</h2>
            </div>
            <Link href="/team" className="atr-home-text-link">{t('common.team')} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="atr-home-board-grid">
            {board.map((member) => (
              <article key={member.name}>
                <div className="atr-home-board-img-wrap">
                  <img src={member.image} alt={member.name} style={{ objectPosition: member.position || 'top center' }} loading="lazy" />
                </div>
                <div className="atr-home-board-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <small>{member.detail}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atr-home-section atr-home-trust">
        <div className="atr-home-container atr-home-trust-grid">
          <div>
            <p className="atr-home-eyebrow">{t('common.cooperation')}</p>
            <h2>{t('common.cooperationTitle')}</h2>
            <p>{t('common.cooperationText')}</p>
          </div>
          <div className="atr-home-partners">
            <a href="https://www.piarc.org/fr/" target="_blank" rel="noreferrer" className="atr-home-partner-card">
              <div className="atr-home-partner-logo-box">
                <img src="/images/partners/piarc.png" alt="Logo PIARC - Association mondiale de la Route" loading="lazy" />
              </div>
              <div className="atr-home-partner-info">
                <div className="atr-home-partner-header">
                  <strong>PIARC</strong>
                  <span className="atr-home-partner-badge">Comité National</span>
                </div>
                <h4>Association mondiale de la Route</h4>
                <p>Organisation internationale de référence pour les politiques, techniques et normes routières mondiales.</p>
                <span className="atr-home-partner-link">Visiter le site officiel <span aria-hidden="true">↗</span></span>
              </div>
            </a>

            <a href="http://www.equipement.tn/" target="_blank" rel="noreferrer" className="atr-home-partner-card">
              <div className="atr-home-partner-logo-box">
                <img src="/images/partners/mehat.jpg" alt="Logo MEHAT - Ministère de l'Équipement et de l'Habitat" loading="lazy" />
              </div>
              <div className="atr-home-partner-info">
                <div className="atr-home-partner-header">
                  <strong>MEHAT</strong>
                  <span className="atr-home-partner-badge">Tutelle Institutionnelle</span>
                </div>
                <h4>Ministère de l'Équipement et de l'Habitat</h4>
                <p>Tutelle gouvernementale et partenaire stratégique dans le développement des réseaux d'infrastructures en Tunisie.</p>
                <span className="atr-home-partner-link">Visiter le portail officiel <span aria-hidden="true">↗</span></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="atr-home-join"><div className="atr-home-container"><p className="atr-home-eyebrow">{t('common.membership')}</p><h2>{t('common.membershipTitle')}</h2><Link href="/contact" className="atr-home-button atr-home-button-primary">{t('common.membershipButton')} <span aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}
