"use client";

/**
 * Distraction-free single-column bike product page: photo, name + price, three spec bullets (weight, frame size options, drivetrain), and an Add to Cart button that logs to console. No reviews, no upsells.
 */
import React, { useState } from "react";

/**
 * RoadBikeProductPage — a single, distraction-free product page for one bike:
 * photo, name + price, three key specs, and an Add to Cart button. Nothing else.
 */

type RoadBikeProductPageProps = {
  name?: string;
  price?: string;
  imageUrl?: string;
  weight?: string;
  frameSizes?: string;
  drivetrain?: string;
};

const theme = {
  paper: "var(--paper, #F6F2EA)",
  ink: "var(--ink, #211C16)",
  accent: "var(--accent, #C1502E)",
  muted: "var(--muted, #6B6255)",
  rule: "var(--rule, #DDD3C4)",
  radius: "var(--radius, 6px)",
  bodyFont:
    "var(--font-body, 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif)",
  headingFont:
    "var(--font-heading, 'Roboto Slab', 'Georgia', 'Times New Roman', serif)",
};

export default function RoadBikeProductPage({
  name = "Aldren Road Bike — Aluminum",
  price = "$1,899",
  imageUrl = "https://placehold.co/800x600?text=Product+Photo",
  weight = "9.8 kg",
  frameSizes = "51 / 54 / 56 / 58 cm",
  drivetrain = "Shimano 105, 2x11-speed",
}: RoadBikeProductPageProps) {
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    console.log(`Added to cart: ${name}`);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div
      style={{
        fontFamily: theme.bodyFont,
        color: theme.ink,
        background: theme.paper,
        maxWidth: "480px",
        width: "100%",
        margin: "0 auto",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Product photo */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          borderRadius: theme.radius,
          overflow: "hidden",
          border: `1px solid ${theme.rule}`,
          background: "#EAE3D5",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Name and price */}
      <div style={{ marginTop: "20px" }}>
        <h1
          style={{
            fontFamily: theme.headingFont,
            fontSize: "1.7rem",
            lineHeight: 1.25,
            margin: 0,
            fontWeight: 700,
          }}
        >
          {name}
        </h1>
        <p
          style={{
            fontFamily: theme.headingFont,
            fontSize: "1.4rem",
            fontWeight: 600,
            color: theme.accent,
            margin: "6px 0 0",
          }}
        >
          {price}
        </p>
      </div>

      {/* Key specs */}
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "1.2em",
          margin: "20px 0",
          color: theme.ink,
          fontSize: "1rem",
          lineHeight: 1.6,
        }}
      >
        <li>
          <span style={{ color: theme.muted }}>Weight: </span>
          {weight}
        </li>
        <li>
          <span style={{ color: theme.muted }}>Frame size options: </span>
          {frameSizes}
        </li>
        <li>
          <span style={{ color: theme.muted }}>Drivetrain: </span>
          {drivetrain}
        </li>
      </ul>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        style={{
          width: "100%",
          padding: "14px 0",
          fontFamily: theme.bodyFont,
          fontSize: "1.05rem",
          fontWeight: 600,
          color: theme.paper,
          background: theme.accent,
          border: "none",
          borderRadius: theme.radius,
          cursor: "pointer",
          marginTop: "4px",
        }}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
