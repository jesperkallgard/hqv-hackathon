/**
 * The front door: header, four flat door cards in one column (name, date, one-line teaser), then sprint 1's What's changed list unchanged behind the first door, and a footer. From Team Bo (four fixed names and order, name-and-date discipline, no fifth card) and Team Ada (the one-line teaser, the list moving behind its own door).
 */
import DoorCard from "./DoorCard";
import ChangeRow from "./ChangeRow";

export default function FrontDoorPage({
  siteName = "",
  title = "",
  standfirst = "",
  exampleNote = "",
  nav = [],
  doors = [],
  listId = "",
  listTitle = "",
  listStandfirst = "",
  listExampleNote = "",
  action = null,
  entries = [],
  footerNote = "",
  footerLinks = [],
}) {
  const firstExampleDoor = doors.findIndex((d) => !d.room);
  const firstExampleRow = entries.findIndex((e) => !e.room);

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

      <main>
        <div className="wrap section">
          <div className="stack-lg">
            <div className="stack-sm">
              <h1 className="display">{title}</h1>
              {standfirst ? <p className="lead measure">{standfirst}</p> : null}
            </div>

            <ul
              className="stack"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {doors.map((door, i) => (
                <li key={door.title}>
                  {i === firstExampleDoor && exampleNote ? (
                    <p
                      className="note measure"
                      style={{ marginBottom: "var(--space-4)" }}
                    >
                      {exampleNote}
                    </p>
                  ) : null}
                  <DoorCard {...door} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section id={listId} className="wrap section rule-top">
          <div className="stack-lg">
            <div className="stack-sm">
              <h2>{listTitle}</h2>
              {listStandfirst ? (
                <p className="lead measure">{listStandfirst}</p>
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
                Nothing has been added yet. A row appears here the moment
                somebody writes down what changed, who owns it, and how often it
                is updated.
              </div>
            ) : (
              <ul
                className="stack"
                style={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {entries.map((entry, i) => (
                  <li key={i}>
                    {i === firstExampleRow && listExampleNote ? (
                      <p
                        className="note measure"
                        style={{ marginBottom: "var(--space-4)" }}
                      >
                        {listExampleNote}
                      </p>
                    ) : null}
                    <ChangeRow {...entry} first={i === 0} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
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
          {exampleNote ? <p className="note measure">{exampleNote}</p> : null}
        </div>
      </footer>
    </div>
  );
}
