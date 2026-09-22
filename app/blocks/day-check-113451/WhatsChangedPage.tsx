/**
 * The whole page: header with the site name and two links, the title, one column list of rows (sentence, owner, date, cadence) newest first, and a footer. No search, no filters, no cards. Built from Team Cleo and Team Ada.
 */
import ChangeRow from "./ChangeRow";

export default function WhatsChangedPage({
  siteName = "",
  title = "What's changed",
  standfirst = "",
  exampleNote = "",
  nav = [],
  action = null,
  entries = [],
  footerNote = "",
  footerLinks = [],
}) {
  const firstExample = entries.findIndex((e) => !e.room);

  return (
    <div>
      <header className="rule-bottom">
        <div className="wrap section-tight">
          <div className="split">
            <strong style={{ color: "var(--heading-ink)" }}>{siteName}</strong>
            <nav className="row" aria-label="Sections">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="small"
                  style={{
                    color: item.current ? "var(--heading-ink)" : "var(--muted)",
                  }}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="wrap section">
        <div className="stack-lg">
          <div className="stack-sm">
            <h1 className="display">{title}</h1>
            {standfirst ? (
              <p className="lead measure">{standfirst}</p>
            ) : null}
            {action ? (
              <div className="row">
                <a className="button button-primary" href={action.href}>
                  {action.label}
                </a>
              </div>
            ) : null}
          </div>

          {entries.length === 0 ? (
            <div className="empty">
              Nothing has been added yet. A row appears here the moment somebody
              writes down what changed, who owns it, and how often it is
              updated.
            </div>
          ) : (
            <ul
              className="stack"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {entries.map((entry, i) => (
                <li key={i}>
                  {i === firstExample && exampleNote ? (
                    <p className="note measure" style={{ marginBottom: "var(--space-4)" }}>
                      {exampleNote}
                    </p>
                  ) : null}
                  <ChangeRow {...entry} first={i === 0} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer className="rule-top">
        <div className="wrap section-tight stack-sm">
          <p className="small measure">{footerNote}</p>
          <div className="row">
            {footerLinks.map((link) => (
              <a key={link.label} className="small" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          {exampleNote ? (
            <p className="note measure">{exampleNote}</p>
          ) : null}
        </div>
      </footer>
    </div>
  );
}
