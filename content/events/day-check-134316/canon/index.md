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
  today: "2024-06-24"
  staleDays: 21
  sections:
    - id: playbooks
      title: "Playbooks"
      note: "How we do the recurring things, written down so you do not have to ask twice."
      entries:
        - title: "Running an A/B test on the site"
          owner: "Marek Salonen, Experimentation"
          cadence: "updated quarterly"
          updated: "2024-06-18"
          href: "#playbook-ab-test"
        - title: "Changing anything on the dealer locator"
          owner: "Ingrid Halvorsen, Product"
          cadence: "updated quarterly"
          updated: "2024-04-30"
        - title: "Getting a new page into the CMS"
          owner: "Tomas Ek, Web"
          cadence: "updated twice a year"
          updated: "2024-02-06"
        - title: "Tracking and consent — what fires where"
          owner: "Priya Raman, Analytics"
          cadence: "updated monthly"
          updated: "2024-06-10"
      empty: ""
    - id: test-results
      title: "Test Results"
      note: "What we tested, what happened, and what we did about it."
      entries:
        - title: "Sticky nav on PDP — lifted contact clicks 6%, kept"
          owner: "Marek Salonen, Experimentation"
          cadence: "updated when a test ends"
          updated: "2024-06-11"
        - title: "Dealer locator postcode field — no measurable change, reverted"
          owner: "Ingrid Halvorsen, Product"
          cadence: "updated when a test ends"
          updated: "2024-06-09"
        - title: "Shorter finance calculator — fewer drop-offs, rolling out"
          owner: "Priya Raman, Analytics"
          cadence: "updated when a test ends"
          updated: "2024-06-13"
        - title: "Video on the model overview — slower pages, no lift, dropped"
          owner: "Tomas Ek, Web"
          cadence: "updated when a test ends"
          updated: "2024-04-02"
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
          updated: "2024-05-21"
        - title: "No new page templates until the CMS migration lands"
          owner: "Tomas Ek, Web"
          cadence: "updated when it changes"
          updated: "2024-06-17"
        - title: "Tests run for two full weeks or not at all"
          owner: "Marek Salonen, Experimentation"
          cadence: "updated when it changes"
          updated: "2024-03-12"
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
    - name: "Service booking on mobile"
      stage: "Live everywhere"
      owner: "Ingrid Halvorsen"
      updated: "2024-05-16"
    - name: "Image compression on all templates"
      stage: "Paused"
      owner: "Marek Salonen"
      updated: "2024-03-21"
  updatedLabel: "Stages are Testing, Rolling out, Live everywhere, Paused. Owners check their own rows every Monday. An entry untouched for three weeks says so next to its date, wherever it appears."
  playbook:
    id: "playbook-ab-test"
    section: "Playbooks"
    title: "Running an A/B test on the site"
    owner: "Marek Salonen, Experimentation"
    cadence: "updated quarterly"
    updated: "2024-06-18"
    backLabel: "Back to Playbooks"
    backHref: "#playbooks"
    steps:
      - "Confirm the test question with Experimentation before touching any page."
      - "Set the test to run two full weeks, per the standing decision — no early calls."
      - "Log it in Rollout Status as \"Testing\" the day it goes live."
      - "When it ends, write it up in Test Results — kept or reverted — and note what it meant, not just what was done."
      - "Update Rollout Status the same day the test ends."
  footerNote: "This site replaces asking a colleague. If a post does not save you that, it should not be here."
  contact: "Ask the team"
```

## What the room settled

Team Dag's index is the page and Team Bo's table is on it. Both groups wrote the same page from opposite ends — Dag an index of four sections that says nothing itself, Bo a single page that is one rollout table and refuses subpages. Rather than build two pages, Rollout Status is the one section that holds its content inline instead of linking out: Bo's four stages, owner and last-updated columns, no percentages, no ETAs, no progress bars, and a stale row that says so rather than going quiet. The other three sections stay one line per entry — title, owner, cadence — and you click through for the post.

What Dag argued and lost in sprint 1: that every section, Rollout Status included, should be links only, with nothing readable on the index. Bo's table is the stronger claim, because the question "where are we with X" is answered by seeing the table, not by arriving at it. Dag's rule that a section with nothing in it is still named and still shown survives in the build, though nothing is currently empty.

This sprint adds the first thing behind a link. Team Dag wrote the page you land on from "Running an A/B test on the site": the same header pattern as the index — title, owner, cadence — and a body that is a numbered list of the actual steps, because a playbook is followed, not read. Each step says what to do, not why; the reasoning stays in Decisions. There is no sign-off, no approval flow and no linked ticket: it is a record you follow, not a workflow you run through. Step 2 and steps 3 and 5 deliberately match the canon decision "Tests run for two full weeks or not at all" and the Rollout Status table, so the pages agree rather than stating different rules. It sits on the index rather than on its own URL so the front door stays one page; the other three playbooks link to the same pattern, and their steps were not written this sprint.

Team Ada closed the staleness question the room left open. Stale is computed, not typed: any entry 21 days or more past its own updated date carries "Not touched in N weeks" next to the date, in the same weight of plain text — no colour, no icon, no badge, because a flat panel and a fact do not need a warning light. Below 21 days an entry shows only its date; there is no amber in-between state, because a threshold that hedges is a threshold nobody trusts. The rule runs in all four sections, not only Rollout Status — a playbook nobody has touched in two months is exactly the case this site exists to catch. The hand-written stale strings on the two paused rollouts are gone; those rows now work it out from their dates. Bo's Monday check stands, but Monday is when somebody acts on the flag, not what makes it appear.

Still open, in Ada's own words: the 21-day number and the wording "Not touched in N weeks" are that group's best guess, not something the room agreed — worth checking against the Monday-check note before it is treated as final. If the room prefers a different number, that is a one-line change.

The entries, dates and owners on the page are written in so there is something to look at; the owner names are fictional people with roles beside them, and nobody in the room appears on the page. The steps in the A/B playbook are the room's own. The three other playbooks, and the dates that drive the stale notes, are ours. Replace them with the real rollouts and the real owners, and the page is done.

<!-- merged: day-check-134316 sprint 1 — Team Bo, Team Dag -->

<!-- merged: day-check-134316 sprint 2 — Team Dag, Team Ada -->
