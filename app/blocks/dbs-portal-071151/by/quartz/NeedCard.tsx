/**
 * A single static card surfacing one outsider need: who it's for, the plain-English headline of what changed, and what it means for them. Used when a group wants to show one real audience need rather than a list.
 */
import React from "react";

/**
 * NeedCard — one audience, one thing they need to know, why it matters to them.
 */
type NeedCardProps = {
  /** Who this is for, e.g. "Market teams" */
  audience: string;
  /** The plain-English thing they need to know — states what changed, no jargon */
  headline: string;
  /** 1-2 sentences: what it means for them / what to do — not what the team did */
  whatItMeans: string;
  /** Small optional label, e.g. "husqvarna.com" */
  tag?: string;
};

export default function NeedCard({ audience, headline, whatItMeans, tag }: NeedCardProps) {
  return (
    <div
      style={{
        background: "var(--paper)",
        border: "1px solid var(--rule)",
        borderRadius: "var(--radius)",
        padding: "clamp(1.25rem, 4vw, 2rem)",
        maxWidth: "34rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "0.75rem",
          marginBottom: "0.75rem",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--muted)",
            fontWeight: 600,
          }}
        >
          {audience}
        </span>
        {tag ? (
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--muted)",
            }}
          >
            {tag}
          </span>
        ) : null}
      </div>

      <p
        style={{
          margin: 0,
          fontSize: "1.25rem",
          lineHeight: 1.35,
          fontWeight: 700,
          color: "var(--ink)",
        }}
      >
        {headline}
      </p>

      <p
        style={{
          margin: "0.75rem 0 0",
          fontSize: "1rem",
          lineHeight: 1.5,
          color: "var(--muted)",
        }}
      >
        {whatItMeans}
      </p>
    </div>
  );
}
