---
title: "What's Changed"
ingress: "One feed, newest first, answering the three things people keep asking: what changed, what's being tested, who owns what."
---

```block
type: ChangeFeed
data:
  siteName: "What's Changed"
  nav:
    - { label: "Feed" }
    - { label: "How this works" }
    - { label: "Contact the team" }
  title: "What's Changed"
  ingress: "One feed, newest first, answering the three things people keep asking: what changed, what's being tested, who owns what."
  entries:
    - line: "Sticky nav moved to the top of the product page. Checkout starts up 11% across 14 rows tested."
      status: "Live"
      owner: "Marek Solheim, front end"
      cadence: "Checked weekly"
      date: "3 June"
    - line: "Dealer locator — owned by Ingrid Fallesen, service design. She confirms the dealer list against the CRM export every Monday morning."
      owner: "Ingrid Fallesen, service design"
      cadence: "Confirmed every Monday"
      date: "2 June"
    - line: "Checkout button is now orange on half the traffic, to test whether it gets more clicks than the navy one."
      status: "Live"
      owner: "Petra Lindqvist, optimisation"
      cadence: "Read daily"
      date: "31 May"
    - line: "Homepage hero swapped for the What's Changed feed. The campaign image moved down under the model list."
      owner: "Marek Solheim, front end"
      cadence: "Updated with each campaign"
      date: "22 May"
    - line: "New dealer onboarding flow tested against the old one. No difference in completed sign-ups, so the old flow stays."
      status: "Ended"
      owner: "Ingrid Fallesen, service design"
      cadence: "Closed"
      date: "18 May"
    - line: "Product page spec table now loads with the first three rows open. Fewer people leave from the page before scrolling."
      status: "Live"
      owner: "Petra Lindqvist, optimisation"
      cadence: "Read weekly"
      date: "14 May"
    - line: "Search on the support pages — owned by Tobias Ahl, content. He rewrites the top twenty queries' answers at the start of every month."
      owner: "Tobias Ahl, content"
      cadence: "Rewritten monthly"
      date: "9 May"
    - line: "Cookie banner shortened to two lines and one row of buttons. Consent rate unchanged, page loads 400ms sooner."
      owner: "Marek Solheim, front end"
      cadence: "Reviewed quarterly"
      date: "6 May"
    - line: "Delivery time on the basket page now reads the warehouse feed instead of a fixed number, so it is right for orders after 15:00."
      owner: "Petra Lindqvist, optimisation"
      cadence: "Checked weekly"
      date: "29 April"
    - line: "Newsletter sign-up moved out of the footer and under the model pages. Sign-ups up, unsubscribes flat so far."
      status: "Live"
      owner: "Tobias Ahl, content"
      cadence: "Read weekly"
      date: "24 April"
  footerNote: "Every line here names an owner and how often it is updated. If it is not in the list, it has not happened yet."
  footerLinks:
    - "Ask the web team"
    - "How to add a line"
    - "Test calendar"
```

## What the room decided

Both teams arrived at the same page: one list, newest first, holding site changes, live tests and ownership together, with no tabs, no filters, no categories and no search box. That is the spine and it is built exactly that way.

They differed on two points. Team Bo wanted the owner's name and the date written into the row's single line and, where there is an action, an orange pill for **Add an update**. Team Dag wanted the owner and the date as small round tags beside the line, and no primary button at all, because the screen is for reading. The page takes Dag's tags — they make the owner scannable down the column, which is the whole reason people ask — and Bo's button, moved into the header where it does not compete with the feed. A portal nobody can post to becomes a status report written upward, which is the thing the day said it must not be.

Ownership rows are rows like any other, dated the same way and sorted the same way, rather than a pinned strip or a second page. Test rows carry a round status tag, `Live` or `Ended`; nothing else on the page is a coloured word.

## What we supplied

The room settled the structure, the rules and the shape of a row, and it named its two people as owners for now. The ten lines on the page, their owners, dates and results are ours, written so the feed has something to be read and argued with — real colleagues' names are deliberately not on it. Correct the wording of any line in one sentence on the next hand-in.

## Left open

Who may add a row, how far back the feed shows, and what "updated weekly" means item by item were all put out of scope this sprint. **Add an update** is in the header and goes nowhere yet; deciding who it belongs to is the next argument, not this one.

<!-- merged: day-check-161247 sprint 1 — Team Bo, Team Dag -->
