---
title: "DBS — what changed, what's live, who owns it"
ingress: "The front door is five named doors and one line each. Behind the first of them, one table of what changed and what it meant, grouped by status, every row carrying an owner and an update cadence."
cycle: 2
authors: ["Testlev", "Testina", "Testef", "Testrid", "Testolof", "Testmar", "Testur", "Testa"]
---

```block
type: DbsPortalPage
data:
  siteName: Digital Business Solutions
  pageTitle: What changed, what's live, who owns it
  standfirst: "A DBS colleague checking whether a test has already run, and someone outside DBS checking whether something is live — both land on the same table, not a dashboard."
  exampleNotice: "Example data. Every row below is made up to show the shape of the page. Nothing here has been decided or measured, except the sticky navigation result, which the room already had."
  nav:
    - What changed
    - Playbooks
    - Who to ask
  doorsHeading: "Where do I go"
  doors:
    - name: What changed
      line: "What we tested, what we shipped, and what it did."
      built: true
    - name: Playbooks
      line: "How to run a test the way DBS runs it, written down once instead of explained again."
      built: false
    - name: Rollout status
      line: "What's live, where, and since when."
      built: false
    - name: Decisions
      line: "What we chose not to do, and why."
      built: false
    - name: Who to ask
      line: "Every area, with the person who owns it."
      built: false
  doorsNote: "Playbooks, Decisions and Who to ask are named but not built yet."
  notBuiltLabel: "Not built yet"
  emptyDoor: "Nothing is filed under this door yet. When there is something, it will carry an owner and an update cadence like every other row."
  filters:
    label: "Show"
    typeLabel: "Type"
    teamLabel: "Team"
    types:
      - Playbook
      - Test result
      - Rollout status
      - Decision
    teams:
      - Optimise
      - Scale
      - Explore
      - Platform
      - Support
    teamNote: "Which of these five have enough owned rows to stand as their own team was not checked this sprint. The five names come from the owners already sitting in the rows below."
  columns:
    - Test
    - Status
    - Result
    - Owner
    - Updated
  groups:
    - status: Rolled out
      rows:
        - test: Sticky nav on checkout
          result: Checkout starts up 11%
          owner: CRO team
          updated: weekly
          type: Test result
          team: Optimise
        - test: Shorter delivery copy on product pages
          result: Fewer questions about delivery time reaching support
          owner: Content team
          updated: monthly
          type: Rollout status
          team: Scale
        - test: One accepted payment method shown per market
          result: Checkout drop-off unchanged, page loads faster
          owner: Platform team
          updated: on change
          type: Rollout status
          team: Platform
    - status: Running
      rows:
        - test: Product comparison on the category page
          result: Running since March, too early to read
          owner: CRO team
          updated: weekly
          type: Test result
          team: Optimise
        - test: Dealer stock shown on the product page
          result: Live in two markets, being watched before wider rollout
          owner: Market operations
          updated: weekly
          type: Rollout status
          team: Explore
    - status: Decided against
      rows:
        - test: Chat widget on every page
          result: More conversations, none of them about buying — not rolled out
          owner: Support and web
          updated: on change
          type: Decision
          team: Support
        - test: Video background on the start page
          result: Page got slower, nothing moved — dropped
          owner: Brand and web
          updated: on change
          type: Decision
          team: Support
  rule: "Every row carries an owner and an update cadence. No owner, no row."
  footerOwner: "This page is kept by DBS."
  footerNote: "If something here is out of date, the owner named in the row is the person to ask."
```

## Why it looks like this

Two groups described the same first screen and disagreed about what it is a list of. Wombat wrote a reverse-chronological list of posts — what changed, why, who owns it — filtered by type and by team. Quartz wrote one table grouped by status: Rolled out, Running, Decided against, on the argument that "has this already been tried, and is it live" is the question people actually bring, not who ran it or when.

The page goes Quartz's way on the ordering. Status is the first thing you see, and the three groups are in Quartz's order. Wombat's argument for newest-first was that both audiences arrive already knowing they need an update rather than an introduction; that holds, and it is why there is no hero and no explainer above the table — but inside that, status answers the question faster than date does.

Wombat's filters survive, against Quartz, who wanted no filters panel at all and the table as the whole screen. Filtering is by type and by team only. There is no search box: the need is "what's new in my area" and "what's new full stop", not keyword lookup, and search is for finding something you already know exists.

Both groups set the same hard rule and it is built as a rule, not a style: a row without a named owner and an update cadence does not appear. Not greyed out, not flagged — not eligible.

There is one screen, not an insider view and an outsider view. The bar is that someone outside DBS can follow without help, and that only holds if there is no separate version for people who already know.

## The five doors

Two groups came back with five doors and meant two different things by it, and the disagreement is worth more than either answer on its own.

Testolof argued the front door should stay the sprint-one table, and the doors should be a filter on it: Optimise, Scale, Explore, Platform, Support — named after the owners already doing the work in the existing rows, not invented categories. Walking through Platform shows the same columns, just fewer rows. Testmar argued that arriving should be a choice of where to go, not a wall of rows, and that the doors are the canon's own content types turned into places: What changed, Playbooks, Rollout status, Decisions, Who to ask.

The page takes Testmar's doors as the doors, and Testolof's five names as the team filter. The front of the page is nothing but the five doors, each a navy heading and one plain sentence, with a lot of air between them — no table repeated above the table, no numbers, no icons, nothing that needs a legend. "What changed" opens onto the table that already exists; the other four are marked not built yet, and the line saying so stays until it is false.

What Testolof's version bought, and what is kept, is that the team filter is no longer three placeholders. It is five names traceable to owners in the rows: Optimise for the CRO team's tests, Scale for the Content team's rollouts, Explore for Market operations' early rollouts, Platform pulled out of Scale for technical changes that are not a CRO test, and Support for Support and web and Brand and web, including the decisions against. What Testolof's version argued and lost is that a door should never be more than a filter — that the portal is one table and everything else is a narrowing of it. The cost of going the other way is a front page that promises four rooms that are empty; the page pays it by saying so in plain words rather than pretending.

Testmar's own open question stands: whether Rollout status is a separate door or a filtered view of the rows already inside What changed was not settled, and nothing here settles it.

## What is not here

No charts, no counts, no coloured status pills. Anything that needs a legend belongs in a meeting.

The post itself — what you get when you click a row — is not decided. Quartz put it in next sprint's question and it stays there; the rows are not links yet.

Nothing was designed for the inside of Playbooks, Rollout status, Decisions or Who to ask. They are named and described in one sentence each, and that is the whole of it.

Quartz considered a third audience, a decision-maker weighing a similar call, and concluded their need is the same table plus a click into the post, not a different first screen.

## Open, and left open deliberately

Neither group had a working conversation this sprint before the clock ran out. Both five-door lists are the most defensible reading of the canon's own open question, not something argued through. Treat the names as a starting guess for the next sprint to correct.

Whether Platform and Support carry enough of their own rows to stand as separate doors rather than folding back into Scale and Explore was not checked. Whether five is the right number long-term, or whether it grows as more teams start owning rows, is open.

Whether a post can belong to more than one type was never discussed.

Whether "Decided against" rows should carry a Result at all was not settled. The page assumes yes, with the negative result written plainly, because a decision and its reason going unrecorded is exactly the ask-a-colleague case this is meant to remove.

All table content is example data except the one result the room already had — sticky navigation moving checkout starts by 11%. The page marks it as example data where a reader will see it.

<!-- merged: dbs-portal sprint 2 — Team Testolof, Team Testmar -->
