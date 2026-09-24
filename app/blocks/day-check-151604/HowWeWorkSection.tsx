/**
 * Explains how the team records changes, tests, and ownership so the portal stays useful.
 */
import React from "react";

export default function HowWeWorkSection({ items = [], callout }) {
  return (
    <div className="stack">
      {items.map((item) => (
        <div className="panel" key={item.title}>
          <div className="stack">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </div>
      ))}

      {callout ? (
        <div className="panel-quiet split-callout">
          <div className="stack">
            <span className="tag">{callout.tag}</span>
            <h3>{callout.title}</h3>
            <p>{callout.body}</p>
          </div>
          <div className="actions">
            <a className="button button-secondary" href={callout.action?.href || "#"}>
              {callout.action?.label}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
