---
title: "One list, two readers, nothing to log into"
ingress: "A single feed of what changed, for the person in DBS who'd otherwise ping a colleague and the person outside DBS who'd otherwise ask for a meeting — no homepage, no dashboard, no sections to guess between."
points:
  - "The two real audiences are named, not \"everyone\": someone inside DBS who needs an answer without pinging a colleague, and someone outside DBS following the work without sitting in a meeting."
  - "The first screen is one list, newest first — not a dashboard, not a homepage split into sections for different teams."
  - "Every entry on that list shows its owner and how often it's kept current, before you open it — if either is missing, the entry doesn't belong on the list."
  - "It opens straight into the list. No login, no \"choose your team\" step, no personalisation — the whole point is that a stranger can land on it and follow along."
  - "Each entry reads as what changed and what it meant, in one line, before you click in — \"sticky navigation moved checkout starts by 11%\", not a title that makes you open it to find out."
cycle: 1
pair: "sparrow"
authors: ["Testolof", "Testmar", "Testlev", "Testef"]
---

A single feed of what changed, for the person in DBS who'd otherwise ping a colleague and the person outside DBS who'd otherwise ask for a meeting — no homepage, no dashboard, no sections to guess between.

- The two real audiences are named, not "everyone": someone inside DBS who needs an answer without pinging a colleague, and someone outside DBS following the work without sitting in a meeting.
- The first screen is one list, newest first — not a dashboard, not a homepage split into sections for different teams.
- Every entry on that list shows its owner and how often it's kept current, before you open it — if either is missing, the entry doesn't belong on the list.
- It opens straight into the list. No login, no "choose your team" step, no personalisation — the whole point is that a stranger can land on it and follow along.
- Each entry reads as what changed and what it meant, in one line, before you click in — "sticky navigation moved checkout starts by 11%", not a title that makes you open it to find out.

Group Sparrow's pen (Testef) handed in after the clock had already stopped, so this is written up from the sprint's goal and the brief rather than from a live discussion. **Assumption made, stated plainly: the two audiences are (a) people inside DBS who'd otherwise ask a colleague, and (b) people outside DBS who'd otherwise need a meeting to follow along — taken directly from the merge bar in the brief, since no other audience was named during the sprint.**

What the first screen is:
- One page, one column, no navigation chrome beyond the DBS wordmark and a plain heading: "What's changed."
- Below it, a single table — navy header row, alternating light grey rows, exactly like the brief's deck styling. No cards, no hero, no tiles.
- Columns: **Date, What changed and what it meant (one line), Type** (playbook / test result / rollout status / decision), **Owner**, **Updated**.
- Sorted newest first. No tabs, no filter-by-team on this first screen — that's a second-screen problem, out of scope here.
- Example rows, so the tone is concrete rather than described:
  - "Sticky nav moved checkout starts by 11% — Test result — Owner: Testur — Updated weekly"
  - "Return flow now skips login for signed-in app users — Decision, with reason — Owner: Testolof — Updated on change"
  - "Nordics rollout at 60% of stores, on schedule — Rollout status — Owner: Testlev — Updated fortnightly"

What it refuses to do:
- No entry without a named owner and a stated update cadence — this was the room's own bar, so it's written as a hard rule, not a guideline.
- No dashboard chrome, no charts, no gradient, no hero image — matches the "written, not designed" direction.
- No personalisation or login on the first screen. Anyone with the link sees the same list.

Open / not decided:
- Whether older entries page, scroll, or get archived after some period was not settled — needs an answer before build, but doesn't change what the first screen shows.
- Exact list of "Type" categories beyond the three examples above (playbook, test result, rollout status, decision) is a starting set, not final.
