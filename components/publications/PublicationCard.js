import Link from "next/link";

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
}) {
  return (
    <article className={`publication-card ${className}`.trim()}>
      <Link href={href} className="publication-card-media" aria-label={`Lire ${title}`}>
        <img src={image} alt={alt} />
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
        <Link href={href} className="publication-card-cta">Lire l'article complet <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
