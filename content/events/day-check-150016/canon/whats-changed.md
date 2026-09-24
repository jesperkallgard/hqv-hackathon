---
title: What's Changed
---

```block
type: WhatsChangedPage
data:
  title: "What's Changed"
  summary: "An internal portal that makes one team's work legible to everybody else: what changed, what is being tested, and who to ask."
  nav:
    - label: "The feed"
      href: "#feed"
      current: true
    - label: "Who owns what"
      href: "#owners"
    - label: "How we work"
      href: "#how-we-work"
  intro: "The first view answers the common questions in one screen. Open it on Monday morning and you can see what changed this week, what is being tested, and who owns the dealer locator, newest first."
  heroTags:
    - "Monday morning"
    - "Updated weekly"
    - "Plain and concrete"
  primaryAction:
    label: "Post this week's update"
    href: "#"
  secondaryActions:
    - label: "See owner directory"
      href: "#owners"
    - label: "Read how we work"
      href: "#how-we-work"
  feed:
    items:
      - title: "Dealer locator now shows outlet opening hours beside stock status"
        summary: "People checking availability can see whether a store is open before they call. That cut avoidable handoffs between retail support and the web team."
        status: "Changed this week"
        ownerName: "Mira Holloway"
        ownerRole: "Product manager"
        date: "06 May 2024"
        cadence: "Updated every Monday"
      - title: "Checkout address helper is being tested on mobile"
        summary: "The test shortens the address step and explains postcode format earlier. We are watching completion rate and form backtracking."
        status: "Being tested"
        ownerName: "Jonah Vale"
        ownerRole: "Experiment lead"
        date: "03 May 2024"
        cadence: "Updated twice a week"
      - title: "Dealer locator ownership moved into the find-and-buy stream"
        summary: "Questions about store search, map pins, and retailer detail pages now go to one owner instead of moving across two teams."
        status: "Owner signal"
        ownerName: "Saskia Trent"
        ownerRole: "Service owner"
        date: "01 May 2024"
        cadence: "Updated monthly"
      - title: "Finance offer summary now appears before credit application"
        summary: "Visitors see the key terms sooner, which reduced drop-off from people opening the application just to check the offer details."
        status: "Changed this week"
        ownerName: "Callum Reed"
        ownerRole: "Content designer"
        date: "29 Apr 2024"
        cadence: "Updated every Monday"
      - title: "Homepage navigation labels are being tested against task language"
        summary: "The team is checking whether direct labels such as Bikes, Stores, and Servicing reduce first-click hesitation for new visitors."
        status: "Being tested"
        ownerName: "Leila Mercer"
        ownerRole: "UX researcher"
        date: "26 Apr 2024"
        cadence: "Updated every Thursday"
      - title: "Warranty claim route now starts from the support hub"
        summary: "Support requests now begin in one place, which makes the handoff clearer for customers and for the contact centre."
        status: "Changed this week"
        ownerName: "Ewan Price"
        ownerRole: "Journey manager"
        date: "22 Apr 2024"
        cadence: "Updated every Monday"
  ownerDirectory:
    items:
      - area: "Dealer locator"
        ownerName: "Saskia Trent"
        ownerRole: "Service owner"
        scope:
          - "Store search"
          - "Map pins"
          - "Retailer detail pages"
        cadence: "Updated monthly"
        askAbout: "Ownership, roadmap, defects affecting store discovery"
      - area: "Checkout"
        ownerName: "Jonah Vale"
        ownerRole: "Experiment lead"
        scope:
          - "Address step"
          - "Payment handoff"
          - "Form completion"
        cadence: "Updated twice a week"
        askAbout: "Tests, live changes, and conversion questions"
      - area: "Homepage and navigation"
        ownerName: "Leila Mercer"
        ownerRole: "UX researcher"
        scope:
          - "Navigation labels"
          - "Entry points"
          - "First-click findings"
        cadence: "Updated every Thursday"
        askAbout: "Current tests and what people are struggling to find"
      - area: "Support journeys"
        ownerName: "Ewan Price"
        ownerRole: "Journey manager"
        scope:
          - "Warranty"
          - "Servicing"
          - "Help hub"
        cadence: "Updated every Monday"
        askAbout: "Support flows, routing changes, and known friction"
  workAreas:
    items:
      - title: "What gets posted"
        eyebrow: "Scope"
        text: "Posts cover live changes, active tests, ownership shifts, and anything else that saves somebody from asking a colleague."
        cadence: "Reviewed every Monday morning"
        tags:
          - "Live changes"
          - "Tests"
          - "Ownership"
      - title: "How often it is updated"
        eyebrow: "Cadence"
        text: "Each post names how often it is updated so readers know whether they are looking at a weekly note, a test in flight, or a monthly ownership signal."
        cadence: "Set on every post"
        tags:
          - "Weekly"
          - "Twice a week"
          - "Monthly"
      - title: "What a good update says"
        eyebrow: "Writing"
        text: "Short sentences. Say what changed and what it meant. Leave out task-by-task reporting and anything written upward as status."
        cadence: "Used on every entry"
        tags:
          - "Plain language"
          - "Concrete"
          - "Useful first"
      - title: "Who keeps the site"
        eyebrow: "Stewardship"
        text: "The web operations group keeps the portal current, chases missing Monday updates, and closes stale tests when a decision has been made."
        cadence: "Checked weekly"
        tags:
          - "Web operations"
          - "Site steward"
  resources:
    items:
      - title: "Testing backlog"
        description: "Active experiments, decision dates, and the next readout."
        meta: "Used by product, design, and analytics"
        href: "#"
        actionLabel: "Open backlog"
      - title: "Release notes archive"
        description: "Earlier weekly changes kept in date order for quick reference."
        meta: "Updated every Monday"
        href: "#"
        actionLabel: "Open archive"
      - title: "Incident log"
        description: "Recent live issues, current state, and who is coordinating."
        meta: "Updated when something changes"
        href: "#"
        actionLabel: "Open incident log"
      - title: "Content and ownership map"
        description: "A quick reference for journeys, page groups, and named owners."
        meta: "Reviewed monthly"
        href: "#"
        actionLabel: "Open map"
  footer:
    keeper: "Kept by Web Operations"
    text: "This site is maintained for Monday-morning visibility across the wider organisation."
    links:
      - label: "Contact the team"
        href: "#"
      - label: "Update schedule"
        href: "#"
      - label: "Editorial guide"
        href: "#"
```

```block
type: UpdateFeed
data:
  items:
    - title: "Dealer locator now shows outlet opening hours beside stock status"
      summary: "People checking availability can see whether a store is open before they call. That cut avoidable handoffs between retail support and the web team."
      status: "Changed this week"
      ownerName: "Mira Holloway"
      ownerRole: "Product manager"
      date: "06 May 2024"
      cadence: "Updated every Monday"
    - title: "Checkout address helper is being tested on mobile"
      summary: "The test shortens the address step and explains postcode format earlier. We are watching completion rate and form backtracking."
      status: "Being tested"
      ownerName: "Jonah Vale"
      ownerRole: "Experiment lead"
      date: "03 May 2024"
      cadence: "Updated twice a week"
    - title: "Dealer locator ownership moved into the find-and-buy stream"
      summary: "Questions about store search, map pins, and retailer detail pages now go to one owner instead of moving across two teams."
      status: "Owner signal"
      ownerName: "Saskia Trent"
      ownerRole: "Service owner"
      date: "01 May 2024"
      cadence: "Updated monthly"
    - title: "Finance offer summary now appears before credit application"
      summary: "Visitors see the key terms sooner, which reduced drop-off from people opening the application just to check the offer details."
      status: "Changed this week"
      ownerName: "Callum Reed"
      ownerRole: "Content designer"
      date: "29 Apr 2024"
      cadence: "Updated every Monday"
    - title: "Homepage navigation labels are being tested against task language"
      summary: "The team is checking whether direct labels such as Bikes, Stores, and Servicing reduce first-click hesitation for new visitors."
      status: "Being tested"
      ownerName: "Leila Mercer"
      ownerRole: "UX researcher"
      date: "26 Apr 2024"
      cadence: "Updated every Thursday"
    - title: "Warranty claim route now starts from the support hub"
      summary: "Support requests now begin in one place, which makes the handoff clearer for customers and for the contact centre."
      status: "Changed this week"
      ownerName: "Ewan Price"
      ownerRole: "Journey manager"
      date: "22 Apr 2024"
      cadence: "Updated every Monday"
```

```block
type: OwnerDirectory
data:
  items:
    - area: "Dealer locator"
      ownerName: "Saskia Trent"
      ownerRole: "Service owner"
      scope:
        - "Store search"
        - "Map pins"
        - "Retailer detail pages"
      cadence: "Updated monthly"
      askAbout: "Ownership, roadmap, defects affecting store discovery"
    - area: "Checkout"
      ownerName: "Jonah Vale"
      ownerRole: "Experiment lead"
      scope:
        - "Address step"
        - "Payment handoff"
        - "Form completion"
      cadence: "Updated twice a week"
      askAbout: "Tests, live changes, and conversion questions"
    - area: "Homepage and navigation"
      ownerName: "Leila Mercer"
      ownerRole: "UX researcher"
      scope:
        - "Navigation labels"
        - "Entry points"
        - "First-click findings"
      cadence: "Updated every Thursday"
      askAbout: "Current tests and what people are struggling to find"
    - area: "Support journeys"
      ownerName: "Ewan Price"
      ownerRole: "Journey manager"
      scope:
        - "Warranty"
        - "Servicing"
        - "Help hub"
      cadence: "Updated every Monday"
      askAbout: "Support flows, routing changes, and known friction"
```

```block
type: OwnerTable
data:
  items:
    - area: "Dealer locator"
      ownerName: "Saskia Trent"
      ownerRole: "Service owner"
      cadence: "Monthly"
      state: "Stable"
      updatesThisMonth: 2
    - area: "Checkout"
      ownerName: "Jonah Vale"
      ownerRole: "Experiment lead"
      cadence: "Twice a week"
      state: "Testing"
      updatesThisMonth: 5
    - area: "Homepage and navigation"
      ownerName: "Leila Mercer"
      ownerRole: "UX researcher"
      cadence: "Weekly"
      state: "Testing"
      updatesThisMonth: 4
    - area: "Finance journey"
      ownerName: "Callum Reed"
      ownerRole: "Content designer"
      cadence: "Weekly"
      state: "Changed"
      updatesThisMonth: 3
    - area: "Support hub"
      ownerName: "Ewan Price"
      ownerRole: "Journey manager"
      cadence: "Weekly"
      state: "Changed"
      updatesThisMonth: 4
    - area: "Search and browse"
      ownerName: "Mira Holloway"
      ownerRole: "Product manager"
      cadence: "Weekly"
      state: "Stable"
      updatesThisMonth: 2
```

```block
type: HowWeWork
data:
  items:
    - title: "What gets posted"
      eyebrow: "Scope"
      text: "Posts cover live changes, active tests, ownership shifts, and anything else that saves somebody from asking a colleague."
      cadence: "Reviewed every Monday morning"
      tags:
        - "Live changes"
        - "Tests"
        - "Ownership"
    - title: "How often it is updated"
      eyebrow: "Cadence"
      text: "Each post names how often it is updated so readers know whether they are looking at a weekly note, a test in flight, or a monthly ownership signal."
      cadence: "Set on every post"
      tags:
        - "Weekly"
        - "Twice a week"
        - "Monthly"
    - title: "What a good update says"
      eyebrow: "Writing"
      text: "Short sentences. Say what changed and what it meant. Leave out task-by-task reporting and anything written upward as status."
      cadence: "Used on every entry"
      tags:
        - "Plain language"
        - "Concrete"
        - "Useful first"
    - title: "Who keeps the site"
      eyebrow: "Stewardship"
      text: "The web operations group keeps the portal current, chases missing Monday updates, and closes stale tests when a decision has been made."
      cadence: "Checked weekly"
      tags:
        - "Web operations"
        - "Site steward"
```

```block
type: ResourceList
data:
  items:
    - title: "Testing backlog"
      description: "Active experiments, decision dates, and the next readout."
      meta: "Used by product, design, and analytics"
      href: "#"
      actionLabel: "Open backlog"
    - title: "Release notes archive"
      description: "Earlier weekly changes kept in date order for quick reference."
      meta: "Updated every Monday"
      href: "#"
      actionLabel: "Open archive"
    - title: "Incident log"
      description: "Recent live issues, current state, and who is coordinating."
      meta: "Updated when something changes"
      href: "#"
      actionLabel: "Open incident log"
    - title: "Content and ownership map"
      description: "A quick reference for journeys, page groups, and named owners."
      meta: "Reviewed monthly"
      href: "#"
      actionLabel: "Open map"
```

Team Ada and Team Dag agreed on a real internal site called What's Changed, with the feed as the first thing and ownership and working method as the other ways in. I kept that spine and filled the open row wording Team Dag noted, while not taking their suggestion to leave rows unwritten because the page needed to stand as a finished first version.

<!-- merged: day-check-150016 sprint 1 — Team Ada, Team Dag -->
