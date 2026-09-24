/**
 * Kaj, as a drawer over the page you were already reading.
 *
 * Asking a question is not leaving the site, so it does not become a page. The
 * drawer opens on `:target` — the field in the band links to it — which keeps
 * the whole thing server-rendered and still lets a person open and close it.
 *
 * The exchange follows what two groups landed on in the last sprint: a vague
 * question goes in, the answer names the owner and the team rather than
 * guessing, and it ends with the next step instead of ending at a name.
 */
import React from "react";

export default function DbsPortalCai({ title, exchange }) {
  return (
    <aside className="cai-drawer" id="ask-kaj" aria-label={title}>
      <a className="cai-scrim" href="#" aria-label="Close" />
      <div className="cai-panel" role="dialog" aria-modal="false" aria-label={title}>
        <div className="cai-head">
          <span className="cai-dot" aria-hidden="true" />
          <span className="cai-name">{title}</span>
          <a className="cai-close" href="#" aria-label="Close">
            Close
          </a>
        </div>

        <div className="cai-thread">
          {exchange.turns.map((turn, index) =>
            turn.who === "them" ? (
              <p key={index} className="cai-bubble cai-bubble-them">
                {turn.text}
              </p>
            ) : (
              <div key={index} className="cai-bubble cai-bubble-kaj">
                <p className="cai-line">{turn.text}</p>
                {turn.owner ? (
                  <div className="cai-owner">
                    <span className="cai-owner-label">Owner</span>
                    <span className="cai-owner-name">{turn.owner.name}</span>
                    <span className="cai-owner-team">{turn.owner.team}</span>
                  </div>
                ) : null}
              </div>
            ),
          )}
        </div>

        <div className="cai-foot">
          <p className="cai-next-label">What would you like to do?</p>
          <div className="cai-choices">
            {exchange.choices.map((choice, index) => (
              <button
                key={choice}
                type="button"
                className={index === 0 ? "button button-primary" : "button button-secondary"}
              >
                {choice}
              </button>
            ))}
          </div>
          <p className="cai-limit">{exchange.limit}</p>
        </div>
      </div>
    </aside>
  );
}
