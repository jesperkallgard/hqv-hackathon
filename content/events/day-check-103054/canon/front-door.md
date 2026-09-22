---
title: "The front door"
ingress: "One home page, four cards, one column. The four are the whole site — an outsider reads the labels and knows where to click, and nowhere else on the page."
---

```block
type: FrontDoorPage
data:
  siteName: What's changed
  exampleNotice: Example dates. The dates below were written by the room to show the shape of a card — they are not real. Swap in each area's real last-updated date when this is built.
  cards:
    - label: What's changed
      dateLine: Last updated 12 March
      href: "/whats-changed"
    - label: What we're testing
      dateLine: Last updated 12 March
      href: "/whats-changed"
    - label: How we do things
      dateLine: Nothing yet
    - label: Who owns what
      dateLine: Last updated 1 March
      href: "/whats-changed"
  footerRule: A post earns its place if it saves somebody from asking a colleague. Every post names an owner and how often it is updated.
  footerNote: A page you go to, not one that comes to you. No notifications, no email digest.
```

## Decisions

Both groups built the same page: four cards, one column, fixed order — What's changed, What we're testing, How we do things, Who owns what — each showing only its label and the date it was last updated. No hero, no welcome text, no search box, no menu, no icons, no counts, no preview lines, no fifth card. That agreement is the front door, so it is built once. The order is the order someone new should read them in, not alphabetical and not by recency.

**What is behind the cards.** Team Bo argued that "What's changed" does not narrow now that testing and ownership have their own cards: the feed already built deliberately mixes changes, tests and ownership in one list with no sections, and the testing and ownership cards are doors into that same feed, filtered — not a second store of content. The page goes Bo's way. Team Dag assumed the other three areas were nobody's this sprint and had their cards read "Nothing yet"; that reading would have created three empty pages beside a feed that already holds their rows.

**"How we do things" is the exception.** It is process — how something is normally handled — not an event with a date something happened. It is not built from the feed and has no page behind it yet, so its card reads "Nothing yet". Dag's rule that a card still shows when its area is empty rather than disappearing is what keeps all four names visible.

**The dates are example dates.** Neither group had this sprint's real last-updated dates. The notice above the cards says so on the page, so nobody reads a stand-in as a fact.

**Still open.** Whether "What's changed" should mean only site changes is a real change to what sprint 1 built. Bo said it out loud rather than assuming it again: the page keeps the mixed feed until the room decides otherwise.

**Not built:** search across the four areas, filters, recently-updated sorting, icons, card previews, counts, badges, a "more" link, settings, or any link on the home page that is not one of the four cards.

<!-- merged: day-check-103054 sprint 2 — Team Bo, Team Dag -->
