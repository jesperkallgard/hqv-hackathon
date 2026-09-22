/**
 * One post: the question as the heading, owner and cadence directly under it, the answer in short paragraphs, and — where the post is about the test programme — the table of running tests inside it.
 */
export default function PostEntry({
  question,
  owner,
  cadence,
  date,
  body = [],
  tests = [],
  first = false,
}) {
  return (
    <article
      className={first ? "stack" : "stack rule-top"}
      style={first ? undefined : { paddingTop: "var(--space-8)" }}
    >
      <div className="stack-sm">
        <h2 className="measure-heading">{question}</h2>
        <p className="note">
          {owner}
          {cadence ? " · " : ""}
          {cadence}
          {date ? " · " : ""}
          {date}
        </p>
      </div>

      <div className="stack-sm">
        {body.map((p) => (
          <p key={p} className="measure">
            {p}
          </p>
        ))}
      </div>

      {tests.length > 0 ? (
        <div className="table-scroll">
          <table className="zebra">
            <thead>
              <tr>
                <th scope="col">Test</th>
                <th scope="col">Area</th>
                <th scope="col">Owner</th>
                <th scope="col" className="numeric">Split</th>
                <th scope="col">Ends</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((t) => (
                <tr key={t.name}>
                  <td>{t.name}</td>
                  <td>{t.area}</td>
                  <td>{t.owner}</td>
                  <td className="numeric">{t.split}</td>
                  <td>{t.ends}</td>
                  <td>
                    <span className={t.state === "Running" ? "badge badge-accent" : "badge"}>
                      {t.state}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </article>
  );
}
