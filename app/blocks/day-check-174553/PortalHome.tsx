/**
 * Front door with header, KPIs, ask panel, feed list, one opened post, owners table, working rules, and footer.
 */
"use client";

import React, { useState } from "react";
import AskPanel from "./AskPanel";
import DoorCard from "./DoorCard";

const KPIS = [
  { label: "Deployed this quarter", value: "48", note: "14 in the last 30 days" },
  { label: "Tests run", value: "31", note: "6 running right now" },
  { label: "Revenue through the site", value: "kr 61.4m", note: "Rolling 12 months" },
  { label: "Visitors", value: "1.92m", note: "Last 30 days" }
];

const DOORS = [
  { name: "What's changed", updated: "Last updated 2 hours ago" },
  { name: "What we're testing", updated: "Last updated 3 days ago" },
  { name: "How we do things", updated: "Last updated 2 weeks ago" },
  { name: "Who owns what", updated: "Last updated 5 days ago" }
];

const FEED = [
  { title: "My Husqvarna login moved", owner: "Jonas B", date: "12 May 2025", cadence: "Monthly", status: "Live", opened: true },
  { title: "Checkout now keeps basket lines after sign-in", owner: "Mira Vale", date: "9 May 2025", cadence: "Weekly", status: "Live" },
  { title: "Dealer locator test now shows nearest workshop first", owner: "Owen Mercer", date: "7 May 2025", cadence: "Weekly", status: "Running" },
  { title: "Service booking now confirms by email in one step", owner: "Leila Hart", date: "2 May 2025", cadence: "Monthly", status: "Live" },
  { title: "Product pages now hide unavailable sizes by default", owner: "Rosa Quinn", date: "29 Apr 2025", cadence: "Weekly", status: "Review" },
  { title: "Search synonyms updated for enduro spare parts", owner: "Ilan Cross", date: "24 Apr 2025", cadence: "Monthly", status: "Live" }
];

const OPEN_POST = {
  title: "My Husqvarna login moved",
  audience: "Anyone who signs in to My Husqvarna from the main website",
  summary: [
    "The sign-in entry point now opens from the account area in the top navigation instead of the old page in Support.",
    "Bookmarks to the old route still work for now, but they redirect before the form loads.",
    "Use the new entry point in guides and replies so people land in the right place first time."
  ],
  status: "Live from 12 May 2025",
  owner: "Jonas B",
  cadence: "Monthly",
  linkLabel: "Open the account sign-in guide"
};

const OWNERS = [
  { area: "Dealer locator", sub: "Map, opening hours, stock per shop", person: "Priya Raman", team: "Platform", phase: "Scale", cadence: "Weekly", open: "2" },
  { area: "Checkout and payment", sub: "Basket to receipt", person: "Martin Holt", team: "Commerce", phase: "Optimize", cadence: "Weekly", open: "3" },
  { area: "Product and category pages", sub: "Titles, images, copy, size guide", person: "Sofia Lindqvist", team: "Content", phase: "Optimize", cadence: "Weekly", open: "4" },
  { area: "Search", sub: "Query handling, synonyms, ranking", person: "Alina Kovács", team: "Search", phase: "Scale", cadence: "Monthly", open: "1" },
  { area: "Service booking", sub: "Booking flow and workshop hand-off", person: "Jonas Bregendahl", team: "Service digital", phase: "Explore", cadence: "Monthly", open: "2" },
  { area: "Tracking and measurement", sub: "Events, test setup, reporting", person: "Elias Thorne", team: "Analytics", phase: "Optimize", cadence: "Weekly", open: "1" },
  { area: "Design system", sub: "Components, tokens, accessibility", person: "Nadia Fournier", team: "Design", phase: "Scale", cadence: "Monthly", open: "0" }
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

function phaseClass(p) {
  return "tag tag-" + p.toLowerCase();
}

export default function PortalHome() {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <header className="site-header">
        <div className="page">
          <a className="wordmark" href="#">What's Changed</a>
          <nav className="site-nav" aria-label="Main">
            <a className="nav-link is-active" href="#feed" aria-current="page">The feed</a>
            <a className="nav-link" href="#owners">Who owns what</a>
            <a className="nav-link" href="#how">How we work</a>
            <a className="button button-primary" href="#opened-post">Open latest post</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="page">
          <section className="masthead">
            <h1>What changed on the website</h1>
            <p className="lede">Everything the web team is running, testing and learning. Every post names an owner and how often it is updated. If it does not save you from asking a colleague, it is not here.</p>
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

          <section className="section" aria-label="Ask about an initiative">
            <AskPanel />
          </section>

          <section className="section" id="doors">
            <div className="section-head">
              <h2>Four ways in</h2>
              <p className="lede">What's changed first — that is the one people check most.</p>
            </div>
            <ul className="door-list">
              {DOORS.map(function (d, i) {
                return <DoorCard key={d.name} index={i + 1} name={d.name} updated={d.updated} />;
              })}
            </ul>
          </section>

          <section className="section" id="feed">
            <div className="section-head">
              <h2>The feed</h2>
              <p className="lede">Newest first. The row stays short: headline, owner, date, cadence, and state.</p>
            </div>
            <div className="feed-list" role="list" aria-label="What's changed feed">
              {FEED.map(function (item) {
                return (
                  <a className="feed-row" href={item.opened ? "#opened-post" : "#"} key={item.title} role="listitem">
                    <div className="feed-main">
                      <h3>{item.title}</h3>
                      <div className="feed-meta">
                        <span>{item.owner}</span>
                        <span>{item.date}</span>
                        <span>{item.cadence}</span>
                      </div>
                    </div>
                    <div className="feed-side">
                      <span className="tag tag-quiet">{item.status}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          <section className="section" id="opened-post">
            <div className="section-head">
              <h2>Opened post</h2>
              <p className="lede">The full entry carries the context somebody would otherwise ask for.</p>
            </div>
            <article className="post-open panel-outline">
              <div className="post-open-head">
                <div>
                  <h1 className="post-title">{OPEN_POST.title}</h1>
                  <p className="post-meta">Owned by {OPEN_POST.owner} · Updated {OPEN_POST.cadence.toLowerCase()}</p>
                </div>
                <span className="tag tag-scale">{OPEN_POST.status}</span>
              </div>

              <dl className="post-fields">
                <div className="post-field">
                  <dt>Audience</dt>
                  <dd>{OPEN_POST.audience}</dd>
                </div>
                <div className="post-field">
                  <dt>Summary</dt>
                  <dd>
                    <div className="stack">
                      {OPEN_POST.summary.map(function (line) {
                        return <p key={line}>{line}</p>;
                      })}
                    </div>
                  </dd>
                </div>
                <div className="post-grid">
                  <div className="post-field">
                    <dt>Status or date</dt>
                    <dd>{OPEN_POST.status}</dd>
                  </div>
                  <div className="post-field">
                    <dt>Owner</dt>
                    <dd>{OPEN_POST.owner}</dd>
                  </div>
                  <div className="post-field">
                    <dt>How often it is updated</dt>
                    <dd>{OPEN_POST.cadence}</dd>
                  </div>
                  <div className="post-field">
                    <dt>Onward link</dt>
                    <dd><a href="#">{OPEN_POST.linkLabel}</a></dd>
                  </div>
                </div>
              </dl>
            </article>
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
                    <th scope="col">Phase</th>
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
                        <td><span className={phaseClass(o.phase)}>{o.phase}</span></td>
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
                {STEPS.map(function (s, i) {
                  const on = open === i;
                  return (
                    <li key={s.title}>
                      <button
                        type="button"
                        className="step-toggle"
                        aria-expanded={on}
                        onClick={function () { setOpen(on ? null : i); }}
                      >
                        <h3>{s.title}</h3>
                      </button>
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
            <h4>What's Changed</h4>
            <p>Kept by the web team. Clara Morrow, Content operations, keeps this site and the posting rules. Something wrong or missing on a page? Tell her and it gets fixed here, not in a thread.</p>
          </div>
          <div>
            <h4>On this site</h4>
            <ul>
              <li><a href="#feed">The feed</a></li>
              <li><a href="#owners">Who owns what</a></li>
              <li><a href="#how">How we work</a></li>
              <li><a href="#opened-post">Opened post</a></li>
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
