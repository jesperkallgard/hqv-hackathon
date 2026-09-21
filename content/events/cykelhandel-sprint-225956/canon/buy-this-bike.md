---
title: Buy this bike, end to end
slug: buy-this-bike
hackathon: cykelhandel-sprint-225956
cycle: 2
status: canon
groups: [Satchel, Yarrow]
authors: [Cleo, Ada, Bo]
blocks: [BikeProductCheckout]
---

```block
type: BikeProductCheckout
data:
  shopName: Cykelhandel
  bike:
    name: Stålhest 8-speed
    price: 6.450 kr
    imageUrl: ""
    specs:
      - { label: Frame, value: Steel, 54 cm }
      - { label: Gears, value: 8-speed hub }
  shippingNote: Ships assembled. Two to four days inside Denmark.
  footerNote: Questions about fit or delivery — call the shop.
```

## What this page is

One bike, one page, one purchase. It is the whole transaction, not a demo of
part of it: you can start at the photo and finish holding an order number.

Cycle 1 (Satchel) set the product half and it stands. A photo, the price, and
two specs — frame and gears, the things someone asks before they ask anything
else. No description, no reviews, no related products. Someone landing here has
already decided they want this kind of bike; the page's job is to not get in
the way.

## One form, not three steps

Cycle 2 (Yarrow) took the checkout apart. Satchel's version walked you through
cart, then shipping, then payment, then confirmed — four screens and a step
indicator to tell you how much was left. Yarrow's call: that is a wizard built
for someone who might change their mind, and the person filling it in already
decided at the photo. So the three steps collapse into one form with three
fields — email, shipping address, card number — and one button. No login, no
saved addresses, nothing else on the page.

The point was to remove steps, not to add fields. Name, city and zip went into
the address field because they were always going to be typed in one go anyway,
and expiry and CVC come off the same card as the number. A shop owner loses
sales in the gaps between screens, not on the last field of the last one. That
is the version of the bar this clears: fewer places to abandon a purchase that
was already decided.

## Still open

Yarrow agreed on the three fields and the one-page shape and ran out of time on
what the confirmation actually shows back — just the email, or the email plus
the address and a summary of what was bought. The block currently echoes all
three, because a confirmation screen that only repeats your email address does
not tell you the right bike is coming to the right door. That is a prototype
call to keep the flow working end to end, not a decision the room made. Settling
it is the next thing.

## The block

`BikeProductCheckout` takes `shopName`, `bike` (`name`, `price`, optional
`imageUrl`, optional `specs` of `label`/`value` pairs), `shippingNote` and
`footerNote`. With no `imageUrl` it draws a bike outline rather than a broken
frame. It carries its own header and footer so the page can be opened on its
own and shown to someone outside the room.

<!-- merged: cykelhandel-sprint-225956 sprint 2 — Yarrow -->
