---
title: The product page
cycle: 1
status: canon
blocks: [BikeProductPage]
---

```block
type: BikeProductPage
data:
  shopName: Pedal & Payload
  nav:
    - Bikes
    - Racks & bags
    - Workshop
    - Basket
  bike:
    name: The Commuter
    tagline: A city bike for people who just need to get there.
    price: 899
    currency: "£"
    weight: 11.2 kg
    weightNote: About as much as a full backpack. You will be carrying it up stairs.
    sizes:
      - { label: S, fits: You're roughly 155–167 cm }
      - { label: M, fits: You're roughly 167–177 cm }
      - { label: L, fits: You're roughly 177–187 cm }
      - { label: XL, fits: You're roughly 187–197 cm }
    points:
      - Upright seating position, so your wrists and lower back stop hurting on the ride to work.
      - Wider 38mm tires soak up potholes and tram tracks — you'll feel fewer jolts, not more speed.
      - 7 gears cover flat commutes and the one hill on your route, without a wall of shifters to learn.
    image:
      alt: The Commuter, side on
  actionLabel: Add to basket
  footerNote: Free 20-minute fitting with every bike. Ride it round the block before you pay.
  footerLinks:
    - Sizing help
    - Returns
    - Find the shop
```

## Why the page is only five things

The page starts from what actually stops someone mid-scroll: *does this fit me,
and can I afford it.* Everything that does not answer one of those two questions
is off the page.

The five things, in this order:

1. **The photo.** Big and clear. It is what people look at first whether or not
   you put it first, so it goes first.
2. **The price.** No digging, no "from", no click-through.
3. **Frame size.** S/M/L/XL as pills you tap, so you can picture yourself on the
   bike instead of reading a geometry table.
4. **The weight**, stated plainly. It is the one number people quietly worry
   about — stairs, bike racks, lifting it onto a train — and the one they almost
   never find without hunting.
5. **Three ride notes.** What the bike feels like, not what it is made of. Not
   "aluminium alloy frame" but "wider tires soak up potholes, you'll feel fewer
   jolts."

The order is the order of the questions, not the order of the catalogue data.
Price sits second because a bike you cannot afford is not worth reading three
paragraphs about first.

## What the page leaves out

Reviews, a colour picker, and any upsell — all deliberate. None of them answer
"does this work for me." They are there to keep somebody on the page, and
keeping somebody on the page is not the same as helping them decide.

The one thing the page adds beyond the five is a single action at the bottom, so
the page can be a product page and not a specimen. It stays unavailable until a
size is chosen, which is also how the page says that size is a decision you have
to make rather than a field you can skip.

Sizes carry a plain height range because a pill labelled "M" tells nobody
anything. If a bike has no size to choose, the pills and the action are simply
not shown; the other four things still stand.

The page is written to hold any bike in the shop. Nothing about The Commuter
lives in the component — swap the data and the same five things appear in the
same order, which is the point. It also means every bike page in the shop is the
same page, and someone comparing two of them is comparing bikes rather than
learning two layouts.

Hazel (Bo & Ada) established the five things, the order, and the exclusions.

<!-- merged: pedal-payload-222651 sprint 1 — Hazel -->
