/**
 * A single-bike product page widget: three dropdowns (wheel size, component level, color), each with a fixed price delta, recalculating the total live in the browser. No backend, no cart, no checkout.
 */
"use client";

import React, { useState } from "react";

/**
 * One choice within an option group, e.g. { label: "29-inch", delta: 40 }
 */
type Choice = {
  label: string;
  delta: number;
};

/**
 * One dropdown's worth of choices, e.g. Wheel Size with several sizes.
 */
type OptionGroup = {
  label: string;
  key: string;
  choices: Choice[];
};

type BikePriceConfiguratorProps = {
  /** Product name, e.g. "Trailhead 3" */
  title: string;
  /** One plain, honest line about the bike — no marketing language */
  description: string;
  /** Starting price before any option deltas */
  basePrice: number;
  /** Currency symbol to prefix prices with, defaults to "$" */
  currencySymbol?: string;
  /** Dropdowns to configure: Wheel Size, Component Level, Color, etc. */
  options: OptionGroup[];
};

function formatMoney(amount: number, currencySymbol: string): string {
  const rounded = Math.round(amount);
  return `${currencySymbol}${Math.abs(rounded).toLocaleString()}`;
}

function formatDelta(delta: number, currencySymbol: string): string {
  if (delta === 0) return "";
  const sign = delta > 0 ? "+" : "-";
  return `${sign}${formatMoney(delta, currencySymbol)}`;
}

export default function BikePriceConfigurator({
  title,
  description,
  basePrice,
  currencySymbol = "$",
  options,
}: BikePriceConfiguratorProps) {
  // selections: option key -> chosen choice index. Default to first choice of each group.
  const [selections, setSelections] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    options.forEach((group) => {
      initial[group.key] = 0;
    });
    return initial;
  });

  const total = options.reduce((sum, group) => {
    const idx = selections[group.key] ?? 0;
    const choice = group.choices[idx];
    return sum + (choice ? choice.delta : 0);
  }, basePrice);

  return (
    <div
      style={{
        maxWidth: "480px",
        width: "100%",
        margin: "0 auto",
        background: "var(--paper, #fff)",
        color: "var(--ink, #1a1a1a)",
        border: "1px solid var(--rule, #ddd)",
        borderRadius: "var(--radius, 8px)",
        padding: "1.25rem",
        boxSizing: "border-box",
        fontFamily: "inherit",
      }}
    >
      <h2 style={{ margin: "0 0 0.25rem", fontSize: "1.25rem" }}>{title}</h2>
      <p
        style={{
          margin: "0 0 1rem",
          color: "var(--muted, #666)",
          fontSize: "0.95rem",
          lineHeight: 1.4,
        }}
      >
        {description}
      </p>

      <div
        style={{
          borderTop: "1px solid var(--rule, #ddd)",
          borderBottom: "1px solid var(--rule, #ddd)",
          padding: "0.75rem 0",
          marginBottom: "1rem",
        }}
      >
        {options.map((group) => {
          const selectedIndex = selections[group.key] ?? 0;
          const selectedChoice = group.choices[selectedIndex];
          const deltaText = selectedChoice
            ? formatDelta(selectedChoice.delta, currencySymbol)
            : "";

          return (
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
                style={{ fontSize: "0.85rem", color: "var(--muted, #666)" }}
              >
                {group.label}
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <select
                  id={`bike-config-${group.key}`}
                  value={selectedIndex}
                  onChange={(e) => {
                    const newIndex = Number(e.target.value);
                    setSelections((prev) => ({
                      ...prev,
                      [group.key]: newIndex,
                    }));
                  }}
                  style={{
                    flex: 1,
                    padding: "0.5rem",
                    fontSize: "1rem",
                    borderRadius: "var(--radius, 8px)",
                    border: "1px solid var(--rule, #ccc)",
                    background: "var(--paper, #fff)",
                    color: "var(--ink, #1a1a1a)",
                  }}
                >
                  {group.choices.map((choice, i) => (
                    <option key={choice.label + i} value={i}>
                      {choice.label}
                      {choice.delta !== 0
                        ? ` (${formatDelta(choice.delta, currencySymbol)})`
                        : ""}
                    </option>
                  ))}
                </select>
                {deltaText && (
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--accent, #b5321f)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {deltaText}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span style={{ fontSize: "0.95rem", color: "var(--muted, #666)" }}>
          Total
        </span>
        <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>
          {formatMoney(total, currencySymbol)}
        </span>
      </div>
    </div>
  );
}
