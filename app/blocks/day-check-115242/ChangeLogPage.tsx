/**
 * The whole page: header with the team name and a single filled 'Post an update' action, the title 'What's changed', the room's ingress, a one-line note about example content, then one flat list of rows (one line, owner, date) with hairlines between, newest first — ownership rows sit in the same list. Footer states the rules the list is kept to.
 */
import LogRow from "./LogRow";

export default function ChangeLogPage({
  team = "Web team",
  title = "What's changed",
  ingress = "",
  exampleNote = "",
  entries = [],
  rules = [],
  footerNote = "",
}) {
  return (
    <div>
      <header className="rule-bottom">
        <div className="wrap section-tight">
          <div className="split">
            <div className="row">
              <strong>{team}</strong>
              <a className="small" href="#">Internal</a>
            </div>
            <a className="button button-primary" href="#">Post an update</a>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap section">
          <div className="stack-lg">
            <div className="stack-sm">
              <h1 className="display">{title}</h1>
              {ingress ? <p className="lead measure">{ingress}</p> : null}
              {exampleNote ? <p className="note measure">{exampleNote}</p> : null}
            </div>

            {entries.length === 0 ? (
              <div className="empty">
                Nothing has been posted yet. A row appears here the moment
                someone posts one line, their name and today's date.
              </div>
            ) : (
              <ul className="stack" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {entries.map((entry, i) => (
                  <LogRow key={i} {...entry} first={i === 0} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>

      <footer className="rule-top">
        <div className="wrap section-tight">
          <div className="stack-sm">
            {rules.length > 0 ? (
              <ul className="stack-sm small measure" style={{ paddingLeft: "var(--space-4)", margin: 0 }}>
                {rules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            ) : null}
            {footerNote ? <p className="note">{footerNote}</p> : null}
          </div>
        </div>
      </footer>
    </div>
  );
}
