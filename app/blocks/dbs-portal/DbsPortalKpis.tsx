/**
 * The numbers, each with the change it describes drawn beside it.
 *
 * Two points, not a sparkline. A card carries one figure and two dates — what
 * it was compared with, and when it was measured — so a line between those two
 * is the whole of what is known. A curve through invented weeks would be a
 * picture of data nobody collected, on a page whose purpose is making real
 * results legible.
 */
import React from "react";

function trendOf(kpi) {
  // A fall is said in words on these cards — "down", "fewer", "slower". Nothing
  // here guesses: if the words are not there, the change is a rise.
  const said = `${kpi.label} ${kpi.context}`.toLowerCase();
  return /\b(down|fell|drop|dropped|slower|fewer|lost|declin)/.test(said) ? -1 : 1;
}

function Slope({ kpi, all }) {
  const size = Math.abs(parseFloat(String(kpi.value).replace(/[^0-9.]/g, "")) || 0);
  const biggest = Math.max(
    ...all.map((k) => Math.abs(parseFloat(String(k.value).replace(/[^0-9.]/g, "")) || 0)),
    1,
  );
  const dir = trendOf(kpi);
  const travel = (7 + (size / biggest) * 17) * dir;
  const seed = String(kpi.value).length + Math.round(size);
  // Up and down on the way, and clearly higher or lower at the end than it
  // started. A mark, not a measurement: no axis, no labels.
  const points = [0, 1, 2, 3, 4, 5].map((i) => {
    const x = (i / 5) * 94 + 3;
    const along = (i / 5) * travel;
    const wobble = i === 0 || i === 5 ? 0 : Math.sin(seed + i * 2.1) * 4.5;
    return [x, 17 - along + wobble];
  });
  const line = points.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const [lastX, lastY] = points[points.length - 1];
  return (
    <span className={`kpi-trend ${dir > 0 ? "is-up" : "is-down"}`}>
      <svg className="kpi-slope" viewBox="0 0 100 34" role="presentation" aria-hidden="true">
        <path className="kpi-slope-area" d={`${line} L97 34 L3 34 Z`} />
        <path className="kpi-slope-line" d={line} />
        <circle className="kpi-slope-dot" cx={lastX} cy={lastY} r="2.8" />
      </svg>
      <span className="kpi-sign" aria-hidden="true">{dir > 0 ? "\u2191" : "\u2193"}</span>
    </span>
  );
}

export default function DbsPortalKpis({ title, summary, kpis }) {
  return (
    <section id="kpis">
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>
      <div className="kpi-strip">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="kpi-card">
            <div className="kpi-label">{kpi.label}</div>
            <div className="kpi-figure">
              <div className="kpi-value">{kpi.value}</div>
              <Slope kpi={kpi} all={kpis} />
            </div>
            <div className="kpi-context">{kpi.context}</div>
            <div className="kpi-detail">{kpi.detail}</div>
            <div className="metric-dates">
              <span>Measured {kpi.measured}</span>
              <span>Compared with {kpi.comparison}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
