---
title: "Size dropdown, price updates inline"
cycle: 2
pair: "otter"
authors: ["Ada", "Zara", "Tobias"]
---

One control, doing one job: pick a size, watch the price change. That's the whole test this sprint — does a live price feel trustworthy, or does it feel like a trick.

We kept the rest of the canon page as-is (photo, model name, spec bullets, Add to Cart) and replaced the static frame-size line with the dropdown, sitting right next to the price it drives. Three sizes, three real prices — 54cm/56cm/58cm at $1,899/$1,949/$1,999 — so the number actually moves when you click, not just theoretically.

```block
type: BikeSizePriceDropdown
data:
  model: "Aldren Road Bike — Aluminum"
  sizeOptions:
    - { size: "54cm", price: 1899 }
    - { size: "56cm", price: 1949 }
    - { size: "58cm", price: 1999 }
  weight: "9.8 kg"
  drivetrain: "Shimano 105, 2x11-speed"
```

Default size on load is the middle one (56cm), so the page never opens looking unpriced.

**Open, not settled:** the facilitator hadn't split this sprint into focus areas when we built this, so we don't know yet whether "the configurator" is our whole area or just one piece of it (colour, accessories, and a real cart are the obvious next pieces nobody's claimed). We ran with the dropdown because it was the most direct answer to "see the price update before buying."
