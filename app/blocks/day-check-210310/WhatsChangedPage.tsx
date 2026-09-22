/**
 * Keeps the existing internal site shell and four-card front door, then adds a single opened-post section with a lean list row and a detailed post view for “My Husqvarna login moved”.
 */
import React from "react";

function StatusTag({ label }) {
  return <span className="status-tag">{label}</span>;
}

function DoorCard({ title, href, actionLabel, updatedLabel, ownerName, ownerRole, summary, status, prominence }) {
  return (
    <a className={`door-card ${prominence === "primary" ? "door-card-primary" : ""}`.trim()} href={href}>
      <div className="door-card-head">
        <div className="stack stack-tight">
          <StatusTag label={status} />
          <h2 className="door-card-title">{title}</h2>
        </div>
        <span className="button button-secondary door-card-action">{actionLabel}</span>
      </div>
      <p className="door-card-summary">{summary}</p>
      <div className="door-card-meta">
        <span>{updatedLabel}</span>
        <div className="owner-cell">
          <span className="owner-name">{ownerName}</span>
          <span className="owner-role">{ownerRole}</span>
        </div>
      </div>
    </a>
  );
}

function PostListRow({ listLabel, listTitle, listOwner, listDate, postId }) {
  return (
    <div className="post-list" aria-label={listLabel || "Post list"}>
      <a className="post-row" href={`#${postId}`}>
        <div className="post-row-main">
          <h3 className="post-row-title">{listTitle}</h3>
        </div>
        <div className="post-row-owner">{listOwner}</div>
        <div className="post-row-date">{listDate}</div>
      </a>
    </div>
  );
}

function DetailItem({ label, children }) {
  return (
    <div className="detail-item">
      <dt className="detail-label">{label}</dt>
      <dd className="detail-value">{children}</dd>
    </div>
  );
}

function OpenedPost({ post }) {
  if (!post) return null;

  return (
    <article className="opened-post panel" id={post.id}>
      <div className="opened-post-head stack">
        <div className="opened-post-title-wrap stack stack-tight">
          <StatusTag label={post.status} />
          <h2 className="opened-post-title">{post.title}</h2>
        </div>
        <p className="opened-post-date">{post.dateLabel}</p>
      </div>

      <div className="opened-post-body">
        <div className="opened-post-main stack">
          <div className="stack stack-tight">
            <h3 className="subheading">Audience</h3>
            <p>{post.audience}</p>
          </div>

          <div className="stack stack-tight">
            <h3 className="subheading">Summary</h3>
            <div className="stack stack-tight summary-lines">
              {post.summaryLines?.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="opened-post-actions">
            <a className="button button-primary" href={post.primaryActionHref}>
              {post.primaryActionLabel}
            </a>
            <a className="inline-link" href={post.onwardLinkHref}>
              {post.onwardLinkLabel}
            </a>
          </div>
        </div>

        <aside className="opened-post-side">
          <dl className="detail-list">
            <DetailItem label="Owner">
              <div className="owner-cell">
                <span className="owner-name">{post.ownerName}</span>
                <span className="owner-role">{post.ownerRole}</span>
              </div>
            </DetailItem>
            <DetailItem label="Update frequency">{post.updateFrequency}</DetailItem>
            <DetailItem label="Status or date">
              <div className="stack stack-tight">
                <StatusTag label={post.status} />
                <span>{post.dateLabel}</span>
              </div>
            </DetailItem>
          </dl>
        </aside>
      </div>
    </article>
  );
}

export default function WhatsChangedPage({ title, summary, nav = [], cards = [], openedPost, footer }) {
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

      <main className="page-main page-main-frontdoor">
        <section className="section section-frontdoor">
          <div className="section-header section-header-frontdoor">
            <div className="stack">
              <p className="frontdoor-kicker">Front door</p>
              <h2 className="frontdoor-heading">Pick the place you need.</h2>
              <p className="section-intro frontdoor-intro">
                Four ways in. Each one tells you what it covers, who to ask, and when it was last updated.
              </p>
            </div>
          </div>

          <div className="door-list">
            {cards.map((card) => (
              <DoorCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div className="stack stack-tight">
              <h2>What’s changed</h2>
              <p className="section-intro">One post, opened. In the list you scan the headline, owner, and date. Opened below are the rest of the facts.</p>
            </div>
          </div>

          <PostListRow
            listLabel={openedPost?.listLabel}
            listTitle={openedPost?.listTitle}
            listOwner={openedPost?.listOwner}
            listDate={openedPost?.listDate}
            postId={openedPost?.id}
          />

          <OpenedPost post={openedPost} />
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
