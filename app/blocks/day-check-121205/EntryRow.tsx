/**
 * One row of the list: one line of plain text, then the owner, then the date and cadence. Hairline between rows, no card, no badge — the kind of entry is read off the sentence.
 */
export default function EntryRow({ line, owner, date, cadence, first }) {
  return (
    <li
      className={first ? undefined : "rule-top"}
      style={{ paddingTop: first ? 0 : "var(--space-6)" }}
    >
      <div className="stack-sm">
        <p className="measure" style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-snug)", margin: 0 }}>
          {line}
        </p>
        <p className="small muted" style={{ margin: 0 }}>
          Owner: {owner} · {date}
          {cadence ? ` · ${cadence}` : ""}
        </p>
      </div>
    </li>
  );
}
