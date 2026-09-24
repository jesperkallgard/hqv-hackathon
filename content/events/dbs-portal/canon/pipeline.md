---
title: Release pipeline
---

```block
type: DbsPortalHeader
data:
  title: DBS
  summary: DBS — Digital Business Solutions — owns building and optimising husqvarna.com on Sitecore.
    This start page helps market teams, brand, IT, management and new joiners see what changed, what it
    means, and who to ask.
  nav:
  - label: Start page
    href: /dbs-portal/live
  - label: Areas
    href: /dbs-portal/live/areas
  - label: Release pipeline
    href: /dbs-portal/live/pipeline
  - label: Activities
    href: /dbs-portal/live/activities
  - label: Contacts
    href: /dbs-portal/live/contacts
```

```block
type: DbsPortalPipeline
data:
  title: Release timeline and follow-up work
  summary: The release pipeline now reads as a timeline of expected work so the next items are visible
    at a glance.
  rows:
  - item: Support content component rollout
    track: Scale
    bu: EU
    status: Ready for IT
    owner: Priya Nair
    nextStep: Confirm Sitecore deployment window
    frequency: Weekly
    window: 18 Mar 2025
  - item: Sticky navigation winner rollout
    track: Optimise
    bu: US
    status: Live
    owner: Sofia Marin
    nextStep: Share pattern with Riders templates
    frequency: Weekly
    window: 14 Mar 2025
  - item: Conversational support concept review
    track: Explore
    bu: PAC
    status: In review
    owner: Mateo Silva
    nextStep: Brand guardrail sign-off
    frequency: Weekly
    window: 20 Mar 2025
  - item: Dealer Locator data cleanup
    track: Scale
    bu: US
    status: Planned
    owner: Omar Ellingsen
    nextStep: Finalise source mapping in Dynamics
    frequency: Monthly
    window: 27 Mar 2025
  - item: Segment dashboard handoff
    track: Optimise
    bu: EU
    status: Live
    owner: Hannah Petrov
    nextStep: Market onboarding session
    frequency: Monthly
    window: 22 Mar 2025
  - item: Support search exit analysis
    track: Scale
    bu: PAC
    status: Investigating
    owner: Amina Rahal
    nextStep: Validate search-term clusters in BigQuery
    frequency: Weekly
    window: 25 Mar 2025
  knowledge:
    title: Quick links
    items:
    - title: Knowledge base
      body: Use the main DBS knowledge base when you need the step-by-step route, source documentation
        or shared operating rules.
      linkLabel: Open knowledge base
      href: '#'
    - title: Show and tell library
      body: Open summaries and source material from recent sessions without scanning a full meeting recap.
      linkLabel: Open library
      href: '#show-and-tell'
    - title: Initiative and topic pages
      body: Jump straight to release work, experimentation, analytics and support topics from one place.
      linkLabel: Open topic links
      href: '#areas'
    - title: How experimentation requests enter Kameleoon
      body: Brand and market teams can see what a strong test brief needs before DBS turns it into a live
        experiment.
      linkLabel: Open how-to
      href: '#'
    - title: How release handoff works between DBS and IT
      body: The handoff checklist sets expectations for Sitecore, integrations and deployment windows
        so nothing waits on a hidden dependency.
      linkLabel: Open handoff guide
      href: '#'
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
