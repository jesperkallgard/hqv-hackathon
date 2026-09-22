/**
 * One row in the What's changed list. Headline links onward to the post; owner,
 * cadence and date sit quiet at the end.
 */
export default function ChangeRow({
  line = "",
  owner = "",
  meta = "",
  date = "",
  href = "#",
  first = false
}) {
  return (
    <div
      style={{
        borderTop: first ? "none" : "1px solid var(--rule)",
        padding: "18px 0",
        display: "flex",
        gap: 24,
        alignItems: "baseline",
        flexWrap: "wrap"
      }}
    >
      <div style={{ flex: "1 1 340px", minWidth: 0 }}>
        <a
          href={href}
          style={{
            color: "#273B60",
            fontSize: 16,
            lineHeight: 1.5,
            textDecoration: "none",
            borderBottom: "1px solid var(--rule)"
          }}
        >
          {line}
        </a>
      </div>
      <div style={{ flex: "0 1 auto", fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
        {owner}
        {meta ? <span> &middot; {meta}</span> : null}
      </div>
      <div style={{ flex: "0 0 auto", fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{date}</div>
    </div>
  );
}
