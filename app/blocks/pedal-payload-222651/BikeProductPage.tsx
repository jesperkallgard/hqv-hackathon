"use client";

/**
 * Single hard-coded product page for one bike — hero photo, price, selectable frame-size pills, weight, and three plain-language ride notes. No reviews, color picker, or upsell.
 */
import React, { useState } from "react";

type FrameSize = "S" | "M" | "L" | "XL";

/**
 * BikeProductPage — a single hard-coded product page for one bike ("The Commuter").
 * Takes no props: this sprint's brief is one example bike with fixed data.
 * To reuse for other bikes later, lift the constants below into a
 * `bike: { name, price, weight, image, sizes, points }` prop.
 */
export default function BikeProductPage() {
  const bike = {
    name: "The Commuter",
    tagline: "A city bike for people who just need to get there.",
    price: 899,
    weight: "11.2 kg",
    sizes: ["S", "M", "L", "XL"] as FrameSize[],
    points: [
      "Upright seating position, so your wrists and lower back stop hurting on the ride to work.",
      "Wider 38mm tires soak up potholes and tram tracks — you'll feel fewer jolts, not more speed.",
      "7 gears cover flat commutes and the one hill on your route, without a wall of shifters to learn.",
    ],
  };

  const [selectedSize, setSelectedSize] = useState<FrameSize>("M");

  const paper = "var(--paper, #FAFAF8)";
  const ink = "var(--ink, #1A1A1A)";
  const accent = "var(--accent, #E8590C)";
  const muted = "var(--muted, #6B6B6B)";
  const rule = "var(--rule, #DDDAD3)";
  const radius = "var(--radius, 4px)";
  const font = "var(--font, 'Space Grotesk', 'Inter', system-ui, sans-serif)";

  return (
    <div
      style={{
        background: paper,
        color: ink,
        fontFamily: font,
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          maxWidth: "1000px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Hero image */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: radius,
            background: `linear-gradient(135deg, ${ink} 0%, #333 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${rule}`,
          }}
          role="img"
          aria-label={`Photo of ${bike.name}, a city commuter bike`}
        >
          <span style={{ fontSize: "96px", lineHeight: 1 }}>🚲</span>
        </div>

        {/* Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              {bike.name}
            </h1>
            <p style={{ margin: "4px 0 0", color: muted, fontSize: "15px" }}>
              {bike.tagline}
            </p>
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: accent,
            }}
          >
            ${bike.price.toLocaleString()}
          </div>

          <div>
            <div
              style={{
                fontSize: "13px",
                color: muted,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginBottom: "8px",
              }}
            >
              Frame size
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {bike.sizes.map((size) => {
                const isSelected = size === selectedSize;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: "8px 16px",
                      fontSize: "14px",
                      fontFamily: font,
                      fontWeight: 600,
                      borderRadius: radius,
                      border: `1px solid ${isSelected ? accent : rule}`,
                      background: isSelected ? accent : "transparent",
                      color: isSelected ? paper : ink,
                      cursor: "pointer",
                    }}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderTop: `1px solid ${rule}`,
              borderBottom: `1px solid ${rule}`,
              fontSize: "14px",
            }}
          >
            <span style={{ color: muted }}>Weight</span>
            <span style={{ fontWeight: 600 }}>{bike.weight}</span>
          </div>

          <div>
            <div
              style={{
                fontSize: "13px",
                color: muted,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginBottom: "8px",
              }}
            >
              What you'll actually notice
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {bike.points.map((point, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "8px 0",
                    fontSize: "15px",
                    lineHeight: 1.4,
                    borderTop: i === 0 ? "none" : `1px solid ${rule}`,
                  }}
                >
                  <span style={{ color: accent, fontWeight: 700 }}>—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
