---
title: "\"Write a post\" is three fields, not a blank page"
ingress: "The button on \"What changed\" has led nowhere since sprint 1. It leads to a short form now — three fields, then you're on the page."
points:
  - "The form has exactly three fields: the question, your name as owner, and the answer. No separate title field — the question is the title."
  - "Cadence (\"weekly\", \"when it changes\", \"monthly\") is picked from the list already used in the owners table, not typed, so the table never drifts from the posts."
  - "No rich text, no images, no formatting toolbar. Plain paragraphs only — a post that needs formatting isn't answering one question."
  - "Saving puts the post at the top of the page immediately. There is no draft state and no approval step — this is not a CMS, it's someone writing down an answer."
  - "A bad or stale post is fixed by editing it or taking it down, not by blocking it at submission. Nobody reviews a post before it goes up."
cycle: 2
pair: "ada"
authors: ["Bo", "Ada"]
---

The button on "What changed" has led nowhere since sprint 1. It leads to a short form now — three fields, then you're on the page.

- The form has exactly three fields: the question, your name as owner, and the answer. No separate title field — the question is the title.
- Cadence ("weekly", "when it changes", "monthly") is picked from the list already used in the owners table, not typed, so the table never drifts from the posts.
- No rich text, no images, no formatting toolbar. Plain paragraphs only — a post that needs formatting isn't answering one question.
- Saving puts the post at the top of the page immediately. There is no draft state and no approval step — this is not a CMS, it's someone writing down an answer.
- A bad or stale post is fixed by editing it or taking it down, not by blocking it at submission. Nobody reviews a post before it goes up.

## What this builds on
The canon's page ("What changed") has a "Write a post" button with nowhere to go — explicitly left open at the end of sprint 1. This is that flow.

## Assumption flagged
The group didn't specify which part of the page to take this sprint, so this was picked as the clearest open gap the canon already named. Team Ada can redirect this at any point — nothing below is locked.

## Screen
One screen, reached from the "Write a post" button on the main page. Not a modal — a plain page, same white/navy/flat-panel look as the rest of the site.

- Field 1: "What's the question?" — single line. This becomes the post's heading, exactly as typed.
- Field 2: "Your name" — single line. Becomes "Owner: <name>" under the heading, same as existing posts.
- Field 3: "Cadence" — a dropdown with the same three values already in the owners table: "When it changes", "Weekly", "Monthly". Becomes "Updated: <value>".
- Field 4: "What's the answer?" — plain textarea, no formatting controls. This becomes the body, one or two paragraphs, same as existing posts.
- One button: "Post it." No "save as draft", no "preview".

## Behaviour
- On "Post it", the new post appears at the top of the posts list on the main page — newest first, same rule as the canon's page — with today's date.
- No confirmation screen, no email, no notification. You posted it; it's there.
- Nothing is validated beyond "not empty" on the four fields. No character limits stated because none were agreed.

## Look and feel
Same as the rest of the site: white background, a lot of air, navy for the field labels and the heading preview, one column, flat panel around the form, no shadows, no rounded corners. It should look like a plain form, not a product signup — no icons, no placeholder illustrations.

## Out of scope
No editing screen in this hand-in — editing an existing post and taking one down are real needs but not built here. No draft state. No approval/review step. No rich text or image upload. No character counts or validation copy beyond required-field.

## What's still open
Whether editing and takedown are a second form or inline on the post itself hasn't been decided by this group — that's the natural next question for whoever picks this up.
