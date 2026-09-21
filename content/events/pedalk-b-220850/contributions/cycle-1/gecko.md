---
title: "One bike, one scroll: hero, three specs, buy"
cycle: 1
pair: "gecko"
authors: ["Bo", "Dag"]
---

We're building the product page for one specific gravel bike, not a general template.

**The page, top to bottom, and nothing else:**

1. **Hero** — a photo of someone actually riding the bike on rough terrain. Not a studio shot. The bike name and one honest line under it — no tagline written by a marketing department.
2. **Three specs, right below the fold** — weight, tire clearance, price. These are the three things that make someone leave the page, so we answer them before they can. Each one gets a plain-English line next to the number: not "9.8kg" on its own, but "light enough to carry up stairs without cursing." No component jargon anywhere.
3. **One buy button.** Honest, plain, not salesy — "Take it for a ride — $2,400" rather than "Add to Cart."

No product description section. No reviews. The bet: if the photo sells the feeling and the three numbers are good, people click. If it doesn't work, that's a five-minute conversation, not a wall of copy nobody reads.

This is also where we set the room's tone for the day: talk to someone frustrated with buying bikes, cut the spec-sheet language, say what they actually get, sound like a shop owner who rides — not a brochure.

Here's the page, working:

```block
type: GravelBikeHero
data:
  name: "The Gravel Line"
  tagline: "Built to be ridden, not photographed."
  heroImageUrl: "https://picsum.photos/1600/900?random=1"
  heroImageAlt: "Rider descending a gravel road in the woods"
  specs:
    - label: "Weight"
      value: "9.8 kg"
      note: "Light enough to carry up stairs without cursing."
    - label: "Tire Clearance"
      value: "45mm"
      note: "Room for the knobby tires when the road turns to mud."
    - label: "Price"
      value: "$2,400"
      note: "No hidden 'kit' you're expected to buy after."
  ctaLabel: "Take it for a ride — $2,400"
  ctaHref: "https://example.com/checkout"
```
