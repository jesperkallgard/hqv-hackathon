/**
 * The Wall: a standalone page naming each audience DBS is legible to and the one
 * concrete question that audience is asking. Header, one card per audience, the
 * room's closing note, footer.
 */
import React from "react";

type NeedItem = { audience: string; need: string };

type NeedsWallProps = {
  /** Small label above the page title, e.g. the portal's name. */
  kicker?: string;
  /** The page title. */
  title: string;
  /** Opening paragraph, shown in the header. */
  intro?: string;
  /** One card per audience: who they are and the one question they have of DBS. */
  items: Array<NeedItem>;
  /** Closing note shown under the cards. */
  note?: string;
  /** Footer, left side. */
  footerLeft?: string;
  /** Footer, right side. */
  footerRight?: string;
};

export default function NeedsWall({
  kicker,
  title,
  intro,
  items = [],
  note,
  footerLeft,
  footerRight,
}: NeedsWallProps) {
  return (
    <article
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        borderRadius: "var(--radius)",
        border: "1px solid var(--rule)",
        overflow: "hidden",
      }}
    >
      <header
        style={{
          padding: "2.5rem 1.75rem 2rem",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        {kicker ? (
          <p
            style={{
              margin: "0 0 0.75rem",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            {kicker}
          </p>
        ) : null}
        <h1
          style={{
            margin: 0,
            fontSize: "1.9rem",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          {title}
        </h1>
        {intro ? (
          <p
            style={{
              margin: "1rem 0 0",
              maxWidth: "46rem",
              fontSize: "1.05rem",
              lineHeight: 1.55,
              color: "var(--muted)",
            }}
          >
            {intro}
          </p>
        ) : null}
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
          padding: "1.75rem",
        }}
      >
        {items.map((item, i) => (
          <section
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              padding: "1.25rem 1.25rem 1.5rem",
              border: "1px solid var(--rule)",
              borderRadius: "var(--radius)",
              background: "var(--paper)",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              {item.audience}
            </h2>
            <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.45 }}>
              {item.need}
            </p>
          </section>
        ))}
      </div>

      {note ? (
        <p
          style={{
            margin: 0,
            padding: "0 1.75rem 2rem",
            maxWidth: "46rem",
            fontSize: "1rem",
            lineHeight: 1.55,
            color: "var(--ink)",
          }}
        >
          {note}
        </p>
      ) : null}

      <footer
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem 1.5rem",
          justifyContent: "space-between",
          padding: "1.1rem 1.75rem",
          borderTop: "1px solid var(--rule)",
          fontSize: "0.8rem",
          color: "var(--muted)",
        }}
      >
        <span>{footerLeft}</span>
        <span>{footerRight}</span>
      </footer>
    </article>
  );
}
