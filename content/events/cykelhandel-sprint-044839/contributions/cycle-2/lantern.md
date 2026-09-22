---
title: "Size dropdown that actually moves the price"
cycle: 2
pair: "lantern"
authors: ["Nils", "Rami", "Iris"]
---

A shop owner doesn't want a spec sheet that just lists "56cm (47–62cm available)" — they want to pick a size and see what it actually costs, right there, before the customer walks off or clicks away.

We took the frame-size row on the Trek Checkpoint ALR 5 page and turned it into a single dropdown. Pick a size, the price above updates immediately. No cart, no backend, no page reload — just the interaction proven to work.

```block
type: BikeProductPageSizeSelector
data:
  shopName: "Cykelhandel"
  navLinks:
    - { label: "Bikes", href: "#" }
    - { label: "Parts", href: "#" }
    - { label: "Service", href: "#" }
  imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80"
  imageAlt: "Trek Checkpoint ALR 5 gravel bike, side profile"
  modelName: "Trek Checkpoint ALR 5"
  specs:
    - { label: "Weight", value: "10.5 kg (56cm)" }
    - { label: "Gears", value: "Shimano GRX 400, 2x10 (20-speed)" }
  sizes:
    - { label: "Small (47cm)", price: 1899.99 }
    - { label: "Medium (56cm)", price: 1949.99 }
    - { label: "Large (62cm)", price: 1999.99 }
  buyLabel: "Buy Now"
  footerNote: "Cykelhandel — free shipping on bikes over $999. 30-day returns."
  footerLinks:
    - { label: "Sizing guide", href: "#" }
    - { label: "Shipping", href: "#" }
    - { label: "Contact", href: "#" }
```

**Why real prices, not placeholders:** we talked through using round throwaway numbers ($29/$34/$39) just to prove the mechanism, but decided that's theater — a shop owner evaluating this wants to see how it behaves with real money on a real bike, so Medium and Large carry a $50 upcharge over the base Small, on top of the actual $1,899.99 Trek price already in the canon.

**What's deliberately still missing:** no stock/backorder note per size, no cart, Buy Now still does nothing. Those are the next friction points once the interaction itself is proven.
