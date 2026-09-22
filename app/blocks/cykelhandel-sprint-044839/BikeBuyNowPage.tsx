/**
 * Single-column bike product page for a shop customer deciding to buy: full-width photo, model name + big price, three plain-text specs (weight, frame size range, warranty), full-width Buy Now button. No reviews, testimonials, or spec tables.
 */
import React from "react";

type BikeBuyNowPageProps = {
  /** URL of the large product photo shown at the top of the page */
  imageUrl?: string;
  /** Name of the bike model, shown prominently below the photo */
  modelName?: string;
  /** Price in dollars, shown big and bold next to the model name */
  price?: number;
  /** Plain-text weight spec, e.g. "11.2 kg" */
  weight?: string;
  /** Plain-text frame size range spec, e.g. "48cm - 61cm" */
  frameSizeRange?: string;
  /** Plain-text warranty spec, e.g. "Lifetime frame, 2-year parts" */
  warranty?: string;
  /** URL or anchor the Buy Now button links to */
  buyNowHref?: string;
};

export default function BikeBuyNowPage({
  imageUrl = "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80&auto=format&fit=crop",
  modelName = "Ridgeline 3 Road Bike",
  price = 1249,
  weight = "9.8 kg",
  frameSizeRange = "49cm – 61cm",
  warranty = "Lifetime frame warranty, 2-year parts",
  buyNowHref = "#checkout",
}: BikeBuyNowPageProps) {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        background: "var(--paper)",
        color: "var(--ink)",
        fontFamily: "inherit",
      }}
    >
      <style>{`
        .bbnp-buy-btn:hover {
          filter: brightness(1.08);
        }
        .bbnp-buy-btn:active {
          filter: brightness(0.95);
        }
      `}</style>

      <img
        src={imageUrl}
        alt={modelName}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "var(--radius)",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "24px 16px 0" }}>
        <h1
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            margin: "0 0 8px",
            lineHeight: 1.2,
          }}
        >
          {modelName}
        </h1>

        <div
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            color: "var(--accent)",
            margin: "0 0 24px",
          }}
        >
          ${price.toLocaleString()}
        </div>

        <div
          style={{
            borderTop: "1px solid var(--rule)",
            borderBottom: "1px solid var(--rule)",
            padding: "16px 0",
            margin: "0 0 32px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <p style={{ margin: 0, fontSize: "1rem" }}>
            <strong>Weight:</strong> {weight}
          </p>
          <p style={{ margin: 0, fontSize: "1rem" }}>
            <strong>Frame size range:</strong> {frameSizeRange}
          </p>
          <p style={{ margin: 0, fontSize: "1rem" }}>
            <strong>Warranty:</strong> {warranty}
          </p>
        </div>
      </div>

      <div style={{ padding: "0 16px 24px" }}>
        <a
          href={buyNowHref}
          className="bbnp-buy-btn"
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            textAlign: "center",
            padding: "18px 0",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "var(--paper)",
            background: "var(--accent)",
            borderRadius: "var(--radius)",
            textDecoration: "none",
            transition: "filter 0.15s ease",
          }}
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
