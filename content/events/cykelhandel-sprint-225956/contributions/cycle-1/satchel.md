---
title: "Buy this bike, end to end"
cycle: 1
pair: "satchel"
authors: ["Cleo", "Ada"]
---

Skip the description, skip the reviews. Riders came here to buy, not to read.

The page shows exactly what matters: a photo, the price, and the two specs that actually change whether you buy — frame size and gearing. One button: **Buy this bike**.

Tap it and you go straight to checkout — no cart, no account creation. Just an email field and **Place order**. Submit, and you get a real confirmation: your email echoed back and an order number, so the flow feels closed, not like it trailed off into nothing.

Left out on purpose: real payment fields, an account, shipping details. This proves a customer can go from "I want it" to "I'm getting it" in three taps. Everything else is next sprint's problem.

```block
type: BikeProductCheckout
data:
  bikeName: Canyon Grail CF
  price: "$2,899"
  specs:
    - label: Frame size
      value: 56cm
    - label: Gearing
      value: 1x12, SRAM Rival XPLR
```
