---
title: Trailhead 3 — product page
sprint: Cykelhandel 224241
cycle: 1
status: canon
page: true
groups: [Willow]
---

# Trailhead 3

```block
type: Trailhead3ProductPage
data:
  shop:
    name: Cykelhandel
    nav:
      - Bikes
      - Service
      - Find us
  bike:
    name: Trailhead 3 Mountain Bike
    basePrice: 6200
    currency: kr
  sizes:
    - { id: S, label: S, fit: "158–170 cm", delta: -150, stock: 4 }
    - { id: M, label: M, fit: "168–180 cm", delta: 0, stock: 1 }
    - { id: L, label: L, fit: "178–192 cm", delta: 150, stock: 0 }
  colors:
    - { id: black, label: Black, swatch: "#1c1c1c", delta: 0 }
    - { id: red, label: Red, swatch: "#b3261e", delta: 200 }
    - { id: blue, label: Blue, swatch: "#1f4f9c", delta: 350 }
  footer:
    lines:
      - Prices include VAT.
      - Free assembly and a fit check when you pick it up.
      - 14-day returns, unridden.
```

## Decisions

The page is Willow's (Bo, Dag), design and content both. One bike, five things
about it: image, size, colour, price, stock. Everything else the room proposed
for this page was cut by them and stays cut.

Price is base plus size adjustment plus colour adjustment, and the page shows
the arithmetic rather than a single number, because a shopper who picks Blue and
sees the price jump 350 kr deserves to see which choice did it.

Stock is shown per size, including zero. L is out of stock today and the page
says so on the button, before you click it — the shop owner's complaint was
customers configuring a bike for ten minutes and finding out at checkout. An
out-of-stock size is still selectable: you can read its fit and its price, you
just can't have it yet.

Rider height ranges are not Willow's. The sprint goal asks for fit guidance and
S/M/L alone isn't guidance, so the ranges are in the data as a placeholder. The
shop confirms them against the real geometry before this goes live.

The image is drawn in the component and tinted with the colour's swatch value.
There is no photography yet and a block cannot fetch one, so the silhouette is
what ships until three photos arrive as props.

Willow argued the page carries no reviews, no specs and no lifestyle copy. The
brief asked for specs and honest reviews from real riders, so this is a live
disagreement and not a gap: their case is that a spec table makes the page feel
like a database, and that the three questions — how it rides, what it costs, who
it's for — are answered by the image, the price and the fit range. Cycle 2 either
gets real review data from the shop or drops the line from the brief. It does not
get a spec table by default.

Willow also ruled out cart and checkout. So the page answers "can I get it" and
then stops. That is the sharpest open question going into cycle 2: reserve in
store, or a real basket.

### Open for cycle 2

- Product photography, three files, one per colour. Replaces the silhouette.
- Reviews and specs: settle the disagreement above.
- A way to actually buy or reserve the bike.
- Confirm the rider height ranges with the shop.
- Footer terms are placeholders; swap in the shop's real ones.
- Closed this cycle: Willow's "wire it up as a real clickable component."

<!-- merged: cykelhandel-sprint-224241 sprint 1 — Willow -->
