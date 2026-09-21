"use client";

/**
 * Single-product page for one bike: hero photo, weight/geometry specs, component photos with plain-language captions, one commuter testimonial, then a buy button that confirms locally without navigating.
 */
import { useState } from "react";

type Spec = { label: string; value: string };

type ComponentPhoto = {
  src: string;
  alt: string;
  caption: string;
};

type Testimonial = {
  quote: string;
  name: string;
};

type FixieProductPageProps = {
  /** Model name shown as the page title, e.g. "The Fifth & Main" */
  name?: string;
  /** One short line under the name describing who it's for */
  tagline?: string;
  /** Price in whole dollars, shown on the buy button */
  price?: number;
  /** Hero photo of the bike in action on a city street */
  heroImage?: { src: string; alt: string };
  /** Weight + geometry rows, in display order */
  specs?: Spec[];
  /** 3-4 close-up photos of real components with plain-language captions */
  components?: ComponentPhoto[];
  /** A single honest quote from a named daily rider */
  testimonial?: Testimonial;
  /** Label shown on the buy button before it's clicked */
  buyLabel?: string;
};

const defaultSpecs: Spec[] = [
  { label: "Weight", value: "9.2 kg" },
  { label: "Frame", value: "Chromoly steel, hand-brazed" },
  { label: "Top tube length", value: "555 mm" },
  { label: "Wheelbase", value: "1015 mm" },
  { label: "Gear ratio", value: "46 / 16 (2.9:1)" },
];

const defaultComponents: ComponentPhoto[] = [
  {
    src: "https://source.unsplash.com/800x600/?bicycle,crankset",
    alt: "Close-up of the crankset and pedal",
    caption: "Single crank, no derailleur — nothing back there to catch on your jeans or skip a gear on you.",
  },
  {
    src: "https://source.unsplash.com/800x600/?bicycle,saddle",
    alt: "Close-up of the leather saddle",
    caption: "A saddle broken in, not broken. Comfortable from the first commute, not the fiftieth.",
  },
  {
    src: "https://source.unsplash.com/800x600/?bicycle,tire",
    alt: "Close-up of the tire tread",
    caption: "Grippy tires — confident on wet cobbles and painted lane lines.",
  },
  {
    src: "https://source.unsplash.com/800x600/?bicycle,brake",
    alt: "Close-up of the front brake",
    caption: "One brake lever, always where your hand expects it, so stopping never takes thinking.",
  },
];

const defaultTestimonial: Testimonial = {
  quote:
    "I've ridden this thing through two winters of deliveries. I don't think about it, which is the whole point. It just goes.",
  name: "Maya, bike courier, rides it every day",
};

export default function FixieProductPage({
  name = "The Fifth & Main",
  tagline = "Built for the ride to work, not the ride to nowhere.",
  price = 640,
  heroImage = {
    src: "https://source.unsplash.com/1600x900/?fixie,bicycle,city,street",
    alt: "A fixed-gear bike leaning against a curb on a city street",
  },
  specs = defaultSpecs,
  components = defaultComponents,
  testimonial = defaultTestimonial,
  buyLabel = `Buy this bike — $${price}`,
}: FixieProductPageProps) {
  const [added, setAdded] = useState(false);

  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        background: "var(--paper, #f7f4ef)",
        color: "var(--ink, #232019)",
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 20px 64px",
        lineHeight: 1.5,
      }}
    >
      {/* Hero */}
      <div style={{ margin: "0 -20px 24px" }}>
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          style={{
            width: "100%",
            height: "min(60vw, 420px)",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <h1 style={{ fontSize: 30, margin: "0 0 4px", fontWeight: 600 }}>{name}</h1>
      <p
        style={{
          margin: "0 0 28px",
          color: "var(--muted, #6b6357)",
          fontSize: 16,
        }}
      >
        {tagline}
      </p>

      {/* Specs */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={sectionHeading}>Weight & geometry</h2>
        <div
          style={{
            border: "1px solid var(--rule, #dcd5c8)",
            borderRadius: "var(--radius, 6px)",
            overflow: "hidden",
          }}
        >
          {specs.map((s, i) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                padding: "10px 16px",
                borderTop: i === 0 ? "none" : "1px solid var(--rule, #dcd5c8)",
                fontSize: 15,
              }}
            >
              <span style={{ color: "var(--muted, #6b6357)" }}>{s.label}</span>
              <span style={{ fontWeight: 500 }}>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Components */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={sectionHeading}>What's actually on it</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 16,
          }}
        >
          {components.map((c) => (
            <figure key={c.alt} style={{ margin: 0 }}>
              <img
                src={c.src}
                alt={c.alt}
                style={{
                  width: "100%",
                  height: 130,
                  objectFit: "cover",
                  borderRadius: "var(--radius, 6px)",
                  display: "block",
                }}
              />
              <figcaption
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  color: "var(--muted, #6b6357)",
                }}
              >
                {c.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ marginBottom: 40 }}>
        <blockquote
          style={{
            margin: 0,
            padding: "18px 20px",
            borderLeft: "3px solid var(--accent, #a15c38)",
            fontSize: 16,
            fontStyle: "italic",
          }}
        >
          "{testimonial.quote}"
          <footer
            style={{
              marginTop: 10,
              fontStyle: "normal",
              fontSize: 13,
              color: "var(--muted, #6b6357)",
            }}
          >
            — {testimonial.name}
          </footer>
        </blockquote>
      </section>

      {/* Buy */}
      <button
        onClick={() => setAdded(true)}
        disabled={added}
        style={{
          width: "100%",
          padding: "16px 20px",
          fontSize: 17,
          fontWeight: 600,
          color: "var(--paper, #f7f4ef)",
          background: added ? "var(--muted, #6b6357)" : "var(--accent, #a15c38)",
          border: "none",
          borderRadius: "var(--radius, 6px)",
          cursor: added ? "default" : "pointer",
        }}
      >
        {added ? "Added — this is a prototype, no checkout yet" : buyLabel}
      </button>
    </div>
  );
}

const sectionHeading: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  color: "var(--muted, #6b6357)",
  margin: "0 0 12px",
};
