"use client";

/**
 * Customer-facing bike product page with a single Size dropdown (two hardcoded options) that swaps the displayed price live — no cart, no database, just the size-to-price wiring.
 */
import { useState } from "react";

type Spec = { label: string; value: string };
type SizeOption = { label: string; sku: string; price: string };

type BikeProductPageSizeSelectProps = {
  shopName: string;
  navLinks: string[];
  imageUrl: string;
  imageAlt: string;
  modelName: string;
  specs: Spec[];
  sizeOptions: SizeOption[];
  buyLabel: string;
  footerNote: string;
  footerLinks: string[];
};

export default function BikeProductPageSizeSelect({
  shopName,
  navLinks,
  imageUrl,
  imageAlt,
  modelName,
  specs,
  sizeOptions,
  buyLabel,
  footerNote,
  footerLinks,
}: BikeProductPageSizeSelectProps) {
  const [selectedSku, setSelectedSku] = useState(sizeOptions[0]?.sku);
  const selected =
    sizeOptions.find((s) => s.sku === selectedSku) ?? sizeOptions[0];

  return (
    <div
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        fontFamily: "inherit",
        maxWidth: "480px",
        margin: "0 auto",
        border: "1px solid var(--rule)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 16px",
          borderBottom: "1px solid var(--rule)",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <strong style={{ fontSize: "1.05rem" }}>{shopName}</strong>
        <nav style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          {navLinks.map((link) => (
            <span
              key={link}
              style={{ fontSize: "0.85rem", color: "var(--muted)" }}
            >
              {link}
            </span>
          ))}
        </nav>
      </header>

      {/* Photo */}
      <img
        src={imageUrl}
        alt={imageAlt}
        style={{
          width: "100%",
          display: "block",
          objectFit: "cover",
          aspectRatio: "4 / 3",
        }}
      />

      <div style={{ padding: "16px" }}>
        {/* Model name */}
        <h1
          style={{
            fontSize: "1.4rem",
            margin: "0 0 12px",
            lineHeight: 1.2,
          }}
        >
          {modelName}
        </h1>

        {/* Size select */}
        <label
          style={{
            display: "block",
            fontSize: "0.85rem",
            color: "var(--muted)",
            marginBottom: "4px",
          }}
        >
          Size
        </label>
        <select
          value={selected?.sku}
          onChange={(e) => setSelectedSku(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 10px",
            fontSize: "1rem",
            borderRadius: "var(--radius)",
            border: "1px solid var(--rule)",
            background: "var(--paper)",
            color: "var(--ink)",
            marginBottom: "12px",
          }}
        >
          {sizeOptions.map((opt) => (
            <option key={opt.sku} value={opt.sku}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Price */}
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          {selected?.price}
        </div>

        {/* Specs */}
        <div
          style={{
            borderTop: "1px solid var(--rule)",
            marginBottom: "16px",
          }}
        >
          {specs.map((spec) => (
            <div
              key={spec.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid var(--rule)",
                fontSize: "0.9rem",
              }}
            >
              <span style={{ color: "var(--muted)" }}>{spec.label}</span>
              <span>{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Buy button */}
        <button
          type="button"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "1rem",
            fontWeight: 600,
            background: "var(--accent)",
            color: "var(--paper)",
            border: "none",
            borderRadius: "var(--radius)",
            cursor: "pointer",
          }}
        >
          {buyLabel}
        </button>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--rule)",
          padding: "14px 16px",
          fontSize: "0.8rem",
          color: "var(--muted)",
        }}
      >
        <div style={{ marginBottom: "8px" }}>{footerNote}</div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {footerLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
