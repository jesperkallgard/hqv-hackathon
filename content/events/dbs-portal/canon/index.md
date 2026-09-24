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
    - { label: Release pipeline, href: "#pipeline" }
    - { label: Contacts, href: "#contacts" }
  hero:
    title: What DBS changed on husqvarna.com this week
    intro: "One page for the people outside DBS who need the picture fast: what is live, what is moving next, what it means for their market, and who owns the follow-up."
    primaryAction: { label: Open knowledge base, href: "#" }
    secondaryAction: { label: See this week's priorities, href: "#areas" }
  kpis:
    - label: Weekly experiments shipped
      value: "4"
      context: Three on husqvarna.com, one in My Husqvarna.
      detail: Optimise · EU
    - label: Revenue-impacting changes live
      value: "2"
      context: Sticky navigation and support-path updates are now visible to customers.
      detail: Scale · US
    - label: Releases awaiting IT handoff
      value: "3"
      context: Items in Sitecore and Dynamics need confirmed deployment windows.
      detail: Scale · PAC
    - label: Areas with fresh updates
      value: "5"
      context: Every section below carries this week's current owner and frequency.
      detail: Weekly
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
  pipelineTitle: Release pipeline and follow-up work
  pipelineSummary: The page opens on KPIs, but it still needs a clear route into release work, ticket status and knowledge support.
  pipelineRows:
    - item: Support content component rollout
      track: Scale
      bu: EU
      status: Ready for IT
      owner: Priya Nair
      nextStep: Confirm Sitecore deployment window
      frequency: Weekly
    - item: Sticky navigation winner rollout
      track: Optimise
      bu: US
      status: Live
      owner: Sofia Marin
      nextStep: Share pattern with Riders templates
      frequency: Weekly
    - item: Conversational support concept review
      track: Explore
      bu: PAC
      status: In review
      owner: Mateo Silva
      nextStep: Brand guardrail sign-off
      frequency: Weekly
    - item: Dealer Locator data cleanup
      track: Scale
      bu: US
      status: Planned
      owner: Omar Ellingsen
      nextStep: Finalise source mapping in Dynamics
      frequency: Monthly
    - item: Segment dashboard handoff
      track: Optimise
      bu: EU
      status: Live
      owner: Hannah Petrov
      nextStep: Market onboarding session
      frequency: Monthly
    - item: Support search exit analysis
      track: Scale
      bu: PAC
      status: Investigating
      owner: Amina Rahal
      nextStep: Validate search-term clusters in BigQuery
      frequency: Weekly
  knowledge:
    title: Follow-up work
    items:
      - title: How to request a market change on husqvarna.com
        body: Use this route when a local team needs a content, campaign or page-structure change and wants the right DBS owner from the start.
        linkLabel: Open step-by-step
        href: "#"
      - title: How experimentation requests enter Kameleoon
        body: Brand and market teams can see what a strong test brief needs before DBS turns it into a live experiment.
        linkLabel: Open how-to
        href: "#"
      - title: How release handoff works between DBS and IT
        body: The handoff checklist sets expectations for Sitecore, integrations and deployment windows so nothing waits on a hidden dependency.
        linkLabel: Open knowledge base
        href: "#"
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

The winning ideas converged on one airy front door: KPI-first, one card per area, clear owners, frequencies and contact paths. I kept Team Jonas's DBS name and KPI opening over .comni, folded Team Amanda's five-content-layer idea into the area cards and release section, and kept Team Jennie's owner board as a contact layer rather than making the page a people directory alone. I supplied the post bodies, names, dates and statuses so the whole picture could be judged as a finished internal page.

<!-- merged: dbs-portal sprint 1 — Team Jonas, Team Madde, Team Amanda, Team Jennie -->
