"use client";

/**
 * Bike product page with a single Size dropdown (three hardcoded sizes, each its own price) that swaps the displayed price inline, instantly, next to the dropdown — no reload, no cart.
 */
import { useState } from "react";

type SizeOption = {
  size: string;
  price: number;
};

type BikeSizePriceDropdownProps = {
  model?: string;
  imageUrl?: string;
  sizeOptions?: SizeOption[];
  weight?: string;
  drivetrain?: string;
};

const PAPER = "#F6F2EA";
const INK = "#211C16";
const ACCENT = "#C1502E";
const RADIUS = "6px";

const BODY_FONT =
  "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', 'Segoe UI', sans-serif";
const SLAB_FONT =
  "'Roboto Slab', 'Rockwell', 'Bitstream Vera Serif Bold', Georgia, serif";

const DEFAULT_SIZES: SizeOption[] = [
  { size: "54cm", price: 1899 },
  { size: "56cm", price: 1949 },
  { size: "58cm", price: 1999 },
];

export default function BikeSizePriceDropdown({
  model = "Aldren Road Bike — Aluminum",
  imageUrl = "https://placehold.co/800x600?text=Aldren+Road+Bike",
  sizeOptions = DEFAULT_SIZES,
  weight = "9.8 kg",
  drivetrain = "Shimano 105, 2x11-speed",
}: BikeSizePriceDropdownProps) {
  const defaultIndex = Math.floor(sizeOptions.length / 2);
  const [selectedSize, setSelectedSize] = useState(
    sizeOptions[defaultIndex]?.size ?? sizeOptions[0]?.size
  );
  const [added, setAdded] = useState(false);

  const current =
    sizeOptions.find((option) => option.size === selectedSize) ??
    sizeOptions[0];

  const handleAddToCart = () => {
    // eslint-disable-next-line no-console
    console.log(`Added to cart: ${model} (${selectedSize})`);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div
      style={{
        fontFamily: BODY_FONT,
        color: INK,
        background: PAPER,
        maxWidth: "480px",
        width: "100%",
        margin: "0 auto",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={imageUrl}
        alt={model}
        style={{
          width: "100%",
          display: "block",
          borderRadius: RADIUS,
          marginBottom: "16px",
        }}
      />

      <h1
        style={{
          fontFamily: SLAB_FONT,
          fontSize: "1.5rem",
          fontWeight: 700,
          margin: "0 0 12px 0",
          textTransform: "none",
        }}
      >
        {model}
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "12px 0",
          borderTop: "1px solid rgba(33,28,22,0.15)",
          borderBottom: "1px solid rgba(33,28,22,0.15)",
          marginBottom: "16px",
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.95rem",
          }}
        >
          <span>Size</span>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            style={{
              fontFamily: BODY_FONT,
              fontSize: "0.95rem",
              color: INK,
              background: "#fff",
              border: "1px solid rgba(33,28,22,0.3)",
              borderRadius: RADIUS,
              padding: "6px 8px",
            }}
          >
            {sizeOptions.map((option) => (
              <option key={option.size} value={option.size}>
                {option.size}
              </option>
            ))}
          </select>
        </label>

        <span
          style={{
            fontFamily: SLAB_FONT,
            fontSize: "1.4rem",
            fontWeight: 700,
            color: ACCENT,
          }}
        >
          ${current.price.toLocaleString()}
        </span>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 20px 0",
          fontSize: "0.95rem",
          lineHeight: 1.6,
        }}
      >
        <li>Weight: {weight}</li>
        <li>Drivetrain: {drivetrain}</li>
      </ul>

      <button
        onClick={handleAddToCart}
        style={{
          width: "100%",
          fontFamily: SLAB_FONT,
          fontSize: "1rem",
          fontWeight: 700,
          color: PAPER,
          background: ACCENT,
          border: "none",
          borderRadius: RADIUS,
          padding: "14px 0",
          cursor: "pointer",
        }}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
