/**
 * One row of the list: the plain type word in navy, the fact, the owner's name, and when it was last updated — one line, flat, no badge, no border box.
 */
export default function ChangeRow({ type, fact, owner, updated }) {
  return (
    <li
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0 0.5rem",
        alignItems: "baseline",
        padding: "1.125rem 0",
        borderBottom: "1px solid var(--rule)",
        lineHeight: 1.6,
      }}
    >
      <span style={{ color: "var(--accent)", minWidth: "4.5rem" }}>{type}</span>
      <span style={{ flex: "1 1 20rem", color: "var(--ink)" }}>{fact}</span>
      <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>
        {owner} — {updated}
      </span>
    </li>
  );
}
