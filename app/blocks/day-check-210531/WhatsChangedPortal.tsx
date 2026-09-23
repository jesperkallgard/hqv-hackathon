/**
 * A complete internal homepage with header, feed-first content, owners directory, how-we-work guidance, and footer.
 */
import React from "react";

function Tag({ children, filled = false }) {
  return <span className={filled ? "tag tag-filled" : "tag"}>{children}</span>;
}

function SectionHeader({ id, title, note }) {
  return (
    <div className="section-header" id={id}>
      <div className="section-title-group">
        <h2>{title}</h2>
        {note ? <p className="section-note">{note}</p> : null}
      </div>
    </div>
  );
}

export default function WhatsChangedPortal({
  siteTitle,
  siteSubtitle,
  nav,
  intro,
  primaryAction,
  secondaryActions,
  feed,
  owners,
  howWeWork,
  footer,
}) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-brand">
            <div className="site-title">{siteTitle}</div>
            <p className="site-subtitle">{siteSubtitle}</p>
          </div>
          <nav className="site-nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.label}
                className={item.active ? "nav-link is-active" : "nav-link"}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-main">
        <section className="page-lead">
          <h1>{intro.title}</h1>
          <p className="page-intro">{intro.text}</p>
          <div className="button-row">
            <a className="button button-primary" href={primaryAction.href}>
              {primaryAction.label}
            </a>
            {secondaryActions.map((action) => (
              <a key={action.label} className="button button-secondary" href={action.href}>
                {action.label}
              </a>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="feed">
          <SectionHeader
            id="feed"
            title="Feed"
            note="Newest first. Every item names an owner, a date, and how often the area is updated."
          />
          <ul className="stack-list">
            {feed.map((item) => (
              <li className="stack-item" key={`${item.title}-${item.date}`}>
                <article className="feed-item">
                  <div className="feed-item-meta">
                    <Tag filled>{item.state}</Tag>
                    <span className="meta-text">{item.date}</span>
                    <Tag>{item.cadence}</Tag>
                  </div>
                  <h3 className="feed-item-title">{item.title}</h3>
                  <p className="feed-item-summary">{item.summary}</p>
                  <div className="meta-row">
                    <span className="meta-text">
                      Owner: {item.owner}, {item.role}
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="owners">
          <SectionHeader
            id="owners"
            title="Who owns what"
            note="Use this when you need the right person before you ask around."
          />
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Owner</th>
                  <th>Contact</th>
                  <th>Update cadence</th>
                  <th>What they own</th>
                </tr>
              </thead>
              <tbody>
                {owners.map((owner) => (
                  <tr key={owner.area}>
                    <td>{owner.area}</td>
                    <td>
                      {owner.owner}
                      <br />
                      <span className="owner-detail">{owner.role}</span>
                    </td>
                    <td>{owner.contact}</td>
                    <td>{owner.cadence}</td>
                    <td>{owner.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" aria-labelledby="how-we-work">
          <SectionHeader
            id="how-we-work"
            title="How we work"
            note="Short rules for what belongs here and how to write it."
          />
          <div className="list-columns">
            <div>
              <h3>Rules</h3>
              <ul className="rule-list">
                {howWeWork.principles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="panel">
                <div className="panel-body">
                  <h3>{howWeWork.contactPanel.title}</h3>
                  <p>{howWeWork.contactPanel.text}</p>
                  <div className="button-row" style={{ marginTop: "16px" }}>
                    <a className="button button-secondary" href={howWeWork.contactPanel.linkHref}>
                      {howWeWork.contactPanel.linkLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section" style={{ marginTop: "32px" }}>
            <h3>Publishing flow</h3>
            <ul className="stack-list">
              {howWeWork.publishing.map((step) => (
                <li className="stack-item" key={step.step}>
                  <div className="stack-link">
                    <div className="meta-row">
                      <Tag>Step {step.step}</Tag>
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-title">{footer.title}</div>
          <p className="footer-text">{footer.text}</p>
          <div className="meta-row">
            {footer.links.map((link) => (
              <a key={link.label} className="footer-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
