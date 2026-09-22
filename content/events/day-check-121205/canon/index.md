---
title: "The front door"
ingress: "Four cards in one column — What's changed, What we're testing, How we do things, Who owns what. An outsider reads the four names and knows where to click."
---

```block
type: FrontDoorPage
data:
  title: The front door
  standfirst: Four areas, no more. What changed on the site, what is being tested right now, how the team works, and who to ask.
  exampleNote: "Example content — these rows show the shape of the page; nothing here has been measured. The real rows will be whatever the team actually knows."
  areas:
    - id: changed
      name: What's changed
      lastUpdated: 12 Nov
      note: "Example content — nothing here has been measured."
      entries:
        - line: Homepage banner swapped to the autumn campaign.
          owner: Web team
          date: 12 Nov
          cadence: updated 12 Nov
        - line: Dealer locator moved to the new map API.
          owner: Frontend team
          date: 11 Nov
          cadence: checked weekly, last checked this week
        - line: Checkout error copy changed after complaints. Fewer people abandon on the payment step.
          owner: Optimisation team
          date: 8 Nov
          cadence: updated 8 Nov
        - line: Product filter on the accessories listing now keeps your choice when you go back.
          owner: Frontend team
          date: 5 Nov
          cadence: updated 5 Nov
        - line: Cookie banner reworded. Consent rate went up, nothing else changed.
          owner: Web team
          date: 29 Oct
          cadence: updated 29 Oct
        - line: Test on the shorter contact form finished. The short form won; it is now the only form.
          owner: Optimisation team
          date: 27 Oct
          cadence: closed 27 Oct
        - line: Page speed work on the product pages. Largest image now loads later, first paint is quicker.
          owner: Frontend team
          date: 20 Oct
          cadence: updated 20 Oct
    - id: testing
      name: What we're testing
      lastUpdated: 10 Nov
      note: "Example content — nothing here has been measured."
      entries:
        - line: A/B test on the checkout button colour, live since 10 Nov.
          owner: Optimisation team
          date: 10 Nov
          cadence: read again when the test closes, 24 Nov
        - line: Homepage hero test is live, testing new vs. old copy. Runs until end of month.
          owner: Optimisation team
          date: 6 Nov
          cadence: read again 30 Nov
        - line: Dealer locator results order — nearest first against most stock first.
          owner: Optimisation team
          date: 4 Nov
          cadence: read again 18 Nov
        - line: Shorter delivery copy on the basket page, against the current wording.
          owner: Optimisation team
          date: 2 Nov
          cadence: read again 23 Nov
        - line: Newsletter sign-up moved below the footer links on article pages.
          owner: Web team
          date: 30 Oct
          cadence: read again 27 Nov
    - id: how
      name: How we do things
      lastUpdated: 7 Nov
      note: "Example content — nothing here has been measured. The real process notes still have to come from the team."
      entries:
        - line: How a test gets signed off before it goes live.
          owner: Optimisation team
          date: 7 Nov
          cadence: reviewed quarterly, last checked 7 Nov
        - line: How a page request gets picked up, and how long it usually waits.
          owner: Web team
          date: 3 Nov
          cadence: reviewed quarterly, last checked 3 Nov
        - line: How a decision gets made when two teams want different things on the same page.
          owner: Web team
          date: 28 Oct
          cadence: reviewed quarterly, last checked 28 Oct
        - line: What has to be true before anything ships on a Friday.
          owner: Frontend team
          date: 21 Oct
          cadence: reviewed quarterly, last checked 21 Oct
        - line: How a test result is written up, and where it is written down.
          owner: Optimisation team
          date: 14 Oct
          cadence: reviewed quarterly, last checked 14 Oct
    - id: owns
      name: Who owns what
      lastUpdated: 4 Nov
      note: "Example content — nothing here has been measured."
      entries:
        - line: Search on the support pages is owned by the content team, not the web team.
          owner: Content team
          date: 4 Nov
          cadence: reviewed quarterly, last checked 4 Nov
        - line: Dealer locator — who to ask about opening hours, pins and the dealer import.
          owner: Frontend team
          date: 1 Nov
          cadence: reviewed monthly, last checked 1 Nov
        - line: Campaign landing pages are owned by marketing after handover, not by this team.
          owner: Marketing
          date: 22 Oct
          cadence: reviewed quarterly, last checked 22 Oct
        - line: Product data and prices come from the shop system. The web team does not edit them.
          owner: Commerce team
          date: 18 Oct
          cadence: reviewed quarterly, last checked 18 Oct
        - line: Cookie and consent text is owned by legal. Wording changes go through them.
          owner: Legal
          date: 12 Oct
          cadence: reviewed quarterly, last checked 12 Oct
        - line: Analytics tagging is owned by the optimisation team.
          owner: Optimisation team
          date: 6 Oct
          cadence: reviewed monthly, last checked 6 Oct
  rule: Every row names an owner and says how often that thing is updated or checked. A row with no owner or no cadence does not belong on the list.
  footerNote: Written by the web team. Ask the owner named on the row.
```

## What the room decided

Both teams built the same front door, and that agreement is the spine: four cards, one column, in this order — What's changed, What we're testing, How we do things, Who owns what. Those names, exactly. Not three, not five, and no fifth card added later for whatever doesn't fit. If something doesn't fit one of the four names, that's a sign it doesn't belong on the site yet.

The single mixed feed from sprint one is retired. A shipped change, a live test and an ownership fact no longer sit in one list; each now lives inside the area it belongs to. "What's changed" gets narrower, not just renamed — it is site changes and closed tests only. That is a real change to what it meant last sprint, and the room should say plainly if it is not what it meant.

Where the two teams differed is the card itself. Team Cleo said the card carries only its name and its last-update date: no preview line, no row count, no owner — the card is a door, not a summary. Team Bo wanted one short line on each card saying what lives inside it. The page goes with Cleo. Four bare doors with a lot of white between them is the version an outsider reads in one glance, and a one-line description is the first thing that grows into a summary. Bo's argument stands on the record: a stranger to the team may not know from the name alone what "How we do things" contains.

Clicking a card is the only way in. No tabs, no filters, no dashboard counts, no unread badges, no notifications, no nested menu. There is no search box, on the front door or inside any of the four lists — you find things by knowing which of the four kinds of thing you're looking for, then reading down. Inside each area the row shape from sprint one survives unchanged: one line, an owner, a date, a cadence, newest first. The bar a row has to clear is still printed at the foot of the page rather than left in a brief.

One short line sits under the page title saying what the four areas are, kept from sprint one against Bo's preference for nothing above the list, and it is still the first thing to cut if the room disagrees.

## What was filled in

Every row is an example. Sprint one's rows have been sorted into the three areas they belong to, as Team Cleo's worked example set out. "How we do things" had no rows at all — the room said plainly that the real process notes have to come from the team — so five have been written here so the area can be read as an area rather than a named empty door. The dates, cadences and last-updated dates on the cards are filled in. Where a row would name a colleague, it names the team or the role instead.

## Left open

Whether "How we do things" needs a different row shape — it is reference, not a feed of dated events — was not settled. It uses the same row as the other three here. Who can add a row, whether old rows drop off the bottom, and whether a card can ever be reordered are also open. "Add a row" sits where it would sit and does nothing.

<!-- merged: day-check-121205 sprint 2 — Team Cleo, Team Bo -->
