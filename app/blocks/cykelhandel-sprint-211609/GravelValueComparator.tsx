/**
 * A gravel-bike product page section: honest header, side-by-side frame geometry vs a cheaper bike, a "what the extra money buys" list with a built-in trade-off caveat, three placeholder customer-in-mud/rocks photo tiles, and a tap-to-expand full spec-sheet comparison against a named competitor.
 */
"use client";

import React, { useState } from "react";

interface GeometryRow { label: string; bike: string; competitor: string }
interface Spec { label: string; bike: string; competitor: string }
interface Photo { caption: string; tone?: string }
interface GravelValueComparatorProps {
  bike: { name: string; price: string; tagline: string };
  competitor: { name: string; price: string };
  geometry: GeometryRow[];
  valueDeltas: string[];
  caveat: string;
  photos: Photo[];
  specSheet: Spec[];
  compareLabel?: string;
}

const PAPER = "var(--paper, #FAFAF7)";
const INK = "var(--ink, #1A1A18)";
const ACCENT = "var(--accent, #C1440E)";
const RADIUS = "var(--radius, 0px)";
const FONT =
  "var(--font, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif)";

export default function GravelValueComparator({
  bike,
  competitor,
  geometry,
  valueDeltas,
  caveat,
  photos,
  specSheet,
  compareLabel,
}: GravelValueComparatorProps) {
  const [open, setOpen] = useState(false);

  return (
    <section
      style={{
        fontFamily: FONT,
        color: INK,
        background: PAPER,
        border: `1px solid ${INK}`,
        borderRadius: RADIUS,
        maxWidth: "720px",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .gvc-row * { box-sizing: border-box; }
        .gvc-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .gvc-table { width: 100%; border-collapse: collapse; min-width: 480px; font-size: 14px; }
        .gvc-table th, .gvc-table td { padding: 8px 10px; border-bottom: 1px solid ${INK}22; text-align: left; }
        .gvc-table th { font-size: 11px; letter-spacing: 0.04em; text-transform: uppercase; color: ${INK}; opacity: 0.7; border-bottom: 2px solid ${INK}; }
        .gvc-photos { display: flex; gap: 10px; flex-wrap: wrap; }
        .gvc-photo { flex: 1 1 140px; min-width: 110px; }
        .gvc-compare-btn { cursor: pointer; }
        .gvc-compare-btn:hover { opacity: 0.85; }
        @media (max-width: 460px) {
          .gvc-table { font-size: 12.5px; }
          .gvc-photos { gap: 8px; }
        }
      `}</style>

      {/* Header */}
      <div style={{ padding: "20px", borderBottom: `1px solid ${INK}` }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: 700 }}>
            {bike.name}
          </h2>
          <span style={{ fontSize: "20px", fontWeight: 700, color: ACCENT }}>
            {bike.price}
          </span>
        </div>
        <p style={{ margin: "8px 0 0", fontSize: "14px", opacity: 0.85 }}>
          {bike.tagline}
        </p>
      </div>

      {/* Geometry comparison */}
      <div style={{ padding: "20px", borderBottom: `1px solid ${INK}` }}>
        <h3
          style={{
            margin: "0 0 10px",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Frame geometry, side by side
        </h3>
        <div className="gvc-table-wrap">
          <table className="gvc-table">
            <thead>
              <tr>
                <th>Measurement</th>
                <th>{bike.name}</th>
                <th>{competitor.name}</th>
              </tr>
            </thead>
            <tbody>
              {geometry.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td style={{ fontWeight: 600 }}>{row.bike}</td>
                  <td>{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* What the extra money buys */}
      <div style={{ padding: "20px", borderBottom: `1px solid ${INK}` }}>
        <h3
          style={{
            margin: "0 0 10px",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          What the extra money actually buys
        </h3>
        <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: 1.5 }}>
          {valueDeltas.map((d, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {d}
            </li>
          ))}
        </ul>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "13px",
            paddingLeft: "10px",
            borderLeft: `3px solid ${ACCENT}`,
            opacity: 0.9,
          }}
        >
          {caveat}
        </p>
      </div>

      {/* Photo tiles */}
      <div style={{ padding: "20px", borderBottom: `1px solid ${INK}` }}>
        <h3
          style={{
            margin: "0 0 10px",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          From riders, in the conditions it's actually sold for
        </h3>
        <div className="gvc-photos">
          {photos.slice(0, 3).map((p, i) => {
            const tone = p.tone || ACCENT;
            return (
              <div className="gvc-photo" key={i}>
                <div
                  style={{
                    width: "100%",
                    height: "90px",
                    borderRadius: RADIUS,
                    border: `1px solid ${INK}`,
                    backgroundColor: PAPER,
                    backgroundImage: `repeating-linear-gradient(45deg, ${tone}33 0, ${tone}33 8px, transparent 8px, transparent 16px)`,
                  }}
                />
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: "11.5px",
                    opacity: 0.75,
                    lineHeight: 1.3,
                  }}
                >
                  Placeholder tile &mdash; {p.caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Compare toggle */}
      <div style={{ padding: "20px" }}>
        <button
          className="gvc-compare-btn"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          style={{
            width: "100%",
            padding: "12px 14px",
            fontSize: "14px",
            fontWeight: 700,
            fontFamily: FONT,
            border: `1px solid ${INK}`,
            borderRadius: RADIUS,
            background: open ? INK : ACCENT,
            color: PAPER,
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{compareLabel || `Compare full spec vs ${competitor.name}`}</span>
          <span style={{ fontSize: "16px" }}>{open ? "\u2212" : "+"}</span>
        </button>

        <div
          style={{
            maxHeight: open ? "800px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.35s ease",
          }}
        >
          <div style={{ paddingTop: "14px" }}>
            <div className="gvc-table-wrap">
              <table className="gvc-table">
                <thead>
                  <tr>
                    <th>Spec</th>
                    <th>{bike.name}</th>
                    <th>{competitor.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {specSheet.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td style={{ fontWeight: 600 }}>{row.bike}</td>
                      <td>{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
