/**
 * The first question, asked before anything else on the page.
 *
 * The room's reasoning: somebody arriving wants one of a handful of things,
 * and asking them which is cheaper than making them scan for it. The answer
 * chooses what the page opens with — it does not hide the rest, because a
 * start page that answers one question and swallows the others is a filter,
 * not a front door.
 */
import React from "react";

export default function DbsPortalRouting({ question, options }) {
  return (
    <section className="routing" id="routing" aria-labelledby="routing-question">
      <p className="routing-question" id="routing-question">
        {question}
      </p>
      <div className="chip-row chip-row-centred">
        {options.map((option) => (
          <a key={option.label} className="tag tag-action" href={option.href}>
            {option.label}
          </a>
        ))}
      </div>
    </section>
  );
}
