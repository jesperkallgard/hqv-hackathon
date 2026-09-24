/**
 * This week’s activities split into ongoing and upcoming lists.
 */
import React from "react";

export default function DbsPortalActivities({ title, summary, activities }) {
  return (
    <section>
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>
      <div className="activity-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Ongoing</h3>
          </div>
          <div className="list-block">
            {activities.ongoing.map((item) => (
              <div key={item.title} className="list-row">
                <div className="post-title">{item.title}</div>
                <p className="post-body">{item.body}</p>
                <div className="post-footer">
                  <span className="owner-line">Owner: {item.owner}</span>
                  <span>{item.track}</span>
                  <span>{item.bu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <h3>Upcoming</h3>
          </div>
          <div className="list-block">
            {activities.upcoming.map((item) => (
              <div key={item.title} className="list-row">
                <div className="post-title">{item.title}</div>
                <p className="post-body">{item.body}</p>
                <div className="post-footer">
                  <span className="owner-line">Owner: {item.owner}</span>
                  <span>{item.track}</span>
                  <span>{item.bu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
