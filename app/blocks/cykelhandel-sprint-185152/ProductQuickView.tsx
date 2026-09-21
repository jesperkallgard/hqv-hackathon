/**
 * A fast-decision bike product layout: three photo-angle placeholders next to price plus one standout spec, and a single add-to-cart button. No reviews, no spec sheet, no tabs.
 */
"use client";

import React, { useState } from "react";

type Angle = { label: string };

type StandoutSpec = { label: string; value: string };

export type ProductQuickViewProps = {
  title: string;
  subtitle?: string;
  angles: Angle[];
  price: number;
  currencySymbol?: string;
  standoutSpec: StandoutSpec;
};

export default function ProductQuickView({
  title,
  subtitle,
  angles,
  price,
  currencySymbol = "$",
  standoutSpec,
}: ProductQuickViewProps) {
  const [added, setAdded] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        padding: "1.25rem",
        background: "var(--paper, #fff)",
        color: "var(--ink, #1a1a1a)",
        borderRadius: "var(--radius, 8px)",
        border: "1px solid var(--rule, #ddd)",
        fontFamily: "inherit",
      }}
    >
      {/* Photo angles */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          flex: "1 1 320px",
          minWidth: "260px",
        }}
      >
        {angles.map((angle, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 0",
              minHeight: "140px",
              border: "1px solid var(--rule, #ddd)",
              borderRadius: "var(--radius, 8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0.5rem",
              color: "var(--muted, #777)",
              fontSize: "0.9rem",
            }}
          >
            {angle.label}
          </div>
        ))}
      </div>

      {/* Info panel */}
      <div
        style={{
          flex: "1 1 240px",
          minWidth: "220px",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "1.25rem" }}>{title}</h2>
          {subtitle && (
            <p
              style={{
                margin: "0.25rem 0 0",
                color: "var(--muted, #777)",
                fontSize: "0.95rem",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "1.75rem", fontWeight: 700 }}>
            {currencySymbol}
            {price.toLocaleString()}
          </span>
          <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>
            {standoutSpec.label}: {standoutSpec.value}
          </span>
        </div>

        <button
          onClick={() => setAdded(true)}
          style={{
            marginTop: "0.5rem",
            padding: "0.65rem 1rem",
            fontSize: "1rem",
            fontWeight: 600,
            border: "1px solid var(--rule, #ddd)",
            borderRadius: "var(--radius, 8px)",
            background: added ? "var(--muted, #777)" : "var(--accent, #2a6df5)",
            color: "var(--paper, #fff)",
            cursor: "pointer",
            width: "100%",
            maxWidth: "220px",
          }}
        >
          {added ? "Added" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
