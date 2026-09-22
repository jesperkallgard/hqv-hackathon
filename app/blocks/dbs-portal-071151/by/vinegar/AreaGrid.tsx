/**
 * The front door of the portal: a small fixed grid of named top-level areas, each a plain same-shaped card (name, one-line description, optional muted example headline); areas with no content yet render dashed/faded with a neutral "not yet built" label instead of an alarm state.
 */
import React from "react";

type AreaGridProps = {
  intro?: string; // optional one-line framing above the grid
  areas: {
    name: string;
    description: string;
    example?: string;
    open?: boolean;
  }[];
};

export default function AreaGrid({ intro, areas }: AreaGridProps) {
  return (
    <section
      style={{
        color: "var(--ink)",
        background: "var(--paper)",
        fontFamily: "inherit",
      }}
    >
      {intro && (
        <p
          style={{
            margin: "0 0 1.25rem 0",
            fontSize: "1rem",
            color: "var(--muted)",
            maxWidth: "40rem",
          }}
        >
          {intro}
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
        }}
      >
        {areas.map((area) => (
          <article
            key={area.name}
            style={{
              border: area.open
                ? "1px dashed var(--rule)"
                : "1px solid var(--rule)",
              borderTop: "3px solid var(--accent)",
              borderRadius: "var(--radius)",
              background: "var(--paper)",
              opacity: area.open ? 0.75 : 1,
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              minHeight: "10rem",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--ink)",
              }}
            >
              {area.name}
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.4,
                color: "var(--ink)",
              }}
            >
              {area.description}
            </p>

            <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
              {area.open ? (
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                    border: "1px dashed var(--rule)",
                    borderRadius: "var(--radius)",
                    padding: "0.15rem 0.5rem",
                  }}
                >
                  not yet built
                </span>
              ) : area.example ? (
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                  }}
                >
                  {area.example}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
