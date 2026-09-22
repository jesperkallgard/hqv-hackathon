---
title: "What's changed"
ingress: "One feed, newest first, that answers the three things people keep asking a colleague instead: what changed, what's being tested, who owns the dealer locator."
---

```block
type: WhatsChangedPage
data:
  title: What's changed
  intro: One feed, newest first, that answers the three things people keep asking a colleague instead: what changed, what's being tested, who owns the dealer locator.
  exampleNotice: Example rows. The wording below was written by the room to show the shape of a row — it is not real site data. Swap in the actual changes, tests and ownership lines when this is built.
  entries:
    - text: Dealer locator now points at the new map provider. Old links stopped resolving for two days.
      owner: Dag
      date: 12 March
    - text: Checkout copy test is running on half of visitors this week.
      owner: Ada
      date: 10 March
    - text: Homepage hero image changed to the spring line.
      owner: Priya
      date: updated weekly
    - text: A/B test live on the checkout button colour since Monday.
      owner: Tomas
      date: checked daily
    - text: Dealer locator is owned by Dag. He updates this line whenever ownership changes.
      owner: Dag
      date: 1 March
    - text: Dealer locator owned by the Facilities team.
      owner: Jonas
      date: reviewed monthly
  footerNote: A page you go to, not one that comes to you. No notifications, no email digest.
  footerRule: A post earns its place if it saves somebody from asking a colleague. Every post names an owner and how often it is updated.
```

## Decisions

Both groups arrived at the same page: one list, titled "What's changed", newest first, one column, no search box, no filters, no tabs, no categories. That agreement is the whole prototype, so it is built once.

**The date field.** Team Bo's rows carry a cadence — "updated weekly", "checked daily", "reviewed monthly" — because the direction says every post names how often it is updated. Team Ada's rows carry a calendar date, and argued that the date is when that line was last true, not when the row was created. The page keeps the date column able to hold either, and does not force one format, because both are answering the same question: how current is this. Ada's reading of what a date means is the one written down.

**Owner.** Ada argued every row names one person, never a team. Bo's own example rows include one owned by the Facilities team. The page does not enforce a rule it cannot enforce in markup; the room has not settled this, and it is open.

**Ownership rows are not changes.** Ada's point is kept: an ownership line is a fact restated whenever it is confirmed or handed over, and it sits in the same feed as a change and a test, in the order it happened. No sections separate the three kinds.

**Every row on this page is example wording.** Both groups said so in their hand-ins. Neither had this sprint's live data. The notice above the list says it on the page itself, so nobody reads a stand-in as a fact.

**Not built:** search, filters, tags, categories, pinning, priority, status badges, thumbnails, comments, reactions, notifications, email digest, pagination. The list just keeps going and gets long; it is meant to be scanned, not browsed.

<!-- merged: day-check-103054 sprint 1 — Team Bo, Team Ada -->
