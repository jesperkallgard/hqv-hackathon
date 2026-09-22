/**
 * One table per status group: navy header row, alternating light grey rows,
 * flat, no pills and no counts. Written to be the component DbsPortalPage was
 * already importing. From Quartz (status-first grouping, the
 * Test/Status/Result/Owner/Updated columns as the screen).
 */
export default function StatusTable({ columns = [], groups = [] }) {
  if (groups.length === 0) return null;

  const cell = {
    textAlign: "left",
    padding: "0.6rem 0.75rem",
    verticalAlign: "top",
    fontSize: "0.9rem",
  };

  return (
    <div>
      {groups.map((group) => (
        <section key={group.status} style={{ marginBottom: "2.25rem" }}>
          <h3
            style={{
              color: "var(--accent)",
              fontSize: "1rem",
              fontWeight: 700,
              margin: "0 0 0.5rem",
            }}
          >
            {group.status}
          </h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid var(--rule)",
              borderRadius: "var(--radius)",
            }}
          >
            <thead>
              <tr style={{ background: "var(--accent)" }}>
                {columns.map((c) => (
                  <th
                    key={c}
                    style={{
                      ...cell,
                      color: "var(--paper)",
                      fontWeight: 700,
                    }}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {group.rows.map((row, i) => (
                <tr
                  key={row.test}
                  style={{
                    background:
                      i % 2 === 1 ? "var(--alt-row, #E4E6EB)" : "var(--paper)",
                  }}
                >
                  <td style={{ ...cell, color: "var(--ink)" }}>{row.test}</td>
                  <td style={{ ...cell, color: "var(--ink)" }}>{group.status}</td>
                  <td style={{ ...cell, color: "var(--ink)" }}>{row.result}</td>
                  <td style={{ ...cell, color: "var(--ink)" }}>{row.owner}</td>
                  <td style={{ ...cell, color: "var(--muted)" }}>{row.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}
