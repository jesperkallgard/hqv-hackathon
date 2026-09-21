---
title: "Skip the cart, one form, done"
cycle: 2
pair: "sparrow"
authors: ["Dag", "Cleo"]
---

## What we decided

No cart review step. The current flow (product → cart → shipping → payment →
confirmed) has a step too many for what most people are doing on a phone:
they already know they want the bike, they just need to give an address and a
way to pay.

So: click **Buy this bike**, land straight on one form. On it:

- Email
- Shipping address (name, street, city, postal code, country)
- Payment method (Card / Apple Pay / Google Pay — a picker, not real card
  validation, this is a prototype)

Everything that can be prefilled from the session is prefilled and editable —
if we already know the email or the address, don't make someone type it
again. One big **Place order** button.

On submit: hit a fake API (a stub, not a real endpoint) that comes back with
an order confirmation — order number and the email. Button shows "Placing
order..." while it waits. Then the form is replaced by a confirmation screen:
order number, the email it's going to, one line in our voice ("we'll text you
when it ships," not "your order has been successfully processed").

## Why it clears the bar

Every extra screen between "I want this" and "I bought this" is a chance for
someone to close the tab. Cart review is a screen nobody on a bike-shop
sidewalk needs — they're not adjusting quantity, there's one bike. Cutting it
is a sale the shop keeps that a slower flow loses.

## What's still open

We asked the builder to write this as a component (`QuickCheckoutForm`:
prefillable form → fake API call → confirmation, matching the fast/big-tappable
look) but the sprint clock ran out before it came back. The decision above —
skip cart, one form, fake API, confirmation with order number — is settled;
the working component itself is not built yet.
