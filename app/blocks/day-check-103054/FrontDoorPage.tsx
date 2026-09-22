/**
 * The front door. Four cards, one column, nothing else between the header and the footer.
 * Each card is a label and a date line. From Team Bo and Team Dag.
 */
import AreaCard from "./AreaCard";

export default function FrontDoorPage({
  siteName,
  exampleNotice,
  cards = [],
  footerRule,
  footerNote,
}) {
  return (
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 24px 96px",
        color: "var(--ink)",
        background: "var(--paper)",
        textAlign: "left",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
          padding: "24px 0",
          borderBottom: "1px solid var(--rule)",
          fontSize: 14,
        }}
      >
        <span style={{ color: "var(--accent)", fontWeight: 700 }}>
          {siteName}
        </span>
        <span style={{ color: "var(--muted)" }}>Internal</span>
      </header>

      {exampleNotice ? (
        <p
          style={{
            margin: "48px 0 0",
            padding: "12px 14px",
            background: "var(--panel, #F1F2F5)",
            borderRadius: "var(--radius)",
            fontSize: 13,
            lineHeight: 1.55,
            color: "var(--muted)",
          }}
        >
          {exampleNotice}
        </p>
      ) : null}

      <ul style={{ listStyle: "none", margin: "48px 0 0", padding: 0 }}>
        {cards.map((card, i) => (
          <AreaCard
            key={i}
            label={card.label}
            dateLine={card.dateLine}
            href={card.href}
          />
        ))}
      </ul>

      <footer
        style={{
          marginTop: 72,
          paddingTop: 20,
          borderTop: "1px solid var(--rule)",
          fontSize: 13,
          lineHeight: 1.6,
          color: "var(--muted)",
        }}
      >
        {footerRule ? <p style={{ margin: 0 }}>{footerRule}</p> : null}
        {footerNote ? <p style={{ margin: "8px 0 0" }}>{footerNote}</p> : null}
      </footer>
    </div>
  );
}
