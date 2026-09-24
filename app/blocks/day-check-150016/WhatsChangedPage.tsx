/**
 * Page shell with header, hero, section scaffolding, and footer for the internal portal.
 */
import React from "react";

export default function WhatsChangedPage({
  title,
  summary,
  nav = [],
  intro,
  heroTags = [],
  primaryAction,
  secondaryActions = [],
  footer,
}) {
  return (
    <div className="page">
      <header className="site-header">
        <div className="site-brand">
          <a className="site-title" href="#">{title}</a>
          <p className="site-summary">{summary}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              className={`nav-link${item.current ? " is-active" : ""}`}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <div className="hero-meta">
            {heroTags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="stack">
            <h1>{title}</h1>
            <p className="hero-intro">{intro}</p>
          </div>
          <div className="button-row">
            {primaryAction ? (
              <a className="button button-primary" href={primaryAction.href}>{primaryAction.label}</a>
            ) : null}
            {secondaryActions.map((action) => (
              <a key={action.label} className="button button-secondary" href={action.href}>
                {action.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>{footer?.keeper}</div>
        <div>{footer?.text}</div>
        <div className="footer-links">
          {(footer?.links || []).map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
