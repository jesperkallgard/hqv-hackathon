/**
 * A single-page front door with header, short navigation, four entry cards, and footer for the internal site.
 */
import React from "react";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="card-icon">
      <path
        d="M4 10h10m0 0-4-4m4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhatsChangedPage({
  title,
  summary,
  nav = [],
  primaryAction,
  secondaryActions = [],
  cards = [],
  footer,
}) {
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

      <main className="page-main">
        <section className="front-door" aria-labelledby="front-door-heading">
          <div className="section-header section-header-front">
            <div className="stack">
              <h2 id="front-door-heading">Four ways in</h2>
              <p className="section-intro">
                Pick the area that answers your question. Every card names who to ask and when it was last updated.
              </p>
            </div>
            <div className="section-actions">
              {primaryAction ? (
                <a className="button button-primary" href={primaryAction.href}>
                  {primaryAction.label}
                </a>
              ) : null}
              {secondaryActions.map((action) => (
                <a key={action.label} className="button button-secondary" href={action.href}>
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="door-list">
            {cards.map((card, index) => (
              <a key={card.title} className={`door-card${index === 0 ? " is-primary-door" : ""}`} href={card.href}>
                <div className="door-card-top">
                  <div className="door-copy stack">
                    <div className="door-heading-row">
                      <h3 className="door-title">{card.title}</h3>
                      <span className="door-date">Updated {card.lastUpdated}</span>
                    </div>
                    <p className="door-note">{card.note}</p>
                  </div>
                  <span className="door-action">
                    <span>{card.actionLabel}</span>
                    <ArrowIcon />
                  </span>
                </div>
                <div className="door-meta">
                  <span className="tag">Owner</span>
                  <div className="owner-cell">
                    <span className="owner-name">{card.ownerName}</span>
                    <span className="owner-role">{card.ownerRole}</span>
                  </div>
                </div>
              </a>
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
