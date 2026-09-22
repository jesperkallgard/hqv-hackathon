/**
 * One row of the list: a single line of what changed, then owner, cadence and date. No second line, no tags, no description — Team Ada's and Team Cleo's shared rule.
 */
export default function ChangeRow({ line, owner, meta, date, first = false }) {
  return (
    <div
      style={{
        padding: "22px 0",
        borderTop: first ? "none" : "1px solid var(--rule)",
        display: "flex",
        gap: 24,
        alignItems: "baseline",
        flexWrap: "wrap"
      }}
    >
      <p style={{ margin: 0, flex: "1 1 340px", fontSize: 16, lineHeight: 1.55 }}>
        {line}
        <span style={{ color: "var(--muted)" }}>
          {" \u2014 "}
          {owner}
          {meta ? ", " + meta : ""}
        </span>
      </p>
      <span style={{ fontSize: 13, color: "var(--muted)", whiteSpace: "nowrap" }}>{date}</span>
    </div>
  );
}
