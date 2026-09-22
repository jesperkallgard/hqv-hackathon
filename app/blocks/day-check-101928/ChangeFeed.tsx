/**
 * The whole page: header with the portal name, the navy heading "What's changed", one column of rows (date, one sentence, owner, update frequency) separated by hairlines, newest first, no search, no filters, no tabs — plus a footer noting how to get a row added. Rows carry an optional example flag rendered as visible words.
 */
import ChangeRow from "./ChangeRow";

export default function ChangeFeed({
  siteName,
  heading,
  standfirst,
  exampleNotice,
  rows = [],
  footerNote,
  footerOwnerLine,
}) {
  return (
    <div style={{ maxWidth: "46rem", margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>
      <header
        style={{
          borderBottom: "1px solid var(--rule)",
          paddingBottom: "0.75rem",
          marginBottom: "3rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem 1rem",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "#273B60", fontWeight: 700, fontSize: "0.9rem" }}>{siteName}</span>
        <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>Internal</span>
      </header>

      <h1
        style={{
          color: "#273B60",
          fontSize: "2rem",
          lineHeight: 1.2,
          margin: "0 0 0.75rem",
          fontWeight: 700,
        }}
      >
        {heading}
      </h1>

      {standfirst ? (
        <p style={{ margin: "0 0 2rem", maxWidth: "34rem", lineHeight: 1.55 }}>{standfirst}</p>
      ) : null}

      {exampleNotice ? (
        <p
          style={{
            background: "#F1F2F5",
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            padding: "0.75rem 0.9rem",
            margin: "0 0 2.5rem",
            fontSize: "0.85rem",
            color: "var(--ink)",
            lineHeight: 1.5,
          }}
        >
          {exampleNotice}
        </p>
      ) : null}

      <div style={{ borderTop: "1px solid var(--rule)" }}>
        {rows.map((row, i) => (
          <ChangeRow key={i} {...row} />
        ))}
      </div>

      <footer
        style={{
          marginTop: "3rem",
          paddingTop: "1rem",
          borderTop: "1px solid var(--rule)",
          fontSize: "0.85rem",
          color: "var(--muted)",
          lineHeight: 1.6,
        }}
      >
        {footerNote ? <p style={{ margin: "0 0 0.35rem" }}>{footerNote}</p> : null}
        {footerOwnerLine ? <p style={{ margin: 0 }}>{footerOwnerLine}</p> : null}
      </footer>
    </div>
  );
}
