---
title: "The essentials-only bike page"
cycle: 1
pair: "satchel"
authors: ["Dag", "Cleo"]
---

We settled on the smallest page that lets someone decide if they want the bike:

- **Hero image** of the bike — big, first thing you see.
- **Price**, right there, no clicking through to find it.
- **Key specs, in plain language, not spec-sheet jargon** — instead of "16-speed" or raw geometry numbers, say what it means for the rider: how many gears and why that's enough, what the frame is made of and why that matters, what kind of brakes, what size wheels.
- **One buy button.** Prominent, nothing competing with it.
- **Nothing else.** No nav, no footer, no "you might also like." This is the essentials version — if it's not helping someone decide, it's not on the page.

Here it is with real numbers, a mid-range road bike similar to a Specialized Allez:

```block
type: BikeEssentialsPage
data:
  image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=600&fit=crop"
  imageAlt: "Aluminum road bike with drop bars"
  name: "Ridgeline Road 16"
  price: "$999"
  buyLabel: "Buy this bike"
  specs:
    - label: "Frame"
      plain: "Aluminum — light enough to not fight you on hills, tough enough for daily riding. Won't rust, won't break the bank."
    - label: "Gears"
      plain: "16 gears — enough range for hills and flats without you having to think about which one to pick."
    - label: "Handlebars"
      plain: "Drop bars — the curved kind. Let you lean forward for speed on long rides, or sit up for comfort in traffic."
    - label: "Brakes"
      plain: "Rim brakes — simple, light, and easy for any bike shop to fix if something goes wrong."
    - label: "Wheels"
      plain: "700c — the standard road bike size, so tires and tubes are easy to find anywhere."
```

That's the whole page. No jargon left unexplained, no clicking to a second page to find the price.

Nothing left open — the layout, the copy, and the working page are all here.
