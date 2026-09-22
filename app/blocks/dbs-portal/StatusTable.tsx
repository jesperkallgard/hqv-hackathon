/**
 * One flat table, navy header row, alternating light grey rows, grouped under status headings in the order given. From Quartz.
 */
export default function StatusTable({ columns = [], groups = [] }) {
  const cell = {
    padding: "0.6rem 0.75rem",
    textAlign: "left",
    verticalAlign: "top",
    borderBottom: "1px solid var(--rule)",
    fontSize: "0.9rem",
  };

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        border: "1px solid var(--rule)",
        borderRadius: "var(--radius)",
        marginBottom: "1rem",
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
                borderBottom: "none",
              }}
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      {groups.map((group) => (
        <tbody key={group.status}>
          <tr>
            <th
              colSpan={columns.length}
              style={{
                ...cell,
                background: "var(--panel, #F1F2F5)",
                color: "var(--accent)",
                fontWeight: 700,
              }}
            >
              {group.status}
            </th>
          </tr>
          {group.rows.map((row, i) => (
            <tr
              key={row.test}
              style={{
                background:
                  i % 2 === 1 ? "var(--panel, #F1F2F5)" : "var(--paper)",
              }}
            >
              <td style={{ ...cell, fontWeight: 700 }}>{row.test}</td>
              <td style={cell}>{group.status}</td>
              <td style={cell}>{row.result}</td>
              <td style={cell}>{row.owner}</td>
              <td style={{ ...cell, color: "var(--muted)" }}>{row.updated}</td>
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  );
}
