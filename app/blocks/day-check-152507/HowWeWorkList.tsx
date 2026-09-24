/**
 * A short list of working rules that explains what gets posted here and how to use the site without turning it into a status report.
 */
import React from "react";

export default function HowWeWorkList({ title, intro, steps = [] }) {
  return (
    <section className="section" id="how-we-work">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>
      <p className="section-intro">{intro}</p>
      <ol className="how-list">
        {steps.map((step, index) => (
          <li className="how-item" key={step.title}>
            <div className="step-marker">{index + 1}</div>
            <div className="feed-main">
              <div>
                <span className="tag tag-muted">{step.tag}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
