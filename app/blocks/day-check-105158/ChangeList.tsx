/**
 * The whole page: header with the site name and a link row, the "What's changed" title and ingress, one column of one-line rows (type word, fact, owner, updated), a quiet example-content line where the supplied rows start, and a footer saying who keeps the list and how to add a row.
 */
import ChangeRow from "./ChangeRow";

export default function ChangeList({
  siteName,
  nav = [],
  title,
  ingress,
  exampleNote,
  rows = [],
  postingRule,
  footerNote,
  footerLinks = [],
}) {
  return (
    <div style={{ maxWidth: "46rem", margin: "0 auto", padding: "0 1.5rem" }}>
      <header
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "baseline",
          justifyContent: "space-between",
          padding: "1.5rem 0",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <span style={{ color: "var(--accent)", fontWeight: 700, letterSpacing: "0.01em" }}>
          {siteName}
        </span>
        <nav style={{ display: "flex", gap: "1.25rem", fontSize: "0.875rem" }}>
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href || "#"}
              style={{
                color: item.current ? "var(--ink)" : "var(--muted)",
                textDecoration: "none",
                borderBottom: item.current ? "2px solid var(--accent)" : "2px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main style={{ padding: "3rem 0 0" }}>
        <h1
          style={{
            color: "var(--accent)",
            fontSize: "2rem",
            lineHeight: 1.2,
            margin: "0 0 1rem",
          }}
        >
          {title}
        </h1>
        {ingress ? (
          <p style={{ margin: "0 0 2rem", maxWidth: "38rem", lineHeight: 1.6 }}>{ingress}</p>
        ) : null}

        {exampleNote ? (
          <p
            style={{
              margin: "0 0 0.5rem",
              color: "var(--muted)",
              fontSize: "0.8125rem",
              lineHeight: 1.5,
            }}
          >
            {exampleNote}
          </p>
        ) : null}

        <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
          {rows.map((row, i) => (
            <ChangeRow key={i} {...row} />
          ))}
        </ul>

        {postingRule ? (
          <p
            style={{
              margin: "2rem 0 0",
              maxWidth: "38rem",
              color: "var(--muted)",
              fontSize: "0.875rem",
              lineHeight: 1.6,
            }}
          >
            {postingRule}
          </p>
        ) : null}
      </main>

      <footer
        style={{
          margin: "4rem 0 3rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--rule)",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "baseline",
          fontSize: "0.8125rem",
          color: "var(--muted)",
        }}
      >
        <span style={{ maxWidth: "32rem", lineHeight: 1.6 }}>{footerNote}</span>
        <span style={{ display: "flex", gap: "1.25rem" }}>
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href || "#"}
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              {item.label}
            </a>
          ))}
        </span>
      </footer>
    </div>
  );
}
