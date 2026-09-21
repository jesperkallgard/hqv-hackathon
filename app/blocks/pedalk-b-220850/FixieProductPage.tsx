"use client";

/**
 * Whole one-page bike product page: header, hero, weight/geometry specs, component photos with plain-language captions, one testimonial, and a buy button that confirms locally without checkout.
 */
import { useState } from "react";

function Photo({ src, alt, ratio = "4 / 3" }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        border: "1px solid var(--rule)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt || ""}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <span style={{ color: "var(--muted)", fontSize: "0.8rem", padding: "1rem", textAlign: "center" }}>
          {alt}
        </span>
      )}
    </div>
  );
}

export default function FixieProductPage({
  shopName = "PedalKøb",
  nav = [],
  name = "",
  tagline = "",
  price,
  currency = "kr",
  hero = {},
  specsTitle = "The numbers",
  specs = [],
  partsTitle = "What's on it",
  parts = [],
  riderTitle = "One rider",
  testimonial = null,
  buyLabel = "Add to basket",
  addedLabel = "Added — no checkout yet",
  buyNote = "",
  footer = {},
}) {
  const [added, setAdded] = useState(false);

  const wrap = { maxWidth: "62rem", margin: "0 auto", padding: "0 1.5rem" };
  const section = { padding: "3rem 0", borderTop: "1px solid var(--rule)" };
  const heading = {
    margin: "0 0 1.5rem",
    fontSize: "0.8rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--muted)",
    fontWeight: 600,
  };

  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)" }}>
      <header style={{ borderBottom: "1px solid var(--rule)" }}>
        <div
          style={{
            ...wrap,
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "baseline",
            justifyContent: "space-between",
            padding: "1.1rem 1.5rem",
          }}
        >
          <span style={{ fontWeight: 700, letterSpacing: "0.02em" }}>{shopName}</span>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.85rem" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main style={wrap}>
        <section style={{ padding: "3rem 0" }}>
          <h1 style={{ margin: "0 0 0.5rem", fontSize: "2.4rem", lineHeight: 1.1 }}>{name}</h1>
          {tagline ? (
            <p style={{ margin: "0 0 1.75rem", fontSize: "1.1rem", color: "var(--muted)", maxWidth: "34rem" }}>
              {tagline}
            </p>
          ) : null}
          <Photo src={hero.src} alt={hero.alt} ratio={hero.ratio || "16 / 9"} />
          {hero.caption ? (
            <p style={{ margin: "0.75rem 0 0", fontSize: "0.85rem", color: "var(--muted)" }}>{hero.caption}</p>
          ) : null}
        </section>

        {specs.length ? (
          <section id="numbers" style={section}>
            <h2 style={heading}>{specsTitle}</h2>
            <dl
              style={{
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
                gap: "1.25rem 2rem",
              }}
            >
              {specs.map((s) => (
                <div key={s.label}>
                  <dt style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.25rem" }}>{s.label}</dt>
                  <dd style={{ margin: 0, fontSize: "1.15rem" }}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {parts.length ? (
          <section id="parts" style={section}>
            <h2 style={heading}>{partsTitle}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
                gap: "1.75rem",
              }}
            >
              {parts.map((p) => (
                <figure key={p.name} style={{ margin: 0 }}>
                  <Photo src={p.src} alt={p.alt || p.name} />
                  <figcaption style={{ marginTop: "0.65rem" }}>
                    <span style={{ display: "block", fontWeight: 600, fontSize: "0.95rem" }}>{p.name}</span>
                    <span style={{ display: "block", color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.45 }}>
                      {p.gets}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {testimonial ? (
          <section id="rider" style={section}>
            <h2 style={heading}>{riderTitle}</h2>
            <blockquote
              style={{
                margin: 0,
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "1.25rem",
                maxWidth: "38rem",
              }}
            >
              <p style={{ margin: "0 0 0.75rem", fontSize: "1.25rem", lineHeight: 1.5 }}>“{testimonial.quote}”</p>
              <footer style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                {testimonial.name}
                {testimonial.detail ? ` — ${testimonial.detail}` : ""}
              </footer>
            </blockquote>
          </section>
        ) : null}

        <section id="buy" style={section}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "2rem", fontWeight: 700 }}>
              {price == null ? "" : `${price} ${currency}`}
            </span>
            <button
              type="button"
              onClick={() => setAdded(true)}
              style={{
                font: "inherit",
                fontSize: "1.05rem",
                fontWeight: 600,
                padding: "0.9rem 2rem",
                cursor: "pointer",
                color: "var(--paper)",
                background: "var(--accent)",
                border: "1px solid var(--accent)",
                borderRadius: "var(--radius)",
              }}
            >
              {added ? addedLabel : buyLabel}
            </button>
          </div>
          <p aria-live="polite" style={{ margin: "1rem 0 0", fontSize: "0.9rem", color: "var(--muted)" }}>
            {added ? addedLabel : buyNote}
          </p>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--rule)", marginTop: "1rem" }}>
        <div
          style={{
            ...wrap,
            padding: "2.5rem 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>{shopName}</div>
            {footer.note ? (
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.5 }}>{footer.note}</p>
            ) : null}
          </div>
          {(footer.columns || []).map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>
                {col.title}
              </div>
              {(col.lines || []).map((line) => (
                <div key={line} style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>
        {footer.fineprint ? (
          <div style={{ borderTop: "1px solid var(--rule)" }}>
            <div style={{ ...wrap, padding: "1rem 1.5rem", fontSize: "0.8rem", color: "var(--muted)" }}>
              {footer.fineprint}
            </div>
          </div>
        ) : null}
      </footer>
    </div>
  );
}
