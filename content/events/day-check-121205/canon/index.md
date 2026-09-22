---
title: "The front door"
ingress: "Four cards in one column — What's changed, What we're testing, How we do things, Who owns what. An outsider reads the four names and knows where to click. A row opens into a post carrying seven things."
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
        - headline: My Husqvarna login moved
          owner: Jonas B
          date: 3 Nov
          cadence: updated monthly
          audience: Dealers using My Husqvarna
          summary:
            - The login for My Husqvarna moved to a new page.
            - Old bookmarks and saved links to the old login now redirect automatically.
            - Nothing else about the account changed — same password, same access.
          status: Live since 3 Nov
          linkOnward: Open My Husqvarna login
          note: "The audience, summary, status detail and link are our best write-up for this example, not confirmed by Jonas — everything else (headline, owner, cadence) was given to us directly."
        - headline: Homepage banner swapped to the autumn campaign
          owner: Web team
          date: 12 Nov
          cadence: updated 12 Nov
          audience: Anyone who links to the homepage from a campaign
          summary:
            - The homepage banner now carries the autumn campaign instead of the summer one.
            - The old summer links still work; they land on the campaign archive.
            - Nothing below the banner moved.
          status: Live since 12 Nov
          linkOnward: Open the homepage
        - headline: Dealer locator moved to the new map API
          owner: Frontend team
          date: 11 Nov
          cadence: checked weekly, last checked this week
          audience: Anyone who sends customers to the dealer locator
          summary:
            - The locator draws its map from the new provider.
            - Pins and opening hours come from the same dealer import as before.
            - The map loads quicker on a phone; nothing about the results changed.
          status: Live since 11 Nov
          linkOnward: Open the dealer locator
        - headline: Checkout error copy changed after complaints
          owner: Optimisation team
          date: 8 Nov
          cadence: updated 8 Nov
          audience: Support, and anyone handling payment complaints
          summary:
            - The payment step now says which detail is wrong instead of "something went wrong".
            - Fewer people abandon on the payment step.
            - No change to the payment provider or the order flow.
          status: Live since 8 Nov
          linkOnward: Read the checkout copy note
        - headline: Product filter on accessories keeps your choice when you go back
          owner: Frontend team
          date: 5 Nov
          cadence: updated 5 Nov
          audience: Anyone demoing the accessories listing
          summary:
            - Going back from a product now returns you to the filter you had set.
            - Before this, the listing reset to everything.
            - The filters themselves are unchanged.
          status: Live since 5 Nov
          linkOnward: Open the accessories listing
        - headline: Cookie banner reworded
          owner: Web team
          date: 29 Oct
          cadence: updated 29 Oct
          audience: Anyone asked about consent numbers
          summary:
            - The banner wording was shortened and the buttons made equal weight.
            - Consent rate went up, nothing else changed.
            - Legal own the wording; changes still go through them.
          status: Live since 29 Oct
          linkOnward: Read the consent wording
        - headline: The shorter contact form won its test
          owner: Optimisation team
          date: 27 Oct
          cadence: closed 27 Oct
          audience: Anyone pointing customers at the contact form
          summary:
            - The short form was tested against the long one for three weeks.
            - The short form won; it is now the only form.
            - Four fields were dropped, including company size.
          status: Closed 27 Oct
          linkOnward: Read the test write-up
        - headline: Page speed work on the product pages
          owner: Frontend team
          date: 20 Oct
          cadence: updated 20 Oct
          audience: Anyone who reports slow product pages
          summary:
            - The largest image on a product page now loads later.
            - First paint is quicker, most visibly on a phone.
            - Nothing about the page content changed.
          status: Live since 20 Oct
          linkOnward: Open a product page
    - id: testing
      name: What we're testing
      lastUpdated: 10 Nov
      note: "Example content — nothing here has been measured."
      entries:
        - headline: Checkout button colour, live since 10 Nov
          owner: Optimisation team
          date: 10 Nov
          cadence: read again when the test closes, 24 Nov
          audience: Anyone asked why the checkout button looks different
          summary:
            - Half of visitors see the checkout button in the accent colour, half in the old one.
            - We are watching how many people finish the payment step.
            - Nothing else on the checkout page changed.
          status: Live, closes 24 Nov
          linkOnward: Open the test plan
        - headline: Homepage hero, new copy against old
          owner: Optimisation team
          date: 6 Nov
          cadence: read again 30 Nov
          audience: Marketing, and anyone writing homepage copy
          summary:
            - Two versions of the hero headline are running against each other.
            - We are watching clicks through to the product listing.
            - Runs until end of month.
          status: Live, closes 30 Nov
          linkOnward: Open the test plan
        - headline: Dealer locator results order
          owner: Optimisation team
          date: 4 Nov
          cadence: read again 18 Nov
          audience: Dealer support, and anyone asked why a dealer ranks where it does
          summary:
            - Results are ordered nearest first for half of visitors, most stock first for the other half.
            - We are watching how often somebody clicks through to a dealer.
            - The pins and the dealer data are the same in both.
          status: Live, closes 18 Nov
          linkOnward: Open the test plan
        - headline: Shorter delivery copy on the basket page
          owner: Optimisation team
          date: 2 Nov
          cadence: read again 23 Nov
          audience: Support, and anyone answering delivery questions
          summary:
            - The basket shows two lines about delivery instead of a paragraph.
            - We are watching whether fewer people leave the basket.
            - The delivery terms themselves are unchanged.
          status: Live, closes 23 Nov
          linkOnward: Open the test plan
        - headline: Newsletter sign-up moved below the footer links
          owner: Web team
          date: 30 Oct
          cadence: read again 27 Nov
          audience: Anyone who owns a newsletter target
          summary:
            - On article pages the sign-up now sits below the footer links instead of mid-article.
            - We are watching sign-ups per article read.
            - The form and the list are the same.
          status: Live, closes 27 Nov
          linkOnward: Open the test plan
    - id: how
      name: How we do things
      lastUpdated: 7 Nov
      note: "Example content — nothing here has been measured. The real process notes still have to come from the team."
      entries:
        - headline: How a test gets signed off before it goes live
          owner: Optimisation team
          date: 7 Nov
          cadence: reviewed quarterly, last checked 7 Nov
          audience: Anyone who wants a test run on the site
          summary:
            - A test needs a written question, a measure and an owner before it starts.
            - The optimisation team signs it off; nobody else has to.
            - Sign-off usually takes two working days.
          status: Current process
          linkOnward: Open the test request form
        - headline: How a page request gets picked up, and how long it usually waits
          owner: Web team
          date: 3 Nov
          cadence: reviewed quarterly, last checked 3 Nov
          audience: Anyone waiting on a page change
          summary:
            - Requests come in through the web team inbox and are read every morning.
            - Small copy changes go out the same week.
            - Anything needing a new template waits for the next planning round.
          status: Current process
          linkOnward: Open the request inbox
        - headline: How a decision gets made when two teams want different things on the same page
          owner: Web team
          date: 28 Oct
          cadence: reviewed quarterly, last checked 28 Oct
          audience: Anyone in a disagreement about a page
          summary:
            - The page owner decides, and writes down what was decided.
            - If there is no page owner, the web team lead decides that first.
            - Decisions are recorded here, in Who owns what.
          status: Current process
          linkOnward: Open Who owns what
        - headline: What has to be true before anything ships on a Friday
          owner: Frontend team
          date: 21 Oct
          cadence: reviewed quarterly, last checked 21 Oct
          audience: Anyone asking for a Friday release
          summary:
            - Nothing touching checkout or login ships on a Friday.
            - Everything else needs somebody on call until Monday morning.
            - The release is announced in What's changed the same day.
          status: Current process
          linkOnward: Open the release checklist
        - headline: How a test result is written up, and where it is written down
          owner: Optimisation team
          date: 14 Oct
          cadence: reviewed quarterly, last checked 14 Oct
          audience: Anyone who has run a test
          summary:
            - A finished test gets three lines: what changed, what it meant, what happens next.
            - The write-up goes in What's changed, not in a slide deck.
            - The raw numbers stay in the analytics tool.
          status: Current process
          linkOnward: Open the write-up template
    - id: owns
      name: Who owns what
      lastUpdated: 4 Nov
      note: "Example content — nothing here has been measured."
      entries:
        - headline: Search on the support pages is owned by the content team
          owner: Content team
          date: 4 Nov
          cadence: reviewed quarterly, last checked 4 Nov
          audience: Anyone reporting a bad support search result
          summary:
            - Support search is owned by the content team, not the web team.
            - They set the synonyms and the promoted results.
            - The web team only owns the box it sits in.
          status: Current owner
          linkOnward: Ask the content team
        - headline: Dealer locator — opening hours, pins and the dealer import
          owner: Frontend team
          date: 1 Nov
          cadence: reviewed monthly, last checked 1 Nov
          audience: Dealers and dealer support
          summary:
            - Opening hours and addresses come from the dealer import, run nightly.
            - The frontend team owns the import and the map.
            - A wrong address is fixed in the dealer system, not on the website.
          status: Current owner
          linkOnward: Open the dealer system
        - headline: Campaign landing pages are owned by marketing after handover
          owner: Marketing
          date: 22 Oct
          cadence: reviewed quarterly, last checked 22 Oct
          audience: Anyone asking for a change to a campaign page
          summary:
            - The web team builds a campaign page and hands it over at launch.
            - After handover marketing own the content and the links.
            - Template changes still come back to the web team.
          status: Current owner
          linkOnward: Ask marketing
        - headline: Product data and prices come from the shop system
          owner: Commerce team
          date: 18 Oct
          cadence: reviewed quarterly, last checked 18 Oct
          audience: Anyone reporting a wrong price or spec
          summary:
            - Prices, specs and stock are read from the shop system.
            - The web team does not edit them.
            - A wrong price is fixed at source and appears on the site within the hour.
          status: Current owner
          linkOnward: Open the shop system
        - headline: Cookie and consent text is owned by legal
          owner: Legal
          date: 12 Oct
          cadence: reviewed quarterly, last checked 12 Oct
          audience: Anyone wanting to change the banner
          summary:
            - Legal own every word in the cookie banner and the consent page.
            - Wording changes go through them before anything is built.
            - The web team owns where the banner sits and how it behaves.
          status: Current owner
          linkOnward: Ask legal
        - headline: Analytics tagging is owned by the optimisation team
          owner: Optimisation team
          date: 6 Oct
          cadence: reviewed monthly, last checked 6 Oct
          audience: Anyone who needs a new event tracked
          summary:
            - Tags, events and goals are set by the optimisation team.
            - New tracking is added with the change that needs it, not afterwards.
            - Untagged releases are the usual reason a number is missing.
          status: Current owner
          linkOnward: Ask the optimisation team
  rule: Every post carries seven things — headline, audience, a three-line summary, a status or date, an owner by name, how often it is updated, and one link onward. A post missing any of the seven does not go up.
  footerNote: Written by the web team. Ask the owner named on the post.
```

## What the room decided

Both teams built the same front door, and that agreement is the spine: four cards, one column, in this order — What's changed, What we're testing, How we do things, Who owns what. Those names, exactly. Not three, not five, and no fifth card added later for whatever doesn't fit. If something doesn't fit one of the four names, that's a sign it doesn't belong on the site yet.

The single mixed feed from sprint one is retired. A shipped change, a live test and an ownership fact no longer sit in one list; each now lives inside the area it belongs to. "What's changed" gets narrower, not just renamed — it is site changes and closed tests only. That is a real change to what it meant last sprint, and the room should say plainly if it is not what it meant.

Where the two teams differed on the front door was the card itself. Team Cleo said the card carries only its name and its last-update date: no preview line, no row count, no owner — the card is a door, not a summary. Team Bo wanted one short line on each card saying what lives inside it. The page goes with Cleo. Four bare doors with a lot of white between them is the version an outsider reads in one glance, and a one-line description is the first thing that grows into a summary. Bo's argument stands on the record: a stranger to the team may not know from the name alone what "How we do things" contains.

Clicking a card is the only way in. No tabs, no filters, no dashboard counts, no unread badges, no notifications, no nested menu. There is no search box, on the front door or inside any of the four lists — you find things by knowing which of the four kinds of thing you're looking for, then reading down.

## Seven things on every post

Team Dag and Team Ada agreed on the same seven, in the same order: headline, audience, a three-line summary, a status or date, an owner by name, how often it is updated, and one link onward. A post missing any of the seven does not go up. This tightens the sprint-two rule — owner and cadence — rather than replacing it, and the bar is still printed at the foot of every view rather than left in a brief.

The list shows three of the seven and no more: headline, owner, date. That is Team Dag's rule, and it is why the row shape from sprint one survives unchanged. The cadence line stays beside the owner and date, because a reader scanning a list needs to know how stale a thing is before they trust it. The other four — audience, the summary, status detail and the link onward — wait behind one click.

Team Ada wrote the page behind the click, and the page is built the way Ada described it: back link above the headline, small, not competing with it; headline in navy; audience directly under it as a plain sentence with no "Audience:" label in front of it; the three lines each their own paragraph with air between them rather than run together; status, owner and cadence together near the bottom as one plain line — "Live since 3 Nov. Owned by Jonas B. Updated monthly." — not a table; and the one link onward last, on its own line, as a plain link and not a button.

Exactly one link onward. Never zero, never several. No comments, no reactions, no "was this useful", no version history, no related posts, no tags, no breadcrumb beyond the one back link.

The two teams wrote the My Husqvarna example differently. Dag's version says the login moved to a new page and old bookmarks redirect; Ada's says login now runs through the new Husqvarna ID system and you reset your password once. The page carries Dag's, with Dag's audience line and Dag's link onward — it is the version that says what changed without asking the reader to do anything, and Dag was explicit about which parts came from Jonas and which did not. Ada's version argued that the reader's first question is what they have to do next, and that the link onward should therefore be "Reset your password". If the reset is real, Ada is right and the link should change.

Headlines say the change the way the reader would say it — "My Husqvarna login moved", not the name of the project that made it happen. The summary says what changed and what it meant, in that order, not the steps it took to get there.

## What was filled in

Every post except the My Husqvarna one is an example. Sprint one's rows have been sorted into the three areas they belong to and given the four fields they were missing — audience, three lines, status detail and a link onward. "How we do things" had no rows at all; the room said plainly that the real process notes have to come from the team, so five have been written here so the area can be read as an area rather than a named empty door. Dates, cadences and last-updated dates are filled in. Where a post would name a colleague it names the team or the role instead — Jonas B is the one name on the page, and it came from the room.

On the My Husqvarna post, the note Team Dag wrote is on the page: the audience, summary, status detail and link are the team's best write-up, not confirmed by Jonas. Headline, owner and cadence were given directly.

## Left open

Whether "How we do things" needs a different row shape — it is reference, not a feed of dated events — was not settled. It uses the same row as the other three here, and the status on those posts reads "Current process" rather than a date. Who can add a post, whether old posts drop off the bottom, and whether a card can ever be reordered are also open. "Add a post" sits where it would sit and does nothing.

One short line sits under the page title saying what the four areas are, kept from sprint one against Bo's preference for nothing above the list, and it is still the first thing to cut if the room disagrees.

<!-- merged: day-check-121205 sprint 3 — Team Dag, Team Ada -->
