---
title: "What's Changed"
ingress: "One list, newest first, on the homepage: what changed on the site, what's being tested, and who owns what. Nothing else on the first screen."
points:
  - "One single list on the front screen — no tabs, no filters, no sections to click between."
  - "Every row is one line: what happened, plus an owner's name and a date."
  - "The list mixes all three kinds of update — site changes, running tests, ownership — instead of splitting them into separate feeds."
  - "No search box. If the list needs searching, it's already too long to read."
  - "Rows say what changed and what it meant, not a task log — a colleague reading it should not need to ask anyone."
cycle: 1
pair: "dag"
authors: ["Ada", "Dag"]
---

One list, newest first, on the homepage: what changed on the site, what's being tested, and who owns what. Nothing else on the first screen.

- One single list on the front screen — no tabs, no filters, no sections to click between.
- Every row is one line: what happened, plus an owner's name and a date.
- The list mixes all three kinds of update — site changes, running tests, ownership — instead of splitting them into separate feeds.
- No search box. If the list needs searching, it's already too long to read.
- Rows say what changed and what it meant, not a task log — a colleague reading it should not need to ask anyone.

## What it is
A page titled **What's Changed**. Below the title, one list, newest entry first. That's the whole first screen — no other panels, no search box, no filters, no tabs.

## Row format
Each row is one line of plain text, plus:
- an owner's name
- a date (last updated / when it happened)

Example rows (Dag asked me to fill these in — these are my reading, not confirmed text, correct them on the next hand-in):

- Homepage hero image swapped for the spring campaign — **Ada**, updated weekly.
- A/B test running on the checkout button colour — **Mia**, checked daily.
- Dealer locator — owned by **Dag**, updated whenever a dealer opens or closes.

## Rules
- Newest first, always. No sorting options.
- One line per row. No expandable detail, no "read more."
- No search, no tabs, no category filters. If the list gets long enough to need search, that's a different problem for a later sprint, not this screen.
- A row states what changed and what it meant — not what task was done. "Checkout button is now orange, to test if it gets more clicks" not "Updated checkout.css."

## Look
Follows the direction: white background, a lot of air, navy heading ("What's Changed"), text left-aligned in one column. Panels flat, no shadows. Owner name and date sit as small round tags next to the line, not as coloured text. No primary button needed on this screen — there is no action to take here, just reading.

## Out of scope this sprint
- No way to add or edit an entry from this screen.
- No search, no filtering, no pagination — assume the list is short enough to scroll.
- Who owns the dealer locator specifically, and what "updated weekly" really means for each item, is our best guess — needs confirming with the room.
