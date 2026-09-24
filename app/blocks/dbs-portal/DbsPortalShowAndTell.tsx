/**
 * Show-and-tell library cards with session links.
 */
import React from "react";

function PersonIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="6.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 16c1.1-2.5 3.1-3.8 5.5-3.8S14.4 13.5 15.5 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function DbsPortalShowAndTell({ title, summary, items }) {
  return (
    <section id="show-and-tell">
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>
      <div className="show-grid">
        {items.map((item) => (
          <article key={item.title} className="panel show-card">
            <div className="show-top">
              <span className="tag">{item.topic}</span>
              <span className="show-date">{item.date}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="post-body">{item.summary}</p>
            <div className="show-presenter"><PersonIcon /><span>{item.presenter}</span></div>
            <div className="show-links">
              <a href={item.sourceHref}>{item.sourceLabel}</a>
              <a href={item.materialHref}>{item.materialLabel}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
