/**
 * A single-page internal portal with header, feed-first landing view, owner directory, working notes and footer.
 */
import React from "react";

function StatusTag({ children }) {
  const accentStates = ["Being tested", "Changed this week"];
  const className = accentStates.includes(children) ? "tag tag-accent" : "tag tag-strong";
  return <span className={className}>{children}</span>;
}

function FeedTable({ title, intro, items }) {
  return (
    <section className="section" id="feed">
      <div className="section-header">
        <div>
          <h2>{title}</h2>
          <p className="section-intro">{intro}</p>
        </div>
      </div>
      <div className="panel">
        <div className="feed-table-wrap">
          <table className="feed-table">
            <thead>
              <tr>
                <th>Update</th>
                <th>State</th>
                <th>Owner</th>
                <th>Area</th>
                <th className="nowrap">Last updated</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={`${item.title}-${item.updated}`}>
                  <td>
                    <strong className="item-title">{item.title}</strong>
                    <div className="item-summary">{item.summary}</div>
                  </td>
                  <td>
                    <StatusTag>{item.state}</StatusTag>
                  </td>
                  <td>
                    <div className="meta"><strong>{item.owner}</strong></div>
                    <div className="meta-muted">{item.role}</div>
                  </td>
                  <td>
                    <div className="meta">{item.area}</div>
                  </td>
                  <td className="nowrap">
                    <div className="meta">{item.updated}</div>
                  </td>
                  <td>
                    <div className="meta">{item.frequency}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function OwnerDirectory({ title, intro, people }) {
  return (
    <section className="section" id="owners">
      <div className="section-header">
        <div>
          <h2>{title}</h2>
          <p className="section-intro">{intro}</p>
        </div>
      </div>
      <div className="owner-grid">
        {people.map((person) => (
          <article className="owner-card" key={person.name}>
            <div className="owner-name">{person.name}</div>
            <div className="owner-role">{person.role}</div>
            <div className="owner-area"><strong>Owns:</strong> {person.area}</div>
            <div className="owner-contact"><strong>Contact:</strong> <a href="#">{person.contact}</a></div>
            <div className="meta-muted">{person.cadence}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkNotes({ title, intro, notes }) {
  return (
    <section className="section" id="work">
      <div className="section-header">
        <div>
          <h2>{title}</h2>
          <p className="section-intro">{intro}</p>
        </div>
      </div>
      <div className="split-note">
        {notes.map((note) => (
          <article className="note-card" key={note.heading}>
            <h3>{note.heading}</h3>
            <p>{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function WhatsChangedPage({
  title,
  summary,
  nav,
  hero,
  feed,
  owners,
  work,
  footer,
}) {
  return (
    <div>
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-brand">
            <h1 className="site-title">{title}</h1>
            <p className="site-summary">{summary}</p>
          </div>
          <nav className="site-nav" aria-label="Primary">
            {nav.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link${index === 0 ? " is-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="page main">
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-lede">{hero.lede}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={hero.primaryAction.href}>
                {hero.primaryAction.label}
              </a>
              <a className="button" href={hero.secondaryAction.href}>
                {hero.secondaryAction.label}
              </a>
            </div>
          </div>
        </section>

        <FeedTable {...feed} />
        <OwnerDirectory {...owners} />
        <WorkNotes {...work} />
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <div className="footer-title">{footer.title}</div>
            <p className="footer-meta">{footer.meta}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
