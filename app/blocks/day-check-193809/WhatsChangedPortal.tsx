/**
 * Keeps the existing front door and adds a What’s changed list plus one opened post in the same internal-site shell.
 */
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

function PostList({ postList }) {
  return (
    <section className="post-list-section" id="whats-changed" aria-labelledby="post-list-title">
      <div className="section-head">
        <h2 id="post-list-title">{postList.title}</h2>
        <p className="section-note">{postList.intro}</p>
      </div>

      <div className="table-wrap panel">
        <table className="post-table">
          <thead>
            <tr>
              <th scope="col">Headline</th>
              <th scope="col">Owner</th>
              <th scope="col">Last updated</th>
            </tr>
          </thead>
          <tbody>
            {postList.rows.map((row) => (
              <tr key={row.title} className={row.current ? "is-selected" : ""}>
                <td>
                  <a className="post-row-link" href={row.href}>
                    {row.title}
                  </a>
                </td>
                <td>{row.owner}</td>
                <td className="date-cell">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

        <div className="opened-post-actions">
          <a className="button button-primary" href={openedPost.onwardLink.href}>
            {openedPost.onwardLink.label}
          </a>
        </div>
      </div>
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
          {nav.map((item, index) => (
            <a
              key={item.label}
              className={`nav-link${item.current || index === 0 ? " is-active" : ""}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main" id="front-door">
        <section className="front-door" aria-labelledby="front-door-title">
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

        <PostList postList={postList} />
        <OpenedPost openedPost={openedPost} />
      </main>

      <footer className="site-footer">
        <p className="footer-note">{footer.note}</p>
        <p className="footer-meta">{footer.meta}</p>
      </footer>
    </div>
  );
}
