/**
 * The whole first screen: header, the five doors with one line each, and behind
 * the first door the type/team filters and one status-grouped table with a navy
 * header row and alternating rows, then a footer. Doors and their wording from
 * Testmar; the five team names on the filter, traceable to owners in the rows,
 * from Testolof. Sprint one's table, filters and owner rule from Wombat and Quartz.
 */
"use client";

import { useState } from "react";
import StatusTable from "./StatusTable";

export default function DbsPortalPage({
  siteName,
  pageTitle,
  standfirst,
  exampleNotice,
  nav = [],
  doorsHeading,
  doors = [],
  doorsNote,
  notBuiltLabel,
  emptyDoor,
  filters = {},
  columns = [],
  groups = [],
  rule,
  footerOwner,
  footerNote,
}) {
  const [type, setType] = useState("");
  const [team, setTeam] = useState("");

  const eligible = (row) => row.owner && row.updated;
  const matches = (row) =>
    (!type || row.type === type) && (!team || row.team === team);

  const shown = groups
    .map((g) => ({
      status: g.status,
      rows: (g.rows || []).filter((r) => eligible(r) && matches(r)),
    }))
    .filter((g) => g.rows.length > 0);

  const wrap = {
    maxWidth: "58rem",
    margin: "0 auto",
    padding: "0 1.5rem",
  };

  const selectStyle = {
    font: "inherit",
    fontSize: "0.9rem",
    color: "var(--ink)",
    background: "var(--paper)",
    border: "1px solid var(--rule)",
    borderRadius: "var(--radius)",
    padding: "0.35rem 0.5rem",
  };

  const firstDoor = doors.find((d) => d.built) || doors[0];

  return (
    <div
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        fontFamily: "Arial, Helvetica, sans-serif",
        lineHeight: 1.55,
      }}
    >
      <header style={{ borderBottom: "1px solid var(--rule)" }}>
        <div
          style={{
            ...wrap,
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "baseline",
            justifyContent: "space-between",
            padding: "1rem 1.5rem",
          }}
        >
          <span
            style={{
              color: "var(--accent)",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
            }}
          >
            {siteName}
          </span>
          <nav style={{ display: "flex", gap: "1.25rem" }}>
            {nav.map((item, i) => (
              <span
                key={item}
                style={{
                  fontSize: "0.9rem",
                  color: i === 0 ? "var(--ink)" : "var(--muted)",
                  borderBottom:
                    i === 0 ? "2px solid var(--accent)" : "2px solid transparent",
                  paddingBottom: "0.15rem",
                }}
              >
                {item}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ ...wrap, padding: "2.5rem 1.5rem 3rem" }}>
        <h1
          style={{
            color: "var(--accent)",
            fontSize: "1.75rem",
            margin: "0 0 0.75rem",
            fontWeight: 700,
          }}
        >
          {pageTitle}
        </h1>
        <p style={{ margin: "0 0 1.5rem", maxWidth: "44rem" }}>{standfirst}</p>

        {doors.length > 0 ? (
          <section style={{ margin: "0 0 3.5rem" }}>
            {doorsHeading ? (
              <h2
                style={{
                  fontSize: "0.8125rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  fontWeight: 700,
                  margin: "0 0 1.75rem",
                }}
              >
                {doorsHeading}
              </h2>
            ) : null}

            {doors.map((door) => (
              <div key={door.name} style={{ margin: "0 0 2rem", maxWidth: "44rem" }}>
                <h3
                  style={{
                    color: "var(--accent)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    margin: "0 0 0.35rem",
                  }}
                >
                  {door.name}
                  {!door.built && notBuiltLabel ? (
                    <span
                      style={{
                        marginLeft: "0.75rem",
                        fontSize: "0.8125rem",
                        fontWeight: 400,
                        color: "var(--muted)",
                      }}
                    >
                      {notBuiltLabel}
                    </span>
                  ) : null}
                </h3>
                <p style={{ margin: 0, color: "var(--muted)" }}>{door.line}</p>
              </div>
            ))}

            {doorsNote ? (
              <p
                style={{
                  margin: "0",
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                  maxWidth: "44rem",
                }}
              >
                {doorsNote}
              </p>
            ) : null}
          </section>
        ) : null}

        <div
          style={{
            borderTop: "1px solid var(--rule)",
            paddingTop: "2.5rem",
          }}
        >
          {firstDoor ? (
            <h2
              style={{
                color: "var(--accent)",
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "0 0 1rem",
              }}
            >
              {firstDoor.name}
            </h2>
          ) : null}

          {exampleNotice ? (
            <p
              style={{
                background: "var(--panel, #F1F2F5)",
                border: "1px solid var(--rule)",
                borderRadius: "var(--radius)",
                padding: "0.75rem 1rem",
                margin: "0 0 2rem",
                fontSize: "0.875rem",
                color: "var(--muted)",
                maxWidth: "44rem",
              }}
            >
              {exampleNotice}
            </p>
          ) : null}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            {filters.label ? (
              <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                {filters.label}
              </span>
            ) : null}
            <label style={{ fontSize: "0.9rem" }}>
              {filters.typeLabel}{" "}
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={selectStyle}
              >
                <option value="">All</option>
                {(filters.types || []).map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label style={{ fontSize: "0.9rem" }}>
              {filters.teamLabel}{" "}
              <select
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                style={selectStyle}
              >
                <option value="">All</option>
                {(filters.teams || []).map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filters.teamNote ? (
            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--muted)",
                margin: "0 0 1.5rem",
                maxWidth: "44rem",
              }}
            >
              {filters.teamNote}
            </p>
          ) : null}

          <StatusTable columns={columns} groups={shown} />

          {shown.length === 0 ? (
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.9rem",
                maxWidth: "44rem",
              }}
            >
              {emptyDoor || "Nothing matches those two filters."}
            </p>
          ) : null}

          {rule ? (
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--muted)",
                marginTop: "1.25rem",
                maxWidth: "44rem",
              }}
            >
              {rule}
            </p>
          ) : null}
        </div>
      </main>

      <footer style={{ borderTop: "1px solid var(--rule)" }}>
        <div
          style={{
            ...wrap,
            padding: "1.25rem 1.5rem 2.5rem",
            fontSize: "0.875rem",
            color: "var(--muted)",
          }}
        >
          <p style={{ margin: "0 0 0.25rem", color: "var(--ink)" }}>
            {footerOwner}
          </p>
          <p style={{ margin: 0 }}>{footerNote}</p>
        </div>
      </footer>
    </div>
  );
}
