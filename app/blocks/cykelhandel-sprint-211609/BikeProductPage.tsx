/**
 * Single product page for one bike: clickable photo-angle strip (CSS placeholders, no real images), a specs table with trade-offs called out, a size guide, static customer reviews, and a Buy link that's a click target only — no cart or checkout behind it.
 */
"use client";

import { useState } from "react";

/**
 * BikeProductPage
 * One product page for one bike: photo strip, specs, size guidance,
 * customer reviews, and a Buy button that is a click target only —
 * there is no cart, price confirmation, or checkout behind it.
 */

type Photo = {
  /** Angle name printed on the placeholder, e.g. "Side" */
  label: string;
  /** One honest line about what this angle actually shows */
  note?: string;
};

type Spec = {
  label: string;
  value: string;
  /** Optional trade-off callout shown under the value */
  note?: string;
};

type SizeRow = {
  size: string;
  heightRange: string;
};

type Review = {
  name: string;
  /** 1-5 */
  rating: number;
  quote: string;
  verified?: boolean;
};

export type BikeProductPageProps = {
  bikeName?: string;
  tagline?: string;
  priceUSD?: number;
  photos?: Photo[];
  specs?: Spec[];
  sizeGuidance?: SizeRow[];
  reviews?: Review[];
  /** Called when Buy is clicked. Defaults to a no-op — wire real checkout here. */
  onBuyClick?: () => void;
  /** Where Buy would link to, if this were wired to a real checkout. */
  buyHref?: string;
};

const DEFAULT_PHOTOS: Photo[] = [
  { label: "Side", note: "Full profile — shows frame geometry and reach" },
  { label: "Front", note: "Head tube angle and fork" },
  { label: "Drivetrain", note: "Chainrings, cassette, derailleur" },
  { label: "Cockpit", note: "Bars, brake levers, shifters, stem" },
  { label: "Rear", note: "Seat stays, brake caliper, tire clearance" },
];

const DEFAULT_SPECS: Spec[] = [
  {
    label: "Weight",
    value: "8.4 kg (18.5 lb), size M",
    note: "About 700 g heavier than the Pro 5000, 600 g lighter than the Pro 1000. That gap is where the price sits.",
  },
  {
    label: "Frame sizes",
    value: "XS / S / M / L / XL",
  },
  {
    label: "Drivetrain",
    value: "Shimano 105, 2x11 mechanical",
    note: "One tier below Ultegra. Shifts just as reliably, slightly heavier, easy and cheap to service.",
  },
  {
    label: "Brakes",
    value: "Shimano 105 hydraulic disc",
  },
  {
    label: "Wheels",
    value: "Aluminum, tubeless-ready, 700c",
    note: "Not carbon. Stiffer ride, but they won't crack from a curb hit either.",
  },
  {
    label: "Frame material",
    value: "Aluminum front triangle, carbon fork and seatpost",
  },
  {
    label: "Tire clearance",
    value: "Up to 32 mm",
    note: "Fits a wider tire for rougher pavement, not true gravel knobs.",
  },
];

const DEFAULT_SIZE_GUIDANCE: SizeRow[] = [
  { size: "XS", heightRange: "150–160 cm (4'11\"–5'3\")" },
  { size: "S", heightRange: "160–170 cm (5'3\"–5'7\")" },
  { size: "M", heightRange: "170–178 cm (5'7\"–5'10\")" },
  { size: "L", heightRange: "178–186 cm (5'10\"–6'1\")" },
  { size: "XL", heightRange: "186–195 cm (6'1\"–6'5\")" },
];

const DEFAULT_REVIEWS: Review[] = [
  {
    name: "Priya N.",
    rating: 5,
    quote:
      "Climbs fast, holds its line on descents. I moved up from a hybrid and the difference on hills is immediate.",
    verified: true,
  },
  {
    name: "Marcus T.",
    rating: 4,
    quote:
      "Good bike for the price but the stock saddle is not it — swapped it in week one. Shifting has been flawless since April.",
    verified: true,
  },
  {
    name: "Dana K.",
    rating: 4,
    quote:
      "Rides firm on chip-seal roads, no surprise given the aluminum frame. Fine trade for how solid it feels out of the saddle.",
    verified: true,
  },
  {
    name: "Owen R.",
    rating: 5,
    quote:
      "Went from a Pro 1000 to this one and felt the weight drop the first ride. Still not as light as the carbon model, and I'm fine with that difference in cost.",
    verified: false,
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span aria-label={`${rating} out of 5 stars`} style={{ letterSpacing: "1px" }}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

export default function BikeProductPage({
  bikeName = "Speedvale Pro 3000",
  tagline = "Mid-range road bike for regular riders who ride regularly.",
  priceUSD = 2199,
  photos = DEFAULT_PHOTOS,
  specs = DEFAULT_SPECS,
  sizeGuidance = DEFAULT_SIZE_GUIDANCE,
  reviews = DEFAULT_REVIEWS,
  onBuyClick = () => {},
  buyHref = "#checkout",
}: BikeProductPageProps) {
  const [activePhoto, setActivePhoto] = useState(0);
  const photo = photos[activePhoto] ?? photos[0];

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  const BuyButton = ({ full = false }: { full?: boolean }) => (
    <a
      href={buyHref}
      onClick={onBuyClick}
      style={{
        display: "inline-block",
        width: full ? "100%" : "auto",
        textAlign: "center",
        background: "var(--accent)",
        color: "var(--paper)",
        fontWeight: 600,
        fontSize: "1rem",
        padding: "0.85rem 1.5rem",
        borderRadius: "var(--radius)",
        textDecoration: "none",
        border: "1px solid var(--accent)",
        boxSizing: "border-box",
      }}
    >
      Buy — ${priceUSD.toLocaleString()}
    </a>
  );

  return (
    <div
      style={{
        color: "var(--ink)",
        background: "var(--paper)",
        maxWidth: "760px",
        margin: "0 auto",
        padding: "1rem",
        boxSizing: "border-box",
        fontFamily: "inherit",
      }}
    >
      <style>{`
        .bpp-thumb {
          border: 1px solid var(--rule);
          background: var(--paper);
          color: var(--ink);
          border-radius: var(--radius);
          padding: 0.5rem 0.4rem;
          font-size: 0.75rem;
          cursor: pointer;
          flex: 1 1 auto;
          min-width: 60px;
        }
        .bpp-thumb[data-active="true"] {
          border-color: var(--accent);
          border-width: 2px;
          font-weight: 600;
        }
        .bpp-table td, .bpp-table th {
          text-align: left;
          padding: 0.5rem 0.4rem;
          border-bottom: 1px solid var(--rule);
          vertical-align: top;
        }
        .bpp-review {
          border: 1px solid var(--rule);
          border-radius: var(--radius);
          padding: 0.75rem;
        }
        @media (max-width: 420px) {
          .bpp-header-row { flex-direction: column; align-items: stretch; }
        }
      `}</style>

      {/* Header */}
      <header
        className="bpp-header-row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "1.4rem" }}>{bikeName}</h1>
          <p style={{ margin: "0.25rem 0 0", color: "var(--muted)" }}>{tagline}</p>
          <p style={{ margin: "0.25rem 0 0", fontSize: "0.9rem" }}>
            <Stars rating={avgRating} /> {avgRating.toFixed(1)} ({reviews.length} reviews)
          </p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <BuyButton />
        </div>
      </header>

      {/* Gallery */}
      <section style={{ marginBottom: "1.5rem" }}>
        <div
          style={{
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            height: "220px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background:
              "repeating-linear-gradient(135deg, transparent 0 12px, var(--rule) 12px 13px)",
            marginBottom: "0.5rem",
            textAlign: "center",
            padding: "0.5rem",
          }}
        >
          <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>{photo.label}</div>
          {photo.note && (
            <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
              {photo.note}
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {photos.map((p, i) => (
            <button
              key={p.label}
              type="button"
              className="bpp-thumb"
              data-active={i === activePhoto}
              onClick={() => setActivePhoto(i)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Specs</h2>
        <table className="bpp-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {specs.map((s) => (
              <tr key={s.label}>
                <th style={{ width: "35%", color: "var(--muted)", fontWeight: 500 }}>
                  {s.label}
                </th>
                <td>
                  <div>{s.value}</div>
                  {s.note && (
                    <div style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "0.15rem" }}>
                      {s.note}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Size guidance */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Which size</h2>
        <table className="bpp-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Size</th>
              <th>Rider height</th>
            </tr>
          </thead>
          <tbody>
            {sizeGuidance.map((row) => (
              <tr key={row.size}>
                <td style={{ fontWeight: 600 }}>{row.size}</td>
                <td>{row.heightRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "0.5rem" }}>
          Between two sizes and ride mostly hills or long distance? Go smaller for a more
          responsive fit, larger for more stability.
        </p>
      </section>

      {/* Reviews */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>What riders say</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {reviews.map((r) => (
            <div className="bpp-review" key={r.name + r.quote.slice(0, 10)}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                <strong>{r.name}</strong>
                <Stars rating={r.rating} />
              </div>
              <p style={{ margin: "0.35rem 0 0" }}>{r.quote}</p>
              {r.verified && (
                <div style={{ color: "var(--muted)", fontSize: "0.75rem", marginTop: "0.3rem" }}>
                  Verified purchase
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ borderTop: "1px solid var(--rule)", paddingTop: "1rem" }}>
        <BuyButton full />
      </section>
    </div>
  );
}
