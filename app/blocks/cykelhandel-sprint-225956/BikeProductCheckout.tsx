"use client";

/**
 * A self-contained bike product page: photo, price, two specs, and a Buy button that drives a local state machine through cart, shipping (name/email/address), and payment to a confirmed order screen. No backend, everything comes from props.
 */
import React, { useState } from "react";

type Spec = { label: string; value: string };

type Bike = {
  name: string;
  price: string;
  imageUrl?: string;
  specs?: Spec[];
};

export type BikeProductCheckoutProps = {
  shopName?: string;
  bike: Bike;
  shippingNote?: string;
  footerNote?: string;
};

type Step = "product" | "cart" | "shipping" | "payment" | "confirmed";

const STEPS: Step[] = ["cart", "shipping", "payment"];

const panel: React.CSSProperties = {
  border: "1px solid var(--rule)",
  borderRadius: "var(--radius)",
  background: "var(--paper)",
  color: "var(--ink)",
  padding: "1rem",
};

const bigButton: React.CSSProperties = {
  display: "block",
  width: "100%",
  minHeight: "3.5rem",
  border: "1px solid var(--accent)",
  borderRadius: "var(--radius)",
  background: "var(--accent)",
  color: "var(--paper)",
  font: "inherit",
  fontSize: "1.125rem",
  fontWeight: 600,
  cursor: "pointer",
};

const quietButton: React.CSSProperties = {
  ...bigButton,
  minHeight: "2.75rem",
  fontSize: "1rem",
  fontWeight: 500,
  background: "transparent",
  color: "var(--ink)",
  border: "1px solid var(--rule)",
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "3rem",
  padding: "0 0.75rem",
  border: "1px solid var(--rule)",
  borderRadius: "var(--radius)",
  background: "var(--paper)",
  color: "var(--ink)",
  font: "inherit",
  fontSize: "1rem",
};

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label style={{ display: "block", marginBottom: "0.75rem" }}>
      <span
        style={{
          display: "block",
          fontSize: "0.8125rem",
          color: "var(--muted)",
          marginBottom: "0.25rem",
        }}
      >
        {props.label}
      </span>
      <input
        style={fieldStyle}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </label>
  );
}

function BikeIcon() {
  return (
    <svg viewBox="0 0 120 60" width="100%" height="100%" role="img" aria-label="Bike">
      <g
        fill="none"
        stroke="var(--muted)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="26" cy="42" r="15" />
        <circle cx="94" cy="42" r="15" />
        <path d="M26 42 L50 42 L66 18 L82 42 M50 42 L64 18 L94 42 M60 18 L72 18" />
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
  const [ship, setShip] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [pay, setPay] = useState({ cardNumber: "", expiry: "", cvc: "" });
  const [orderNumber, setOrderNumber] = useState("");

  const specs = bike.specs ?? [];
  const shipReady =
    ship.name.trim() !== "" &&
    ship.email.trim() !== "" &&
    ship.address.trim() !== "" &&
    ship.city.trim() !== "" &&
    ship.zip.trim() !== "";
  const payReady =
    pay.cardNumber.trim() !== "" && pay.expiry.trim() !== "" && pay.cvc.trim() !== "";

  function placeOrder() {
    setOrderNumber("CH-" + String(1000 + Math.floor(Math.random() * 9000)));
    setStep("confirmed");
  }

  function restart() {
    setShip({ name: "", email: "", address: "", city: "", zip: "" });
    setPay({ cardNumber: "", expiry: "", cvc: "" });
    setOrderNumber("");
    setStep("product");
  }

  const inCheckout = step === "cart" || step === "shipping" || step === "payment";

  return (
    <div
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        borderRadius: "var(--radius)",
        border: "1px solid var(--rule)",
        overflow: "hidden",
        maxWidth: "34rem",
        margin: "0 auto",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "0.75rem",
          padding: "0.875rem 1rem",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <strong style={{ fontSize: "1.0625rem", letterSpacing: "0.01em" }}>{shopName}</strong>
        <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>
          {step === "product" ? "In stock — ready to ride" : "Checkout"}
        </span>
      </header>

      <main style={{ padding: "1rem" }}>
        {step === "product" && (
          <>
            <div
              style={{
                ...panel,
                padding: 0,
                aspectRatio: "2 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                marginBottom: "0.875rem",
              }}
            >
              {bike.imageUrl ? (
                <img
                  src={bike.imageUrl}
                  alt={bike.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div style={{ width: "70%", padding: "1rem" }}>
                  <BikeIcon />
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "1.375rem" }}>{bike.name}</h2>
              <span style={{ fontSize: "1.375rem", fontWeight: 700 }}>{bike.price}</span>
            </div>

            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))",
                gap: "0.5rem",
                margin: "0 0 1rem",
              }}
            >
              {specs.map((s) => (
                <div key={s.label} style={{ ...panel, padding: "0.625rem 0.75rem" }}>
                  <dt style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{s.label}</dt>
                  <dd style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>{s.value}</dd>
                </div>
              ))}
            </dl>

            <button style={bigButton} onClick={() => setStep("cart")}>
              Buy this bike
            </button>
          </>
        )}

        {inCheckout && (
          <>
            <ol
              style={{
                display: "flex",
                gap: "0.5rem",
                listStyle: "none",
                padding: 0,
                margin: "0 0 1rem",
                fontSize: "0.8125rem",
              }}
            >
              {STEPS.map((s) => (
                <li
                  key={s}
                  style={{
                    flex: 1,
                    padding: "0.375rem 0.5rem",
                    textAlign: "center",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--rule)",
                    background: s === step ? "var(--accent)" : "transparent",
                    color: s === step ? "var(--paper)" : "var(--muted)",
                    textTransform: "capitalize",
                  }}
                >
                  {s}
                </li>
              ))}
            </ol>

            {step === "cart" && (
              <>
                <div
                  style={{
                    ...panel,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginBottom: "0.875rem",
                  }}
                >
                  <span>
                    {bike.name}
                    <br />
                    <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>Qty 1</span>
                  </span>
                  <strong>{bike.price}</strong>
                </div>
                {shippingNote && (
                  <p style={{ margin: "0 0 0.875rem", fontSize: "0.875rem", color: "var(--muted)" }}>
                    {shippingNote}
                  </p>
                )}
                <button style={bigButton} onClick={() => setStep("shipping")}>
                  Continue to shipping
                </button>
              </>
            )}

            {step === "shipping" && (
              <>
                <Field label="Name" value={ship.name} onChange={(v) => setShip({ ...ship, name: v })} />
                <Field
                  label="Email"
                  value={ship.email}
                  placeholder="you@example.com"
                  onChange={(v) => setShip({ ...ship, email: v })}
                />
                <Field
                  label="Address"
                  value={ship.address}
                  onChange={(v) => setShip({ ...ship, address: v })}
                />
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <div style={{ flex: 2 }}>
                    <Field label="City" value={ship.city} onChange={(v) => setShip({ ...ship, city: v })} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Field label="Zip" value={ship.zip} onChange={(v) => setShip({ ...ship, zip: v })} />
                  </div>
                </div>
                <button
                  style={{ ...bigButton, opacity: shipReady ? 1 : 0.5 }}
                  disabled={!shipReady}
                  onClick={() => setStep("payment")}
                >
                  Continue to payment
                </button>
              </>
            )}

            {step === "payment" && (
              <>
                <Field
                  label="Card number"
                  value={pay.cardNumber}
                  placeholder="4242 4242 4242 4242"
                  onChange={(v) => setPay({ ...pay, cardNumber: v })}
                />
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <div style={{ flex: 1 }}>
                    <Field
                      label="Expiry"
                      value={pay.expiry}
                      placeholder="09/28"
                      onChange={(v) => setPay({ ...pay, expiry: v })}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Field
                      label="CVC"
                      value={pay.cvc}
                      placeholder="123"
                      onChange={(v) => setPay({ ...pay, cvc: v })}
                    />
                  </div>
                </div>
                <button
                  style={{ ...bigButton, opacity: payReady ? 1 : 0.5 }}
                  disabled={!payReady}
                  onClick={placeOrder}
                >
                  Place order — {bike.price}
                </button>
              </>
            )}

            <button
              style={{ ...quietButton, marginTop: "0.75rem" }}
              onClick={() =>
                setStep(step === "cart" ? "product" : step === "shipping" ? "cart" : "shipping")
              }
            >
              Back
            </button>
          </>
        )}

        {step === "confirmed" && (
          <>
            <div style={{ ...panel, marginBottom: "0.875rem" }}>
              <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.25rem" }}>Order {orderNumber}</h2>
              <p style={{ margin: "0 0 0.5rem" }}>
                {bike.name} — {bike.price}. It&apos;s yours.
              </p>
              <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted)" }}>
                Confirmation sent to {ship.email}. We&apos;ll email again when it ships to {ship.city}.
              </p>
            </div>
            <button style={quietButton} onClick={restart}>
              Back to the bike
            </button>
          </>
        )}
      </main>

      <footer
        style={{
          padding: "0.875rem 1rem",
          borderTop: "1px solid var(--rule)",
          fontSize: "0.8125rem",
          color: "var(--muted)",
          display: "flex",
          justifyContent: "space-between",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        <span>{footerNote}</span>
        <span>{shopName}</span>
      </footer>
    </div>
  );
}
