/**
 * Standalone customer-facing bike product page: shop header, full-width photo,
 * model name + real price, spec rows (weight, gears, frame size), an unwired
 * Buy Now button, and a footer, in that order.
 */
import React from "react";

type Spec = { label: string; value: string };

type BikeProductPageProps = {
  shopName: string;
  navLinks?: string[];
  imageUrl: string;
  imageAlt: string;
  modelName: string;
  price: string;
  specs: Spec[];
  buyLabel: string;
  footerNote: string;
  footerLinks?: string[];
};

export default function BikeProductPage({
  shopName,
  navLinks = [],
  imageUrl,
  imageAlt,
  modelName,
  price,
  specs,
  buyLabel,
  footerNote,
  footerLinks = [],
}: BikeProductPageProps) {
  return (
    <div
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        minHeight: "100%",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          padding: "14px 20px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.02em" }}>
          {shopName}
        </span>
        <nav style={{ display: "flex", gap: 16, fontSize: "0.9rem", color: "var(--muted)" }}>
          {navLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </nav>
      </header>

      <main style={{ maxWidth: 480, margin: "0 auto", padding: "24px 20px 32px" }}>
        <div
          style={{
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              aspectRatio: "4 / 3",
              objectFit: "cover",
              background: "var(--muted)",
            }}
          />
          <div style={{ padding: "20px 20px 0" }}>
            <h1 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 700, lineHeight: 1.25 }}>
              {modelName}
            </h1>
            <p style={{ margin: "6px 0 0", fontSize: "1.6rem", fontWeight: 700 }}>{price}</p>
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: "16px 20px 0",
              padding: 0,
              borderTop: "1px solid var(--rule)",
            }}
          >
            {specs.map((spec) => (
              <li
                key={spec.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom: "1px solid var(--rule)",
                  fontSize: "0.95rem",
                }}
              >
                <span style={{ color: "var(--muted)" }}>{spec.label}</span>
                <span style={{ fontWeight: 600, textAlign: "right" }}>{spec.value}</span>
              </li>
            ))}
          </ul>
          <div style={{ padding: 20 }}>
            <button
              type="button"
              style={{
                display: "block",
                width: "100%",
                padding: "14px 0",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--paper)",
                background: "var(--accent)",
                border: "none",
                borderRadius: "var(--radius)",
                cursor: "pointer",
              }}
            >
              {buyLabel}
            </button>
          </div>
        </div>
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--rule)",
          padding: "16px 20px 28px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 16px",
          justifyContent: "space-between",
          fontSize: "0.85rem",
          color: "var(--muted)",
        }}
      >
        <span>{footerNote}</span>
        <span style={{ display: "flex", gap: 16 }}>
          {footerLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </span>
      </footer>
    </div>
  );
}
