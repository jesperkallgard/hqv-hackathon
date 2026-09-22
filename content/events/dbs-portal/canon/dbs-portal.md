---
title: "DBS — what changed, what's live, who owns it"
ingress: "The first screen of the DBS portal: one table of what changed and what it meant, grouped by status, every row carrying an owner and an update cadence."
cycle: 1
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
      - Scale
      - Optimise
      - Explore
    teamNote: "Which teams and areas belong in this list was not settled this sprint. Scale, Optimise and Explore are shown as placeholders."
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
          team: Scale
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
          team: Explore
        - test: Video background on the start page
          result: Page got slower, nothing moved — dropped
          owner: Brand and web
          updated: on change
          type: Decision
          team: Scale
  rule: "Every row carries an owner and an update cadence. No owner, no row."
  footerOwner: "This page is kept by DBS."
  footerNote: "If something here is out of date, the owner named in the row is the person to ask."
```

## Why it looks like this

Two groups described the same first screen and disagreed about what it is a list of. Wombat wrote a reverse-chronological list of posts — what changed, why, who owns it — filtered by type and by team. Quartz wrote one table grouped by status: Rolled out, Running, Decided against, on the argument that "has this already been tried, and is it live" is the question people actually bring, not who ran it or when.

The page goes Quartz's way on the ordering. Status is the first thing you see, and the three groups are in Quartz's order. Wombat's argument for newest-first was that both audiences arrive already knowing they need an update rather than an introduction; that holds, and it is why there is no landing page, no hero and no explainer above the table — but inside that, status answers the question faster than date does.

Wombat's filters survive, against Quartz, who wanted no filters panel at all and the table as the whole screen. Filtering is by type and by team only. There is no search box: the need is "what's new in my area" and "what's new full stop", not keyword lookup, and search is for finding something you already know exists.

Both groups set the same hard rule and it is built as a rule, not a style: a row without a named owner and an update cadence does not appear. Not greyed out, not flagged — not eligible.

There is one screen, not an insider view and an outsider view. The bar is that someone outside DBS can follow without help, and that only holds if there is no separate version for people who already know.

## What is not here

No charts, no counts, no coloured status pills. Anything that needs a legend belongs in a meeting.

The post itself — what you get when you click a row — is not decided. Quartz put it in next sprint's question and it stays there; the rows are not links yet.

Quartz considered a third audience, a decision-maker weighing a similar call, and concluded their need is the same table plus a click into the post, not a different first screen.

## Open, and left open deliberately

Which named teams or areas exist for the team filter was not settled. The three shown are placeholders and the page says so.

Whether a post can belong to more than one type was never discussed.

Whether "Decided against" rows should carry a Result at all was not settled. The page assumes yes, with the negative result written plainly, because a decision and its reason going unrecorded is exactly the ask-a-colleague case this is meant to remove.

All table content is example data except the one result the room already had — sticky navigation moving checkout starts by 11%. The page marks it as example data where a reader will see it.

<!-- merged: dbs-portal sprint 1 — Wombat, Quartz -->
