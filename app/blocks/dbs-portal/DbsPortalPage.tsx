/**
 * Refined one-page DBS portal with three opening highlights, Kaj as the main action, dated KPI and metrics sections, a release timeline, quick links, show-and-tell slices, weekly activities and the existing owner path preserved.
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

function SparkIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M10 2.5l1.9 4.6 4.6 1.9-4.6 1.9L10 15.5l-1.9-4.6-4.6-1.9 4.6-1.9L10 2.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4 5.5h12v8H8.2L5 16v-2.5H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 8.5h6M7 11h4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="3.5" y="5" width="13" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 3.5v3M13.5 3.5v3M3.5 8.5h13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="6.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 16c1.1-2.5 3.1-3.8 5.5-3.8S14.4 13.5 15.5 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function DbsPortalPage(props) {
  const {
    title,
    summary,
    nav,
    hero,
    highlights,
    kaj,
    kpisTitle,
    kpisSummary,
    kpis,
    metricsTitle,
    metricsSummary,
    metrics,
    areasTitle,
    areasSummary,
    areas,
    pipelineTitle,
    pipelineSummary,
    pipelineRows,
    knowledge,
    showAndTellTitle,
    showAndTellSummary,
    showAndTell,
    activitiesTitle,
    activitiesSummary,
    activities,
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
              <a className="button button-secondary" href={hero.tertiaryAction.href}>
                {hero.tertiaryAction.label}
              </a>
              <a className="button button-favourite" href={hero.favouriteAction.href}>
                {hero.favouriteAction.label}
              </a>
            </div>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article key={item.title} className="highlight-card">
                <div className="highlight-top">
                  <div className="icon-chip"><SparkIcon /></div>
                  <StatusTag status={item.status} />
                </div>
                <div className="highlight-value">{item.value}</div>
                <h2 className="highlight-title">{item.title}</h2>
                <p className="highlight-quote">{item.quote}</p>
                <div className="highlight-meta">
                  <span className="owner-line">Owner: {item.owner}</span>
                  <span>{item.frequency}</span>
                  <span>{item.track}</span>
                  <span>{item.bu}</span>
                </div>
                <div className="highlight-dates">
                  <span>Measured {item.measured}</span>
                  <span>Compared with {item.comparison}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="kaj" className="kaj-panel">
          <div className="kaj-copy">
            <div className="section-kicker"><ChatIcon /><span>{kaj.title}</span></div>
            <h2>{kaj.title}</h2>
            <p className="section-summary section-summary-strong">{kaj.body}</p>
            <p className="kaj-prompt">{kaj.prompt}</p>
            <div className="chip-row">
              {kaj.chips.map((chip) => (
                <a key={chip} className="tag tag-action" href="#">{chip}</a>
              ))}
            </div>
          </div>
          <div className="kaj-action">
            <a className="button button-primary" href={kaj.action.href}>{kaj.action.label}</a>
          </div>
        </section>

        <section>
          <div className="section-heading">
            <div className="section-heading-copy">
              <h2>{kpisTitle}</h2>
              <p className="section-summary">{kpisSummary}</p>
            </div>
          </div>
          <div className="kpi-strip">
            {kpis.map((kpi) => (
              <article key={kpi.label} className="kpi-card">
                <div className="kpi-label">{kpi.label}</div>
                <div className="kpi-value">{kpi.value}</div>
                <div className="kpi-context">{kpi.context}</div>
                <div className="kpi-detail">{kpi.detail}</div>
                <div className="metric-dates">
                  <span>Measured {kpi.measured}</span>
                  <span>Compared with {kpi.comparison}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="section-heading">
            <div className="section-heading-copy">
              <h2>{metricsTitle}</h2>
              <p className="section-summary">{metricsSummary}</p>
            </div>
          </div>
          <div className="metric-list panel">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-row">
                <div>
                  <div className="metric-label">{metric.label}</div>
                  <p className="post-body">{metric.reading}</p>
                </div>
                <div className="metric-dates metric-dates-right">
                  <span>Measured {metric.measured}</span>
                  <span>Compared with {metric.comparison}</span>
                </div>
              </div>
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

        <section id="pipeline" className="split-panel split-panel-timeline">
          <div className="panel">
            <div className="panel-header">
              <h2>{pipelineTitle}</h2>
              <p className="section-summary">{pipelineSummary}</p>
            </div>
            <div className="timeline-list">
              {pipelineRows.map((row) => (
                <article key={row.item} className="timeline-item">
                  <div className="timeline-date"><CalendarIcon /><span>{row.window}</span></div>
                  <div className="timeline-body">
                    <div className="post-title-row">
                      <div className="post-title">{row.item}</div>
                      <StatusTag status={row.status} />
                    </div>
                    <div className="post-footer">
                      <span>{row.track}</span>
                      <span>{row.bu}</span>
                      <span className="owner-line">Owner: {row.owner}</span>
                      <span>{row.frequency}</span>
                    </div>
                    <p className="post-body">Next step: {row.nextStep}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="panel" id="knowledge">
            <div className="panel-header">
              <h3>{knowledge.title}</h3>
              <p className="section-summary">Clear navigation to how-to, step-by-step, show and tell documents, and initiative pages.</p>
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

        <section id="show-and-tell">
          <div className="section-heading">
            <div className="section-heading-copy">
              <h2>{showAndTellTitle}</h2>
              <p className="section-summary">{showAndTellSummary}</p>
            </div>
          </div>
          <div className="show-grid">
            {showAndTell.map((item) => (
              <article key={item.title} className="panel show-card">
                <div className="show-top">
                  <span className="tag">{item.topic}</span>
                  <span className="show-date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="post-body">{item.summary}</p>
                <div className="show-presenter"><PersonIcon /><span>{item.presenter}</span></div>
                <div className="show-links">
                  <a href={item.sourceHref}>{item.sourceLabel}</a>
                  <a href={item.materialHref}>{item.materialLabel}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="section-heading">
            <div className="section-heading-copy">
              <h2>{activitiesTitle}</h2>
              <p className="section-summary">{activitiesSummary}</p>
            </div>
          </div>
          <div className="activity-grid">
            <div className="panel">
              <div className="panel-header">
                <h3>Ongoing</h3>
              </div>
              <div className="list-block">
                {activities.ongoing.map((item) => (
                  <div key={item.title} className="list-row">
                    <div className="post-title">{item.title}</div>
                    <p className="post-body">{item.body}</p>
                    <div className="post-footer">
                      <span className="owner-line">Owner: {item.owner}</span>
                      <span>{item.track}</span>
                      <span>{item.bu}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel">
              <div className="panel-header">
                <h3>Upcoming</h3>
              </div>
              <div className="list-block">
                {activities.upcoming.map((item) => (
                  <div key={item.title} className="list-row">
                    <div className="post-title">{item.title}</div>
                    <p className="post-body">{item.body}</p>
                    <div className="post-footer">
                      <span className="owner-line">Owner: {item.owner}</span>
                      <span>{item.track}</span>
                      <span>{item.bu}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                <div className="contact-avatar" aria-hidden="true">
                  <PersonIcon />
                </div>
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
