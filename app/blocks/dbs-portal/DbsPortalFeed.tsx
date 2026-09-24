/**
 * What happened, newest first.
 *
 * The room asked for a feed rather than another grid of cards: one column, one
 * item per row, so the page can be read downwards without deciding which card
 * to look at first. Every row carries what changed, what it meant, who owns it
 * and when it was measured — the seven fields, in the order somebody scanning
 * needs them.
 */
import React from "react";

function StatusTag({ status }) {
  const map = {
    Live: "status-live",
    Good: "status-good",
    Watch: "status-watch",
    Planned: "status-planned",
    "Ready for IT": "status-watch",
    "In review": "status-planned",
    Investigating: "status-watch",
  };
  if (!status) return null;
  return <span className={`tag ${map[status] || "tag-muted"}`}>{status}</span>;
}

export default function DbsPortalFeed({ title, summary, items }) {
  return (
    <section id="feed">
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>
      <ol className="feed feed-timeline">
        {items.map((item) => (
          <li key={item.title} className="feed-item">
            <span className="feed-mark" aria-hidden="true" />
            {item.date ? <p className="feed-when">{item.date}</p> : null}
            <div className="feed-head">
              <h3 className="feed-title">{item.title}</h3>
              <StatusTag status={item.status} />
            </div>
            <p className="feed-body">{item.body}</p>
            <div className="feed-meta">
              {item.owner ? <span className="owner-line">Owner: {item.owner}</span> : null}
              {item.frequency ? <span>{item.frequency}</span> : null}
              {item.track ? <span>{item.track}</span> : null}
              {item.bu ? <span>{item.bu}</span> : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
