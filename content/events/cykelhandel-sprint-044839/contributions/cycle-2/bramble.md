---
title: "One dropdown, two SKUs, live price"
cycle: 2
pair: "bramble"
authors: ["Karin", "Sara", "Olle", "Dag"]
---

Karin, Sara, Olle and Dag looked at the canon's product page and picked the friction point it already flagged for this sprint: no size selector.

We kept it as small as it can be. One dropdown, two hardcoded sizes, each with its own price. Pick "Size L", the price updates. Pick "Size M", it goes back. No cart, no backend, no animation — just the wiring.

```block
type: BikeProductPageSizeSelect
data:
  shopName: "Cykelhandel"
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
    - { label: "Frame size", value: "56cm (47–62cm available)" }
  sizeOptions:
    - { label: "Size M (54cm)", sku: "M", price: "$1,899.99" }
    - { label: "Size L (58cm)", sku: "L", price: "$1,949.99" }
  buyLabel: "Buy Now"
  footerNote: "Cykelhandel — free shipping on bikes over $999. 30-day returns."
  footerLinks:
    - Sizing guide
    - Shipping
    - Contact
```

Why it matters for a shop owner: a customer standing at a rack sees one price per size on the tag. Online, a page with one price and a size chart three clicks away is exactly the moment they bounce to a competitor's listing that shows the real number for their size. This closes that gap with the least code possible.

Left out on purpose: no stock check per size, no image change per size, no more than two sizes. If it wins, the next thing to decide is whether frame sizes carry stock/availability, not just price.
