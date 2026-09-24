/**
 * Ownership table for key website areas with owner, role, scope, cadence, and status.
 */
import React from "react";

export default function OwnershipTable({ title, intro, rows = [] }) {
  return (
    <section className="section" id="owners">
      <div className="section-heading">
        <div>
          <h2>{title}</h2>
          <p className="section-intro">{intro}</p>
        </div>
      </div>
      <div className="owners-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Owner</th>
              <th>Role</th>
              <th>Scope</th>
              <th>Updated</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.area}>
                <td>{row.area}</td>
                <td>{row.owner}</td>
                <td>{row.role}</td>
                <td>{row.scope}</td>
                <td>{row.cadence}</td>
                <td><span className="tag tag-filled">{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
