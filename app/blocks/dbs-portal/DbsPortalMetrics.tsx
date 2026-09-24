/**
 * Supporting metrics list beneath the KPI cards.
 */
import React from "react";

export default function DbsPortalMetrics({ title, summary, metrics }) {
  return (
    <section>
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>
      <div className="metric-list panel">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-row">
            <div>
              <div className="metric-label">{metric.label}</div>
              <p className="post-body">{metric.reading}</p>
            </div>
            <div className="metric-dates metric-dates-right">
              <span>Measured {metric.measured}</span>
              <span>Compared with {metric.comparison}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
