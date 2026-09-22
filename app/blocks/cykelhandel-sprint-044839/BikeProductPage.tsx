/**
 * Single customer-facing bike product page: full-width photo, model name + real price, three spec bullets (weight, gears, frame size), and an unwired Buy Now button, in that order.
 */
import React from "react";

type Spec = { label: string; value: string };

type BikeProductPageProps = {
  imageUrl: string;
  imageAlt: string;
  modelName: string;
  price: string;
  specs: Spec[];
  buyLabel: string;
};

export default function BikeProductPage({
  imageUrl,
  imageAlt,
  modelName,
  price,
  specs,
  buyLabel,
}: BikeProductPageProps) {
  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        background: "var(--paper, #fff)",
        color: "var(--ink, #111)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        border: "1px solid var(--rule, #ddd)",
        borderRadius: "var(--radius, 8px)",
        overflow: "hidden",
      }}
    >
      <img
        src={imageUrl}
        alt={imageAlt}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          aspectRatio: "4 / 3",
          objectFit: "cover",
          background: "var(--muted, #eee)",
        }}
      />

      <div style={{ padding: "20px 20px 0" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "1.4rem",
            fontWeight: 700,
            lineHeight: 1.25,
          }}
        >
          {modelName}
        </h1>

        <p
          style={{
            margin: "6px 0 0",
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "var(--ink, #111)",
          }}
        >
          {price}
        </p>
      </div>

      <ul
        style={{
          listStyle: "none",
          margin: "16px 20px 0",
          padding: 0,
          borderTop: "1px solid var(--rule, #ddd)",
        }}
      >
        {specs.map((spec) => (
          <li
            key={spec.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid var(--rule, #ddd)",
              fontSize: "0.95rem",
            }}
          >
            <span style={{ color: "var(--muted, #666)" }}>{spec.label}</span>
            <span style={{ fontWeight: 600 }}>{spec.value}</span>
          </li>
        ))}
      </ul>

      <div style={{ padding: 20 }}>
        <button
          style={{
            display: "block",
            width: "100%",
            padding: "14px 0",
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--paper, #fff)",
            background: "var(--accent, #c0392b)",
            border: "none",
            borderRadius: "var(--radius, 8px)",
            cursor: "pointer",
          }}
        >
          {buyLabel}
        </button>
      </div>
    </div>
  );
}
