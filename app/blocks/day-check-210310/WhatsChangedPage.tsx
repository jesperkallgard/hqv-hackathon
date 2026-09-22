/**
 * A single page-level component for the internal site, with header, feed, owners directory, how-we-work section, and footer.
 */
import React from "react";

function StatusTag({ label }) {
  const key = String(label || "").toLowerCase();
  let stateClass = "";

  if (key.includes("new")) stateClass = "is-new";
  else if (key.includes("testing")) stateClass = "is-testing";
  else if (key.includes("live")) stateClass = "is-live";
  else if (key.includes("weekly")) stateClass = "is-weekly";
  else if (key.includes("monthly")) stateClass = "is-monthly";
  else if (key.includes("active")) stateClass = "is-active";

  return <span className={`status-tag ${stateClass}`.trim()}>{label}</span>;
}

export default function WhatsChangedPage({
  title,
  summary,
  nav = [],
  primaryAction,
  secondaryActions = [],
  highlights = [],
  feed = [],
  owners = [],
  tags = [],
  rules = [],
  footer,
}) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-brand">
          <h1 className="site-title">{title}</h1>
          <p className="site-summary">{summary}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.label} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main">
        <section className="section" id="feed">
          <div className="section-header">
            <div className="stack">
              <h2>Feed</h2>
              <p className="section-intro">
                Newest first. Start here on Monday morning to see what changed, what is being tested, and who owns it.
              </p>
            </div>
            <div className="section-actions">
              {primaryAction ? (
                <a className="button button-primary" href={primaryAction.href}>
                  {primaryAction.label}
                </a>
              ) : null}
              {secondaryActions.map((action) => (
                <a key={action.label} className="button button-secondary" href={action.href}>
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="meta-list">
            {highlights.map((item) => (
              <div key={item.label} className="meta-card">
                <span className="meta-label">{item.label}</span>
                <span className="meta-value">{item.value}</span>
              </div>
            ))}
          </div>

          <ol className="feed-list">
            {feed.map((item) => (
              <li key={`${item.title}-${item.date}`} className="feed-item">
                <div className="feed-head">
                  <div className="stack">
                    <div className="tag-row">
                      <StatusTag label={item.status} />
                      <StatusTag label={item.cadence} />
                    </div>
                    <h3 className="feed-title">{item.title}</h3>
                  </div>
                  <div className="feed-actions">
                    <a className="button button-secondary" href={item.actionHref}>
                      {item.actionLabel}
                    </a>
                  </div>
                </div>
                <p className="feed-summary">{item.summary}</p>
                <div className="feed-meta">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="owner-name">{item.ownerName}</span>
                  <span>{item.ownerRole}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="owners">
          <div className="section-header">
            <div className="stack">
              <h2>Who owns what</h2>
              <p className="section-intro">
                Use this list when you need the right person fast. Every area has one named owner and an update rhythm.
              </p>
            </div>
          </div>

          <div className="table-wrap">
            <table className="directory-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Owner</th>
                  <th>How often it is updated</th>
                  <th>Last touched</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {owners.map((item) => (
                  <tr key={item.area}>
                    <td>{item.area}</td>
                    <td>
                      <div className="owner-cell">
                        <span className="owner-name">{item.ownerName}</span>
                        <span className="owner-role">{item.ownerRole}</span>
                      </div>
                    </td>
                    <td>
                      <span className="tag">{item.cadence}</span>
                    </td>
                    <td>{item.lastUpdated}</td>
                    <td>
                      <a href="#">{item.contact}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" id="how-we-work">
          <div className="section-header">
            <div className="stack">
              <h2>How we work</h2>
              <p className="section-intro">
                This site is here to answer real questions. It stays useful only if posts are current, plain, and attached to an owner.
              </p>
            </div>
          </div>

          <div className="panel stack">
            <h3>Tags</h3>
            <div className="tag-row">
              {tags.map((item) => (
                <div key={item.label} className="panel panel-muted stack">
                  <span className="tag">{item.label}</span>
                  <p className="muted">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>

          <ul className="rule-list">
            {rules.map((rule) => (
              <li key={rule.title} className="rule-item">
                <p className="rule-title">{rule.title}</p>
                <p>{rule.body}</p>
              </li>
            ))}
          </ul>
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
