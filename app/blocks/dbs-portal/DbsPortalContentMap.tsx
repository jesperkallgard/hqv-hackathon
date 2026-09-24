/**
 * New named list of content types, each with purpose, owner, frequency and example posts.
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
    Open: "status-planned",
  };

  return <span className={`tag ${map[status] || "tag-muted"}`}>{status}</span>;
}

export default function DbsPortalContentMap({ title, summary, contentMap }) {
  return (
    <section id="content-map">
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>
      <div className="content-grid">
        {contentMap.map((area) => (
          <article key={area.name} className="area-card">
            <div className="area-card-header">
              <div className="area-card-copy">
                <h3>{area.name}</h3>
                <p>{area.purpose}</p>
              </div>
              <div className="area-meta">
                {area.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="content-map-meta">
              <div><strong>Owner</strong> {area.owner}</div>
              <div><strong>Frequency</strong> {area.frequency}</div>
            </div>
            <ul className="post-list">
              {area.items.map((item) => (
                <li key={item.title} className="post-item">
                  <div className="post-title-row">
                    <div className="post-title">{item.title}</div>
                    <StatusTag status={item.status} />
                  </div>
                  <p className="post-body">{item.body}</p>
                  <div className="post-footer">
                    <span className="owner-line">Owner: {item.owner}</span>
                    <span>{item.track}</span>
                    <span>{item.bu}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
