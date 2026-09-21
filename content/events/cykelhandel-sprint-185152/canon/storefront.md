---
title: The Storefront Page
hackathon: Cykelhandel Sprint 185152
goal: >-
  Build a single online storefront page where a customer can pick a bike
  and see it visually configured in real time before buying.
status: living
sprint: 1
blocks:
  - BikePriceConfigurator
---

# The Storefront Page

## What we're building first

We're not building a catalogue yet. We're proving one thing works: pick a bike,
change what matters, see the price move.

One bike on the page. Three choices that actually change what you're paying for
— not colour-of-the-month marketing, real spec differences:

- **Wheel size** — smaller wheels cost less to build, bigger wheels roll better
  on trail, priced accordingly.
- **Component level** — this is where the money really goes. Entry-level
  shifting vs. mid vs. performance groupset.
- **Color** — most colors are free, a couple of gloss finishes cost a little
  more to spray.

Every change updates the total instantly, in the browser. The price delta for
each choice is written into the dropdown itself, so a buyer reads the cost of a
decision before making it.

## What we deliberately left out

No product gallery. No inventory check. No "add to cart," no checkout button.
One page proving the price math works live. Everything a buyer sees is passed
in as data — the page does not go and fetch anything.

That's the honest-specs, no-noise feeling we're going for: show a buyer exactly
what changing this costs you, and nothing else.

## The page as it stands

<BikePriceConfigurator
  title="Trailhead 3 — Used Mountain Bike"
  description="Aluminum hardtail, well looked after, ready to ride this weekend."
  basePrice={650}
  currencySymbol="$"
  options={[
    {
      label: "Wheel Size",
      key: "wheels",
      choices: [
        { label: "26-inch", delta: -30 },
        { label: "27.5-inch", delta: 0 },
        { label: "29-inch", delta: 45 }
      ]
    },
    {
      label: "Component Level",
      key: "components",
      choices: [
        { label: "Entry — Shimano Altus", delta: 0 },
        { label: "Mid — Shimano Deore", delta: 150 },
        { label: "Performance — Shimano SLX", delta: 380 }
      ]
    },
    {
      label: "Color",
      key: "color",
      choices: [
        { label: "Matte Black", delta: 0 },
        { label: "Gloss Red", delta: 20 },
        { label: "Gloss Blue", delta: 20 }
      ]
    }
  ]}
/>

The bike, the three options and the configurator are group Pinecone's work
(Cleo and Bo), carried over intact. The one change made folding it in: the
price delta was being printed twice on every row, once inside the dropdown and
once beside it — it now appears once, and the accent colour is spent on the
total instead.

## Open for the next sprint

The goal says *see it visually configured*. Right now the configurator changes a
number, not a picture. Nobody has built the visual half yet.

<!-- merged: cykelhandel-sprint-185152 sprint 1 — Pinecone -->
