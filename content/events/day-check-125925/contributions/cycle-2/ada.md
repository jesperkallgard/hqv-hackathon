---
title: "Needs a Check"
ingress: "A short list at the top of the page naming everything currently stale, so you see it before you read anything else — not another version of the owner table."
points:
  - "It lists only what is stale right now — owner table rows marked \"Needs a check\", nothing that is current."
  - "One line per item: the area and since when it hasn't been checked. No explanation of why."
  - "It sits above the log and the owner table, so it's the first thing on the page, not something you find by reading the table."
  - "If nothing is stale, the list says so in one line rather than disappearing — an empty page looks broken, a line that says \"nothing to flag\" doesn't."
  - "It never guesses a reason for the staleness or chases anyone — it names the gap and leaves the owner to close it."
cycle: 2
pair: "ada"
authors: ["Ada", "Bo"]
---

A short list at the top of the page naming everything currently stale, so you see it before you read anything else — not another version of the owner table.

- It lists only what is stale right now — owner table rows marked "Needs a check", nothing that is current.
- One line per item: the area and since when it hasn't been checked. No explanation of why.
- It sits above the log and the owner table, so it's the first thing on the page, not something you find by reading the table.
- If nothing is stale, the list says so in one line rather than disappearing — an empty page looks broken, a line that says "nothing to flag" doesn't.
- It never guesses a reason for the staleness or chases anyone — it names the gap and leaves the owner to close it.

## Where this comes from
Ada didn't specify further this sprint beyond "a list of some kind, hand it in as it is." This was built from the one gap the canon names outright: the owner table already has a "Needs a check" state (Stock/dealer feed, Search), but it's buried in a table someone has to read in full to notice. This list surfaces exactly that, pulled from the same data — it does not introduce a new concept.

## What it is
- A short list, plain text, one line per stale item: e.g. "Stock and dealer system feed — not checked since 28 February."
- Pulled directly from the owner table's `current: false` rows. Not a separate data source, not a new field to maintain.
- Sits at the top of the page, above the log.

## Look and feel
Same as the rest of the page: white, sparse, navy heading, left-aligned, flat, no shadows, no icons, no colour-coding beyond the navy heading. It should read like a short note someone wrote at the top of a page, not a warning banner or an alert box.

## Tone
Plain and concrete, matching the rest of the page. States the fact ("not checked since 28 February"), not an opinion about it.

## Out of scope
- No auto-chasing, no notifications to the owner.
- No reasons or excuses attached to an item — that's the owner's post to write, not this list's job.
- Does not touch the log's posts, only the owner table's state.

## Open
Whether "stale" is defined only by the owner table's `current` flag, or also by a cadence in the log going unmet (e.g. "checked every sprint" with no post since) — not settled this sprint. Built here against the owner table only, since that's what's already flagged in canon.
