'use client'
import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import CounterUp from "@/components/elements/CounterUp";
import { useLanguage } from "@/context/LanguageContext";

function ActionLink({ href, children, isRtl }) {
  const external = href.startsWith('http');
  return (
    <Link href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
      {children}
      <span aria-hidden="true">{external ? (isRtl ? ' ↖' : ' ↗') : (isRtl ? ' ←' : ' →')}</span>
    </Link>
  );
}

export default function DomainesPage() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    const pageTitle = t('breadcrumb.domains', "Domaines Techniques");
    document.title = `${pageTitle} | ATR - Association Tunisienne des Routes`;
  }, [language, t]);

  const domains = [
    {
      id: 'securite-routiere',
      icon: 'fa-shield-alt',
      image: '/assets/images/risques_route.png',
      title: t('domaines.domain1_title', 'Sécurité routière & prévention'),
      mission: t('domaines.domain1_mission', 'L’ATR traduit l’approche « Vision Zéro décès » en méthodes de prévention applicables aux infrastructures et aux chantiers. Le domaine relie analyse des risques, audits, signalisation et formation HSS.'),
      actions: [
        [t('domaines.domain1_action1', 'Référentiels de prévention et traitement des points noirs'), '/publications/securite-routiere-hss-chantiers'],
        [t('domaines.domain1_action2', 'Formations et échanges sur la sécurité des chantiers'), '/events'],
      ],
    },
    {
      id: 'ouvrages-art',
      icon: 'fa-bridge',
      image: '/assets/images/ponts_entretien.png',
      title: t('domaines.domain2_title', 'Ouvrages d’art & ponts'),
      mission: t('domaines.domain2_mission', 'Ce domaine couvre la conception, la surveillance, l’auscultation et la maintenance durable des ponts et ouvrages d’art.'),
      actions: [
        [t('domaines.domain2_action1', 'Suivi et gestion des ouvrages d’art'), '/publications/glissements-de-terrain-resilience-infrastructures'],
        [t('domaines.domain2_action2', 'Résilience des infrastructures face aux aléas'), '/publications/glissements-de-terrain-resilience-infrastructures'],
      ],
    },
    {
      id: 'conception-normes',
      icon: 'fa-drafting-compass',
      image: '/assets/images/conception_route.png',
      title: t('domaines.domain3_title', 'Conception & normes techniques'),
      mission: t('domaines.domain3_mission', 'L’ATR rapproche les exigences réglementaires, les méthodes d’ingénierie et les besoins opérationnels du réseau routier. Elle contribue à diffuser des guides, des normes de qualité et des pratiques compatibles avec les échanges internationaux.'),
      actions: [
        [t('domaines.domain3_action1', 'Guides techniques et ressources professionnelles'), '/publications'],
        [t('domaines.domain3_action2', 'Domaines d’intervention et méthodes d’ingénierie'), '/domaines#conception-normes'],
      ],
    },
  ];

  const facts = [
    { icon: 'fa-calendar-alt', value: 8, suffix: '', label: t('domaines.fact1_label', 'ans depuis la création de l’ATR'), detail: t('domaines.fact1_detail', '2018–2026') },
    { icon: 'fa-project-diagram', value: 4, suffix: '', label: t('domaines.fact2_label', 'comités et axes techniques documentés'), detail: t('domaines.fact2_detail', 'CT.1 à CT.4') },
    { icon: 'fa-user-tie', value: 4, suffix: '', label: t('domaines.fact3_label', 'experts identifiés sur le site'), detail: t('domaines.fact3_detail', 'Bureau et référents') },
    { icon: 'fa-globe-africa', value: 1909, suffix: '', label: t('domaines.fact4_label', 'année de fondation de PIARC'), detail: t('domaines.fact4_detail', 'Repère international') },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.domains', "Domaines Techniques")}>
      <main className="atr-domains-page">
        <section className="atr-domains-intro">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('domaines.kicker', "Expertise ATR")}</p>
            <h2>{t('domaines.title', "Des domaines pilotés par des enjeux et des compétences identifiés.")}</h2>
            <p>{t('domaines.intro', "L’ATR structure ses échanges autour de la sécurité, des ouvrages et de la qualité technique. Chaque domaine relie une mission concrète, des axes d'action et des ressources consultables.")}</p>
          </div>
        </section>

        <section className="atr-domains-list atr-content-section" aria-label="Domaines techniques de l'ATR">
          <div className="auto-container">
            <div className="atr-domain-card-grid">
              {domains.map((domain, index) => (
                <article className="atr-domain-card" id={domain.id} key={domain.id}>
                  <div className="atr-domain-card-media">
                    <img src={domain.image} alt={domain.title} width="600" height="390" loading={index === 0 ? 'eager' : 'lazy'} />
                    <span>{`${t('domaines.domain_label', 'Domaine')} ${String(index + 1).padStart(2, '0')}`}</span>
                  </div>
                  <div className="atr-domain-card-body">
                    <div className="atr-domain-title">
                      <i className={`fas ${domain.icon}`} aria-hidden="true" />
                      <h3>{domain.title}</h3>
                    </div>
                    <p>{domain.mission}</p>
                    <ul>
                      {domain.actions.slice(0, 2).map(([label, href]) => (
                        <li key={label}><ActionLink href={href} isRtl={isRtl}>{label}</ActionLink></li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atr-domains-facts">
          <div className="auto-container">
            <div className="atr-domains-facts-heading">
              <p className="section_heading_title_small">{t('domaines.facts_kicker', "Repères vérifiables")}</p>
              <h2>{t('domaines.facts_title', "Les chiffres dans leur contexte.")}</h2>
              <p>{t('domaines.facts_desc', "Les données affichées distinguent les faits institutionnels des effectifs qui doivent encore être confirmés par l’association.")}</p>
            </div>
            <div className="atr-domains-facts-grid">
              {facts.map((fact) => (
                <article key={fact.label}>
                  <i className={`fas ${fact.icon}`} aria-hidden="true" />
                  <strong><CounterUp end={fact.value} />{fact.suffix}</strong>
                  <span>{fact.label}</span>
                  <small>{fact.detail}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atr-domains-note">
          <div className="auto-container">
            <p>
              <strong>{t('domaines.note_title', "À propos des effectifs :")}</strong> {t('domaines.note_text', "le nombre de membres actifs et le volume de guides publiés ne sont pas encore établis par une source publique unique dans le site. Ils ne sont donc pas affichés comme chiffres vérifiés.")}
            </p>
            <Link href="/contact" className="btn-1">
              {t('domaines.note_btn', "Demander les données institutionnelles")} <span aria-hidden="true">{isRtl ? '←' : '→'}</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
