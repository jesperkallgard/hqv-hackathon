---
title: What's Changed
---

```block
type: WhatsChangedPortal
data:
  siteName: What's Changed
  summary: An internal site for people who need the answer fast and do not want to ask a colleague.
  nav:
    - { label: Front door, href: "#front-door" }
    - { label: What’s changed, href: "#whats-changed", current: true }
    - { label: Who owns what, href: "#" }
    - { label: How we do things, href: "#" }
  frontDoor:
    title: Four clear routes into the site
    body: Pick the area you need. Each card shows who owns it, when it was last updated, and how often it is refreshed.
    cards:
      - title: What’s changed
        href: "#whats-changed"
        owner: Orla Fenwick, Release editor
        updated: 18 Mar 2026
        cadence: Weekly
        status: Current
        summary: Live changes that other teams need to know about now.
        action: Open the latest changes
      - title: What we’re testing
        href: "#"
        owner: Gideon Hale, Experiment lead
        updated: 17 Mar 2026
        cadence: Twice a week
        status: In test
        summary: Active tests, what they affect, and what other teams should not change yet.
        action: See active tests
      - title: How we do things
        href: "#"
        owner: Talia Wren, Content operations lead
        updated: 16 Mar 2026
        cadence: Monthly
        status: Current
        summary: Working rules, publishing habits, and what belongs on the site.
        action: Read the working rules
      - title: Who owns what
        href: "#"
        owner: Micah Dorsey, Service manager
        updated: 17 Mar 2026
        cadence: Monthly
        status: Current
        summary: Named owners, update rhythm, and where to send the question first.
        action: Find the right owner
  postList:
    title: What’s changed
    intro: Open one post to see the answer, the owner, and how often it is checked.
    rows:
      - title: My Husqvarna login moved
        href: "#opened-post"
        owner: Jonas B
        date: 18 Mar 2026
        current: true
      - title: Checkout address validation now blocks PO boxes in Norway
        href: "#"
        owner: Mara Kline
        date: 16 Mar 2026
      - title: Product page trust badges were removed from mobile
        href: "#"
        owner: Ellis Rowe
        date: 14 Mar 2026
      - title: Dealer locator now opens map results in the same tab
        href: "#"
        owner: Nina Vale
        date: 12 Mar 2026
      - title: Campaign codes now persist between category and cart
        href: "#"
        owner: Adrian Pike
        date: 10 Mar 2026
      - title: Spare parts search now treats hyphens and spaces the same
        href: "#"
        owner: Lena Cross
        date: 07 Mar 2026
  openedPost:
    eyebrow: Opened post
    title: My Husqvarna login moved
    audience: People who need the new login place fast and do not want to ask a colleague.
    summary:
      - The login for My Husqvarna moved to a new sign-in page.
      - Old bookmarks and saved links can send you to the wrong place.
      - Use the new link below and update any local instructions.
    status: Current
    dateLabel: Checked
    date: 18 Mar 2026
    owner: Jonas B
    cadence: Monthly
    onwardLink:
      label: Open the new login
      href: "#"
  footer:
    note: Kept by the Website Optimisation team.
    meta: Front door reviewed every Friday morning.
```

Teams Kajsa, Iris, Elin, Dag, Jonas, and Nils all converged on the same shape: keep the front door, then go inside one post with a terse list and a full opened record. I kept Kajsa, Iris, Elin, Jonas, and Nils on the seven fields in the open view, the list showing only headline, owner, and date, and the plain three-line summary. I kept Dag’s push that staleness is visible at a glance by making the list date a dedicated column and keeping the checked date prominent in the opened post. I cut Dag’s suggestion to leave unsettled fields visibly open, because the page has to read as finished; where the room had not settled wording beyond title, owner, and cadence, I filled it in in the site’s own voice.

<!-- merged: day-check-193809 sprint 3 — Team Kajsa, Team Iris, Team Elin, Team Dag, Team Jonas, Team Nils -->
