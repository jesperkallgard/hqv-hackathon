"use client";

/**
 * A single bike product page (image, price, 1-2 specs, Buy button) that steps into an email checkout and then an order confirmation — proves the buy flow end to end without routing or a backend.
 */
import { useState } from "react";

type Spec = { label: string; value: string };

type BikeProductCheckoutProps = {
  bikeName?: string;
  price?: string;
  specs?: Spec[];
  imageUrl?: string;
};

function BikeIllustration() {
  return (
    <svg
      viewBox="0 0 200 120"
      width="100%"
      height="auto"
      role="img"
      aria-label="Bike illustration"
      style={{ display: "block", maxWidth: 320, margin: "0 auto" }}
    >
      <circle cx="50" cy="90" r="24" fill="none" stroke="var(--ink)" strokeWidth="4" />
      <circle cx="150" cy="90" r="24" fill="none" stroke="var(--ink)" strokeWidth="4" />
      <path
        d="M50 90 L85 50 L120 50 L150 90 M85 50 L70 90 M120 50 L100 30 L75 30"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M100 30 L110 30" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
      <path d="M120 50 L150 90" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function BikeProductCheckout({
  bikeName = "Canyon Grail CF",
  price = "$2,899",
  specs = [
    { label: "Frame size", value: "56cm" },
    { label: "Gearing", value: "1x12, SRAM Rival XPLR" },
  ],
  imageUrl,
}: BikeProductCheckoutProps) {
  const [step, setStep] = useState<"product" | "checkout" | "confirmed">("product");
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const radius = "var(--radius, 6px)";

  const bigButtonStyle: React.CSSProperties = {
    width: "100%",
    padding: "18px",
    fontSize: "1.1rem",
    fontWeight: 700,
    background: "var(--accent)",
    color: "var(--paper)",
    border: "none",
    borderRadius: radius,
    cursor: "pointer",
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: 420,
    margin: "0 auto",
    padding: "20px",
    background: "var(--paper)",
    color: "var(--ink)",
    borderRadius: radius,
    border: "1px solid var(--rule, #ddd)",
    boxSizing: "border-box",
  };

  if (step === "checkout") {
    return (
      <div style={cardStyle}>
        <button
          onClick={() => setStep("product")}
          style={{
            background: "none",
            border: "none",
            color: "var(--ink)",
            opacity: 0.7,
            cursor: "pointer",
            padding: 0,
            marginBottom: "16px",
            fontSize: "0.9rem",
          }}
        >
          ← Back
        </button>
        <h2 style={{ margin: "0 0 4px" }}>{bikeName}</h2>
        <p style={{ margin: "0 0 20px", opacity: 0.8 }}>Enter your email to lock it in.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fake = "BK-" + Math.floor(10000 + Math.random() * 90000);
            setOrderNumber(fake);
            setStep("confirmed");
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "1rem",
              marginBottom: "16px",
              borderRadius: radius,
              border: "1px solid var(--rule, #ccc)",
              background: "var(--paper)",
              color: "var(--ink)",
              boxSizing: "border-box",
            }}
          />
          <button type="submit" style={bigButtonStyle}>
            Place order
          </button>
        </form>
      </div>
    );
  }

  if (step === "confirmed") {
    return (
      <div style={{ ...cardStyle, textAlign: "center" }}>
        <h2 style={{ margin: "0 0 8px" }}>You're set — check your email.</h2>
        <p style={{ margin: "0 0 4px", opacity: 0.8 }}>
          {bikeName} is yours. We sent the details to <strong>{email}</strong>.
        </p>
        <p style={{ margin: "16px 0", fontSize: "0.9rem", opacity: 0.6 }}>
          Order #{orderNumber}
        </p>
        <button
          onClick={() => {
            setStep("product");
            setEmail("");
          }}
          style={{
            ...bigButtonStyle,
            background: "var(--paper)",
            color: "var(--ink)",
            border: "1px solid var(--rule, #ccc)",
          }}
        >
          Back to bike
        </button>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={bikeName}
          style={{ width: "100%", height: "auto", borderRadius: radius, marginBottom: "16px" }}
        />
      ) : (
        <div style={{ marginBottom: "16px" }}>
          <BikeIllustration />
        </div>
      )}
      <h2 style={{ margin: "0 0 4px" }}>{bikeName}</h2>
      <p style={{ fontSize: "2rem", fontWeight: 800, margin: "0 0 16px", color: "var(--accent)" }}>
        {price}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
        {specs.map((s) => (
          <li
            key={s.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderTop: "1px solid var(--rule, #eee)",
              fontSize: "0.95rem",
            }}
          >
            <span style={{ opacity: 0.7 }}>{s.label}</span>
            <span style={{ fontWeight: 600 }}>{s.value}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => setStep("checkout")} style={bigButtonStyle}>
        Buy this bike
      </button>
    </div>
  );
}
