---
title: Front Door
summary: Four equal doors onto the CFO's own questions — FX bleed, close risk, cash visibility, renegotiation slip — none ranked, none dressed up.
status: second sprint
from: Ember
---

# Front Door

Four questions a CFO actually asks, each opening onto a check that answers with one figure or status — not a ranked menu, not a feature pitch.

```block
type: CheckDoors
data:
  toolName: DBS
  doors:
    - name: FX Bleed Check
      question: "am I leaving money on the table on FX?"
      href: /fx-bleed-check
      figure: "You lost 34bps vs. market on your FX in the last 3 months"
      illustrative: true
    - name: Close Timeline Comparison
      question: "will consolidating wreck my close?"
      href: /close-timeline-comparison
      gapLabel: "Weeks saved"
      gapNote: "DBS removes that — cuts weeks, not hours"
    - name: Cash Visibility
      question: "where is my cash right now, across every bank I use?"
      prompt: "connect or paste your statements to see your position"
    - name: Renegotiation Tracker
      question: "am I actually getting the rate I renegotiated, or did it slip back?"
      prompt: "start a tracker from your FX Bleed Check result"
```

## Decisions

Ember argued that a CFO opening this for the first time should see four of their own questions sitting as equals, not a ranked menu of opportunity or a hero card pushing whichever check the team likes best. So the door is a plain, fixed row of four: FX Bleed Check and Close Timeline Comparison, which already exist and open straight onto the pages the earlier sprints built, and Cash Visibility and Renegotiation Tracker, named here for the first time. Every card shows exactly the same shape as the check behind it — one figure or one status, never a feature description or a 'learn more' — because that is what the check itself would show.

Cash Visibility and Renegotiation Tracker have no agreed figures yet. Rather than invent one, or hide the door behind a padlock or a 'coming soon', their cards carry the same honest input prompt the underlying check would ask for: connect or paste your statements to see your position, and start a tracker from your FX Bleed Check result. The group did float illustrative example figures for both of these — '£X.Xm visible across N banks' and '2 open, next review 14 days' — but marked them explicitly unsettled, so neither appears here.

The FX Bleed Check card carries the 34bps figure from that check's own headline, flagged as illustrative for the same reason it is flagged on the check itself: no real benchmark or statement parser exists behind it yet. The Close Timeline Comparison card carries its gap label and note rather than a number, because no weeks-saved count was ever agreed — only the label, and the claim that DBS removes the gap rather than shrinking it.

The group deliberately refused a fifth door for anything not actionable in one sitting, and left the four in a fixed, unranked, unpersonalised order — nothing here changes with data, urgency, or who is looking at it. There is no onboarding, login, or account setting on this page; it is the first page in the site that needed a header and footer at all, and both are kept to naming the tool and restating that constraint, nothing more.

<!-- merged: dbs-portal sprint 2 — Ember -->
