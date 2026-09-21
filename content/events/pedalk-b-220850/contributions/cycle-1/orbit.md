---
title: "One fixie, one page, in this order"
cycle: 1
pair: "orbit"
authors: ["Cleo", "Ada"]
---

We're building a single product page for one fixie bike, aimed at urban commuters. We settled on a fixed order, and we're deliberate about what's *not* on the page:

1. **Hero** — the bike in action on a city street. Not a studio shot.
2. **Weight and geometry specs** — weight, frame material, top tube length, wheelbase, gear ratio. The numbers that actually matter, no fluff around them.
3. **Component photos** — real photos of crankset, saddle, tires, brakes, each with one plain-language caption saying what it gets the rider (e.g. "grippy tires — confident on wet cobbles"), not spec-sheet jargon.
4. **One testimonial** — a single honest quote from a named daily commuter, not a review wall.
5. **Buy button** — placed *after* the specs and testimonial, not before, so someone knows what they're getting before they decide. Big, obvious, one clear price. For this prototype it doesn't go to checkout — it just confirms locally ("added — no checkout yet") so we can run a 10-minute user test on whether the flow itself makes sense.

Nothing else: no reviews section, no related products, no marketing copy, no banners.

The build finished after the sprint clock, so here it is working, in that exact order:

```block
type: FixieProductPage
data:
  name: "The Fifth & Main"
  tagline: "Built for the ride to work, not the ride to nowhere."
  price: 640
```

Try the buy button — it confirms locally, no checkout, no redirect. That was the whole point of the test.
