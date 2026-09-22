/**
 * One row in an area list: the line, then owner, date and cadence on a quiet second line. Clicking the line opens the post. Hairline between rows, no border around them.
 */
"use client";

export default function EntryRow({
  line,
  owner,
  date,
  cadence,
  first = false,
  onOpen,
}) {
  return (
    <li
      className={first ? undefined : "rule-top"}
      style={{
        paddingTop: first ? 0 : "var(--space-4)",
        paddingBottom: "var(--space-4)",
      }}
    >
      <div className="stack-sm">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onOpen) onOpen();
          }}
          className="measure"
          style={{
            display: "block",
            fontSize: "var(--text-lg)",
            lineHeight: "var(--leading-snug)",
            color: "var(--heading-ink)",
            textDecoration: "none",
          }}
        >
          {line}
        </a>
        <p className="small muted">
          {owner} · {date} · {cadence}
        </p>
      </div>
    </li>
  );
}
