---
title: DBS Knowledgehub
---

```block
type: KnowledgehubHome
data:
  siteName: DBS Knowledgehub
  nav:
    - { label: "What changed", href: "#" }
    - { label: "Optimize", href: "#" }
    - { label: "Explore", href: "#" }
    - { label: "Scale", href: "#" }
    - { label: "Who owns what", href: "#" }
    - { label: "How we work", href: "#" }
  kpis:
    - { value: "128", label: "Deploys to husqvarna.com", delta: "+19", period: "in the last 30 days" }
    - { value: "14", label: "Tests running or read out", delta: "4 running", period: "this week" }
    - { value: "3.1", unit: "MSEK", label: "Added revenue from tests, year to date", delta: "+410 kSEK", period: "since the last readout" }
    - { value: "1.94", unit: "M", label: "Visits to the site", delta: "+6%", period: "vs. the same month last year" }
  doors:
    - name: Optimize
      text: "What we tested, what it showed, and what we changed because of it. Readouts land here the day a test is called."
      count: "14 tests · 9 readouts this quarter"
      href: "#"
    - name: Explore
      text: "What we know about the people on the site: research, session recordings, search terms, and the questions dealers keep asking."
      count: "22 notes · updated weekly"
      href: "#"
    - name: Scale
      text: "What is already built and reusable: components, tracking, the release train, and how to get something of yours onto the site."
      count: "31 pages · owned by four teams"
      href: "#"
  feed:
    - date: "12 May 2025"
      title: "Dealer locator now shows stock by store, not just by region."
      text: "Callers used to ask the dealer whether a model was on the floor. They can see it before they call."
      owner: "Priya, Ops"
      frequency: "weekly"
      state: shipped
      area: "Dealer locator"
    - date: "9 May 2025"
      title: "New checkout flow is being tested with 10% of traffic."
      text: "Address and payment are on one step instead of two. We read it out on 23 May."
      owner: "Sam, Payments"
      frequency: "on release"
      state: testing
      area: "Checkout"
    - date: "7 May 2025"
      title: "Search is being rebuilt to handle typos."
      text: "One in eleven searches returns nothing, and most of those are a misspelt model name."
      owner: "Priya, Ops"
      frequency: "monthly"
      state: planned
      area: "Search"
    - date: "6 May 2025"
      title: "Product pages load a second faster on mobile."
      text: "We stopped loading the 360° viewer until someone asks for it. Bounce on 4G dropped by four points."
      owner: "Marcus Lindqvist, Frontend"
      frequency: "on release"
      state: shipped
      area: "Product pages"
    - date: "2 May 2025"
      title: "Two robot mower models are being compared with a shorter spec table."
      text: "Eleven rows instead of twenty-six, with the rest behind a link. Running to 20 May."
      owner: "Anneli Ravn, Content"
      frequency: "weekly"
      state: testing
      area: "Product pages"
    - date: "28 April 2025"
      title: "Service booking asks for the machine's serial number first."
      text: "Workshops were calling customers back to get it. Three weeks in, they call back half as often."
      owner: "Tomas Brenner, Service"
      frequency: "monthly"
      state: shipped
      area: "Service booking"
    - date: "24 April 2025"
      title: "Consent banner is being rewritten so the choice fits on one screen."
      text: "Analytics consent sits at 61%, which means we read every test through a partial picture."
      owner: "Ingrid Salo, Analytics"
      frequency: "weekly"
      state: planned
      area: "Tracking"
    - date: "22 April 2025"
      title: "Spare parts pages moved onto the same template as the rest of the site."
      text: "They were the last thing running on the old build. The old build is now switched off."
      owner: "Marcus Lindqvist, Frontend"
      frequency: "on release"
      state: shipped
      area: "Spare parts"
  owners:
    - { area: "Dealer locator", owner: "Priya, Ops", frequency: "weekly" }
    - { area: "Checkout", owner: "Sam, Payments", frequency: "on release" }
    - { area: "Search", owner: "Priya, Ops", frequency: "monthly" }
    - { area: "Product pages", owner: "Anneli Ravn, Content", frequency: "weekly" }
    - { area: "Service booking", owner: "Tomas Brenner, Service", frequency: "monthly" }
    - { area: "Spare parts", owner: "Marcus Lindqvist, Frontend", frequency: "on release" }
    - { area: "Tracking and consent", owner: "Ingrid Salo, Analytics", frequency: "weekly" }
    - { area: "Release train", owner: "Marcus Lindqvist, Frontend", frequency: "weekly" }
  howWeWork:
    - heading: "What earns a post"
      text: "A post earns its place if it saves somebody from asking a colleague. If the answer is already written down somewhere findable, link to that instead."
    - heading: "Every post names an owner"
      text: "A name and a team, not a mailbox. The owner answers questions about that area and keeps the post true."
    - heading: "Every post says how often it updates"
      text: "Weekly, monthly, or on release. If a post has gone past its own interval, it shows up on the owner's list to fix or retire."
    - heading: "Say what changed and what it meant"
      text: "Not what was done, not what is planned for next quarter. Short sentences. If a test was flat, write that it was flat."
  footerLine: "Kept by the platform team."
  footerMeta: "Open to anyone at Husqvarna. Questions about a post go to the owner named on it."
```

## What the room decided

Two ideas, one page. **DBS Knowledgehub** gives the site its name, its audience — anyone at Husqvarna, whatever their role — the KPI figures at the top and the three ways in: Optimize, Explore and Scale. **What's Changed** gives everything under them: the feed newest-first, an owner and an update frequency on every single row, one orange pill on the whole site, and a footer that names who keeps it running rather than listing credits.

They disagreed about the first screen. What's Changed argued the home page should *be* the feed — "no dashboard, no charts, nothing to interpret" — and that the header should hold exactly three ways in and nothing else. DBS Knowledgehub argued for KPIs first and three doors, explicitly "inte en inläggslista". The page opens the way DBS Knowledgehub asked: the KPI figures are the largest type on the page, the doors sit directly under them. What's Changed wins everything below that line, and its no-charts rule holds — the KPI band is four plain numbers, no graphs, nothing to interpret. The header carries six items instead of three, because the doors have to be reachable from it.

The AI chat was left open by DBS Knowledgehub. It is on the page as a single search field asking "What are you looking for?", sitting between the doors and the feed, because a question box is cheaper to argue with than a paragraph describing one. The primary action was assumed rather than settled by What's Changed: "Post an update" is the one orange pill, and it opens a short form for what changed, the owner, and how often it updates.

What is inside Optimize, Explore and Scale was out of scope this sprint, so the doors say what each holds and how much is in it rather than opening onto a built section. Owners, areas, rows, dates and the four rules under How we work were written here so there was a full page to look at; the three rows What's Changed wrote — the dealer locator, the checkout test, the search rebuild — are the room's own words and sit at the top of the feed unchanged. Everyone named elsewhere on the page is invented.

<!-- merged: day-check-170842 sprint 1 — Team Dag, Team Ada -->
