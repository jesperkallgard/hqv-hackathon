/**
 * The whole page: header with the three questions it answers, a filled-in list of dated posts each carrying what changed, what it meant, an owner role and an update cadence, and a footer saying what earns a place.
 */
import LogPost from "./LogPost";

export default function TeamLog({ title, standfirst, questions = [], posts = [], footerNote, contact }) {
  return (
    <div>
      <header className="section-tight rule-bottom">
        <div className="wrap">
          <div className="split">
            <strong style={{ color: "var(--heading-ink)" }}>{title}</strong>
            <nav className="row small">
              <a href="#log">The log</a>
              <a href="#who">Who owns what</a>
              <a href="#how">How this page works</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="section">
        <div className="wrap stack-lg">
          <div className="stack-sm measure-heading">
            <h1 className="display">{standfirst}</h1>
          </div>

          {questions.length > 0 && (
            <ul className="stack-sm measure" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {questions.map((q) => (
                <li key={q} className="lead">{q}</li>
              ))}
            </ul>
          )}

          <section id="log" className="stack">
            <div className="stack-sm">
              {posts.map((p, i) => (
                <LogPost key={p.heading} {...p} first={i === 0} />
              ))}
            </div>
          </section>

          <section id="how" className="panel stack-sm measure">
            <h2>How this page works</h2>
            <p>{footerNote}</p>
            <p className="note">{contact}</p>
            <p><a className="button button-primary" href="#log">Write a post</a></p>
          </section>
        </div>
      </div>

      <footer className="section-tight rule-top">
        <div className="wrap split small muted">
          <span>{title}</span>
          <span>Kept by the web team.</span>
        </div>
      </footer>
    </div>
  );
}
