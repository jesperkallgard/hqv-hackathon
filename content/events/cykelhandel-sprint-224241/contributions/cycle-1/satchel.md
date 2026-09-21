---
title: "Size, color, price — one bike, live"
cycle: 1
pair: "satchel"
authors: ["Ada", "Cleo"]
---

One bike. Two dropdowns — size and color. Change either one and the price and photo update together. No spec-dump, no extra fields.

Hardcoded for now: S/M/L, Black/Red/Blue, nine prices, one placeholder photo per color. Enough to prove the mechanic works before we wire it to real inventory and real photos.

```block
type: BikeConfigurator
data:
  bikeName: Trailhead
  sizes: ["S", "M", "L"]
  colors: ["Black", "Red", "Blue"]
  prices:
    S: { Black: 1200, Red: 1250, Blue: 1230 }
    M: { Black: 1250, Red: 1300, Blue: 1280 }
    L: { Black: 1300, Red: 1350, Blue: 1330 }
  images:
    Black: "https://placehold.co/600x400/111111/FFFFFF?text=Black+Bike"
    Red: "https://placehold.co/600x400/CC3333/FFFFFF?text=Red+Bike"
    Blue: "https://placehold.co/600x400/2255AA/FFFFFF?text=Blue+Bike"
```
