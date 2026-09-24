/**
 * Owner cards for key parts of the site, with scope and what to ask them about.
 */
import React from "react";

export default function OwnerDirectory({ items = [] }) {
  return (
    <section className="section" id="owners">
      <div className="section-header">
        <div className="stack">
          <h2>Who owns what</h2>
          <p className="section-copy">
            The quick way to find the right person before a question turns into a chain.
          </p>
        </div>
      </div>
      <div className="panel">
        <div className="stack">
          {items.map((item) => (
            <div key={item.area} className="owner-card">
              <div className="stack">
                <h3>{item.area}</h3>
                <div>
                  <div className="owner-name">{item.ownerName}</div>
                  <div className="owner-role">{item.ownerRole}</div>
                </div>
              </div>
              <div className="tag-row">
                {item.scope.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="split-grid">
                <div className="meta-block">
                  <div className="meta-label">Ask about</div>
                  <div className="meta-value">{item.askAbout}</div>
                </div>
                <div className="meta-block">
                  <div className="meta-label">Update cadence</div>
                  <div className="meta-value">{item.cadence}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
