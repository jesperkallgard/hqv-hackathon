/**
 * The whole internal portal page: header, four named index sections with one-line entries carrying owner, cadence and a computed stale note, the rollout status table with four stages, the opened A/B test playbook, and a footer. Sprint 2: Team Dag (playbook page), Team Ada (computed staleness).
 */
"use client";

import React from "react";
import StaleDate from "./StaleDate";

function StageBadge({ stage }) {
  const strong = stage === "Rolling out" || stage === "Testing";
  return (
    <span className={strong ? "badge badge-accent" : "badge"}>{stage}</span>
  );
}

function EntryList({ entries, empty, today, staleDays }) {
  if (!entries || entries.length === 0) {
    return <div className="empty">{empty}</div>;
  }
  return (
    <ul
      className="stack-sm"
      style={{ listStyle: "none", padding: 0, margin: 0 }}
    >
      {entries.map((e, i) => (
        <li
          key={e.title}
          className={i === 0 ? undefined : "rule-top"}
          style={{ paddingTop: i === 0 ? 0 : "var(--space-3)" }}
        >
          <div className="split" style={{ gap: "var(--space-2)" }}>
            <a href={e.href || "#"} style={{ fontWeight: 600 }}>
              {e.title}
            </a>
            <span className="small muted">
              {e.owner} — {e.cadence} —{" "}
              <StaleDate updated={e.updated} today={today} staleDays={staleDays} />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Playbook({ playbook, today, staleDays }) {
  if (!playbook) return null;
  return (
    <section id={playbook.id} className="stack">
      <div className="stack-sm">
        <p className="small muted">
          <a href={playbook.backHref || "#"}>{playbook.backLabel}</a>
        </p>
        <h2>{playbook.title}</h2>
        <p className="note">
          {playbook.owner} — {playbook.cadence} —{" "}
          <StaleDate
            updated={playbook.updated}
            today={today}
            staleDays={staleDays}
          />
        </p>
      </div>
      <div className="panel">
        <ol className="stack-sm measure" style={{ margin: 0, paddingLeft: "var(--space-6)" }}>
          {playbook.steps.map((step) => (
            <li key={step} style={{ paddingLeft: "var(--space-1)" }}>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function PortalIndex({
  siteName,
  tagline,
  title,
  ingress,
  sections = [],
  rollouts = [],
  rolloutIngress,
  updatedLabel,
  playbook,
  footerNote,
  contact,
  today,
  staleDays = 21,
}) {
  return (
    <div>
      <header className="rule-bottom">
        <div className="wrap section-tight">
          <div className="split">
            <div>
              <strong>{siteName}</strong>
              <div className="small muted">{tagline}</div>
            </div>
            <nav className="row small" aria-label="Sections">
              {sections.map((s) => (
                <a key={s.id} href={"#" + s.id}>
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap section">
          <div className="stack measure-heading">
            <h1 className="display">{title}</h1>
            <p className="lead">{ingress}</p>
          </div>
        </div>

        <div className="wrap" style={{ paddingBottom: "var(--space-16)" }}>
          <div className="stack-lg">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="stack">
                <div className="stack-sm">
                  <h2>{s.title}</h2>
                  <p className="note measure">{s.note}</p>
                </div>

                {s.id === "rollout-status" ? (
                  <div className="stack">
                    <p className="measure">{rolloutIngress}</p>
                    <div className="table-scroll">
                      <table className="zebra">
                        <thead>
                          <tr>
                            <th scope="col">Rollout name</th>
                            <th scope="col">Stage</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Last updated</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rollouts.map((r) => (
                            <tr key={r.name}>
                              <th scope="row" style={{ fontWeight: 600 }}>
                                {r.name}
                              </th>
                              <td>
                                <StageBadge stage={r.stage} />
                              </td>
                              <td>{r.owner}</td>
                              <td>
                                <StaleDate
                                  updated={r.updated}
                                  today={today}
                                  staleDays={staleDays}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="note">{updatedLabel}</p>
                  </div>
                ) : (
                  <div className="panel">
                    <EntryList
                      entries={s.entries}
                      empty={s.empty}
                      today={today}
                      staleDays={staleDays}
                    />
                  </div>
                )}

                {playbook && s.id === "playbooks" ? (
                  <Playbook
                    playbook={playbook}
                    today={today}
                    staleDays={staleDays}
                  />
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="rule-top">
        <div className="wrap section-tight">
          <div className="split">
            <p className="small muted measure">{footerNote}</p>
            <a className="button button-primary" href="#">
              {contact}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
