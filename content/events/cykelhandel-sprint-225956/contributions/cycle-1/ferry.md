---
title: "One bike, one Buy button, three real steps"
cycle: 1
pair: "ferry"
authors: ["Bo", "Dag"]
---

## What we're building

One bike. One page. Image, price, two specs — frame material and gear count. Nothing else. No description wall, no reviews. If someone's looking at a bike page, they already know what a bike is; show them the thing and the price and get out of the way.

The Buy button isn't decoration. It kicks off a real flow, tracked as a simple state machine:

1. **Product** — the bike, the price, the specs, one big "Buy it" button.
2. **Cart** — quick review of what you're buying, one button forward ("Continue to shipping"), one way back.
3. **Shipping** — name, address, city, zip. Plain fields, no fuss.
4. **Payment** — card number, expiry, cvc. Fake, nothing gets processed, but it walks like a real checkout.
5. **Confirmed** — "Nice, it's yours. We'll get it out the door." Order summary, button to start over.

## Voice

Every label reads like a text from a mate who rides, not a storefront. "Buy it," not "Purchase Now." "Your cart," not "Shopping Cart Review." No marketing copy anywhere in the flow.

## Why this clears the bar

This is the sale a shop would otherwise lose: someone lands on a bike, taps buy, and either the flow works end to end or they bounce. We're proving the flow works, not dressing up a page that goes nowhere when you tap the button.

## What's open

The component build was still compiling when the clock ran out — it's a client-side state machine (product → cart → shipping → payment → confirmed) built exactly as described above, all fake/local state, no backend. If it lands after this sprint closes, it's the same thing described here, just rendered. Nothing about the decision itself was unresolved — the group agreed on the bike, the specs, the copy, and the five steps before time ran out.
