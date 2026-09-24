/**
 * Shows the main answer screen as a newest-first list of updates with owner, date, cadence, and state.
 */
import React from "react";

export default function FeedList({ items = [] }) {
  return (
    <ul className="feed-list">
      {items.map((item) => {
        const toneClass =
          item.stateTone === "strong"
            ? "tag tag-strong"
            : item.stateTone === "accent"
              ? "tag tag-accent"
              : "tag";

        return (
          <li className="feed-row" key={`${item.title}-${item.date}`}>
            <div className="feed-main">
              <h3 className="feed-title">{item.title}</h3>
              <p className="feed-summary">{item.summary}</p>
            </div>
            <div className="owner-meta">
              <div className="meta-label">Owner</div>
              <div className="meta-value">{item.owner}</div>
            </div>
            <div className="feed-meta">
              <div className="meta-label">Updated</div>
              <div className="meta-value meta-date">{item.date}</div>
            </div>
            <div className="feed-meta">
              <div className="meta-label">Cadence</div>
              <div className="meta-value">{item.cadence}</div>
            </div>
            <div>
              <span className={toneClass}>{item.state}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
