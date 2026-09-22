---
title: "What's changed"
ingress: "One list on the homepage, newest first, nothing else. It answers the three questions people keep asking a colleague instead: what changed this week, what's being tested now, who owns what."
points:
  - "The homepage is one list called \"What's changed\", newest first — no other sections, no dashboard."
  - "Every row is one line: what happened, who owns it, the date."
  - "Ownership answers — like who owns the dealer locator — sit in the same feed as changes and tests, not on a separate page."
  - "There is no search box and no filters. If it's not on the list, it isn't there."
  - "A row only earns its place if it would otherwise be a question to a colleague — so it always names an owner and how often that thing is updated."
cycle: 1
pair: "cleo"
authors: ["Cleo", "Dag"]
---

One list on the homepage, newest first, nothing else. It answers the three questions people keep asking a colleague instead: what changed this week, what's being tested now, who owns what.

- The homepage is one list called "What's changed", newest first — no other sections, no dashboard.
- Every row is one line: what happened, who owns it, the date.
- Ownership answers — like who owns the dealer locator — sit in the same feed as changes and tests, not on a separate page.
- There is no search box and no filters. If it's not on the list, it isn't there.
- A row only earns its place if it would otherwise be a question to a colleague — so it always names an owner and how often that thing is updated.

## What it does
The whole first screen is one list, titled "What's changed". Single column, newest first. No tabs, no sidebar, no search box, no filter dropdown.

## Row format
Each row is one line of text, plus:
- an owner's name
- a date (when it happened, or when it was last confirmed true)

Three kinds of row live in the same list, mixed by date, not split into sections:
1. A change to the site ("what changed this week")
2. A test currently running ("what's being tested right now")
3. An ownership answer ("who owns the dealer locator")

Ownership rows aren't a special case with their own page — they're a row like any other, and they get a new entry whenever the answer changes (owner changes, or the update frequency changes). That's what keeps them newest-first with everything else instead of static and separate.

## Look
White, sparse, a lot of air. Navy headings. Text left-aligned, one column, flat panels, no shadows. Reads like something written, not designed — no cards, no icons, no colour-coding by type.

## Voice
Plain, short lines. Says what changed and what it meant — not "we updated the homepage" but the concrete fact and who it affects.

## Out of scope
No search, no filtering, no categorisation, no pagination controls. If the list gets long, that's a later sprint's problem, not this one's.

## Not decided
Real owner names and real current entries (e.g. the actual name behind the dealer locator today) weren't given in this sprint. The format is fixed; the content needs to come from whoever actually owns those things.
