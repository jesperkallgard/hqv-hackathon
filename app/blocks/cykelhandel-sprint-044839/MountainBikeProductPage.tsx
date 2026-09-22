/**
 * Single bike product page: product photo, name + price, five plain-text specs (weight, frame size, suspension, wheel size, drivetrain), and an unwired Buy Now button, in that order.
 */
type Spec = {
  label: string;
  value: string;
};

type MountainBikeProductPageProps = {
  name?: string;
  price?: string;
  imageUrl?: string;
  imageAlt?: string;
  specs?: Spec[];
  buyLabel?: string;
};

const defaultSpecs: Spec[] = [
  { label: "Weight", value: "13.2 kg" },
  { label: "Frame size", value: "Medium (17\")" },
  { label: "Suspension", value: "Front, 120mm travel" },
  { label: "Wheel size", value: "29 in" },
  { label: "Drivetrain", value: "Shimano Deore, 1x11 speed" },
];

export default function MountainBikeProductPage({
  name = "Trailhead 29 Mountain Bike",
  price = "$1,200",
  imageUrl,
  imageAlt = "Mountain bike photo",
  specs = defaultSpecs,
  buyLabel = "Buy Now",
}: MountainBikeProductPageProps) {
  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "1.5rem",
        color: "var(--ink)",
        background: "var(--paper)",
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={imageAlt}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "var(--radius)",
          }}
        />
      ) : (
        <div
          role="img"
          aria-label={imageAlt}
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--muted)",
            fontSize: "1rem",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          {imageAlt}
        </div>
      )}

      <div style={{ marginTop: "1.5rem" }}>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            margin: 0,
          }}
        >
          {name}
        </h1>
        <p
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            margin: "0.4rem 0 0",
            color: "var(--accent)",
          }}
        >
          {price}
        </p>
      </div>

      <ul
        style={{
          listStyle: "none",
          margin: "1.5rem 0 0",
          padding: 0,
          borderTop: "1px solid var(--rule)",
        }}
      >
        {specs.map((spec) => (
          <li
            key={spec.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "0.6rem 0",
              borderBottom: "1px solid var(--rule)",
              fontSize: "0.95rem",
            }}
          >
            <span style={{ color: "var(--muted)" }}>{spec.label}</span>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>

      <button
        style={{
          display: "block",
          width: "100%",
          marginTop: "1.5rem",
          padding: "0.9rem",
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "var(--paper)",
          background: "var(--accent)",
          border: "none",
          borderRadius: "var(--radius)",
          cursor: "pointer",
        }}
      >
        {buyLabel}
      </button>
    </div>
  );
}
