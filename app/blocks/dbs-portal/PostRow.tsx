/**
 * One row of the list: title, the one-line result under it, owner, last updated, status. Alternating light grey background. Shows the stated update frequency beside the date, because a post without one is not on the list.
 */
export default function PostRow({ post, alt }) {
  const td = {
    padding: "12px",
    verticalAlign: "top",
    borderBottom: "1px solid var(--rule)",
    background: alt ? "var(--rule)" : "var(--paper)",
  };

  return (
    <tr>
      <td style={td}>
        <span style={{ color: "var(--ink)" }}>{post.title}</span>
        {post.result ? (
          <span
            style={{
              display: "block",
              color: "var(--muted)",
              marginTop: "4px",
            }}
          >
            {post.result}
          </span>
        ) : null}
      </td>
      <td style={td}>{post.owner}</td>
      <td style={td}>
        {post.lastUpdated}
        <span
          style={{
            display: "block",
            color: "var(--muted)",
            marginTop: "4px",
          }}
        >
          {post.updateFrequency}
        </span>
      </td>
      <td style={td}>{post.status}</td>
    </tr>
  );
}
