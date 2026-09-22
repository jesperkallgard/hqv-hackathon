---
title: "What's changed"
ingress: "One list called \"What's changed,\" newest first, is the whole first screen. Every row says what happened, who owns it, and how often it's updated — so the three questions people keep asking a colleague get answered by reading, not asking."
---

```block
type: ChangeFeed
data:
  siteName: "What's changed"
  heading: "What's changed"
  standfirst: "What changed on the site, what's being tested, and who owns the dealer locator. One list, newest first. No search box — if you have to search it, it's already too long."
  exampleNotice: "Prototype. The rows below are example data, written to show the format. Nothing here is a real change, and the owner names are not decided yet."
  rows:
    - date: "4 Feb"
      line: "Dealer locator moved to the new map API."
      owner: "Priya Nkemelu"
      cadence: "updates monthly"
      example: true
    - date: "29 Jan"
      line: "Testing two headlines on the homepage hero: \"Book a demo\" vs \"See it in your dealership.\""
      owner: "Tom Reyes"
      cadence: "updates weekly"
      example: true
    - date: "15 Jan"
      line: "Dealer locator now shows stock levels per dealer."
      owner: "Priya Nkemelu"
      cadence: "updates monthly"
      example: true
    - date: "9 Jan"
      line: "Homepage hero swapped for the spring campaign."
      owner: "Site owner — name not decided yet"
      cadence: "updated as needed"
      example: true
    - date: "6 Jan"
      line: "Checkout A/B test running on the delivery step, ends the 30th."
      owner: "Test owner — name not decided yet"
      cadence: "updated weekly"
      example: true
  footerNote: "A post earns its place if it saves somebody from asking a colleague. Every post names an owner and how often it is updated."
  footerOwnerLine: "No row without a name attached."
```

## Decisions

Team Ada and Team Dag built the same page twice, so the page is built once. One feed under one navy heading, newest first, no pagination, no tabs, no filters, no detail pages, no comments. "What changed," "what's being tested," and "who owns X" are one row format written as three kinds of sentence — that is the mechanism, not three features.

The only real disagreement was about ownership. Ada argued there must be no search box and no directory at all: you find out who owns the dealer locator by scanning for its most recent row and reading the name on it. Dag agreed on no search but flagged that owner names are an open gap. The page goes Ada's way — ownership lives only on the rows. If the dealer locator has not changed recently enough to appear near the top, that is a signal the list is doing its job: it is old enough that asking a colleague is fine.

Dag's open gap stands and is not closed here. The real owners of "site changes", "current tests" and the dealer locator have to come from whoever runs those three things before this page carries real content. The rows on screen are example data and say so; two of them carry Ada's example names, and the two from Dag's format keep their owner slot unfilled rather than borrow a name nobody assigned.

Cut, and named so the room knows: no search, no filters, no tags, no category picker, no cards or icons or colour coding by type, no read-more, no reactions, no notifications, no separate ownership page. If the list gets too long to scan, something needs archiving — that is not a reason to add controls.

<!-- merged: day-check-101928 sprint 1 — Team Ada, Team Dag -->
