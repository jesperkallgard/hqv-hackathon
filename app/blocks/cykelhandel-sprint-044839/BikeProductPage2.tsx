/**
 * A customer-facing bike product page: photo, name + bold price, star rating with social-proof line, a two-column spec sheet (label/value, e.g. weight/frame size/gears), and a bold Buy Now button. Fully data-driven via props.
 */
import React from "react";

type Spec = { label: string; value: string };

type BikeProductPage2Props = {
  name: string;
  price: string;
  photoUrl: string;
  photoAlt: string;
  specs: Spec[];
  rating: number;
  reviewCount?: number;
  socialProof: string;
  buyLabel?: string;
};

function Stars({ rating }: { rating: number }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <span aria-label={`${rating} out of 5 stars`} style={{ fontSize: "1.1rem", letterSpacing: "2px" }}>
      {stars.map((n) => {
        const filled = rating >= n - 0.25;
        return (
          <span
            key={n}
            style={{ color: filled ? "var(--accent)" : "var(--rule)" }}
          >
            ★
          </span>
        );
      })}
    </span>
  );
}

export default function BikeProductPage2({
  name,
  price,
  photoUrl,
  photoAlt,
  specs,
  rating,
  reviewCount,
  socialProof,
  buyLabel = "Buy Now",
}: BikeProductPage2Props) {
  return (
    <div
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        maxWidth: "640px",
        margin: "0 auto",
        border: "1px solid var(--rule)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
      }}
    >
      <img
        src={photoUrl}
        alt={photoAlt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderBottom: "1px solid var(--rule)",
        }}
      />

      <div style={{ padding: "1.25rem" }}>
        <h2 style={{ margin: "0 0 0.4rem", fontSize: "1.4rem", lineHeight: 1.2 }}>
          {name}
        </h2>

        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "var(--accent)",
            margin: "0 0 0.75rem",
          }}
        >
          {price}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.15rem" }}>
          <Stars rating={rating} />
          <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            {rating.toFixed(1)}
            {reviewCount ? ` (${reviewCount} reviews)` : ""}
          </span>
        </div>

        <div style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
          {socialProof}
        </div>

        <div
          style={{
            borderTop: "1px solid var(--rule)",
            borderBottom: "1px solid var(--rule)",
            margin: "0 0 1.25rem",
          }}
        >
          {specs.map((spec, i) => (
            <div
              key={spec.label + i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.6rem 0",
                borderTop: i === 0 ? "none" : "1px solid var(--rule)",
              }}
            >
              <span style={{ color: "var(--muted)" }}>{spec.label}</span>
              <span style={{ fontWeight: 600 }}>{spec.value}</span>
            </div>
          ))}
        </div>

        <a
          href="#"
          style={{
            display: "block",
            textAlign: "center",
            background: "var(--accent)",
            color: "var(--paper)",
            fontWeight: 700,
            fontSize: "1.1rem",
            padding: "0.9rem",
            borderRadius: "var(--radius)",
            textDecoration: "none",
          }}
        >
          {buyLabel}
        </a>
      </div>
    </div>
  );
}
