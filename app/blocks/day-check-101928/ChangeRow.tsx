/**
 * One row of the feed: date, one sentence, owner name, update frequency — left-aligned, hairline below, no card, no icon, no link.
 */
export default function ChangeRow({ date, line, owner, cadence, example }) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--rule)",
        padding: "1.15rem 0",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.35rem 1.25rem",
        alignItems: "baseline",
      }}
    >
      <div
        style={{
          flex: "0 0 5rem",
          color: "var(--muted)",
          fontSize: "0.85rem",
          whiteSpace: "nowrap",
        }}
      >
        {date}
      </div>
      <div style={{ flex: "1 1 20rem", minWidth: "14rem" }}>
        <p style={{ margin: 0, lineHeight: 1.5 }}>{line}</p>
        <p style={{ margin: "0.3rem 0 0", fontSize: "0.85rem", color: "var(--muted)" }}>
          {owner}
          {cadence ? `, ${cadence}` : ""}
          {example ? (
            <span style={{ color: "#F25421" }}>{" \u00b7 example row, not a real change"}</span>
          ) : null}
        </p>
      </div>
    </div>
  );
}
