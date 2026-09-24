/**
 * Newest-first feed of updates showing what changed, owner, date, update frequency, and work state.
 */
import React from "react";

function statusClass(status) {
  return status === "Being tested" ? "status-tag is-accent" : "status-tag";
}

export default function UpdateFeed({ title, description, items = [] }) {
  return (
    <section className="section" id="feed">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </div>
      <div className="panel">
        <div className="panel-body">
          <ul className="feed-list">
            {items.map((item) => (
              <li className="feed-row" key={`${item.title}-${item.date}`}>
                <div className="feed-main">
                  <div className="feed-title">{item.title}</div>
                  <p className="feed-text">{item.text}</p>
                </div>
                <div className="feed-meta">{item.owner}</div>
                <div className="feed-date">{item.date}</div>
                <div>
                  <div className="feed-frequency">{item.frequency}</div>
                  <div style={{ marginTop: "0.5rem" }}>
                    <span className={statusClass(item.status)}>{item.status}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
