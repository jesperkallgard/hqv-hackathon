---
title: "One bike, one page, no checkout machinery"
cycle: 1
pair: "spruce"
authors: ["Bo", "Cleo"]
---

## What we built

A single product page for one bike. No database, no account system, no real checkout behind it. Someone can look at the bike, pick a size, and hit buy without the page breaking.

- One bike, real numbers: $729, 13.4 kg (heavy for the price — that's the steel fork and rack), 7-speed Shimano Tourney (fine flat, you'll feel hills).
- Stock shown right on the product: "3 in stock." If it were zero, the button turns off and says so.
- A size dropdown — S/M/L/XL with actual cm.
- A Buy button. One click. No payment processed — it logs the bike and size to console and shows "Added: [bike], size [X]" on the page so the click isn't silent.

Follows the shop's tone: plain trade-offs stated as fact, no "elevate your ride" copy. Follows the look: one click from landing to buy, real-feeling image, stock always visible.

```block
type: SpruceBikeProductPage
data: {}
```

Left out on purpose: per-size stock, quantity, anything resembling a real cart or checkout — none of that was needed to prove the point.
