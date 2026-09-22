/**
 * One door into one area. Label and date line, nothing else.
 * From Team Bo and Team Dag.
 */
export default function AreaCard({ label, dateLine, href }) {
  const body = (
    <>
      <span
        style={{
          display: "block",
          fontSize: 22,
          lineHeight: 1.3,
          fontWeight: 700,
          color: "#273B60",
        }}
      >
        {label}
      </span>
      {dateLine ? (
        <span
          style={{
            display: "block",
            marginTop: 8,
            fontSize: 13,
            lineHeight: 1.5,
            color: "var(--muted)",
          }}
        >
          {dateLine}
        </span>
      ) : null}
    </>
  );

  return (
    <li style={{ marginBottom: 24 }}>
      {href ? (
        <a
          href={href}
          style={{
            display: "block",
            padding: "24px 20px",
            background: "var(--panel, #F1F2F5)",
            borderRadius: "var(--radius)",
            textDecoration: "none",
          }}
        >
          {body}
        </a>
      ) : (
        <div
          style={{
            display: "block",
            padding: "24px 20px",
            background: "var(--panel, #F1F2F5)",
            borderRadius: "var(--radius)",
          }}
        >
          {body}
        </div>
      )}
    </li>
  );
}
