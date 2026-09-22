---
title: "One post, opened"
ingress: "Open one post in the list to show the full shape. The list still gives the fast answer, but the post now makes staleness, ownership, and update rhythm obvious at a glance."
points:
  - "The list shows headline, owner, and last updated date only."
  - "Opening a post reveals the audience, three-line summary, status or date, owner, update cadence, and one onward link."
  - "Every post makes it obvious who owns it and how fresh it is."
  - "Staleness is the first thing the opened post tells you, not a detail buried in the text."
  - "The page stays a real internal site: one narrow column, flat panels, and round tags for state."
cycle: 3
pair: "dag"
authors: ["Dag", "Cleo", "Rut", "Sam"]
---

Open one post in the list to show the full shape. The list still gives the fast answer, but the post now makes staleness, ownership, and update rhythm obvious at a glance.

- The list shows headline, owner, and last updated date only.
- Opening a post reveals the audience, three-line summary, status or date, owner, update cadence, and one onward link.
- Every post makes it obvious who owns it and how fresh it is.
- Staleness is the first thing the opened post tells you, not a detail buried in the text.
- The page stays a real internal site: one narrow column, flat panels, and round tags for state.

Build on the existing front door in `index`.

Keep the site name as **What's Changed** and keep the current look: white background, lots of air, navy headings, left-aligned text, flat panels, no shadows, orange fully round primary pills, navy outlined secondary pills, and small round tags for state.

This sprint's change is the opened post view.

### List state
- Each post in the list shows only:
  - headline
  - owner by name
  - last updated date
- The list must still make staleness obvious.
- The list does not show the three-line summary, audience, cadence, or onward link.

### Opened post
When a user opens a post, show all seven pieces of content:
1. headline
2. audience
3. three-line summary
4. status or date
5. owner by name
6. how often it is updated
7. one link onward

### Content rules
- Every post must show an owner by name and how often it is updated.
- Every post should make it easy to see when it was last touched and by whom.
- Use plain, concrete copy. Short sentences.
- Say what changed and what it meant, not what was done.
- No marketing language.

### Interaction
- The list is the fast scan.
- Opening a post reveals the fuller detail.
- Keep the opened view simple and readable, with the same single-column feel.

### Out of scope
- No extra filters.
- No search.
- No dashboards.
- No new sections beyond the opened post and the existing list/front door.

### Notes
- The room is asking for one post that opens, not a new browsing pattern.
- If there is any tension between the list and the opened view, prefer keeping the list terse and putting the extra detail in the opened post.
