/**
 * A single-page internal portal with header, dominant feed, ownership table, working rules, and footer for the “What’s Changed” site.
 */
import React from "react";

function StatusTag({ status }) {
  const className = status === "In test" ? "status-tag is-watch" : "status-tag is-current";
  return <span className={className}>{status}</span>;
}

export default function WhatsChangedPortal({
  siteName,
  summary,
  nav = [],
  hero,
  feed,
  owners,
  howWeWork,
}) {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="site-brand">
          <h1 className="site-title">{siteName}</h1>
          <p className="site-summary">{summary}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item, index) => (
            <a
              key={item.label}
              className={`nav-link${index === 0 ? " is-active" : ""}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main">
        <section className="hero-block" aria-labelledby="hero-title">
          <h2 id="hero-title">{hero.title}</h2>
          <p className="section-note">{hero.body}</p>
          <div className="hero-actions" id="add-update">
            <a className="button button-primary" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
            </a>
          </div>
        </section>

        <section className="section" id="feed" aria-labelledby="feed-title">
          <div className="section-header">
            <div className="section-title-group">
              <h2 id="feed-title">{feed.title}</h2>
              <p className="section-note">{feed.note}</p>
            </div>
          </div>

          <ol className="feed-list">
            {feed.items.map((item) => (
              <li className="feed-row" key={`${item.title}-${item.date}`}>
                <div className="feed-main">
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                    <StatusTag status={item.status} />
                  </div>
                  <h3 className="feed-title">{item.title}</h3>
                  <div className="feed-body">
                    <p>{item.summary}</p>
                    <p>
                      <strong>Action:</strong> {item.action}
                    </p>
                  </div>
                </div>
                <div className="feed-meta">
                  <span className="meta-label">Owner</span>
                  <span className="meta-value">{item.owner}</span>
                </div>
                <div className="feed-meta">
                  <span className="meta-label">Updated</span>
                  <span className="meta-value">{item.date}</span>
                </div>
                <div className="feed-meta">
                  <span className="meta-label">Update rhythm</span>
                  <span className="meta-value">{item.cadence}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="owners" aria-labelledby="owners-title">
          <div className="section-header">
            <div className="section-title-group">
              <h2 id="owners-title">{owners.title}</h2>
              <p className="section-note">{owners.note}</p>
            </div>
          </div>

          <div className="owners-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Role</th>
                  <th scope="col">Updates</th>
                  <th scope="col">Last touched</th>
                  <th scope="col">Ask here</th>
                </tr>
              </thead>
              <tbody>
                {owners.rows.map((row) => (
                  <tr key={row.area}>
                    <td>{row.area}</td>
                    <td>{row.owner}</td>
                    <td>{row.role}</td>
                    <td>{row.updates}</td>
                    <td>{row.lastTouched}</td>
                    <td>
                      <a href="#">{row.route}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" id="how-we-work" aria-labelledby="work-title">
          <div className="section-header">
            <div className="section-title-group">
              <h2 id="work-title">{howWeWork.title}</h2>
              <p className="section-note">{howWeWork.note}</p>
            </div>
          </div>

          <div className="two-up">
            <ol className="stack-list">
              {howWeWork.principles.map((item) => (
                <li className="stack-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="stack-item-meta">
                    <span>{item.meta}</span>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="callout" aria-labelledby="callout-title">
              <h3 id="callout-title">{howWeWork.callout.title}</h3>
              <p>{howWeWork.callout.body}</p>
              <div className="hero-actions">
                <a className="button button-secondary" href="#feed">
                  Read the latest updates
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-note">{howWeWork.footerNote}</p>
        <p className="footer-meta">{howWeWork.footerMeta}</p>
      </footer>
    </div>
  );
}
