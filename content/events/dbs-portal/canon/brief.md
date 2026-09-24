---
title: Brief
---

```block
type: DbsPortalHeader
data:
  title: DBS
  nav:
  - label: Areas
    href: /dbs-portal/live/areas
  - label: Releases
    href: /dbs-portal/live/pipeline
  - label: Activities
    href: /dbs-portal/live/activities
  - label: Who to ask
    href: /dbs-portal/live/contacts
```

```block
type: DbsPortalBrief
data:
  eyebrow: Brief
  title: A DBS page that answers, instead of a page that reports
  standfirst: One internal page for everyone who works with husqvarna.com. It says what changed, what
    it moved, who owns it and who to ask — and it answers a question typed in plain language before it
    asks anyone to browse.
  meta:
  - label: Written
    value: 24 September 2026, from the CoHack workshop
  - label: From
    value: 22 people, 6 groups, 4 sprints
  - label: Owner
    value: DBS — to be assigned
  - label: The record
    value: The full transcript is on the day page
  vision:
    words: Be the answer everywhere.
    who: Ehsan, sprint four — written at 11:26 and adopted by the room the same minute.
  problem:
    title: Why
    body:
    - What DBS does is visible to DBS and to almost nobody else. Initiatives finish, experiments return
      a result, a release ships — and the people who would act on that find out in a meeting, in a thread,
      or not at all. The knowledge exists. It is spread across ADO, SharePoint, Confluence, ClickUp,
      GA, Kameleoon and a lot of people's heads.
    - The room did not ask for another reporting surface. Six groups, redrawn every sprint so nobody
      worked with the same people twice, arrived separately at the same shape — a page that carries
      a small number of things that matter, names a person beside each one, and lets you ask it a question
      instead of hunting for the tab.
    - The test is whether somebody who does not work in DBS comes back a second time.
  audience:
    title: Who it is for
    items:
    - who: People outside DBS who are affected by what DBS ships
      wants: Wants to know what changed, whether it worked, and who to ask about it — in under a minute.
    - who: Stakeholders who request work from DBS
      wants: Wants to see where their initiative is, what happens next, and how to submit the next one.
    - who: DBS itself
      wants: Wants one place to point at, so the same answer is not written five times in five threads.
  principles:
    title: What it has to do
    summary: Six things came back from different groups in different sprints, without anyone coordinating.
      They are the brief. A version of this page that drops one of them is not this page.
    items:
    - title: A number has to mean something
      body: Not how many experiments ran — what moved, for whom, and by how much. Every metric carries
        its date, its market and the definition of what is being measured, so it can be repeated and
        argued with.
    - title: An owner is a person
      body: Every section, every post and every metric names somebody. Initiative status belongs to the
        initiative owner, test results to the optimisation team, traffic to the analytics manager. Who
        to ask is not a directory — each person says what they can help with.
    - title: Show, do not write
      body: Images, charts, sketches, screenshots, state as colour. Three different people in three different
        sprints used the words "not just text". A page you scroll through, not a wall you read.
    - title: It should know who you are
      body: Personalised by role, with the section you care about pinned and remembered. Anton's version
        was an onboarding question — "What are you interested in seeing on this page?" — answered with
        pills and saved for next time.
    - title: Ask instead of browse
      body: CAI, the internal assistant, indexed across the internal sources. A question in plain language
        returns an answer, routes a problem to its owner and offers a small set of next actions. Three,
        not ten.
    - title: Contributing, not only reading
      body: Submit an idea. Heart a concept. Vote on somebody else's suggestion. A weekly update with
        a low enough threshold that people actually post one.
  scope:
    title: The first version
    summary: Four of the five groups who wrote about delivery said the same thing before anything else —
      start small and put it in front of people. What follows is the smallest version that is still worth
      visiting.
    inLabel: In the first version
    first:
    - KPIs at the top, with their measurement context beside them
    - What changed — recent releases, written by the person who shipped them
    - Ongoing and completed initiatives, with an owner on each
    - Who to ask, with what each person can help with
    - Submit an idea, feeding the existing intake
    - CAI available from the page, even if it only answers narrowly at first
    laterLabel: Later, once it is used
    later:
    - Personalisation by role, and a remembered layout
    - Hearting and voting on ideas
    - A carousel of highlighted features
    - Automated KPI pulls from GA and Kameleoon
    - Automated What changed, generated from releases
    - Show and Tell as a searchable archive
  content:
    title: What it carries
    summary: Defined as content, not as components — a page is what it says. Each item needs a source
      and a named owner before it goes on.
    items:
    - what: KPIs
      body: A small set that shows result, not activity. Revenue, traffic, goal completion, test outcomes
        — each with date, market and definition.
      source: From GA, Kameleoon and the analytics team. Owned by the analytics manager.
    - what: What changed
      body: Release notes written as a blog, in a person's voice, with an image or a short clip. Dia Browser's
        release notes were the example the room gave.
      source: Fact from ADO and the release process. The reason it mattered is written by a human.
    - what: Initiatives
      body: Planned, doing, done. Tagged, digestible, with the responsible person and their picture, and
        a timeline showing what is coming.
      source: From ADO where feasible. Owned by the initiative owners.
    - what: Areas
      body: Explore, Optimise and Scale — what each one is, how its process works, and what happens after
        you request something from the team.
      source: Written once by the area leads. Linked, not duplicated.
    - what: Who to ask
      body: Names, pictures, and what each person can actually help with. Leads to a suggestion box.
      source: Maintained by the people themselves.
    - what: Submit an idea
      body: Anyone inside the organisation can send in an idea or a request, and see what happened to
        it.
      source: Creates a ticket in the existing intake. Somebody has to own that queue.
    - what: Show and Tell
      body: Recaps, recordings and material from sessions already held.
      source: Linked from where it already lives. Never copied.
  build:
    title: How it gets built
    summary: From the five groups who wrote about delivery. Nothing here needs a new platform.
    steps:
    - title: Start small and make it live
      body: Identify what is needed for a first useful version and ship that. Existing sources plus limited
        manual maintenance first, automation afterwards. Build it as small widgets rather than one large
        page, so a piece can land without the rest.
    - title: Everything shown has a source and an owner
      body: Define where each piece of information comes from before defining the page. Find what already
        exists and where. Do not create anything that then has to be maintained only here — reuse and
        link.
    - title: Automate what can be automated
      body: Initiative status from ADO. KPIs from GA, Kameleoon and the other data sources. What changed,
        generated from releases and completed work.
    - title: Keep the human hand where it adds value
      body: Automation supplies the facts. Owners supply the context. A release is a fact; why it mattered
        is not, and no pipeline will write it.
    - title: Connect it to the workflows that already exist
      body: Submit an idea should feed the existing intake and backlog — an idea creates a ticket, and
        that ticket is managed by a person. Documentation and Show and Tell material are linked, not
        copied.
    - title: Split the work between sub-teams
      body: A UX section and a frontend section, with responsibilities divided rather than carried by
        one group. Add a step to the rollout process so content is posted when a feature ships, instead
        of hoping somebody remembers.
    open:
      title: Still open
      items:
      - 'Where the content lives: its own CMS, or read from SharePoint and Confluence. One group proposed
        SharePoint for static content with a continuous workflow around it, and CAI indexing across SharePoint,
        ClickUp, ADO and analytics — the page''s answers then coming from prompting CAI.'
      - Single sign-on, either way. Nobody should need a second login for an internal page.
      - Whether prompting CAI returns meaningful answers. This is worth testing before anything is built
        around it.
      - Who owns the intake queue that Submit an idea creates.
  risks:
    title: What will make it hard
    summary: Said plainly by the people who would have to do it. Each one has an answer, and the answers
      are the reason the first version is small.
    items:
    - risk: Getting buy-in for internal project time
      answer: The hardest one on the list. The answer the room reached is below — a UX ticket, prioritised
        between initiatives, needing nobody's permission to start.
    - risk: Maintenance — the risk that it goes out of date
      answer: Named by two separate groups. Automate the facts, give every remaining piece an owner, and
        carry nothing that only exists here.
    - risk: Getting external stakeholders to come back a second time
      answer: The one measure that matters. It is why the page leads with result and with what changed,
        rather than with a description of DBS.
    - risk: Prioritising which information to display
      answer: Decided by the six principles above. When something new is proposed, it earns a place by
        meeting one of them.
    - risk: Where do you edit it, and it is time consuming
      answer: Settled by the CMS decision, which is still open. Whatever is chosen has to make posting
        a weekly update take minutes.
    - risk: Selling the benefits, and getting people to read it
      answer: Not a launch email. It is the rollout step — when a feature ships, its note is posted, and
        the people it affects are told where it is.
  next:
    title: What to do next
    items:
    - title: Talk to stakeholders before building more
      body: Ask the people outside DBS what they would come here for. The prototype is a good enough
        thing to hold up while asking.
    - title: Test CAI against the real sources
      body: Point it at SharePoint, ADO and analytics and see whether the answers are meaningful. The
        whole "ask instead of browse" idea rests on this, and it is cheap to find out.
    - title: Decide where the content lives
      body: CMS, or SharePoint and Confluence read through. It blocks almost everything else, so it goes
        first.
    - title: Pick the first useful version and put it in front of people
      body: KPIs, what changed, initiatives with owners, who to ask. Manual where it has to be.
  ask:
    title: The ask
    body: Turn this brief into a UX ticket and prioritise it in the gaps between initiatives, when there
      is capacity. It was the one answer anybody gave to the hardest problem on the list — getting internal
      project time — and it is the only next step here that does not need somebody else to say yes first.
    link:
      label: Read what the room actually said
      href: /dbs-portal/live/day
```

```block
type: DbsPortalFooter
data:
  footer:
    text: DBS sits inside Digital Solutions under Martin Cronholm and owns building and optimising husqvarna.com.
    links:
    - label: The day
      href: /dbs-portal/live/day
    - label: The prototype
      href: /dbs-portal/live
    - label: Contact DBS
      href: '#'
```
