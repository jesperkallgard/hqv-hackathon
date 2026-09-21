---
title: The product page
hackathon: PedalKøb 220850
slug: pedalk-b-220850
cycle: 1
status: in progress
groups: [Orbit]
---

# The product page

```block
type: FixieProductPage
data:
  shopName: PedalKøb
  nav:
    - { label: The numbers, href: "#numbers" }
    - { label: What's on it, href: "#parts" }
    - { label: One rider, href: "#rider" }
    - { label: Price, href: "#buy" }
  name: The Fifth & Main
  tagline: Built for the ride to work, not the ride to nowhere.
  price: 640
  currency: kr
  hero:
    src: ""
    alt: The Fifth & Main on a wet city street, rider clipped mid-pedal at a crossing
    caption: Shot on the morning commute. No studio, no white background.
  specsTitle: The numbers
  specs:
    - { label: Weight, value: 9.1 kg }
    - { label: Frame, value: Chromoly steel }
    - { label: Top tube, value: 545 mm }
    - { label: Wheelbase, value: 985 mm }
    - { label: Gear ratio, value: 46 × 17 }
  partsTitle: What's on it
  parts:
    - name: Tires
      alt: Close-up of the rear tire on cobblestones
      gets: Grippy tires — confident on wet cobbles.
    - name: Crankset
      alt: Close-up of the crankset and chainring
      gets: One gear, picked for city hills. You won't spin out and you won't grind.
    - name: Saddle
      alt: Close-up of the saddle from the side
      gets: Firm enough for an hour, forgiving on the ride home.
    - name: Brakes
      alt: Close-up of the front brake caliper
      gets: A front brake that stops you in the rain, not just when it's dry.
  riderTitle: One rider
  testimonial:
    quote: I bought it to stop paying for repairs. Two winters in, I've changed a tire and nothing else.
    name: Malene R.
    detail: rides it daily, Nørrebro to Islands Brygge
  buyLabel: Add to basket
  addedLabel: Added — no checkout yet
  buyNote: Prototype. The button confirms your pick on this page and goes nowhere else.
  footer:
    note: One shop, one bike, no catalogue. We ride what we sell.
    columns:
      - title: Shop
        lines: ["Jagtvej 112, København N", "Tue–Fri 10–18", "Sat 10–15"]
      - title: Workshop
        lines: ["Walk-in repairs", "Free first service", "We fit the bike to you"]
    fineprint: PedalKøb 220850 — prototype, not a working store.
```

## What this page is

One fixie, one page, aimed at urban commuters. Orbit's argument was that the
order is the product decision, and the order is fixed: hero, then the numbers,
then the parts, then one rider, then the price. Everything before the button
exists so that nobody presses it without knowing what they're getting.

The hero is the bike in use on a city street, not a studio shot — a bike shop
sells a bike that has been outside. The spec list is weight, frame material, top
tube, wheelbase, gear ratio, and nothing dressed around them. The component
photos carry one plain-language caption each, saying what the part gets the
rider ("grippy tires — confident on wet cobbles"), never the spec-sheet name of
the part alone. One testimonial from a named daily commuter, not a review wall.

Orbit was as specific about what the page excludes: no reviews section, no
related products, no marketing copy, no banners. Those are decisions, not
omissions, and they hold until a later sprint argues them down.

The buy button does not go to checkout. It confirms locally — "added — no
checkout yet" — because a fake checkout in a two-hour demo teaches the room
nothing, and a button that lies is worse than a button that is honest about
being a prototype.

## What was added in curation

Orbit built the middle of the page; the header and footer are curation, so the
page can be opened on its own and still be a shop. The header is a shop name and
a way down the page — deliberately no price and no buy button in it. A sticky
buy bar is the standard move and it would break Orbit's one rule, that the price
comes after you know what you're buying.

The photos, the quote and the spec values are sample data. The component renders
a captioned placeholder wherever a photo is missing, so the page holds its shape
before the real photography exists.

## What cycle 1 did not settle

The hackathon goal is a one-page shop where a customer picks a bike *model* and
then configures it. This sprint produced the page structure for one fixed bike,
and that is all it produced. Model picking and configuration are open: nothing
here says whether choosing a model swaps this page's contents in place or sits
above it, and nothing says where options (wheel size, gearing, bars) live
relative to the fixed order. Whatever answers those questions has to keep the
price after the specs, or it is arguing with cycle 1 and should say so.

<!-- merged: pedalk-b-220850 sprint 1 — Orbit -->
