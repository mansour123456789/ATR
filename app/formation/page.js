'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

export default function FormationPage() {
  const { t } = useLanguage();

  const programs = [
    {
      format: t('formation.prog1_format', "Certification"),
      formatClass: "certification",
      icon: "fa-shield-alt",
      title: t('formation.prog1_title', "Audit de sécurité routière"),
      duration: t('formation.prog1_duration', "Cycle de certification"),
      audience: t('formation.prog1_audience', "Ingénieurs, cadres publics et professionnels de l'ingénierie routière."),
      prerequisites: t('formation.prog1_prereq', "Prérequis : expérience ou formation en infrastructures routières."),
      mode: t('formation.prog1_mode', "Présentiel à Tunis · sessions à confirmer"),
      description: t('formation.prog1_desc', "Un parcours structuré autour de l'identification des risques, de l'audit des infrastructures et de l'approche « Vision Zéro décès ». L'évaluation et les modalités d'attestation sont communiquées par le secrétariat lors de l'inscription."),
      href: "/contact?subject=comite",
      cta: t('formation.prog1_cta', "Demander les modalités"),
    },
    {
      format: t('formation.prog2_format', "Atelier"),
      formatClass: "workshop",
      icon: "fa-road",
      title: t('formation.prog2_title', "Dimensionnement des chaussées"),
      duration: t('formation.prog2_duration', "Session courte · durée à confirmer"),
      audience: t('formation.prog2_audience', "Ingénieurs d'études, techniciens et entreprises de travaux publics."),
      prerequisites: t('formation.prog2_prereq', "Prérequis : bases en conception routière et matériaux."),
      mode: t('formation.prog2_mode', "Présentiel ou hybride · date à confirmer"),
      description: t('formation.prog2_desc', "Une session pratique consacrée aux méthodes de dimensionnement, à la lecture des données de chaussée et à l'utilisation des référentiels techniques tunisiens."),
      href: "/contact?subject=formation",
      cta: t('formation.prog2_cta', "S'inscrire sur la liste"),
    },
    {
      format: t('formation.prog3_format', "Atelier"),
      formatClass: "workshop",
      icon: "fa-leaf",
      title: t('formation.prog3_title', "Résilience climatique des infrastructures"),
      duration: t('formation.prog3_duration', "Atelier technique · durée à confirmer"),
      audience: t('formation.prog3_audience', "Décideurs publics, bureaux d'études, ingénieurs et chercheurs."),
      prerequisites: t('formation.prog3_prereq', "Prérequis : aucune certification préalable indiquée."),
      mode: t('formation.prog3_mode', "Format et lieu à confirmer"),
      description: t('formation.prog3_desc', "Un atelier pour intégrer les risques d'inondation, de chaleur et de glissement dans la conception, la gestion patrimoniale et l'entretien des infrastructures."),
      href: "/contact?subject=formation",
      cta: t('formation.prog3_cta', "Demander le programme"),
    },
  ];

  const speakers = [
    ["M. Ahmed Ksentini", "Universitaire, expert en sécurité routière et spécialiste HSS", "fa-shield-alt"],
    ["M. Khaled Sioud", "Ingénieur génie civil, expert HSS et prévention", "fa-hard-hat"],
    ["Mme Eya Soueb", "Sous-directrice au Ministère de l'Équipement et de l'Habitat", "fa-book"],
  ];

  const faqs = [
    [t('formation.faq1_q', "Comment s'inscrire ?"), t('formation.faq1_a', "Envoyez votre demande via le formulaire Contact en indiquant le programme choisi. Le secrétariat vous transmettra les modalités et la prochaine date confirmée.")],
    [t('formation.faq2_q', "Les formations sont-elles réservées aux membres ?"), t('formation.faq2_a', "Les conditions varient selon le programme. Contactez l'ATR pour connaître les modalités d'accès et les éventuels avantages membres.")],
    [t('formation.faq3_q', "Une attestation est-elle délivrée ?"), t('formation.faq3_a', "Le format Certification prévoit une évaluation et une attestation selon les modalités du cycle. Les ateliers pratiques ne valent pas certification sauf indication contraire.")],
  ];

  const styles = `
    .atr-training-page{background:#F8FAFC;color:#17233D}
    .atr-training-hero{padding:80px 0 70px;background:#FFFFFF}
    .atr-training-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}
    .atr-training-hero h1{color:#102B54;font-size:clamp(32px,4.5vw,42px);line-height:1.2;margin:8px 0 16px;font-weight:700}
    .atr-training-hero p{color:#334155;font-size:17px;line-height:1.72;max-width:630px}
    .atr-training-hero-media{margin:0;border-radius:18px;overflow:hidden;box-shadow:0 16px 35px rgba(16,43,84,.12)}
    .atr-training-hero-media img{display:block;width:100%;height:360px;object-fit:cover}
    .atr-training-hero-media figcaption{padding:14px 18px;background:#FFFFFF;color:#475569;font-size:13.5px;line-height:1.55}
    .atr-training-intro{padding:72px 0 20px}
    .atr-training-section-heading{margin-bottom:32px}
    .atr-training-section-heading .section_heading_title_small,.atr-training-hero .section_heading_title_small,.atr-training-cta .section_heading_title_small{color:#C07B1B;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
    .atr-training-section-heading h2{color:#102B54;font-size:clamp(26px,3.2vw,34px);margin:8px 0 12px;font-weight:700}
    .atr-training-section-heading p{color:#334155;line-height:1.7;max-width:700px;font-size:15.5px}
    .atr-training-formats{display:grid;grid-template-columns:1fr 1fr;gap:24px}
    .atr-training-format{display:flex;gap:20px;padding:28px;background:#FFFFFF;border:1px solid #DFE6EE;border-radius:16px;box-shadow:0 10px 26px rgba(16,43,84,.06)}
    .atr-training-format i{color:#C07B1B;font-size:26px;margin-top:3px}
    .atr-training-format h3{color:#102B54;font-size:20px;margin:0 0 8px;font-weight:700}
    .atr-training-format p{color:#334155;line-height:1.68;margin:0;font-size:15px}
    .atr-training-programs{padding:76px 0 88px;border-top:1px solid rgba(192,123,27,.25);margin-top:48px}
    .atr-training-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
    .atr-training-card{display:flex;flex-direction:column;background:#FFFFFF;border:1px solid #DFE6EE;border-radius:16px;overflow:hidden;box-shadow:0 10px 26px rgba(16,43,84,.07);transition:transform .25s ease,box-shadow .25s ease}
    .atr-training-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(16,43,84,.13)}
    .atr-training-card-top{display:flex;align-items:center;justify-content:space-between;padding:24px 24px 15px}
    .atr-training-card-icon{display:grid;place-items:center;width:44px;height:44px;background:#EEF5FB;color:#1B5299;border-radius:10px;font-size:20px}
    .atr-training-badge{padding:6px 12px;border-radius:999px;font-size:11.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase}
    .atr-training-badge.certification{background:#FFF0D8;color:#A65E0C}
    .atr-training-badge.workshop{background:#E4F4EA;color:#267348}
    .atr-training-card-body{display:flex;flex:1;flex-direction:column;padding:0 24px 25px}
    .atr-training-card h3{color:#102B54;font-size:21px;line-height:1.28;margin:0 0 12px;font-weight:700}
    .atr-training-card-description{color:#334155;font-size:15px;line-height:1.68;margin:0 0 18px}
    .atr-training-meta{display:grid;gap:8px;padding:14px 0;border-top:1px solid #E5EBF1;border-bottom:1px solid #E5EBF1;color:#475569;font-size:13.5px;line-height:1.5;font-weight:500}
    .atr-training-meta strong{color:#102B54}
    .atr-training-card-footer{display:flex;flex-direction:column;gap:13px;margin-top:auto;padding-top:20px}
    .atr-training-card-footer a{display:block;padding:12px 18px;background:#1B5299;color:#FFFFFF;text-align:center;border-radius:10px;text-decoration:none;font-size:14.5px;font-weight:700;transition:all .3s ease}
    .atr-training-card-footer a:hover{background:#C07B1B}
    .atr-training-calendar{padding:42px 48px;background:#102B54;border-radius:16px;color:#FFFFFF;display:flex;align-items:center;justify-content:space-between;gap:30px;box-shadow:0 12px 32px rgba(16,43,84,.15)}
    .atr-training-calendar h2{color:#FFFFFF;font-size:clamp(22px,2.8vw,28px);margin:0 0 8px;font-weight:700}
    .atr-training-calendar p{color:#E2E8F0;margin:0;line-height:1.65;font-size:15.5px}
    .atr-training-calendar a,.atr-training-cta a{display:inline-block;white-space:nowrap;padding:13px 22px;background:#C07B1B;color:#FFFFFF;border-radius:10px;text-decoration:none;font-weight:700;font-size:14.5px;transition:all .3s ease}
    .atr-training-calendar a:hover,.atr-training-cta a:hover{background:#D98E28;transform:translateY(-2px)}
    .atr-training-speakers{padding:78px 0}
    .atr-training-speaker-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
    .atr-training-speaker{display:flex;gap:16px;padding:22px;background:#FFFFFF;border:1px solid #DFE6EE;border-radius:14px;box-shadow:0 6px 18px rgba(16,43,84,.04)}
    .atr-training-speaker i{color:#C07B1B;font-size:22px}
    .atr-training-speaker h3{color:#102B54;font-size:17.5px;margin:0 0 5px;font-weight:700}
    .atr-training-speaker p{color:#475569;font-size:13.5px;line-height:1.55;margin:0}
    .atr-training-faq{padding:70px 0;background:#EEF5FB}
    .atr-training-faq-list{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
    .atr-training-faq article{padding:24px;background:#FFFFFF;border-radius:14px;border:1px solid #DFE6EE;box-shadow:0 6px 18px rgba(16,43,84,.04)}
    .atr-training-faq h3{color:#102B54;font-size:18.5px;margin:0 0 9px;font-weight:700}
    .atr-training-faq p{color:#334155;font-size:14.5px;line-height:1.68;margin:0}
    .atr-training-cta{padding:70px 0;background:#FFFFFF}
    .atr-training-cta h2{color:#102B54;font-size:clamp(26px,3.2vw,34px);margin:8px 0 12px;font-weight:700}
    .atr-training-cta p{color:#334155;line-height:1.72;max-width:650px;margin-bottom:24px;font-size:16px}
    .atr-training-cta a{margin-right:12px}
    .atr-training-cta a.secondary{background:#1B5299}
    @media(max-width:991px){.atr-training-hero-grid{grid-template-columns:1fr;gap:30px}.atr-training-hero-media{order:-1}.atr-training-grid{grid-template-columns:1fr 1fr}.atr-training-speaker-grid,.atr-training-faq-list{grid-template-columns:1fr 1fr}}
    @media(max-width:767px){.atr-training-hero{padding:48px 0}.atr-training-hero h1{font-size:32px}.atr-training-hero-media img{height:250px}.atr-training-formats,.atr-training-grid,.atr-training-speaker-grid,.atr-training-faq-list{grid-template-columns:1fr}.atr-training-intro,.atr-training-speakers{padding:48px 0}.atr-training-programs{padding:48px 0 55px}.atr-training-section-heading h2{font-size:28px}.atr-training-calendar{display:block;padding:28px}.atr-training-calendar a{margin-top:18px}.atr-training-cta a{display:block;margin:10px 0 0;text-align:center}}
  `;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.training', "Formation & Académie")}>
      <main className="atr-training-page">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <section className="atr-training-hero">
          <div className="auto-container atr-training-hero-grid">
            <div>
              <p className="section_heading_title_small">{t('formation.hero_kicker', "Académie ATR")}</p>
              <h1>{t('formation.hero_title', "Développer les compétences qui rendent les routes plus sûres.")}</h1>
              <p>{t('formation.hero_lead', "L'Académie ATR propose des formats de formation continue pour les ingénieurs, techniciens, cadres publics et entreprises du secteur routier. Les dates et modalités sont confirmées par le secrétariat pour chaque session.")}</p>
            </div>
            <figure className="atr-training-hero-media">
              <img src="/images/atr-road-design.png" alt="Conception technique d'une infrastructure routière pour la formation ATR" />
              <figcaption>{t('formation.caption', "Visuel technique de conception routière — les sessions de l'Académie privilégient l'application aux projets réels.")}</figcaption>
            </figure>
          </div>
        </section>

        <section className="atr-training-intro">
          <div className="auto-container">
            <div className="atr-training-section-heading">
              <p className="section_heading_title_small">{t('formation.formats_kicker', "Deux formats")}</p>
              <h2>{t('formation.formats_title', "Choisir le bon format d'apprentissage")}</h2>
            </div>
            <div className="atr-training-formats">
              <article className="atr-training-format">
                <i className="fas fa-certificate" aria-hidden="true" />
                <div>
                  <h3>{t('formation.format1_title', "Certifications")}</h3>
                  <p>{t('formation.format1_text', "Un cycle structuré avec progression pédagogique, évaluation et attestation selon le programme. Il s'adresse aux professionnels qui souhaitent formaliser une compétence dans la durée.")}</p>
                </div>
              </article>
              <article className="atr-training-format">
                <i className="fas fa-laptop-code" aria-hidden="true" />
                <div>
                  <h3>{t('formation.format2_title', "Ateliers pratiques")}</h3>
                  <p>{t('formation.format2_text', "Une session courte centrée sur un problème métier, des méthodes et des cas concrets. L'atelier favorise la mise en pratique et ne vaut pas certification sauf indication explicite.")}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="atr-training-programs">
          <div className="auto-container">
            <div className="atr-training-section-heading">
              <p className="section_heading_title_small">{t('formation.programs_kicker', "Programmes phares")}</p>
              <h2>{t('formation.programs_title', "Des parcours lisibles avant l'inscription")}</h2>
              <p>{t('formation.programs_intro', "Les prochaines dates n'étant pas encore publiées, chaque fiche indique clairement ce qui est confirmé et ce qui doit être demandé au secrétariat.")}</p>
            </div>
            <div className="atr-training-grid">
              {programs.map((program) => (
                <article className="atr-training-card" key={program.title}>
                  <div className="atr-training-card-top">
                    <span className="atr-training-card-icon"><i className={`fas ${program.icon}`} aria-hidden="true" /></span>
                    <span className={`atr-training-badge ${program.formatClass}`}>{program.format}</span>
                  </div>
                  <div className="atr-training-card-body">
                    <h3>{program.title}</h3>
                    <p className="atr-training-card-description">{program.description}</p>
                    <div className="atr-training-meta">
                      <span><strong>{t('formation.duration_label', 'Durée :')}</strong> {program.duration}</span>
                      <span><strong>{t('formation.audience_label', 'Public :')}</strong> {program.audience}</span>
                      <span><strong>{program.prerequisites}</strong></span>
                      <span><strong>{t('formation.mode_label', 'Modalité :')}</strong> {program.mode}</span>
                      <span><strong>{t('formation.session_label', 'Prochaine session :')}</strong> {t('formation.to_confirm', 'à confirmer')}</span>
                    </div>
                    <div className="atr-training-card-footer">
                      <Link href={program.href}>{program.cta} <span aria-hidden="true">→</span></Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="auto-container">
          <div className="atr-training-calendar">
            <div>
              <h2>{t('formation.calendar_title', "Voir les sessions publiées dans l'agenda")}</h2>
              <p>{t('formation.calendar_text', "Les dates confirmées sont centralisées dans le calendrier de l'ATR pour éviter les informations contradictoires.")}</p>
            </div>
            <Link href="/calendrier">{t('formation.calendar_btn', "Ouvrir le calendrier →")}</Link>
          </div>
        </section>

        <section className="atr-training-speakers">
          <div className="auto-container">
            <div className="atr-training-section-heading">
              <p className="section_heading_title_small">{t('formation.speakers_kicker', "Intervenants identifiés")}</p>
              <h2>{t('formation.speakers_title', "Une expertise issue du terrain")}</h2>
            </div>
            <div className="atr-training-speaker-grid">
              {speakers.map(([name, role, icon]) => (
                <article className="atr-training-speaker" key={name}>
                  <i className={`fas ${icon}`} aria-hidden="true" />
                  <div>
                    <h3>{name}</h3>
                    <p>{role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atr-training-faq">
          <div className="auto-container">
            <div className="atr-training-section-heading">
              <p className="section_heading_title_small">{t('formation.faq_kicker', "Questions fréquentes")}</p>
              <h2>{t('formation.faq_title', "Avant de vous inscrire")}</h2>
            </div>
            <div className="atr-training-faq-list">
              {faqs.map(([question, answer]) => (
                <article key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atr-training-cta">
          <div className="auto-container">
            <p className="section_heading_title_small">{t('formation.cta_kicker', "Prochaine étape")}</p>
            <h2>{t('formation.cta_title', "Construire votre parcours avec l'ATR")}</h2>
            <p>{t('formation.cta_text', "Demandez le programme détaillé, les conditions d'accès et les prochaines dates au secrétariat.")}</p>
            <Link href="/contact?subject=formation">{t('formation.cta_btn1', "Demander les informations →")}</Link>
            <Link href="/calendrier" className="secondary">{t('formation.cta_btn2', "Voir le calendrier →")}</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
