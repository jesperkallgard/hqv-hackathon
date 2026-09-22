---
title: FX Bleed Check
summary: A no-login first screen that turns three months of pasted bank statements into one basis-point number.
status: first sprint
from: Compass
---

# FX Bleed Check

A mid-market CFO pastes in their last three months of bank statements — no login — and the first screen gives them one number: how many basis points they're bleeding against the market rate on their FX.

```block
type: FxBleedCheck
data:
  prompt: Paste your last three months of bank statements.
  placeholder: Paste statement text here.
  submitLabel: Check my FX bleed
  note: No login, no signup, no account — statement upload only.
  headline: You lost 34bps vs. market on your FX in the last 3 months
  detail:
    - { label: "Benchmark", value: "market rate, same period" }
    - { label: "Period", value: "last three months" }
    - { label: "Trades", value: "—" }
```

## Decisions

Compass argued that a time-poor, skeptical CFO will not sit through a demo or create an account to find out whether their rates are competitive. So the tool asks for nothing but the paste: no login, no email, no account gate at any point, and nothing on screen before the paste but the prompt itself.

The headline figure shown here is illustrative shape, not a real number — the exact copy and the exact number are explicitly undecided. The benchmark is "market rate" for the same period; no specific published benchmark (e.g. WM/Reuters) has been picked, and that stays an open decision rather than something the build invents. The trade count is shown as a slot because the number comes from the statements, and there is no statement parser yet. The time window is fixed at the last three months for this version.

Benchmark, period and trade count sit under the number as secondary detail. They are never folded into the headline sentence: the first thing read is the bleed, and the qualifications are available to anyone who looks down.

How the statement parsing actually works (OCR, format support) — not decided, don't invent it. What happens after the number — the consolidation/renegotiation flow — is a later screen, not this one. Multi-currency breakdowns, trend charts, historical comparisons beyond three months — the first screen is one number, not a report.

<!-- merged: dbs-portal sprint 1 — Compass, Vinegar -->
