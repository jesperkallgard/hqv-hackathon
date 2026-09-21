/**
 * A single bike product page: photo, price, always-visible per-size stock, a size dropdown (S/M/L/XL), and a Buy button that's disabled/blocked for out-of-stock sizes and otherwise logs the pick and confirms on-page.
 */
"use client";

import { useState } from "react";

type StockBySize = Record<"S" | "M" | "L" | "XL", number>;

const STOCK: StockBySize = {
  S: 6,
  M: 4,
  L: 3,
  XL: 0,
};

const BIKE = {
  name: "Trek Marlin 7",
  price: 899,
  photo:
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
  description:
    "Hardtail mountain bike, aluminum frame, hydraulic disc brakes, 21-speed drivetrain. It's heavier than a carbon bike, but the gearing is basic and holds up — a solid first mountain bike, not a race bike.",
};

type Size = keyof StockBySize;

export default function BikeProductPage() {
  const [size, setSize] = useState<Size>("M");
  const [message, setMessage] = useState<string>("");

  const stockLeft = STOCK[size];
  const outOfStock = stockLeft <= 0;

  function handleBuy() {
    if (outOfStock) {
      setMessage(`Out of stock in size ${size}`);
      return;
    }
    const order = { bike: BIKE.name, size, price: BIKE.price };
    console.log(order);
    setMessage(`Added: ${BIKE.name}, size ${size}`);
  }

  function handleSizeChange(next: Size) {
    setSize(next);
    setMessage("");
  }

  return (
    <div
      className="bike-product-page"
      style={{
        background: "var(--paper, #fff)",
        color: "var(--ink, #111)",
        fontFamily: "inherit",
        maxWidth: "720px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      <style>{`
        .bike-product-page .bpp-layout {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .bike-product-page .bpp-layout {
            flex-direction: row;
            align-items: flex-start;
            gap: 24px;
          }
          .bike-product-page .bpp-photo,
          .bike-product-page .bpp-details {
            flex: 1 1 50%;
          }
        }
      `}</style>

      <div className="bpp-layout">
        <div className="bpp-photo">
          <img
            src={BIKE.photo}
            alt={BIKE.name}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              border: "1px solid var(--rule, #ccc)",
            }}
          />
        </div>

        <div className="bpp-details">
          <h1
            style={{
              fontSize: "1.4rem",
              margin: "0 0 4px 0",
              color: "var(--ink, #111)",
            }}
          >
            {BIKE.name}
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              margin: "0 0 4px 0",
              color: "var(--ink, #111)",
            }}
          >
            ${BIKE.price}
          </p>

          <p
            style={{
              margin: "0 0 16px 0",
              fontWeight: 600,
              color: outOfStock ? "var(--accent, #b00020)" : "var(--muted, #555)",
            }}
          >
            {outOfStock ? "Out of stock" : `In stock — ${stockLeft} left`}
          </p>

          <p
            style={{
              margin: "0 0 20px 0",
              color: "var(--ink, #111)",
              lineHeight: 1.5,
            }}
          >
            {BIKE.description}
          </p>

          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="bpp-size"
              style={{
                display: "block",
                marginBottom: "6px",
                color: "var(--muted, #555)",
                fontSize: "0.9rem",
              }}
            >
              Size
            </label>
            <select
              id="bpp-size"
              value={size}
              onChange={(e) => handleSizeChange(e.target.value as Size)}
              style={{
                width: "100%",
                padding: "8px",
                background: "var(--paper, #fff)",
                color: "var(--ink, #111)",
                border: "1px solid var(--rule, #ccc)",
                borderRadius: "var(--radius, 0px)",
                fontSize: "1rem",
              }}
            >
              <option value="S">S — {STOCK.S > 0 ? `${STOCK.S} left` : "out of stock"}</option>
              <option value="M">M — {STOCK.M > 0 ? `${STOCK.M} left` : "out of stock"}</option>
              <option value="L">L — {STOCK.L > 0 ? `${STOCK.L} left` : "out of stock"}</option>
              <option value="XL">XL — {STOCK.XL > 0 ? `${STOCK.XL} left` : "out of stock"}</option>
            </select>
          </div>

          <button
            onClick={handleBuy}
            disabled={outOfStock}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: outOfStock ? "not-allowed" : "pointer",
              background: outOfStock ? "var(--paper, #fff)" : "var(--accent, #111)",
              color: outOfStock ? "var(--muted, #555)" : "var(--paper, #fff)",
              border: "1px solid var(--rule, #ccc)",
              borderRadius: "var(--radius, 0px)",
            }}
          >
            {outOfStock ? "Out of stock" : "Buy"}
          </button>

          {message && (
            <p
              style={{
                marginTop: "12px",
                fontSize: "0.9rem",
                color: "var(--muted, #555)",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
