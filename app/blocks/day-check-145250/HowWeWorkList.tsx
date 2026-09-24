/**
 * Plain-language list of working agreements with status tags and secondary actions.
 */
import React from "react";

export default function HowWeWorkList({ title, description, items = [], actions = [] }) {
  return (
    <section className="section" id="work">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </div>
      <div className="panel">
        <div className="panel-body">
          <ul className="work-list">
            {items.map((item) => (
              <li className="work-item" key={item.title}>
                <h3 className="work-item-title">{item.title}</h3>
                <p>{item.text}</p>
                <div className="work-item-meta">
                  {(item.meta || []).map((meta) => (
                    <span key={meta} className="inline-meta">{meta}</span>
                  ))}
                  <span className="status-tag">{item.status}</span>
                </div>
              </li>
            ))}
          </ul>
          {actions.length ? (
            <div className="split-actions" style={{ marginTop: "1.5rem" }}>
              {actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={`button ${action.variant === "plain" ? "button-plain" : "button-secondary"}`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
