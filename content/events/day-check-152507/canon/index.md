---
title: What's Changed
---

```block
type: WhatsChangedPage
data:
  siteName: What's Changed
  siteSubtitle: An internal site for what changed, what is being tested, and who to ask.
  nav:
    - label: Feed
      href: "#feed"
      current: true
    - label: Who owns what
      href: "#owners"
      current: false
    - label: How we work
      href: "#how-we-work"
      current: false
  hero:
    title: What's Changed
    summary: "A real internal site called What's Changed. It opens on Monday morning with a header, three ways in, a newest-first feed, and a footer. It feels calm, white, and navy, with one orange primary button and no dashboard or charts."
    meta: Updated every weekday by the website team.
  primaryAction:
    label: Add an update
    href: "#"
  feed:
    title: Feed
    intro: "The main view is the feed: what changed this week, what's being tested, and who owns the dealer locator, with the newest items first."
    items:
      - title: Dealer locator search now shows nearest stock first
        summary: People now land on the nearest in-stock result first. It cuts one comparison step before contact.
        type: What changed this week
        owner: Morgan Hale, Findability Lead
        cadence: Updated weekly
        date: 15 Apr 2026
      - title: Finance calculator wording test is live on checkout
        summary: Two plain-language labels are being tested against the current terms. The test is looking for fewer drop-offs before quote review.
        type: What's being tested
        owner: Imani Cross, Conversion Manager
        cadence: Updated twice weekly
        date: 14 Apr 2026
      - title: Dealer locator ownership confirmed
        summary: The dealer locator is owned by the local discovery squad. Questions on coverage, filters, and retailer data go there first.
        type: Who owns what
        owner: Rafael Sato, Product Owner
        cadence: Reviewed monthly
        date: 14 Apr 2026
      - title: Homepage promo strip removed from returning visits
        summary: Returning visitors now skip the seasonal strip after one view. The page gets to model search faster.
        type: What changed this week
        owner: Elise Navarro, Content Design Lead
        cadence: Updated weekly
        date: 12 Apr 2026
      - title: Service booking entry point test started on mobile nav
        summary: The team is testing a direct booking link in mobile navigation. The question is whether people start with service sooner when it is one tap away.
        type: What's being tested
        owner: Tarek Bloom, Journey Optimisation Lead
        cadence: Updated twice weekly
        date: 11 Apr 2026
      - title: Accessories landing pages moved to shared ownership
        summary: Category page changes now route through one shared owner pair. This reduces handoffs between merchandising and UX.
        type: Who owns what
        owner: Nora Vance, Merchandising Operations
        cadence: Reviewed monthly
        date: 09 Apr 2026
  owners:
    title: Who owns what
    intro: Every area names an owner and how often it is updated, so nobody has to ask a colleague who is responsible.
    people:
      - area: Dealer locator
        name: Rafael Sato
        role: Product Owner
        detail: Owns retailer data, filters, and local discovery journeys.
        cadence: Reviewed monthly
      - area: Homepage and campaigns
        name: Elise Navarro
        role: Content Design Lead
        detail: Owns homepage messaging, promo placement, and seasonal switches.
        cadence: Updated weekly
      - area: Checkout and finance
        name: Imani Cross
        role: Conversion Manager
        detail: Owns checkout copy, finance steps, and form completion changes.
        cadence: Updated twice weekly
      - area: Search and findability
        name: Morgan Hale
        role: Findability Lead
        detail: Owns search behaviour, ranking logic, and model discovery.
        cadence: Updated weekly
      - area: Service journeys
        name: Tarek Bloom
        role: Journey Optimisation Lead
        detail: Owns booking entry points, service content, and repair conversion.
        cadence: Updated twice weekly
      - area: Accessories and bundles
        name: Nora Vance
        role: Merchandising Operations
        detail: Owns category structure, bundle logic, and stock-led placement.
        cadence: Reviewed monthly
  waysOfWorking:
    title: How we work
    intro: This site stays focused on ownership and updates rather than dashboards, charts, or marketing copy.
    steps:
      - title: Post what changed and what it meant
        body: Short sentences. Say what changed and what someone should expect now, not a task list of what was done.
        tag: Feed rule
      - title: Name the owner on every update
        body: Each post tells people who keeps it current. If a question belongs somewhere, the answer is on the row.
        tag: Ownership
      - title: Say how often it moves
        body: Every area and every update names its update rhythm so readers know whether they are looking at a weekly change or a slower reference point.
        tag: Cadence
      - title: Use this before asking in chat
        body: Start with the feed for this week, then check who owns the area. Ask a person only when the page does not answer the question.
        tag: Monday morning
  footer:
    ownerTitle: Who keeps the site
    ownerCopy: The website team keeps What's Changed current and closes gaps when ownership moves.
    contactTitle: Best route for changes
    contactCopy: Add an update for new work, tests, and ownership changes so the next question is answered here first.
```

Team Dag and Team Bo aligned on a calm internal site called What's Changed with the feed first, three ways in, ownership made explicit, and no dashboard or charts. I combined those into one single-column Monday-morning homepage and filled the feed, directory, and working rules with realistic internal content. The one open point both teams left was the purpose and permission of the orange primary button, so this first build resolves it as Add an update while keeping the rest tightly focused on answers rather than status reporting.

<!-- merged: day-check-152507 sprint 1 — Team Dag, Team Bo -->
