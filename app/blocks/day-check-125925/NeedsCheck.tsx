/**
 * A short plain list at the top naming everything currently stale and since when, or one line saying there is nothing to flag.
 */
export default function NeedsCheck({ heading, items = [], emptyLine }) {
  return (
    <section id="needs-check" className="stack-sm measure">
      <h2>{heading}</h2>
      {items.length === 0 ? (
        <p>{emptyLine}</p>
      ) : (
        <ul className="stack-sm" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((i) => (
            <li key={i.area}>
              {i.area} &mdash; not checked since {i.since}.
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
