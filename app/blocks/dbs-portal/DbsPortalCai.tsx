/**
 * What happens after you ask — the room's own design for Kaj, shown rather
 * than described.
 *
 * Two groups landed on the same shape in the last sprint: a vague question
 * goes in, the answer names the owner and the team rather than guessing, and
 * it ends with the next step instead of ending at a name. Three choices, not a
 * menu, and it says plainly when a question is not its to answer.
 */
import React from "react";

export default function DbsPortalCai({ title, summary, exchange }) {
  return (
    <section id="kaj">
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>

      <div className="cai">
        <div className="cai-head">
          <span className="cai-dot" aria-hidden="true" />
          <span className="cai-name">Kaj</span>
          <span className="cai-state">{exchange.state}</span>
        </div>

        <p className="cai-ask">{exchange.question}</p>

        <div className="cai-reply">
          <p className="cai-line">{exchange.answer}</p>

          <div className="cai-owner">
            <span className="cai-owner-label">Owner</span>
            <span className="cai-owner-name">{exchange.owner.name}</span>
            <span className="cai-owner-team">{exchange.owner.team}</span>
          </div>

          <p className="cai-next-label">What would you like to do?</p>
          <div className="cai-choices">
            {exchange.choices.map((choice, index) => (
              <button key={choice} type="button" className={index === 0 ? "button button-primary" : "button button-secondary"}>
                {choice}
              </button>
            ))}
          </div>

          <p className="cai-limit">{exchange.limit}</p>
        </div>
      </div>
    </section>
  );
}
