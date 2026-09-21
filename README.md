# CoHack Portal

The thing a room builds in a day. Markdown in git, rendered statically. **No
database** — the day's machinery lives in the engine; this repo is the record.

The engine that writes here is [CoHack](https://github.com/jesperkallgard/cohack).
It commits contributions to `<event>-cycle-<n>` branches, Vercel builds each
branch, and the preview URL is what a group gets back in the chat.

```
content/events/active.json                                   { "slug": … }
content/events/<event>/event.json                            name, goal, participants, sprint length
content/events/<event>/canon/<name>.md                       the merged result
content/events/<event>/contributions/cycle-<n>/pair-<xx>.md  one file per group
app/blocks/*.tsx                                             one file per block type, globbed
```

One repo holds every hackathon that has run here. Nothing is global: a day that
ran months ago still renders correctly, because its participants and its goal
are written down beside its content.

## The tag that matters

`day-zero` is tagged **in this repo**. `reset_day` points this repo's `main`
back at it and empties the key-value store. It never touches the engine, which
is the whole reason these are two repos: an engine commit made the same morning
must not be undone by a reset.

**Never delete the `day-zero` tag, and never delete history.**

## Run it

```bash
nvm use
npm install
npm run dev
npm test          # content parser tests
npm run build
```

`SITE_PASSWORD` unset means the password gate is off, which is what you want
locally.

## Documents and blocks

Markdown with YAML frontmatter. Prose becomes `Post` blocks. A fenced block with
the `block` info string becomes the component its `type` names:

````md
---
title: Our roadmap
cycle: 1
pair: pair-07
authors: [Madeleine, Jonas B]
---

Ordinary prose.

```block
type: RoadmapTimeline
data:
  items:
    - label: Q1
      text: Discovery
```
````

There is no block registry. Dropping `app/blocks/RoadmapTimeline.tsx` in place is
what makes that type exist — which is what lets the engine generate one mid-day.
An unknown or broken block shows a warning box in preview and is silently
omitted in production, so a bad component can never take the site down.
