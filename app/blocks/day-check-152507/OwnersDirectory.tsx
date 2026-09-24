/**
 * Owner directory for key website areas, each with a named owner, role, scope, and update rhythm.
 */
import React from "react";

export default function OwnersDirectory({ title, intro, people = [] }) {
  return (
    <section className="section" id="owners">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>
      <p className="section-intro">{intro}</p>
      <div className="owners-grid">
        {people.map((person) => (
          <article className="owner-card" key={person.area}>
            <div className="owner-line">
              <div>
                <div className="owner-name">{person.area}</div>
                <div className="owner-role">{person.name}</div>
                <div className="owner-role">{person.role}</div>
              </div>
              <span className="tag tag-muted">{person.cadence}</span>
            </div>
            <p className="owner-detail">{person.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
