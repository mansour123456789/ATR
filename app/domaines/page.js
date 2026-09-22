'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import CounterUp from "@/components/elements/CounterUp";

const domains = [
  {
    id: 'securite-routiere',
    icon: 'fa-shield-alt',
    image: '/assets/images/risques_route.png',
    imageAlt: 'Dispositif de prévention et de sécurité sur une route',
    title: 'Sécurité routière & prévention',
    mission: 'L’ATR traduit l’approche « Vision Zéro décès » en méthodes de prévention applicables aux infrastructures et aux chantiers. Le domaine relie analyse des risques, audits, signalisation et formation HSS.',
    expert: 'M. Ahmed Ksentini · universitaire, spécialiste HSS et sécurité routière',
    actions: [
      ['Référentiels de prévention et traitement des points noirs', '/publications/securite-routiere-hss-chantiers'],
      ['Formations et échanges sur la sécurité des chantiers', '/events'],
      ['Retour d’expérience sur les usagers et les aménagements sûrs', '/publications'],
    ],
  },
  {
    id: 'ouvrages-art',
    icon: 'fa-bridge',
    image: '/assets/images/ponts_entretien.png',
    imageAlt: 'Ouvrage d’art et opérations d’entretien des ponts',
    title: 'Ouvrages d’art & ponts',
    mission: 'Ce domaine couvre la conception, la surveillance et la maintenance des ouvrages d’art. Il s’appuie sur l’expérience de Mme Lilia Sifaoui à la direction générale de l’unité de gestion du nouveau pont de Bizerte.',
    expert: 'Mme Lilia Sifaoui · Directrice Générale de l’unité de gestion du nouveau pont de Bizerte',
    actions: [
      ['Suivi et gestion des ouvrages d’art', '/publications/glissements-de-terrain-resilience-infrastructures'],
      ['Résilience des infrastructures face aux aléas', '/publications/glissements-de-terrain-resilience-infrastructures'],
      ['Échanges techniques sur les ponts et leur entretien', '/events'],
    ],
  },
  {
    id: 'conception-normes',
    icon: 'fa-drafting-compass',
    image: '/assets/images/conception_route.png',
    imageAlt: 'Conception et planification d’une infrastructure routière',
    title: 'Conception & normes techniques',
    mission: 'L’ATR rapproche les exigences réglementaires, les méthodes d’ingénierie et les besoins opérationnels du réseau routier. Elle contribue à diffuser des guides, des normes de qualité et des pratiques compatibles avec les échanges internationaux.',
    expert: 'Mme Eya Soueb · sous-directrice au Ministère de l’Équipement et de l’Habitat',
    actions: [
      ['Guides techniques et ressources professionnelles', '/publications'],
      ['Domaines d’intervention et méthodes d’ingénierie', '/domaines#conception-normes'],
      ['Coopération avec le Ministère et PIARC', 'https://www.piarc.org/fr/'],
    ],
  },
];

const facts = [
  { icon: 'fa-calendar-alt', value: 8, suffix: '', label: 'ans depuis la création de l’ATR', detail: '2018–2026' },
  { icon: 'fa-project-diagram', value: 4, suffix: '', label: 'comités et axes techniques documentés', detail: 'CT.1 à CT.4' },
  { icon: 'fa-user-tie', value: 4, suffix: '', label: 'experts identifiés sur le site', detail: 'Bureau et référents' },
  { icon: 'fa-globe-africa', value: 1909, suffix: '', label: 'année de fondation de PIARC', detail: 'Repère international' },
];

function ActionLink({ href, children }) {
  const external = href.startsWith('http');
  return <Link href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}<span aria-hidden="true"> ↗</span></Link>;
}

export default function DomainesPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Domaines Techniques">
      <main className="atr-domains-page">
        <section className="atr-domains-intro">
          <div className="auto-container">
            <p className="section_heading_title_small">Expertise ATR</p>
            <h2>Des domaines pilotés par des enjeux et des compétences identifiés.</h2>
            <p>L’ATR structure ses échanges autour de la sécurité, des ouvrages et de la qualité technique. Chaque domaine relie une mission concrète, des experts identifiés et des ressources consultables.</p>
          </div>
        </section>

        <section className="atr-domains-list atr-content-section" aria-label="Domaines techniques de l'ATR">
          <div className="auto-container">
            <div className="atr-domain-card-grid">
              {domains.map((domain, index) => (
                <article className="atr-domain-card" id={domain.id} key={domain.id}>
                  <div className="atr-domain-card-media"><img src={domain.image} alt={domain.imageAlt} loading={index === 0 ? 'eager' : 'lazy'} /><span>{`Domaine ${String(index + 1).padStart(2, '0')}`}</span></div>
                  <div className="atr-domain-card-body">
                    <div className="atr-domain-title"><i className={`fas ${domain.icon}`} aria-hidden="true" /><h3>{domain.title}</h3></div>
                    <p>{domain.mission}</p>
                    <p className="atr-domain-expert"><strong>Référent :</strong> {domain.expert}</p>
                    <ul>{domain.actions.slice(0, 2).map(([label, href]) => <li key={label}><ActionLink href={href}>{label}</ActionLink></li>)}</ul>
                    <Link className="atr-domain-anchor-link" href={`#${domain.id}`}>En savoir plus <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atr-domains-facts">
          <div className="auto-container">
            <div className="atr-domains-facts-heading"><p className="section_heading_title_small">Repères vérifiables</p><h2>Les chiffres dans leur contexte.</h2><p>Les données affichées distinguent les faits institutionnels des effectifs qui doivent encore être confirmés par l’association.</p></div>
            <div className="atr-domains-facts-grid">{facts.map((fact) => <article key={fact.label}><i className={`fas ${fact.icon}`} aria-hidden="true" /><strong><CounterUp end={fact.value} />{fact.suffix}</strong><span>{fact.label}</span><small>{fact.detail}</small></article>)}</div>
          </div>
        </section>

        <section className="atr-domains-note"><div className="auto-container"><p><strong>À propos des effectifs :</strong> le nombre de membres actifs et le volume de guides publiés ne sont pas encore établis par une source publique unique dans le site. Ils ne sont donc pas affichés comme chiffres vérifiés.</p><Link href="/contact" className="btn-1">Demander les données institutionnelles <span aria-hidden="true">→</span></Link></div></section>
      </main>
    </Layout>
  );
}
