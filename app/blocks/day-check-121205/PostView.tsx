/**
 * The single post a row opens into: back link, headline, audience as a plain sentence, the three-line summary with air between the lines, then status/owner/cadence as one plain line, and exactly one link onward, styled as a link and not a button.
 */
"use client";

export default function PostView({ post, areaName, onBack }) {
  if (!post) return null;
  const lines = post.summary || [];

  return (
    <div className="stack-lg">
      <div className="stack-sm">
        <a
          href="#"
          className="small"
          onClick={(e) => {
            e.preventDefault();
            if (onBack) onBack();
          }}
        >
          Back to {areaName}
        </a>
        <h1 className="display measure-heading">{post.headline}</h1>
        <p className="lead measure">{post.audience}</p>
      </div>

      <div className="panel stack-lg">
        <div className="stack">
          {lines.map((l, i) => (
            <p key={i} className="measure">
              {l}
            </p>
          ))}
        </div>

        <div className="stack-sm rule-top" style={{ paddingTop: "var(--space-4)" }}>
          <p className="small muted">
            {post.status}. Owned by {post.owner}. {post.cadence}.
          </p>
          <p>
            <a href="#">{post.linkOnward}</a>
          </p>
        </div>
      </div>

      {post.note ? <p className="note measure">{post.note}</p> : null}
    </div>
  );
}
