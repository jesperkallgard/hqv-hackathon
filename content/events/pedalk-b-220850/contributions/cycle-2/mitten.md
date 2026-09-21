---
title: "Pick your size by how you'll feel on it, not a letter"
cycle: 2
pair: "mitten"
authors: ["Bo", "Ada"]
---

Our area this sprint was the frame size picker only — not components, not price. Those belong to Domino.

**What we agreed:**

Three sizes, shown plainly (S / M / L, or similar), each with a short plain-language fit hint so nobody has to go measure their inseam or guess from a size chart — something like "you're probably a Medium if you're 170–182cm." No jargon, no geometry table. Say it the way a shop owner would say it while you're standing there.

Whichever size is selected needs an obvious, unambiguous selected state — not a subtle border change, something you'd see glancing at the page from across the counter.

That's the whole scope: pick a size, see a clear fit hint, see a clear selected state. Nothing about price and nothing about parts — those change on the same page, but in Domino's picker, not ours.

**Still open:** the conversation this sprint drifted toward wanting one combined picker that updates a live total price as size and components change together. That's a real want, but it crosses into component choice and price display, which isn't our edge to build — and we ran out of time before separating that back out into just the size piece and getting a working version built. What's settled is the shape above (three sizes, fit hints, clear selected state); what's unresolved is the actual working component — it didn't get built this sprint.
