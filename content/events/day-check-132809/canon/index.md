---
title: Team Notes
description: A single page of short posts that answer the questions people currently walk over and ask a colleague. Every post names an owner and how often it is updated.
---

```block
type: NotesPage
data:
  title: Team Notes
  standfirst: A page of short posts that replace the questions people currently walk over and ask a colleague. Each one names who owns it and how often it changes.
  questions:
    - What changed on the site this week.
    - What is being tested right now.
    - Who owns the dealer locator.
  updatedLine: Most recent first. A post that stops saving anyone a question gets removed, not left to go stale.
  footerNote: A post earns its place if it saves somebody from asking a colleague. Every post names an owner and how often it is updated. No comments, no reactions, no notifications — nobody subscribes to a post, you just come and check it.
  posts:
    - title: Who owns the dealer locator
      owner: Marta Lindqvist
      ownerRole: front end
      cadence: when it changes
      lastChanged: 14 May 2025
      body:
        - Marta Lindqvist owns the dealer locator end to end — the map, the search field, and the dealer data that feeds it. Ask her before changing anything a dealer sees.
        - The dealer list itself comes from the sales system twice a day. If a dealer is missing, it is missing there first, and the fix is in sales, not here.
        - Since 14 May the locator falls back to postcode when a browser blocks location. Roughly a fifth of visitors on the locator were previously getting an empty map, and now they get a list.
    - title: What changed on the site this week
      owner: Henrik Aas
      ownerRole: release
      cadence: weekly, Friday
      lastChanged: 16 May 2025
      body:
        - The dealer locator now falls back to postcode search. The car detail page loads its image gallery after the price block instead of before it, which took about a second off the point where the price is readable on a phone.
        - The finance calculator on the offers page rounds monthly cost to the nearest krone. It was showing two decimals, and three people in customer service said callers were reading those out and getting confused.
        - Nothing changed on the start page this week.
    - title: What is being tested right now
      owner: Solveig Trane
      ownerRole: optimisation
      cadence: weekly, Monday
      lastChanged: 12 May 2025
      body:
        - Two tests are running. On the car detail page, the book-a-test-drive button is pinned to the bottom of the screen on phones for half of visitors. It has been running eleven days and needs about a week more before the numbers mean anything.
        - On the offers page, one version leads with the monthly price and one with the total price. Early, the monthly version gets more clicks into the configurator and fewer enquiries at the end of it, so it may be moving people who were never going to buy.
        - Nothing is being tested on the dealer locator. Traffic there is too low to settle anything in under two months.
    - title: Who to ask about the car configurator
      owner: Petter Wold
      ownerRole: back end
      cadence: when it changes
      lastChanged: 3 April 2025
      body:
        - Petter Wold owns the configurator. Prices, options and which combinations are allowed come from the product database, so he is the wrong person for a wrong price — that is product data.
        - If a combination cannot be selected and you think it should be, that is a rule in the product database, and Petter can tell you which one within a day.
    - title: Why the search results changed in April
      owner: Marta Lindqvist
      ownerRole: front end
      cadence: monthly
      lastChanged: 30 April 2025
      body:
        - Site search now ranks model pages above news and press releases. Before, a search for a model name often returned a two-year-old press release first.
        - People searching a model name now reach the model page nine times out of ten instead of six. The press releases are still there, further down.
    - title: How often the stock feed updates
      owner: Henrik Aas
      ownerRole: release
      cadence: monthly
      lastChanged: 28 March 2025
      body:
        - Used stock on the site refreshes every fifteen minutes. A car sold in a dealership can therefore still be listed for up to a quarter of an hour.
        - If a car is listed hours after it sold, the dealer has not closed it in their own system. That is a call to the dealer, not a fault on the site.
    - title: Who decides what goes on the start page
      owner: Solveig Trane
      ownerRole: optimisation
      cadence: monthly
      lastChanged: 21 February 2025
      body:
        - The start page carries four slots. Two are fixed for current campaigns and are booked by marketing a month ahead. Two are ours and change with what is being tested.
        - Asking for a slot means asking Solveig Trane. A request made less than two weeks out will usually not fit, because the campaign slots are booked first.
```

The room advanced two ideas that turned out to be one page. **Team Bo** wrote it as a list of posts, most recent first, each one answering a question somebody would otherwise walk over and ask. **Team Ada** wrote it as a list of the areas the team owns, one entry each. Both insisted on the same three things — one column, one named person, a stated cadence — so those are the spine and are built once.

Where they genuinely differed is the unit and the order. This page is built as Bo's: a post answers a question, and the order is most recent first. Ada argued the unit should be a standing area of responsibility and left the order open; that reading survives in the posts that are pure ownership ("Who owns the dealer locator", "Who to ask about the car configurator"), which sit in the same list rather than in a section of their own. If the next sprint prefers Ada's unit, the change is what a title is allowed to say, not the page.

Ada's refusals are kept in full: no dashboard, no filters, no search, no categories, no nested pages. Bo's are too: no comments, no reactions, no notifications. Nothing on the page can be configured before it is useful.

Both groups said they had not settled which posts go up first, and Bo named that as the biggest gap. The seven posts here were written to fill it — the three standing questions from the sprint are the first three, and the owners are invented people with a role beside each name, so nobody in the room is quoted as having done something they did not do. The cadences, dates and numbers are ours. Swap them for the real ones and nothing about the page has to change.

<!-- merged: day-check-132809 sprint 1 — Team Ada, Team Bo -->
