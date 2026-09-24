/**
 * Site header with brand summary and short navigation.
 */
import React from "react";

export default function DbsPortalHeader({ title, summary, nav }) {
  return (
    <header className="site-header">
      <div className="site-brand">
        {/* The wordmark is the way home, so the bar does not need a link
            saying so as well. */}
        <a className="site-title" href="/dbs-portal/live">
          {title}
        </a>
        {summary ? <p className="site-summary">{summary}</p> : null}
      </div>
      <nav className="site-nav" aria-label="Section navigation">
        {nav.map((item) => (
          <a key={item.label} className="nav-link" href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
