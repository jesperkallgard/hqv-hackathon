/**
 * Useful recurring links and references for the wider organisation.
 */
import React from "react";

export default function ResourceList({ items = [] }) {
  return (
    <section className="section">
      <div className="section-header">
        <div className="stack">
          <h2>Useful links</h2>
          <p className="section-copy">
            The recurring references people need when they want the answer fast.
          </p>
        </div>
      </div>
      <div className="panel">
        <div className="stack">
          {items.map((item) => (
            <div key={item.title} className="resource-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="meta-block">
                <div className="meta-label">Notes</div>
                <div className="meta-value">{item.meta}</div>
              </div>
              <div className="button-row">
                <a className="button button-plain" href={item.href}>{item.actionLabel}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
