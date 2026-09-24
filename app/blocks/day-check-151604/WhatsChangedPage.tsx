/**
 * Renders the full internal site with header, feed, ownership, process guidance, and footer in one finished page.
 */
import React from "react";
import FeedList from "./FeedList";
import OwnershipDirectory from "./OwnershipDirectory";
import HowWeWorkSection from "./HowWeWorkSection";

export default function WhatsChangedPage({
  title,
  subtitle,
  nav = [],
  feed = [],
  owners = [],
  howWeWork,
  primaryAction,
  footer,
}) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-brand">
          <h1 className="site-title">{title}</h1>
          <p className="site-subtitle">{subtitle}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link${item.active ? " is-active" : ""}`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main">
        <section className="page-section" id="feed">
          <div className="section-header">
            <div className="stack">
              <h2 className="section-title">Feed</h2>
              <p className="section-intro">
                What changed this week, what is being tested, and who owns it.
                Newest items first.
              </p>
            </div>
            <div className="actions">
              <a className="button button-primary" href={primaryAction?.href || "#"}>
                {primaryAction?.label}
              </a>
            </div>
          </div>
          <div className="panel-quiet">
            <FeedList items={feed} />
          </div>
        </section>

        <section className="page-section" id="owners">
          <div className="stack">
            <h2 className="section-title">Who owns what</h2>
            <p className="section-intro">
              Find the right owner without asking around. Each area names the
              person responsible and how often this part of the site is updated.
            </p>
          </div>
          <div className="panel-quiet">
            <OwnershipDirectory items={owners} />
          </div>
        </section>

        <section className="page-section" id="how-we-work">
          <div className="stack">
            <h2 className="section-title">How we work</h2>
            <p className="section-intro">
              The portal stays useful when updates are plain, owned, and kept to
              what another team needs to know.
            </p>
          </div>
          <HowWeWorkSection
            items={howWeWork?.items || []}
            callout={howWeWork?.callout}
          />
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-note">{footer?.note}</p>
        <p className="footer-meta">{footer?.meta}</p>
      </footer>
    </div>
  );
}
