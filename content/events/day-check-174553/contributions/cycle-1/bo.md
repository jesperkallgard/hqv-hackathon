---
title: "What's Changed"
ingress: "One internal site that replaces the \"who owns this, did anyone update it\" Slack message: a feed of what changed, who owns it, and how often it's touched."
points:
  - "The whole site is one feed, newest first — not a dashboard, no charts, nothing to configure."
  - "Every row names an owner and a date, because a post without an owner doesn't earn its place."
  - "The header has exactly three ways in: the feed, who owns what, how we work — nothing else competes for attention."
  - "State is shown as a small round tag on the row, never a coloured word in the text."
  - "A post exists to save someone from asking a colleague — if it doesn't answer a real question, it doesn't go up."
cycle: 1
pair: "bo"
authors: ["Ada", "Bo"]
---

One internal site that replaces the "who owns this, did anyone update it" Slack message: a feed of what changed, who owns it, and how often it's touched.

- The whole site is one feed, newest first — not a dashboard, no charts, nothing to configure.
- Every row names an owner and a date, because a post without an owner doesn't earn its place.
- The header has exactly three ways in: the feed, who owns what, how we work — nothing else competes for attention.
- State is shown as a small round tag on the row, never a coloured word in the text.
- A post exists to save someone from asking a colleague — if it doesn't answer a real question, it doesn't go up.

## Structure
- Header: site name "What's Changed" + three nav items: **Feed**, **Who owns what**, **How we work**.
- Main content: one generous column, the feed. No sidebar, no dashboard, no charts.
- Footer: says who keeps the site (owner of the site itself).

## The feed
- Newest first. Each row shows: a headline in navy, the owner's name, the date, and a small round tag for state (e.g. "tested", "live", "planned").
- Example real row: headline "Dealer locator moved to the new maps API", owner "Priya (Platform)", date "12 March", tag "live".
- Rows say what changed and what it meant — not what was done, not marketing language. Short sentences.

## Pages behind the nav
- **Who owns what**: a plain list mapping areas of the product to the person who owns them (e.g. "Dealer locator — Priya, Platform").
- **How we work**: a plain explainer page, not built out in this sprint — placeholder for now.

## Look
- White background, a lot of air. Navy for headings. Text left-aligned.
- Flat panels, no shadows anywhere.
- Buttons: fully round pills. One orange-with-white-text primary action (not yet decided what it is — candidate: "Post an update"). Everything else is an outlined navy pill.
- States are small round tags, never coloured words in running text.

## Out of scope this sprint
- What the primary button actually does when clicked.
- The detail of the "How we work" page content.
- Search or filtering of the feed.
