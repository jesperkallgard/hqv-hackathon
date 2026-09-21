/**
 * A single bike's product page: image, plain-spoken description, specs with honest trade-offs, visible stock status, a size dropdown, and a Buy button that logs the pick and shows an on-page confirmation instead of processing payment.
 */
"use client";

import React, { useState } from "react";

/**
 * Bike data lives here so a future version can pass it in as a prop
 * instead of hardcoding it. Shape matches the `Bike` type below.
 */
type BikeSpecs = {
  weight: string;
  gearing: string;
  frameMaterial: string;
};

type Bike = {
  name: string;
  price: number;
  description: string;
  specs: BikeSpecs;
  image: string;
  sizes: string[];
  stock: number;
};

const DEFAULT_BIKE: Bike = {
  name: "Ridgeway Commuter 7",
  price: 729,
  description:
    "A basic city bike for getting to work without a car. It's not fast and it's not light, but it holds up fine on potholes and doesn't need much upkeep. Fenders and a rear rack come stock.",
  specs: {
    weight: "13.4 kg (29.5 lb) — heavy for the price, mostly the steel fork and rack",
    gearing: "7-speed Shimano Tourney, twist shifter — fine for flat commutes, you'll feel hills",
    frameMaterial: "Aluminum frame, steel fork",
  },
  image: "https://picsum.photos/seed/ridgeway-commuter-7/640/480",
  sizes: ["S (49cm)", "M (54cm)", "L (58cm)", "XL (61cm)"],
  stock: 3,
};

export type BikeProductPageProps = {
  bike?: Bike;
};

export default function SpruceBikeProductPage({ bike = DEFAULT_BIKE }: BikeProductPageProps) {
  const [selectedSize, setSelectedSize] = useState(bike.sizes[0]);
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const inStock = bike.stock > 0;

  const handleBuy = () => {
    console.log("Added:", { bike: bike.name, size: selectedSize });
    setConfirmation(`Added: ${bike.name}, size ${selectedSize}`);
  };

  return (
    <div className="bpp-wrap">
      <style>{`
        .bpp-wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: var(--ink, #1a1a1a);
          background: var(--paper, #fff);
        }
        .bpp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 600px) {
          .bpp-grid {
            grid-template-columns: 1fr;
          }
        }
        .bpp-img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border: 1px solid var(--rule, #ddd);
          border-radius: var(--radius, 6px);
          background: var(--paper, #fff);
          display: block;
        }
        .bpp-name {
          margin: 0 0 4px;
          font-size: 1.4rem;
          font-weight: 700;
        }
        .bpp-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--accent, #c1440e);
          margin: 0 0 12px;
        }
        .bpp-desc {
          margin: 0 0 14px;
          line-height: 1.45;
        }
        .bpp-specs {
          list-style: none;
          margin: 0 0 14px;
          padding: 0;
          border-top: 1px solid var(--rule, #ddd);
        }
        .bpp-specs li {
          padding: 6px 0;
          border-bottom: 1px solid var(--rule, #ddd);
          font-size: 0.92rem;
          color: var(--muted, #666);
        }
        .bpp-specs strong {
          color: var(--ink, #1a1a1a);
        }
        .bpp-stock {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .bpp-stock.in {
          color: var(--ink, #1a1a1a);
        }
        .bpp-stock.out {
          color: var(--accent, #c1440e);
        }
        .bpp-row {
          display: flex;
          gap: 10px;
          align-items: stretch;
          flex-wrap: wrap;
        }
        .bpp-select {
          flex: 1 1 140px;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid var(--rule, #ddd);
          border-radius: var(--radius, 6px);
          background: var(--paper, #fff);
          color: var(--ink, #1a1a1a);
        }
        .bpp-buy {
          flex: 1 1 140px;
          padding: 10px 16px;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          border-radius: var(--radius, 6px);
          background: var(--accent, #c1440e);
          color: var(--paper, #fff);
          cursor: pointer;
        }
        .bpp-buy:disabled {
          background: var(--muted, #999);
          cursor: not-allowed;
        }
        .bpp-confirm {
          margin-top: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--ink, #1a1a1a);
        }
      `}</style>

      <div className="bpp-grid">
        <img className="bpp-img" src={bike.image} alt={bike.name} />

        <div>
          <h2 className="bpp-name">{bike.name}</h2>
          <p className="bpp-price">${bike.price}</p>
          <p className="bpp-desc">{bike.description}</p>

          <ul className="bpp-specs">
            <li>
              <strong>Weight:</strong> {bike.specs.weight}
            </li>
            <li>
              <strong>Gearing:</strong> {bike.specs.gearing}
            </li>
            <li>
              <strong>Frame:</strong> {bike.specs.frameMaterial}
            </li>
          </ul>

          <p className={`bpp-stock ${inStock ? "in" : "out"}`}>
            {inStock ? `${bike.stock} in stock` : "Out of stock"}
          </p>

          <div className="bpp-row">
            <select
              className="bpp-select"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              disabled={!inStock}
              aria-label="Frame size"
            >
              {bike.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <button className="bpp-buy" onClick={handleBuy} disabled={!inStock}>
              {inStock ? "Buy" : "Out of stock"}
            </button>
          </div>

          {confirmation && <p className="bpp-confirm">{confirmation}</p>}
        </div>
      </div>
    </div>
  );
}
