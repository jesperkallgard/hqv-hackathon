/**
 * Keeps the existing front door and adds a single opened post section with a terse list row and full post detail beneath it, using the same site header and footer.
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

function OpenedPostSection({ openedPost }) {
  const { listTitle, listNote, listColumns = [], listRow, post } = openedPost;

  return (
    <section className="opened-post" id="opened-post" aria-labelledby="opened-post-title">
      <div className="opened-post-intro">
        <p className="section-label">{openedPost.eyebrow}</p>
        <h2 id="opened-post-title">{listTitle}</h2>
        <p className="section-note">{listNote}</p>
      </div>

      <div className="post-list panel">
        <div className="post-list-header" aria-hidden="true">
          {listColumns.map((column) => (
            <span key={column}>{column}</span>
          ))}
        </div>
        <a className="post-list-row" href="#post-detail">
          <span className="post-list-title">{listRow.title}</span>
          <span>{listRow.owner}</span>
          <span>{listRow.date}</span>
        </a>
      </div>

      <article className="post-detail panel" id="post-detail" aria-labelledby="post-title">
        <div className="post-detail-head">
          <div className="post-detail-title-group">
            <h3 id="post-title" className="post-title">{post.title}</h3>
            <p className="post-audience">{post.audience}</p>
          </div>
          <StatusTag status={post.status} />
        </div>

        <div className="post-summary" aria-label="Summary">
          {post.summary.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <dl className="post-meta">
          <div className="post-meta-row">
            <dt>{post.dateLabel}</dt>
            <dd>{post.date}</dd>
          </div>
          <div className="post-meta-row">
            <dt>{post.ownerLabel}</dt>
            <dd>{post.owner}</dd>
          </div>
          <div className="post-meta-row">
            <dt>{post.cadenceLabel}</dt>
            <dd>{post.cadence}</dd>
          </div>
        </dl>

        <div className="post-actions">
          <a className="button button-primary" href={post.link.href}>
            {post.link.label}
          </a>
        </div>
      </article>
    </section>
  );
}

export default function WhatsChangedPortal({ siteName, summary, nav = [], frontDoor, openedPost, footer }) {
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

        {openedPost ? <OpenedPostSection openedPost={openedPost} /> : null}
      </main>

      <footer className="site-footer">
        <p className="footer-note">{footer.note}</p>
        <p className="footer-meta">{footer.meta}</p>
      </footer>
    </div>
  );
}
