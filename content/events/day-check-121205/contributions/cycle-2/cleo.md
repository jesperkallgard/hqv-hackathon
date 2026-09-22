---
title: "Four cards, one door"
ingress: "The homepage stops being one mixed list and becomes four cards — What's changed, What we're testing, How we do things, Who owns what — each showing only when it was last touched. Click a card, land on that list."
points:
  - "The homepage shows exactly four cards, named What's changed, What we're testing, How we do things, Who owns what — those words, in that order, never renamed or reworded by whoever builds it."
  - "Each card carries only its name and its last-update date. No preview line, no row count, no owner name on the card — the card is a door, not a summary."
  - "The single mixed feed from sprint one is retired. A shipped change, a live test and an ownership fact no longer sit in one list; each now lives inside the card it belongs to."
  - "There is still no search box, on the homepage or inside any of the four lists. You find things by knowing which of the four kinds of thing you're looking for, then reading down."
  - "Clicking a card is the only way in. No tabs, no filters, no dashboard counts on the homepage itself — just four cards in one column, white space between them."
cycle: 2
pair: "cleo"
authors: ["Dag", "Cleo"]
---

The homepage stops being one mixed list and becomes four cards — What's changed, What we're testing, How we do things, Who owns what — each showing only when it was last touched. Click a card, land on that list.

- The homepage shows exactly four cards, named What's changed, What we're testing, How we do things, Who owns what — those words, in that order, never renamed or reworded by whoever builds it.
- Each card carries only its name and its last-update date. No preview line, no row count, no owner name on the card — the card is a door, not a summary.
- The single mixed feed from sprint one is retired. A shipped change, a live test and an ownership fact no longer sit in one list; each now lives inside the card it belongs to.
- There is still no search box, on the homepage or inside any of the four lists. You find things by knowing which of the four kinds of thing you're looking for, then reading down.
- Clicking a card is the only way in. No tabs, no filters, no dashboard counts on the homepage itself — just four cards in one column, white space between them.

## What it does

The homepage is no longer the single "What's changed" feed from sprint 1. It is a front door: four flat panels, stacked in one column, no shadows. Each panel names one area and shows the date that area last changed. Clicking a panel takes you to that area's own newest-first list, in the row shape the room already agreed — one line, an owner, a cadence, in that order.

## The four areas, and what sits in each

Using the existing sprint-1 rows as the worked example of how to sort them:

- **What's changed** — shipped changes and closed tests. e.g. "Homepage banner swapped to the autumn campaign", "Dealer locator moved to the new map API", "Cookie banner reworded. Consent rate went up", "Test on the shorter contact form finished. The short form won."
- **What we're testing** — tests that are live right now, each dated with when it closes. e.g. "A/B test on the checkout button colour, live since 10 Nov, read again 24 Nov", "Homepage hero test is live, testing new vs. old copy, read again 30 Nov."
- **Who owns what** — ownership facts, who to ask about what. e.g. "Search on the support pages is owned by the content team, not the web team", "Dealer locator — who to ask about opening hours, pins and the dealer import", "Campaign landing pages are owned by marketing after handover."
- **How we do things** — process notes: how a decision gets made, how a test gets signed off, how a page request gets picked up. Sprint 1 has no example rows for this one; the real content still needs to come from the team and is not invented here.

## Look and feel

Follows the direction as given: white, sparse, a lot of air. Navy headings for the four card titles. Flat panels, no shadows, no rounded corners implied. One column — the four cards stack, they do not sit in a grid. The date on each card is the only other text on it; no strapline, no icon.

## Out of scope

- No search box anywhere — kept from sprint 1's decision.
- No count of how many rows are inside each area, on the card or elsewhere.
- The "How we do things" area's real rows are not written here — nobody in the room has supplied them yet. The area exists as a named, empty door until they do.
- Whether a card can ever be reordered, or whether a fifth area gets added later, is not decided.

## One assumption made

Cleo asked for this handed in fast with "those four names exactly" — read as: build the front door around the four areas the direction names, replacing the single feed rather than sitting alongside it. If the group meant something narrower, they can correct it on the next hand-in.
