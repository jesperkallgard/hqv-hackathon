"use client";

/**
 * Full single-bike product page: header/footer shell around a live size+colour configurator (per-size fit range and honest stock, per-colour price delta and swatch-tinted image), price shown as base + size + colour arithmetic.
 */
import { useState } from "react";

function money(amount, currency) {
  const grouped = String(Math.round(amount)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return currency ? grouped + " " + currency : grouped;
}

function signed(amount, currency) {
  return (amount > 0 ? "+" : "−") + money(Math.abs(amount), currency);
}

function Bike({ frame }) {
  return (
    <svg viewBox="0 0 200 120" role="img" style={{ width: "100%", height: "auto" }}>
      <g fill="none" stroke="var(--ink)" strokeWidth="2.5" opacity="0.55">
        <circle cx="45" cy="85" r="28" />
        <circle cx="155" cy="85" r="28" />
      </g>
      <g fill="none" stroke={frame} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M45 85 L78 42 L100 85 Z" />
        <path d="M78 42 L120 45 L100 85" />
        <path d="M120 45 L155 85" />
        <path d="M78 42 L75 34 M66 33 L88 33" />
        <path d="M120 45 L124 31 M113 29 L137 29" />
      </g>
    </svg>
  );
}

function Choice({ label, sub, selected, muted, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "2px",
        padding: "10px 14px",
        minWidth: "104px",
        font: "inherit",
        textAlign: "left",
        cursor: "pointer",
        borderRadius: "var(--radius)",
        border: "1px solid " + (selected ? "var(--ink)" : "var(--rule)"),
        borderStyle: muted && !selected ? "dashed" : "solid",
        background: selected ? "var(--ink)" : "var(--paper)",
        color: selected ? "var(--paper)" : muted ? "var(--muted)" : "var(--ink)",
      }}
    >
      <span style={{ fontWeight: 600 }}>{label}</span>
      <span style={{ fontSize: "0.8rem", opacity: 0.8 }}>{sub}</span>
    </button>
  );
}

export default function Trailhead3ProductPage({
  shop = {},
  bike = {},
  sizes = [],
  colors = [],
  footer = {},
}) {
  const [sizeId, setSizeId] = useState(
    () => (sizes.find((s) => s.stock > 0) || sizes[0] || {}).id
  );
  const [colorId, setColorId] = useState(() => (colors[0] || {}).id);

  const size = sizes.find((s) => s.id === sizeId) || {};
  const color = colors.find((c) => c.id === colorId) || {};
  const cur = bike.currency;
  const total = (bike.basePrice || 0) + (size.delta || 0) + (color.delta || 0);
  const out = !(size.stock > 0);
  const low = size.stock > 0 && size.stock <= 2;

  const row = {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    fontSize: "0.9rem",
    color: "var(--muted)",
  };

  return (
    <article
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        maxWidth: "980px",
        margin: "0 auto",
        lineHeight: 1.5,
      }}
    >
      <header
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          alignItems: "baseline",
          justifyContent: "space-between",
          padding: "18px 24px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <strong style={{ fontSize: "1.05rem", letterSpacing: "0.02em" }}>{shop.name}</strong>
        <nav style={{ display: "flex", gap: "18px", fontSize: "0.9rem", color: "var(--muted)" }}>
          {(shop.nav || []).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
      </header>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", padding: "28px 24px" }}>
        <div
          style={{
            flex: "1 1 320px",
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            padding: "24px",
          }}
        >
          <Bike frame={color.swatch || "var(--ink)"} />
          <p style={{ margin: "12px 0 0", fontSize: "0.85rem", color: "var(--muted)" }}>
            {color.label}
          </p>
        </div>

        <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <h1 style={{ margin: "0 0 8px", fontSize: "1.6rem" }}>{bike.name}</h1>
            <p style={{ margin: 0, fontSize: "2rem", fontWeight: 700 }}>{money(total, cur)}</p>
          </div>

          <section>
            <h2 style={{ margin: "0 0 10px", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)" }}>
              Size
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {sizes.map((s) => (
                <Choice
                  key={s.id}
                  label={s.label}
                  sub={s.stock > 0 ? s.fit : "Out of stock"}
                  selected={s.id === sizeId}
                  muted={!(s.stock > 0)}
                  onClick={() => setSizeId(s.id)}
                />
              ))}
            </div>
            <p style={{ margin: "10px 0 0", fontSize: "0.9rem", color: out ? "var(--accent)" : "var(--muted)" }}>
              {out
                ? "Out of stock in " + size.label + ". No restock date."
                : (low ? size.stock + " left in " + size.label : "In stock in " + size.label) +
                  " · fits " + size.fit}
            </p>
          </section>

          <section>
            <h2 style={{ margin: "0 0 10px", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)" }}>
              Colour
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {colors.map((c) => (
                <Choice
                  key={c.id}
                  label={c.label}
                  sub={c.delta ? signed(c.delta, cur) : "No extra"}
                  selected={c.id === colorId}
                  onClick={() => setColorId(c.id)}
                />
              ))}
            </div>
          </section>

          <section style={{ borderTop: "1px solid var(--rule)", paddingTop: "12px" }}>
            <div style={row}>
              <span>Base</span>
              <span>{money(bike.basePrice || 0, cur)}</span>
            </div>
            {size.delta ? (
              <div style={row}>
                <span>Size {size.label}</span>
                <span>{signed(size.delta, cur)}</span>
              </div>
            ) : null}
            {color.delta ? (
              <div style={row}>
                <span>{color.label}</span>
                <span>{signed(color.delta, cur)}</span>
              </div>
            ) : null}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
                marginTop: "6px",
                borderTop: "1px solid var(--rule)",
                fontWeight: 700,
              }}
            >
              <span>Total</span>
              <span>{money(total, cur)}</span>
            </div>
          </section>
        </div>
      </div>

      <footer
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 24px",
          padding: "18px 24px",
          borderTop: "1px solid var(--rule)",
          fontSize: "0.85rem",
          color: "var(--muted)",
        }}
      >
        <strong style={{ color: "var(--ink)" }}>{shop.name}</strong>
        {(footer.lines || []).map((line) => (
          <span key={line}>{line}</span>
        ))}
      </footer>
    </article>
  );
}
