"use client";

/**
 * Frame-size dropdown for a bike product card that updates the price instantly on selection, showing each size's upcharge (or in-stock/special-order note) right in the option list.
 */
import { useState } from "react";

type FrameSize = {
  label: string;
  upcharge: number;
  note?: string;
};

type FrameSizeConfiguratorProps = {
  modelName: string;
  imageUrl?: string;
  imageAlt?: string;
  basePrice: number;
  currencySymbol?: string;
  sizes: FrameSize[];
  defaultSizeLabel: string;
};

function formatMoney(amount: number, currencySymbol: string): string {
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${currencySymbol}${formatted}`;
}

export default function FrameSizeConfigurator({
  modelName,
  imageUrl,
  imageAlt,
  basePrice,
  currencySymbol = "$",
  sizes,
  defaultSizeLabel,
}: FrameSizeConfiguratorProps) {
  const initialSize =
    sizes.find((s) => s.label === defaultSizeLabel) ?? sizes[0];

  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    initialSize?.label
  );

  const selected =
    sizes.find((s) => s.label === selectedLabel) ?? initialSize;

  const upcharge = selected?.upcharge ?? 0;
  const totalPrice = basePrice + upcharge;

  return (
    <div
      style={{
        fontFamily: "var(--font, inherit)",
        background: "var(--paper, #fff)",
        color: "var(--ink, #1a1a1a)",
        border: "1px solid var(--rule, #ddd)",
        borderRadius: "var(--radius, 6px)",
        padding: "1rem",
        maxWidth: "360px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={imageAlt ?? modelName}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "var(--radius, 6px)",
            marginBottom: "0.75rem",
            border: "1px solid var(--rule, #ddd)",
          }}
        />
      ) : null}

      <div
        style={{
          fontSize: "0.95rem",
          fontWeight: 600,
          marginBottom: "0.65rem",
        }}
      >
        {modelName}
      </div>

      <label
        htmlFor="frame-size-select"
        style={{
          display: "block",
          fontSize: "0.75rem",
          color: "var(--muted, #666)",
          marginBottom: "0.25rem",
        }}
      >
        Frame size
      </label>

      <select
        id="frame-size-select"
        value={selected?.label}
        onChange={(e) => setSelectedLabel(e.target.value)}
        style={{
          width: "100%",
          fontSize: "0.9rem",
          padding: "0.5rem",
          marginBottom: "1rem",
          background: "var(--paper, #fff)",
          color: "var(--ink, #1a1a1a)",
          border: "1px solid var(--rule, #ccc)",
          borderRadius: "var(--radius, 6px)",
          boxSizing: "border-box",
        }}
      >
        {sizes.map((size) => (
          <option key={size.label} value={size.label}>
            {size.label}
            {size.note ? ` — ${size.note}` : ""}
            {size.upcharge > 0 ? ` (+${currencySymbol}${size.upcharge})` : ""}
          </option>
        ))}
      </select>

      <div>
        {upcharge > 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "0.9rem",
                color: "var(--muted, #888)",
                textDecoration: "line-through",
              }}
            >
              {formatMoney(basePrice, currencySymbol)} base
            </span>
            <span
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "var(--accent, #1a1a1a)",
                lineHeight: 1,
              }}
            >
              {formatMoney(totalPrice, currencySymbol)}
            </span>
          </div>
        ) : (
          <span
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "var(--accent, #1a1a1a)",
              lineHeight: 1,
            }}
          >
            {formatMoney(totalPrice, currencySymbol)}
          </span>
        )}
      </div>
    </div>
  );
}
