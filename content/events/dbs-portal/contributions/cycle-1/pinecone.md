---
title: "One list, newest first"
ingress: "The first screen is a single list of posts, most recently updated first — not a homepage, not a dashboard. It has to answer \"what's changed\" for two people: someone inside DBS and someone outside it, without either opening a post."
points:
  - "The first screen is one list, sorted by last updated — no landing page, no sections to choose between first."
  - "Each row carries the answer without a click: title, one-line result, owner, last updated, status — so a colleague can stop reading before they open it."
  - "It serves two named audiences on the same list, not two views: people inside DBS who'd otherwise ask a colleague directly, and people outside DBS who need to follow without a meeting."
  - "The only way to narrow the list is by team or topic — no search, no tags invented for the occasion, because the direction is sparse, not a product filter panel."
  - "A post with no owner and no stated update frequency does not appear on the first screen at all — the list is where 'does this still hold' gets answered, so unowned posts are worse than no post."
cycle: 1
pair: "pinecone"
authors: ["Testa", "Testrid", "Testina", "Testur"]
---

The first screen is a single list of posts, most recently updated first — not a homepage, not a dashboard. It has to answer "what's changed" for two people: someone inside DBS and someone outside it, without either opening a post.

- The first screen is one list, sorted by last updated — no landing page, no sections to choose between first.
- Each row carries the answer without a click: title, one-line result, owner, last updated, status — so a colleague can stop reading before they open it.
- It serves two named audiences on the same list, not two views: people inside DBS who'd otherwise ask a colleague directly, and people outside DBS who need to follow without a meeting.
- The only way to narrow the list is by team or topic — no search, no tags invented for the occasion, because the direction is sparse, not a product filter panel.
- A post with no owner and no stated update frequency does not appear on the first screen at all — the list is where 'does this still hold' gets answered, so unowned posts are worse than no post.

## What the first screen shows
A single flat list/table, navy header row, alternating light grey rows — no cards, no hero, no dashboard chrome. Columns, left to right:
- Title (plain sentence, e.g. "Sticky navigation moved checkout starts by 11%")
- Owner (a name)
- Last updated (date)
- Status (Live / Testing / Rolled back)

Sorted newest-updated first by default. Above the list: a small navy heading, e.g. "What's changed", and two filter controls — by team, by topic. No search box, no featured post, no images.

## Who it's for
Two named audiences, same screen:
1. **People inside DBS** — the need is to not have to ask a colleague something already answered. They scan owner + status + the one-line result.
2. **People outside DBS** — the need is to follow what's happening without sitting in a meeting. They read the one-line result and the date; they don't need the internal detail behind it.

Nothing on the first screen is written for only one of these two — one list, not a toggle between audiences.

## What it refuses to do
- No marketing copy, no summary paragraph above the list explaining what the site is for.
- No post appears without an owner's name and a stated update frequency (e.g. "updated weekly", "updated when the test ends") — both shown on the row or immediately on open.
- No categories beyond team and topic; nothing invented to make the filter panel look fuller.

## Open / assumed
This was handed in at the clock with no further detail from the group discussion, so one assumption was made and should be revisited next sprint: the two audiences are taken directly from the facilitator's stated direction ("someone in DBS", "someone outside DBS") rather than named more specifically by the group. Real example post titles/owners were not supplied and are deliberately left out rather than invented — the columns above are structure, not content, until the group supplies real ones.
