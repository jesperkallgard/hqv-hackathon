---
title: "Accessories as checkboxes, feeding one running total"
cycle: 2
pair: "ivy"
authors: ["Ada", "Cleo"]
---

We own accessories and the total. Size and color are somebody else's inputs — we're not rebuilding those.

## What we agreed

**Checkboxes, not a dropdown.** A dropdown only lets you pick one accessory. Nobody buys just one — helmet and lock together is the normal case — so accessories has to be a list you can tick more than one of.

**Three to start: helmet, lock, pump.** Hardcoded, fixed prices, no database. Fake the numbers right in the component — this is a sprint, not a catalogue.

**The total updates live and feeds the existing Buy button.** Not a separate accessories subtotal sitting next to the bike price — one number, bike price plus whatever's ticked, and that's what Buy charges. Matches the canon's "two clicks, nothing behind Buy yet" rule: ticking a box is instant, no extra step to confirm accessories before you can still hit Buy.

**No new friction.** Everything defaults unchecked. A buyer who wants just the bike still gets there in the same two clicks as before — accessories are additive, never a gate.

## What's still open

We talked through the shape but didn't get to lock down actual prices for helmet/lock/pump, or settle exactly where the checkbox list sits relative to the size picker on the page — above the price, below it, or beside the photo. Whoever picks this up next should treat that as a layout decision, not a re-open of "checkboxes win."
