---
title: What’s Changed
---

```block
type: WhatsChangedPage
data:
  title: What’s Changed
  summary: A simple internal site for seeing what changed, who owns it, and how to work. It helps people get an answer in one screen without asking a colleague.
  nav:
    - { label: Feed, href: "#feed" }
    - { label: Who owns what, href: "#owners" }
    - { label: How we work, href: "#how-we-work" }
  primaryAction:
    label: Add update
    href: "#"
  secondaryActions:
    - { label: See all owners, href: "#owners" }
    - { label: Read the rules, href: "#how-we-work" }
  highlights:
    - { label: Updated this week, value: "6 posts" }
    - { label: Being tested now, value: "3 tests" }
    - { label: Areas listed, value: "8 owners" }
    - { label: Site keeper, value: "Web operations" }
  feed:
    - title: Search results now group finance content under one entry point
      status: New this week
      date: 13 May 2026
      ownerName: Mara Levin
      ownerRole: Search product manager
      cadence: Weekly
      actionLabel: Read change note
      actionHref: "#"
      summary: People looking for payment and leasing pages now land in one place. It cuts duplicate paths and makes comparison easier.
    - title: Checkout test is running on delivery step copy
      status: Testing
      date: 12 May 2026
      ownerName: Idris Vale
      ownerRole: Conversion lead
      cadence: Twice a week
      actionLabel: See test details
      actionHref: "#"
      summary: The test checks whether clearer delivery timing reduces drop-off before payment. Ask here before sharing numbers.
    - title: Dealer locator ownership moved to retail platform
      status: Live
      date: 09 May 2026
      ownerName: Lena Orlov
      ownerRole: Retail platform manager
      cadence: Monthly
      actionLabel: Contact owner
      actionHref: "#"
      summary: Questions about location data, opening hours, and map faults now go to one owner. Old Slack handoffs should stop.
    - title: Service booking pages now show lead time before form start
      status: New this week
      date: 08 May 2026
      ownerName: Felix Arden
      ownerRole: Service journey owner
      cadence: Weekly
      actionLabel: Read change note
      actionHref: "#"
      summary: People can see booking wait time before they start the form. That sets expectation earlier and reduces abandoned starts.
    - title: Homepage message test paused after uneven traffic split
      status: Paused
      date: 06 May 2026
      ownerName: Noor Halden
      ownerRole: Experimentation manager
      cadence: On change
      actionLabel: Check status
      actionHref: "#"
      summary: The test is not taking new traffic while allocation is fixed. Do not cite the last readout.
    - title: Accessibility fixes shipped for model comparison table
      status: Live
      date: 05 May 2026
      ownerName: Oskar Wren
      ownerRole: Front-end lead
      cadence: Monthly
      actionLabel: View release note
      actionHref: "#"
      summary: Column headers, focus order, and row labels now work more clearly with keyboard and screen reader use.
  owners:
    - area: Dealer locator
      ownerName: Lena Orlov
      ownerRole: Retail platform manager
      cadence: Monthly
      lastUpdated: 09 May 2026
      contact: lena.orlov@internal.example
    - area: Search and navigation
      ownerName: Mara Levin
      ownerRole: Search product manager
      cadence: Weekly
      lastUpdated: 13 May 2026
      contact: mara.levin@internal.example
    - area: Checkout
      ownerName: Idris Vale
      ownerRole: Conversion lead
      cadence: Twice a week
      lastUpdated: 12 May 2026
      contact: idris.vale@internal.example
    - area: Service booking
      ownerName: Felix Arden
      ownerRole: Service journey owner
      cadence: Weekly
      lastUpdated: 08 May 2026
      contact: felix.arden@internal.example
    - area: Homepage and campaigns
      ownerName: Noor Halden
      ownerRole: Experimentation manager
      cadence: On change
      lastUpdated: 06 May 2026
      contact: noor.halden@internal.example
    - area: Model pages
      ownerName: Oskar Wren
      ownerRole: Front-end lead
      cadence: Monthly
      lastUpdated: 05 May 2026
      contact: oskar.wren@internal.example
    - area: Content design system
      ownerName: Talia Mercer
      ownerRole: Content operations lead
      cadence: Fortnightly
      lastUpdated: 02 May 2026
      contact: talia.mercer@internal.example
    - area: Analytics tagging rules
      ownerName: Rami Sorel
      ownerRole: Measurement specialist
      cadence: Monthly
      lastUpdated: 30 April 2026
      contact: rami.sorel@internal.example
  tags:
    - { label: New this week, meaning: Shipped or changed in the last seven days. }
    - { label: Testing, meaning: Running now and still open to change. }
    - { label: Live, meaning: Current default experience. }
    - { label: Paused, meaning: Stopped for now. Do not use the latest readout as a decision. }
  rules:
    - title: Post what changed and what it meant.
      body: Keep it short. Say what a person will now see, learn, or need to do.
    - title: Every post names an owner.
      body: If somebody has a question, they should know who to ask from the row itself.
    - title: Every post says how often it is updated.
      body: Freshness matters. Weekly, monthly, or on change is enough.
    - title: Testing posts stay until the test ends.
      body: If a test is paused, say so in the status tag and keep the action on the row.
    - title: Posts earn their place by saving somebody from asking a colleague.
      body: If it does not answer a real question, it does not belong here.
  footer:
    keeper: Kept up to date by Web operations.
    links:
      - { label: Feed, href: "#feed" }
      - { label: Who owns what, href: "#owners" }
      - { label: How we work, href: "#how-we-work" }
```

Built from the shared spine in Teams Sam, Filip, Dag, Olga, Petter, and Ada: one feed-first internal site with a short nav, ownership directory, how-we-work rules, and a footer naming who keeps it. I kept Ada’s sharper idea that each feed entry should carry one clear action, and used Filip and Dag’s freshness and tag logic to make cadence and status visible in every row. I did not add any dashboard, chart, or extra analytics layer; Olga and Petter’s references to specific areas like the dealer locator are folded into the feed and owners list rather than becoming separate sections.

<!-- merged: day-check-210310 sprint 1 — Team Sam, Team Filip, Team Dag, Team Olga, Team Petter, Team Ada -->
