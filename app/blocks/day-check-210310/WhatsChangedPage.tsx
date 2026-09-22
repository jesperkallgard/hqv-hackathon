/**
 * A single-page internal site with header, plain-language navigation, filterable feed, owner directory, working rules, and footer.
 */
"use client";
import React, { useMemo, useState } from "react";

function StatusTag({ label }) {
  return <span className="status-tag">{label}</span>;
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="icon">
      <path
        d="M3 5h14M6 10h8M8 15h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="icon">
      <path
        d="M10 10.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm-5.4 6c.7-2.2 2.8-3.8 5.4-3.8s4.7 1.6 5.4 3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RuleIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="icon">
      <path
        d="M5 5.5h10M5 10h10M5 14.5h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FeedFilters({ filters, selected, onChange }) {
  return (
    <div className="feed-toolbar panel" role="group" aria-label="Filter posts">
      <div className="feed-toolbar-label">
        <FilterIcon />
        <span>Find the right post</span>
      </div>
      <div className="filter-list">
        {filters.map((filter) => {
          const active = selected === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              className={`button ${active ? "button-primary" : "button-secondary"}`}
              aria-pressed={active}
              onClick={() => onChange(filter.value)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PostRow({ post }) {
  return (
    <a className="post-row" href={post.href}>
      <div className="post-row-main stack stack-tight">
        <div className="post-row-topline">
          <StatusTag label={post.status} />
        </div>
        <h3 className="post-row-title">{post.title}</h3>
        <p className="post-row-meaning">{post.meaning}</p>
      </div>
      <div className="post-row-owner owner-cell">
        <span className="owner-name">{post.ownerName}</span>
        <span className="owner-role">{post.ownerRole}</span>
      </div>
      <div className="post-row-frequency">{post.updateFrequency}</div>
      <div className="post-row-date">{post.date}</div>
    </a>
  );
}

function EmptyState({ title, body }) {
  return (
    <div className="empty panel" role="status" aria-live="polite">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function OwnersTable({ owners }) {
  return (
    <div className="table-wrap panel">
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Owner</th>
            <th>How often it changes</th>
            <th>What it covers</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((item) => (
            <tr key={item.area}>
              <th scope="row">{item.area}</th>
              <td>
                <div className="owner-cell">
                  <span className="owner-name">{item.ownerName}</span>
                  <span className="owner-role">{item.ownerRole}</span>
                </div>
              </td>
              <td>{item.updateFrequency}</td>
              <td>{item.scope}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RulesList({ rules }) {
  return (
    <div className="rules-list">
      {rules.map((rule) => (
        <article key={rule.title} className="rule-item">
          <h3>{rule.title}</h3>
          <p>{rule.body}</p>
        </article>
      ))}
    </div>
  );
}

export default function WhatsChangedPage({
  title,
  summary,
  nav = [],
  feedIntro,
  emptyState,
  feedFilters = [],
  posts = [],
  owners,
  workingRules,
  footer,
}) {
  const [selectedFilter, setSelectedFilter] = useState(feedFilters[0]?.value || "all");

  const visiblePosts = useMemo(() => {
    if (selectedFilter === "all") return posts;
    return posts.filter((post) => post.category === selectedFilter);
  }, [posts, selectedFilter]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-brand">
          <h1 className="site-title">{title}</h1>
          <p className="site-summary">{summary}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.label} className="nav-link" href={item.href} aria-current={item.current ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main">
        <section className="section" id="what-changed">
          <div className="section-header section-header-feed">
            <div className="stack stack-tight">
              <h2>What changed</h2>
              <p className="section-intro">{feedIntro}</p>
            </div>
          </div>

          <FeedFilters filters={feedFilters} selected={selectedFilter} onChange={setSelectedFilter} />

          <div className="post-list" aria-live="polite">
            <div className="post-list-head">
              <span>Update</span>
              <span>Owner</span>
              <span>Updated</span>
              <span>Date</span>
            </div>
            {visiblePosts.length ? (
              visiblePosts.map((post) => <PostRow key={post.id} post={post} />)
            ) : (
              <EmptyState title={emptyState?.title} body={emptyState?.body} />
            )}
          </div>
        </section>

        <section className="section" id="who-owns-what">
          <div className="section-header">
            <div className="stack stack-tight">
              <div className="section-mark">
                <PersonIcon />
                <span>Directory</span>
              </div>
              <h2>{owners?.title}</h2>
              <p className="section-intro">{owners?.intro}</p>
            </div>
          </div>
          <OwnersTable owners={owners?.areas || []} />
        </section>

        <section className="section" id="how-we-work">
          <div className="section-header">
            <div className="stack stack-tight">
              <div className="section-mark">
                <RuleIcon />
                <span>Working rules</span>
              </div>
              <h2>{workingRules?.title}</h2>
              <p className="section-intro">{workingRules?.intro}</p>
            </div>
          </div>
          <RulesList rules={workingRules?.rules || []} />
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-note">{footer?.keeper}</p>
        <div className="footer-links">
          {(footer?.links || []).map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
