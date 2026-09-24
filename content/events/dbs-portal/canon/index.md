---
title: DBS
---

```block
type: DbsPortalHeader
data:
  title: DBS
  nav:
  - label: Areas
    href: /dbs-portal/live/areas
  - label: Releases
    href: /dbs-portal/live/pipeline
  - label: Activities
    href: /dbs-portal/live/activities
  - label: Who to ask
    href: /dbs-portal/live/contacts
```

```block
type: DbsPortalHero
data:
  hero:
    title: Be the answer everywhere.
    primaryAction:
      label: Ask Kaj
      href: '#kaj'
    secondaryAction:
      label: Open knowledge base
      href: '#knowledge'
    tertiaryAction:
      label: See the content map
      href: '#content-map'
    favouriteAction:
      label: Save this start page
      href: '#'
  kaj:
    title: Kaj
    body: Ask one vague question. Kaj answers what it can, and when it cannot it names the owner and the
      next step instead of guessing.
    prompt: Ask about a market change, a release dependency, an experiment result, or who owns a topic.
    chips:
    - Who owns Support in PAC?
    - What is next in the release timeline?
    - Show recent Optimise results
    - Where do experimentation requests start?
    action:
      label: Start a question
      href: '#ask-kaj'
    refuses: It does not answer for other teams' systems, and it says so rather than improvising.
```

```block
type: DbsPortalRecent
data:
  title: Recently added
  summary: The newest thing first, and what came just before it.
  featured:
    title: Sticky navigation moved checkout starts by 11%
    body: Markets can use the mobile pattern on priority product families without losing product-detail
      reading.
    author: Sofia Marin
    date: 12 Mar 2025
  items:
  - title: Spare-parts starts are up 14% in EU
    body: A clearer route from product pages into Support is moving more customers into help journeys
      before they drop off.
    author: Lena Kovacs
    date: 11 Mar 2025
  - title: Revenue impact is being reviewed with the March readout
    body: The start page now surfaces revenue as a named business question so management can see where
      outcome reading is still open.
    author: Hannah Petrov
    date: 31 Mar 2025
```

```block
type: DbsPortalKpis
data:
  title: KPI cards
  summary: Every number is dated so markets, brand and management can read it in context.
  kpis:
  - label: Checkout starts up 11%
    value: 11%
    context: Sticky navigation kept key actions visible on mobile product pages without reducing product-detail
      reading.
    detail: Optimise · EU
    measured: 12 Mar 2025
    comparison: 12 Mar 2024
  - label: Spare-parts starts up 14% in EU
    value: 14%
    context: A clearer route from product pages into Support moved more customers into spare-parts journeys.
    detail: Scale · EU
    measured: 11 Mar 2025
    comparison: 11 Mar 2024
  - label: 38 seconds faster to a first answer
    value: 38s
    context: Conversational support concepts helped visitors reach a relevant support path sooner in moderated
      testing.
    detail: Explore · EU
    measured: 7 Mar 2025
    comparison: 15 Feb 2025
  - label: Chainsaw engagement up 9%
    value: 9%
    context: Clearer proof points on category pages increased onward clicks to detail pages for tree care
      professionals.
    detail: Optimise · US
    measured: 10 Mar 2025
    comparison: 10 Mar 2024
```

```block
type: DbsPortalPromo
data:
  title: Submit an idea
  body: The site is meant to invite people to contribute, not only to be read. Send a request, a problem
    or a rough idea and it goes to the person who owns that area.
  action:
    label: Submit an idea
    href: '#submit'
```

```block
type: DbsPortalFeed
data:
  title: What changed lately
  summary: 'Newest first: what moved on husqvarna.com, what it meant, and who owns the follow-up.'
  items:
  - title: Sticky navigation moved checkout starts by 11%
    body: Markets can use the mobile pattern on priority product families without losing product-detail
      reading.
    status: Live
    owner: Sofia Marin
    frequency: Weekly
    track: Optimise
    bu: EU
    date: 12 Mar 2025
  - title: Spare-parts starts are up 14% in EU
    body: A clearer route from product pages into Support is moving more customers into help journeys
      before they drop off.
    status: Live
    owner: Lena Kovacs
    frequency: Weekly
    track: Scale
    bu: EU
    date: 11 Mar 2025
  - title: Revenue impact is being reviewed with the March readout
    body: The start page now surfaces revenue as a named business question so management can see where
      outcome reading is still open.
    status: In review
    owner: Hannah Petrov
    frequency: Monthly
    track: Analytics
    bu: EU
    date: 31 Mar 2025
```

```block
type: DbsPortalContacts
data:
  title: Who to ask
  summary: Everyone here says what they can help with, so you can find help without knowing the org chart
    first.
  contacts:
  - name: Lena Kovacs
    role: Scale lead
    detail: Owns My Husqvarna, Dealer Locator and Support changes on husqvarna.com.
    meta:
    - Scale
    - EU
    - Weekly
  - name: Sofia Marin
    role: Experimentation lead
    detail: Owns the Optimise track and the A/B testing programme in Kameleoon.
    meta:
    - Optimise
    - US
    - Weekly
  - name: Mateo Silva
    role: Conversational AI lead
    detail: Owns Explore concepts and reviews what conversational AI means for customer journeys.
    meta:
    - Explore
    - PAC
    - Weekly
  - name: Hannah Petrov
    role: Analytics manager
    detail: Owns GA4 and BigQuery reporting for product-family and segment performance.
    meta:
    - Analytics
    - EU
    - Monthly
  - name: Clara Westin
    role: Service operations manager
    detail: Owns release communications, support services and the route into DBS operational help.
    meta:
    - Support services
    - EU
    - Static
  - name: Priya Nair
    role: Sitecore release manager
    detail: Owns release readiness across Sitecore, integrations and IT handoff.
    meta:
    - Scale
    - PAC
    - Weekly
```

```block
type: DbsPortalFooter
data:
  footer:
    text: DBS sits inside Digital Solutions under Martin Cronholm and owns building and optimising husqvarna.com.
    links:
    - label: Sitecore guide
      href: '#'
    - label: Experiment library
      href: '#'
    - label: Contact DBS
      href: '#'
```

```block
type: DbsPortalCai
data:
  title: Kaj
  exchange:
    turns:
    - who: them
      text: What are the plans for the checkout?
    - who: kaj
      text: Checkout sits under Optimise. The sticky navigation winner moved checkout starts by 11% on
        mobile product pages, and that pattern is rolling out to Riders templates next. Nothing else on
        checkout is in the pipeline this month.
      owner:
        name: Sofia Marin
        team: Optimise — the A/B testing programme in Kameleoon
    - who: them
      text: Does that hold outside EU?
    - who: kaj
      text: The 11% reading is EU only, measured 12 March against the same week last year. US has a separate
        result on category pages, up 9% for tree care professionals. I do not have a PAC reading.
    choices:
    - Send this to Sofia
    - See the release pipeline
    - Ask something else
    limit: Kaj does not answer for other teams' systems. When a question needs another source, it says
      so and points there.
```


This sprint keeps the existing start page and all current sections, then adds one named content map that makes the site’s post types explicit: Team Amanda’s owner-and-frequency rule, Team Anton’s concrete buckets and Kaj entry, Team Morten’s outcome-led content families, and Team Erkan’s tagged post types all land there. I kept Team Hilda’s track logic inside the existing Areas section rather than collapsing the page to only three buckets, and took Team Quan’s argument that KPI proof points should stay high on the page without replacing the broader front-door structure.

<!-- merged: dbs-portal sprint 3 — Team Amanda, Team Morten, Team Hilda, Team Erkan, Team Anton, Team Quan -->
