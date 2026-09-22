---
title: "What's changed"
ingress: "One list, newest first, for the three things people keep asking a colleague instead of checking: what changed this week, what's being tested, who owns the dealer locator."
---

```block
type: ChangeLogPage
data:
  team: Web team
  title: What's changed
  ingress: "One list, newest first, for the three things people keep asking a colleague instead of checking: what changed this week, what's being tested, who owns the dealer locator."
  exampleNote: "Example content — these rows show the shape of the page; nothing here has been measured."
  entries:
    - line: "Dealer locator search rebuilt to use postcode instead of town name."
      owner: "Search & navigation lead"
      date: "12 March"
    - line: "A/B test running on the pricing page: old layout vs new. Ends Friday."
      owner: "Optimisation lead"
      date: "10 March"
    - line: "Homepage hero copy changed to match new tagline."
      owner: "Content lead"
      date: "8 March"
    - line: "Checkout button colour test live: navy vs grey. Runs two weeks."
      owner: "Optimisation lead"
      date: "6 March"
    - line: "Dealer locator ownership confirmed — still the store-finder team. Confirmed monthly."
      owner: "Store-finder team lead"
      date: "3 March"
      kind: ownership
    - line: "Dealer locator moved to the new store-finder API."
      owner: "Store-finder team lead"
      date: "3 March"
    - line: "Product page image loading changed: gallery now loads after the price block."
      owner: "Front-end lead"
      date: "28 February"
    - line: "Newsletter sign-up test ended. New wording kept."
      owner: "Optimisation lead"
      date: "26 February"
    - line: "Checkout ownership confirmed — still the payments squad. Confirmed monthly."
      owner: "Payments squad lead"
      date: "24 February"
      kind: ownership
    - line: "Search results page now shows 24 results instead of 12."
      owner: "Search & navigation lead"
      date: "21 February"
  rules:
    - "A row only goes up if it answers one of three questions: what changed on the site this week, what's being tested right now, or who owns something people keep asking about."
    - "No row without a named owner gets posted — an update with nobody's name on it is the thing this page exists to stop."
    - "Every row is one line, plus an owner's name and a date. No detail page to click into for the answer."
    - "Ownership facts aren't pinned above the feed — they're rows like any other, re-posted on a cadence so they stay near the top instead of going stale and getting buried."
    - "If a row wouldn't stop someone asking a colleague, it doesn't belong in the list — no announcements, no marketing copy, no 'we're excited to'."
  footerNote: "Example content — the rows above show the shape of the page; nothing here has been measured."
```

## What the room decided

Both teams built the same page, and the page is that agreement: one list, newest first, one screen, no tabs, no filters, no search box, no pagination control. Every row is one line of what happened, an owner's name, and a date, in that order. No bodies, no summaries, no "read more", no detail page. It is called "What's changed", not a dashboard, because it should read like a log someone kept, not a page someone designed.

Ownership is handled Team Dag's way: there is no pinned ownership box above the feed, because that would break the "one list, nothing else" rule. An owner re-posts a short confirmation row on a cadence — "Dealer locator ownership confirmed" — and that row's only job is to bump the fact back near the top of the same feed everything else lives in. Team Ada described the standing ownership row the same way, sorted by its date like everything else rather than pinned; Dag's cadence is what makes it still true weeks later, so that is what was built.

One difference was decided rather than split. Team Dag asked that every row state how often the thing is checked or updated — in the line itself ("Ends Friday", "confirmed monthly") or understood from the type of row. Team Ada's row format is strictly one line, owner, date and nothing else. The page keeps Ada's format and puts the cadence inside the line, where Dag allowed for it, so nothing is added to the row. Ownership rows carry one quiet tag so a re-posted confirmation reads as a standing fact rather than a change — that is the one thing on the page neither team wrote, and it is the first thing to cut if the room thinks it makes the list look designed.

The one filled button is "Post an update", because posting is the only action this page is for.

## What was filled in

Every row is example content. The room wrote example rows naming Priya Shah, Tom Reyes, Marcus Lee, Bo and Dag; those are teammates, and hanging invented dates and invented test results on them would put unverifiable claims about real people on an internal page. So the rows name the role instead of the person. In the real page each row names a person, not a team — that rule is Team Dag's and it stands.

## Left open

How far back the list goes, and what happens once it is long — pagination, an archive — was not decided and is out of scope. The list simply scrolls. What a "post an update" form asks for was not designed either; the button is there and does nothing.

<!-- merged: day-check-115242 sprint 1 — Team Ada, Team Dag -->
