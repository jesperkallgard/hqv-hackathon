/**
 * Single-product hero for one bike: full-bleed riding photo with name/tagline overlaid, three plain-English spec blocks (weight, tire clearance, price), and one honest buy CTA below.
 */
type Spec = {
  label: string;
  value: string;
  note: string;
};

type GravelBikeHeroProps = {
  name: string;
  tagline: string;
  heroImageUrl: string;
  heroImageAlt: string;
  specs: Spec[]; // exactly 3: weight, tire clearance, price
  ctaLabel: string;
  ctaHref: string;
};

export default function GravelBikeHero({
  name,
  tagline,
  heroImageUrl,
  heroImageAlt,
  specs,
  ctaLabel,
  ctaHref,
}: GravelBikeHeroProps) {
  return (
    <section className="gbh">
      <style>{`
        .gbh {
          font-family: inherit;
          color: var(--ink);
          background: var(--paper);
        }
        .gbh-hero {
          position: relative;
          width: 100%;
          height: 62vh;
          min-height: 320px;
          max-height: 640px;
          overflow: hidden;
          border-radius: var(--radius);
        }
        .gbh-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .gbh-hero-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1.5rem 1.25rem;
          background: linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0));
        }
        .gbh-hero-caption h1 {
          margin: 0 0 0.35rem 0;
          font-size: 1.9rem;
          line-height: 1.1;
          color: #fff;
          font-weight: 600;
        }
        .gbh-hero-caption p {
          margin: 0;
          color: #f0f0f0;
          font-size: 1rem;
          max-width: 34rem;
        }
        .gbh-specs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--rule);
          margin-top: 2rem;
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
        }
        .gbh-spec {
          background: var(--paper);
          padding: 1.75rem 1.25rem;
          text-align: left;
        }
        .gbh-spec-value {
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--ink);
        }
        .gbh-spec-label {
          margin-top: 0.15rem;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .gbh-spec-note {
          margin-top: 0.6rem;
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.4;
        }
        .gbh-cta-wrap {
          display: flex;
          justify-content: center;
          padding: 2.25rem 1rem 2.5rem;
        }
        .gbh-cta {
          display: inline-block;
          padding: 0.85rem 2rem;
          background: var(--accent);
          color: var(--paper);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 600;
          border-radius: var(--radius);
          border: 1px solid var(--accent);
        }
        .gbh-cta:hover {
          opacity: 0.9;
        }
        @media (max-width: 640px) {
          .gbh-hero {
            height: 48vh;
            min-height: 260px;
          }
          .gbh-hero-caption h1 {
            font-size: 1.5rem;
          }
          .gbh-specs {
            grid-template-columns: 1fr;
          }
          .gbh-spec {
            border-bottom: 1px solid var(--rule);
          }
        }
      `}</style>

      <div className="gbh-hero">
        <img src={heroImageUrl} alt={heroImageAlt} />
        <div className="gbh-hero-caption">
          <h1>{name}</h1>
          <p>{tagline}</p>
        </div>
      </div>

      <div className="gbh-specs">
        {specs.map((spec) => (
          <div className="gbh-spec" key={spec.label}>
            <div className="gbh-spec-value">{spec.value}</div>
            <div className="gbh-spec-label">{spec.label}</div>
            <div className="gbh-spec-note">{spec.note}</div>
          </div>
        ))}
      </div>

      <div className="gbh-cta-wrap">
        <a className="gbh-cta" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
