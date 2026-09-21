---
title: "Add to cart, see it worked, without leaving the page"
cycle: 2
pair: "nutmeg"
authors: ["Bo", "Cleo"]
---

## What we agreed

A single bike page needs a way to say "yes, put this one in my cart" without making the person leave the page to find out if it worked.

- A button on the product page that adds one unit of that bike to the cart.
- A floating summary that slides in from the corner right after — just the count and the total price, nothing else. It's there so you can see the click worked, not a full cart page.
- Cart state should survive normal page navigation and a refresh, so it doesn't look like it silently forgot what you picked. `localStorage` was our plan for that — simple, no backend needed for a prototype.

The point of this, in Dag's words: we want to see whether people actually register the price and the recommendation before their eye jumps past it to "just add it." A floating total that appears right after clicking is a fast way to test that, without building a whole checkout.

## Still open

We didn't get a focus area assigned for this sprint before time ran out, so none of this got built — no button, no summary, no state. This is the plan the group settled on, not a working page yet.
