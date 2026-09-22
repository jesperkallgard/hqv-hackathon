/**
 * A single-page internal front door with site header, short nav, four clickable route cards, and footer for the “What’s Changed” site.
 */
import React from "react";

function StatusTag({ status }) {
  const className = status === "In test" ? "status-tag is-watch" : "status-tag is-current";
  return <span className={className}>{status}</span>;
}

function FrontDoorCard({ card }) {
  return (
    <li>
      <a className="door-card panel" href={card.href}>
        <div className="door-card-top">
          <div className="door-card-title-group">
            <h3 className="door-card-title">{card.title}</h3>
            <p className="door-card-summary">{card.summary}</p>
          </div>
          <StatusTag status={card.status} />
        </div>

        <dl className="door-card-meta">
          <div className="door-card-meta-row door-card-owner-row">
            <dt>Owner</dt>
            <dd>{card.owner}</dd>
          </div>
          <div className="door-card-meta-row">
            <dt>Last update</dt>
            <dd>{card.updated}</dd>
          </div>
          <div className="door-card-meta-row">
            <dt>Update rhythm</dt>
            <dd>{card.cadence}</dd>
          </div>
        </dl>

        <p className="door-card-action">{card.action}</p>
      </a>
    </li>
  );
}

export default function WhatsChangedPortal({ siteName, summary, nav = [], frontDoor, footer }) {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="site-brand">
          <h1 className="site-title">{siteName}</h1>
          <p className="site-summary">{summary}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item, index) => (
            <a
              key={item.label}
              className={`nav-link${index === 0 ? " is-active" : ""}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main" id="front-door">
        <section className="front-door" aria-labelledby="front-door-title">
          <div className="front-door-intro">
            <h2 id="front-door-title">{frontDoor.title}</h2>
            <p className="section-note">{frontDoor.body}</p>
          </div>

          <ol className="door-list">
            {frontDoor.cards.map((card) => (
              <FrontDoorCard key={card.title} card={card} />
            ))}
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-note">{footer.note}</p>
        <p className="footer-meta">{footer.meta}</p>
      </footer>
    </div>
  );
}
