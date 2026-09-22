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
  footerNote: A post earns its place if it saves somebody from asking a colleague. Every post names an owner and how often it is updated. A post says what changed and what it meant, never what was done. Nothing is posted that nobody would have asked about.
  contact: If something you needed to know is not here, tell the owner of the nearest post and it gets written.
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
```

```block
type: OwnerTable
data:
  heading: Who owns what
  intro: One name per part of the site, so a question goes to a person instead of to a channel and back.
  rows:
    - area: Dealer locator
      owner: Dealer locator owner
      channel: "#web-locator"
      checked: 14 March
      state: Current
      current: true
    - area: Model pages
      owner: Content lead
      channel: "#web-content"
      checked: 12 March
      state: Current
      current: true
    - area: Running tests
      owner: Optimisation lead
      channel: "#web-tests"
      checked: 12 March
      state: Current
      current: true
    - area: Booking and contact forms
      owner: Forms owner
      channel: "#web-forms"
      checked: 5 March
      state: Current
      current: true
    - area: Analytics and campaign tracking
      owner: Analytics owner
      channel: "#web-analytics"
      checked: 8 March
      state: Current
      current: true
    - area: Stock and dealer system feed
      owner: Integrations owner
      channel: "#web-integrations"
      checked: 28 February
      state: Needs a check
      current: false
    - area: Search
      owner: Search owner
      channel: "#web-search"
      checked: 14 February
      state: Needs a check
      current: false
```

## What the room decided

Both groups arrived at the same page from different directions, so the spine was never in doubt: one column, one list, newest first, no tabs, no search, no comments, no reactions. Each post says what changed and what it meant, never what was done or who did the work, and every post carries an owner and how often it is kept current so you know whether it is stale.

Where they differed, Ada wanted the page to be the list of posts and nothing else on it. Cleo's framing — "the page you check before you ask" — is the one that drove the build, and it pulls in one thing Ada's version would have excluded: the sprint's third recurring question, *who owns the dealer locator*, is a question about ownership, not about a change, and it is not answered by waiting for someone to post about the locator. So there is a second band, **Who owns what**, as a table under the log. It is the only thing on the page that is not a post. If the room decides the log alone should carry it, that table is one block to delete.

Cadence is written in words a person wrote — "updated when it changes", "checked every sprint" — not a system timestamp, as both groups asked.

## What we supplied

Neither group had time to write real posts, and both said so. The seven posts and the ownership rows here were written so there is a page to argue about; the topics, dates and figures are ours, not the team's. Owners are named by role rather than by person, which is the one place we have gone against Ada's "a person you can go and ask" — we will not attach invented work to a real colleague's name. Swapping roles for names is a find-and-replace once the team says who.

What is still open: the real first posts, who actually owns each part, and whether a post ever leaves the page or just sinks. There is no editing UI and no CMS — the content is written into the page — and no notifications or subscriptions, both of which were out of scope by agreement.

<!-- merged: day-check-125925 sprint 1 — Team Ada, Team Cleo -->
