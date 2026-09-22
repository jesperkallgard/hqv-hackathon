"use client";

/**
 * Standalone single-column bike product page: photo, model name + price, a plain spec list (weight, frame size, drivetrain, etc.), a full-width Add to Cart button, and one reassurance line about returns/warranty — nothing else.
 */
import { useState } from "react";

type Spec = { label: string; value: string };

type BikeBuyPageProps = {
  /** Product photo — plain, honest framing, not cropped in. */
  imageUrl?: string;
  imageAlt?: string;
  modelName?: string;
  price?: string;
  /** 3-5 plain spec rows, e.g. { label: "Weight", value: "10.4 kg" } */
  specs?: Spec[];
  buttonLabel?: string;
  reassuranceLine?: string;
};

const defaultSpecs: Spec[] = [
  { label: "Frame size", value: "54 cm" },
  { label: "Weight", value: "10.4 kg" },
  { label: "Drivetrain", value: "Shimano 105, 2x11 speed" },
  { label: "Wheels", value: "700c, tubeless-ready" },
  { label: "Brakes", value: "Hydraulic disc" },
];

export default function BikeBuyPage({
  imageUrl = "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80",
  imageAlt = "The Harlow Road bike, side profile, on a plain background",
  modelName = "Harlow Road",
  price = "$1,895",
  specs = defaultSpecs,
  buttonLabel = "Add to Cart",
  reassuranceLine = "Free returns within 30 days. 2-year frame warranty.",
}: BikeBuyPageProps) {
  const [added, setAdded] = useState(false);

  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        color: "var(--ink)",
        background: "var(--paper)",
        fontFamily: "inherit",
      }}
    >
      <img
        src={imageUrl}
        alt={imageAlt}
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          objectFit: "cover",
          borderRadius: "var(--radius)",
          display: "block",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(1.75rem, 6vw, 2.5rem)",
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          {modelName}
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
            fontWeight: 600,
            color: "var(--accent)",
          }}
        >
          {price}
        </p>
      </div>

      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          borderTop: "1px solid var(--rule)",
        }}
      >
        {specs.map((spec) => (
          <li
            key={spec.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "0.75rem 0",
              borderBottom: "1px solid var(--rule)",
              fontSize: "1rem",
            }}
          >
            <span style={{ color: "var(--muted)" }}>{spec.label}</span>
            <span style={{ fontWeight: 600 }}>{spec.value}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <button
          type="button"
          onClick={() => setAdded(true)}
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "var(--paper)",
            background: "var(--accent)",
            border: "none",
            borderRadius: "var(--radius)",
            cursor: "pointer",
          }}
        >
          {added ? "Added ✓" : buttonLabel}
        </button>
        <p
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: "0.9rem",
            color: "var(--muted)",
          }}
        >
          {reassuranceLine}
        </p>
      </div>
    </div>
  );
}
