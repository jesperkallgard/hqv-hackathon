---
title: "Names, not roles, in who owns what"
ingress: "The owner table says \"Dealer locator owner.\" It should say who that is. Every row gets a person's name where the team has one, and says plainly \"name needed\" where it doesn't — never a guess."
points:
  - "Every row in \"Who owns what\" shows a person's name, not a job title — the table only earns its place if the name is someone you can actually message."
  - "Where nobody has confirmed a name yet, the row reads \"name needed\" instead of leaving the role title standing in for a person."
  - "The channel and last-checked date are untouched — this only replaces the name column, nothing else about the row."
  - "If an owner leaves or changes teams, the row falls back to \"needs a check\" the same way a stale check date does now — it never silently keeps the old name."
  - "Nothing else on the page moves. Same log, same table, same layout — this is one column of one existing block."
cycle: 2
pair: "cleo"
authors: ["Dag", "Cleo"]
---

The owner table says "Dealer locator owner." It should say who that is. Every row gets a person's name where the team has one, and says plainly "name needed" where it doesn't — never a guess.

- Every row in "Who owns what" shows a person's name, not a job title — the table only earns its place if the name is someone you can actually message.
- Where nobody has confirmed a name yet, the row reads "name needed" instead of leaving the role title standing in for a person.
- The channel and last-checked date are untouched — this only replaces the name column, nothing else about the row.
- If an owner leaves or changes teams, the row falls back to "needs a check" the same way a stale check date does now — it never silently keeps the old name.
- Nothing else on the page moves. Same log, same table, same layout — this is one column of one existing block.

## What this changes
In the "Who owns what" table already on the page, the owner column currently holds role titles ("Dealer locator owner", "Content lead"). This replaces that column with a real person's name, wherever the team has supplied one.

## What's not decided
Nobody in this group has the actual names to put against the seven rows. Rather than invent people and attach fake ownership to them — the last sprint's write-up explicitly said not to do that — this hand-in leaves every row reading "name needed" until someone supplies the real one. That is the honest state of the table today, not a placeholder pretending otherwise.

## Behaviour
- A row with a confirmed name shows it plainly, left-aligned, same weight as the rest of the row.
- A row without one shows "name needed" in the same plain type — not styled as an error or a warning, just a statement of fact.
- If a name goes stale (person moved on, nobody's re-confirmed it), the row reverts to "needs a check", matching the existing state used for outdated check dates.

## Look and feel
No new component. This is a column-level change to the existing OwnerTable block. Same white, sparse, flat-panel treatment as the rest of the page — no colour coding, no avatars, no icons for missing names. It should read like a plain fact, not a flagged problem.

## Out of scope
No way to edit names from the page itself — that's still written into the page by whoever confirms it, same as everything else here. No history of who owned something before.
