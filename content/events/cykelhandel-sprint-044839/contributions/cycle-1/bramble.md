---
title: "One page, one bike, one decision"
cycle: 1
pair: "bramble"
authors: ["Ada", "Hugo", "Yusuf"]
---

A customer walks up to a bike in a shop. They look at it, they read the tag, they decide. That's the whole page.

No reviews section, no upsells, no cross-sells, no "customers also bought." If we can't justify a section by "does this help someone decide fit and budget," it's not on the page.

Order, top to bottom:
1. **Photo** — full width, honest, no gallery yet.
2. **Name + price** — big, unavoidable, first thing you read after the photo.
3. **Three specs, plain bullets** — weight, frame size options, drivetrain. The three things a rider actually checks before anything else.
4. **Add to Cart** — one button, rust-orange, confident, full width. Logs the add for now; wiring up a real cart is next sprint's problem, not this one's.

```block
type: RoadBikeProductPage
data:
  name: "Aldren Road Bike — Aluminum"
  price: "$1,899"
  weight: "9.8 kg"
  frameSizes: "51 / 54 / 56 / 58 cm"
  drivetrain: "Shimano 105, 2x11-speed"
```

Left out on purpose: quantity picker, size-guide interaction, shipping estimate. All three are "next" not "now" — none of them stop someone deciding whether this bike is theirs.
