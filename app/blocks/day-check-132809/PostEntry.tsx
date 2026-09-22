/**
 * One post: plain title, owner and cadence on one line, body sentences, and the date it last changed. Used once per post.
 */
export default function PostEntry({ title, owner, ownerRole, cadence, lastChanged, body = [] }) {
  return (
    <article className="stack-sm">
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <p className="small muted" style={{ margin: 0 }}>
        <span>{owner}</span>
        {ownerRole ? <span>, {ownerRole}</span> : null}
        <span> · Updated {cadence}</span>
        <span> · Last changed {lastChanged}</span>
      </p>
      <div className="stack-sm measure">
        {body.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
    </article>
  );
}
