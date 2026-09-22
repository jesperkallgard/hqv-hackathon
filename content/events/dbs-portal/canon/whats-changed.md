---
title: "What's changed"
description: "The first screen of the DBS portal: one list of posts, newest updated first."
---

```block
type: WhatsChangedPage
data:
  siteName: Digital Business Solutions
  nav:
    - What's changed
    - Teams
    - Topics
  heading: What's changed
  teamLabel: Team
  topicLabel: Topic
  allLabel: All
  columns:
    - Title
    - Owner
    - Last updated
    - Status
  posts: []
  emptyLine: "No posts yet. A post appears here once it has an owner and a stated update frequency."
  footerLines:
    - "A post earns its place if it saves someone in DBS from asking a colleague, or lets someone outside follow what we are doing without a meeting."
    - "Every post names an owner and how often it is updated. If nobody will keep it current, it does not go up."
```

## The brief this was built from

**Inherited from Pinecone.** The first screen is one list of posts, sorted by last updated, newest first. Not a homepage, not a dashboard, not a landing page with sections to choose between. Every row carries the answer without a click — title, one-line result, owner, last updated, status — so a colleague can stop reading before they open it.

It serves two named audiences on the same list, not two views. People inside DBS, who would otherwise ask a colleague something already answered: they scan owner, status and the one-line result. People outside DBS, who need to follow what is happening without sitting in a meeting: they read the one-line result and the date, and do not need the internal detail behind it. Nothing on the first screen is written for only one of them, and there is no toggle between them.

The only way to narrow the list is by team or topic. No search box, no featured post, no images, no tags invented for the occasion — the direction is sparse, not a product filter panel.

## What the list refuses to do

A post with no owner and no stated update frequency does not appear on the first screen at all. The list is where "does this still hold" gets answered, so an unowned post is worse than no post. The page enforces this rather than trusting it: a post without both is filtered out before the list is drawn.

There is no summary paragraph above the list explaining what the site is for, and no marketing copy. The heading is "What's changed" and then the list starts.

## Left open

The group handed this in at the clock, with no real post titles, owners or dates. Those are not invented here. The list ships empty, with its columns and its rule stated, and says less rather than saying something nobody decided. The two audiences are taken from the facilitator's direction — "someone in DBS", "someone outside DBS" — rather than named more specifically; that should be revisited next sprint.

<!-- merged: dbs-portal sprint 1 — Pinecone -->
