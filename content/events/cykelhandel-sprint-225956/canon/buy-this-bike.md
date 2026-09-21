---
title: Buy this bike, end to end
slug: buy-this-bike
hackathon: cykelhandel-sprint-225956
cycle: 1
status: canon
groups:
  - Satchel
authors:
  - Cleo
  - Ada
blocks:
  - BikeProductCheckout
---

# Buy this bike, end to end

```block
type: BikeProductCheckout
data:
  shopName: Cykelhandel
  bike:
    name: Ranger Gravel 3
    price: $1,450
    specs:
      - { label: Frame size, value: 54 cm / M }
      - { label: Gearing, value: 11-speed 1x }
  shippingNote: Ships assembled. Two days to most addresses.
  footerNote: Questions? Ask us in the shop — we ride these too.
```

## What's on the page

A photo, a price, and the two specs that actually decide it: frame size and
gearing. No description, no reviews, no "our story". You came here to buy a
bike, not to read about one.

One button does the work — **Buy this bike** — and from there the page walks
itself: cart, shipping, payment, done. It never leaves the page and it never
asks you to make an account. At the end you get an order number and your email
read back to you, so the flow closes instead of trailing off into nothing.

## What we argued about

Satchel's write-up wanted this even shorter: tap Buy, type an email, **Place
order**. Three taps, no shipping form, no card fields. The prototype they
actually built keeps the full cart → shipping → payment run, and that's the one
on the page, because a bike is a $1,450 object that has to arrive at an address
and the sprint's job was to prove the whole path holds, not the fun half of it.
The email field survived from the short version: it's in the shipping step and
it's what the confirmation echoes back.

Left out on purpose: real payment processing, accounts, delivery scheduling,
stock checks. The card fields take anything you type. That's next sprint.

## Why it clears the bar

It's the sale a shop loses today. Someone stands on the sidewalk, decides they
want the bike, and hits a checkout that wants a password first — so they don't
buy it. This one goes from "I want it" to "I'm getting it" without a login, and
every button is thumb-sized because that decision gets made on a phone.

## Block: BikeProductCheckout

A self-contained product page. Header, product, checkout state machine
(`product → cart → shipping → payment → confirmed`), footer — all local state,
no backend, no stored data. Everything visible comes from props:

- `shopName` — name in the header and footer.
- `bike` — `{ name, price, imageUrl?, specs: [{ label, value }] }`. Two specs is
  the intent; the grid takes more if a later cycle insists.
- `shippingNote` — one line shown in the cart.
- `footerNote` — one line in the footer.

Without `imageUrl` it draws a line-art bike rather than a grey box, so the
layout is honest about its proportions even before there's a photo.

<!-- merged: cykelhandel-sprint-225956 sprint 1 — Satchel -->
