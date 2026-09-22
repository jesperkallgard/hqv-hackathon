---
title: One product page, real bike, real price
hackathon: Cykelhandel Sprint 044839
sprint: 1
status: canon
blocks:
  - BikeProductPage
contributors:
  - Heron (Leo, Xenia, Tobias, Ulla)
---

# One product page, real bike, real price

```block
type: BikeProductPage
data:
  shopName: Cykelhandel
  navLinks:
    - Bikes
    - Parts
    - Service
  imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80"
  imageAlt: "Trek Checkpoint ALR 5 gravel bike, side profile"
  modelName: "Trek Checkpoint ALR 5"
  price: "$1,899.99"
  specs:
    - { label: "Weight", value: "10.5 kg (56cm)" }
    - { label: "Gears", value: "Shimano GRX 400, 2x10 (20-speed)" }
    - { label: "Frame size", value: "56cm (47–62cm available)" }
  buyLabel: "Buy Now"
  footerNote: "Cykelhandel — free shipping on bikes over $999. 30-day returns."
  footerLinks:
    - Sizing guide
    - Shipping
    - Contact
```

## The order the page has to read in

A customer standing in front of this page should be able to tell what it is,
whether it's good, and what it costs — in that order. Identity, then quality
signal, then price. No filler copy, no "from $X" teaser price, no lorem ipsum
spec.

Heron picked a real bike so the sprint could test whether actual geometry and
component choices change how people read the page, instead of reacting to a
fake product. The three specs are the ones that carry the quality signal for a
gravel bike — weight, drivetrain, frame size — and the frame size line carries
the available range alongside the configured one, which is the first hint that
this page is eventually a configurator.

## What is deliberately not here

No size selector, no colour picker, no cart, and no click handler on Buy Now.
Those are the next friction point once this one's proven; this sprint is just
"does a real spec sheet and a real price read as trustworthy."

That is a deferral, not a disagreement with the goal. Size and colour selection
with a live-updating price is the hackathon, and it lands on this page next
sprint. It lands *on this page*: the price element the selector will drive is
already the single largest piece of type below the model name, and the frame
size row is already where the size control goes. Nothing here has to be torn out
to make room for it.

## Provenance and the one edit

Everything on the page is Heron's (Leo, Xenia, Tobias, Ulla) — the only winning
contribution this sprint. The block is theirs, under their name, with two
changes: a shop header and a footer, so the page can be opened on its own and
judged as a page rather than as a card floating in nothing; and the hardcoded
colour fallbacks dropped in favour of the bare theme tokens, so it survives the
UX Lead changing the theme. The content, the order, and the omissions are
untouched.

<!-- merged: cykelhandel-sprint-044839 sprint 1 — Heron -->
