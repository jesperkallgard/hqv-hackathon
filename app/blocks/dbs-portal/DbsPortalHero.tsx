/**
 * Opening section with the main statement, actions and three outcome highlights.
 */
import React from "react";

function StatusTag({ status }) {
  const map = {
    Live: "status-live",
    Good: "status-good",
    Watch: "status-watch",
    Planned: "status-planned",
    "Ready for IT": "status-watch",
    "In review": "status-planned",
    Investigating: "status-watch",
    Open: "status-planned",
  };

  return <span className={`tag ${map[status] || "tag-muted"}`}>{status}</span>;
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M10 2.5l1.9 4.6 4.6 1.9-4.6 1.9L10 15.5l-1.9-4.6-4.6-1.9 4.6-1.9L10 2.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DbsPortalHero({ hero, highlights }) {
  return (
    <section className="hero" id="overview">
      <div className="hero-copy">
        <h1>{hero.title}</h1>
        <p className="hero-intro">{hero.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={hero.primaryAction.href}>
            {hero.primaryAction.label}
          </a>
          <a className="button button-secondary" href={hero.secondaryAction.href}>
            {hero.secondaryAction.label}
          </a>
          <a className="button button-secondary" href={hero.tertiaryAction.href}>
            {hero.tertiaryAction.label}
          </a>
          <a className="button button-favourite" href={hero.favouriteAction.href}>
            {hero.favouriteAction.label}
          </a>
        </div>
      </div>

      <div className="highlight-grid">
        {highlights.map((item) => (
          <article key={item.title} className="highlight-card">
            <div className="highlight-top">
              <div className="icon-chip"><SparkIcon /></div>
              <StatusTag status={item.status} />
            </div>
            <div className="highlight-value">{item.value}</div>
            <h2 className="highlight-title">{item.title}</h2>
            <p className="highlight-quote">{item.quote}</p>
            <div className="highlight-meta">
              <span className="owner-line">Owner: {item.owner}</span>
              <span>{item.frequency}</span>
              <span>{item.track}</span>
              <span>{item.bu}</span>
            </div>
            <div className="highlight-dates">
              <span>Measured {item.measured}</span>
              <span>Compared with {item.comparison}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
