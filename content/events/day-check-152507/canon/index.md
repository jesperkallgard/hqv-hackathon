---
title: What's Changed
---

```block
type: WhatsChangedPage
data:
  siteName: What's Changed
  siteSubtitle: An internal site for what changed, what is being tested, and who to ask.
  nav:
    - label: Home
      href: "#"
      current: true
    - label: What's changed
      href: "#"
      current: false
    - label: What we're testing
      href: "#"
      current: false
    - label: Who owns what
      href: "#"
      current: false
  hero:
    title: What's Changed
    summary: The first screen answers the first question fast. Pick the area you need and go straight to the latest change, test, working rule, or owner.
    meta: Updated every weekday by the website team.
  primaryAction:
    label: Add an update
    href: "#"
  frontDoor:
    title: Front door
    intro: The front door is a single column of four cards. Each one shows the latest update and the person to ask.
    cards:
      - title: What's changed
        href: "#"
        summary: Changes now live on the site, with what they meant for people using it.
        lastUpdated: 15 Apr 2026
        owner: Morgan Hale, Findability Lead
        cadence: Updated weekly
        tag: Live updates
        actionLabel: Open area
      - title: What we're testing
        href: "#"
        summary: Tests running now, the question behind them, and where they are live.
        lastUpdated: 14 Apr 2026
        owner: Imani Cross, Conversion Manager
        cadence: Updated twice weekly
        tag: In test
        actionLabel: Open area
      - title: How we do things
        href: "#"
        summary: The working rules behind posts, ownership, and how this site stays useful.
        lastUpdated: 13 Apr 2026
        owner: Lena Mercer, Operations Editor
        cadence: Reviewed monthly
        tag: Working rules
        actionLabel: Open area
      - title: Who owns what
        href: "#"
        summary: Named owners for each area of the website, with the best route for questions.
        lastUpdated: 14 Apr 2026
        owner: Rafael Sato, Product Owner
        cadence: Reviewed monthly
        tag: Ownership
        actionLabel: Open area
  footer:
    ownerTitle: Who keeps the site
    ownerCopy: The website team keeps What's Changed current and closes gaps when ownership moves.
    contactTitle: Best route for changes
    contactCopy: Add an update for new work, tests, and ownership changes so the next question is answered here first.
```

Team Dag and Team Bo agreed the front door should stop being a mixed homepage and become one first-screen choice: four cards only, in a fixed order, each with a last update date. I kept the existing page shell, header, footer, and primary action, and rewrote the body into that single-column front door. I followed Team Bo on naming a person to ask on every card; the open point from Team Dag on whether cards open separate pages or a filtered feed stays unresolved in the prose, so the cards link to # for now.

<!-- merged: day-check-152507 sprint 2 — Team Dag, Team Bo -->
