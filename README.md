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
content/events/<event>/contributions/cycle-<n>/<group>.md    one idea per group per sprint
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

## The pages, in the order a stranger needs them

| Route                             | What                                                     |
| --------------------------------- | -------------------------------------------------------- |
| `/`                               | Every day that has run here                              |
| `/<event>`                        | The result: the goal, the prototype, why it looks like that, and an index of the ideas |
| `/<event>/live`                   | The prototype with nothing around it — no masthead, no footer |
| `/<event>/contributions/<cycle>`  | One sprint's ideas, five points each. The QR target during a vote |
| `/<event>/contributions/<cycle>/<group>` | One group's hand-in, requirements included. The URL the group is given |

`/<event>/contributions` and `/<event>/canon/<slug>` are redirects into the
result page. Both used to be pages showing content that the result page already
shows in full.

The masthead and the footer live in one component,
[EventShell](components/EventShell.tsx), which the reading pages ask for. `live`
is the page that must not have them, and a layout cannot be opted out of.

## What a group hands in

An idea, not a prototype: a title, an ingress, **exactly five points**, and the
requirements under them. The engine writes the first three into the frontmatter
as well as the body — the site renders from the frontmatter, and mines the body
only for the requirements, so nothing appears twice.

```md
---
title: "Stock lives on the product, per size"
ingress: "A bike is only in stock if the one that fits you is in the building."
points:
  - "Stock is counted per size and shown on the product."
  - "Buy refuses a size that is out."
  - "Size defaults to the most common one."
  - "Four buttons, not a dropdown."
  - "No cart yet — the click logs the pick."
cycle: 1
pair: "pickle"
authors: [Dag, Ada]
---
```

The room votes each idea up or down, and everything that advances is built into
the single prototype in `canon/`. See [lib/idea.ts](lib/idea.ts).

## Documents and blocks

Markdown with YAML frontmatter. Prose becomes `Post` blocks. A fenced block with
the `block` info string becomes the component its `type` names:

````md
---
title: Our roadmap
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

## The look

An event may carry a `theme.json`; most do not, and nothing writes one any more.
The default in [lib/theme.ts](lib/theme.ts) is therefore the common case, and it
is a set of choices rather than an absence of them. Everything visual is scoped
to `.result`, so two hackathons on this site never collide and neither inherits
the index at `/`.
