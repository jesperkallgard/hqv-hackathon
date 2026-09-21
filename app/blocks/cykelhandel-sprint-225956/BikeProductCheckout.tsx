"use client";

/**
 * A self-contained bike product page: photo, price, two specs, and a Buy button that leads to a single-form checkout (email, shipping address, card number, one submit button) and a confirmed order screen. No backend, everything comes from props.
 */
import React, { useState } from "react";

type Spec = { label: string; value: string };
type Bike = { name: string; price: string; imageUrl?: string; specs?: Spec[] };

export type BikeProductCheckoutProps = {
  shopName?: string;
  bike: Bike;
  shippingNote?: string;
  footerNote?: string;
};

type Step = "product" | "checkout" | "confirmed";

const page: React.CSSProperties = {
  background: "var(--paper)",
  color: "var(--ink)",
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
};

const bar: React.CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "1rem 1.25rem",
  borderBottom: "1px solid var(--rule)",
};

const main: React.CSSProperties = {
  flex: 1,
  padding: "1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "34rem",
  width: "100%",
  margin: "0 auto",
};

const panel: React.CSSProperties = {
  border: "1px solid var(--rule)",
  borderRadius: "var(--radius)",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const bigButton: React.CSSProperties = {
  width: "100%",
  padding: "1rem",
  fontSize: "1.05rem",
  fontWeight: 600,
  color: "var(--paper)",
  background: "var(--accent)",
  border: "1px solid var(--accent)",
  borderRadius: "var(--radius)",
  cursor: "pointer",
};

const quietButton: React.CSSProperties = {
  padding: "0.75rem 1rem",
  fontSize: "0.95rem",
  color: "var(--ink)",
  background: "transparent",
  border: "1px solid var(--rule)",
  borderRadius: "var(--radius)",
  cursor: "pointer",
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem",
  fontSize: "1rem",
  color: "var(--ink)",
  background: "var(--paper)",
  border: "1px solid var(--rule)",
  borderRadius: "var(--radius)",
  boxSizing: "border-box",
};

const muted: React.CSSProperties = { color: "var(--muted)", fontSize: "0.85rem" };

function Field({
  label,
  value,
  onChange,
  placeholder,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
}) {
  const shared = {
    style: fieldStyle,
    value,
    placeholder,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
      <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{label}</span>
      {multiline ? (
        <textarea {...shared} rows={3} style={{ ...fieldStyle, resize: "vertical" }} />
      ) : (
        <input {...shared} />
      )}
    </label>
  );
}

function BikeIcon() {
  return (
    <svg
      viewBox="0 0 100 60"
      role="img"
      aria-label="Bike"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <g
        fill="none"
        stroke="var(--rule)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="22" cy="42" r="14" />
        <circle cx="78" cy="42" r="14" />
        <path d="M22 42 L42 42 L58 18 L70 18" />
        <path d="M42 42 L58 42 L78 42 L58 18" />
        <path d="M36 18 L48 18" />
      </g>
    </svg>
  );
}

export default function BikeProductCheckout({
  shopName = "Cykelhandel",
  bike,
  shippingNote,
  footerNote,
}: BikeProductCheckoutProps) {
  const [step, setStep] = useState<Step>("product");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [card, setCard] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const ready =
    email.trim() !== "" && address.trim() !== "" && card.trim() !== "";

  function placeOrder() {
    if (!ready) return;
    setOrderNumber("CH-" + String(1000 + Math.floor(Math.random() * 9000)));
    setStep("confirmed");
  }

  function restart() {
    setEmail("");
    setAddress("");
    setCard("");
    setOrderNumber("");
    setStep("product");
  }

  const status =
    step === "product"
      ? bike.price
      : step === "checkout"
      ? "Checkout"
      : "Order placed";

  return (
    <div style={page}>
      <header style={bar}>
        <strong style={{ fontSize: "1.05rem" }}>{shopName}</strong>
        <span style={muted}>{status}</span>
      </header>

      <main style={main}>
        {step === "product" && (
          <>
            <div
              style={{
                border: "1px solid var(--rule)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                padding: bike.imageUrl ? 0 : "1.5rem",
              }}
            >
              {bike.imageUrl ? (
                <img
                  src={bike.imageUrl}
                  alt={bike.name}
                  style={{ width: "100%", display: "block" }}
                />
              ) : (
                <BikeIcon />
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <h1 style={{ margin: 0, fontSize: "1.4rem" }}>{bike.name}</h1>
              <strong style={{ fontSize: "1.4rem" }}>{bike.price}</strong>
            </div>

            {bike.specs && bike.specs.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {bike.specs.map((s) => (
                  <div key={s.label} style={panel}>
                    <span style={muted}>{s.label}</span>
                    <strong>{s.value}</strong>
                  </div>
                ))}
              </div>
            )}

            <button style={bigButton} onClick={() => setStep("checkout")}>
              Buy this bike
            </button>
            {shippingNote && <p style={muted}>{shippingNote}</p>}
          </>
        )}

        {step === "checkout" && (
          <>
            <div style={panel}>
              <div
                style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
              >
                <span>{bike.name}</span>
                <strong>{bike.price}</strong>
              </div>
              {shippingNote && <span style={muted}>{shippingNote}</span>}
            </div>

            <Field
              label="Email"
              value={email}
              onChange={setEmail}
              placeholder="you@example.com"
            />
            <Field
              label="Shipping address"
              value={address}
              onChange={setAddress}
              placeholder="Street, zip, city"
              multiline
            />
            <Field
              label="Card number"
              value={card}
              onChange={setCard}
              placeholder="0000 0000 0000 0000"
            />

            <button
              style={{ ...bigButton, opacity: ready ? 1 : 0.5 }}
              disabled={!ready}
              onClick={placeOrder}
            >
              Place order — {bike.price}
            </button>
            <button style={quietButton} onClick={() => setStep("product")}>
              Back to the bike
            </button>
          </>
        )}

        {step === "confirmed" && (
          <>
            <h1 style={{ margin: 0, fontSize: "1.4rem" }}>Order {orderNumber}</h1>
            <div style={panel}>
              <div
                style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
              >
                <span>{bike.name}</span>
                <strong>{bike.price}</strong>
              </div>
              <span style={muted}>Confirmation sent to {email}</span>
              <span style={{ ...muted, whiteSpace: "pre-wrap" }}>
                Ships to {address}
              </span>
            </div>
            <button style={quietButton} onClick={restart}>
              Back to the bike
            </button>
          </>
        )}
      </main>

      <footer style={{ ...bar, borderBottom: "none", borderTop: "1px solid var(--rule)" }}>
        <span style={muted}>{footerNote}</span>
        <span style={muted}>{shopName}</span>
      </footer>
    </div>
  );
}
