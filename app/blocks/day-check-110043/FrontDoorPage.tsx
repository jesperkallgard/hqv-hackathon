/**
 * The home page: header, four flat cards in fixed order — name, one-line job, last-changed date — and a footer. From Team Bo and Team Cleo.
 */
import AreaCard from "./AreaCard";

export default function FrontDoorPage({
  title = "The front door",
  ingress = "",
  exampleNote = "",
  cards = [],
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
        <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.02em", color: "var(--accent-heading, #273B60)" }}>
          Web team
        </span>
        <nav style={{ display: "flex", gap: 18, fontSize: 14 }}>
          <a href="#" style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "2px solid var(--accent)", paddingBottom: 2 }}>
            Front door
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
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 48px", maxWidth: "60ch" }}>
            {exampleNote}
          </p>
        ) : null}

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {cards.map((c, i) => (
            <AreaCard
              key={i}
              name={c.name}
              job={c.job}
              date={c.date}
              href={c.href}
              emptyLabel={c.emptyLabel}
            />
          ))}
        </div>

        {contactLine ? (
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: "48px 0 0", maxWidth: "60ch" }}>{contactLine}</p>
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
