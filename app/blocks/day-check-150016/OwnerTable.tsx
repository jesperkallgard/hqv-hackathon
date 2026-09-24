/**
 * Tabular ownership view for quick comparison across website areas.
 */
import React from "react";

export default function OwnerTable({ items = [] }) {
  return (
    <section className="section">
      <div className="section-header">
        <div className="stack">
          <h2>Area overview</h2>
          <p className="section-copy">
            One row per area, with owner, cadence, current state, and recent update volume.
          </p>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Owner</th>
              <th>Cadence</th>
              <th>State</th>
              <th className="numeric">Updates this month</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.area}>
                <td>{item.area}</td>
                <td>
                  <div className="owner-name">{item.ownerName}</div>
                  <div className="owner-role">{item.ownerRole}</div>
                </td>
                <td>{item.cadence}</td>
                <td><span className={`status-tag${item.state === "Testing" ? " is-highlight" : ""}`}>{item.state}</span></td>
                <td className="numeric">{item.updatesThisMonth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
