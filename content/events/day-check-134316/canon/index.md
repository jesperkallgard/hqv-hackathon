---
title: "DBS internal site"
summary: "One page: what exists, who owns it, and where every rollout stands."
---

```block
type: PortalIndex
data:
  siteName: "DBS internal site"
  tagline: "What changed, what is being tested, who to ask."
  title: "What we are running"
  ingress: "One page, one column. Four things earn a place here: playbooks, test results, rollout status, decisions. Every entry names an owner and how often it is updated."
  sections:
    - id: playbooks
      title: "Playbooks"
      note: "How we do the recurring things, written down so you do not have to ask twice."
      entries:
        - title: "Running an A/B test on the site"
          owner: "Marek Salonen, Experimentation"
          cadence: "updated quarterly"
        - title: "Changing anything on the dealer locator"
          owner: "Ingrid Halvorsen, Product"
          cadence: "updated quarterly"
        - title: "Getting a new page into the CMS"
          owner: "Tomas Ek, Web"
          cadence: "updated twice a year"
        - title: "Tracking and consent — what fires where"
          owner: "Priya Raman, Analytics"
          cadence: "updated monthly"
      empty: ""
    - id: test-results
      title: "Test Results"
      note: "What we tested, what happened, and what we did about it."
      entries:
        - title: "Sticky nav on PDP — lifted contact clicks 6%, kept"
          owner: "Marek Salonen, Experimentation"
          cadence: "updated when a test ends"
        - title: "Dealer locator postcode field — no measurable change, reverted"
          owner: "Ingrid Halvorsen, Product"
          cadence: "updated when a test ends"
        - title: "Shorter finance calculator — fewer drop-offs, rolling out"
          owner: "Priya Raman, Analytics"
          cadence: "updated when a test ends"
        - title: "Video on the model overview — slower pages, no lift, dropped"
          owner: "Tomas Ek, Web"
          cadence: "updated when a test ends"
    - id: rollout-status
      title: "Rollout Status"
      note: "Where each rollout stands. Nothing else — the reasoning lives in Test Results and Decisions."
    - id: decisions
      title: "Decisions"
      note: "What we settled, when, and what it rules out."
      entries:
        - title: "The dealer locator stays on the shared map component"
          owner: "Ingrid Halvorsen, Product"
          cadence: "updated when it changes"
        - title: "No new page templates until the CMS migration lands"
          owner: "Tomas Ek, Web"
          cadence: "updated when it changes"
        - title: "Tests run for two full weeks or not at all"
          owner: "Marek Salonen, Experimentation"
          cadence: "updated when it changes"
  rolloutIngress: "Every rollout in flight, what stage it's at, and who owns it — so nobody has to ask."
  rollouts:
    - name: "Sticky nav on PDP"
      stage: "Rolling out"
      owner: "Marek Salonen"
      updated: "2024-06-11"
    - name: "New checkout flow"
      stage: "Testing"
      owner: "Priya Raman"
      updated: "2024-06-14"
    - name: "Dealer locator search rewrite"
      stage: "Testing"
      owner: "Ingrid Halvorsen"
      updated: "2024-06-09"
    - name: "Consent banner v2"
      stage: "Live everywhere"
      owner: "Priya Raman"
      updated: "2024-05-28"
    - name: "Finance calculator, short form"
      stage: "Rolling out"
      owner: "Tomas Ek"
      updated: "2024-06-13"
    - name: "Model overview video header"
      stage: "Paused"
      owner: "Tomas Ek"
      updated: "2024-04-02"
      stale: "Not touched in 10 weeks"
    - name: "Service booking on mobile"
      stage: "Live everywhere"
      owner: "Ingrid Halvorsen"
      updated: "2024-05-16"
    - name: "Image compression on all templates"
      stage: "Paused"
      owner: "Marek Salonen"
      updated: "2024-03-21"
      stale: "Not touched in 12 weeks"
  updatedLabel: "Stages are Testing, Rolling out, Live everywhere, Paused. Owners check their own rows every Monday."
  footerNote: "This site replaces asking a colleague. If a post does not save you that, it should not be here."
  contact: "Ask the team"
```

## What the room settled

Team Dag's index is the page and Team Bo's table is on it. Both groups wrote the same page from opposite ends — Dag an index of four sections that says nothing itself, Bo a single page that is one rollout table and refuses subpages. Rather than build two pages, Rollout Status is the one section that holds its content inline instead of linking out: Bo's four stages, owner and last-updated columns, no percentages, no ETAs, no progress bars, and a stale row that says so rather than going quiet. The other three sections stay one line per entry — title, owner, cadence — and you click through for the post.

What Dag argued and lost: that every section, Rollout Status included, should be links only, with nothing readable on the index. Bo's table is the stronger claim, because the question "where are we with X" is answered by seeing the table, not by arriving at it. Dag's rule that a section with nothing in it is still named and still shown survives in the build, though nothing is currently empty.

Bo asked that real rollout names, owners and update dates not be invented, and Dag noted no real entries were specified. So that the page could be looked at, the rollouts, playbooks, test results, decisions, dates and owners here are written in. The owner names are fictional people with roles beside them; nobody in the room appears on the page. Replace them with the real rollouts and the real owners, and the page is done.

Still open: how often "last updated" actually gets checked — the page currently claims Monday — and what threshold turns a row stale.

<!-- merged: day-check-134316 sprint 1 — Team Bo, Team Dag -->
