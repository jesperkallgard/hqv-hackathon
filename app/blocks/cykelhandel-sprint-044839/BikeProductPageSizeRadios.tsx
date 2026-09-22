"use client";

/**
 * Extends the canon bike product page with a 3-option radio-button size selector between price and specs: picking a size live-updates the big price and shows/hides an out-of-stock label, disabling Buy Now for the unavailable size.
 */
import React, { useState } from "react";

type Spec = { label: string; value: string };

type Size = { label: string; price: string; inStock: boolean };

type BikeProductPageSizeRadiosProps = {
  shopName: string;
  navLinks: string[];
  imageUrl: string;
  imageAlt: string;
  modelName: string;
  specs: Spec[];
  sizes: Size[];
  buyLabel: string;
  outOfStockLabel: string;
  footerNote: string;
  footerLinks: string[];
};

export default function BikeProductPageSizeRadios({
  shopName,
  navLinks,
  imageUrl,
  imageAlt,
  modelName,
  specs,
  sizes,
  buyLabel,
  outOfStockLabel,
  footerNote,
  footerLinks,
}: BikeProductPageSizeRadiosProps) {
  const defaultIndex = (() => {
    const firstInStock = sizes.findIndex((s) => s.inStock);
    return firstInStock === -1 ? 0 : firstInStock;
  })();

  const [selected, setSelected] = useState(defaultIndex);
  const current = sizes[selected];

  return (
    <div className="bppsr-root">
      <style>{`
        .bppsr-root {
          background: var(--paper);
          color: var(--ink);
          font-family: inherit;
          max-width: 640px;
          margin: 0 auto;
        }
        .bppsr-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 1rem;
          border-bottom: 1px solid var(--rule);
        }
        .bppsr-shopname {
          font-weight: 700;
          font-size: 1.1rem;
        }
        .bppsr-nav {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .bppsr-nav a {
          color: var(--ink);
          text-decoration: none;
          opacity: 0.8;
          font-size: 0.9rem;
        }
        .bppsr-nav a:hover {
          opacity: 1;
          text-decoration: underline;
        }
        .bppsr-image {
          width: 100%;
          display: block;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border-bottom: 1px solid var(--rule);
        }
        .bppsr-body {
          padding: 1rem;
        }
        .bppsr-model {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
        }
        .bppsr-price {
          font-size: 2rem;
          font-weight: 800;
          margin: 0;
        }
        .bppsr-outofstock {
          margin-top: 0.5rem;
          display: inline-block;
          padding: 0.25rem 0.6rem;
          border: 1px solid var(--accent);
          color: var(--accent);
          border-radius: var(--radius);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .bppsr-sizes {
          margin-top: 1.25rem;
        }
        .bppsr-sizes-label {
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 0.5rem;
        }
        .bppsr-size-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .bppsr-size-option {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid var(--rule);
          border-radius: var(--radius);
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          font-size: 0.9rem;
        }
        .bppsr-size-option.selected {
          border-color: var(--accent);
        }
        .bppsr-size-option.unavailable {
          color: var(--muted);
        }
        .bppsr-specs {
          margin-top: 1.25rem;
          border-top: 1px solid var(--rule);
        }
        .bppsr-spec-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--rule);
          font-size: 0.95rem;
        }
        .bppsr-spec-label {
          color: var(--muted);
        }
        .bppsr-buy {
          margin-top: 1.5rem;
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-weight: 700;
          border-radius: var(--radius);
          border: none;
          background: var(--accent);
          color: var(--paper);
          cursor: pointer;
        }
        .bppsr-buy:disabled {
          background: var(--rule);
          color: var(--muted);
          cursor: not-allowed;
        }
        .bppsr-footer {
          margin-top: 2rem;
          border-top: 1px solid var(--rule);
          padding: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--muted);
        }
        .bppsr-footer-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .bppsr-footer-links a {
          color: var(--muted);
          text-decoration: none;
        }
        .bppsr-footer-links a:hover {
          text-decoration: underline;
        }
        @media (max-width: 390px) {
          .bppsr-price {
            font-size: 1.6rem;
          }
          .bppsr-size-row {
            flex-direction: column;
          }
        }
      `}</style>

      <header className="bppsr-header">
        <span className="bppsr-shopname">{shopName}</span>
        <ul className="bppsr-nav">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </header>

      <img className="bppsr-image" src={imageUrl} alt={imageAlt} />

      <div className="bppsr-body">
        <h1 className="bppsr-model">{modelName}</h1>
        <p className="bppsr-price">{current.price}</p>
        {!current.inStock && (
          <span className="bppsr-outofstock">{outOfStockLabel}</span>
        )}

        <div className="bppsr-sizes">
          <div className="bppsr-sizes-label">Size</div>
          <div className="bppsr-size-row">
            {sizes.map((size, i) => (
              <label
                key={size.label}
                className={
                  "bppsr-size-option" +
                  (i === selected ? " selected" : "") +
                  (!size.inStock ? " unavailable" : "")
                }
              >
                <input
                  type="radio"
                  name="bppsr-size"
                  checked={i === selected}
                  onChange={() => setSelected(i)}
                />
                {size.label} &middot; {size.price}
                {!size.inStock ? " (out of stock)" : ""}
              </label>
            ))}
          </div>
        </div>

        <div className="bppsr-specs">
          {specs.map((spec) => (
            <div className="bppsr-spec-row" key={spec.label}>
              <span className="bppsr-spec-label">{spec.label}</span>
              <span>{spec.value}</span>
            </div>
          ))}
        </div>

        <button
          className="bppsr-buy"
          disabled={!current.inStock}
          onClick={() => console.log("buy clicked", modelName, current.label)}
        >
          {current.inStock ? buyLabel : outOfStockLabel}
        </button>
      </div>

      <footer className="bppsr-footer">
        <span>{footerNote}</span>
        <ul className="bppsr-footer-links">
          {footerLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
