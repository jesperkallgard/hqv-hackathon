/**
 * The whole site in one page: header, the four bare doors in one column, each area's newest-first list behind a door, and now the single post behind a row. Three views, one component.
 */
"use client";

import { useState } from "react";
import EntryRow from "./EntryRow";
import PostView from "./PostView";

function AreaCard({ name, lastUpdated, onOpen }) {
  return (
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onOpen();
        }}
        className="card split"
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "var(--space-4)",
          padding: "var(--space-8)",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-2xl)",
            lineHeight: "var(--leading-tight)",
            color: "var(--heading-ink)",
          }}
        >
          {name}
        </span>
        <span className="small muted">Last updated {lastUpdated}</span>
      </a>
    </li>
  );
}

export default function FrontDoorPage({
  title = "The front door",
  standfirst,
  exampleNote,
  areas = [],
  rule,
  footerNote,
}) {
  const [openId, setOpenId] = useState(null);
  const [postIndex, setPostIndex] = useState(null);

  const open = areas.find((a) => a.id === openId) || null;
  const entries = open ? open.entries || [] : [];
  const post = postIndex === null ? null : entries[postIndex] || null;

  function goHome() {
    setOpenId(null);
    setPostIndex(null);
  }

  return (
    <div>
      <header className="rule-bottom">
        <div className="wrap section-tight">
          <div className="split">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goHome();
              }}
              className="label"
              style={{ color: "var(--heading-ink)", textDecoration: "none" }}
            >
              Web team
            </a>
            <span className="small muted">Internal</span>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap section">
          {open === null ? (
            <div className="stack-lg">
              <div className="stack-sm">
                <h1 className="display measure-heading">{title}</h1>
                {standfirst ? <p className="lead measure">{standfirst}</p> : null}
              </div>

              <ul
                className="stack"
                style={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {areas.map((area) => (
                  <AreaCard
                    key={area.id}
                    name={area.name}
                    lastUpdated={area.lastUpdated}
                    onOpen={() => {
                      setOpenId(area.id);
                      setPostIndex(null);
                    }}
                  />
                ))}
              </ul>

              {exampleNote ? <p className="note measure">{exampleNote}</p> : null}

              {rule ? (
                <div className="panel stack-sm">
                  <p className="label">What earns a post its place</p>
                  <p className="measure">{rule}</p>
                </div>
              ) : null}
            </div>
          ) : post !== null ? (
            <PostView
              post={post}
              areaName={open.name}
              onBack={() => setPostIndex(null)}
            />
          ) : (
            <div className="stack-lg">
              <div className="stack-sm">
                <a
                  href="#"
                  className="small"
                  onClick={(e) => {
                    e.preventDefault();
                    goHome();
                  }}
                >
                  All four areas
                </a>
                <h1 className="display measure-heading">{open.name}</h1>
                <p className="small muted">Last updated {open.lastUpdated}</p>
                <div className="row">
                  <a className="button button-primary" href="#">
                    Add a post
                  </a>
                </div>
              </div>

              <div className="stack">
                {open.note ? <p className="note measure">{open.note}</p> : null}

                {entries.length === 0 ? (
                  <div className="empty">
                    Nothing has been added here yet. A post appears the moment
                    somebody writes the seven things: headline, audience, three
                    lines of summary, a status or date, an owner, how often it
                    is updated, and one link onward.
                  </div>
                ) : (
                  <ul
                    className="stack"
                    style={{ listStyle: "none", padding: 0, margin: 0 }}
                  >
                    {entries.map((entry, i) => (
                      <EntryRow
                        key={i}
                        line={entry.headline}
                        owner={entry.owner}
                        date={entry.date}
                        cadence={entry.cadence}
                        first={i === 0}
                        onOpen={() => setPostIndex(i)}
                      />
                    ))}
                  </ul>
                )}
              </div>

              {rule ? (
                <div className="panel stack-sm">
                  <p className="label">What earns a post its place</p>
                  <p className="measure">{rule}</p>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </main>

      <footer className="rule-top">
        <div className="wrap section-tight">
          <div className="split">
            <span className="small muted">{footerNote}</span>
            <span className="small muted">
              Four areas. Newest first. No search box.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
