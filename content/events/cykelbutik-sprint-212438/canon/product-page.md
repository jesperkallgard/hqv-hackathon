---
title: The product page
slug: product-page
sprint: 1
status: canon
---

# The product page

One bike, a size picker, a buy button. This is the whole shop so far.

```block
type: BikeProductPage
data:
  name: Trek Marlin 7
  price: 899
  currency: "$"
  summary: >-
    Hardtail mountain bike. Heavier than a carbon bike, but reliable — a good
    first mountain bike, not a race bike.
  specs:
    - { label: Frame, value: Aluminium }
    - { label: Brakes, value: Hydraulic disc }
    - { label: Gears, value: 21-speed }
    - { label: Suspension, value: Front fork only — hardtail }
  photo: https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/TrekMarlin5-PomallucayPer%C3%BA.jpg/1280px-TrekMarlin5-PomallucayPer%C3%BA.jpg
  photoAlt: A Trek Marlin hardtail mountain bike standing on a dirt road in the mountains
  photoNote: >-
    Trek Marlin 5, photographed in Pomallucay, Peru by Lamder (CC BY-SA 4.0).
    A real bike in a real place, standing in until we shoot the Marlin 7 on our
    own floor. No renders, no catalogue cut-outs.
  sizes:
    - { label: S, stock: 2 }
    - { label: M, stock: 4 }
    - { label: L, stock: 1 }
    - { label: XL, stock: 0 }
  defaultSize: M
```

## What was decided

**Stock is counted per size, and it lives on the product.** Not behind a click,
not on a later screen. "In stock" for a bike means nothing; the only question is
whether the one that fits you is in the building.

**XL is out on purpose.** The Buy button refuses it. That trade-off is built in
so the page proves stock status actually blocks a purchase rather than just
displaying it — a page that shows "out of stock" and still takes the money is
worse than no page.

**Two clicks from landing to bought.** Size defaults to M, so anyone taking an M
clicks once. The picker is four buttons rather than a dropdown, because a
dropdown spends both clicks before you ever reach Buy.

**Nothing is behind the Buy button yet.** No cart, no checkout, no routing, no
backend. The click logs `{ bike, size, price }` and says so on the page. That is
the proof the pick was captured; where it goes next is the next sprint's
problem.

Cycle 1 was built by Cricket (Dag & Ada) — the page, the block, and every
decision above are theirs. Folding it in changed one thing: the size dropdown
became buttons, to make their own two-click claim true.

<!-- merged: cykelbutik-sprint-212438 sprint 1 — Cricket -->
