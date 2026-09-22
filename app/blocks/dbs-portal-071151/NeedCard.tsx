/**
 * Shows one need addressed to one audience: who it's for, the headline of what they need to know, and why it matters to them, with an optional small source marker near the headline. No other chrome — no status, no owner, no progress.
 */
export default function NeedCard({ audience, headline, whatItMeans, tag }) {
  return (
    <div
      style={{
        border: '1px solid var(--rule)',
        borderRadius: 'var(--radius)',
        padding: '1.25rem 1.5rem',
        background: 'var(--paper)',
        color: 'var(--ink)',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--muted)',
          marginBottom: '0.5rem',
        }}
      >
        {audience}
      </div>
      <h3
        style={{
          margin: '0 0 0.4rem 0',
          fontSize: '1.1rem',
          lineHeight: 1.3,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          gap: '0.5rem',
        }}
      >
        <span>{headline}</span>
        {tag ? (
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 'normal',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--radius)',
              padding: '0.05rem 0.45rem',
            }}
          >
            {tag}
          </span>
        ) : null}
      </h3>
      <p style={{ margin: 0, color: 'var(--ink)' }}>{whatItMeans}</p>
    </div>
  );
}
