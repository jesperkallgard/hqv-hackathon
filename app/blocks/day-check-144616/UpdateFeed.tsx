/**
 * Newest-first update feed with status, owner, date, cadence, and summary.
 */
import React from "react";

export default function UpdateFeed({ title, intro, actions = [], items = [] }) {
  return (
    <section className="section" id="feed-listing">
      <div className="section-heading">
        <div>
          <h2>{title}</h2>
          <p className="section-intro">{intro}</p>
        </div>
        <div className="section-actions">
          {actions.map((action) => (
            <a key={action.label} className="button button-secondary" href={action.href}>
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <ul className="feed-list">
        {items.map((item) => (
          <li key={`${item.title}-${item.date}`} className="feed-item">
            <div className="feed-primary">
              <div>
                <span className={`status-tag ${item.status === "Current" ? "status-current" : "tag-accent"}`}>{item.status}</span>
              </div>
              <a className="feed-title" href={item.href}>{item.title}</a>
              <p className="feed-summary">{item.summary}</p>
            </div>
            <div className="feed-meta">
              <span className="meta-label">Owner</span>
              <span className="meta-value">{item.owner}</span>
            </div>
            <div className="meta-block">
              <span className="meta-label">Date</span>
              <span className="meta-value">{item.date}</span>
            </div>
            <div className="meta-block">
              <span className="meta-label">Updated</span>
              <span className="meta-value">{item.cadence}</span>
            </div>
            <div className="meta-block">
              <span className="meta-label">Action</span>
              <a className="meta-value" href={item.href}>Open update</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
