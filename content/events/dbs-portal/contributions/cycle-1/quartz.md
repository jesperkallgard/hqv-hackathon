---
title: "One table, sorted by status, not by team"
ingress: "A DBS colleague checking whether a test has already run, and someone outside DBS checking whether something is live — both land on the same table, not a dashboard."
points:
  - "Two named audiences: a DBS teammate about to run a test, checking if it's already been done; someone outside DBS checking what's live now, without booking a meeting."
  - "The first screen is one table, not a dashboard: Test, Status, Result, Owner, Updated. No hero, no charts, no filters panel — the table is the whole screen."
  - "It's grouped by status first, not by team or date: Rolled out, Running, Decided against. That's the question people actually bring, not who ran it or when."
  - "It refuses to list anything without a named owner and an update frequency next to it. No owner, no row."
  - "No search box as the way in. You land already looking at the current state; search is for finding something you know exists, not for finding out what exists."
cycle: 1
pair: "quartz"
authors: ["Testolof", "Testmar", "Testur", "Testa"]
---

A DBS colleague checking whether a test has already run, and someone outside DBS checking whether something is live — both land on the same table, not a dashboard.

- Two named audiences: a DBS teammate about to run a test, checking if it's already been done; someone outside DBS checking what's live now, without booking a meeting.
- The first screen is one table, not a dashboard: Test, Status, Result, Owner, Updated. No hero, no charts, no filters panel — the table is the whole screen.
- It's grouped by status first, not by team or date: Rolled out, Running, Decided against. That's the question people actually bring, not who ran it or when.
- It refuses to list anything without a named owner and an update frequency next to it. No owner, no row.
- No search box as the way in. You land already looking at the current state; search is for finding something you know exists, not for finding out what exists.

## What the first screen shows
A single table, navy header row, alternating light grey rows, no shadows, flat panel, left-aligned, one column layout — matches the internal-document direction, not a dashboard.

Columns, left to right: **Test / Status / Result / Owner / Updated**.

Rows grouped under three status headings, in this order:
1. Rolled out
2. Running
3. Decided against

Example rows (illustrative content, using the one concrete result the room already has):

| Test | Status | Result | Owner | Updated |
|---|---|---|---|---|
| Sticky nav on checkout | Rolled out | Checkout starts up 11% | CRO team | weekly |

Every row must carry an owner name/team and an update cadence ("weekly", "on change"). A row with neither is not shown — this is a hard rule, not a style preference.

## The two audiences and what they need
- **DBS colleague, about to run something similar.** Needs to check fast whether this has already been tried, and what happened, before asking a colleague. The first screen has to answer that from the status heading and the Result column alone, no click required.
- **Someone outside DBS** (store/country manager, or anyone not in the building). Needs current rollout status without a meeting. Same table serves them — no separate "external" view, no jargon or DBS acronyms in the Result column, written so a reader who doesn't work in DBS follows it.

We considered a third audience (a decision-maker weighing a similar call) but decided their need — "what was the reasoning" — is the same table plus a click into the post, not a different first screen. That's for a later sprint, not this one.

## Out of scope this sprint
- The individual post page (what's inside "Result" when you click through) — not decided yet, next sprint's question.
- Filtering/search UI — deliberately absent from the first screen; whether it exists at all is open.
- Any login or audience-gating — assumed not needed, since the whole point is that outsiders can follow along without one.

## Assumption made because the clock ran out
We did not settle whether "Decided against" tests should show a Result at all. We assumed yes, they stay, with the actual negative result written plainly — because a decision and its reason not showing up is exactly the "ask a colleague" case this is meant to remove. That's the open point for next time.
