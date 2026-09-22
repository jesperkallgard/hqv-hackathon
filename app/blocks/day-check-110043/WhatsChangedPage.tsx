/**
 * The whole internal page: header, the single newest-first list of changes with owner, cadence and date on each row, and a footer. Built from Team Ada's and Team Cleo's ideas.
 */
import ChangeRow from "./ChangeRow";

export default function WhatsChangedPage({
  title = "What's changed",
  ingress = "",
  exampleNote = "",
  entries = [],
  footerNote = "",
  contactLine = ""
}) {
  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100%" }}>
      <header
        style={{
          borderBottom: "1px solid var(--rule)",
          padding: "18px 0",
          marginBottom: 56,
          display: "flex",
          alignItems: "baseline",
          gap: 20,
          flexWrap: "wrap"
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.02em", color: "#273B60" }}>
          Web team
        </span>
        <nav style={{ display: "flex", gap: 18, fontSize: 14 }}>
          <a href="#" style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "2px solid var(--accent)", paddingBottom: 2 }}>
            What&rsquo;s changed
          </a>
          <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>The site</a>
          <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>Ask</a>
        </nav>
      </header>

      <main style={{ maxWidth: 720 }}>
        <h1 style={{ color: "#273B60", fontSize: 40, lineHeight: 1.15, margin: "0 0 20px" }}>{title}</h1>

        {ingress ? (
          <p style={{ fontSize: 17, lineHeight: 1.6, margin: "0 0 12px", maxWidth: "60ch" }}>{ingress}</p>
        ) : null}

        {exampleNote ? (
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 40px", maxWidth: "60ch" }}>
            {exampleNote}
          </p>
        ) : null}

        <div
          style={{
            background: "#F1F2F5",
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            padding: "8px 24px"
          }}
        >
          {entries.map((e, i) => (
            <ChangeRow
              key={i}
              line={e.line}
              owner={e.owner}
              meta={e.meta}
              date={e.date}
              first={i === 0}
            />
          ))}
        </div>

        {contactLine ? (
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: "32px 0 0", maxWidth: "60ch" }}>
            {contactLine}
          </p>
        ) : null}
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--rule)",
          marginTop: 72,
          paddingTop: 20,
          paddingBottom: 48,
          maxWidth: 720,
          fontSize: 13,
          color: "var(--muted)",
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <span>{footerNote}</span>
        <span>
          <a href="#" style={{ color: "var(--muted)" }}>Add a row</a>
        </span>
      </footer>
    </div>
  );
}
