---
title: DBS
---

```block
type: DbsPortalPage
data:
  title: DBS
  summary: DBS — Digital Business Solutions — owns building and optimising husqvarna.com on Sitecore. This front door helps market teams, brand, IT, management and new joiners see what changed, what it means, and who to ask.
  nav:
    - { label: Overview, href: "#overview" }
    - { label: Areas, href: "#areas" }
    - { label: Release timeline, href: "#pipeline" }
    - { label: Show and tell, href: "#show-and-tell" }
    - { label: Contacts, href: "#contacts" }
  hero:
    title: What DBS changed on husqvarna.com this week
    intro: "One page for the people outside DBS who need the picture fast: what is live, what is moving next, what it means for their market, and who owns the follow-up."
    primaryAction: { label: Ask Kaj, href: "#kaj" }
    secondaryAction: { label: Open knowledge base, href: "#knowledge" }
    tertiaryAction: { label: See this week's priorities, href: "#areas" }
    favouriteAction: { label: Save this start page, href: "#" }
  highlights:
    - title: Sticky navigation moved checkout starts by 11%
      quote: Markets can use the mobile pattern on priority product families without losing product-detail reading.
      value: "11%"
      status: Live
      owner: Sofia Marin
      frequency: Weekly
      track: Optimise
      bu: EU
      measured: 12 Mar 2025
      comparison: 12 Mar 2024
    - title: Spare-parts starts are up 14% in EU
      quote: A clearer route from product pages into Support is moving more customers into help journeys before they drop off.
      value: "14%"
      status: Live
      owner: Lena Kovacs
      frequency: Weekly
      track: Scale
      bu: EU
      measured: 11 Mar 2025
      comparison: 11 Mar 2024
    - title: Revenue impact is being reviewed with the March readout
      quote: The start page now surfaces revenue as a named business question so management can see where outcome reading is still open.
      value: Open
      status: In review
      owner: Hannah Petrov
      frequency: Monthly
      track: Analytics
      bu: EU
      measured: 31 Mar 2025
      comparison: 31 Mar 2024
  kaj:
    title: Kaj
    body: Kaj is the internal AI chat for quick questions about DBS, the right owner, and where to go next.
    prompt: Ask about a market change, a release dependency, an experiment result, or who owns a topic.
    chips:
      - Who owns Support in PAC?
      - What is next in the release timeline?
      - Show recent Optimise results
      - Where do experimentation requests start?
    action: { label: Start a question, href: "#" }
  kpisTitle: KPI cards
  kpisSummary: Every number is dated so markets, brand and management can read it in context.
  kpis:
    - label: Checkout starts up 11%
      value: "11%"
      context: Sticky navigation kept key actions visible on mobile product pages without reducing product-detail reading.
      detail: Optimise · EU
      measured: 12 Mar 2025
      comparison: 12 Mar 2024
    - label: Spare-parts starts up 14% in EU
      value: "14%"
      context: A clearer route from product pages into Support moved more customers into spare-parts journeys.
      detail: Scale · EU
      measured: 11 Mar 2025
      comparison: 11 Mar 2024
    - label: 38 seconds faster to a first answer
      value: "38s"
      context: Conversational support concepts helped visitors reach a relevant support path sooner in moderated testing.
      detail: Explore · EU
      measured: 7 Mar 2025
      comparison: 15 Feb 2025
    - label: Chainsaw engagement up 9%
      value: "9%"
      context: Clearer proof points on category pages increased onward clicks to detail pages for tree care professionals.
      detail: Optimise · US
      measured: 10 Mar 2025
      comparison: 10 Mar 2024
  metricsTitle: Metrics
  metricsSummary: Supporting reads that explain the headline cards and make the measurement window explicit.
  metrics:
    - label: Product-family reporting view
      reading: Automowers, Riders and chainsaws now read in one structure across GA4 and BigQuery.
      measured: 28 Feb 2025
      comparison: 28 Feb 2024
    - label: Segment impact view
      reading: Consumer, green space professional and tree care professional results are visible side by side.
      measured: 6 Mar 2025
      comparison: 6 Mar 2024
    - label: Support search exits in PAC
      reading: Exit rate remains under review after internal search on support content.
      measured: 8 Mar 2025
      comparison: 1 Mar 2025
  areasTitle: Areas
  areasSummary: Five scan-first areas combine the dashboard, the working wall of updates and the owner board into one front door.
  areas:
    - name: Scale
      description: My Husqvarna, Dealer Locator and Support changes that affect how customers find, use and get help from husqvarna.com.
      tags:
        - Scale
        - Weekly
        - "Owner: Lena Kovacs"
      posts:
        - title: Support entry points reduced drop-off in spare parts journeys
          status: Live
          body: A clearer route from product pages into Support lifted spare parts starts by 14% in EU, which means fewer customers abandon the journey before they see help content.
          owner: Lena Kovacs
          frequency: Weekly
          track: Scale
          bu: EU
        - title: Dealer Locator content rules are now shared across US product families
          status: Live
          body: Riders, chainsaws and leaf blowers now follow one publishing pattern in Sitecore, which cuts local rework and makes dealer information easier to trust.
          owner: Omar Ellingsen
          frequency: Monthly
          track: Scale
          bu: US
        - title: My Husqvarna support handoff is waiting for Dynamics mapping
          status: Watch
          body: The service flow is designed and tested, but PAC deployment depends on final field mapping in Dynamics before customers can move through without manual support.
          owner: Priya Nair
          frequency: Weekly
          track: Scale
          bu: PAC
    - name: Optimise
      description: A/B testing and experimentation results, written as outcomes first so markets and brand can see what changed and what it meant.
      tags:
        - Optimise
        - Weekly
        - "Owner: Sofia Marin"
      posts:
        - title: Sticky navigation moved checkout starts by 11%
          status: Live
          body: The winning variant kept key actions visible on mobile product pages for consumers in EU, which increased movement into checkout without lowering product-detail reading.
          owner: Sofia Marin
          frequency: Weekly
          track: Optimise
          bu: EU
        - title: Category-page proof points improved chainsaw engagement
          status: Live
          body: Adding clearer performance proof raised onward clicks to chainsaw detail pages by 9% among tree care professionals in US.
          owner: Daniel Moreau
          frequency: Monthly
          track: Optimise
          bu: US
        - title: Brand-safe headline test is ready for review
          status: Planned
          body: A new message hierarchy for Automowers is prepared in Kameleoon; brand review will decide whether the test goes live in PAC next week.
          owner: Elise Tan
          frequency: Weekly
          track: Optimise
          bu: PAC
    - name: Explore
      description: Conversational AI work, concept tests and show-and-tell items that shape what husqvarna.com could become next.
      tags:
        - Explore
        - Weekly
        - "Owner: Mateo Silva"
      posts:
        - title: Conversational support concept cut time to first answer
          status: Watch
          body: In moderated testing, visitors reached a relevant support path 38 seconds faster when guided by a conversational entry point, which suggests a simpler start for high-intent questions.
          owner: Mateo Silva
          frequency: Weekly
          track: Explore
          bu: EU
        - title: Product advice prototype helped consumers compare Riders faster
          status: Planned
          body: Early concept feedback showed stronger confidence when the assistant translated model differences into plain language rather than feature tables alone.
          owner: Iris Velasco
          frequency: Monthly
          track: Explore
          bu: US
        - title: Brand review requested clearer guardrails for generated answers
          status: Watch
          body: The concept is promising, but brand needs tighter wording boundaries before AI-generated responses can appear against live product content.
          owner: Noam Richter
          frequency: Weekly
          track: Explore
          bu: PAC
    - name: Analytics
      description: Measurement, KPI reading and reporting that help management and markets see whether investment in husqvarna.com is producing results.
      tags:
        - Monthly
        - "Owner: Hannah Petrov"
        - GA4
      posts:
        - title: New product-family view makes Automowers and Riders easier to compare
          status: Live
          body: GA4 and BigQuery now report product-family performance in one structure, which lets markets see whether movement differs between Automowers, Riders and chainsaws without rebuilding the dataset.
          owner: Hannah Petrov
          frequency: Monthly
          track: Scale
          bu: EU
        - title: Market teams now get one view of experiment impact by segment
          status: Live
          body: Consumer, green space professional and tree care professional results are visible side by side, making it easier to see where a win travels and where it does not.
          owner: Victor Hale
          frequency: Weekly
          track: Optimise
          bu: US
        - title: Support search exits are under review in PAC
          status: Watch
          body: The latest reading shows a higher exit rate after internal search on support content, which points to a findability issue rather than a traffic issue.
          owner: Amina Rahal
          frequency: Weekly
          track: Scale
          bu: PAC
    - name: Contact and support services
      description: The quickest route to the right owner, plus operational ticket and release visibility for colleagues who need help or a decision.
      tags:
        - Static
        - Weekly
        - "Owner: Clara Westin"
      posts:
        - title: Sitecore release calendar now includes market impact notes
          status: Live
          body: Release entries now state which BU is affected and whether local content owners need to act, so markets can scan impact without asking DBS first.
          owner: Clara Westin
          frequency: Weekly
          track: Scale
          bu: EU
        - title: Image-optimisation ticket queue is within service target
          status: Good
          body: Current turnaround for publishing-related tickets is two working days, which keeps campaign launches on schedule for US and PAC teams.
          owner: Felix Arden
          frequency: Weekly
          track: Scale
          bu: US
        - title: Brand asset request path has one named owner per request type
          status: Live
          body: Colleagues can now see who approves copy, templates and landing-page requests, which shortens handoff time when launches cross DBS and brand.
          owner: Clara Westin
          frequency: Static
          track: Optimise
          bu: PAC
  pipelineTitle: Release timeline and follow-up work
  pipelineSummary: The release pipeline now reads as a timeline of expected work so the next items are visible at a glance.
  pipelineRows:
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
        body: Use the main DBS knowledge base when you need the step-by-step route, source documentation or shared operating rules.
        linkLabel: Open knowledge base
        href: "#"
      - title: Show and tell library
        body: Open summaries and source material from recent sessions without scanning a full meeting recap.
        linkLabel: Open library
        href: "#show-and-tell"
      - title: Initiative and topic pages
        body: Jump straight to release work, experimentation, analytics and support topics from one place.
        linkLabel: Open topic links
        href: "#areas"
      - title: How experimentation requests enter Kameleoon
        body: Brand and market teams can see what a strong test brief needs before DBS turns it into a live experiment.
        linkLabel: Open how-to
        href: "#"
      - title: How release handoff works between DBS and IT
        body: The handoff checklist sets expectations for Sitecore, integrations and deployment windows so nothing waits on a hidden dependency.
        linkLabel: Open handoff guide
        href: "#"
  showAndTellTitle: Previous show and tell
  showAndTellSummary: Sessions are split into smaller slices so teams can jump straight to a specific initiative or topic.
  showAndTell:
    - title: Support journey fixes that reduced spare-parts drop-off
      summary: EU support and product-page teams reviewed the route into Support and the points where customers left before help content.
      topic: Support
      presenter: Elin Voss
      date: 6 Mar 2025
      sourceLabel: Open session notes
      sourceHref: "#"
      materialLabel: Open original material
      materialHref: "#"
    - title: Mobile product-page patterns that moved checkout starts
      summary: The session focused on the sticky navigation result, what moved, and where the pattern can travel next.
      topic: Experimentation
      presenter: Arthur Dalen
      date: 28 Feb 2025
      sourceLabel: Open experiment summary
      sourceHref: "#"
      materialLabel: Open Kameleoon source
      materialHref: "#"
    - title: Conversational AI guardrails for support entry points
      summary: Explore and brand reviewed response boundaries, escalation paths and where conversational support can appear safely.
      topic: Conversational AI
      presenter: Mira Solberg
      date: 21 Feb 2025
      sourceLabel: Open review summary
      sourceHref: "#"
      materialLabel: Open original material
      materialHref: "#"
  activitiesTitle: This week’s activities
  activitiesSummary: Ongoing and upcoming work keep the page live without turning it into a status report upward.
  activities:
    ongoing:
      - title: Support search exits in PAC
        body: Search-term clusters are being validated in BigQuery to separate findability issues from traffic issues.
        owner: Amina Rahal
        track: Scale
        bu: PAC
      - title: Brand review on generated-answer guardrails
        body: Explore is tightening answer boundaries before conversational patterns can move closer to live product content.
        owner: Noam Richter
        track: Explore
        bu: PAC
      - title: Market onboarding for segment dashboard handoff
        body: DBS is walking EU teams through the new segment impact view so experiment results can be read by audience.
        owner: Hannah Petrov
        track: Optimise
        bu: EU
    upcoming:
      - title: Sitecore deployment window for support content component rollout
        body: IT confirmation will set the release date for the next EU support component release.
        owner: Priya Nair
        track: Scale
        bu: EU
      - title: Riders template rollout of the sticky navigation pattern
        body: The winning mobile pattern is scheduled to move into Riders templates after the US release wrap-up.
        owner: Sofia Marin
        track: Optimise
        bu: US
      - title: Dynamics source mapping for My Husqvarna handoff
        body: Final mapping work will decide when the PAC support handoff can move from tested to live.
        owner: Priya Nair
        track: Scale
        bu: PAC
  contactsTitle: Who to ask
  contactsSummary: Each area has one clear owner person, plus role context, so colleagues can reach the right person without digging through a wiki.
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
  footer:
    text: DBS sits inside Digital Solutions under Martin Cronholm and owns building and optimising husqvarna.com.
    links:
      - { label: Sitecore guide, href: "#" }
      - { label: Experiment library, href: "#" }
      - { label: Contact DBS, href: "#" }
```

This merge keeps the existing front door and every current area, post, owner, frequency, track and BU, while sharpening the first screen around Team Quan’s three highlights, Team Marwa’s quick links and release timeline, and Team Jonas H’s show-and-tell, weekly activity and favourite path. I kept Kaj as the main action, dated KPI and metric cards, and an open revenue read rather than inventing a number; I did not take Team David’s larger hero or three state columns, and I treated Team Andreas W’s ideas-first/KPI order as a push toward a stronger first screen rather than replacing the DBS start-page structure.

<!-- merged: dbs-portal sprint 2 — Team Quan, Team Marwa, Team Jonas H, Team David, Team Joakim2, Team Andreas W -->
