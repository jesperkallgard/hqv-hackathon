/**
 * Newest-first feed rows with type tag, owner, update cadence, and date so people can get an answer without asking a colleague.
 */
import React from "react";

export default function FeedList({ title, intro, items = [] }) {
  return (
    <section className="section" id="feed">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>
      <p className="section-intro">{intro}</p>
      <ul className="feed-list">
        {items.map((item) => (
          <li className="feed-item" key={`${item.title}-${item.date}`}>
            <div className="feed-main">
              <div>
                <span className={`tag ${item.type === "What's being tested" ? "tag-accent" : "tag-muted"}`}>
                  {item.type}
                </span>
              </div>
              <a className="feed-title" href="#">
                {item.title}
              </a>
              <p className="feed-summary">{item.summary}</p>
            </div>
            <div className="feed-meta">
              <span className="meta-label">Owner</span>
              <span className="meta-value">{item.owner}</span>
            </div>
            <div className="feed-meta">
              <span className="meta-label">Updated</span>
              <span className="meta-value">{item.cadence}</span>
            </div>
            <div className="feed-meta">
              <span className="meta-label">Date</span>
              <span className="meta-value date-cell">{item.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
