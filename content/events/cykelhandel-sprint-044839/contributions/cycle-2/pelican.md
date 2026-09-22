---
title: "Size picker with live price and out-of-stock"
cycle: 2
pair: "pelican"
authors: ["Hugo", "Viktor", "Frank"]
---

The friction we saw: a customer standing at the product page has no way to say "which one am I actually buying" before the price means anything. Size changes price, and one size is often out of stock — right now that's invisible until checkout.

So: same Trek Checkpoint ALR 5 page as the canon, one thing added between the price and the specs — three plain radio buttons for size. Click one, the big price updates. If the size picked is out of stock, an "Out of stock" label appears right under the price and Buy Now disables and relabels itself. Pick an in-stock size, both go away.

No cart, no colour picker, no animation. Hardcoded to three variants:

```block
type: BikeProductPageSizeRadios
data:
  shopName: Cykelhandel
  navLinks:
    - Bikes
    - Parts
    - Service
  imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80"
  imageAlt: "Trek Checkpoint ALR 5 gravel bike, side profile"
  modelName: "Trek Checkpoint ALR 5"
  specs:
    - { label: "Weight", value: "10.5 kg (56cm)" }
    - { label: "Gears", value: "Shimano GRX 400, 2x10 (20-speed)" }
    - { label: "Frame size", value: "47-62cm available" }
  sizes:
    - { label: "52cm", price: "$1,849.99", inStock: true }
    - { label: "56cm", price: "$1,899.99", inStock: true }
    - { label: "60cm", price: "$1,949.99", inStock: false }
  buyLabel: "Buy Now"
  outOfStockLabel: "Out of stock"
  footerNote: "Cykelhandel — free shipping on bikes over $999. 30-day returns."
  footerLinks:
    - Sizing guide
    - Shipping
    - Contact
```

Why 60cm and not a colour or a component: size is the variant that actually changes price and stock on a real bike, and it's the exact slot the canon page already left open next to the frame-size spec line. This is the smallest working version of "configure and see the price move" — the next step, if the room wants it, is a second attribute (colour, wheel size) stacked the same way.
