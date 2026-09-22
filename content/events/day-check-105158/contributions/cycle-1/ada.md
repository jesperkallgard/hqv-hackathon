---
title: "What's changed"
ingress: "One list, newest first, that answers the three things people keep asking a colleague instead: what changed, what's being tested, who owns it."
points:
  - "One screen, one list, newest first — no dashboard, no sections, no tabs to click between."
  - "Only three kinds of row belong here: something changed on the site, something is being tested, or an ownership fact like who owns the dealer locator."
  - "Every row is one line: a plain type word, the fact in plain words, the owner's name, and when it was last updated."
  - "No search box. Nothing to filter, sort, or configure — if it's not worth seeing on the one list, it's not worth adding."
  - "A row only earns its place if it would stop someone asking a colleague; it always names an owner and how often it's kept current."
cycle: 1
pair: "ada"
authors: ["Ada", "Bo"]
---

One list, newest first, that answers the three things people keep asking a colleague instead: what changed, what's being tested, who owns it.

- One screen, one list, newest first — no dashboard, no sections, no tabs to click between.
- Only three kinds of row belong here: something changed on the site, something is being tested, or an ownership fact like who owns the dealer locator.
- Every row is one line: a plain type word, the fact in plain words, the owner's name, and when it was last updated.
- No search box. Nothing to filter, sort, or configure — if it's not worth seeing on the one list, it's not worth adding.
- A row only earns its place if it would stop someone asking a colleague; it always names an owner and how often it's kept current.

## What it is
A single page, one column, one list titled **What's changed**. Newest entry at the top. Nothing else on the screen — no filters, no search box, no tabs, no sidebar.

## Row format
Every row is one line, in this order:
`[Type] Fact — Owner — Updated`

- **Type**: plain word, not a coloured badge or icon — `Change`, `Test`, or `Owner`. Navy text, same weight as the rest of the line, no pill/chip styling (direction says written, not designed).
- **Fact**: short, plain sentence. Says what changed and what it meant, not what was done.
- **Owner**: the person's name, always present, never "the team".
- **Updated**: a date for `Change` and `Test` rows; a cadence ("updated weekly", "reviewed monthly") for `Owner` rows, since ownership doesn't change day to day.

## The three kinds of row (assumption, Ada can correct)
We didn't have real examples yet, so here's what each looks like, written the way it should actually read:

- `Change` — *Dealer locator now shows opening hours.* — Priya — 4 Nov
- `Test` — *New checkout button colour, running on a fifth of traffic.* — Tom — 4 Nov
- `Owner` — *Dealer locator.* — Priya — updated weekly

These three rows are a template for the type and tone, not final copy — Ada, swap in the real names and facts when you have them.

## Look
White background, a lot of air between rows. Navy for the type word and headings. Text left-aligned. Flat panels, no shadows, no rounded corners fighting for attention. It should look like a page someone wrote, not a page someone designed.

## Out of scope
No search box. No filtering by type. No comments or reactions on a row. No notifications. Pagination for a long list isn't decided — that's a question for later, not this sprint.
