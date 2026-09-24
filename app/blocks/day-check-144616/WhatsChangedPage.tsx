/**
 * Complete internal portal page with header, feed, ownership table, working guidance, footer, and front-door posting form.
 */
import React from "react";
import UpdateFeed from "./UpdateFeed";
import OwnershipTable from "./OwnershipTable";
import HowWeWorkList from "./HowWeWorkList";
import SiteFooter from "./SiteFooter";

export default function WhatsChangedPage({ title, summary, nav = [], primaryAction, feed, owners, howWeWork, footer }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-brand">
          <h1 className="site-title">{title}</h1>
          <p className="site-summary">{summary}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              className="nav-link"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main">
        <section className="page-hero split-callout" id="feed">
          <div className="panel">
            <div className="section-heading">
              <div>
                <h2>Monday morning, one screen</h2>
              </div>
            </div>
            <p className="section-intro">
              The main content is one generous feed, newest first, with rows for what changed this week, what&apos;s being tested, and who owns the dealer locator.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={primaryAction?.href || "#post-update"}>{primaryAction?.label}</a>
              <a className="button button-secondary" href="#owners">Who owns what</a>
            </div>
          </div>
          <div className="note-card" id="post-update">
            <div className="section">
              <div>
                <h2>Post an update</h2>
              </div>
              <p className="section-intro">Short sentences. Name the owner. Say what changed and what it meant.</p>
              <div className="form-row">
                <label htmlFor="update-title">Title</label>
                <input id="update-title" type="text" placeholder="What changed" />
              </div>
              <div className="form-row">
                <label htmlFor="update-owner">Owner</label>
                <input id="update-owner" type="text" placeholder="Full name and role" />
              </div>
              <div className="form-row">
                <label htmlFor="update-summary">What it meant</label>
                <textarea id="update-summary" placeholder="What changed and what it meant" />
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#">Post update</a>
                <a className="button button-quiet" href="#">Save draft</a>
              </div>
            </div>
          </div>
        </section>

        <UpdateFeed {...feed} />
        <OwnershipTable {...owners} />
        <HowWeWorkList {...howWeWork} />
      </main>

      <SiteFooter {...footer} />
    </div>
  );
}
