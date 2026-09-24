/**
 * Existing track and service areas preserved as scan-first cards.
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

export default function DbsPortalAreas({ title, summary, areas }) {
  return (
    <section id="areas">
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>
      <div className="area-grid">
        {areas.map((area) => (
          <article key={area.name} className="area-card">
            <div className="area-card-header">
              <div className="area-card-copy">
                <h3>{area.name}</h3>
                <p>{area.description}</p>
              </div>
              <div className="area-meta">
                {area.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <ul className="post-list">
              {area.posts.map((post) => (
                <li key={post.title} className="post-item">
                  <div className="post-title-row">
                    <div className="post-title">{post.title}</div>
                    <StatusTag status={post.status} />
                  </div>
                  <p className="post-body">{post.body}</p>
                  <div className="post-footer">
                    <span className="owner-line">Owner: {post.owner}</span>
                    <span>{post.frequency}</span>
                    <span>{post.track}</span>
                    <span>{post.bu}</span>
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
