---
title: "The front door"
ingress: "Four cards, one column, in this order: What's changed, What we're testing, How we do things, Who owns what. No fifth card."
---

```block
type: FrontDoorPage
data:
  title: "The front door"
  ingress: "One page linking to the four areas — What's changed, What we're testing, How we do things, Who owns what — each a card with a one-line job and the date it last moved. No fifth card, ever."
  exampleNote: "Example content — the dates on three of these cards show the shape of the page; nothing behind them has been measured."
  cards:
    - name: "What's changed"
      job: "What shipped, and what it meant."
      date: "14 Oct"
      href: "#"
    - name: "What we're testing"
      job: "What's running as an experiment, and which way it's leaning."
      date: "13 Oct"
      href: "#"
    - name: "How we do things"
      job: "The rules and conventions teams follow, written down once instead of explained again."
      date: "1 Oct"
      href: "#"
    - name: "Who owns what"
      job: "Which team owns which part of the site, so you know who to ask."
      date: "11 Oct"
      href: "#"
  footerNote: "Four areas. A post that doesn't fit one of them is a sign the site needs a fifth area, not a reason to bend one of these."
  contactLine: "Nothing here answers your question? Ask in the web team channel and the answer goes on the list."
```

## What the room decided

Bo and Cleo built the same page: four cards, one column, in one fixed order — What's changed, What we're testing, How we do things, Who owns what. Not alphabetical, not most-recently-updated first. No icons, no grouping, no dropdown, no hover state revealing sub-items, no search, no counts, no "recently viewed", no personalisation. Every reader sees the same four cards, same size, same weight. A card links straight into that area's list; there is no hub page between the front door and the content.

The four names are fixed text. A post cannot rename one and a team cannot relabel one.

## The disagreement, and which way it went

Cleo argued the card should be its name and its date and nothing else: the four names are the whole explanation, and if a name doesn't already tell an outsider where to click, the fix is a better name, not a strapline. Bo argued for one line under each name saying what question the area answers.

The page goes Bo's way. The site's job is to replace asking a colleague, and "What we're testing" reads as a promise until the line under it says which way a test is leaning. Cleo's constraint survives as the ceiling: one line, never two, never a preview of what's inside, never a count of how many posts are in there.

Bo also specified that an area with nothing published shows "Nothing here yet" where the date goes, so the four-way map is true from day one. That state is built into the card and stays available — but all four areas are dated here rather than three of them being empty, because a front door with three holes in it cannot be judged as a front door.

## What we filled in

What's changed is real and dated 14 Oct, matching the newest row on that page. The other three pages don't exist yet, and the dates on them — 13 Oct, 1 Oct, 11 Oct — are Cleo's placeholders, picked to look plausible. Swap them for real dates once each page has content. The one-line jobs under the names are Bo's wording, chosen by that group to fill the gap rather than confirmed word-for-word by Bo and Dag. Worth checking back on the wording, not the shape.

The three cards other than What's changed link to `#`. Building those pages is the next thing, and neither group treated it as theirs to invent.

## Left open

Whether a card's date is the date something behind it last changed or the date of the newest post — Cleo's rule is the former, and nothing enforces it yet. Who moves a date when a page behind a card changes. And whether four holds: the room agreed a fifth card is a decision for the room, not something a card grows on its own.

<!-- merged: day-check-110043 sprint 2 — Team Bo, Team Cleo -->
