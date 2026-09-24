/**
 * KPI strip with dated results cards.
 */
import React from "react";

export default function DbsPortalKpis({ title, summary, kpis }) {
  return (
    <section>
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>
      <div className="kpi-strip">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="kpi-card">
            <div className="kpi-label">{kpi.label}</div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-context">{kpi.context}</div>
            <div className="kpi-detail">{kpi.detail}</div>
            <div className="metric-dates">
              <span>Measured {kpi.measured}</span>
              <span>Compared with {kpi.comparison}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
