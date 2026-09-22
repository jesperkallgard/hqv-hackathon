---
title: "What's Changed"
cycle: 1
---

```block
type: WhatsChangedSite
data:
  siteName: What's Changed
  nav:
    - { id: feed, label: The feed }
    - { id: owners, label: Who owns what }
    - { id: how, label: How we work }
  feedTitle: What's Changed
  feedLede: "What changed on the site, what we're testing, and who owns what. Newest first. Every post names an owner and how often it's updated."
  filters:
    - All
    - Shipped
    - In testing
    - Ownership
  feed:
    - kind: Shipped
      date: 17 June 2024
      title: Dealer locator now opens on the nearest three dealers
      body: "The locator used to open on an empty map and wait for a postcode. It now asks once for location and shows the nearest three dealers straight away. Fewer people leave the page before seeing a dealer, and the support inbox has stopped getting \"the map is blank\" mails."
      owner: Mira Halvorsen
      area: Dealer locator
      cadence: Updated weekly
    - kind: In testing
      date: 14 June 2024
      title: Price shown on the model card, before the configurator
      body: "Half of visitors see the starting price on the model card in the listing; half see it only after opening the configurator. We want to know whether the price up front sends more people into the configurator or fewer. Running until 5 July, then we write down what it meant."
      owner: Tomas Lind
      area: Model listing
      cadence: Updated weekly while the test runs
    - kind: Ownership
      date: 12 June 2024
      title: The dealer locator is owned by Mira Halvorsen
      body: "Questions about dealer data, opening hours or the map itself go to Mira. The underlying dealer list comes from the dealer database and is imported every night, so a wrong address is fixed at the source, not here."
      owner: Mira Halvorsen
      area: Dealer locator
      cadence: Reviewed monthly
    - kind: Shipped
      date: 10 June 2024
      title: Checkout no longer asks for a company number from private buyers
      body: "The field was required for everyone and private buyers were typing in anything to get past it. It is now only shown when business is selected. The abandoned-order mails about \"invalid company number\" have stopped."
      owner: Anneke Vos
      area: Checkout
      cadence: Updated fortnightly
    - kind: Paused
      date: 6 June 2024
      title: The chat widget is off on mobile until August
      body: "On small screens the widget covered the buy button and people tapped it by accident. It is switched off on mobile while we wait for the supplier's new layout. It is still on for desktop. If someone asks why chat vanished on their phone, this is why."
      owner: Sander Mork
      area: Support chat
      cadence: Reviewed monthly
    - kind: In testing
      date: 3 June 2024
      title: Shorter lead form on the test-drive page
      body: "Six fields against three. The short version drops company, interest and preferred contact time, and asks for those in the follow-up call instead. We are watching whether the sales team still gets enough to call back on, not just whether more forms are sent."
      owner: Anneke Vos
      area: Test drive booking
      cadence: Updated weekly while the test runs
    - kind: Shipped
      date: 29 May 2024
      title: Model pages load in under two seconds on a phone
      body: "The hero image was being sent at full desktop size to every device. It is now sized to the screen. On a mid-range phone the page is ready about three seconds sooner, which is most of the wait people were describing as \"the site is slow\"."
      owner: Tomas Lind
      area: Model pages
      cadence: Updated monthly
    - kind: Ownership
      date: 24 May 2024
      title: Campaign landing pages are built by the web team, written by marketing
      body: "Marketing writes the copy and owns what it says. The web team builds the page and owns how it behaves. If a campaign page is wrong, the fastest route is: wording to marketing, everything else to Sander."
      owner: Sander Mork
      area: Campaign pages
      cadence: Reviewed each campaign
  ownersTitle: Who owns what
  ownersLede: "Every area of the site, its current owner, and how often it's updated — whether or not it changed recently. This is the page for \"who do I ask\"."
  owners:
    - area: Dealer locator
      note: Map, dealer list, opening hours
      owner: Mira Halvorsen
      role: Front end
      cadence: Weekly
      state: Shipped
      lastChange: 17 Jun 2024
    - area: Model listing
      note: Model cards, filters, starting prices
      owner: Tomas Lind
      role: Front end
      cadence: Weekly
      state: In testing
      lastChange: 14 Jun 2024
    - area: Checkout
      note: Basket, forms, payment steps
      owner: Anneke Vos
      role: Conversion
      cadence: Fortnightly
      state: Shipped
      lastChange: 10 Jun 2024
    - area: Test drive booking
      note: Lead form and confirmation mail
      owner: Anneke Vos
      role: Conversion
      cadence: Weekly
      state: In testing
      lastChange: 03 Jun 2024
    - area: Support chat
      note: Widget, routing, opening hours
      owner: Sander Mork
      role: Platform
      cadence: Monthly
      state: Paused
      lastChange: 06 Jun 2024
    - area: Campaign pages
      note: Landing pages built per campaign
      owner: Sander Mork
      role: Platform
      cadence: Per campaign
      state: Shipped
      lastChange: 24 May 2024
    - area: Model pages
      note: Specifications, gallery, configurator entry
      owner: Tomas Lind
      role: Front end
      cadence: Monthly
      state: Shipped
      lastChange: 29 May 2024
    - area: Search
      note: Site search and its results page
      owner: Mira Halvorsen
      role: Front end
      cadence: Quarterly
      state: Shipped
      lastChange: 11 Apr 2024
    - area: Cookie banner and consent
      note: Consent text, categories, tag loading
      owner: Priya Raman
      role: Legal and web
      cadence: Twice a year
      state: Shipped
      lastChange: 22 Feb 2024
  howTitle: How we work
  howLede: "What earns a post here, who can write one, and who to ask if something on this site is wrong or missing."
  howItems:
    - q: What earns a post
      a:
        - "A post earns its place if it saves somebody from asking a colleague. Something changed on the site, something is being tested, or somebody needs to know who owns a thing."
        - "Write what changed and what it meant, not what was done. Two or three sentences is the normal length. If you cannot say what it meant yet, say that plainly and post again when you can."
        - "A post without an owner doesn't go up. Every post also says how often that thing is updated, so the reader knows whether they are looking at this week or last quarter."
    - q: Who can write one
      a:
        - "Anybody on the web team. You do not ask permission and nothing is reviewed before it goes up."
        - "If you are outside the team and you know something belongs here, send it to the owner of that area on Who owns what and they will post it."
    - q: What doesn't go here
      a:
        - "No dashboards, no charts, no numbers pulled in for their own sake. This is not a status report and it is not written upward."
        - "Work that nobody outside the team would ever need to know about stays in the backlog."
    - q: If something here is wrong or missing
      a:
        - "For one area, go to Who owns what and ask that owner directly. That is the whole point of the table."
        - "For the site itself — a broken page, a missing area, a person who has left — ask the site keeper named in the footer."
  footerLine: "What's Changed is kept by the web team."
  footerContact: "Site keeper: Priya Raman. Something broken, wrong or missing on this site goes to her."
  footerLinks:
    - The feed
    - Who owns what
    - How we work
```

## What the room decided

Both groups landed in the same place on the spine: one site called **What's Changed**, a header with exactly three ways in, the feed as home, newest first, an owner and a date on every row, and a footer naming who keeps the site. No dashboard, no charts, per Dag.

Where they differed is worth keeping sharp. Dag described **one feed and nothing else** — ownership statements like "who owns the dealer locator" simply appear as rows in it. Ada argued that "who owns what" has to be a **directory, not a feed slice**, because the feed only shows what changed and the question people actually ask is about areas that have *not* changed recently. The page goes Ada's way: the directory is a table of every area with its owner, how often it's updated and when it last changed. Dag's point survives in full — ownership posts still appear in the feed, tagged as such, so somebody reading Monday morning sees them without going anywhere.

The facilitator's rule that every post names an owner **and how often it is updated** was the gap in Dag's version, which carried an owner and a date only. Every feed row now carries all three, and the cadence column is the second column of the directory.

## What was filled in

The room named the site, the three nav items, the feed, the directory, the how-we-work page and the footer, plus the dealer locator as the one worked example. Everything else on the page — the posts, the areas, the owners, the dates, the how-we-work wording and the site keeper — was written here so there is a working site to argue with rather than a shape. The people on it are invented; nobody in the room appears as an owner. Ada's group said explicitly that the real list of areas and real names are a later sprint's job, and that is still true: read these as the right *kind* of row, not the right rows.

Also still open: the exact footer wording was never given, and nothing was decided about how a post is actually written — the primary "Post an update" pill sits where it belongs and goes nowhere yet.

<!-- merged: day-check-163055 sprint 1 — Team Dag, Team Ada -->
