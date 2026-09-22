/**
 * The whole page: header with site name and short navigation, the What's Changed feed as one newest-first list of one-line rows (each with owner, date and, where it is a test, a round status tag), and a footer. Rows are hairline-separated, no filters, no search, no tabs. Built from Team Bo's single-feed structure and Team Dag's row-writing rule.
 */
"use client";

import React from "react";

export default function ChangeFeed({
  siteName,
  nav = [],
  title,
  ingress,
  entries = [],
  footerNote,
  footerLinks = [],
}) {
  return (
    <div className="page">
      <header className="site-header">
        <a className="wordmark" href="#">
          {siteName}
        </a>
        <nav className="site-nav">
          {nav.map((item, i) => (
            <a
              key={item.label}
              href="#"
              className={i === 0 ? "nav-link is-current" : "nav-link"}
            >
              {item.label}
            </a>
          ))}
          <a className="button button-primary" href="#">
            Add an update
          </a>
        </nav>
      </header>

      <main className="main">
        <h1 className="page-title">{title}</h1>
        <p className="ingress">{ingress}</p>

        {entries.length === 0 ? (
          <div className="empty">
            <p className="empty-title">Nothing has been posted yet.</p>
            <p>
              A line appears here the moment somebody adds what changed, who
              owns it and the date.
            </p>
          </div>
        ) : (
          <ol className="feed">
            {entries.map((entry, i) => (
              <li className="feed-row" key={i}>
                <p className="feed-line">
                  {entry.line}
                  {entry.status ? (
                    <span className="tag tag-status">{entry.status}</span>
                  ) : null}
                </p>
                <p className="feed-meta">
                  <span className="tag">{entry.owner}</span>
                  <span className="tag">{entry.cadence}</span>
                  <span className="feed-date">{entry.date}</span>
                </p>
              </li>
            ))}
          </ol>
        )}
      </main>

      <footer className="site-footer">
        <p className="footer-note">{footerNote}</p>
        <p className="footer-links">
          {footerLinks.map((label) => (
            <a key={label} href="#">
              {label}
            </a>
          ))}
        </p>
      </footer>
    </div>
  );
}
