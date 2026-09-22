/**
 * A post, opened. Seven fields in one fixed order: headline, audience,
 * three-line summary, status or date, owner, cadence, one link onward.
 * Used by every area of the site, not just What's changed.
 */
export default function PostPage({
  area = "",
  areaHref = "#",
  headline = "",
  audience = "",
  summary = [],
  status = "",
  owner = "",
  updated = "",
  linkLabel = "",
  linkHref = "#",
  exampleNote = "",
  footerNote = "",
  contactLine = ""
}) {
  const label = {
    fontSize: 12,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--muted)",
    margin: "0 0 6px"
  };

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
          <a
            href={areaHref}
            style={{
              color: "var(--ink)",
              textDecoration: "none",
              borderBottom: "2px solid var(--accent)",
              paddingBottom: 2
            }}
          >
            {area}
          </a>
          <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>The site</a>
          <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>Ask</a>
        </nav>
      </header>

      <main style={{ maxWidth: 720 }}>
        <p style={{ fontSize: 13, margin: "0 0 16px" }}>
          <a href={areaHref} style={{ color: "var(--muted)" }}>&larr; {area}</a>
        </p>

        <h1 style={{ color: "#273B60", fontSize: 40, lineHeight: 1.15, margin: "0 0 20px" }}>{headline}</h1>

        {audience ? (
          <p style={{ fontSize: 17, lineHeight: 1.6, margin: "0 0 32px", maxWidth: "60ch" }}>{audience}</p>
        ) : null}

        <div style={{ maxWidth: "62ch" }}>
          {summary.map((s, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.65, margin: "0 0 12px" }}>
              {s}
            </p>
          ))}
        </div>

        <div
          style={{
            background: "#F1F2F5",
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            padding: "20px 24px",
            margin: "36px 0 0",
            display: "flex",
            gap: 48,
            flexWrap: "wrap"
          }}
        >
          <div>
            <p style={label}>Status</p>
            <p style={{ margin: 0, fontSize: 15 }}>{status}</p>
          </div>
          <div>
            <p style={label}>Owner</p>
            <p style={{ margin: 0, fontSize: 15 }}>{owner}</p>
          </div>
          <div>
            <p style={label}>Updated</p>
            <p style={{ margin: 0, fontSize: 15 }}>{updated}</p>
          </div>
        </div>

        {linkLabel ? (
          <p style={{ margin: "28px 0 0", fontSize: 16 }}>
            <a href={linkHref} style={{ color: "var(--accent)" }}>{linkLabel} &rarr;</a>
          </p>
        ) : null}

        {exampleNote ? (
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--muted)", margin: "36px 0 0", maxWidth: "60ch" }}>
            {exampleNote}
          </p>
        ) : null}

        {contactLine ? (
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: "32px 0 0", maxWidth: "60ch" }}>{contactLine}</p>
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
        <span style={{ maxWidth: "52ch" }}>{footerNote}</span>
        <span>
          <a href="#" style={{ color: "var(--muted)" }}>Add a row</a>
        </span>
      </footer>
    </div>
  );
}
