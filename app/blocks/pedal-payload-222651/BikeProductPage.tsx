"use client";

/**
 * A standalone product page for one bike — shop header, hero photo, price, tappable frame-size pills with fit ranges, plain-stated weight, three plain-language ride notes, one action, and a footer. All content from props. No reviews, colour picker, or upsell.
 */
import React, { useState } from "react";

type Size = { label: string; fits?: string };

type Bike = {
  name?: string;
  tagline?: string;
  price?: number;
  currency?: string;
  weight?: string;
  weightNote?: string;
  sizes?: Size[];
  points?: string[];
  image?: { src?: string; alt?: string };
};

type Props = {
  shopName?: string;
  nav?: string[];
  bike?: Bike;
  actionLabel?: string;
  footerNote?: string;
  footerLinks?: string[];
};

export default function BikeProductPage({
  shopName = "The bike shop",
  nav = [],
  bike = {},
  actionLabel = "Add to basket",
  footerNote = "",
  footerLinks = [],
}: Props) {
  const sizes: Size[] = bike.sizes || [];
  const points: string[] = bike.points || [];
  const [picked, setPicked] = useState("");
  const selected = sizes.filter((s) => s.label === picked)[0];
  const needsSize = sizes.length > 0 && !selected;

  const price =
    typeof bike.price === "number"
      ? (bike.currency || "") + bike.price.toLocaleString()
      : "";

  const S = {
    page: {
      background: "var(--paper)",
      color: "var(--ink)",
      minHeight: "100%",
      lineHeight: 1.5,
    } as React.CSSProperties,
    wrap: {
      maxWidth: 980,
      margin: "0 auto",
      padding: "0 20px",
    } as React.CSSProperties,
    header: {
      borderBottom: "1px solid var(--rule)",
      padding: "16px 0",
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      alignItems: "baseline",
      justifyContent: "space-between",
    } as React.CSSProperties,
    nav: {
      display: "flex",
      flexWrap: "wrap",
      gap: 18,
      fontSize: 15,
      color: "var(--muted)",
    } as React.CSSProperties,
    main: {
      display: "flex",
      flexWrap: "wrap",
      gap: 32,
      padding: "28px 0 40px",
      alignItems: "flex-start",
    } as React.CSSProperties,
    col: { flex: "1 1 320px", minWidth: 280 } as React.CSSProperties,
    frame: {
      border: "1px solid var(--rule)",
      borderRadius: "var(--radius)",
      overflow: "hidden",
      aspectRatio: "4 / 3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 16,
      color: "var(--muted)",
      fontSize: 14,
    } as React.CSSProperties,
    label: {
      fontSize: 13,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--muted)",
      margin: "0 0 8px",
    } as React.CSSProperties,
    pills: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
    } as React.CSSProperties,
    row: {
      borderTop: "1px solid var(--rule)",
      borderBottom: "1px solid var(--rule)",
      padding: "14px 0",
      margin: "28px 0",
    } as React.CSSProperties,
    footer: {
      borderTop: "1px solid var(--rule)",
      padding: "20px 0 32px",
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      justifyContent: "space-between",
      fontSize: 14,
      color: "var(--muted)",
    } as React.CSSProperties,
  };

  const pill = (on: boolean): React.CSSProperties => ({
    minWidth: 56,
    padding: "10px 16px",
    borderRadius: "var(--radius)",
    border: "1px solid " + (on ? "var(--accent)" : "var(--rule)"),
    background: on ? "var(--accent)" : "transparent",
    color: on ? "var(--paper)" : "var(--ink)",
    font: "inherit",
    fontSize: 16,
    cursor: "pointer",
  });

  return (
    <div style={S.page}>
      <header style={S.wrap}>
        <div style={S.header}>
          <strong style={{ fontSize: 18 }}>{shopName}</strong>
          <nav style={S.nav}>
            {nav.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </nav>
        </div>
      </header>

      <main style={S.wrap}>
        <div style={S.main}>
          {/* 1. the photo */}
          <div style={S.col}>
            <div style={S.frame}>
              {bike.image && bike.image.src ? (
                <img
                  src={bike.image.src}
                  alt={bike.image.alt || bike.name || ""}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <span>{(bike.image && bike.image.alt) || bike.name}</span>
              )}
            </div>
          </div>

          <div style={S.col}>
            <h1 style={{ fontSize: 30, margin: "0 0 6px", lineHeight: 1.2 }}>
              {bike.name}
            </h1>
            {bike.tagline ? (
              <p style={{ margin: "0 0 20px", color: "var(--muted)" }}>
                {bike.tagline}
              </p>
            ) : null}

            {/* 2. the price */}
            {price ? (
              <p style={{ fontSize: 34, fontWeight: 700, margin: "0 0 24px" }}>
                {price}
              </p>
            ) : null}

            {/* 3. frame size */}
            {sizes.length > 0 ? (
              <div style={{ marginBottom: 24 }}>
                <p style={S.label}>Frame size</p>
                <div style={S.pills}>
                  {sizes.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      aria-pressed={picked === s.label}
                      onClick={() => setPicked(s.label)}
                      style={pill(picked === s.label)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontSize: 14,
                    color: "var(--muted)",
                  }}
                >
                  {selected
                    ? selected.fits || "Size " + selected.label
                    : "Pick a size — each one lists the heights it suits."}
                </p>
              </div>
            ) : null}

            {/* 4. the weight */}
            {bike.weight ? (
              <div style={S.row}>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ color: "var(--muted)" }}>Weight</span>
                  <strong style={{ fontSize: 20 }}>{bike.weight}</strong>
                </div>
                {bike.weightNote ? (
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: 14,
                      color: "var(--muted)",
                    }}
                  >
                    {bike.weightNote}
                  </p>
                ) : null}
              </div>
            ) : null}

            {/* 5. how it rides */}
            {points.length > 0 ? (
              <div style={{ marginBottom: 28 }}>
                <p style={S.label}>How it rides</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {points.map((p) => (
                    <li
                      key={p}
                      style={{
                        display: "flex",
                        gap: 10,
                        marginBottom: 10,
                      }}
                    >
                      <span aria-hidden="true" style={{ color: "var(--accent)" }}>
                        —
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <button
              type="button"
              disabled={needsSize}
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: "var(--radius)",
                border: "1px solid " + (needsSize ? "var(--rule)" : "var(--accent)"),
                background: needsSize ? "transparent" : "var(--accent)",
                color: needsSize ? "var(--muted)" : "var(--paper)",
                font: "inherit",
                fontSize: 17,
                cursor: needsSize ? "default" : "pointer",
              }}
            >
              {needsSize ? "Pick a size first" : actionLabel}
            </button>
          </div>
        </div>
      </main>

      <footer style={S.wrap}>
        <div style={S.footer}>
          <span style={{ flex: "1 1 260px" }}>{footerNote}</span>
          <span style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
            {footerLinks.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
}
