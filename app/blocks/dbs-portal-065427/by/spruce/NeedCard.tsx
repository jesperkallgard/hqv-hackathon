/**
 * A grid of audience-need cards — each card names one outside audience and states one need in plain language, with optional track/market tags. Use for surfacing or reviewing needs pinned to a named audience.
 */
type Need = {
  audience: string; // who has the need, e.g. "Market teams"
  need: string; // the need itself, plain language, one sentence or two
  track?: string; // which work track it touches, optional
  market?: string; // which market/region it touches, optional
};

type Props = {
  items: Need[];
};

export default function NeedCard({ items }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "1.25rem",
        width: "100%",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="need-card"
          style={{
            background: "var(--paper)",
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            {item.audience}
          </span>

          <p
            style={{
              margin: 0,
              color: "var(--ink)",
              fontSize: "1rem",
              lineHeight: 1.5,
            }}
          >
            {item.need}
          </p>

          {(item.track || item.market) && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginTop: "0.4rem",
                paddingTop: "0.6rem",
                borderTop: "1px solid var(--rule)",
              }}
            >
              {item.track && (
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    border: "1px solid var(--rule)",
                    borderRadius: "999px",
                    padding: "0.15rem 0.6rem",
                  }}
                >
                  {item.track}
                </span>
              )}
              {item.market && (
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    border: "1px solid var(--rule)",
                    borderRadius: "999px",
                    padding: "0.15rem 0.6rem",
                  }}
                >
                  {item.market}
                </span>
              )}
            </div>
          )}
        </div>
      ))}

      <style>{`
        .need-card {
          transition: border-color 0.15s ease;
        }
        .need-card:hover {
          border-color: var(--accent);
        }
        @media (max-width: 390px) {
          .need-card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
