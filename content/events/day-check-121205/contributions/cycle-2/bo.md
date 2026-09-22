---
title: "Four doors, one screen"
ingress: "The front door is four cards in one column — What's changed, What we're testing, How we do things, Who owns what — each carrying its own last-updated date. An outsider reads the four names and knows where to click."
points:
  - "The front door is exactly four cards, stacked in one column. Not three, not five, and no fifth card added later for whatever doesn't fit."
  - "The four are named exactly: What's changed, What we're testing, How we do things, Who owns what."
  - "Each card shows its own last-updated date, so you know a section is stale before you click into it."
  - "Each of the four is its own list with its own rows — What's changed narrows to site changes only, since tests and ownership now have a home of their own instead of being mixed into it."
  - "If something doesn't fit one of the four names, that's a sign it doesn't belong on the site yet, not a reason to add a fifth."
cycle: 2
pair: "bo"
authors: ["Ada", "Bo"]
---

The front door is four cards in one column — What's changed, What we're testing, How we do things, Who owns what — each carrying its own last-updated date. An outsider reads the four names and knows where to click.

- The front door is exactly four cards, stacked in one column. Not three, not five, and no fifth card added later for whatever doesn't fit.
- The four are named exactly: What's changed, What we're testing, How we do things, Who owns what.
- Each card shows its own last-updated date, so you know a section is stale before you click into it.
- Each of the four is its own list with its own rows — What's changed narrows to site changes only, since tests and ownership now have a home of their own instead of being mixed into it.
- If something doesn't fit one of the four names, that's a sign it doesn't belong on the site yet, not a reason to add a fifth.

## What it is
The front door: one screen, one column, four flat panels stacked top to bottom. No grid, no side-by-side cards, no icons. Navy heading at the top of the page, plain text underneath, no shadows on the panels.

## The four cards, in order
1. **What's changed** — site changes only: things shipped, copy edited, bugs fixed. This is the list sprint 1 built, narrowed. Tests and ownership facts move out of it into their own cards below.
2. **What we're testing** — live experiments only: what's running now and when it closes. Rows that used to be mixed into "What's changed" live here instead.
3. **How we do things** — new, not carried from sprint 1. This is reference, not a feed of dated events: how the team works, standards, guides. It still needs a last-updated date on its card, for whatever was most recently changed inside it.
4. **Who owns what** — ownership facts only: who to ask about which part of the site. Also pulled out of the old mixed feed.

Each card, on the front door, shows: the name, one short line saying what lives inside it, and the date it was last updated. Clicking a card goes to that list.

## What was decided, plainly
Sprint 1 built "What's changed" as one mixed list of all three kinds of entry, with no filter and no badge. This sprint takes it apart: instead of one feed with three kinds of row mixed together, there are four separate feeds, each with one kind of row, and a front door that lets you pick which one you want. This is a real change to what "What's changed" means — it gets narrower, not just renamed — and the room should say plainly if that's not what they meant.

## What it refuses to do
- No fifth card, no "more" link, no "other" catch-all.
- No search box on the front door.
- No counts, no unread badges, no notifications on the cards.
- No nested menu — four cards is the entire front door, nothing collapses or expands.

## Look and feel
White background, a lot of air between the four panels. Navy headings, left-aligned, one column throughout — the front door and the four lists behind it all read the same way, like pages of the same written document rather than four different tools bolted together.

## Left open
Whether "How we do things" needs a different row shape than the other three (it isn't a list of dated events in the same sense) was not settled this sprint. The front door and the card shape are decided; the inside of "How we do things" is not.
