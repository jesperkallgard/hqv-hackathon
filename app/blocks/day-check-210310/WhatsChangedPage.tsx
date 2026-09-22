/**
 * Reworked the existing page component into a front-door page with a header, short navigation, four entry cards in one column, and a footer.
 */
import React from "react";

function StatusTag({ label }) {
  return <span className="status-tag">{label}</span>;
}

function DoorCard({ title, href, actionLabel, updatedLabel, ownerName, ownerRole, summary, status, prominence }) {
  return (
    <a className={`door-card ${prominence === "primary" ? "door-card-primary" : ""}`.trim()} href={href}>
      <div className="door-card-head">
        <div className="stack stack-tight">
          <StatusTag label={status} />
          <h2 className="door-card-title">{title}</h2>
        </div>
        <span className="button button-secondary door-card-action">{actionLabel}</span>
      </div>
      <p className="door-card-summary">{summary}</p>
      <div className="door-card-meta">
        <span>{updatedLabel}</span>
        <div className="owner-cell">
          <span className="owner-name">{ownerName}</span>
          <span className="owner-role">{ownerRole}</span>
        </div>
      </div>
    </a>
  );
}

export default function WhatsChangedPage({ title, summary, nav = [], cards = [], footer }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-brand">
          <h1 className="site-title">{title}</h1>
          <p className="site-summary">{summary}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.label} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main page-main-frontdoor">
        <section className="section section-frontdoor">
          <div className="section-header section-header-frontdoor">
            <div className="stack">
              <p className="frontdoor-kicker">Front door</p>
              <h2 className="frontdoor-heading">Pick the place you need.</h2>
              <p className="section-intro frontdoor-intro">
                Four ways in. Each one tells you what it covers, who to ask, and when it was last updated.
              </p>
            </div>
          </div>

          <div className="door-list">
            {cards.map((card) => (
              <DoorCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-note">{footer?.keeper}</p>
        <div className="footer-links">
          {(footer?.links || []).map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
