/**
 * Keeps the existing portal shell and front door, then adds plain-language navigation, a filterable feed with empty state, an ownership table, and a how-we-work list.
 */
"use client";
import React from "react";

function StatusTag({ status }) {
  const className = status === "In test" ? "status-tag is-watch" : "status-tag is-current";
  return <span className={className}>{status}</span>;
}

function FrontDoorCard({ card }) {
  return (
    <li>
      <a className="door-card panel" href={card.href}>
        <div className="door-card-top">
          <div className="door-card-title-group">
            <h3 className="door-card-title">{card.title}</h3>
            <p className="door-card-summary">{card.summary}</p>
          </div>
          <StatusTag status={card.status} />
        </div>

        <dl className="door-card-meta">
          <div className="door-card-meta-row door-card-owner-row">
            <dt>Owner</dt>
            <dd>{card.owner}</dd>
          </div>
          <div className="door-card-meta-row">
            <dt>Last update</dt>
            <dd>{card.updated}</dd>
          </div>
          <div className="door-card-meta-row">
            <dt>Update rhythm</dt>
            <dd>{card.cadence}</dd>
          </div>
        </dl>

        <p className="door-card-action">{card.action}</p>
      </a>
    </li>
  );
}

function FeedFilters({ filters, value, onChange }) {
  return (
    <div className="feed-filter-bar panel">
      <div className="feed-filter-copy">
        <label className="feed-filter-label" htmlFor="feed-route-filter">
          {filters.label}
        </label>
        <p className="feed-filter-helper">{filters.helper}</p>
      </div>
      <div className="feed-filter-control">
        <select id="feed-route-filter" value={value} onChange={(event) => onChange(event.target.value)}>
          {filters.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function EmptyState({ emptyState }) {
  return (
    <div className="empty-state panel" role="status" aria-live="polite">
      <h3>{emptyState.title}</h3>
      <p>{emptyState.body}</p>
    </div>
  );
}

function PostList({ postList }) {
  const [route, setRoute] = React.useState("all");
  const rows = route === "all" ? postList.rows : postList.rows.filter((row) => row.route === route);

  return (
    <section className="post-list-section" id="the-feed" aria-labelledby="post-list-title">
      <div className="section-head">
        <h2 id="post-list-title">{postList.title}</h2>
        <p className="section-note">{postList.intro}</p>
      </div>

      <FeedFilters filters={postList.filters} value={route} onChange={setRoute} />

      {rows.length === 0 ? (
        <EmptyState emptyState={postList.emptyState} />
      ) : (
        <div className="table-wrap panel">
          <table className="post-table">
            <thead>
              <tr>
                <th scope="col">What changed</th>
                <th scope="col">Owner</th>
                <th scope="col">Last updated</th>
                <th scope="col">Updated</th>
                <th scope="col">State</th>
                <th scope="col">What you need to do</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.title} className={row.current ? "is-selected" : ""}>
                  <td>
                    <a className="post-row-link" href={row.href}>
                      {row.title}
                    </a>
                  </td>
                  <td>{row.owner}</td>
                  <td className="date-cell">{row.date}</td>
                  <td>{row.cadence}</td>
                  <td>
                    <StatusTag status={row.status} />
                  </td>
                  <td>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function OpenedPost({ openedPost }) {
  return (
    <section className="opened-post panel" id="opened-post" aria-labelledby="opened-post-title">
      <div className="opened-post-head">
        <div className="opened-post-heading-group">
          <p className="opened-post-eyebrow">{openedPost.eyebrow}</p>
          <h2 id="opened-post-title" className="opened-post-title">
            {openedPost.title}
          </h2>
          <p className="opened-post-audience">{openedPost.audience}</p>
        </div>
        <StatusTag status={openedPost.status} />
      </div>

      <div className="opened-post-body">
        <div className="opened-post-summary" aria-label="Summary">
          {openedPost.summary.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <dl className="opened-post-meta">
          <div className="opened-post-meta-item">
            <dt>{openedPost.dateLabel}</dt>
            <dd>{openedPost.date}</dd>
          </div>
          <div className="opened-post-meta-item">
            <dt>Owner</dt>
            <dd>{openedPost.owner}</dd>
          </div>
          <div className="opened-post-meta-item">
            <dt>Updated</dt>
            <dd>{openedPost.cadence}</dd>
          </div>
        </dl>

        <div className="opened-post-next-step panel">
          <h3>{openedPost.actionLabel}</h3>
          <p>{openedPost.actionText}</p>
        </div>

        <div className="opened-post-actions">
          <a className="button button-primary" href={openedPost.onwardLink.href}>
            {openedPost.onwardLink.label}
          </a>
        </div>
      </div>
    </section>
  );
}

function OwnershipSection({ ownership }) {
  return (
    <section className="owners-section" id="who-owns-what" aria-labelledby="owners-title">
      <div className="section-head">
        <h2 id="owners-title">{ownership.title}</h2>
        <p className="section-note">{ownership.intro}</p>
      </div>

      <div className="table-wrap panel">
        <table>
          <thead>
            <tr>
              <th scope="col">Area</th>
              <th scope="col">Owner</th>
              <th scope="col">Role</th>
              <th scope="col">Updated</th>
              <th scope="col">Ask them about</th>
            </tr>
          </thead>
          <tbody>
            {ownership.rows.map((row) => (
              <tr key={row.area}>
                <td>{row.area}</td>
                <td>{row.owner}</td>
                <td>{row.role}</td>
                <td>{row.cadence}</td>
                <td>{row.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function HowWeWorkSection({ howWeWork }) {
  return (
    <section className="how-we-work-section" id="how-we-work" aria-labelledby="how-we-work-title">
      <div className="section-head">
        <h2 id="how-we-work-title">{howWeWork.title}</h2>
        <p className="section-note">{howWeWork.intro}</p>
      </div>

      <ol className="rules-list">
        {howWeWork.items.map((item) => (
          <li key={item.title} className="rule-item">
            <div className="rule-marker" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10.5 8.5 13 14 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="rule-body">
              <div className="rule-head">
                <h3>{item.title}</h3>
                <StatusTag status="Current" />
              </div>
              <p>{item.body}</p>
              <dl className="rule-meta">
                <div>
                  <dt>Owner</dt>
                  <dd>{item.owner}</dd>
                </div>
                <div>
                  <dt>Updated</dt>
                  <dd>{item.cadence}</dd>
                </div>
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function WhatsChangedPortal({
  siteName,
  summary,
  nav = [],
  frontDoor,
  postList,
  openedPost,
  ownership,
  howWeWork,
  footer,
}) {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="site-brand">
          <h1 className="site-title">{siteName}</h1>
          <p className="site-summary">{summary}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.label} className={`nav-link${item.current ? " is-active" : ""}`} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main">
        <PostList postList={postList} />

        <section className="front-door" id="front-door" aria-labelledby="front-door-title">
          <div className="front-door-intro">
            <h2 id="front-door-title">{frontDoor.title}</h2>
            <p className="section-note">{frontDoor.body}</p>
          </div>

          <ol className="door-list">
            {frontDoor.cards.map((card) => (
              <FrontDoorCard key={card.title} card={card} />
            ))}
          </ol>
        </section>

        <OpenedPost openedPost={openedPost} />
        <OwnershipSection ownership={ownership} />
        <HowWeWorkSection howWeWork={howWeWork} />
      </main>

      <footer className="site-footer">
        <p className="footer-note">{footer.note}</p>
        <p className="footer-meta">{footer.meta}</p>
      </footer>
    </div>
  );
}
