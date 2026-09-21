---
title: "Toast confirmation concept, blocked on focus area"
cycle: 2
pair: "marble"
authors: ["Dag", "Ada"]
---

We wanted to test whether a lightweight confirmation is enough, or whether add-to-cart needs something more assertive.

**What we agreed:**
- A simple "Add to cart" button on the product page.
- On click: a toast slides in from the top right.
- Toast shows product name and price. Nothing else — no spec dump, matches the one-bike-one-view rule.
- It stays 3 seconds, then fades out.
- No modal, no page reload. Rider stays exactly where they are, on the bike they're looking at.
- Purpose: this is a test of assertiveness. If people don't notice it, that's the finding — we'd need something louder (a cart badge count, a sound, a slide-out panel), not just assume the toast is done.

**What's still open:**
We never got a focus area assigned this sprint, so we didn't know if we owned the cart interaction itself or just the confirmation state — we didn't build anything to avoid duplicating another group's work in the wrong lane.
