/**
 * The whole internal page: header, intro, a single column of question-shaped posts newest first (one carrying the running-tests table), an owners lookup table, the rules the page holds itself to, and a footer.
 */
import PostEntry from "./PostEntry";

export default function TeamPortalPage({
  siteName,
  strapline,
  nav = [],
  intro,
  primaryAction,
  posts = [],
  ownersTitle,
  ownersNote,
  owners = [],
  howTitle,
  howRules = [],
  footerNote,
  footerLinks = [],
}) {
  return (
    <div>
      <header className="rule-bottom">
        <div className="wrap section-tight">
          <div className="split">
            <div className="stack-sm">
              <strong style={{ color: "var(--heading-ink)", fontSize: "var(--text-lg)" }}>
                {siteName}
              </strong>
              <span className="note">{strapline}</span>
            </div>
            <nav className="row" aria-label="Sections">
              {nav.map((n) => (
                <a key={n.label} href={n.href}>
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap section">
          <div className="stack-lg">
            <div className="stack">
              <h1 className="display measure-heading">{intro}</h1>
              {primaryAction ? (
                <div className="row">
                  <a className="button button-primary" href={primaryAction.href}>
                    {primaryAction.label}
                  </a>
                </div>
              ) : null}
            </div>

            <section id="posts" className="stack-lg">
              {posts.map((p, i) => (
                <PostEntry key={p.question} {...p} first={i === 0} />
              ))}
            </section>

            <section id="owners" className="stack rule-top" style={{ paddingTop: "var(--space-8)" }}>
              <h2>{ownersTitle}</h2>
              <p className="note measure">{ownersNote}</p>
              <div className="table-scroll">
                <table className="zebra">
                  <thead>
                    <tr>
                      <th scope="col">Area</th>
                      <th scope="col">Owner</th>
                      <th scope="col">Updated</th>
                      <th scope="col">Last checked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {owners.map((o) => (
                      <tr key={o.area}>
                        <td>
                          <a href="#posts">{o.area}</a>
                        </td>
                        <td>{o.owner}</td>
                        <td>{o.cadence}</td>
                        <td>{o.checked}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="how" className="stack rule-top" style={{ paddingTop: "var(--space-8)" }}>
              <h2>{howTitle}</h2>
              <ul className="measure stack-sm">
                {howRules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className="rule-top">
        <div className="wrap section-tight">
          <div className="split">
            <p className="note measure">{footerNote}</p>
            <nav className="row" aria-label="This page">
              {footerLinks.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
