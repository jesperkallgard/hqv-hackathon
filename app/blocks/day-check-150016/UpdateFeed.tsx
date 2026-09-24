/**
 * Newest-first feed rows for changes, tests, and ownership signals.
 */
import React from "react";

export default function UpdateFeed({ items = [] }) {
  return (
    <section className="section" id="feed">
      <div className="section-header">
        <div className="stack">
          <h2>The feed</h2>
          <p className="section-copy">
            What changed this week, what is being tested, and who owns what.
          </p>
        </div>
      </div>
      <ul className="feed-list">
        {items.map((item) => (
          <li key={`${item.title}-${item.date}`} className="feed-row">
            <div className="feed-main">
              <span className={`status-tag${item.status === "Being tested" ? " is-highlight" : ""}`}>
                {item.status}
              </span>
              <div className="feed-summary">
                <div className="feed-title">{item.title}</div>
                <p className="feed-summary">{item.summary}</p>
              </div>
            </div>
            <div className="feed-meta">
              <div className="meta-label">Owner</div>
              <div className="meta-value owner-name">{item.ownerName}</div>
              <div className="owner-role">{item.ownerRole}</div>
            </div>
            <div className="meta-block">
              <div className="meta-label">Date</div>
              <div className="meta-value">{item.date}</div>
            </div>
            <div className="meta-block">
              <div className="meta-label">Updated</div>
              <div className="meta-value">{item.cadence}</div>
            </div>
            <div className="meta-block">
              <div className="meta-label">Link</div>
              <div className="meta-value"><a href="#">Open note</a></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
