/**
 * Front-door page: a minimal header naming the tool, four fixed, equal-weight cards for the CFO's four checks (two linking straight to their existing check pages, two showing the check's honest empty-state prompt in place of a figure that was never agreed), and a minimal footer.
 */
export default function CheckDoors({ toolName, doors = [] }) {
  return (
    <div style={{ color: "var(--ink)" }}>
      <header
        style={{
          borderBottom: "1px solid var(--rule)",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        <p style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>
          {toolName}
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(doors.length, 1)}, minmax(0, 1fr))`,
          gap: "1rem",
        }}
      >
        {doors.map((door) => {
          const inner = (
            <div
              style={{
                border: "1px solid var(--rule)",
                borderRadius: "var(--radius)",
                background: "var(--paper)",
                padding: "1.25rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <p style={{ margin: 0, fontWeight: 700, fontSize: "1rem" }}>
                {door.name}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  fontStyle: "italic",
                }}
              >
                {door.question}
              </p>

              <div style={{ marginTop: "auto" }}>
                {door.figure ? (
                  <>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        lineHeight: 1.3,
                      }}
                    >
                      {door.figure}
                    </p>
                    {door.illustrative ? (
                      <p
                        style={{
                          margin: "0.35rem 0 0",
                          fontSize: "0.75rem",
                          color: "var(--muted)",
                        }}
                      >
                        (illustrative)
                      </p>
                    ) : null}
                  </>
                ) : door.gapLabel ? (
                  <>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        lineHeight: 1.3,
                      }}
                    >
                      {door.gapLabel}
                    </p>
                    {door.gapNote ? (
                      <p
                        style={{
                          margin: "0.35rem 0 0",
                          fontSize: "0.8rem",
                          color: "var(--muted)",
                        }}
                      >
                        {door.gapNote}
                      </p>
                    ) : null}
                  </>
                ) : door.prompt ? (
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: "var(--muted)",
                    }}
                  >
                    {door.prompt}
                  </p>
                ) : null}
              </div>
            </div>
          );

          return door.href ? (
            <a
              key={door.name}
              href={door.href}
              style={{ color: "inherit", textDecoration: "none", display: "block" }}
            >
              {inner}
            </a>
          ) : (
            <div key={door.name}>{inner}</div>
          );
        })}
      </div>

      <footer
        style={{
          borderTop: "1px solid var(--rule)",
          marginTop: "2rem",
          paddingTop: "1rem",
          fontSize: "0.8rem",
          color: "var(--muted)",
        }}
      >
        <p style={{ margin: 0 }}>No ranking. No login. No account.</p>
      </footer>
    </div>
  );
}
