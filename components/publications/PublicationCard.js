'use client'
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PublicationCard({
  badge,
  date,
  location,
  source,
  title,
  summary,
  image,
  alt,
  href,
  className = "",
  readMoreLabel,
}) {
  const { t } = useLanguage();
  const ctaLabel = readMoreLabel || t('publications.read_article', "Lire l'article complet");

  return (
    <article className={`publication-card ${className}`.trim()}>
      <Link href={href} className="publication-card-media" aria-label={`Lire ${title}`} style={image && (image.includes('1000007112') || image.includes('logo')) ? { background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}}>
        <img
          src={image}
          alt={alt}
          style={image && (image.includes('1000007112') || image.includes('logo')) ? { objectFit: 'contain', padding: '36px', maxHeight: '360px', width: 'auto' } : {}}
        />
      </Link>
      <div className="publication-card-content">
        <span className="publication-card-badge"><span aria-hidden="true">◆</span> {badge}</span>
        <div className="publication-card-meta">
          <span aria-hidden="true">&#128197;</span>
          <time>{date}</time>
          {location && <><span aria-hidden="true">·</span><span>{location}</span></>}
          <span className="publication-card-source">{source}</span>
        </div>
        <h2 className="publication-card-title">{title}</h2>
        <p className="publication-card-summary">{summary}</p>
        <Link href={href} className="publication-card-cta">{ctaLabel} <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
