/**
 * The whole page: header and nav across the four areas, the stale list at the top, the log of dated posts, what we're testing, how we do things, and the footer.
 */
import LogPost from "./LogPost";
import NeedsCheck from "./NeedsCheck";

export default function TeamLog({
  title,
  standfirst,
  questions = [],
  needsCheck = {},
  posts = [],
  testsHeading,
  testsIntro,
  tests = [],
  howHeading,
  footerNote,
  contact,
  practices = [],
}) {
  return (
    <div>
      <header className="section-tight rule-bottom">
        <div className="wrap">
          <div className="split">
            <strong style={{ color: "var(--heading-ink)" }}>{title}</strong>
            <nav className="row small">
              <a href="#log">What&rsquo;s changed</a>
              <a href="#tests">What we&rsquo;re testing</a>
              <a href="#how">How we do things</a>
              <a href="#who">Who owns what</a>
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

          <NeedsCheck {...needsCheck} />

          <section id="log" className="stack">
            <div className="stack-sm measure">
              <h2>What&rsquo;s changed</h2>
              <p className="muted">Newest first. Each post says what changed and what it meant.</p>
            </div>
            <div className="stack-sm">
              {posts.map((p, i) => (
                <LogPost key={p.heading} {...p} first={i === 0} />
              ))}
            </div>
          </section>

          <section id="tests" className="stack">
            <div className="stack-sm measure">
              <h2>{testsHeading}</h2>
              <p className="muted">{testsIntro}</p>
            </div>
            <div className="table-scroll">
              <table className="zebra">
                <thead>
                  <tr>
                    <th scope="col">Test</th>
                    <th scope="col">Where</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Runs until</th>
                    <th scope="col">State</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((t) => (
                    <tr key={t.name}>
                      <td>{t.name}</td>
                      <td>{t.where}</td>
                      <td>{t.owner}</td>
                      <td>{t.until}</td>
                      <td>
                        <span className={t.running ? "badge badge-accent" : "badge"}>{t.state}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="how" className="stack">
            <div className="stack-sm measure">
              <h2>{howHeading}</h2>
              <p>{footerNote}</p>
            </div>
            <ul className="stack-sm" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {practices.map((p) => (
                <li key={p.heading} className="rule-top" style={{ paddingTop: "var(--space-3)" }}>
                  <div className="stack-sm measure">
                    <strong style={{ color: "var(--heading-ink)" }}>{p.heading}</strong>
                    <p>{p.body}</p>
                    <p className="note">{p.owner} &middot; {p.cadence}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="panel stack-sm measure">
              <p className="note">{contact}</p>
              <p><a className="button button-primary" href="#log">Write a post</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
