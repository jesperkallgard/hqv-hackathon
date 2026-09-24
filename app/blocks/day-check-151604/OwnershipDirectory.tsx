/**
 * Shows who owns what so people can find the right person without asking around.
 */
import React from "react";

export default function OwnershipDirectory({ items = [] }) {
  return (
    <div className="owner-list">
      {items.map((item) => (
        <div className="owner-row" key={`${item.area}-${item.owner}`}>
          <div className="owner-meta">
            <div className="meta-label">Area</div>
            <div className="owner-name">{item.area}</div>
          </div>
          <div className="owner-meta">
            <div className="meta-label">Owner</div>
            <div className="meta-value">{item.owner}</div>
            <div className="meta-value muted">{item.role}</div>
          </div>
          <div className="owner-meta">
            <div className="meta-label">Contact</div>
            <div className="meta-value">{item.contact}</div>
            <div className="meta-value muted">Updated {item.cadence}</div>
          </div>
          <div>
            <span className="tag">{item.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
