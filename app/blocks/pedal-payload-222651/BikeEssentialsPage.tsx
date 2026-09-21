/**
 * Single-column, essentials-only bike product page: hero image, name, price, plain-language specs, and a buy button. No nav, footer, or extras — just enough to decide.
 */
type BikeSpec = {
  /** what a spec sheet would call it, e.g. "Frame material" */
  label: string;
  /** what it means for the rider, in plain words */
  plain: string;
};

type BikeEssentialsPageProps = {
  image: string;
  imageAlt?: string;
  name: string;
  /** already formatted, e.g. "$799" */
  price: string;
  specs: BikeSpec[];
  buyLabel?: string;
};

export default function BikeEssentialsPage({
  image,
  imageAlt,
  name,
  price,
  specs,
  buyLabel = "Buy this bike",
}: BikeEssentialsPageProps) {
  return (
    <div
      style={{
        fontFamily: "var(--font, inherit)",
        background: "var(--paper)",
        color: "var(--ink)",
        maxWidth: "480px",
        margin: "0 auto",
        padding: "0 0 32px",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          borderRadius: "var(--radius)",
        }}
      >
        <img
          src={image}
          alt={imageAlt || name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: "20px 16px 0" }}>
        <h1
          style={{
            fontSize: "1.5rem",
            lineHeight: 1.2,
            margin: "0 0 8px",
          }}
        >
          {name}
        </h1>

        <div
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--accent)",
            margin: "0 0 20px",
          }}
        >
          {price}
        </div>

        <a
          href="#buy"
          style={{
            display: "block",
            textAlign: "center",
            width: "100%",
            padding: "16px",
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "var(--paper)",
            background: "var(--accent)",
            borderRadius: "var(--radius)",
            textDecoration: "none",
            boxSizing: "border-box",
          }}
        >
          {buyLabel}
        </a>

        <div
          style={{
            marginTop: "28px",
            borderTop: "1px solid var(--rule)",
          }}
        >
          {specs.map((spec, i) => (
            <div
              key={i}
              style={{
                padding: "14px 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "var(--muted)",
                  marginBottom: "4px",
                }}
              >
                {spec.label}
              </div>
              <div style={{ fontSize: "1rem", lineHeight: 1.4 }}>
                {spec.plain}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
