"use client";

/**
 * A single hardcoded bike product page (image, price, two specs) where the Buy button drives a real state machine through cart, shipping, and payment to a confirmation screen — all local state, no backend.
 */
import React, { useState } from "react";

type Step = "product" | "cart" | "shipping" | "payment" | "confirmed";

type ShippingInfo = {
  name: string;
  address: string;
  city: string;
  zip: string;
};

type PaymentInfo = {
  cardNumber: string;
  expiry: string;
  cvc: string;
};

export type BikeProductCheckoutProps = {
  /** URL for the bike photo. Falls back to a simple inline SVG bike if not given. */
  imageUrl?: string;
};

const BIKE = {
  name: "Ranger Gravel 3",
  price: "$1,450",
  specs: [
    { label: "Frame", value: "Aluminum" },
    { label: "Gears", value: "11-speed" },
  ],
};

function BikeIcon() {
  return (
    <svg
      viewBox="0 0 200 120"
      width="100%"
      height="100%"
      role="img"
      aria-label="Ranger Gravel 3 bike illustration"
    >
      <g fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="45" cy="90" r="24" />
        <circle cx="155" cy="90" r="24" />
        <path d="M45 90 L85 40 L120 40 L155 90" />
        <path d="M85 40 L70 90" />
        <path d="M120 40 L100 20 L80 20" />
        <path d="M100 20 L110 10" />
        <path d="M155 90 L135 55" />
      </g>
    </svg>
  );
}

const initialShipping: ShippingInfo = { name: "", address: "", city: "", zip: "" };
const initialPayment: PaymentInfo = { cardNumber: "", expiry: "", cvc: "" };

export default function BikeProductCheckout({ imageUrl }: BikeProductCheckoutProps) {
  const [step, setStep] = useState<Step>("product");
  const [shipping, setShipping] = useState<ShippingInfo>(initialShipping);
  const [payment, setPayment] = useState<PaymentInfo>(initialPayment);

  const reset = () => {
    setStep("product");
    setShipping(initialShipping);
    setPayment(initialPayment);
  };

  const wrapStyle: React.CSSProperties = {
    maxWidth: 420,
    width: "100%",
    margin: "0 auto",
    padding: "24px 20px 40px",
    boxSizing: "border-box",
    fontFamily: "inherit",
    color: "var(--ink)",
    background: "var(--paper)",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 16px",
    color: "var(--ink)",
  };

  const bigButtonStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: "16px 20px",
    fontSize: 17,
    fontWeight: 700,
    color: "var(--paper)",
    background: "var(--accent)",
    border: "none",
    borderRadius: "var(--radius)",
    cursor: "pointer",
    marginTop: 12,
  };

  const backLinkStyle: React.CSSProperties = {
    display: "inline-block",
    marginTop: 14,
    fontSize: 14,
    color: "var(--muted)",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    textDecoration: "underline",
  };

  const cardStyle: React.CSSProperties = {
    border: "1px solid var(--rule)",
    borderRadius: "var(--radius)",
    padding: 16,
    marginBottom: 12,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    fontSize: 16,
    color: "var(--ink)",
    background: "var(--paper)",
    border: "1px solid var(--rule)",
    borderRadius: "var(--radius)",
    marginBottom: 10,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    color: "var(--muted)",
    marginBottom: 4,
    display: "block",
  };

  if (step === "product") {
    return (
      <div style={wrapStyle}>
        <div
          style={{
            width: "100%",
            aspectRatio: "5 / 3",
            background: "var(--paper)",
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={BIKE.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div style={{ width: "80%", height: "80%" }}>
              <BikeIcon />
            </div>
          )}
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 4px" }}>{BIKE.name}</h1>
        <div style={{ fontSize: 20, fontWeight: 700, color: "var(--accent)", marginBottom: 12 }}>
          {BIKE.price}
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 8 }}>
          {BIKE.specs.map((s) => (
            <div key={s.label} style={{ fontSize: 14, color: "var(--muted)" }}>
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>{s.label}: </span>
              {s.value}
            </div>
          ))}
        </div>

        <button style={bigButtonStyle} onClick={() => setStep("cart")}>
          Buy it
        </button>
      </div>
    );
  }

  if (step === "cart") {
    return (
      <div style={wrapStyle}>
        <h1 style={headerStyle}>Your cart</h1>
        <div style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontWeight: 700 }}>{BIKE.name}</span>
            <span style={{ fontWeight: 700, color: "var(--accent)" }}>{BIKE.price}</span>
          </div>
        </div>
        <button style={bigButtonStyle} onClick={() => setStep("shipping")}>
          Continue to shipping
        </button>
        <button style={backLinkStyle} onClick={() => setStep("product")}>
          Keep browsing
        </button>
      </div>
    );
  }

  if (step === "shipping") {
    return (
      <div style={wrapStyle}>
        <h1 style={headerStyle}>Where's it headed?</h1>

        <label style={labelStyle}>Name</label>
        <input
          style={inputStyle}
          placeholder="Your name"
          value={shipping.name}
          onChange={(e) => setShipping({ ...shipping, name: e.target.value })}
        />

        <label style={labelStyle}>Address</label>
        <input
          style={inputStyle}
          placeholder="Street address"
          value={shipping.address}
          onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
        />

        <label style={labelStyle}>City</label>
        <input
          style={inputStyle}
          placeholder="City"
          value={shipping.city}
          onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
        />

        <label style={labelStyle}>Zip</label>
        <input
          style={inputStyle}
          placeholder="Zip code"
          value={shipping.zip}
          onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
        />

        <button style={bigButtonStyle} onClick={() => setStep("payment")}>
          Continue to payment
        </button>
        <button style={backLinkStyle} onClick={() => setStep("cart")}>
          Back to cart
        </button>
      </div>
    );
  }

  if (step === "payment") {
    return (
      <div style={wrapStyle}>
        <h1 style={headerStyle}>Pay up</h1>

        <label style={labelStyle}>Card number</label>
        <input
          style={inputStyle}
          placeholder="1234 1234 1234 1234"
          value={payment.cardNumber}
          onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
        />

        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Expiry</label>
            <input
              style={inputStyle}
              placeholder="MM/YY"
              value={payment.expiry}
              onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>CVC</label>
            <input
              style={inputStyle}
              placeholder="123"
              value={payment.cvc}
              onChange={(e) => setPayment({ ...payment, cvc: e.target.value })}
            />
          </div>
        </div>

        <button style={bigButtonStyle} onClick={() => setStep("confirmed")}>
          Confirm order
        </button>
        <button style={backLinkStyle} onClick={() => setStep("shipping")}>
          Back to shipping
        </button>
      </div>
    );
  }

  // confirmed
  return (
    <div style={wrapStyle}>
      <h1 style={headerStyle}>Nice, it's yours.</h1>
      <p style={{ color: "var(--muted)", marginTop: -8, marginBottom: 20 }}>
        We'll get it out the door.
      </p>
      <div style={cardStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontWeight: 700 }}>{BIKE.name}</span>
          <span style={{ fontWeight: 700, color: "var(--accent)" }}>{BIKE.price}</span>
        </div>
      </div>
      <button style={bigButtonStyle} onClick={reset}>
        Buy another
      </button>
    </div>
  );
}
