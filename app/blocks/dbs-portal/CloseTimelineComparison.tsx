/**
 * Leads with the weeks-saved gap, then shows two labelled week-marker tracks — the CFO's close today and the close with DBS — with no CTA, feature list or explanatory copy.
 */
export default function CloseTimelineComparison({
  gapLabel,
  gapNote,
  weekLabel = "Week",
  tracks = [],
}) {
  return (
    <section style={{ color: "var(--ink)" }}>
      <p
        style={{
          margin: 0,
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          lineHeight: 1.1,
          fontWeight: 700,
        }}
      >
        {gapLabel}
      </p>
      {gapNote ? (
        <p
          style={{
            margin: "0.75rem 0 0",
            fontSize: "1rem",
            color: "var(--muted)",
          }}
        >
          {gapNote}
        </p>
      ) : null}

      <div style={{ marginTop: "2.5rem", display: "grid", gap: "2rem" }}>
        {tracks.map((track) => (
          <div key={track.label}>
            <p
              style={{
                margin: "0 0 0.75rem",
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {track.label}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${Math.max(
                  track.weeks?.length || 1,
                  1
                )}, minmax(0, 1fr))`,
                gap: "0.5rem",
              }}
            >
              {(track.weeks || []).map((week, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid var(--rule)",
                    borderRadius: "var(--radius)",
                    background: week.filled ? "var(--accent)" : "var(--paper)",
                    padding: "0.75rem 0.5rem",
                    minHeight: "4.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                    }}
                  >
                    {weekLabel} {i + 1}
                  </span>
                  {week.marker ? (
                    <span style={{ fontSize: "0.85rem" }}>{week.marker}</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
