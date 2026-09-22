"use client"

import { useState } from "react"

type Sku = {
  id: string
  label: "Standard" | "Premium"
  price: string
  inStock: boolean
}

type SkuStockSelectorProps = {
  modelName?: string
  skus: [Sku, Sku]
  defaultSkuId?: string
}

export default function SkuStockSelector({
  modelName,
  skus,
  defaultSkuId,
}: SkuStockSelectorProps) {
  const [selectedId, setSelectedId] = useState(
    defaultSkuId && skus.some((s) => s.id === defaultSkuId)
      ? defaultSkuId
      : skus[0].id
  )

  const selected = skus.find((s) => s.id === selectedId) ?? skus[0]

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        maxWidth: "320px",
        fontFamily: "inherit",
        color: "var(--ink)",
      }}
    >
      {modelName ? (
        <div
          style={{
            fontSize: "0.85rem",
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: "0.03em",
          }}
        >
          {modelName}
        </div>
      ) : null}

      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
        <label
          htmlFor="sku-select"
          style={{ fontSize: "0.85rem", color: "var(--muted)" }}
        >
          Version
        </label>
        <select
          id="sku-select"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          style={{
            padding: "0.5rem 0.6rem",
            fontSize: "1rem",
            color: "var(--ink)",
            background: "var(--paper)",
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
          }}
        >
          {skus.map((sku) => (
            <option key={sku.id} value={sku.id}>
              {sku.label}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "var(--ink)",
        }}
      >
        {selected.price}
      </div>

      <div
        style={{
          display: "inline-block",
          width: "fit-content",
          padding: "0.25rem 0.6rem",
          fontSize: "0.85rem",
          border: "1px solid",
          borderRadius: "var(--radius)",
          borderColor: selected.inStock ? "var(--accent)" : "var(--rule)",
          color: selected.inStock ? "var(--accent)" : "var(--muted)",
          background: "var(--paper)",
        }}
      >
        {selected.inStock ? "In stock" : "Out of stock"}
      </div>
    </div>
  )
}
