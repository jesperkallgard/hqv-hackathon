---
title: "Inside the website team"
ingress: "The front door is four doors: What's changed, What we're testing, How we do things, Who owns what. Read the four names and you know where to click."
---

```block
type: FrontDoorPage
data:
  siteName: Inside the website team
  title: Inside the website team
  standfirst: "Four areas, no more. Read the four names and you know where to click. Every post names an owner and how often it is updated."
  exampleNote: "Example content — these teasers and dates show the shape of the page; nothing here has been measured. Only the rows the room wrote are the room's own."
  nav:
    - { label: "Front door", href: "#", current: true }
    - { label: "Ask the team", href: "#" }
  doors:
    - title: "What's changed"
      href: "#whats-changed"
      date: "14 March"
      teaser: "Dealer locator now shows a store's opening hours instead of just its address."
      room: true
    - title: "What we're testing"
      href: "#"
      date: "12 March"
      teaser: "Testing a new checkout flow on 10% of traffic."
      room: true
    - title: "How we do things"
      href: "#"
      date: "7 March"
      teaser: "A change goes out behind a flag first, then to everybody a week later if nothing breaks."
    - title: "Who owns what"
      href: "#"
      date: "11 March"
      teaser: "Dealer locator is owned by Bo. Updated monthly."
      room: true
  listId: whats-changed
  listTitle: What's changed
  listStandfirst: "One list, newest first. What changed, what's being tested, who owns what. If it isn't on the list, it isn't there."
  listExampleNote: "Example content — these rows show the shape of the page; nothing here has been measured. Only the three rows the room wrote are the room's own."
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

The homepage is four doors, not one list. Both groups came back with the same four cards, one column, in the same fixed order — What's changed, What we're testing, How we do things, Who owns what — with no fifth card, no subcategories, no search across the four, and no way to add an area from the front door. An outsider reads four names and knows where to click.

Where they differed was what a card carries. Team Bo argued for the name and the date and nothing else: no summary, no count, no preview, so the front door stays a signpost and every card is the same shape whether its area moved yesterday or in November. Team Ada argued for one line of the newest entry as well, so you get a partial answer before you click. The page goes Team Ada's way: a teaser earns its place by the room's own test — it can save somebody the click, and therefore the question to a colleague. Team Bo's discipline holds everywhere else: one line only, no counts, no icons, no colour-coding by how recently something moved. A card that has not moved says so by staying quiet with an old date while the others move.

Sprint 1's list is not summarised on the front door. It is unchanged, and it now sits behind the first card, with the same rows, the same owner-and-cadence line, and "Add a row" still the page's one filled button.

## The change of direction, stated plainly

Sprint 1 decided "What's changed" should be one mixed list on purpose, refusing categories so a change, a test, and an ownership note could sit side by side. This sprint splits those three things back into separate doors. That is a real change in direction, not an accident, and Team Ada flagged it for the room. The mixed list survives inside its own door: the rows are still mixed by date there, so the refusal of categories is kept where the reading happens and dropped only at the front.

## What is not here, on purpose

No dashboard, no nav bar with a dropdown, no search box across the four areas, no card counts, no icons, no recently-updated strip. The front door holds nothing but the four cards.

## What is still open

What lives behind "What we're testing", "How we do things" and "Who owns what" was not decided this sprint — only that the doors exist. Neither was what a card looks like when an area has never been updated: Team Ada suggested "Nothing posted yet", Team Bo left it open rather than invent it, and the room has not chosen. The three other doors point at `#` for now. From sprint 1, still open: how far back the list goes, whether old rows roll off, and whether a closed test stays in the list with its result.

## What was filled in

The room's own: the four names and their order, the three teasers and dates taken from sprint 1's rows, and those three rows in the list. Supplied so the page is whole: the "How we do things" teaser and date, and every list row below the third. Example rows name a team or a role rather than a person, because an invented colleague is the one thing on this page a reader could not check.

<!-- merged: day-check-113451 sprint 2 — Team Bo, Team Ada -->
