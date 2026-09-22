---
title: "What's changed"
ingress: "One list, newest first, that answers the three things people keep asking a colleague instead: what changed, what's being tested, who owns it."
---

```block
type: ChangeList
data:
  siteName: "What's changed"
  nav:
    - { label: "The list", href: "#", current: true }
    - { label: "Add a row", href: "#" }
    - { label: "How this works", href: "#" }
  title: "What's changed"
  ingress: "One list, newest first, that answers the three things people keep asking a colleague instead: what changed, what's being tested, who owns it."
  exampleNote: "Example content — these rows show the shape of the page; nothing here has been measured, and the names are roles, not people."
  rows:
    - type: "Change"
      fact: "Dealer locator now shows opening hours. Fewer people call the dealer to ask when it opens."
      owner: "Front-end lead"
      updated: "4 Nov"
    - type: "Test"
      fact: "New checkout button colour, running on a fifth of traffic. Reads out 18 Nov."
      owner: "Optimisation lead"
      updated: "4 Nov"
    - type: "Owner"
      fact: "Dealer locator."
      owner: "Front-end lead"
      updated: "updated weekly"
    - type: "Change"
      fact: "Homepage hero swapped to the autumn campaign. The old summer hero is gone from every market."
      owner: "Content editor"
      updated: "31 Oct"
    - type: "Test"
      fact: "Shorter lead form, four fields instead of nine, on half of traffic. Completions are up; quality of the leads is not judged yet."
      owner: "Optimisation lead"
      updated: "29 Oct"
    - type: "Owner"
      fact: "Search and the results page."
      owner: "Search team lead"
      updated: "reviewed monthly"
    - type: "Change"
      fact: "Model pages load about a second faster on mobile. Images are served at the size they are shown at."
      owner: "Front-end lead"
      updated: "24 Oct"
    - type: "Test"
      fact: "Price shown on the model card in the listing, on a tenth of traffic. Stopped early — no difference either way."
      owner: "Optimisation lead"
      updated: "21 Oct"
    - type: "Owner"
      fact: "Cookie banner and consent text."
      owner: "Legal contact"
      updated: "updated only when the text changes"
    - type: "Change"
      fact: "Booking a test drive no longer asks for a postcode twice."
      owner: "Content editor"
      updated: "17 Oct"
    - type: "Owner"
      fact: "Analytics tagging and what the numbers on this list mean."
      owner: "Analytics lead"
      updated: "reviewed monthly"
    - type: "Change"
      fact: "Dealer opening hours now come from the dealer system instead of being typed in by hand. They stop going out of date over Christmas."
      owner: "Front-end lead"
      updated: "10 Oct"
  postingRule: "A row earns its place if it would stop someone asking a colleague. Every row names an owner and how often it is kept current. If a row matters again, it gets re-posted and moves back to the top — that's the only way anything stays findable."
  footerNote: "Written by the web team. Anyone in the team can add a row; nobody approves it first."
  footerLinks:
    - { label: "Add a row", href: "#" }
    - { label: "Ask the web team", href: "#" }
```

## What the room decided

One screen, one list, newest first. No dashboard, no sections, no tabs to click between. Only three kinds of row belong here: something changed on the site, something is being tested, or an ownership fact like who owns the dealer locator. "Who owns the dealer locator" is answered by a row in the same list, not a separate page or a pinned banner — you scan the same list you'd check for anything else.

There is no search box. Nothing to filter, sort, or configure — if it's not worth seeing on the one list, it's not worth adding. If a row matters, it gets re-posted and moves back to the top.

Staleness is answered by the row itself. Every row names how often the thing behind it changes. A row that says "updated weekly" and hasn't moved in two weeks looks wrong. A row that says "updated only when ownership changes" and hasn't moved in two months looks correct. The cadence is what tells you whether to trust an old row — that's the whole mechanism, and it's why nothing needs to be pinned.

## Where the two ideas differed

Team Ada wanted a visible type word on every row — `Change`, `Test`, `Owner` — in plain navy text, no pill, no icon. Team Cleo wanted the row to be just the fact, the owner and the date, with the kind of row carried by how it reads. The page takes Ada's type word: with ownership facts sitting in the same stream as news, the word is what lets you scan for the one you came for without a filter. Cleo's argument against it stands on the record — that a label is the first step towards categories, and categories are the first step towards tabs. If the words start looking like badges, they come out.

Both teams wanted the owner named as a person, never "the team". The page does not do that, and not by choice: naming invented colleagues is the one thing on a prototype a reader cannot check, so the rows name roles instead. Real names go in when the real rows do.

## What we filled in

The title, the ingress, the three row types, the posting rule and the cadence wording are the room's. The twelve rows are not — they are examples, written in the tone the room set, to show what a full list looks like. Nothing in them has been measured.

## Left open

Pagination. How far back the list goes was not decided, and the page simply runs to the bottom. Also out of scope this sprint: filtering by type, comments, reactions, read receipts, notifications, and any pinning of the dealer locator row.

<!-- merged: day-check-105158 sprint 1 — Team Ada, Team Cleo -->
