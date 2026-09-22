/**
 * One of the four doors: name, last-update date, one line of the newest entry. Flat panel, no shadow, whole card is the link. From Team Bo and Team Ada.
 */
export default function DoorCard({ title = "", href = "#", date = "", teaser = "" }) {
  return (
    <a
      href={href}
      className="panel stack-sm"
      style={{ display: "block", textDecoration: "none", color: "var(--ink)" }}
    >
      <div className="split">
        <h2 style={{ fontSize: "var(--text-xl)", margin: 0 }}>{title}</h2>
        <span className="small" style={{ color: "var(--muted)" }}>
          Updated {date}
        </span>
      </div>
      {teaser ? (
        <p className="measure" style={{ margin: 0 }}>
          {teaser}
        </p>
      ) : (
        <p className="note measure" style={{ margin: 0 }}>
          Nothing posted yet. The first entry appears here as soon as somebody
          writes one, with an owner and how often it is updated.
        </p>
      )}
    </a>
  );
}
