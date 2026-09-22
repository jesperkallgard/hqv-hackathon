/**
 * Portal home: masthead, four flat numbers, three phase entry points that filter the feed in place, the feed, the owners table, the working rules, header and footer.
 */
"use client";

import React, { useState } from "react";
import FeedRow from "./FeedRow";

const KPIS = [
  { label: "Deployed this quarter", value: "48", note: "14 in the last 30 days" },
  { label: "Tests run", value: "31", note: "6 running right now" },
  { label: "Revenue through the site", value: "kr 61.4m", note: "Rolling 12 months" },
  { label: "Visitors", value: "1.92m", note: "Last 30 days" }
];

const PHASES = [
  {
    key: "Explore",
    blurb: "We do not know yet. Research, a prototype, a question we are trying to answer."
  },
  {
    key: "Optimize",
    blurb: "It is live and we are testing it. A number is moving, or it is not."
  },
  {
    key: "Scale",
    blurb: "It won. We are rolling it out everywhere it belongs and handing it over."
  }
];

const POSTS = [
  {
    title: "Dealer locator moved to the new maps API",
    body: "The old provider stopped returning opening hours in November, so half the dealer cards showed nothing. Hours are back on every dealer. Load time on the locator dropped from 4.1s to 1.3s.",
    phase: "Scale",
    owner: "Priya Raman, Platform",
    date: "12 March",
    cadence: "Updated when the API changes"
  },
  {
    title: "Checkout now remembers the bike you configured",
    body: "People left to check a price and came back to an empty basket. The configuration is kept for 30 days. Completed checkouts are up 9% on returning visitors; no change on first-time visitors.",
    phase: "Optimize",
    owner: "Martin Holt, Commerce",
    date: "9 March",
    cadence: "Updated weekly while the test runs"
  },
  {
    title: "Test: shorter product titles on category pages",
    body: "Titles were being cut off on phones mid-word. We are running full titles against a 40-character version. Two weeks in, click-through is level \u2014 the shorter titles are not losing anything, so the argument is readability, not revenue.",
    phase: "Optimize",
    owner: "Sofia Lindqvist, Content",
    date: "6 March",
    cadence: "Updated weekly while the test runs"
  },
  {
    title: "Service booking: what people actually type in the free-text box",
    body: "We read 600 bookings. Two thirds of the free text is one of four things: brake noise, gears, a flat, or a date change. A four-option picker would cover them. Nothing is built yet \u2014 this is the case for building it.",
    phase: "Explore",
    owner: "Jonas Bregendahl, Service digital",
    date: "4 March",
    cadence: "Updated when the research moves"
  },
  {
    title: "Stock badge is honest again",
    body: "\u201cIn stock\u201d meant in stock in the warehouse, not in the shop you were looking at. It now reads per shop. Returns of the \u201cit was not there\u201d kind fell from 38 a week to 11.",
    phase: "Scale",
    owner: "Priya Raman, Platform",
    date: "28 February",
    cadence: "Updated monthly"
  },
  {
    title: "Payment page loses one field",
    body: "The company-name field was filled in by 3% of people and blocked 100% of them for a second. It is gone from private checkout and stays on business checkout. Drop-off on the payment step is down 2.4 points.",
    phase: "Optimize",
    owner: "Martin Holt, Commerce",
    date: "26 February",
    cadence: "Updated weekly while the test runs"
  },
  {
    title: "Search understands misspelt model names",
    body: "\u201cIntro7\u201d, \u201cintro 7\u201d and \u201cintro-7\u201d used to return nothing. They now return the bike. Zero-result searches fell from 7.8% to 2.1% of all searches.",
    phase: "Scale",
    owner: "Alina Kov\u00e1cs, Search",
    date: "21 February",
    cadence: "Updated monthly"
  },
  {
    title: "Where people give up on the size guide",
    body: "Nine sessions watched end to end. Everyone got to the height table and nobody scrolled past it to the inseam question, which is the one that decides the frame. We are drafting a version that asks inseam first.",
    phase: "Explore",
    owner: "Sofia Lindqvist, Content",
    date: "18 February",
    cadence: "Updated when the research moves"
  }
];

const OWNERS = [
  { area: "Dealer locator", sub: "Map, opening hours, stock per shop", person: "Priya Raman", team: "Platform", cadence: "Weekly", open: "2" },
  { area: "Checkout and payment", sub: "Basket to receipt", person: "Martin Holt", team: "Commerce", cadence: "Weekly", open: "3" },
  { area: "Product and category pages", sub: "Titles, images, copy, size guide", person: "Sofia Lindqvist", team: "Content", cadence: "Weekly", open: "4" },
  { area: "Search", sub: "Query handling, synonyms, ranking", person: "Alina Kov\u00e1cs", team: "Search", cadence: "Monthly", open: "1" },
  { area: "Service booking", sub: "Booking flow and workshop hand-off", person: "Jonas Bregendahl", team: "Service digital", cadence: "Monthly", open: "2" },
  { area: "Tracking and measurement", sub: "Events, test setup, reporting", person: "Elias Thorne", team: "Analytics", cadence: "Weekly", open: "1" },
  { area: "Design system", sub: "Components, tokens, accessibility", person: "Nadia Fournier", team: "Design", cadence: "Monthly", open: "0" }
];

const STEPS = [
  {
    title: "Something gets a phase, not a status",
    body: "Every initiative is Explore, Optimize or Scale. It moves forward when the question it was asking has been answered, and it can move back."
  },
  {
    title: "One owner, named",
    body: "An area has one person on it. If you cannot find the owner here, that is a bug in this page and worth telling us about."
  },
  {
    title: "A test runs for two weeks or until it is obvious",
    body: "We write down what we expect before it starts. A test that ends level is written up the same as one that wins."
  },
  {
    title: "A post says what changed and what it meant",
    body: "Not what was done. If a post does not save somebody from asking a colleague, it does not go up."
  },
  {
    title: "Every post carries a cadence",
    body: "Weekly while a test runs, monthly once it is live, and when it changes for everything else. An out-of-date post is worse than no post."
  }
];

export default function PortalHome() {
  const [phase, setPhase] = useState(null);

  const shown = phase ? POSTS.filter(function (p) { return p.phase === phase; }) : POSTS;

  function countFor(key) {
    return POSTS.filter(function (p) { return p.phase === key; }).length;
  }

  return (
    <div>
      <header className="site-header">
        <div className="page">
          <a className="wordmark" href="#">DBS 4 President</a>
          <nav className="site-nav" aria-label="Main">
            <a className="nav-link is-active" href="#feed" aria-current="page">Feed</a>
            <a className="nav-link" href="#owners">Who owns what</a>
            <a className="nav-link" href="#how">How we work</a>
            <a className="button button-primary" href="#">Post an update</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="page">
          <section className="masthead">
            <h1>What changed on the website</h1>
            <p className="lede">Everything the web team is running, testing and learning, newest first. Every post names an owner and how often it is updated. If it does not save you from asking a colleague, it is not here.</p>
          </section>

          <section aria-label="Where the site stands">
            <div className="kpi-panel">
              {KPIS.map(function (k) {
                return (
                  <div className="kpi" key={k.label}>
                    <p className="kpi-label">{k.label}</p>
                    <span className="kpi-value">{k.value}</span>
                    <p className="kpi-note">{k.note}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="section" id="feed">
            <div className="section-head">
              <h2>Explore, Optimize, Scale</h2>
              <p className="lede">The three phases every initiative moves through. Pick one to see what is in it.</p>
            </div>

            <div className="phase-grid">
              {PHASES.map(function (p) {
                const on = phase === p.key;
                return (
                  <button
                    type="button"
                    className="phase-card"
                    key={p.key}
                    aria-pressed={on}
                    onClick={function () { setPhase(on ? null : p.key); }}
                  >
                    <h3>{p.key}</h3>
                    <p>{p.blurb}</p>
                    <span className="phase-count">{countFor(p.key)} posts</span>
                  </button>
                );
              })}
            </div>

            <div className="filter-bar">
              <span className="filter-label">Showing</span>
              <span className="tag tag-quiet">{phase ? phase + " \u2014 " + shown.length + " posts" : "Everything \u2014 " + POSTS.length + " posts"}</span>
              <button
                type="button"
                className="button button-quiet"
                onClick={function () { setPhase(null); }}
                aria-disabled={phase ? undefined : true}
                disabled={!phase}
              >
                Clear phase
              </button>
            </div>

            {shown.length === 0 ? (
              <div className="empty">
                <h3>Nothing is in {phase} this week.</h3>
                <p>A post moves here the moment its owner changes the phase on it. Until then, the work sits in one of the other two.</p>
                <button type="button" className="button button-outline" onClick={function () { setPhase(null); }}>Show everything</button>
              </div>
            ) : (
              <ul className="feed">
                {shown.map(function (p) {
                  return <FeedRow key={p.title} post={p} />;
                })}
              </ul>
            )}
          </section>

          <section className="section" id="owners">
            <div className="section-head">
              <h2>Who owns what</h2>
              <p className="lede">One name per area. Ask them, not the channel.</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Area</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Team</th>
                    <th scope="col">Updated</th>
                    <th scope="col" className="num">Open items</th>
                  </tr>
                </thead>
                <tbody>
                  {OWNERS.map(function (o) {
                    return (
                      <tr key={o.area}>
                        <td>
                          <span className="area">{o.area}</span>
                          <span className="sub">{o.sub}</span>
                        </td>
                        <td>{o.person}</td>
                        <td>{o.team}</td>
                        <td>{o.cadence}</td>
                        <td className="num">{o.open}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section className="section" id="how">
            <div className="section-head">
              <h2>How we work</h2>
              <p className="lede">Five rules. They explain why a post looks the way it does.</p>
            </div>
            <div className="two-col">
              <ol className="steps">
                {STEPS.map(function (s) {
                  return (
                    <li key={s.title}>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </li>
                  );
                })}
              </ol>
              <div className="panel stack">
                <h3>What belongs on this site</h3>
                <p className="small">A change somebody outside the team would notice. A test result, including the ones that ended level. A decision about who owns something. A number that people keep asking for.</p>
                <h3>What does not</h3>
                <p className="small">A task that has been started and has nothing to say yet. Anything written to show how busy we are. This is not a status report.</p>
                <div className="button-row">
                  <a className="button button-outline" href="#">Read the posting rules</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="page">
          <div>
            <h4>DBS 4 President</h4>
            <p>Kept by the web team. Nadia Fournier, Design, owns this site and the posting rules. Something wrong or missing on a page? Tell her and it gets fixed here, not in a thread.</p>
          </div>
          <div>
            <h4>On this site</h4>
            <ul>
              <li><a href="#feed">Feed</a></li>
              <li><a href="#owners">Who owns what</a></li>
              <li><a href="#how">How we work</a></li>
            </ul>
          </div>
          <div>
            <h4>Numbers</h4>
            <ul>
              <li>Deploys and tests: from the release log, nightly.</li>
              <li>Revenue and visitors: rolling, updated every Monday at 07:00.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
