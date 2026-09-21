---
title: "The first screen"
cycle: 1
status: canon
decision: "The first screen opens on a real example. No setup before it."
sources:
  - pair: mitten
    authors: ["Dag", "Ada"]
    title: "Skip setup, start with a real example"
---

# The first screen

```block
type: FirstRunScreen
data:
  product: Ledger
  nav:
    - Examples
    - Docs
    - Sign in
  example:
    name: Bike shop — March
    source: Real numbers from a shop in Bristol. Change anything.
    currency: "£"
    itemHeading: Line
    countHeading: Sold
    rateHeading: Each
    amountHeading: Amount
    totalLabel: March revenue
    rows:
      - { label: Frames, count: 14, rate: 420 }
      - { label: Wheel builds, count: 31, rate: 95 }
      - { label: Services, count: 68, rate: 45 }
      - { label: Tubes and tyres, count: 204, rate: 12 }
  blankLabel: Start from blank
  blankNote: Nothing here. Nothing to change. This is what we are not opening on.
  restoreLabel: Load the example again
  footerNote: Ledger. An example is loaded for everyone who lands here.
  footerLinks:
    - Examples
    - Docs
    - Contact
```

## What was decided

Group Mitten's contribution is the whole of this decision: the first screen does
not ask for setup. It opens already loaded with a real example — something
working, not empty. Not a form, not a wizard, not a blank state waiting for
input. No onboarding step comes before it.

The example on this page is a worked one with real numbers in it, because an
example that is obviously fake asks the same question a blank state asks: what
would mine look like? The room takes "real" literally. Ship the screen with data
from an actual customer, named.

Blank is still reachable. It is one action on the page, placed after you land,
never a question asked before. That is the line: you can choose emptiness, you
cannot be started in it.

What this rules out for Monday: the welcome modal, the three-step wizard, the
"tell us about your team" screen, the empty table with an arrow pointing at a
plus button. If any of those is on the roadmap, it comes off.

## What the page is made of

One component, `FirstRunScreen`, holding its own header and footer, so it can be
opened on its own and judged as a product page rather than a fragment. Nothing
on it moves unless someone types.

<!-- merged: e2e-220138 sprint 1 — Mitten -->
