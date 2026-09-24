/**
 * Page-level component that renders the full internal site with header, hero, feed-first content, owner directory, working rules, and footer.
 */
import React from "react";
import FeedList from "./FeedList";
import OwnersDirectory from "./OwnersDirectory";
import HowWeWorkList from "./HowWeWorkList";

export default function WhatsChangedPage({
  siteName,
  siteSubtitle,
  nav = [],
  hero,
  primaryAction,
  feed,
  owners,
  waysOfWorking,
  footer,
}) {
  return (
    <div className="page">
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-brand">
            <a className="site-title" href="#">
              {siteName}
            </a>
            <p className="site-subtitle">{siteSubtitle}</p>
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
        </div>
      </header>

      <main className="main">
        <div className="site-shell">
          <div className="stack">
            <section className="hero">
              <div className="hero-copy">
                <h1>{hero.title}</h1>
                <p>{hero.summary}</p>
                <p className="hero-meta">{hero.meta}</p>
              </div>
              <div className="button-row">
                <a className="button button-primary" href={primaryAction.href}>
                  {primaryAction.label}
                </a>
              </div>
            </section>

            <FeedList {...feed} />
            <OwnersDirectory {...owners} />
            <HowWeWorkList {...waysOfWorking} />
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-block">
            <div className="footer-title">{footer.ownerTitle}</div>
            <p className="footer-copy">{footer.ownerCopy}</p>
          </div>
          <div className="footer-block">
            <div className="footer-title">{footer.contactTitle}</div>
            <p className="footer-copy">{footer.contactCopy}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
