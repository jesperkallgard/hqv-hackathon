/**
 * A single-bike product page widget: dropdowns for wheel size, component level and color, each with a fixed price delta, recalculating the total live in the browser. No backend, no cart, no checkout.
 */
"use client";

import React, { useState } from "react";

type Choice = { label: string; delta: number };
type OptionGroup = { label: string; key: string; choices: Choice[] };
type BikePriceConfiguratorProps = {
  title: string;
  description: string;
  basePrice: number;
  currencySymbol?: string;
  options: OptionGroup[];
};

function formatMoney(amount: number, currencySymbol: string): string {
  return `${currencySymbol}${Math.abs(Math.round(amount)).toLocaleString()}`;
}

function formatDelta(delta: number, currencySymbol: string): string {
  if (delta === 0) return "";
  return `${delta > 0 ? "+" : "-"}${formatMoney(delta, currencySymbol)}`;
}

export default function BikePriceConfigurator({
  title,
  description,
  basePrice,
  currencySymbol = "$",
  options,
}: BikePriceConfiguratorProps) {
  const [selections, setSelections] = useState<Record<string, number>>({});

  const total = options.reduce((sum, group) => {
    const choice = group.choices[selections[group.key] ?? 0];
    return sum + (choice ? choice.delta : 0);
  }, basePrice);

  return (
    <div
      style={{
        maxWidth: "480px",
        width: "100%",
        margin: "0 auto",
        background: "var(--paper)",
        color: "var(--ink)",
        border: "1px solid var(--rule)",
        borderRadius: "var(--radius)",
        padding: "1.25rem",
        boxSizing: "border-box",
        fontFamily: "inherit",
      }}
    >
      <h2 style={{ margin: "0 0 0.25rem", fontSize: "1.25rem" }}>{title}</h2>
      <p
        style={{
          margin: "0 0 1rem",
          color: "var(--muted)",
          fontSize: "0.95rem",
          lineHeight: 1.4,
        }}
      >
        {description}
      </p>

      <div
        style={{
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          padding: "0.75rem 0 0",
          marginBottom: "1rem",
        }}
      >
        {options.map((group) => (
          <div
            key={group.key}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
              marginBottom: "0.75rem",
            }}
          >
            <label
              htmlFor={`bike-config-${group.key}`}
              style={{ fontSize: "0.85rem", color: "var(--muted)" }}
            >
              {group.label}
            </label>
            <select
              id={`bike-config-${group.key}`}
              value={selections[group.key] ?? 0}
              onChange={(e) =>
                setSelections((prev) => ({
                  ...prev,
                  [group.key]: Number(e.target.value),
                }))
              }
              style={{
                width: "100%",
                padding: "0.5rem",
                fontSize: "1rem",
                borderRadius: "var(--radius)",
                border: "1px solid var(--rule)",
                background: "var(--paper)",
                color: "var(--ink)",
              }}
            >
              {group.choices.map((choice, i) => {
                const delta = formatDelta(choice.delta, currencySymbol);
                return (
                  <option key={`${group.key}-${i}`} value={i}>
                    {choice.label}
                    {delta ? ` (${delta})` : ""}
                  </option>
                );
              })}
            </select>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span style={{ fontSize: "0.95rem", color: "var(--muted)" }}>Total</span>
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--accent)",
          }}
        >
          {formatMoney(total, currencySymbol)}
        </span>
      </div>
    </div>
  );
}
