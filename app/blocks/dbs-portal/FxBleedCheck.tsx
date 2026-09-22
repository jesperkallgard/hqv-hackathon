/**
 * No-login first screen: a paste box for statements, and once text is submitted, one large signed basis-point figure with benchmark, period and trade count as smaller secondary detail beneath it.
 */
"use client";

import { useState } from "react";

export default function FxBleedCheck({
  prompt,
  placeholder,
  submitLabel,
  headline,
  detail = [],
  note,
}) {
  const [text, setText] = useState("");
  const [shown, setShown] = useState(false);

  const ready = text.trim().length > 0;

  return (
    <section
      style={{
        border: "1px solid var(--rule)",
        borderRadius: "var(--radius)",
        background: "var(--paper)",
        color: "var(--ink)",
        padding: "2rem",
      }}
    >
      {!shown ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (ready) setShown(true);
          }}
        >
          <label
            htmlFor="statements"
            style={{
              display: "block",
              fontSize: "1.25rem",
              lineHeight: 1.4,
              marginBottom: "1rem",
            }}
          >
            {prompt}
          </label>
          <textarea
            id="statements"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            rows={10}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "0.875rem",
              border: "1px solid var(--rule)",
              borderRadius: "var(--radius)",
              background: "var(--paper)",
              color: "var(--ink)",
              font: "inherit",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            disabled={!ready}
            style={{
              marginTop: "1rem",
              padding: "0.7rem 1.4rem",
              border: "1px solid var(--ink)",
              borderRadius: "var(--radius)",
              background: ready ? "var(--accent)" : "var(--paper)",
              color: "var(--ink)",
              font: "inherit",
              cursor: ready ? "pointer" : "default",
              opacity: ready ? 1 : 0.5,
            }}
          >
            {submitLabel}
          </button>
          {note ? (
            <p
              style={{
                marginTop: "1rem",
                marginBottom: 0,
                color: "var(--muted)",
                fontSize: "0.85rem",
              }}
            >
              {note}
            </p>
          ) : null}
        </form>
      ) : (
        <div>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            {headline}
          </p>
          <dl
            style={{
              marginTop: "2rem",
              marginBottom: 0,
              display: "grid",
              gap: "0.5rem",
              fontSize: "0.85rem",
              color: "var(--muted)",
              borderTop: "1px solid var(--rule)",
              paddingTop: "1rem",
            }}
          >
            {detail.map((d) => (
              <div key={d.label} style={{ display: "flex", gap: "0.5rem" }}>
                <dt style={{ margin: 0, minWidth: "9rem" }}>{d.label}</dt>
                <dd style={{ margin: 0, color: "var(--ink)" }}>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}
