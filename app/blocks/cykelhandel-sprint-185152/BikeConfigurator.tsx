/**
 * Single-bike product mock: an image with clickable frame-size buttons and color swatches that update a live price and selection line instantly — no spec sheet, cart, or reviews.
 */
"use client";

import { useState } from "react";

type Size = { label: string; priceDelta: number };
type Color = { name: string; hex: string };

type BikeConfiguratorProps = {
  name: string;
  imageUrl: string;
  basePrice: number;
  currency: string;
  sizes: Size[];
  colors: Color[];
};

export default function BikeConfigurator({
  name,
  imageUrl,
  basePrice,
  currency,
  sizes,
  colors,
}: BikeConfiguratorProps) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const selectedSize = sizes[sizeIndex];
  const selectedColor = colors[colorIndex];
  const price = basePrice + selectedSize.priceDelta;

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "0 auto",
        background: "var(--paper)",
        color: "var(--ink)",
        borderRadius: "var(--radius)",
        border: "1px solid var(--rule)",
        padding: 16,
        fontFamily: "inherit",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "var(--radius)",
          display: "block",
          marginBottom: 16,
        }}
      />

      <h2 style={{ margin: "0 0 16px", fontSize: 18, fontWeight: 600 }}>
        {name}
      </h2>

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8 }}>
          Frame size
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {sizes.map((size, i) => {
            const selected = i === sizeIndex;
            return (
              <button
                key={size.label}
                onClick={() => setSizeIndex(i)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "var(--radius)",
                  border: `1px solid ${selected ? "var(--accent)" : "var(--rule)"}`,
                  background: "var(--paper)",
                  color: "var(--ink)",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                {size.label}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8 }}>
          Color
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {colors.map((color, i) => {
            const selected = i === colorIndex;
            return (
              <button
                key={color.name}
                onClick={() => setColorIndex(i)}
                aria-label={color.name}
                title={color.name}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: color.hex,
                  border: `2px solid ${selected ? "var(--accent)" : "var(--rule)"}`,
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            );
          })}
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 12 }}>
        <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 4 }}>
          {selectedSize.label} · {selectedColor.name}
        </div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>
          {currency}
          {price.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
