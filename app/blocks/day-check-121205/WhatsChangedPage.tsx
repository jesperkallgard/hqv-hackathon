/**
 * The whole page: header, the single newest-first list of one-line entries with owner and date, the rule that earns a row its place, and a footer. Built from Team Dag and Team Bo, which proposed the same page.
 */
import EntryRow from "./EntryRow";

export default function WhatsChangedPage({
  title = "What's changed",
  standfirst,
  exampleNote,
  entries = [],
  rule,
  footerNote,
}) {
  return (
    <div>
      <header className="rule-bottom">
        <div className="wrap section-tight">
          <div className="split">
            <span className="label" style={{ color: "var(--heading-ink)" }}>
              Web team
            </span>
            <span className="small muted">Internal</span>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap section">
          <div className="stack-lg">
            <div className="stack-sm">
              <h1 className="display measure-heading">{title}</h1>
              {standfirst ? <p className="lead measure">{standfirst}</p> : null}
              <div className="row">
                <a className="button button-primary" href="#">
                  Add a row
                </a>
              </div>
            </div>

            <div className="stack">
              {exampleNote ? <p className="note measure">{exampleNote}</p> : null}

              {entries.length === 0 ? (
                <div className="empty">
                  Nothing has been added yet. A row appears here the moment
                  somebody writes one line, names an owner and says how often it
                  is checked.
                </div>
              ) : (
                <ul
                  className="stack"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {entries.map((entry, i) => (
                    <EntryRow key={i} {...entry} first={i === 0} />
                  ))}
                </ul>
              )}
            </div>

            {rule ? (
              <div className="panel stack-sm">
                <p className="label">What earns a row its place</p>
                <p className="measure">{rule}</p>
              </div>
            ) : null}
          </div>
        </div>
      </main>

      <footer className="rule-top">
        <div className="wrap section-tight">
          <div className="split">
            <span className="small muted">{footerNote}</span>
            <span className="small muted">Newest first. No search box.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
