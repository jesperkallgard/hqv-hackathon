/**
 * One row of the log: one line of plain text, then owner, then date, with a hairline above every row after the first. Ownership rows get a quiet 'ownership' tag so a re-posted confirmation reads as a standing fact, not a change.
 */
export default function LogRow({ line, owner, date, kind, first = false }) {
  return (
    <li className={first ? "" : "rule-top"} style={{ paddingTop: first ? 0 : "var(--space-4)" }}>
      <div className="stack-sm">
        <p style={{ margin: 0 }}>{line}</p>
        <div className="row small muted">
          <span>{owner}</span>
          <span aria-hidden="true">·</span>
          <span>{date}</span>
          {kind === "ownership" ? <span className="badge">ownership</span> : null}
        </div>
      </div>
    </li>
  );
}
