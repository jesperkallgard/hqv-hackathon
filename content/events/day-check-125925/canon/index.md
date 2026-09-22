---
title: The Team Log
description: What changed on the site, what it meant, and who to ask.
---

```block
type: TeamLog
data:
  title: The Team Log
  standfirst: The page you check before you ask.
  questions:
    - What changed on the site this week.
    - What is being tested right now.
    - Who owns the dealer locator.
  needsCheck:
    heading: Needs a check
    emptyLine: Nothing to flag. Every part of the site has been checked by its owner since the last sprint.
    items:
      - area: Stock and dealer system feed
        since: 28 February
      - area: Search
        since: 14 February
  posts:
    - date: 14 March
      heading: The dealer locator now searches by postcode as well as town
      changed: "Typing a postcode returns the five nearest dealers. Town names still work and return the same list as before."
      meant: "Support no longer has to explain that only town names work. Anyone linking to the locator from a campaign can now send people straight to a postcode result."
      owner: Dealer locator owner, web team
      cadence: Updated when it changes
    - date: 12 March
      heading: Two versions of the model page are running against each other
      changed: "Half of visitors see the price and finance line above the gallery; half see it below, as now. The test runs until 4 April or until it has 40 000 visits, whichever comes first."
      meant: "If you take a screenshot of the model page this fortnight, say which version you were shown. Nothing on the page is broken — it is a test, not a bug."
      owner: Optimisation lead, web team
      cadence: Checked every sprint
    - date: 8 March
      heading: Old campaign URLs stopped redirecting and now return the page directly
      changed: "Links from print and from last autumn's campaigns used to pass through two redirects. They now land on the page in one step."
      meant: "Tracking parameters survive the trip, so campaign traffic shows up under the campaign instead of under direct. Numbers before 8 March and after it are not comparable."
      owner: Analytics owner, web team
      cadence: Updated when it changes
    - date: 5 March
      heading: The booking form asks for a phone number before a message
      changed: "The message field is optional and sits last. Phone and preferred time are the two required fields."
      meant: "More bookings arrive with a number attached, so the dealer can call back the same day. Fewer arrive with a written question, so anyone reading the inbox has less context than before."
      owner: Forms owner, web team
      cadence: Checked every sprint
    - date: 28 February
      heading: Stock figures on model pages come from the dealer system, not the weekly file
      changed: "The number by each model is now read from the dealer system every twenty minutes. The weekly spreadsheet is no longer used anywhere on the site."
      meant: "A figure on the site can differ from the one in the spreadsheet on your desk, and the site is the one that is right. Stop reconciling them."
      owner: Integrations owner, web team
      cadence: Updated when it changes
    - date: 21 February
      heading: Images above the fold load about a second faster on phones
      changed: "The hero image is served at the size the phone actually needs instead of the desktop size scaled down."
      meant: "Pages that were losing visitors before anything appeared now hold them. If you are comparing bounce rates across February, the drop on 21 February is this and not a change in traffic."
      owner: Performance owner, web team
      cadence: Updated when it changes
    - date: 14 February
      heading: The search box no longer suggests discontinued models
      changed: "Discontinued models are out of the suggestion list. Their pages still exist and still answer to a direct link."
      meant: "Nobody is steered towards something they cannot buy. If a customer sends you a link to a discontinued model it still works, so you do not need to hunt for a replacement URL."
      owner: Search owner, web team
      cadence: Checked every sprint
  testsHeading: What we're testing
  testsIntro: Everything running on the live site right now. If you are looking at a page in this list, you may not be seeing what a colleague sees.
  tests:
    - name: Price and finance line above the gallery
      where: Model pages
      owner: Optimisation lead
      until: 4 April
      state: Running
      running: true
    - name: Five nearest dealers instead of ten
      where: Dealer locator
      owner: Dealer locator owner
      until: 28 March
      state: Running
      running: true
    - name: Preferred time as a dropdown instead of free text
      where: Booking form
      owner: Forms owner
      until: 21 March
      state: Running
      running: true
    - name: Stock figure shown on the model card in search results
      where: Search results
      owner: Search owner
      until: 11 March
      state: Finished, kept
      running: false
    - name: Shorter model names in the main menu
      where: Navigation
      owner: Content lead
      until: 4 March
      state: Finished, rolled back
      running: false
  howHeading: How we do things
  footerNote: A post earns its place if it saves somebody from asking a colleague. Every post names an owner and how often it is updated. A post says what changed and what it meant, never what was done. Nothing is posted that nobody would have asked about.
  practices:
    - heading: A change goes live on Tuesday and Thursday
      body: Anything merged by Monday afternoon is on the site on Tuesday morning. Nothing goes out on a Friday. If something has to go out between releases it is written up here the same day.
      owner: Web team
      cadence: Updated when it changes
    - heading: A test runs to its end date or its visit count, whichever comes first
      body: Nobody stops a test early because it looks good after three days. The end date and the visit count are set before it starts and are in the table above. A losing version is rolled back the same week.
      owner: Optimisation lead
      cadence: Checked every sprint
    - heading: The site is the number, not the spreadsheet
      body: Stock, prices and dealer details are read from the source system. Where a figure on the site disagrees with a file on your desk, the site is right and the file is old.
      owner: Integrations owner
      cadence: Updated when it changes
    - heading: Every part of the site is checked by its owner each sprint
      body: The owner confirms the row is still theirs and the date moves. Anything not confirmed shows as needing a check, at the top of this page, until it is.
      owner: Web team
      cadence: Checked every sprint
  contact: If something you needed to know is not here, tell the owner of the nearest post and it gets written.
```

```block
type: OwnerTable
data:
  heading: Who owns what
  intro: One name per part of the site, so a question goes to a person instead of to a channel and back.
  rows:
    - area: Dealer locator
      owner: name needed
      channel: "#web-locator"
      checked: 14 March
      state: Current
      current: true
    - area: Model pages
      owner: name needed
      channel: "#web-content"
      checked: 12 March
      state: Current
      current: true
    - area: Running tests
      owner: name needed
      channel: "#web-tests"
      checked: 12 March
      state: Current
      current: true
    - area: Booking and contact forms
      owner: name needed
      channel: "#web-forms"
      checked: 5 March
      state: Current
      current: true
    - area: Analytics and campaign tracking
      owner: name needed
      channel: "#web-analytics"
      checked: 8 March
      state: Current
      current: true
    - area: Stock and dealer system feed
      owner: needs a check
      channel: "#web-integrations"
      checked: 28 February
      state: Needs a check
      current: false
    - area: Search
      owner: needs a check
      channel: "#web-search"
      checked: 14 February
      state: Needs a check
      current: false
```

```block
type: SiteFooter
data:
  title: The Team Log
  kept: Kept by the web team.
  links:
    - { label: What's changed, href: "#log" }
    - { label: What we're testing, href: "#tests" }
    - { label: How we do things, href: "#how" }
    - { label: Who owns what, href: "#who" }
```

## What the room decided

Four areas, no more: What's changed, What we're testing, How we do things, Who owns what. An outsider reads those four and knows where to click. The log is still the spine — one column, newest first, no tabs, no search, no comments, no reactions — and each post says what changed and what it meant, never what was done or who did the work.

Ada's "Needs a check" list sits above everything, pulled from the owner table's own state rather than from a new field: one line per stale item, the area and since when, no reason attached and nobody chased. Ada argued the page should be the list of posts and nothing else; that lost, because "who owns the dealer locator" is a question about ownership and no amount of waiting for a post answers it. Where nothing is stale the list says so in one line rather than disappearing.

Cleo's change to the owner table is in: the owner column holds a person, not a job title. Where nobody has confirmed a name it reads "name needed", in the same plain type as everything else — not an error, not a warning. A row whose check has gone stale reads "needs a check" in that column too, the same way the date does, so a name never silently outlives the person. There is still no way to edit a name from the page; it is written in by whoever confirms it, and there is no history of who owned something before.

Cadence stays in words a person wrote — "updated when it changes", "checked every sprint" — not a system timestamp.

## What we supplied

The team has not confirmed a single owner name, so every row reads "name needed" or "needs a check". That is the honest state of the table today, and it is deliberate: we will not attach invented work or invented ownership to a real colleague. Filling it in is a find-and-replace once the team says who.

The posts, the running tests and the four working practices under "How we do things" were written so there is a page to argue about; the topics, dates and end dates are ours, not the team's. What is still open: the real first posts, the real names, whether "stale" is defined only by the owner table's check date or also by a cadence in the log going unmet — Ada flagged that and it was not settled — and whether a post ever leaves the page or just sinks. There is no editing UI and no CMS, and no notifications or subscriptions.

<!-- merged: day-check-125925 sprint 2 — Team Cleo, Team Ada -->
