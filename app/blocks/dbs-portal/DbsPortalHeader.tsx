/**
 * Site header with brand summary and short navigation.
 */
import React from "react";

export default function DbsPortalHeader({ title, summary, nav }) {
  return (
    <header className="site-header">
      <div className="site-brand">
        <a className="site-title" href="#overview">{title}</a>
        <p className="site-summary">{summary}</p>
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
