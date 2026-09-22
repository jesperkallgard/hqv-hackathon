/**
 * The whole internal page: header with the site name and one link, the title, a marked example-data notice, the flat one-line-per-row feed with owner and date, and a footer carrying the rule a post has to meet. From Team Bo and Team Ada.
 */
import EntryRow from "./EntryRow";

export default function WhatsChangedPage({
  title,
  intro,
  exampleNotice,
  entries = [],
  footerNote,
  footerRule,
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
          {title}
        </span>
        <span style={{ color: "var(--muted)" }}>Internal</span>
      </header>

      <h1
        style={{
          fontSize: 34,
          lineHeight: 1.2,
          fontWeight: 700,
          color: "#273B60",
          margin: "64px 0 0",
        }}
      >
        {title}
      </h1>

      {intro ? (
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            margin: "20px 0 0",
            maxWidth: 620,
          }}
        >
          {intro}
        </p>
      ) : null}

      {exampleNotice ? (
        <p
          style={{
            margin: "32px 0 0",
            padding: "12px 14px",
            background: "#F1F2F5",
            borderRadius: "var(--radius)",
            fontSize: 13,
            lineHeight: 1.55,
            color: "var(--muted)",
          }}
        >
          {exampleNotice}
        </p>
      ) : null}

      <ul
        style={{
          listStyle: "none",
          margin: "48px 0 0",
          padding: 0,
          borderTop: "1px solid var(--rule)",
        }}
      >
        {entries.map((entry, i) => (
          <EntryRow
            key={i}
            text={entry.text}
            owner={entry.owner}
            date={entry.date}
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
