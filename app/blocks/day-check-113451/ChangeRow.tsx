/**
 * One row of the list: a sentence, then owner, date and how often it is updated in quiet type. Hairline above, no box, no icon, no colour by type. From Team Ada's row format plus Team Cleo's cadence requirement.
 */
export default function ChangeRow({
  text = "",
  owner = "",
  date = "",
  cadence = "",
  first = false,
}) {
  return (
    <div
      className={first ? "stack-sm" : "stack-sm rule-top"}
      style={{ paddingTop: first ? 0 : "var(--space-4)" }}
    >
      <p className="measure" style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-snug)" }}>
        {text}
      </p>
      <p className="small" style={{ color: "var(--muted)" }}>
        <span style={{ color: "var(--ink)" }}>{owner}</span>
        {date ? <span>{" · " + date}</span> : null}
        {cadence ? <span>{" · " + cadence}</span> : null}
      </p>
    </div>
  );
}
