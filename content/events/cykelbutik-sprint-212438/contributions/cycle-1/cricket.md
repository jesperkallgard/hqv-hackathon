---
title: "One bike, one size picker, one buy button"
cycle: 1
pair: "cricket"
authors: ["Dag", "Ada"]
---

We built the smallest possible page that proves someone can pick a size and we can capture it:

- **One bike:** Trek Marlin 7, $899. Hardtail mountain bike, aluminum frame, hydraulic disc brakes, 21-speed. Heavier than a carbon bike but reliable — a good first mountain bike, not a race bike. Real bike photo, not stock/illustration.
- **Stock status always visible** next to the price, not hidden behind a click. It's per size: S and M and L are in stock with counts shown, XL is out.
- **Size select:** S / M / L / XL, defaults to M.
- **XL is deliberately out of stock** and can't be bought — the Buy button disables itself and shows "Out of stock" instead of "Buy". That's the trade-off we built in on purpose, so the page proves stock status actually blocks a purchase, not just displays it.
- **Buy button:** one click after picking a size (two clicks total from landing on the page). On click it logs `{ bike, size, price }` to the console, and also shows a plain on-page confirmation line ("Added: Trek Marlin 7, size M") so anyone watching can see it worked without opening devtools.
- No cart, no checkout, no routing, no backend — just the page, the pick, and proof it was captured.

```block
type: BikeProductPage
data: {}
```

Nothing left open — the component is built and working end to end: pick a size, click Buy, see the console log and the on-page confirmation, and watch XL refuse to sell.
