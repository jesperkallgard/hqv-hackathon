/**
 * Release timeline with the existing quick-links panel beside it.
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

  return <span className={`tag ${map[status] || "tag-muted"}`}>{status}</span>;
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="3.5" y="5" width="13" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 3.5v3M13.5 3.5v3M3.5 8.5h13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function DbsPortalPipeline({ title, summary, rows, knowledge }) {
  return (
    <section id="pipeline" className="split-panel split-panel-timeline">
      <div className="panel">
        <div className="panel-header">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
        <div className="timeline-list">
          {rows.map((row) => (
            <article key={row.item} className="timeline-item">
              <div className="timeline-date"><CalendarIcon /><span>{row.window}</span></div>
              <div className="timeline-body">
                <div className="post-title-row">
                  <div className="post-title">{row.item}</div>
                  <StatusTag status={row.status} />
                </div>
                <div className="post-footer">
                  <span>{row.track}</span>
                  <span>{row.bu}</span>
                  <span className="owner-line">Owner: {row.owner}</span>
                  <span>{row.frequency}</span>
                </div>
                <p className="post-body">Next step: {row.nextStep}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="panel" id="knowledge">
        <div className="panel-header">
          <h3>{knowledge.title}</h3>
          <p className="section-summary">Clear navigation to how-to, step-by-step, show and tell documents, and initiative pages.</p>
        </div>
        <div className="list-block">
          {knowledge.items.map((item) => (
            <div key={item.title} className="list-row">
              <div className="post-title">{item.title}</div>
              <p className="post-body">{item.body}</p>
              <a className="button button-secondary" href={item.href}>{item.linkLabel}</a>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
