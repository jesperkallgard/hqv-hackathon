---
title: "What changed"
description: "The team's internal page: short posts that answer the questions people would otherwise ask a colleague."
---

```block
type: TeamPortalPage
data:
  siteName: "What changed"
  strapline: "The web team, in writing."
  nav:
    - { label: "Posts", href: "#posts" }
    - { label: "Running tests", href: "#posts" }
    - { label: "Who owns what", href: "#owners" }
    - { label: "How this page works", href: "#how" }
  intro: "One page of short posts about what changed on the team and what it meant — so nobody has to ask a colleague to find out."
  primaryAction: { label: "Write a post", href: "#" }
  posts:
    - question: "Who owns the dealer locator?"
      owner: "Owner: Mirjam Holt"
      cadence: "Updated: when it changes"
      date: "14 May 2024"
      body:
        - "Mirjam Holt owns the dealer locator end to end — the search, the map, and the dealer data behind it. Ask her before changing anything on it, including copy."
        - "The dealer records themselves come from the dealer administration system and are refreshed every night at 02:00. If a dealer is missing or has the wrong opening hours, that is fixed in the administration system, not on the site, and it appears the next morning."
    - question: "What is being tested right now?"
      owner: "Owner: Jonas Rehn"
      cadence: "Updated: weekly"
      date: "13 May 2024"
      body:
        - "Three tests are live. The full list with traffic split and end dates is in the table below. Jonas Rehn reads the numbers every Monday and takes down anything that has run past its end date."
        - "If a test is on a page you are about to change, talk to the owner in the row before you ship. Two changes on the same page at once means neither result can be read."
      tests:
        - { name: "Contact form on one screen", area: "Contact", owner: "Jonas Rehn", split: "50/50", ends: "24 May 2024", state: "Running" }
        - { name: "Price shown on the model cards", area: "Model range", owner: "Petra Lind", split: "50/50", ends: "31 May 2024", state: "Running" }
        - { name: "Dealer search by postcode first", area: "Dealer locator", owner: "Mirjam Holt", split: "25/75", ends: "7 June 2024", state: "Running" }
        - { name: "Shorter finance calculator", area: "Finance", owner: "Petra Lind", split: "50/50", ends: "10 May 2024", state: "Reading results" }
        - { name: "Book a test drive in two steps", area: "Test drive", owner: "Jonas Rehn", split: "50/50", ends: "3 May 2024", state: "Shipped" }
        - { name: "Sticky enquiry bar on mobile", area: "Model detail", owner: "Ines Farkas", split: "50/50", ends: "26 April 2024", state: "Stopped" }
    - question: "What changed on the site this week?"
      owner: "Owner: Ines Farkas"
      cadence: "Updated: weekly"
      date: "13 May 2024"
      body:
        - "The test drive booking is two steps instead of four. Half as many people drop out between opening it and sending it, so the dealers are getting more bookings without anyone spending more on traffic."
        - "The model range page loads the images as you scroll instead of all at once. On a phone on 4G it is roughly two seconds faster to something readable."
        - "The old campaign pages from March are gone. If you had one bookmarked it now redirects to the model it was about."
    - question: "Deploys move to Fridays"
      owner: "Bo · updated as it changes"
      cadence: "Updated: when it changes"
      date: "8 May 2024"
      body:
        - "We stopped deploying on Mondays because it broke the week for whoever was on call. Friday deploys now, reviewed Thursday. If something's blocking a Friday deploy, tell Bo before Thursday standup."
    - question: "Why did the search results change order?"
      owner: "Owner: Petra Lind"
      cadence: "Updated: when it changes"
      date: "2 May 2024"
      body:
        - "Search now puts model pages above news and press releases. People searching a model name were landing on a two-year-old press release and leaving."
        - "Nothing was removed from the index. If a page you expect is not coming up at all, send Petra Lind the search term you used."
    - question: "Who do I ask to get something on the front page?"
      owner: "Owner: Ines Farkas"
      cadence: "Updated: monthly"
      date: "25 April 2024"
      body:
        - "Ines Farkas decides what is on the front page. There are four slots and they are planned a month ahead, so ask before the last week of the month if you want something in."
        - "A campaign with no end date does not get a slot. Say when it comes down when you ask for it to go up."
  ownersTitle: "Who owns what"
  ownersNote: "One name, not a team. If the name is wrong, tell Ines Farkas and she will change it here."
  owners:
    - { area: "Dealer locator", owner: "Mirjam Holt", cadence: "When it changes", checked: "14 May 2024" }
    - { area: "Test programme", owner: "Jonas Rehn", cadence: "Weekly", checked: "13 May 2024" }
    - { area: "Front page and campaigns", owner: "Ines Farkas", cadence: "Monthly", checked: "25 April 2024" }
    - { area: "Search and navigation", owner: "Petra Lind", cadence: "When it changes", checked: "2 May 2024" }
    - { area: "Model range and model pages", owner: "Petra Lind", cadence: "Weekly", checked: "13 May 2024" }
    - { area: "Deploys and staging", owner: "Bo", cadence: "When it changes", checked: "8 May 2024" }
    - { area: "Forms and enquiry routing", owner: "Jonas Rehn", cadence: "Monthly", checked: "30 April 2024" }
    - { area: "This page", owner: "Ines Farkas", cadence: "Weekly", checked: "14 May 2024" }
  howTitle: "How this page works"
  howRules:
    - "Every post answers a real question someone would otherwise ask a colleague — not a status update for its own sake."
    - "Every post names an owner and how often it's updated, right under the heading."
    - "A post says what changed and what it meant. Not what was done, not a task list."
    - "New posts sit at the top. No folders, no categories, no wiki structure to maintain."
    - "A post that stops saving anyone a question gets taken down, not left to go stale."
  footerNote: "Ines Farkas keeps this page. Send her a question that got asked twice and it becomes a post."
  footerLinks:
    - { label: "Write a post", href: "#" }
    - { label: "Ask for an owner", href: "#" }
    - { label: "Taken-down posts", href: "#" }
```

## What the room decided, and what was filled in

Two groups wrote the same page from two ends. **Team Cleo** wrote it as a running list of short posts, newest first, no folders and no search. **Team Dag** wrote it as a page format: one question as the title, one named owner, one update cadence, and the answer starting immediately — no summary paragraph repeating the title.

They are built as one thing: the page is Cleo's single column of posts, newest first, and each post is Dag's format — the heading is written as the question somebody actually asks, the owner's name and the cadence sit directly under it, and the body is the answer. Where they conflicted, Dag lost the argument about one question per URL: Dag wanted each question to be its own page in a plain list of pages, and everything is on one page instead, because the three questions the sprint named are read together and a list of links is one more thing to maintain. Cleo lost "nothing else on it" — the owners table and the four rules at the bottom are on the page, because "who owns the dealer locator" is a lookup and a lookup is a table, not six posts.

Both groups said they had not picked their real first posts, and both handed in a placeholder to show the shape. Cleo's "Deploys move to Fridays" post is on the page word for word, because it was written. Everything else — the other five posts, the running tests, the owners table and every name in it except Bo — was written here so the page could be read as a page. Those names are invented; replace them with the team's own, and replace the posts with the questions that actually got asked twice this month. Nothing in the tests table has been measured.

Out of scope this sprint, and deliberately absent: comments, reactions, notifications, tags, categories and search. "Write a post" is the only filled button on the page; where it leads has not been decided.

<!-- merged: day-check-131258 sprint 1 — Team Cleo, Team Dag -->
