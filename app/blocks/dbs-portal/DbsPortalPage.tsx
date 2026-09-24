/**
 * One-page internal DBS portal with KPI-first opening, five area cards, release pipeline, follow-up links and contact owners.
 */
import React from "react";

function StatusTag({ status }) {
  const map = {
    Live: "status-live",
    Good: "status-good",
    Watch: "status-watch",
    Planned: "status-planned",
    "Ready for IT": "status-watch",
    "In review": "status-planned",
    Investigating: "status-watch",
  };

  return <span className={`tag ${map[status] || "tag-muted"}`}>{status}</span>;
}

export default function DbsPortalPage(props) {
  const {
    title,
    summary,
    nav,
    hero,
    kpis,
    areasTitle,
    areasSummary,
    areas,
    pipelineTitle,
    pipelineSummary,
    pipelineRows,
    knowledge,
    contactsTitle,
    contactsSummary,
    contacts,
    footer,
  } = props;

  return (
    <div className="page">
      <header className="site-header">
        <div className="site-brand">
          <a className="site-title" href="#overview">{title}</a>
          <p className="site-summary">{summary}</p>
        </div>
        <nav className="site-nav" aria-label="Section navigation">
          {nav.map((item) => (
            <a key={item.label} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="main-content">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <h1>{hero.title}</h1>
            <p className="hero-intro">{hero.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={hero.primaryAction.href}>
                {hero.primaryAction.label}
              </a>
              <a className="button button-secondary" href={hero.secondaryAction.href}>
                {hero.secondaryAction.label}
              </a>
            </div>
          </div>
          <div className="kpi-strip">
            {kpis.map((kpi) => (
              <article key={kpi.label} className="kpi-card">
                <div className="kpi-label">{kpi.label}</div>
                <div className="kpi-value">{kpi.value}</div>
                <div className="kpi-context">{kpi.context}</div>
                <div className="kpi-detail">{kpi.detail}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="areas">
          <div className="section-heading">
            <div className="section-heading-copy">
              <h2>{areasTitle}</h2>
              <p className="section-summary">{areasSummary}</p>
            </div>
          </div>
          <div className="area-grid">
            {areas.map((area) => (
              <article key={area.name} className="area-card">
                <div className="area-card-header">
                  <div className="area-card-copy">
                    <h3>{area.name}</h3>
                    <p>{area.description}</p>
                  </div>
                  <div className="area-meta">
                    {area.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <ul className="post-list">
                  {area.posts.map((post) => (
                    <li key={post.title} className="post-item">
                      <div className="post-title-row">
                        <div className="post-title">{post.title}</div>
                        <StatusTag status={post.status} />
                      </div>
                      <p className="post-body">{post.body}</p>
                      <div className="post-footer">
                        <span className="owner-line">Owner: {post.owner}</span>
                        <span>{post.frequency}</span>
                        <span>{post.track}</span>
                        <span>{post.bu}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="pipeline" className="split-panel">
          <div className="panel">
            <div className="panel-header">
              <h2>{pipelineTitle}</h2>
              <p className="section-summary">{pipelineSummary}</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Track</th>
                    <th>BU</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Next step</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {pipelineRows.map((row) => (
                    <tr key={row.item}>
                      <td>{row.item}</td>
                      <td>{row.track}</td>
                      <td>{row.bu}</td>
                      <td><StatusTag status={row.status} /></td>
                      <td>{row.owner}</td>
                      <td>{row.nextStep}</td>
                      <td>{row.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="panel">
            <div className="panel-header">
              <h3>{knowledge.title}</h3>
              <p className="section-summary">Clear navigation to how-to, step-by-step and knowledge base content.</p>
            </div>
            <div className="list-block">
              {knowledge.items.map((item) => (
                <div key={item.title} className="list-row">
                  <div className="post-title">{item.title}</div>
                  <p className="post-body">{item.body}</p>
                  <a className="button button-secondary" href={item.href}>{item.linkLabel}</a>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="contacts">
          <div className="section-heading">
            <div className="section-heading-copy">
              <h2>{contactsTitle}</h2>
              <p className="section-summary">{contactsSummary}</p>
            </div>
          </div>
          <div className="contact-grid">
            {contacts.map((contact) => (
              <article key={contact.name} className="contact-card">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-role">{contact.role}</div>
                <div className="contact-detail">{contact.detail}</div>
                <div className="meta-row">
                  {contact.meta.map((item) => (
                    <span key={item} className="tag tag-muted">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>{footer.text}</div>
        <div className="footer-links">
          {footer.links.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
