---
title: "What's changed"
ingress: "One list on the homepage, newest first, nothing else. It answers the three questions people keep asking a colleague instead: what changed this week, what's being tested now, who owns what."
---

```block
type: WhatsChangedPage
data:
  siteName: Inside the website team
  title: What's changed
  standfirst: "One list, newest first. What changed, what's being tested, who owns what. If it isn't on the list, it isn't there."
  exampleNote: "Example content — these rows show the shape of the page; nothing here has been measured. Only the three rows the room wrote are the room's own."
  nav:
    - { label: "What's changed", href: "#", current: true }
    - { label: "Ask the team", href: "#" }
  action: { label: "Add a row", href: "#" }
  entries:
    - text: "Dealer locator now shows a store's opening hours instead of just its address."
      owner: "Bo"
      date: "14 March"
      cadence: "Updated monthly"
      room: true
    - text: "Testing a new checkout flow on 10% of traffic."
      owner: "Ada"
      date: "12 March"
      cadence: "Read out weekly while the test runs"
      room: true
    - text: "Dealer locator is owned by Bo. Updated monthly."
      owner: "Bo"
      date: "11 March"
      cadence: "Confirmed monthly"
      room: true
    - text: "Product pages load about a second faster on phones after the image sizes were cut. Fewer people leave before the page is up."
      owner: "Front-end team"
      date: "8 March"
      cadence: "Measured weekly"
    - text: "Testing a shorter contact form — four fields instead of nine — on half of the traffic to the support pages. Running until the end of March."
      owner: "Conversion team"
      date: "6 March"
      cadence: "Result posted here when the test closes"
    - text: "Search now spell-corrects model names, so a misspelt search returns the product instead of nothing."
      owner: "Search team"
      date: "4 March"
      cadence: "Updated when the model list changes"
    - text: "The campaign landing pages are owned by the content team, not the website team. Ask them before changing the copy."
      owner: "Content team"
      date: "1 March"
      cadence: "Confirmed each quarter"
    - text: "The cookie banner test finished. The shorter wording did not change how many people accept, so the old wording stays."
      owner: "Conversion team"
      date: "27 February"
      cadence: "Closed — no further updates"
    - text: "Stock status on the product page now says 'In store in Bergen and Trondheim' instead of only 'In stock'."
      owner: "Front-end team"
      date: "22 February"
      cadence: "Updated with each stock feed change"
    - text: "The 404 page links to search and to the dealer locator. It used to be a dead end."
      owner: "Front-end team"
      date: "18 February"
      cadence: "Rarely — confirmed each quarter"
    - text: "Analytics tagging on the checkout is owned by the data team. Anything missing in the funnel report is theirs."
      owner: "Data team"
      date: "14 February"
      cadence: "Confirmed each quarter"
  footerNote: "A row earns its place if it would otherwise be a question to a colleague. That is why every row names an owner and how often the thing is updated."
  footerLinks:
    - { label: "Who to ask", href: "#" }
    - { label: "How to add a row", href: "#" }
```

## What the room decided

Both groups came back with the same page: one list called "What's changed", newest first, and nothing else on the first screen. No dashboard, no tabs, no search box, no filters, no categories. A change to the site, a test that is running, and an answer to "who owns this" are the same kind of row, mixed by date, and the reader works out which is which from the sentence — the way they would if a colleague told them.

Where they differed was only in emphasis, and the sharper version won. Team Ada fixed the row as one line of plain text, then an owner, then a date, and nothing else. Team Cleo added that the row must also carry how often that thing is updated, because otherwise an ownership answer goes stale without anybody noticing. The page carries the cadence, in quiet type after the date, so both hold: the sentence is still one line, and the row still answers the follow-up question.

Ownership rows are not a table and not a page. When an owner or a frequency changes, that is a new row, dated, at the top — which is what keeps ownership newest-first with everything else instead of static and separate.

## What is not here, on purpose

No search, no filter, no sort, no tags, no pagination, no comments or reactions. Team Ada's argument stands: if the list gets too long to scan, that is a sign to prune old rows, not to add search.

"Add a row" is the page's one action and it is the only filled button. It points nowhere yet — this sprint did not design what happens when you press it.

## What is still open

How far back the list goes, and whether old rows ever roll off, was not decided. Neither was what the writing rule is when a test closes: the example above keeps the closed cookie-banner test in the list with its result, but the room has not agreed that closed tests stay.

## What was filled in

Three rows are the room's own, written in Team Ada's wording: the dealer locator opening hours, the checkout flow test, and the dealer locator ownership note. Everything below them is example content, written so the list is long enough to judge. Those example rows name a team rather than a person, because an invented colleague is the one thing on this page a reader could not check.

<!-- merged: day-check-113451 sprint 1 — Team Cleo, Team Ada -->
