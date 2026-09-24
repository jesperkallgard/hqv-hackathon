/**
 * Single-column list of the four fixed front-door areas with update date, owner, cadence, and link.
 */
import React from "react";

export default function FrontDoorCards({ title, intro, cards = [] }) {
  return (
    <section className="section" aria-labelledby="front-door-title">
      <div className="section-heading">
        <div>
          <h2 id="front-door-title">{title}</h2>
          <p className="section-intro">{intro}</p>
        </div>
      </div>

      <div className="front-door-list">
        {cards.map((card) => (
          <article className="front-door-card" key={card.title}>
            <div className="front-door-card-head">
              <div>
                <h3 className="front-door-card-title">{card.title}</h3>
                <p className="front-door-card-summary">{card.summary}</p>
              </div>
              <span className="tag">{card.tag}</span>
            </div>

            <div className="front-door-card-meta">
              <div>
                <span className="meta-label">Last updated</span>
                <span className="meta-value">{card.lastUpdated}</span>
              </div>
              <div>
                <span className="meta-label">Owner</span>
                <span className="meta-value">{card.owner}</span>
              </div>
              <div>
                <span className="meta-label">Cadence</span>
                <span className="meta-value">{card.cadence}</span>
              </div>
            </div>

            <div className="front-door-card-footer">
              <a className="button button-secondary" href={card.href}>
                {card.actionLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
