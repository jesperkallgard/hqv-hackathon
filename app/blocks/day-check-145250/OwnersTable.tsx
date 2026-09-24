/**
 * Ownership directory that shows who owns which area, what it covers, update cadence, and current state.
 */
import React from "react";

export default function OwnersTable({ title, description, columns = [], rows = [] }) {
  return (
    <section className="section" id="owners">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </div>
      <div className="owners-table-wrap">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.area}>
                <td>
                  <div className="owner-name">{row.area}</div>
                </td>
                <td>
                  <div className="owner-name">{row.ownerName}</div>
                  <div className="owner-role">{row.ownerRole}</div>
                </td>
                <td>
                  <div>{row.note}</div>
                </td>
                <td>
                  <span className="table-muted">{row.updated}</span>
                </td>
                <td>
                  <span className="status-tag">{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
