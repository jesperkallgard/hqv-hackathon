"use client";

/**
 * A single-bike configurator card: pick size and color from two dropdowns, see a placeholder photo that matches the color, and get a live price from a hardcoded size×color lookup table.
 */
import { useState } from "react";

type BikeConfiguratorData = {
  bikeName: string;
  sizes: string[];
  colors: string[];
  prices: Record<string, Record<string, number>>;
  images: Record<string, string>;
};

const DEFAULT_DATA: BikeConfiguratorData = {
  bikeName: "Trailhead",
  sizes: ["S", "M", "L"],
  colors: ["Black", "Red", "Blue"],
  prices: {
    S: { Black: 1200, Red: 1250, Blue: 1230 },
    M: { Black: 1250, Red: 1300, Blue: 1280 },
    L: { Black: 1300, Red: 1350, Blue: 1330 },
  },
  images: {
    Black: "https://placehold.co/600x400/111111/FFFFFF?text=Black+Bike",
    Red: "https://placehold.co/600x400/CC3333/FFFFFF?text=Red+Bike",
    Blue: "https://placehold.co/600x400/2255AA/FFFFFF?text=Blue+Bike",
  },
};

type BikeConfiguratorProps = {
  data?: BikeConfiguratorData;
};

export default function BikeConfigurator({ data }: BikeConfiguratorProps) {
  const cfg = data ?? DEFAULT_DATA;
  const [size, setSize] = useState(cfg.sizes[0]);
  const [color, setColor] = useState(cfg.colors[0]);

  const price = cfg.prices[size]?.[color];
  const image = cfg.images[color];

  return (
    <div
      style={{
        maxWidth: 420,
        width: "100%",
        margin: "0 auto",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        border: "1px solid #ddd",
        color: "#111",
        background: "#fff",
      }}
    >
      <img
        src={image}
        alt={`${cfg.bikeName} in ${color}`}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          display: "block",
          borderBottom: "1px solid #ddd",
        }}
      />

      <div style={{ padding: "16px 18px 20px" }}>
        <h3
          style={{
            margin: "0 0 14px",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: -0.2,
          }}
        >
          {cfg.bikeName}
        </h3>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          <label style={{ flex: "1 1 100px", fontSize: 12, color: "#555" }}>
            Size
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                marginTop: 4,
                padding: "8px 6px",
                fontSize: 14,
                border: "1px solid #ccc",
                background: "#fff",
                color: "#111",
              }}
            >
              {cfg.sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label style={{ flex: "1 1 100px", fontSize: 12, color: "#555" }}>
            Color
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                marginTop: 4,
                padding: "8px 6px",
                fontSize: 14,
                border: "1px solid #ccc",
                background: "#fff",
                color: "#111",
              }}
            >
              {cfg.colors.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div
          style={{
            borderTop: "1px solid #eee",
            paddingTop: 14,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 12, color: "#555" }}>
            {size} · {color}
          </span>
          <span style={{ fontSize: 26, fontWeight: 700 }}>
            {price != null ? `$${price.toLocaleString()}` : "—"}
          </span>
        </div>
      </div>
    </div>
  );
}
