---
title: "One bike, one size picker, one buy button"
cycle: 1
pair: "cricket"
authors: ["Dag", "Ada"]
---

We settled on the smallest possible page that proves someone can pick a size and we can capture it:

- **One bike:** Trek Marlin 7, $899. Hardtail mountain bike, aluminum frame, hydraulic disc brakes, 21-speed. Heavier than a carbon bike but reliable — a good first mountain bike. Real photo, not stock/illustration.
- **Stock status always visible** next to the price, not hidden behind a click.
- **Size select:** S / M / L / XL, defaults to M.
- **XL is out of stock** on purpose, and can't be bought — that's the one deliberate trade-off we built in, so the page proves stock status actually blocks a purchase, not just displays it.
- **Buy button:** one click after picking a size (so two clicks total from landing on the page). On click it logs `{ bike, size, price }` to the console, and also shows a plain on-page confirmation line ("Added: Trek Marlin 7, size M") so anyone watching can see it worked without opening devtools.
- No cart, no checkout, no routing, no backend — just the page, the pick, and proof it was captured.

**Still open:** we sent the component off to be built and the sprint clock ran out before it came back, so this hand-in is the spec we agreed on, not yet the working page. The next step is dropping the built component into this page and confirming the console log fires correctly for every size.
