---
title: "One playbook, opened"
ingress: "The page behind a Playbook entry — what you land on instead of messaging Marek. We picked the one already named on the index, since nothing further was said: this is our reading of a short conversation, not a decided pick."
points:
  - "It's the page behind one Playbook entry, not a new section — the owner and cadence sit at the top, same as the index promises."
  - "The body is a numbered list of steps, not paragraphs. A playbook is followed, not read."
  - "Each step says what to do, not why — the reasoning behind it lives in Decisions, this page stays procedural."
  - "The real playbook is \"Running an A/B test on the site\", owner Marek Salonen, updated quarterly — the one already on the index."
  - "No sign-off, no approval flow, no linked ticket. It's a record you follow, not a workflow you run through."
cycle: 2
pair: "dag"
authors: ["Dag", "Cleo"]
---

The page behind a Playbook entry — what you land on instead of messaging Marek. We picked the one already named on the index, since nothing further was said: this is our reading of a short conversation, not a decided pick.

- It's the page behind one Playbook entry, not a new section — the owner and cadence sit at the top, same as the index promises.
- The body is a numbered list of steps, not paragraphs. A playbook is followed, not read.
- Each step says what to do, not why — the reasoning behind it lives in Decisions, this page stays procedural.
- The real playbook is "Running an A/B test on the site", owner Marek Salonen, updated quarterly — the one already on the index.
- No sign-off, no approval flow, no linked ticket. It's a record you follow, not a workflow you run through.

## What it is
The page you land on from the index's "Running an A/B test on the site" entry. Same header pattern as the index: title, owner (Marek Salonen, Experimentation), cadence ("updated quarterly").

Body is a plain numbered list, the actual steps:

1. Confirm the test question with Experimentation before touching any page.
2. Set the test to run two full weeks, per the standing decision — no early calls.
3. Log it in Rollout Status as "Testing" the day it goes live.
4. When it ends, write it up in Test Results — kept or reverted — and note what it meant, not just what was done.
5. Update Rollout Status the same day the test ends.

Step 2 and step 3/5 deliberately match the existing canon decision ("Tests run for two full weeks or not at all") and the Rollout Status table, so the pages agree with each other rather than repeating different rules.

## Look
Same flat panel, one column, navy heading, no shadow, plenty of air — this is a sub-page of the index, not a different product. The numbered list is plain text: no checkboxes, no progress state, no icons.

## Out of scope
No edit history, no comments, no versioning. No link to a live ticket or tool — if that's wanted later, it's a separate decision, not assumed here.

## Open
Only one playbook is written out. The other three entries on the index (dealer locator changes, CMS pages, tracking/consent) need the same treatment but weren't discussed this sprint.
