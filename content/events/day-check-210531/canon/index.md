---
title: What’s Changed
---

```block
type: WhatsChangedPortal
data:
  siteTitle: What’s Changed
  siteSubtitle: An internal site for asking what changed, who owns it, and how the work moves.
  nav:
    - { label: Feed, href: "#feed", active: true }
    - { label: Owners, href: "#owners" }
    - { label: How we work, href: "#how-we-work" }
  intro:
    title: What changed this week
    text: People open this on a Monday morning to see what changed, what is being tested, and who to ask without chasing a colleague.
  primaryAction:
    label: Add update
    href: "#"
  secondaryActions:
    - { label: See archive, href: "#" }
    - { label: Open owner list, href: "#owners" }
  feed:
    - title: Dealer locator now shows store opening hours on the first result
      summary: People can confirm whether a dealer is open before they call. Support queries about opening hours should drop.
      owner: Mira Voss
      role: Product manager
      date: 15 Apr 2026
      cadence: Weekly
      state: Changed this week
    - title: Finance calculator copy test is running on bike detail pages
      summary: The test checks whether clearer repayment language gets more people to open the calculator. The team will keep the version that helps people start with fewer questions.
      owner: Julian Cross
      role: Optimisation lead
      date: 14 Apr 2026
      cadence: Weekly
      state: Being tested
    - title: Dealer locator ownership moved into one named contact route
      summary: Questions about dealer data, search behaviour, and rollout now go to one owner instead of being passed across the team.
      owner: Tamsin Reed
      role: Service owner
      date: 12 Apr 2026
      cadence: Monthly
      state: Ownership update
    - title: Homepage promo order changed to match seasonal demand
      summary: The most time-sensitive offer now appears first. Merchandising requests should need less manual explanation.
      owner: Elias North
      role: Content lead
      date: 11 Apr 2026
      cadence: Weekly
      state: Changed this week
    - title: Checkout help text test is live on delivery options
      summary: The test checks whether shorter delivery wording reduces drop-off at the last step. Results will be reviewed after one full week.
      owner: Rowan Vale
      role: CRO specialist
      date: 09 Apr 2026
      cadence: Weekly
      state: Being tested
    - title: Spare parts search is now updated from the same product feed as the main site
      summary: Search results should stay closer to current stock and naming. Fewer mismatches should reach customer care.
      owner: Ingrid Sol
      role: Platform editor
      date: 07 Apr 2026
      cadence: Monthly
      state: Changed this week
  owners:
    - area: Dealer locator
      owner: Tamsin Reed
      role: Service owner
      contact: tamsin.reed@internal.example
      cadence: Weekly
      note: Owns dealer data, search behaviour, and release sign-off.
    - area: Homepage and campaigns
      owner: Elias North
      role: Content lead
      contact: elias.north@internal.example
      cadence: Weekly
      note: Owns campaign order, homepage messages, and publishing cadence.
    - area: Product detail pages
      owner: Mira Voss
      role: Product manager
      contact: mira.voss@internal.example
      cadence: Weekly
      note: Owns product page changes, finance messaging, and page priorities.
    - area: Checkout
      owner: Rowan Vale
      role: CRO specialist
      contact: rowan.vale@internal.example
      cadence: Weekly
      note: Owns delivery copy tests and checkout learning summaries.
    - area: Search and parts
      owner: Ingrid Sol
      role: Platform editor
      contact: ingrid.sol@internal.example
      cadence: Monthly
      note: Owns search content quality and spare parts feed updates.
    - area: Experiment programme
      owner: Julian Cross
      role: Optimisation lead
      contact: julian.cross@internal.example
      cadence: Weekly
      note: Owns active tests, result summaries, and test intake.
  howWeWork:
    principles:
      - Every update says what changed and what it meant.
      - Every post names an owner and how often it is updated.
      - The feed is newest first.
      - Only publish something that saves somebody from asking a colleague.
      - Use short sentences and plain language.
    publishing:
      - step: 1
        title: Write the change
        text: Say what is different now. Keep it specific.
      - step: 2
        title: Add the meaning
        text: Explain what the change means for other teams or for customers.
      - step: 3
        title: Name the owner
        text: Include one person people can ask when they need more detail.
      - step: 4
        title: Set the update cadence
        text: Mark whether this area is updated weekly, monthly, or stays static.
    contactPanel:
      title: Who keeps this site
      text: The Web Operations team keeps What’s Changed accurate and current. Send corrections or new updates before Monday 10:00.
      linkLabel: Contact Web Operations
      linkHref: "#"
  footer:
    title: Kept by Web Operations
    text: This site is updated through the week and reviewed every Monday morning.
    links:
      - { label: Web Operations inbox, href: "#" }
      - { label: Editing guide, href: "#how-we-work" }
```

Both teams described the same finished internal site, so the page is built once around one homepage with a feed first, an ownership view, a how-we-work area, and a footer. Team Cleo’s stronger requirement that every post show update cadence is kept. Team Dag’s push for a practical daily-use feel is carried through the table, list, and contact structure. I did not keep Dag’s idea of leaving owner or cadence gaps visible, because this first version needs to read as a complete working product; those filled owners, dates, and cadences are supplied content for the room to refine.

<!-- merged: day-check-210531 sprint 1 — Team Cleo, Team Dag -->
