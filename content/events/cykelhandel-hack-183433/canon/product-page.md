---
title: "The product page"
cycle: 1
updated_cycle: 1
sources:
  - pair: "hazel"
    authors: ["Ada", "Dag"]
    title: "Buy button → quantity + confirm, not a fake checkout"
---

# The product page

One bike, one page, and a price that moves while you look at it. No catalog, no
category tree, no related-products rail. A customer lands here, picks the two
things that change the bike, and sees what it costs.

## The price is a range until the selection is specific

Before the customer has picked a size and a color, the page shows a range —
`$899–$1,049` — not a single number. Once both are picked, the range collapses
to one price.

This sits directly above the buy button, so it reads before anyone taps: this
bike isn't one fixed thing, it's a spec you're assembling. The range is the tell.
It says up front that your choices change the price, and when the customer picks
a size and a color and watches it collapse to one number, that confirms what the
range implied. A single fixed price from the start would signal nothing —
there'd be no cue on the page that customization is even possible.

## Buy stops at quantity and confirm

Tapping **Buy** gives one screen: a quantity picker and a **Confirm order**
button. Nothing else. No shipping form, no payment fields, no fake credit card
screen.

That's where the prototype ends.

We're not building a checkout. A fake payment flow is theater — it doesn't test
anything. The question this page has to answer isn't "can we simulate Stripe,"
it's whether a customer understands, from the product page alone, that they're
configuring a real product — size, color, and a price that moves with those
choices — rather than buying one fixed SKU off a shelf. Quantity + confirm is
the honest end of that question. Everything past it is checkout plumbing that
every e-commerce site already knows how to build, and building it here would
only tell us we can copy a form.

## What this commits us to

- Two configurable attributes on the page: size and color.
- A price display with two states — range, and resolved single price — with the
  transition visible to the customer, not hidden behind a page load.
- A buy flow exactly two steps deep: product page → quantity + confirm.

<!-- merged: cykelhandel-hack-183433 sprint 1 — Hazel -->
