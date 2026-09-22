---
title: "One number: are you leaving money on the table?"
ingress: "A mid-market CFO pastes in their last three months of bank statements — no login — and the first screen gives them one number: how many basis points they're bleeding against the market rate on their FX."
points:
  - "The audience is one named person, not a department: a mid-market CFO juggling several bank relationships, who can't tell if any of them are giving a market rate."
  - "Their real question is \"am I leaving money on the table?\" — not \"show me my FX exposure\", which is a report, not an answer."
  - "No login required: they paste in recent statements and get their answer before they've committed to anything, because the point is to earn the account, not require one."
  - "The first screen shows one number — their bleed in basis points against a benchmark, over the last three months — not a dashboard of charts they have to interpret."
  - "We refuse to bury the number in context: if they read nothing else, they leave in ten seconds knowing whether they're competitive or not, and only then do they see why."
cycle: 1
pair: "compass"
authors: ["Testina", "Testur", "Testrid", "Testlev"]
---

A mid-market CFO pastes in their last three months of bank statements — no login — and the first screen gives them one number: how many basis points they're bleeding against the market rate on their FX.

- The audience is one named person, not a department: a mid-market CFO juggling several bank relationships, who can't tell if any of them are giving a market rate.
- Their real question is "am I leaving money on the table?" — not "show me my FX exposure", which is a report, not an answer.
- No login required: they paste in recent statements and get their answer before they've committed to anything, because the point is to earn the account, not require one.
- The first screen shows one number — their bleed in basis points against a benchmark, over the last three months — not a dashboard of charts they have to interpret.
- We refuse to bury the number in context: if they read nothing else, they leave in ten seconds knowing whether they're competitive or not, and only then do they see why.

## The audience
A mid-market CFO (or Treasurer) with FX exposure spread across multiple banking relationships. They already suspect they're not getting the best rate somewhere but have no easy way to prove it or size it. They are time-poor and skeptical of another vendor demo.

## What the first screen does, in order
1. A short prompt: paste in your recent bank/FX statements (no login, no account creation gate).
2. We calculate their realised FX rate on those trades against a market benchmark for the same period.
3. The headline is one number: their bleed in basis points over the last three months (e.g. "You lost 34bps vs. market on your FX in the last 3 months" — exact copy/number TBD, but the shape is: a signed bps figure against a named benchmark and named period).
4. Below the headline, enough context to trust the number (which benchmark, which period, how many trades) — but the headline is the takeaway, the context is secondary.

## What they do with the answer
If the number is bad: they either consolidate their FX to us, or take the number back to their existing bank and renegotiate harder. Both are wins for us — the tool's job is just to produce the number that makes either move possible.

## Content specifics we do know
- Benchmark: "market rate" for the same period — the group hasn't picked a specific published benchmark (e.g. WM/Reuters) yet; that's a decision for whoever builds this, flagged as open.
- Time window: last three months, fixed for this version.
- No login, no signup, no account — statement upload only.

## Deliberately out of scope this sprint
- How the statement parsing actually works (OCR, format support) — not decided, don't invent it.
- What happens after the number — the consolidation/renegotiation flow — is a later screen, not this one.
- Multi-currency breakdowns, trend charts, historical comparisons beyond three months — the first screen is one number, not a report.

## Look and feel
Not yet decided — no UX or tone direction has been set for this hackathon. Whoever builds this should treat the number itself as the largest, most prominent thing on the screen; everything else is secondary until direction is set.
