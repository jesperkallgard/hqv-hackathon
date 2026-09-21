/**
 * A single bike product page: photo, price, per-size stock shown on size buttons (not a dropdown), and a Buy button that's disabled for out-of-stock sizes and otherwise logs the pick and confirms on-page.
 */
"use client";

import { useState } from "react";

export default function BikeProductPage({
  name = "",
  price = 0,
  currency = "$",
  summary = "",
  specs = [],
  photo = "",
  photoAlt = "",
  photoNote = "",
  sizes = [],
  defaultSize = "",
}) {
  const start = sizes.find((s) => s.label === defaultSize) || sizes[0] || null;
  const [size, setSize] = useState(start ? start.label : "");
  const [added, setAdded] = useState("");

  const picked = sizes.find((s) => s.label === size) || null;
  const stock = picked ? Number(picked.stock) || 0 : 0;
  const canBuy = stock > 0;

  function pick(label) {
    setSize(label);
    setAdded("");
  }

  function buy() {
    if (!canBuy) return;
    console.log({ bike: name, size, price });
    setAdded("Added: " + name + ", size " + size);
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        alignItems: "flex-start",
        background: "var(--paper)",
        color: "var(--ink)",
      }}
    >
      <div style={{ flex: "1 1 320px", minWidth: "260px" }}>
        {photo ? (
          <img
            src={photo}
            alt={photoAlt || name}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              border: "1px solid var(--rule)",
              borderRadius: "var(--radius)",
            }}
          />
        ) : null}
        {photoNote ? (
          <p
            style={{
              margin: "0.5rem 0 0",
              fontSize: "0.75rem",
              color: "var(--muted)",
            }}
          >
            {photoNote}
          </p>
        ) : null}
      </div>

      <div style={{ flex: "1 1 300px", minWidth: "260px" }}>
        <h2 style={{ margin: 0, fontSize: "1.5rem", lineHeight: 1.2 }}>{name}</h2>

        <p style={{ margin: "0.25rem 0 0", fontSize: "2rem", fontWeight: 700 }}>
          {currency}
          {price}
        </p>

        {summary ? (
          <p style={{ margin: "0.75rem 0 0", lineHeight: 1.5 }}>{summary}</p>
        ) : null}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            margin: "1rem 0 0",
          }}
        >
          {sizes.map((s) => {
            const left = Number(s.stock) || 0;
            const active = s.label === size;
            return (
              <button
                key={s.label}
                type="button"
                onClick={() => pick(s.label)}
                aria-pressed={active}
                style={{
                  flex: "1 1 4.5rem",
                  padding: "0.5rem 0.4rem",
                  cursor: "pointer",
                  font: "inherit",
                  textAlign: "center",
                  borderRadius: "var(--radius)",
                  border:
                    "1px solid " + (active ? "var(--accent)" : "var(--rule)"),
                  background: active ? "var(--accent)" : "transparent",
                  color: active
                    ? "var(--paper)"
                    : left > 0
                    ? "var(--ink)"
                    : "var(--muted)",
                }}
              >
                <span style={{ display: "block", fontWeight: 700 }}>
                  {s.label}
                </span>
                <span style={{ display: "block", fontSize: "0.7rem" }}>
                  {left > 0 ? left + " in stock" : "Out of stock"}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={buy}
          disabled={!canBuy}
          style={{
            width: "100%",
            margin: "0.75rem 0 0",
            padding: "0.75rem 1rem",
            font: "inherit",
            fontWeight: 700,
            borderRadius: "var(--radius)",
            cursor: canBuy ? "pointer" : "not-allowed",
            border: "1px solid " + (canBuy ? "var(--accent)" : "var(--rule)"),
            background: canBuy ? "var(--accent)" : "transparent",
            color: canBuy ? "var(--paper)" : "var(--muted)",
          }}
        >
          {canBuy ? "Buy — " + currency + price : "Out of stock"}
        </button>

        <p
          role="status"
          style={{
            margin: "0.5rem 0 0",
            minHeight: "1.25rem",
            fontSize: "0.875rem",
            color: added ? "var(--ink)" : "var(--muted)",
          }}
        >
          {added ||
            (canBuy
              ? "Size " + size + " — ready to buy"
              : "Size " + size + " — can't be bought")}
        </p>

        {specs.length ? (
          <dl
            style={{
              margin: "1.25rem 0 0",
              borderTop: "1px solid var(--rule)",
              fontSize: "0.875rem",
            }}
          >
            {specs.map((spec) => (
              <div
                key={spec.label}
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "space-between",
                  padding: "0.4rem 0",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                <dt style={{ color: "var(--muted)" }}>{spec.label}</dt>
                <dd style={{ margin: 0, textAlign: "right" }}>{spec.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </div>
  );
}
