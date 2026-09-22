---
title: What's Changed
---

```block
type: WhatsChangedPortal
data:
  siteName: What's Changed
  summary: An internal site for people who need the answer fast and do not want to ask a colleague.
  nav:
    - { label: Feed, href: "#feed" }
    - { label: Who owns what, href: "#owners" }
    - { label: How we work, href: "#how-we-work" }
  hero:
    title: What changed, what it meant, and who to ask
    body: The feed is the front door. It shows what changed this week, what is being tested, and who owns key parts of the site, newest first.
    primaryAction: { label: Add update, href: "#add-update" }
    secondaryAction: { label: See owners, href: "#owners" }
  feed:
    title: Feed
    note: Every post names an owner, the last update date, and how often it is updated so you can act without asking around.
    items:
      - title: Checkout postcode lookup now keeps valid entries when a shopper edits house number
        summary: Shoppers no longer lose a valid postcode match when they correct the last line of the address. It cut repeat lookups on the checkout step and reduced support pings about blocked orders.
        action: Watch for a drop in address-error tickets this week.
        owner: Mara Ellison, Conversion manager
        date: 18 Mar 2026
        cadence: Weekly
        status: Current
        tags: [Checkout, Live]
      - title: Dealer locator owner is now listed on-page with response route for broken store details
        summary: The dealer locator now has one clear owner and one route for store-detail fixes. Other teams no longer need to ask around before reporting wrong opening hours or map pins.
        action: Send dealer-data issues to the listed owner before raising a wider channel thread.
        owner: Nolan Price, Product owner
        date: 17 Mar 2026
        cadence: Monthly
        status: Current
        tags: [Dealer locator, Ownership]
      - title: Free-delivery threshold test is running on accessory baskets over 450
        summary: The current test checks whether a clearer threshold lifts add-on orders without raising checkout exits. The variant changes the line above the basket total and the reminder in cart.
        action: Do not reuse the test copy in campaigns until the result is called.
        owner: Sienna Vale, Experiment lead
        date: 17 Mar 2026
        cadence: Twice a week
        status: In test
        tags: [Experiment, Basket]
      - title: Model comparison page now shows battery range in one format across all cards
        summary: Range values now use one format across the model comparison page. This removed a common source of confusion when teams copied values into decks and retailer briefings.
        action: Update any saved screenshots used in sales material.
        owner: Felix Rowan, Content designer
        date: 15 Mar 2026
        cadence: When changed
        status: Current
        tags: [Content, Live]
      - title: Search result labels now separate unavailable bikes from delayed delivery
        summary: Search results no longer treat every missing bike as the same state. People can now see whether a model is gone or still orderable with a longer lead time.
        action: Use the delayed-delivery label in support replies when a customer asks why the PDP differs from store stock.
        owner: Imani Cross, Search lead
        date: 14 Mar 2026
        cadence: Weekly
        status: Current
        tags: [Search, Availability]
      - title: Finance calculator wording is being tested on mobile product pages
        summary: The team is testing a shorter finance summary above the fold on mobile product pages. The aim is to help people understand monthly cost sooner without opening the full calculator.
        action: Hold off on further finance-copy edits until this test ends.
        owner: Theo Mercer, Optimisation analyst
        date: 13 Mar 2026
        cadence: Twice a week
        status: In test
        tags: [Finance, Mobile]
  owners:
    title: Who owns what
    note: Ownership is easy to scan here instead of buried in posts.
    rows:
      - area: Dealer locator
        owner: Nolan Price
        role: Product owner
        updates: Monthly
        lastTouched: 17 Mar 2026
        route: dealer-locator@internal.example
      - area: Checkout
        owner: Mara Ellison
        role: Conversion manager
        updates: Weekly
        lastTouched: 18 Mar 2026
        route: checkout-team@internal.example
      - area: Search and navigation
        owner: Imani Cross
        role: Search lead
        updates: Weekly
        lastTouched: 14 Mar 2026
        route: search-web@internal.example
      - area: Product page experiments
        owner: Theo Mercer
        role: Optimisation analyst
        updates: Twice a week
        lastTouched: 13 Mar 2026
        route: experiments@internal.example
      - area: Content patterns and labels
        owner: Felix Rowan
        role: Content designer
        updates: When changed
        lastTouched: 15 Mar 2026
        route: content-web@internal.example
      - area: Release notes and feed upkeep
        owner: Sienna Vale
        role: Experiment lead
        updates: Weekly
        lastTouched: 17 Mar 2026
        route: whats-changed@internal.example
  howWeWork:
    title: How we work
    note: Short rules for what belongs here and how to keep it useful.
    principles:
      - title: Write the change, then the meaning
        body: Start with what a person will notice. Follow with what it means for teams who use the site.
        meta: Applies to every post
      - title: Post only what saves a question
        body: If someone would still need to ask a colleague after reading it, it is not ready to publish.
        meta: Used for feed reviews
      - title: Name one owner and one rhythm
        body: Every post names who owns the area and how often it is updated so stale entries are easy to spot.
        meta: Required before publishing
      - title: Keep language plain
        body: Use short sentences. Avoid team shorthand and experiment vocabulary that other teams would need explained.
        meta: For readers outside the team
    callout:
      title: What belongs in the feed
      body: Changes in live behaviour, active tests, ownership changes, and updates that affect support, retail, trading, or content teams.
    footerNote: Kept by the Website Optimisation team.
    footerMeta: Last tidy-up every Friday morning.
```

Teams Dag, Quinn, Maja, Greta, Kajsa, and Iris all pointed to one calm internal front door with the feed first, plus clear routes into ownership and working methods. I kept Greta’s emphasis on staleness visible and Iris and Maja’s push for each post to say what changed, what it meant, and what to do next. I did not keep the suggestion in Iris’s notes to leave unknown details out; this first build needed a complete, arguable site, so the feed, directory, and working rules are fully filled in.

<!-- merged: day-check-193809 sprint 1 — Team Dag, Team Quinn, Team Maja, Team Greta, Team Kajsa, Team Iris -->
