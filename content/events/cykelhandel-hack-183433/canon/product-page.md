---
title: "The product page"
cycle: 1
updated_cycle: 2
sources:
  - pair: "hazel"
    authors: ["Ada", "Dag"]
    title: "Buy button → quantity + confirm, not a fake checkout"
  - pair: "wombat"
    authors: ["Ada", "Cleo"]
    title: "Selectors live on the page, not in a modal — button unlocks when the variant is real"
---

# The product page

One bike, one page, and a price that moves while you look at it. No catalog, no
category tree, no related-products rail. A customer lands here, picks the three
things that change the bike, and sees what it costs.

## The selectors live on the page

Three plain dropdowns, stacked below the product image: size, color, and one key
spec — the thing that actually changes what you're buying, like wheel size or
groupset, not a cosmetic option. They sit directly above the buy button. They are
never in a modal.

A modal makes the configurator feel like a separate step you complete and
dismiss. Dropdowns on the page stay on the page: they're in the URL, they're in
the screenshot, they're in the support ticket. A mechanic checking a customer's
order shouldn't have to guess which combination was picked from a screenshot of a
modal that's already closed.

## The price is a range until the selection is specific

Before all three dropdowns have a value, the page shows a range — `$899–$1,049` —
not a single number. Once the last one is picked, the range collapses to the
exact price for that exact combination. No "starting at." It shows what the till
would actually ring up.

This sits directly above the buy button, so it reads before anyone taps: this
bike isn't one fixed thing, it's a spec you're assembling. The range is the tell.
It says up front that your choices change the price, and when the customer works
through size, color and spec and watches it collapse to one number, that confirms
what the range implied. A single fixed price from the start would signal nothing
— there'd be no cue on the page that customization is even possible.

## The button is locked until the variant is real

Add to cart is disabled — greyed out, not hidden — until all three dropdowns have
a value. There is no add to cart for a bike that isn't fully specified, because a
shop can't fulfil an order for "a bike, size unknown." The moment the third
dropdown is picked, the button unlocks and the price on it resolves to the exact
number.

Same mechanism as the range, one more gate: the customer should never leave the
page to configure the bike, and the page should never let them buy something that
isn't a real combination of parts.

## Buy stops at quantity and confirm

Tapping **Buy** gives one screen: a quantity picker and a **Confirm order**
button. Nothing else. No shipping form, no payment fields, no fake credit card
screen.

That's where the prototype ends.

We're not building a checkout. A fake payment flow is theater — it doesn't test
anything. The question this page has to answer isn't "can we simulate Stripe,"
it's whether a customer understands, from the product page alone, that they're
configuring a real product — size, color, key spec, and a price that moves with
those choices — rather than buying one fixed SKU off a shelf. Quantity + confirm
is the honest end of that question. Everything past it is checkout plumbing that
every e-commerce site already knows how to build, and building it here would only
tell us we can copy a form.

## What this commits us to

- Three configurable attributes on the page: size, color, and one key spec.
- Those three as plain dropdowns below the product image, on the page — never in
  a modal, never a separate step.
- A price display with two states — range, and resolved exact price — with the
  transition visible to the customer, not hidden behind a page load.
- A buy button disabled until all three attributes have a value, showing the
  exact price once they do.
- A buy flow exactly two steps deep: product page → quantity + confirm.

<!-- merged: cykelhandel-hack-183433 sprint 2 — Wombat -->
