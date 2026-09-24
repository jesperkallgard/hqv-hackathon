/**
 * Page-level component that renders the full internal portal with header, intro, feed, owners table, how we work list, and footer.
 */
import React from "react";
import UpdateFeed from "./UpdateFeed";
import OwnersTable from "./OwnersTable";
import HowWeWorkList from "./HowWeWorkList";

export default function WhatsChangedPage({
  siteName,
  subtitle,
  nav = [],
  introTitle,
  introSummary,
  introMeta = [],
  primaryAction,
  feedSection,
  ownersSection,
  workSection,
  footer,
}) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-width site-header-inner">
          <div className="site-brand">
            <a className="site-title" href="#top">{siteName}</a>
            <p className="site-subtitle">{subtitle}</p>
          </div>
          <nav className="site-nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.label}
                className={`nav-link${item.active ? " is-active" : ""}`}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-main" id="top">
        <div className="site-width">
          <div className="content-column">
            <section className="page-intro">
              <div className="page-title-row">
                <div>
                  <h1>{introTitle}</h1>
                  <p className="page-summary">{introSummary}</p>
                </div>
                {primaryAction ? (
                  <a className="button button-primary" href={primaryAction.href}>
                    {primaryAction.label}
                  </a>
                ) : null}
              </div>
              {introMeta.length ? (
                <div className="page-meta">
                  {introMeta.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              ) : null}
            </section>

            <UpdateFeed {...feedSection} />
            <OwnersTable {...ownersSection} />
            <HowWeWorkList {...workSection} />
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="site-width site-footer-inner">
          <p className="footer-note">{footer?.note}</p>
          <div className="footer-meta">
            {(footer?.meta || []).join(" · ")}
          </div>
        </div>
      </footer>
    </div>
  );
}
