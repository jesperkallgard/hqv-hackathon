"use client";

/**
 * Bike shop product page (photo, model, specs, footer) where the Frame size row is a live dropdown that swaps the big price instantly via useState — no backend, no cart.
 */
import { useState } from "react";

type NavLink = { label: string; href: string };
type Spec = { label: string; value: string };
type SizeOption = { label: string; price: number };
type FooterLink = { label: string; href: string };

type BikeProductPageSizeSelectorProps = {
  shopName: string;
  navLinks: NavLink[];
  imageUrl: string;
  imageAlt: string;
  modelName: string;
  specs: Spec[];
  sizes: SizeOption[];
  buyLabel: string;
  footerNote: string;
  footerLinks: FooterLink[];
};

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function BikeProductPageSizeSelector({
  shopName,
  navLinks,
  imageUrl,
  imageAlt,
  modelName,
  specs,
  sizes,
  buyLabel,
  footerNote,
  footerLinks,
}: BikeProductPageSizeSelectorProps) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const activeSize = sizes[sizeIndex] ?? sizes[0];

  return (
    <div className="bpss-page">
      <style>{`
        .bpss-page {
          background: var(--paper);
          color: var(--ink);
          min-height: 100%;
          font-family: inherit;
        }
        .bpss-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--rule);
        }
        .bpss-shopname {
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.02em;
        }
        .bpss-nav {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }
        .bpss-nav a {
          color: var(--ink);
          text-decoration: none;
          font-size: 0.95rem;
          opacity: 0.85;
        }
        .bpss-nav a:hover {
          opacity: 1;
          color: var(--accent);
        }
        .bpss-photo-wrap {
          width: 100%;
          overflow: hidden;
          border-bottom: 1px solid var(--rule);
        }
        .bpss-photo-wrap img {
          width: 100%;
          height: auto;
          display: block;
        }
        .bpss-body {
          max-width: 720px;
          margin: 0 auto;
          padding: 24px 20px 40px;
        }
        .bpss-model {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 8px;
        }
        .bpss-price {
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--accent);
          margin: 0 0 24px;
          line-height: 1.1;
        }
        .bpss-specs {
          border-top: 1px solid var(--rule);
        }
        .bpss-spec-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid var(--rule);
        }
        .bpss-spec-label {
          color: var(--muted);
          font-size: 0.95rem;
        }
        .bpss-spec-value {
          font-size: 0.95rem;
          font-weight: 600;
          text-align: right;
        }
        .bpss-select {
          font-size: 0.95rem;
          font-weight: 600;
          padding: 6px 10px;
          border: 1px solid var(--rule);
          border-radius: var(--radius);
          background: var(--paper);
          color: var(--ink);
          max-width: 220px;
        }
        .bpss-buy {
          width: 100%;
          margin-top: 28px;
          padding: 14px 20px;
          font-size: 1.05rem;
          font-weight: 700;
          background: var(--accent);
          color: var(--paper);
          border: none;
          border-radius: var(--radius);
          cursor: pointer;
        }
        .bpss-footer {
          border-top: 1px solid var(--rule);
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: space-between;
          align-items: center;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .bpss-footer-links {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .bpss-footer-links a {
          color: var(--muted);
          text-decoration: underline;
        }
        @media (max-width: 390px) {
          .bpss-model {
            font-size: 1.2rem;
          }
          .bpss-price {
            font-size: 2rem;
          }
          .bpss-spec-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          .bpss-spec-value {
            text-align: left;
          }
          .bpss-select {
            max-width: 100%;
            width: 100%;
          }
        }
      `}</style>

      <header className="bpss-header">
        <div className="bpss-shopname">{shopName}</div>
        <nav className="bpss-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="bpss-photo-wrap">
        <img src={imageUrl} alt={imageAlt} />
      </div>

      <div className="bpss-body">
        <h1 className="bpss-model">{modelName}</h1>
        <div className="bpss-price">{formatPrice(activeSize.price)}</div>

        <div className="bpss-specs">
          {specs.map((spec) => (
            <div className="bpss-spec-row" key={spec.label}>
              <span className="bpss-spec-label">{spec.label}</span>
              <span className="bpss-spec-value">{spec.value}</span>
            </div>
          ))}

          <div className="bpss-spec-row">
            <span className="bpss-spec-label">Frame size</span>
            <select
              className="bpss-select"
              value={sizeIndex}
              onChange={(e) => setSizeIndex(Number(e.target.value))}
            >
              {sizes.map((size, i) => (
                <option key={size.label} value={i}>
                  {size.label} — {formatPrice(size.price)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="bpss-buy" type="button">
          {buyLabel}
        </button>
      </div>

      <footer className="bpss-footer">
        <span>{footerNote}</span>
        <div className="bpss-footer-links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
