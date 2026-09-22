/**
 * A grid of clean cards, one per named audience, stating the one concrete need/question that audience has of DBS — "the wall" for surfacing real needs before posts get written.
 */
import React from "react";

type NeedItem = {
  audience: string;
  need: string;
};

type NeedsWallProps = {
  /** One card per audience: who they are and the one concrete question/need they have of DBS. */
  items: Array<NeedItem>;
};

export default function NeedsWall({ items }: NeedsWallProps) {
  return (
    <div className="needswall">
      <style>{`
        .needswall {
          --nw-ink: var(--ink, #1a1a1a);
          --nw-paper: var(--paper, #ffffff);
          --nw-accent: var(--accent, #c0392b);
          --nw-muted: var(--muted, #6b6b6b);
          --nw-rule: var(--rule, #e0e0e0);
          --nw-radius: var(--radius, 10px);

          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
          padding: 1.5rem;
          background: var(--nw-paper);
          box-sizing: border-box;
        }

        .needswall-card {
          background: var(--nw-paper);
          border: 1px solid var(--nw-rule);
          border-radius: var(--nw-radius);
          padding: 1.25rem 1.25rem 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          box-sizing: border-box;
        }

        .needswall-audience {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--nw-accent);
          margin: 0;
        }

        .needswall-need {
          font-size: 1.05rem;
          line-height: 1.45;
          color: var(--nw-ink);
          margin: 0;
          font-weight: 500;
        }

        .needswall-empty {
          color: var(--nw-muted);
          font-size: 0.95rem;
          padding: 1rem;
        }

        @media (max-width: 480px) {
          .needswall {
            grid-template-columns: 1fr;
            padding: 1rem;
            gap: 1rem;
          }
        }
      `}</style>

      {items && items.length > 0 ? (
        items.map((item, i) => (
          <div className="needswall-card" key={i}>
            <p className="needswall-audience">{item.audience}</p>
            <p className="needswall-need">{item.need}</p>
          </div>
        ))
      ) : (
        <p className="needswall-empty">No needs added yet.</p>
      )}
    </div>
  );
}
