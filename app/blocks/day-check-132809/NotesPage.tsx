/**
 * The whole internal notes page: header with the three standing questions, one column of posts most recent first, and a footer stating the rule for what belongs here. Takes the posts as data.
 */
import PostEntry from "./PostEntry";

export default function NotesPage({ title, standfirst, questions = [], posts = [], footerNote, updatedLine }) {
  return (
    <div>
      <header className="section-tight rule-bottom">
        <div className="wrap">
          <div className="split" style={{ alignItems: "baseline", gap: "var(--space-4)" }}>
            <strong style={{ fontSize: "var(--text-base)" }}>{title}</strong>
            <nav className="row small" style={{ gap: "var(--space-4)" }}>
              <a href="#posts">Posts</a>
              <a href="#owners">Owners</a>
              <a href="#">Write a post</a>
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
            <ul className="stack-sm" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {questions.map((q) => (
                <li key={q} className="lead measure">{q}</li>
              ))}
            </ul>
          )}

          <p className="note">{updatedLine}</p>
        </div>
      </div>

      <div id="posts" className="wrap">
        <ul className="stack-lg" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {posts.map((p, i) => (
            <li key={p.title} className={i === 0 ? "rule-top" : "rule-top"} style={{ paddingTop: "var(--space-8)" }}>
              <PostEntry {...p} />
            </li>
          ))}
        </ul>
      </div>

      <footer id="owners" className="section" style={{ marginTop: "var(--space-16)", background: "var(--surface)" }}>
        <div className="wrap stack-sm measure">
          <p>{footerNote}</p>
          <p className="small muted">
            Wrong, or out of date? Go to the owner named on the post. <a href="#">Write a post</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
