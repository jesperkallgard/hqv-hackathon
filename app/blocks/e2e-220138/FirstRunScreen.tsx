"use client";

/**
 * The product's first screen: opens already loaded with a real, editable example instead of a blank state or setup wizard. A blank state is reachable as one button on the page, never asked for up front.
 */
import { useState } from "react";

export default function FirstRunScreen({
  product = "",
  nav = [],
  example = {},
  blankLabel = "Start from blank",
  blankNote = "",
  restoreLabel = "Load the example again",
  footerNote = "",
  footerLinks = [],
}) {
  const rows = Array.isArray(example.rows) ? example.rows : [];
  const [counts, setCounts] = useState(() =>
    rows.map((r) => Number(r.count) || 0)
  );
  const [blank, setBlank] = useState(false);

  const money = (n) =>
    (example.currency || "") +
    Math.round(n)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const total = counts.reduce(
    (sum, c, i) => sum + c * (Number(rows[i].rate) || 0),
    0
  );

  const setCount = (i, value) =>
    setCounts((prev) => prev.map((c, j) => (j === i ? value : c)));

  const shell = {
    background: "var(--paper)",
    color: "var(--ink)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    font: "inherit",
  };
  const band = { width: "100%", maxWidth: "52rem", margin: "0 auto", padding: "0 2rem" };
  const num = { textAlign: "right", padding: "0.9rem 0", borderBottom: "1px solid var(--rule)" };
  const head = {
    ...num,
    fontSize: "0.8rem",
    fontWeight: 400,
    color: "var(--muted)",
    letterSpacing: "0.04em",
  };
  const quiet = {
    font: "inherit",
    fontSize: "0.9rem",
    color: "var(--muted)",
    background: "transparent",
    border: "1px solid var(--rule)",
    borderRadius: "var(--radius)",
    padding: "0.5rem 0.9rem",
    cursor: "pointer",
  };

  return (
    <div style={shell}>
      <header style={{ borderBottom: "1px solid var(--rule)", padding: "1.5rem 0" }}>
        <div
          style={{
            ...band,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <span style={{ fontWeight: 600 }}>{product}</span>
          <nav style={{ display: "flex", gap: "1.75rem", fontSize: "0.9rem", color: "var(--muted)" }}>
            {nav.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ ...band, flex: 1, padding: "4.5rem 2rem 6rem" }}>
        {blank ? (
          <div>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 600, margin: "0 0 0.75rem" }}>
              Untitled
            </h1>
            <p style={{ color: "var(--muted)", margin: "0 0 3rem", maxWidth: "34rem" }}>
              {blankNote}
            </p>
            <button type="button" style={quiet} onClick={() => setBlank(false)}>
              {restoreLabel}
            </button>
          </div>
        ) : (
          <div>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 600, margin: "0 0 0.75rem" }}>
              {example.name}
            </h1>
            <p style={{ color: "var(--muted)", margin: "0 0 3rem", maxWidth: "34rem" }}>
              {example.source}
            </p>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ ...head, textAlign: "left" }}>{example.itemHeading}</th>
                  <th style={head}>{example.countHeading}</th>
                  <th style={head}>{example.rateHeading}</th>
                  <th style={head}>{example.amountHeading}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label}>
                    <td style={{ ...num, textAlign: "left" }}>{row.label}</td>
                    <td style={num}>
                      <input
                        type="number"
                        value={counts[i]}
                        onChange={(e) => setCount(i, Number(e.target.value) || 0)}
                        style={{
                          width: "5rem",
                          font: "inherit",
                          textAlign: "right",
                          color: "var(--ink)",
                          background: "transparent",
                          border: "1px solid var(--rule)",
                          borderRadius: "var(--radius)",
                          padding: "0.3rem 0.5rem",
                        }}
                      />
                    </td>
                    <td style={{ ...num, color: "var(--muted)" }}>{money(row.rate)}</td>
                    <td style={num}>{money(counts[i] * (Number(row.rate) || 0))}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ ...num, textAlign: "left", borderBottom: "none" }}>
                    {example.totalLabel}
                  </td>
                  <td style={{ ...num, borderBottom: "none" }} />
                  <td style={{ ...num, borderBottom: "none" }} />
                  <td
                    style={{
                      ...num,
                      borderBottom: "none",
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    {money(total)}
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: "3.5rem" }}>
              <button type="button" style={quiet} onClick={() => setBlank(true)}>
                {blankLabel}
              </button>
            </div>
          </div>
        )}
      </main>

      <footer style={{ borderTop: "1px solid var(--rule)", padding: "1.5rem 0" }}>
        <div
          style={{
            ...band,
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            fontSize: "0.85rem",
            color: "var(--muted)",
          }}
        >
          <span>{footerNote}</span>
          <span style={{ display: "flex", gap: "1.5rem" }}>
            {footerLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
}
