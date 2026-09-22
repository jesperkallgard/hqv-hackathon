---
title: Close Timeline Comparison
summary: Two close timelines, the CFO's today and the one DBS makes possible, and the gap between them in weeks.
status: first sprint
from: Vinegar
---

# Close Timeline Comparison

A mid-market CFO wondering if consolidating their regional entities will wreck month-end close opens the page and sees their own close timeline next to what DBS makes possible — no pitch, just the calendar.

```block
type: CloseTimelineComparison
data:
  gapLabel: Weeks saved
  gapNote: DBS removes that — cuts weeks, not hours
  weekLabel: Week
  tracks:
    - label: Your close, today
      weeks:
        - { filled: true, marker: "multi-entity consolidation currently takes about three weeks of manual work at close" }
        - { filled: true }
        - { filled: true }
        - { filled: false }
    - label: Your close, with DBS
      weeks:
        - { filled: true }
        - { filled: false }
        - { filled: false }
        - { filled: false }
```

## Decisions

Vinegar built this for a mid-market CFO trying to figure out if they can consolidate their regional operations without blowing up their month-end close. That reader does not want to be told what DBS is capable of; they want to see their own calendar next to the possible one and draw the conclusion from the size of the gap. So the comparison is the whole argument: no feature list, no call to action, no explainer of how consolidation works underneath.

The only cost figure the group settled on is that multi-entity consolidation currently takes about three weeks of manual work at close, and it appears on the timeline where it belongs rather than as a paragraph. The claim the page stands behind is that DBS removes that — cuts weeks, not hours.

We did not nail down the actual numbers behind the two timelines (how many days per entity, what the "with DBS" timeline looks like in real markers) — that's the next thing to pin down, not invented here. The weeks-saved figure is therefore stated as a label without a count, and the markers are the three weeks the group did agree on.

<!-- merged: dbs-portal sprint 2 — Ember -->
