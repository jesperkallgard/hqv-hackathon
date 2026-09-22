/**
 * One row of the feed: one line of text, an owner's name, a date. Flat, no card, no badge, nothing else on the row. From Team Bo and Team Ada.
 */
export default function EntryRow({ text, owner, date }) {
  return (
    <li
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "baseline",
        gap: "4px 12px",
        padding: "20px 0",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <span style={{ flex: "1 1 340px", fontSize: 16, lineHeight: 1.55 }}>
        {text}
      </span>
      <span style={{ fontSize: 14, color: "var(--ink)", whiteSpace: "nowrap" }}>
        {owner}
      </span>
      <span
        style={{
          fontSize: 14,
          color: "var(--muted)",
          whiteSpace: "nowrap",
          minWidth: 110,
        }}
      >
        {date}
      </span>
    </li>
  );
}
