/**
 * Header nav no longer wraps awkwardly and scrolls horizontally at 390px; the lead KPI is now visibly the biggest thing, filled in navy; filters carry live counts and the selected one is filled; the search field has a drawn icon inside it; How we work is numbered rules instead of four identical cards; owner rows use a real three-column grid with icons; all inline style objects removed in favour of scale classes.
 */
"use client";

import React, { useState } from "react";
import FeedRow from "./FeedRow";

function IconHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="2.4" />
      <path d="M10 2v3.2M10 14.8V18M2 10h3.2M14.8 10H18" />
    </svg>
  );
}

function IconDoor({ name }) {
  if (name === "Optimize") {
    return (
      <svg className="door-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19V9M10 19V5M16 19v-6M22 19H2" />
      </svg>
    );
  }
  if (name === "Explore") {
    return (
      <svg className="door-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l5 5" />
      </svg>
    );
  }
  return (
    <svg className="door-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h16M7 20V12M12 20V7M17 20v-5" />
      <path d="M17 4l3 3-3 3" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.2 13.2L17.5 17.5" />
    </svg>
  );
}

function IconPerson() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="5.5" r="2.6" />
      <path d="M2.8 13.5c.7-2.4 2.7-3.7 5.2-3.7s4.5 1.3 5.2 3.7" />
    </svg>
  );
}

function IconRepeat() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 7a5.5 5.5 0 0 1 9.4-3.4L13.5 5" />
      <path d="M13.5 9a5.5 5.5 0 0 1-9.4 3.4L2.5 11" />
      <path d="M13.5 2v3h-3M2.5 14v-3h3" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="8" r="6.2" />
      <path d="M8 5v3.6M8 11h.01" />
    </svg>
  );
}

export default function KnowledgehubHome({
  siteName,
  nav = [],
  kpis = [],
  doors = [],
  feed = [],
  owners = [],
  howWeWork = [],
  footerLine,
  footerMeta,
}) {
  const [state, setState] = useState("all");
  const [formOpen, setFormOpen] = useState(false);
  const [draft, setDraft] = useState({ what: "", owner: "", freq: "" });
  const [touched, setTouched] = useState(false);

  const states = [
    { key: "all", label: "Everything" },
    { key: "shipped", label: "Shipped" },
    { key: "testing", label: "Testing" },
    { key: "planned", label: "Planned" },
  ];

  const countFor = (key) =>
    key === "all" ? feed.length : feed.filter((r) => r.state === key).length;

  const rows = state === "all" ? feed : feed.filter((r) => r.state === state);
  const missing = touched && !draft.what.trim();

  return (
    <div className="page">
      <header className="site-header">
        <div className="wrap site-header-inner">
          <a className="site-name" href="#">
            <IconHub />
            {siteName}
          </a>
          <nav className="site-nav" aria-label="Sections">
            {nav.map((item, i) => (
              <a
                key={item.label}
                className="nav-link"
                href={item.href}
                aria-current={i === 0 ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section className="kpi-band" aria-labelledby="kpi-h">
          <div className="kpi-band-head">
            <h1 id="kpi-h">{siteName}</h1>
            <p className="meta">Open to anyone at Husqvarna, whatever your role.</p>
          </div>
          <div className="kpi-grid">
            {kpis.map((k) => (
              <div className="kpi" key={k.label}>
                <div className="kpi-value">
                  {k.value}
                  {k.unit ? <span className="kpi-unit">{k.unit}</span> : null}
                </div>
                <div className="kpi-label">{k.label}</div>
                <div className="kpi-meta">
                  <span className="kpi-delta">{k.delta}</span> {k.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="doors-h">
          <div className="section-head">
            <h2 id="doors-h">Three ways in</h2>
          </div>
          <div className="door-grid">
            {doors.map((d) => (
              <a className="door" href={d.href} key={d.name}>
                <IconDoor name={d.name} />
                <h3>{d.name}</h3>
                <p>{d.text}</p>
                <span className="door-count">
                  <IconArrow />
                  {d.count}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="ask-h">
          <div className="ask">
            <label htmlFor="ask-input" id="ask-h">What are you looking for?</label>
            <div className="field">
              <span className="ask-input-wrap">
                <IconSearch />
                <input
                  id="ask-input"
                  type="search"
                  placeholder="Who owns checkout? What did the banner test show?"
                />
              </span>
            </div>
            <button type="button" className="button button-secondary">Ask</button>
          </div>
        </section>

        <section className="section" aria-labelledby="feed-h">
          <div className="section-head">
            <h2 id="feed-h">What changed</h2>
            <p className="section-note">Newest first. Every row names an owner and how often it updates.</p>
          </div>

          <div className="filter-bar">
            {states.map((s) => (
              <button
                key={s.key}
                type="button"
                className="filter"
                aria-pressed={state === s.key}
                onClick={() => setState(s.key)}
              >
                {s.label}
                <span className="filter-count">{countFor(s.key)}</span>
              </button>
            ))}
            <span className="filter-spacer" />
            <button
              type="button"
              className="button button-primary"
              onClick={() => setFormOpen((v) => !v)}
              aria-expanded={formOpen}
            >
              <IconPlus />
              Post an update
            </button>
          </div>

          {formOpen ? (
            <div className="panel stack-4 post-form">
              <h3>Post an update</h3>
              <div className="field">
                <label htmlFor="f-what">What changed</label>
                <textarea
                  id="f-what"
                  value={draft.what}
                  aria-invalid={missing ? "true" : undefined}
                  onChange={(e) => setDraft({ ...draft, what: e.target.value })}
                  placeholder="Say what changed and what it meant."
                />
                {missing ? (
                  <span className="error">
                    <IconAlert />
                    A post needs a sentence saying what changed.
                  </span>
                ) : (
                  <span className="hint">One or two short sentences. No marketing language.</span>
                )}
              </div>
              <div className="panel-grid">
                <div className="field">
                  <label htmlFor="f-owner">Owner</label>
                  <input
                    id="f-owner"
                    type="text"
                    value={draft.owner}
                    onChange={(e) => setDraft({ ...draft, owner: e.target.value })}
                    placeholder="Name, team"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-freq">How often it updates</label>
                  <input
                    id="f-freq"
                    type="text"
                    value={draft.freq}
                    onChange={(e) => setDraft({ ...draft, freq: e.target.value })}
                    placeholder="Weekly, monthly, on release"
                  />
                </div>
              </div>
              <div className="button-row">
                <button type="button" className="button button-secondary" onClick={() => setTouched(true)}>
                  Publish
                </button>
                <button type="button" className="button button-quiet" onClick={() => setFormOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          ) : null}

          {rows.length ? (
            <ul className="feed">
              {rows.map((r) => (
                <FeedRow key={r.title} {...r} />
              ))}
            </ul>
          ) : (
            <div className="empty">
              <h3>Nothing is at this state right now.</h3>
              <p>A row moves here the moment its owner changes the state on the post. Pick Everything to see the rest of the week.</p>
              <button type="button" className="button button-secondary" onClick={() => setState("all")}>
                Show everything
              </button>
            </div>
          )}
        </section>

        <section className="section" aria-labelledby="owners-h">
          <div className="section-head">
            <h2 id="owners-h">Who owns what</h2>
            <p className="section-note">One name per area. Ask them before you ask around.</p>
          </div>
          <ul className="owner-list">
            {owners.map((o) => (
              <li className="owner-row" key={o.area}>
                <span className="owner-area">{o.area}</span>
                <span className="owner-cell">
                  <IconPerson />
                  {o.owner}
                </span>
                <span className="owner-cell owner-freq">
                  <IconRepeat />
                  Updated {o.frequency}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="how-h">
          <div className="section-head">
            <h2 id="how-h">How we work</h2>
            <p className="section-note">Four rules, and none of them are about reporting upward.</p>
          </div>
          <div className="panel-grid">
            {howWeWork.map((h, i) => (
              <div className="panel rule-panel" key={h.heading}>
                <span className="rule-number" aria-hidden="true">{i + 1}</span>
                <h3>{h.heading}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap site-footer-inner">
          <strong>{footerLine}</strong>
          <span>{footerMeta}</span>
        </div>
      </footer>
    </div>
  );
}
