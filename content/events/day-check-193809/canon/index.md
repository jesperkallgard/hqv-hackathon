---
title: What's Changed
---

```block
type: WhatsChangedPortal
data:
  siteName: What's Changed
  summary: An internal site for people who need the answer fast and do not want to ask a colleague.
  nav:
    - { label: The feed, href: "#the-feed", current: true }
    - { label: Who owns what, href: "#who-owns-what" }
    - { label: How we work, href: "#how-we-work" }
  frontDoor:
    title: Four clear routes into the site
    body: Pick the area you need. Each card shows who owns it, when it was last updated, and how often it is refreshed.
    cards:
      - title: What’s changed
        href: "#the-feed"
        owner: Orla Fenwick, Release editor
        updated: 18 Mar 2026
        cadence: Weekly
        status: Current
        summary: Live changes that other teams need to know about now.
        action: Open the latest changes
      - title: What we’re testing
        href: "#the-feed"
        owner: Gideon Hale, Experiment lead
        updated: 17 Mar 2026
        cadence: Twice a week
        status: In test
        summary: Active tests, what they affect, and what other teams should not change yet.
        action: See active tests
      - title: How we do things
        href: "#how-we-work"
        owner: Talia Wren, Content operations lead
        updated: 16 Mar 2026
        cadence: Monthly
        status: Current
        summary: Working rules, publishing habits, and what belongs on the site.
        action: Read the working rules
      - title: Who owns what
        href: "#who-owns-what"
        owner: Micah Dorsey, Service manager
        updated: 17 Mar 2026
        cadence: Monthly
        status: Current
        summary: Named owners, update rhythm, and where to send the question first.
        action: Find the right owner
  postList:
    title: The feed
    intro: Newest first. Every post shows what changed, who owns it, how often it is updated, and what to do next.
    filters:
      label: Find the right post
      helper: Use plain language. Start with what you need.
      options:
        - { label: Everything, value: all }
        - { label: Latest changes, value: changes }
        - { label: Tests in progress, value: tests }
        - { label: Ownership and contacts, value: owners }
        - { label: Working rules, value: work }
    emptyState:
      title: Nothing matches that route yet.
      body: Try Everything, or open Who owns what to find the right person first.
    rows:
      - title: My Husqvarna login moved
        href: "#opened-post"
        owner: Jonas B
        date: 18 Mar 2026
        cadence: Monthly
        status: Current
        route: changes
        action: Update saved links
        current: true
      - title: Checkout address validation now blocks PO boxes in Norway
        href: "#"
        owner: Mara Kline
        date: 16 Mar 2026
        cadence: Weekly
        status: Current
        route: changes
        action: Remove PO box examples from local guidance
      - title: Product page trust badges were removed from mobile
        href: "#"
        owner: Ellis Rowe
        date: 14 Mar 2026
        cadence: Weekly
        status: Current
        route: changes
        action: Stop referring to trust badges in mobile reviews
      - title: Dealer locator now opens map results in the same tab
        href: "#"
        owner: Nina Vale
        date: 12 Mar 2026
        cadence: Monthly
        status: Current
        route: owners
        action: Send map issues to the locator owner
      - title: Campaign codes now persist between category and cart
        href: "#"
        owner: Adrian Pike
        date: 10 Mar 2026
        cadence: Weekly
        status: Current
        route: changes
        action: Keep campaign QA on one journey
      - title: Spare parts search now treats hyphens and spaces the same
        href: "#"
        owner: Lena Cross
        date: 07 Mar 2026
        cadence: Fortnightly
        status: Current
        route: changes
        action: Use either format when checking failed searches
      - title: Homepage hero order test is live in Sweden
        href: "#"
        owner: Gideon Hale
        date: 17 Mar 2026
        cadence: Twice a week
        status: In test
        route: tests
        action: Hold homepage copy changes until the test ends
      - title: Finance calculator CTA wording test is live on product pages
        href: "#"
        owner: Iona Mercer
        date: 15 Mar 2026
        cadence: Twice a week
        status: In test
        route: tests
        action: Keep product page CTA wording unchanged in local plans
      - title: Dealer locator ownership and contact route
        href: "#who-owns-what"
        owner: Micah Dorsey
        date: 17 Mar 2026
        cadence: Monthly
        status: Current
        route: owners
        action: Ask the service manager first
      - title: Release notes are checked every Friday morning
        href: "#how-we-work"
        owner: Orla Fenwick
        date: 13 Mar 2026
        cadence: Weekly
        status: Current
        route: work
        action: Use Friday as the cut-off for weekly updates
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
    actionLabel: What you need to do
    actionText: Replace any saved login link in help text, training notes, and handover docs.
    onwardLink:
      label: Open the new login
      href: "#"
  ownership:
    title: Who owns what
    intro: Start here when you know the area but not the person. Each line names an owner, what they cover, and how often they review it.
    rows:
      - area: Dealer locator
        owner: Micah Dorsey
        role: Service manager
        cadence: Monthly
        contact: First route for map data, opening hours, and dealer detail issues
      - area: Experiments and active tests
        owner: Gideon Hale
        role: Experiment lead
        cadence: Twice a week
        contact: First route for tests that can affect copy, layout, or release timing
      - area: Release notes and weekly changes
        owner: Orla Fenwick
        role: Release editor
        cadence: Weekly
        contact: First route when another team needs to know what changed and why it matters
      - area: Content operations and working rules
        owner: Talia Wren
        role: Content operations lead
        cadence: Monthly
        contact: First route for publishing habits, page patterns, and writing rules
      - area: Checkout guidance
        owner: Mara Kline
        role: Checkout manager
        cadence: Weekly
        contact: First route for address, payment, and order flow changes
      - area: Product page journeys
        owner: Ellis Rowe
        role: Product journey manager
        cadence: Weekly
        contact: First route for product detail layout, reassurance content, and mobile buying signals
  howWeWork:
    title: How we work
    intro: These are the working rules behind the feed. They keep posts short, current, and useful to other teams.
    items:
      - title: Say what changed and what it meant
        owner: Talia Wren, Content operations lead
        cadence: Monthly
        body: Posts explain the change and the effect on other teams. They do not retell the process behind it.
      - title: Name one owner on every post
        owner: Orla Fenwick, Release editor
        cadence: Weekly
        body: Every post names the person who can answer the next question. Anonymous updates do not get published.
      - title: Show how often each area is checked
        owner: Micah Dorsey, Service manager
        cadence: Monthly
        body: Update rhythm stays visible so staleness is easy to spot before somebody relies on old guidance.
      - title: Keep tests visible while they can block change
        owner: Gideon Hale, Experiment lead
        cadence: Twice a week
        body: If a test means another team should hold a change, that post stays in the feed until the risk is gone.
  footer:
    note: Kept by the Website Optimisation team.
    meta: Front door reviewed every Friday morning.
```

Teams Vera, Nils, Quinn, Wille, Dag, and Tove agreed on one calm internal site with the feed first, plain navigation in outside-team language, and full owner and update rhythm on every visible item. I kept Tove’s added “what you need to do next” in each feed row and the opened post, and used the header routes and filter labels to replace internal terms with plain paths to the answer. I cut the earlier front-door-led navigation as the main route: Team Vera, Quinn, Wille, and Dag all argued that the feed should be the first thing people reach, so the front door stays as a quick chooser beneath the header rather than as the primary wayfinding model. I supplied filter options, owners, and working-rule entries to make the page whole.

<!-- merged: day-check-193809 sprint 4 — Team Vera, Team Nils, Team Quinn, Team Wille, Team Dag, Team Tove -->
