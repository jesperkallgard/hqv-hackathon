---
title: "Stale is counted, not claimed"
ingress: "Ada's read of a short conversation: a row goes stale after three weeks untouched, and the site says so on its own — nobody has to notice and type it in."
points:
  - "Stale is a computed state, not a written one: any entry untouched for 21 days shows a stale note, worked out from its own \"updated\" date rather than someone typing \"not touched in 10 weeks\" by hand."
  - "The rule applies everywhere an owner and a cadence appear, not just Rollout Status — a Playbook or a Decision nobody has touched in three weeks is exactly as dangerous as a stale rollout."
  - "The note stays plain text next to the date — no colour, no icon, no badge — because the direction says flat panels and this is a fact, not a warning light."
  - "Owners checking their own rows every Monday still stands from sprint 1, but Monday is when someone acts on the flag, not what causes it to appear — the flag itself is always on."
  - "Below 21 days an entry shows only its date, nothing else — there is no in-between \"getting old\" state, because a threshold that hedges is a threshold nobody trusts."
cycle: 2
pair: "ada"
authors: ["Bo", "Ada"]
---

Ada's read of a short conversation: a row goes stale after three weeks untouched, and the site says so on its own — nobody has to notice and type it in.

- Stale is a computed state, not a written one: any entry untouched for 21 days shows a stale note, worked out from its own "updated" date rather than someone typing "not touched in 10 weeks" by hand.
- The rule applies everywhere an owner and a cadence appear, not just Rollout Status — a Playbook or a Decision nobody has touched in three weeks is exactly as dangerous as a stale rollout.
- The note stays plain text next to the date — no colour, no icon, no badge — because the direction says flat panels and this is a fact, not a warning light.
- Owners checking their own rows every Monday still stands from sprint 1, but Monday is when someone acts on the flag, not what causes it to appear — the flag itself is always on.
- Below 21 days an entry shows only its date, nothing else — there is no in-between "getting old" state, because a threshold that hedges is a threshold nobody trusts.

## What this closes from the canon

Sprint 1 left two things open: how often "last updated" is actually checked, and what threshold makes a row stale. This answers the second one directly, and answers the first by separating "when the flag appears" (automatic, 21 days) from "when someone acts on it" (Monday, per the existing owner note).

## The rule

- Every entry that has an `updated` date gets checked against today: 21 days or more since that date = stale.
- Under 21 days: show the date only, as now (e.g. "updated 2024-06-11"). Nothing added.
- At or over 21 days: show the date plus a stale note in the same line, same weight of text: "Not touched in 3 weeks" (round to whole weeks). This replaces the hand-written `stale:` string used for the two rollouts in sprint 1's build — those become computed instead of authored.

## Where it applies

All four sections on the index: Playbooks, Test Results, Rollout Status, Decisions — anywhere a row carries an owner and a date. Not just Rollout Status. A playbook nobody has updated in two months is the exact case this site exists to catch.

## What it does not do

- No colour change, no icon, no badge, no highlighted row. The direction is flat panels and no shadows — a stale row looks like every other row except for the extra clause of text.
- No "almost stale" or amber state. One threshold, one label, nothing in between.
- Does not change who is allowed to update a row, or add a workflow for clearing the flag — clearing it is just: someone edits the row, the date moves, the flag goes.

## Open

The 21-day number and the exact wording ("Not touched in N weeks") are this group's best guess, not something the room has agreed — worth checking against Bo's Monday-check note before it's treated as final. If the room prefers a different number, that's a one-line change, not a redesign.
