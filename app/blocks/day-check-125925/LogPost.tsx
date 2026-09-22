/**
 * One post in the log: date, heading, what changed, what it meant, owner and cadence, separated from the next by a hairline.
 */
export default function LogPost({ date, heading, changed, meant, owner, cadence, first }) {
  return (
    <article className={first ? "stack-sm" : "stack-sm rule-top"} style={{ paddingTop: first ? 0 : "var(--space-8)" }}>
      <p className="note">{date}</p>
      <h2 className="measure-heading">{heading}</h2>
      <div className="stack-sm measure">
        <p>{changed}</p>
        <p>{meant}</p>
      </div>
      <p className="small muted">
        <span>Owner: {owner}</span>
        <span aria-hidden="true"> · </span>
        <span>{cadence}</span>
      </p>
    </article>
  );
}
