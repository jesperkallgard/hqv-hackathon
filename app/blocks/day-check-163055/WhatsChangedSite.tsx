/**
 * Rebuilt the page frame so one thing is clearly the biggest: the h1 runs to 56px against a heavy navy rule, with the actions sitting on its baseline instead of stacked under it. The feed became a two-column list — date and pill in a fixed left gutter, post in the measure — which reads as a chronology on a projector and stacks date-above-title at 390px. Nav items are now real pills, the current one filled navy. Filter pills carry live counts and a drawn filter icon, and the empty state is reachable by filtering. How-we-work items are numbered in orange. Footer nav became working buttons that switch view, under a labelled heading. All icons remain inline SVG on currentColor. No content, name, number or heading changed.
 */
"use client";

import React, { useState } from "react";

function IconUser() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="6.5" r="3.2" />
      <path d="M3.8 16.5c1-3 3.3-4.5 6.2-4.5s5.2 1.5 6.2 4.5" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="7.2" />
      <path d="M10 6v4.3l2.8 1.7" />
    </svg>
  );
}

function IconArea() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden="true">
      <rect x="3" y="3.5" width="14" height="13" rx="2" />
      <path d="M3 7.5h14" />
    </svg>
  );
}

function IconFilter() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 5.5h14M5.5 10h9M8.5 14.5h3" />
    </svg>
  );
}

function IconPen() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M13.4 3.6l3 3L7.8 15.2 4 16l.8-3.8z" />
      <path d="M12 5l3 3" />
    </svg>
  );
}

function IconMark() {
  return (
    <svg className="site-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 15.5l5-6 4 3.5 5.5-7.5" />
      <path d="M21 5.5h-3.5V9" />
    </svg>
  );
}

function tagClass(kind) {
  if (kind === "In testing") return "tag tag-testing";
  if (kind === "Shipped") return "tag tag-shipped";
  if (kind === "Ownership") return "tag tag-ownership";
  return "tag tag-paused";
}

function Tag({ kind }) {
  return (
    <span className={tagClass(kind)}>
      <span className="tag-dot" />
      {kind}
    </span>
  );
}

function FeedList({ items }) {
  if (items.length === 0) {
    return (
      <div className="empty">
        <h3>Nothing of this kind yet</h3>
        <p>
          A post appears here the moment somebody writes one. If you know something
          that would save a colleague from asking, write it.
        </p>
        <a className="button button-secondary" href="#">
          <IconPen />
          Post an update
        </a>
      </div>
    );
  }

  return (
    <ol className="feed">
      {items.map((item) => (
        <li className="feed-item" key={item.title}>
          <div className="feed-aside">
            <Tag kind={item.kind} />
            <span className="feed-date">{item.date}</span>
          </div>
          <div>
            <h3>{item.title}</h3>
            <p className="feed-body">{item.body}</p>
            <div className="feed-foot">
              <span>
                <IconUser />
                <span className="owner-name">{item.owner}</span>
              </span>
              <span>
                <IconArea />
                {item.area}
              </span>
              <span>
                <IconClock />
                {item.cadence}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function WhatsChangedSite({
  siteName,
  nav,
  feedTitle,
  feedLede,
  filters,
  feed,
  ownersTitle,
  ownersLede,
  owners,
  howTitle,
  howLede,
  howItems,
  footerLine,
  footerContact,
  footerLinks,
}) {
  const [view, setView] = useState(nav[0].id);
  const [filter, setFilter] = useState("All");

  const shown = filter === "All" ? feed : feed.filter((f) => f.kind === filter);
  const countFor = (f) => (f === "All" ? feed.length : feed.filter((x) => x.kind === f).length);
  const viewForLink = (label) => {
    const match = nav.find((n) => n.label === label);
    return match ? match.id : nav[0].id;
  };

  return (
    <div className="page">
      <header className="site-header">
        <div className="wrap site-header-inner">
          <a
            className="site-name"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setView(nav[0].id);
            }}
          >
            <IconMark />
            {siteName}
          </a>
          <nav className="site-nav" aria-label="Main">
            {nav.map((n) => (
              <a
                key={n.id}
                className="nav-link"
                href="#"
                aria-current={view === n.id ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  setView(n.id);
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="wrap">
          {view === "feed" && (
            <>
              <div className="page-head">
                <div>
                  <h1>{feedTitle}</h1>
                  <p className="lede">{feedLede}</p>
                </div>
                <div className="button-row">
                  <a
                    className="button button-secondary"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setView("owners");
                    }}
                  >
                    Who owns what
                  </a>
                  <a className="button button-primary" href="#">
                    <IconPen />
                    Post an update
                  </a>
                </div>
              </div>

              <div className="section-head">
                <h2>Newest first</h2>
                <p className="section-note">
                  {shown.length} {shown.length === 1 ? "post" : "posts"}
                </p>
              </div>

              <div className="filter-bar" role="group" aria-label="Filter the feed">
                <p className="filter-label">
                  <IconFilter />
                  <span className="visually-hidden">Filter</span>
                </p>
                {filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className="filter"
                    aria-pressed={filter === f}
                    onClick={() => setFilter(f)}
                  >
                    {f}
                    <span className="filter-count">{countFor(f)}</span>
                  </button>
                ))}
              </div>

              <div className="section">
                <FeedList items={shown} />
              </div>
            </>
          )}

          {view === "owners" && (
            <>
              <div className="page-head">
                <div>
                  <h1>{ownersTitle}</h1>
                  <p className="lede">{ownersLede}</p>
                </div>
                <div className="button-row">
                  <a
                    className="button button-secondary"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setView("how");
                    }}
                  >
                    How we work
                  </a>
                  <a className="button button-primary" href="#">
                    Claim an area
                  </a>
                </div>
              </div>

              <div className="section-head">
                <h2>Every area</h2>
                <p className="section-note">{owners.length} areas</p>
              </div>

              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Area</th>
                      <th scope="col">Owner</th>
                      <th scope="col">Updated</th>
                      <th scope="col">State</th>
                      <th scope="col" className="num">
                        Last change
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {owners.map((o) => (
                      <tr key={o.area}>
                        <td>
                          <span className="area-name">{o.area}</span>
                          <span className="area-note">{o.note}</span>
                        </td>
                        <td>
                          <span className="owner-name">{o.owner}</span>
                          <span className="area-note">{o.role}</span>
                        </td>
                        <td className="nowrap">{o.cadence}</td>
                        <td>
                          <Tag kind={o.state} />
                        </td>
                        <td className="num nowrap">{o.lastChange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="section">
                <div className="panel panel-flow">
                  <div>
                    <h3>An area missing from this table</h3>
                    <p>
                      Every part of the site belongs to somebody. If you work on
                      something that is not listed, add the row yourself or ask the
                      site keeper to add it.
                    </p>
                  </div>
                  <a className="button button-secondary" href="#">
                    Claim an area
                  </a>
                </div>
              </div>
            </>
          )}

          {view === "how" && (
            <>
              <div className="page-head">
                <div>
                  <h1>{howTitle}</h1>
                  <p className="lede">{howLede}</p>
                </div>
                <div className="button-row">
                  <a
                    className="button button-secondary"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setView("feed");
                    }}
                  >
                    Back to the feed
                  </a>
                  <a className="button button-primary" href="#">
                    <IconPen />
                    Post an update
                  </a>
                </div>
              </div>

              <ul className="qa">
                {howItems.map((h) => (
                  <li key={h.q}>
                    <div>
                      <h3>{h.q}</h3>
                      {h.a.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>

      <footer className="site-footer">
        <div className="wrap site-footer-inner">
          <div>
            <p>
              <strong>{footerLine}</strong>
            </p>
            <p>{footerContact}</p>
          </div>
          <div>
            <p className="footer-head">On this site</p>
            <ul className="footer-nav">
              {footerLinks.map((l) => (
                <li key={l}>
                  <button type="button" onClick={() => setView(viewForLink(l))}>
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
