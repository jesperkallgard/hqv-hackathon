---
title: "One product page, real bike, real price"
cycle: 1
pair: "heron"
authors: ["Leo", "Xenia", "Tobias", "Ulla"]
---

A customer standing in front of this page should be able to tell what it is, whether it's good, and what it costs — in that order. No filler copy, no "from $X" teaser price, no lorem ipsum spec.

We picked a real bike so we could test whether actual geometry and component choices change how people read the page, instead of reacting to a fake product.

```block
type: BikeProductPage
data:
  imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80"
  imageAlt: "Trek Checkpoint ALR 5 gravel bike, side profile"
  modelName: "Trek Checkpoint ALR 5"
  price: "$1,899.99"
  specs:
    - label: "Weight"
      value: "10.5 kg (56cm)"
    - label: "Gears"
      value: "Shimano GRX 400, 2x10 (20-speed)"
    - label: "Frame size"
      value: "56cm (47–62cm available)"
  buyLabel: "Buy Now"
```

Left out on purpose: no size selector, no colour picker, no cart, no click handler on Buy Now. Those are the next friction point once this one's proven — this sprint is just "does a real spec sheet and a real price read as trustworthy."
