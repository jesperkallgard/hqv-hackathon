/**
 * A front-page grid of named areas, one plain card per area: title, one-line description, and a short bullet list of needs underneath — no icons, badges, or status chrome. Used to turn a needs list into a small set of doors an outsider can recognize and walk through.
 */
import React from "react";

export interface AreaFrontDoorArea {
  /** Short, plain title for the area, e.g. "What's changing on the site" */
  title: string;
  /** One line: who it's for / what it covers */
  description: string;
  /** 4-6 specific, plain-language needs that sit under this area */
  bullets: string[];
}

export interface AreaFrontDoorProps {
  /** Optional heading shown above the grid of area cards */
  heading?: string;
  /** The areas to show, one card each */
  areas: AreaFrontDoorArea[];
}

/**
 * A front-page grid of named areas, one plain card per area: a title, a
 * one-line description, and a short bullet list of needs underneath it.
 * No icons, badges, or status chrome — just enough to point someone to
 * the right door.
 */
export default function AreaFrontDoor({ heading, areas }: AreaFrontDoorProps) {
  return (
    <section style={{ width: "100%" }}>
      {heading ? (
        <h2
          style={{
            margin: "0 0 1.5rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "var(--ink)",
            fontFamily: "inherit",
          }}
        >
          {heading}
        </h2>
      ) : null}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {areas.map((area) => (
          <article
            key={area.title}
            style={{
              background: "var(--paper)",
              border: "1px solid var(--rule)",
              borderRadius: "var(--radius)",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "1.15rem",
                lineHeight: 1.3,
                fontWeight: 600,
                color: "var(--ink)",
              }}
            >
              {area.title}
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.5,
                color: "var(--muted)",
              }}
            >
              {area.description}
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--rule)",
                margin: "0.25rem 0",
              }}
            />

            <ul
              style={{
                margin: 0,
                padding: "0 0 0 1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {area.bullets.map((bullet) => (
                <li
                  key={bullet}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                    color: "var(--ink)",
                  }}
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
