---
title: What’s Changed
---

```block
type: WhatsChangedPage
data:
  title: What’s Changed
  summary: A simple internal site for finding the answer without asking a colleague. It shows what changed, who owns it, and how often it is updated.
  nav:
    - { label: What changed, href: "#what-changed", current: true }
    - { label: Who owns what, href: "#who-owns-what" }
    - { label: How we work, href: "#how-we-work" }
  feedIntro: The feed is the front door. Newest first. Every row shows what changed, what it meant, who owns it, and how often it is updated.
  emptyState:
    title: Nothing matches this view.
    body: Try another filter or go to Who owns what if you already know the area.
  feedFilters:
    - { label: All updates, value: all }
    - { label: Changes to the site, value: changed }
    - { label: Tests now running, value: testing }
    - { label: Ownership and ways of working, value: ownership }
  posts:
    - id: post-login-moved
      category: changed
      status: Updated this week
      title: My Husqvarna login moved
      meaning: Use the new login page the next time you sign in. Old bookmarks may still open the previous page and fail.
      ownerName: Mara Keene
      ownerRole: Login experience owner
      updateFrequency: Updated monthly
      date: 13 May 2026
      href: "#post-login-moved"
    - id: post-checkout-address-test
      category: testing
      status: Test running
      title: We are testing a shorter address step in checkout
      meaning: The test checks whether fewer fields reduce drop-off before payment. Share results after the test ends, not while it is running.
      ownerName: Idris Vale
      ownerRole: Conversion lead
      updateFrequency: Updated weekly
      date: 12 May 2026
      href: "#post-checkout-address-test"
    - id: post-dealer-locator-owner
      category: ownership
      status: Owner confirmed
      title: Dealer locator is owned by Retail platform
      meaning: Questions about search results, map behaviour, and dealer data should go to the area owner first.
      ownerName: Lena Orlov
      ownerRole: Retail platform manager
      updateFrequency: Reviewed monthly
      date: 11 May 2026
      href: "#post-dealer-locator-owner"
    - id: post-homepage-hero-copy
      category: changed
      status: Live now
      title: Homepage hero now points to service booking
      meaning: The main link now sends returning riders to the booking flow instead of the campaign page.
      ownerName: Nora Bell
      ownerRole: Homepage journey owner
      updateFrequency: Updated weekly
      date: 9 May 2026
      href: "#post-homepage-hero-copy"
    - id: post-size-guide-test
      category: testing
      status: Test running
      title: We are testing a size guide link on product pages
      meaning: The test checks whether clearer sizing help reduces exits from the product page.
      ownerName: Felix Arden
      ownerRole: Product detail owner
      updateFrequency: Updated weekly
      date: 7 May 2026
      href: "#post-size-guide-test"
    - id: post-content-rules-refresh
      category: ownership
      status: Updated this week
      title: Posting rules now require an owner and update rhythm
      meaning: New posts must name one owner and say how often the information is checked.
      ownerName: Talia Mercer
      ownerRole: Content operations lead
      updateFrequency: Reviewed weekly
      date: 6 May 2026
      href: "#post-content-rules-refresh"
  owners:
    title: Who owns what
    intro: Go here when you need the right person fast for an area, journey, or question about the site.
    areas:
      - area: Dealer locator
        ownerName: Lena Orlov
        ownerRole: Retail platform manager
        updateFrequency: Reviewed monthly
        scope: Search results, map behaviour, dealer data
      - area: Login and account access
        ownerName: Mara Keene
        ownerRole: Login experience owner
        updateFrequency: Updated monthly
        scope: Sign-in, account recovery, access checks
      - area: Checkout
        ownerName: Idris Vale
        ownerRole: Conversion lead
        updateFrequency: Updated weekly
        scope: Basket, address, payment completion
      - area: Product detail pages
        ownerName: Felix Arden
        ownerRole: Product detail owner
        updateFrequency: Updated weekly
        scope: Specs, sizing help, stock messaging
      - area: Homepage journeys
        ownerName: Nora Bell
        ownerRole: Homepage journey owner
        updateFrequency: Updated weekly
        scope: Hero links, featured paths, campaign routing
      - area: Content operations
        ownerName: Talia Mercer
        ownerRole: Content operations lead
        updateFrequency: Reviewed weekly
        scope: Posting rules, owner naming, content checks
  workingRules:
    title: How we work
    intro: Use this when you need the rules for posting updates, naming owners, and keeping content current.
    rules:
      - title: Post only what saves somebody from asking a colleague
        body: A post earns its place when it answers a question another team would otherwise ask in chat or in a meeting.
      - title: Say what changed and what it meant
        body: Keep it plain and concrete. Short sentences. Do not describe the work that happened behind the change.
      - title: Name one owner on every post
        body: Use one person or one role owner. The owner is the first route for follow-up questions.
      - title: Show how often it is updated
        body: Say whether the post is updated weekly, monthly, or on another clear rhythm so freshness is obvious.
      - title: Keep owners and dates current
        body: If a post is still useful, review the date and owner on the stated rhythm. If it no longer helps anyone, remove it.
  footer:
    keeper: Kept up to date by Web operations.
    links:
      - { label: What changed, href: "#what-changed" }
      - { label: Who owns what, href: "#who-owns-what" }
      - { label: How we work, href: "#how-we-work" }
```

Teams Olga, Lars, Elin, Wille, and Sam agreed that this should read as one calm internal site with the feed first, then ownership and working rules on the same page. I kept Lars’s plainer three-link navigation over Nils’s four-link version, so the labels use outsider language rather than team terms like “What we’re testing” and “How we do things”. I also kept the feed as the front door, then added category filters and a designed empty state to answer the sprint’s question about finding the right post; the rows and directory content are filled in so the page can be judged as a finished site.

<!-- merged: day-check-210310 sprint 4 — Team Olga, Team Lars, Team Nils, Team Elin, Team Wille, Team Sam -->
