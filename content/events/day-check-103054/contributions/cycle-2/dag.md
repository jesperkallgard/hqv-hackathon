---
title: "The front door"
ingress: "One home page, four cards, one column. The four are the whole site — an outsider reads the labels and knows where to click, and nowhere else on the page."
points:
  - "The four labels are exactly \"What's changed\", \"What we're testing\", \"How we do things\", \"Who owns what\" — no rewording, no icons standing in for the words."
  - "Each card shows only its label and the date its list last changed — no preview of the latest entry, no count of posts, no snippet."
  - "The order is fixed top to bottom in that sequence, not alphabetical and not by recency, because that is the order someone new should read them in."
  - "A card is the only way in. No search bar, no menu, no other links on the home page."
  - "A card still shows when its area is empty — it says \"nothing yet\" instead of disappearing, so all four are always visible."
cycle: 2
pair: "dag"
authors: ["Dag", "Cleo"]
---

One home page, four cards, one column. The four are the whole site — an outsider reads the labels and knows where to click, and nowhere else on the page.

- The four labels are exactly "What's changed", "What we're testing", "How we do things", "Who owns what" — no rewording, no icons standing in for the words.
- Each card shows only its label and the date its list last changed — no preview of the latest entry, no count of posts, no snippet.
- The order is fixed top to bottom in that sequence, not alphabetical and not by recency, because that is the order someone new should read them in.
- A card is the only way in. No search bar, no menu, no other links on the home page.
- A card still shows when its area is empty — it says "nothing yet" instead of disappearing, so all four are always visible.

## What it is

The home page. Four flat panels, stacked in one column, no shadows, a lot of white space around them — same look as the "What's changed" page already built.

## The four cards, in this order

1. **What's changed** — links to the page already in canon. Date shown is the date of its newest row (currently 12 March, from the example data).
2. **What we're testing** — not built yet this sprint. Card still appears. Date reads "nothing yet".
3. **How we do things** — not built yet this sprint. Card still appears. Date reads "nothing yet".
4. **Who owns what** — not built yet this sprint. Card still appears. Date reads "nothing yet".

## Card content

Each card is: the label (navy heading, left-aligned), and directly under it, in plain small text, the date line — either a real date ("Last updated 12 March") or "Nothing yet" for the three areas with no page behind them. No description line, no icon, no preview text. The label is the only thing that says what's inside; the direction is that this reads like something written, not designed.

## Look and feel

Matches the direction exactly: white background, a lot of air between the four cards, navy headings, flat panels with no shadow or border treatment beyond a plain rule or edge, one column, nothing centred. No hero image, no strapline above the cards, no logo treatment beyond what's already on the site. The page is the four cards and nothing else above or below them.

## Out of scope

No search, no filters, no "recently updated" sorting, no icons, no card previews, no counts, no footer links beyond the four cards. Whether the other three pages behind cards 2–4 get built is for whoever takes those areas this sprint — this hand-in only owns the front door and the fact that it must show all four names even when a page isn't there yet.

## Assumption

We assumed the other three areas aren't being built by us this sprint, so their cards point at empty pages for now. If another group builds "What we're testing", "How we do things" or "Who owns what" this sprint, the front door just needs their real date instead of "nothing yet" — the card and label stay exactly the same.
