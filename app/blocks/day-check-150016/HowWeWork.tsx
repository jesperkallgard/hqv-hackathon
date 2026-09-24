/**
 * Working principles and cadence for what gets posted and maintained.
 */
import React from "react";

export default function HowWeWork({ items = [] }) {
  return (
    <section className="section" id="how-we-work">
      <div className="section-header">
        <div className="stack">
          <h2>How we work</h2>
          <p className="section-copy">
            The posting cadence, the writing standard, and what belongs here.
          </p>
        </div>
      </div>
      <div className="panel">
        <div className="stack">
          {items.map((item) => (
            <div key={item.title} className="work-item">
              <div className="eyebrow">{item.eyebrow}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="split-grid">
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="meta-block">
                  <div className="meta-label">Cadence</div>
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
