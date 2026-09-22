---
title: "Frame size picker that shows the upcharge before you click"
cycle: 2
pair: "falcon"
authors: ["Petra", "Gita", "Yusuf", "Leo"]
---

Sizing is where a bike shop actually loses margin on a "simple" order: 47cm and 62cm frames aren't sitting on the shop floor the way 52 and 56 are — they're special-order or custom-build, and that costs the shop money it has to recover somewhere. Customers never see that until they're already at the till, if at all. So we put it on the product page instead: pick a size, see the real price, no surprise later.

No backend, no cart wiring — just the dropdown and the price reacting to it, using the frame size range that's already on the canon page.

```block
type: FrameSizeConfigurator
data:
  modelName: "Trek Checkpoint ALR 5"
  imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80"
  imageAlt: "Trek Checkpoint ALR 5 gravel bike, side profile"
  basePrice: 1899.99
  currencySymbol: "$"
  defaultSizeLabel: "56cm"
  sizes:
    - { label: "47cm", upcharge: 50, note: "Special order" }
    - { label: "52cm", upcharge: 0 }
    - { label: "56cm", upcharge: 0, note: "most popular" }
    - { label: "62cm", upcharge: 75, note: "Custom build" }
```

## Why upcharges instead of a flat "call for pricing"

A flat price hides the real cost structure and either eats the shop's margin quietly or gets clawed back at checkout as a surprise. Showing "+$50" or "+$75" right in the dropdown means the customer picks their real size and sees their real price in the same second — no back-and-forth, no abandoned cart over a phone call.

## What's deliberately not here

No inventory check, no "only 2 left" messaging, no colour or component swaps — this is the size-to-price link only. The upcharge amounts are placeholders a shop would set per model; the mechanism is what we're proving.
