---
title: "SKU dropdown that updates price and stock live"
cycle: 2
pair: "ember"
authors: ["Elin", "Xenia", "Cleo", "Jonas"]
---

A customer picking between two versions of the same bike shouldn't have to leave the page to know if the one they want is even available. This is a single dropdown — Standard or Premium — that updates the price and a stock badge the moment you pick an option. No page reload, no API call, just a JSON object with the two SKUs sitting behind it.

Why this friction point: on a bike shop floor, the question right after "what does it cost" is "can I actually have it today." A price that updates but doesn't say whether the thing exists in the shop is half the answer.

```block
type: SkuStockSelector
data:
  modelName: "Trek Checkpoint ALR 5"
  skus:
    - id: standard
      label: Standard
      price: "$1,899.99"
      inStock: true
    - id: premium
      label: Premium
      price: "$2,399.99"
      inStock: false
  defaultSkuId: standard
```

## What's deliberately left out

Only two SKUs, hardcoded — no more variants, no colour, no size interaction with this control (that's the frame-size configurator's job, not this one's). No cart or buy button wired to it. No currency logic — prices are plain formatted strings. This is the smallest version that proves the idea: pick a version, see the real price and the real answer to "is it in stock," instantly.
