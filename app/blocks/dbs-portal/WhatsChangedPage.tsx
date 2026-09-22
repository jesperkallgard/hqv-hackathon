/**
 * The whole first screen: header with the portal name and navigation, the 'What's changed' heading, two filter controls (team, topic), the flat list of posts with a navy header row and alternating grey rows, and a footer. Interactive — filtering narrows the list in place; sorted by last updated, newest first. Rows are rendered by PostRow. Renders a plain line when nothing is supplied rather than inventing content.
 */
"use client";

import PostRow from "./PostRow";

export default function WhatsChangedPage({
  siteName,
  nav = [],
  heading,
  posts = [],
  teamLabel,
  topicLabel,
  allLabel,
  columns = [],
  emptyLine,
  footerLines = [],
}) {
  const [team, setTeam] = React.useState("");
  const [topic, setTopic] = React.useState("");

  const listed = posts.filter((p) => p.owner && p.updateFrequency);

  const teams = Array.from(
    new Set(listed.map((p) => p.team).filter(Boolean))
  );
  const topics = Array.from(
    new Set(listed.map((p) => p.topic).filter(Boolean))
  );

  const shown = listed
    .filter((p) => (team ? p.team === team : true))
    .filter((p) => (topic ? p.topic === topic : true))
    .slice()
    .sort((a, b) =>
      String(b.lastUpdated || "").localeCompare(String(a.lastUpdated || ""))
    );

  const page = {
    background: "var(--paper)",
    color: "var(--ink)",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  };

  const wrap = {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const headerStyle = {
    borderBottom: "1px solid var(--rule)",
    padding: "20px 0",
    marginBottom: "40px",
  };

  const selectStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    color: "var(--ink)",
    background: "var(--paper)",
    border: "1px solid var(--rule)",
    borderRadius: "var(--radius)",
    padding: "6px 8px",
    marginTop: "4px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    color: "var(--muted)",
  };

  const thStyle = {
    background: "var(--accent-navy, var(--ink))",
    color: "var(--paper)",
    textAlign: "left",
    fontSize: "13px",
    fontWeight: "bold",
    padding: "10px 12px",
  };

  return (
    <div style={page}>
      <header style={headerStyle}>
        <div
          style={{
            ...wrap,
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              color: "var(--accent-navy, var(--ink))",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {siteName}
          </span>
          <nav style={{ display: "flex", gap: "20px" }}>
            {nav.map((item) => (
              <span
                key={item}
                style={{ fontSize: "14px", color: "var(--muted)" }}
              >
                {item}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main style={wrap}>
        <h1
          style={{
            color: "var(--accent-navy, var(--ink))",
            fontSize: "24px",
            margin: "0 0 20px",
          }}
        >
          {heading}
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <label style={labelStyle}>
            {teamLabel}
            <br />
            <select
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              style={selectStyle}
            >
              <option value="">{allLabel}</option>
              {teams.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label style={labelStyle}>
            {topicLabel}
            <br />
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              style={selectStyle}
            >
              <option value="">{allLabel}</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>

        {shown.length === 0 ? (
          <p
            style={{
              background: "var(--panel, var(--rule))",
              borderRadius: "var(--radius)",
              padding: "16px",
              fontSize: "14px",
              color: "var(--muted)",
              margin: 0,
            }}
          >
            {emptyLine}
          </p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr>
                {columns.map((c) => (
                  <th key={c} style={thStyle}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {shown.map((p, i) => (
                <PostRow key={p.title} post={p} alt={i % 2 === 1} />
              ))}
            </tbody>
          </table>
        )}
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--rule)",
          marginTop: "56px",
          padding: "20px 0 40px",
        }}
      >
        <div style={wrap}>
          {footerLines.map((line) => (
            <p
              key={line}
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                margin: "0 0 6px",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </footer>
    </div>
  );
}
