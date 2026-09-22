---
title: "The front door: four cards, nothing else"
ingress: "One page, four cards, in one column: What's changed, What we're testing, How we do things, Who owns what. Land here, pick the right one, done — no nav, no search, no home-page copy explaining itself."
points:
  - "The page is four cards in one column — What's changed, What we're testing, How we do things, Who owns what — and nothing else on it: no hero, no nav bar, no search box."
  - "Every card shows only its name and the date that area last changed. No description, no preview line, no count of posts."
  - "The card is the only way in. There is no second nav that duplicates the four names elsewhere on the site."
  - "The order is fixed, top to bottom: What's changed, What we're testing, How we do things, Who owns what. It is the order people ask questions in, not alphabetical."
  - "An area with nothing posted yet still shows as a card, dated 'Not started' — it does not disappear until someone has written in it."
cycle: 2
pair: "bo"
authors: ["Bo", "Ada"]
---

One page, four cards, in one column: What's changed, What we're testing, How we do things, Who owns what. Land here, pick the right one, done — no nav, no search, no home-page copy explaining itself.

- The page is four cards in one column — What's changed, What we're testing, How we do things, Who owns what — and nothing else on it: no hero, no nav bar, no search box.
- Every card shows only its name and the date that area last changed. No description, no preview line, no count of posts.
- The card is the only way in. There is no second nav that duplicates the four names elsewhere on the site.
- The order is fixed, top to bottom: What's changed, What we're testing, How we do things, Who owns what. It is the order people ask questions in, not alphabetical.
- An area with nothing posted yet still shows as a card, dated 'Not started' — it does not disappear until someone has written in it.

## What it is
The home page of the internal site. Its only job is to get someone to the right of the four areas in one click. Nothing on this page is content — the content lives one level down, inside each area.

## Layout
- One column, four flat panels stacked top to bottom, generous white space between them. No shadows, no borders that look like a card component from a product site — a plain box with a line under it, like a written list.
- Navy heading for each card's name. Body text (the date line) in plain grey-black, left-aligned.
- No page title above the cards, no strapline, no search box, no nav bar. The cards are the whole page.

## Content — exact
The four cards, in this order, with these exact names (no shortening, no renaming for space):
1. What's changed
2. What we're testing
3. How we do things
4. Who owns what

Each card shows the name and, under it, the date the area was last updated — pulled from the most recent post inside that area, same as the dates already used in the What's changed feed (e.g. "Last updated 12 March"). No description text under the name, no icon, no "12 posts this month" — same discipline as the What's changed rows: one fact, not a summary.

If an area has no posts yet, its card still appears, in its fixed position, with "Not started" instead of a date. It is not hidden and not greyed out — it is one of the four either way.

## Out of scope this sprint
- What lives inside What we're testing, How we do things and Who owns what — that is for whoever builds those areas. This card only shows their name and their date; it does not decide their format.
- Any way to reorder or hide a card, any settings page, any per-user view. Four cards, fixed order, for everyone.

## Assumption made
Conversation didn't fix exactly where the "last updated" date comes from technically — we assumed it is the date of the most recent post inside that area, matching how dates work on the What's changed page already in canon. If that is wrong, correct it in the vote.
