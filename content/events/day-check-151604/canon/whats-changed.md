---
title: What's Changed
---

```block
type: WhatsChangedPage
data:
  title: What's Changed
  subtitle: "A real internal site called What's Changed. It opens on Monday morning with a header, a short nav, and a single feed that gives the answer in one screen."
  nav:
    - label: Feed
      href: "#feed"
      active: true
    - label: Who owns what
      href: "#owners"
      active: false
    - label: How we work
      href: "#how-we-work"
      active: false
  primaryAction:
    label: Add update
    href: "#"
  feed:
    - title: Dealer locator now shows store opening hours on search results
      summary: "People checking a location can now see whether a dealer is open before they click through. It cut one step from common support questions."
      owner: "Mara Ellison — Dealer locator"
      date: "2026-09-22"
      cadence: Weekly
      state: Live
      stateTone: strong
    - title: Checkout address form test is running on mobile traffic
      summary: "The team is testing a shorter address step on mobile. The question is whether fewer fields improve completion without increasing corrections later."
      owner: "Jonah Vale — Checkout"
      date: "2026-09-21"
      cadence: Twice weekly
      state: In test
      stateTone: accent
    - title: Service booking pages now surface earliest available slot
      summary: "The first available appointment now appears before the calendar opens. It gives visitors a quicker read on whether it is worth continuing."
      owner: "Nina Sorrell — Service booking"
      date: "2026-09-20"
      cadence: Weekly
      state: Live
      stateTone: strong
    - title: Product detail pages gained a clearer finance eligibility note
      summary: "The finance message now explains who can apply before the form starts. That reduced avoidable handoffs to retail support."
      owner: "Elias Mercer — Product pages"
      date: "2026-09-18"
      cadence: Fortnightly
      state: Live
      stateTone: strong
    - title: Homepage hero copy test is paused after flat click-through
      summary: "Two copy variants ran against the current message. Neither moved click-through enough to keep, so the team closed the test and kept the control."
      owner: "Rhea Holloway — Homepage"
      date: "2026-09-17"
      cadence: When changed
      state: Closed
      stateTone: default
    - title: Accessory bundle module is being checked for stock mismatch
      summary: "A small number of sessions saw bundle items that were unavailable at basket. The module stays live while the stock rule is checked."
      owner: "Tomas Wren — Accessories"
      date: "2026-09-16"
      cadence: Weekly
      state: Watching
      stateTone: default
  owners:
    - area: Dealer locator
      owner: Mara Ellison
      role: Product manager
      contact: mara.ellison@internal.example
      cadence: Weekly
      status: Live updates
    - area: Checkout
      owner: Jonah Vale
      role: Optimisation lead
      contact: jonah.vale@internal.example
      cadence: Twice weekly
      status: Test running
    - area: Service booking
      owner: Nina Sorrell
      role: Journey manager
      contact: nina.sorrell@internal.example
      cadence: Weekly
      status: Live updates
    - area: Product pages
      owner: Elias Mercer
      role: Content and conversion lead
      contact: elias.mercer@internal.example
      cadence: Fortnightly
      status: Live updates
    - area: Homepage
      owner: Rhea Holloway
      role: Senior optimisation manager
      contact: rhea.holloway@internal.example
      cadence: When changed
      status: Test closed
    - area: Accessories
      owner: Tomas Wren
      role: Ecommerce manager
      contact: tomas.wren@internal.example
      cadence: Weekly
      status: Monitoring
  howWeWork:
    items:
      - title: Write the change, not the task
        body: "Each update says what changed and what it meant. It does not list tickets, stand-up notes, or work in progress that nobody else needs."
      - title: Name one owner on every entry
        body: "Every post names the person responsible for the area so somebody can go straight to the right colleague when they need detail."
      - title: Keep the cadence visible
        body: "Every area says how often it is updated. If an area changes only when something ships, the cadence says that plainly."
      - title: Close the loop on tests
        body: "A test stays in the feed while it is active, then the result is posted in plain language so nobody has to ask whether it is still running."
    callout:
      title: Keep this useful
      body: "A post earns its place if it saves somebody from asking a colleague. If it would not change what another team does next, it does not go in the feed."
      tag: Team guide
      action:
        label: Open posting guide
        href: "#"
  footer:
    note: "Kept by the Website Optimisation team."
    meta: "Updated through weekly area owners and test leads."
```

Bo and Cleo agreed the spine: a real internal site called “What's Changed” with a feed-first Monday-morning view, three-way navigation, ownership, process guidance, and a footer naming who keeps it. I combined those into one generous-column page and kept the feed as the main answer screen. Team Bo argued for one screen, no scrolling, and no dashboard; I kept no dashboard and no charts, but not the strict no-scrolling limit, because this first version had to build all named areas fully rather than collapse the site into a single visible section.

<!-- merged: day-check-151604 sprint 1 — Team Bo, Team Cleo -->
