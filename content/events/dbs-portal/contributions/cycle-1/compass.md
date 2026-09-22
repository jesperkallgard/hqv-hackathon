---
title: "Ask who you are before you ask anything else"
ingress: "The first screen doesn't welcome you — it puts you straight into your own task, because an applicant, an employer, and a verifier all need something different from \"DBS Portal.\""
points:
  - "The first screen sorts by audience, not by menu: applicant, employer/HR admin, or verifier — three different first screens, not one dashboard with three tabs."
  - "An applicant sees their own check status in ten seconds — submitted, pending, clear, or action needed — nothing else competes for their attention."
  - "An employer/HR admin sees outstanding checks across their team sorted by how overdue they are, because their real need is \"who's blocking onboarding today\", not a directory."
  - "A verifier gets a single certificate-number search box and nothing around it, because their whole need is confirming one number, not browsing a system."
  - "We refuse a generic homepage with a nav bar and a welcome message — every audience should be able to say what they got from the screen within ten seconds, or the screen has failed."
cycle: 1
pair: "compass"
authors: ["Testina", "Testur", "Testrid", "Testlev"]
---

The first screen doesn't welcome you — it puts you straight into your own task, because an applicant, an employer, and a verifier all need something different from "DBS Portal."

- The first screen sorts by audience, not by menu: applicant, employer/HR admin, or verifier — three different first screens, not one dashboard with three tabs.
- An applicant sees their own check status in ten seconds — submitted, pending, clear, or action needed — nothing else competes for their attention.
- An employer/HR admin sees outstanding checks across their team sorted by how overdue they are, because their real need is "who's blocking onboarding today", not a directory.
- A verifier gets a single certificate-number search box and nothing around it, because their whole need is confirming one number, not browsing a system.
- We refuse a generic homepage with a nav bar and a welcome message — every audience should be able to say what they got from the screen within ten seconds, or the screen has failed.

## What we settled
Three named audiences, each with a distinct first-screen need:
- **Applicant** — needs to know: is my check done, and do I need to do anything. Status states: Submitted, In progress, Clear, Action needed.
- **Employer / HR admin** — needs to know: which of my people are blocked from starting work, ranked by urgency (days overdue), not an alphabetical staff list.
- **Verifier** (a second employer, or anyone checking someone else's certificate) — needs to confirm a single certificate number is valid, nothing more.

Each of these first screens should hand the person something they can act on in ten seconds: a status word, a ranked list, or a yes/no on a certificate — not a dashboard they have to interpret.

## What's deliberately out of scope
- No single unified dashboard that tries to serve all three audiences at once.
- No login/registration flow detail — that's a separate problem from what the first screen shows once you're in.
- No design language decided yet — see below.

## What's still open
No UX, tone, or bar direction has been set yet for this hackathon, so we haven't written this against a look or a voice — that's the next thing needed before build.

## Assumption made packing up
The room's conversation on this point wasn't fully captured before the clock ran out, so this hand-in assumes "DBS Portal" serves the three audiences above (applicant, employer/HR admin, verifier) as the most sensible reading of a disclosure/background-check portal. If the group meant different audiences, that should be corrected in the vote discussion.
