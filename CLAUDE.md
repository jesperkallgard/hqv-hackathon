# CoHack Portal

The site a room builds in a day. This repo is **content and renderer only**.

- **No database.** The portal is markdown in git, rendered statically.
- **No agent code.** The engine lives in the `cohack` repo and writes here over
  the GitHub API.
- Next.js App Router, deployed on Vercel. Dependencies: `next`, `react`,
  `marked`, `yaml`, `tailwindcss`. **Do not add packages without asking.**

## What writes here

The engine's tools: `commit_contribution`, `generate_block`, `merge_canon`,
`start_event`, and the curator. Nothing else. A human edits this repo only when
developing the renderer itself.

## Layout

```
content/events/active.json                                   pointer to the running hackathon
content/events/<event>/event.json                            name, goal, participants, sprint length
content/events/<event>/canon/<name>.md                       merged winners; only the curator writes here
content/events/<event>/contributions/cycle-<n>/pair-<xx>.md  one file per group, never shared
app/blocks/*.tsx                                             one file per block type
```

**One file per group, never the same file.** That is what makes the merge at the
end of a cycle conflict-free.

## Blocks

`app/blocks/` is globbed by a template-literal dynamic import in
[lib/blocks.tsx](lib/blocks.tsx). **There is no registry file. Do not add one.**

An unknown block type, a block whose YAML payload does not parse, and a
component that throws all render as a warning box in preview and are **omitted
in production**. The `Suspense` boundary inside the error boundary is what makes
a throwing server component recoverable — without it the whole response 500s.
That behaviour is load-bearing: a component the engine generated badly must
never take the site down in front of the room.

## day-zero

The `day-zero` tag lives here. `reset_day` points this repo's `main` at it.
Never delete the tag, never delete history.
