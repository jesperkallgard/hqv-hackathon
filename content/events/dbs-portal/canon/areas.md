---
title: Areas
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
type: DbsPortalAreas
data:
  title: Areas
  summary: Five scan-first areas combine the dashboard, the working wall of updates and the owner board
    into one start page.
  areas:
  - name: Scale
    description: My Husqvarna, Dealer Locator and Support changes that affect how customers find, use
      and get help from husqvarna.com.
    tags:
    - Scale
    - Weekly
    - 'Owner: Lena Kovacs'
    posts:
    - title: Support entry points reduced drop-off in spare parts journeys
      status: Live
      body: A clearer route from product pages into Support lifted spare parts starts by 14% in EU, which
        means fewer customers abandon the journey before they see help content.
      owner: Lena Kovacs
      frequency: Weekly
      track: Scale
      bu: EU
    - title: Dealer Locator content rules are now shared across US product families
      status: Live
      body: Riders, chainsaws and leaf blowers now follow one publishing pattern in Sitecore, which cuts
        local rework and makes dealer information easier to trust.
      owner: Omar Ellingsen
      frequency: Monthly
      track: Scale
      bu: US
    - title: My Husqvarna support handoff is waiting for Dynamics mapping
      status: Watch
      body: The service flow is designed and tested, but PAC deployment depends on final field mapping
        in Dynamics before customers can move through without manual support.
      owner: Priya Nair
      frequency: Weekly
      track: Scale
      bu: PAC
  - name: Optimise
    description: A/B testing and experimentation results, written as outcomes first so markets and brand
      can see what changed and what it meant.
    tags:
    - Optimise
    - Weekly
    - 'Owner: Sofia Marin'
    posts:
    - title: Sticky navigation moved checkout starts by 11%
      status: Live
      body: The winning variant kept key actions visible on mobile product pages for consumers in EU,
        which increased movement into checkout without lowering product-detail reading.
      owner: Sofia Marin
      frequency: Weekly
      track: Optimise
      bu: EU
    - title: Category-page proof points improved chainsaw engagement
      status: Live
      body: Adding clearer performance proof raised onward clicks to chainsaw detail pages by 9% among
        tree care professionals in US.
      owner: Daniel Moreau
      frequency: Monthly
      track: Optimise
      bu: US
    - title: Brand-safe headline test is ready for review
      status: Planned
      body: A new message hierarchy for Automowers is prepared in Kameleoon; brand review will decide
        whether the test goes live in PAC next week.
      owner: Elise Tan
      frequency: Weekly
      track: Optimise
      bu: PAC
  - name: Explore
    description: Conversational AI work, concept tests and show-and-tell items that shape what husqvarna.com
      could become next.
    tags:
    - Explore
    - Weekly
    - 'Owner: Mateo Silva'
    posts:
    - title: Conversational support concept cut time to first answer
      status: Watch
      body: In moderated testing, visitors reached a relevant support path 38 seconds faster when guided
        by a conversational entry point, which suggests a simpler start for high-intent questions.
      owner: Mateo Silva
      frequency: Weekly
      track: Explore
      bu: EU
    - title: Product advice prototype helped consumers compare Riders faster
      status: Planned
      body: Early concept feedback showed stronger confidence when the assistant translated model differences
        into plain language rather than feature tables alone.
      owner: Iris Velasco
      frequency: Monthly
      track: Explore
      bu: US
    - title: Brand review requested clearer guardrails for generated answers
      status: Watch
      body: The concept is promising, but brand needs tighter wording boundaries before AI-generated responses
        can appear against live product content.
      owner: Noam Richter
      frequency: Weekly
      track: Explore
      bu: PAC
  - name: Analytics
    description: Measurement, KPI reading and reporting that help management and markets see whether investment
      in husqvarna.com is producing results.
    tags:
    - Monthly
    - 'Owner: Hannah Petrov'
    - GA4
    posts:
    - title: New product-family view makes Automowers and Riders easier to compare
      status: Live
      body: GA4 and BigQuery now report product-family performance in one structure, which lets markets
        see whether movement differs between Automowers, Riders and chainsaws without rebuilding the dataset.
      owner: Hannah Petrov
      frequency: Monthly
      track: Scale
      bu: EU
    - title: Market teams now get one view of experiment impact by segment
      status: Live
      body: Consumer, green space professional and tree care professional results are visible side by
        side, making it easier to see where a win travels and where it does not.
      owner: Victor Hale
      frequency: Weekly
      track: Optimise
      bu: US
    - title: Support search exits are under review in PAC
      status: Watch
      body: The latest reading shows a higher exit rate after internal search on support content, which
        points to a findability issue rather than a traffic issue.
      owner: Amina Rahal
      frequency: Weekly
      track: Scale
      bu: PAC
  - name: Contact and support services
    description: The quickest route to the right owner, plus operational ticket and release visibility
      for colleagues who need help or a decision.
    tags:
    - Static
    - Weekly
    - 'Owner: Clara Westin'
    posts:
    - title: Sitecore release calendar now includes market impact notes
      status: Live
      body: Release entries now state which BU is affected and whether local content owners need to act,
        so markets can scan impact without asking DBS first.
      owner: Clara Westin
      frequency: Weekly
      track: Scale
      bu: EU
    - title: Image-optimisation ticket queue is within service target
      status: Good
      body: Current turnaround for publishing-related tickets is two working days, which keeps campaign
        launches on schedule for US and PAC teams.
      owner: Felix Arden
      frequency: Weekly
      track: Scale
      bu: US
    - title: Brand asset request path has one named owner per request type
      status: Live
      body: Colleagues can now see who approves copy, templates and landing-page requests, which shortens
        handoff time when launches cross DBS and brand.
      owner: Clara Westin
      frequency: Static
      track: Optimise
      bu: PAC
  - name: SEO
    description: SEO carries search-related updates and results.
    tags:
    - SEO
    - Weekly
    - 'Owner: Nils Aberg'
    posts: []
  - name: Completed initiatives
    description: Completed initiatives shows finished digital work and what it changed.
    tags:
    - Scale
    - Monthly
    - 'Owner: Ida Sorel'
    posts: []
```

```block
type: DbsPortalMetrics
data:
  title: Metrics
  summary: Supporting reads that explain the headline cards and make the measurement window explicit.
  metrics:
  - label: Product-family reporting view
    reading: Automowers, Riders and chainsaws now read in one structure across GA4 and BigQuery.
    measured: 28 Feb 2025
    comparison: 28 Feb 2024
  - label: Segment impact view
    reading: Consumer, green space professional and tree care professional results are visible side by
      side.
    measured: 6 Mar 2025
    comparison: 6 Mar 2024
  - label: Support search exits in PAC
    reading: Exit rate remains under review after internal search on support content.
    measured: 8 Mar 2025
    comparison: 1 Mar 2025
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
