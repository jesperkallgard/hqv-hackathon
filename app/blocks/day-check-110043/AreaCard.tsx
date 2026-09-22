/**
 * One of the four front-door cards: name, one-line job, and the date it last changed — or "Nothing here yet" when nothing has been published behind it. From Team Bo and Team Cleo.
 */
export default function AreaCard({
  name = "",
  job = "",
  date = "",
  href = "#",
  emptyLabel = "Nothing here yet"
}) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        textDecoration: "none",
        color: "var(--ink)",
        background: "#F1F2F5",
        border: "1px solid var(--rule)",
        borderRadius: "var(--radius)",
        padding: "24px 24px 22px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap"
        }}
      >
        <span style={{ color: "#273B60", fontSize: 22, fontWeight: 700, lineHeight: 1.25 }}>{name}</span>
        <span style={{ fontSize: 13, color: "var(--muted)", whiteSpace: "nowrap" }}>
          {date ? date : emptyLabel}
        </span>
      </div>
      {job ? (
        <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.6, maxWidth: "58ch" }}>{job}</p>
      ) : null}
    </a>
  );
}
