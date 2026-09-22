---
title: "What's changed"
ingress: "One feed, newest first, answering the three things people keep asking: what changed, what's being tested, who owns what."
points:
  - "The whole first screen is one feed called \"What's changed\" — no dashboard, no sections, no search box."
  - "Every row is one line: what happened, who owns it, and the date it was last touched. Nothing else on the row."
  - "Newest first, and it holds all three things people ask about — site changes, live tests, and ownership — in the same list."
  - "Ownership is a row like any other. It moves back to the top whenever it's confirmed or changes, dated the same way as a change or a test."
  - "No filters, no categories, no search bar. If it isn't in the list, it hasn't happened yet."
cycle: 1
pair: "bo"
authors: ["Bo", "Cleo"]
---

One feed, newest first, answering the three things people keep asking: what changed, what's being tested, who owns what.

- The whole first screen is one feed called "What's changed" — no dashboard, no sections, no search box.
- Every row is one line: what happened, who owns it, and the date it was last touched. Nothing else on the row.
- Newest first, and it holds all three things people ask about — site changes, live tests, and ownership — in the same list.
- Ownership is a row like any other. It moves back to the top whenever it's confirmed or changes, dated the same way as a change or a test.
- No filters, no categories, no search bar. If it isn't in the list, it hasn't happened yet.

## What it is

A single page, titled **What's changed**. One column, newest entry at the top. No tabs, no sections, no search box — the whole point is that there is one place to look, not three.

## Row format

Every row is the same shape, whatever kind of entry it is:

`<one line of what happened> — <owner's name>. <date>`

Test entries also carry a small round status tag (per direction: states are round tags, not coloured words) — e.g. `Live` or `Ended`.

## Example rows (newest first)

- **Sticky nav moved to the top of the product page** — Bo. 14 rows tested, checkout starts up 11%. `Live` — 3 June
- **Dealer locator** — owned by Cleo. Checked every Monday. — 29 May
- **Homepage hero swapped for the What's Changed feed** — Bo. — 22 May
- **New dealer onboarding flow** — Cleo. `Ended` — 18 May

(Names are the two people who own things today, Bo and Cleo — real owners get swapped in as the site grows.)

## What it refuses to do

- No search box, no filters, no categories, no tags to browse by.
- No separate "ownership" page or pinned strip — ownership entries sit in the same newest-first list as everything else, dated like everything else.
- No entry without an owner's name and a date. An entry with neither doesn't go up.

## Look and feel

Follows the day's direction as set: white, a lot of air, navy headings, left-aligned, one generous column. Flat panels, no shadows. The one primary action (if there is one, e.g. "Add an update") is an orange pill with white text; anything else is an outlined navy pill. Test status is a small round tag, not a coloured word.

## Open

Who can add a row, and whether there's a limit on how far back the feed shows, hasn't been decided yet — out of scope for this sprint.
