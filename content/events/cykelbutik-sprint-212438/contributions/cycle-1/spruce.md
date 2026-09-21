---
title: "One bike, one page, no checkout machinery"
cycle: 1
pair: "spruce"
authors: ["Bo", "Cleo"]
---

## What we're building

A single product page for one bike. Nothing behind it — no database, no account system, no real checkout. The point is to prove someone can look at a bike, pick a size, and hit buy without the page breaking.

On the page:
- One bike: image, plain description, price, specs (weight, gearing, frame material) — stated as fact, trade-offs included if the bike has any (heavy, basic gearing, whatever's true).
- Stock status shown right on the product — in stock with a count, or out of stock and the button turns off.
- A size dropdown — realistic sizes, not placeholder text.
- A Buy button. One click. It doesn't process payment — it logs the bike and the chosen size to the console and shows a small on-page confirmation ("Added: [bike], size [X]") so the click isn't silent.

Follows the shop's tone: real numbers, real trade-offs, no "elevate your ride" copy. Follows the look: fast, tactile, honest, real-feeling placeholder image rather than stock photography, buy reachable in one click.

## What's open

We handed this to the builder to turn into an actual working component, and the sprint clock ran out before it came back. The decision on scope and copy direction above is settled — what's not yet in hand is the built, clickable page itself. That still needs finishing and committing as a working component next.
