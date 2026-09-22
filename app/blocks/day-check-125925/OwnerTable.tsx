/**
 * Who owns what: a table of the parts of the site, the role that owns each, where it is answered and how current it is.
 */
export default function OwnerTable({ heading, intro, rows = [] }) {
  return (
    <section id="who" className="section-tight">
      <div className="wrap stack">
        <div className="stack-sm measure">
          <h2>{heading}</h2>
          <p className="muted">{intro}</p>
        </div>
        <div className="table-scroll">
          <table className="zebra">
            <thead>
              <tr>
                <th scope="col">Part of the site</th>
                <th scope="col">Owner</th>
                <th scope="col">Ask here</th>
                <th scope="col">Last checked</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.area}>
                  <td>{r.area}</td>
                  <td>{r.owner}</td>
                  <td>{r.channel}</td>
                  <td>{r.checked}</td>
                  <td><span className={r.current ? "badge" : "badge badge-accent"}>{r.state}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
