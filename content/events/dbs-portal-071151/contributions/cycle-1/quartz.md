---
title: "Needs, tied to who actually has them"
cycle: 1
pair: "quartz"
authors: ["Dag", "Ada", "Bo", "Gita"]
---

We started from what Scale actually gets asked for, and wrote down who's asking and why. Here's one built as a real card — this is what "done right" looks like:

```block
type: NeedCard
data:
  audience: Market teams
  tag: husqvarna.com
  headline: My Husqvarna's login flow changed this month
  whatItMeans: The Dealer Locator also moved. If a customer mentions either, that's why — check what's live before you tell them something that's no longer true.
```

The other four needs we found, same shape — audience first, then what they need to know, then why:

**Market teams** — need to know what test is running on their product family right now, and what it's measuring. Right now there's a new chainsaws landing page layout being tested, and we're tracking whether people scroll past the fold — not whether they buy. That's the number they should quote if someone asks how it's going.

**EU market teams** — need to know if the dealer experience changed and what broke or got better. EU has tighter dealer relationships than US or PAC, so a surprise in the Dealer Locator lands on someone at a partner meeting, not just a support ticket.

**New joiners to DBS** — need to know what Scale actually owns versus the rest of Digital Solutions, in three sentences: Scale owns My Husqvarna, Dealer Locator, and Support pages on husqvarna.com. Explore owns the chatbot. Optimise runs tests across all of it. That's it — they stop guessing.

**IT** — need to know what's in the next Sitecore release from our team and what we need from their side. Not a Gantt chart: we're pushing a checkout flow change in three weeks and need a UAT environment two weeks before that.

The test for all five: if someone from Scale has to stand next to the reader and explain it, it doesn't belong here yet.
