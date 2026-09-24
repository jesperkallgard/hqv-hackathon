---
title: DBS
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
type: DbsPortalRouting
data:
  question: What are you interested in seeing on this page?
  options:
  - label: Economics
    href: '#kpis'
  - label: Feature releases
    href: '#recent'
  - label: Who to contact
    href: /dbs-portal/live/contacts
  - label: KPIs
    href: '#kpis'
  - label: What changed
    href: '#feed'
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
      href: '#'
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
type: DbsPortalContentMap
data:
  title: Content the DBS start page carries
  summary: A named list of real content types so colleagues can see what belongs here, what each part
    is for, who keeps it current, and how often it changes.
  contentMap:
  - name: What’s new
    purpose: Tell colleagues what changed and why it matters.
    owner: Rosa Lindberg
    frequency: Weekly or monthly
    tags:
    - Updates
    - Weekly or monthly
    - 'Owner: Rosa Lindberg'
    items:
    - title: Support entry points reduced drop-off in spare parts journeys
      status: Live
      body: A clearer route from product pages into Support lifted spare parts starts by 14% in EU, which
        means fewer customers abandon the journey before they see help content.
      owner: Rosa Lindberg
      track: Scale
      bu: EU
    - title: Sticky navigation moved checkout starts by 11%
      status: Live
      body: The winning variant kept key actions visible on mobile product pages for consumers in EU,
        which increased movement into checkout without lowering product-detail reading.
      owner: Owen Mercer
      track: Optimise
      bu: EU
  - name: Try this prototype
    purpose: Let colleagues experience a new flow or concept.
    owner: Talia Brennan
    frequency: Weekly
    tags:
    - Prototype
    - Weekly
    - 'Owner: Talia Brennan'
    items:
    - title: Product advice prototype for Riders comparison
      status: Planned
      body: Early concept feedback showed stronger confidence when the assistant translated model differences
        into plain language rather than feature tables alone.
      owner: Talia Brennan
      track: Explore
      bu: US
    - title: Conversational support entry prototype
      status: Watch
      body: Visitors reached a relevant support path 38 seconds faster in moderated testing, which suggests
        a simpler starting point for high-intent questions.
      owner: Emil Hartmann
      track: Explore
      bu: EU
  - name: Polls
    purpose: Collect quick feedback or a decision.
    owner: Nadia Flores
    frequency: As needed
    tags:
    - Feedback
    - As needed
    - 'Owner: Nadia Flores'
    items:
    - title: Which market should receive the next sticky navigation rollout?
      status: Open
      body: Market teams are choosing whether Riders in US or Automowers in PAC should receive the next
        production rollout first.
      owner: Nadia Flores
      track: Optimise
      bu: US
    - title: Which support topic needs a clearer route from product pages?
      status: Open
      body: Support and market teams are ranking the journeys that most need a stronger handoff from product
        detail pages.
      owner: Callum Reid
      track: Scale
      bu: EU
  - name: Demos and show and tell
    purpose: Let people catch up without attending live.
    owner: Mara Jensen
    frequency: Weekly or monthly
    tags:
    - Show and tell
    - Weekly or monthly
    - 'Owner: Mara Jensen'
    items:
    - title: Mobile product-page patterns that moved checkout starts
      status: Live
      body: The session focused on the sticky navigation result, what moved, and where the pattern can
        travel next.
      owner: Mara Jensen
      track: Optimise
      bu: US
    - title: Conversational AI guardrails for support entry points
      status: Live
      body: Explore and brand reviewed response boundaries, escalation paths and where conversational
        support can appear safely.
      owner: Leo Hammond
      track: Explore
      bu: PAC
  - name: Status and known issues
    purpose: Make risk visible.
    owner: Ingrid Walsh
    frequency: Weekly
    tags:
    - Operating status
    - Weekly
    - 'Owner: Ingrid Walsh'
    items:
    - title: My Husqvarna support handoff is waiting for Dynamics mapping
      status: Watch
      body: The service flow is designed and tested, but PAC deployment depends on final field mapping
        in Dynamics before customers can move through without manual support.
      owner: Ingrid Walsh
      track: Scale
      bu: PAC
    - title: Support search exits are under review in PAC
      status: Investigating
      body: The latest reading shows a higher exit rate after internal search on support content, which
        points to a findability issue rather than a traffic issue.
      owner: Felix Rowan
      track: Scale
      bu: PAC
  - name: KPIs
    purpose: Show results and direction of travel.
    owner: Helena Brooks
    frequency: Monthly
    tags:
    - KPI
    - Monthly
    - 'Owner: Helena Brooks'
    items:
    - title: Product-family reporting now compares Automowers, Riders and chainsaws in one view
      status: Live
      body: GA4 and BigQuery now report product-family performance in one structure, which lets markets
        compare movement without rebuilding the dataset.
      owner: Helena Brooks
      track: Scale
      bu: EU
    - title: Segment impact view shows where experiment wins travel
      status: Live
      body: Consumer, green space professional and tree care professional results are visible side by
        side, making it easier to see where a win holds and where it does not.
      owner: Marcus Doyle
      track: Optimise
      bu: US
  - name: Kaj
    purpose: Let people ask for owners, next steps and context without digging.
    owner: Sanna Doyle
    frequency: Static
    tags:
    - Chat entry
    - Static
    - 'Owner: Sanna Doyle'
    items:
    - title: Quick route to the right owner
      status: Live
      body: Kaj answers who owns a topic, where a request starts, and what to read next when a colleague
        does not know the DBS structure.
      owner: Sanna Doyle
      track: Scale
      bu: EU
    - title: Fast context on releases and experiments
      status: Live
      body: Kaj pulls together release dependencies, experiment outcomes and support context so colleagues
        can ask one question instead of opening several pages.
      owner: Sanna Doyle
      track: Optimise
      bu: PAC
  - name: Explore
    purpose: Show what is being tried and why.
    owner: Adrian Wells
    frequency: Weekly
    tags:
    - Explore
    - Weekly
    - 'Owner: Adrian Wells'
    items:
    - title: Conversational support concept cut time to first answer
      status: Watch
      body: In moderated testing, visitors reached a relevant support path 38 seconds faster when guided
        by a conversational entry point, which suggests a simpler start for high-intent questions.
      owner: Adrian Wells
      track: Explore
      bu: EU
    - title: Brand review requested clearer guardrails for generated answers
      status: Watch
      body: The concept is promising, but brand needs tighter wording boundaries before AI-generated responses
        can appear against live product content.
      owner: Celia Novak
      track: Explore
      bu: PAC
  - name: Optimise
    purpose: Show what changed, what it meant, and what should happen next.
    owner: Rowan Pierce
    frequency: Weekly
    tags:
    - Optimise
    - Weekly
    - 'Owner: Rowan Pierce'
    items:
    - title: Sticky navigation moved checkout starts by 11%
      status: Live
      body: The winning variant kept key actions visible on mobile product pages for consumers in EU,
        which increased movement into checkout without lowering product-detail reading.
      owner: Rowan Pierce
      track: Optimise
      bu: EU
    - title: Category-page proof points improved chainsaw engagement
      status: Live
      body: Adding clearer performance proof raised onward clicks to chainsaw detail pages by 9% among
        tree care professionals in US.
      owner: Daria Quinn
      track: Optimise
      bu: US
  - name: Weekly update
    purpose: A weekly update area with a low threshold for contribution, so people actually add to it.
    owner: Elsa Ranger
    frequency: Weekly
    tags:
    - Weekly
    - 'Owner: Elsa Ranger'
    items: []
  - name: Statistics and ticket status
    purpose: A statistics area with a ticket status follower, so people can check numbers and track follow-up
      work.
    owner: Tomas Ek
    frequency: Weekly
    tags:
    - Statistics
    - Weekly
    - 'Owner: Tomas Ek'
    items: []
  - name: Design wall
    purpose: A wall where people can heart concepts and add ideas, so design thinking collects feedback
      in one place.
    owner: Vera Lund
    frequency: As needed
    tags:
    - Design
    - As needed
    - 'Owner: Vera Lund'
    items: []
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


This sprint keeps the existing start page and all current sections, then adds one named content map that makes the site’s post types explicit: Team Amanda’s owner-and-frequency rule, Team Anton’s concrete buckets and Kaj entry, Team Morten’s outcome-led content families, and Team Erkan’s tagged post types all land there. I kept Team Hilda’s track logic inside the existing Areas section rather than collapsing the page to only three buckets, and took Team Quan’s argument that KPI proof points should stay high on the page without replacing the broader front-door structure.

<!-- merged: dbs-portal sprint 3 — Team Amanda, Team Morten, Team Hilda, Team Erkan, Team Anton, Team Quan -->
