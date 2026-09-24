/**
 * Plain-language rules for what gets posted, how updates are written, and how often areas are checked.
 */
import React from "react";

export default function HowWeWorkList({ title, intro, items = [] }) {
  return (
    <section className="section" id="how-we-work">
      <div className="section-heading">
        <div>
          <h2>{title}</h2>
          <p className="section-intro">{intro}</p>
        </div>
      </div>
      <div className="panel">
        <ul className="plain-list">
          {items.map((item) => (
            <li key={item.title}>
              <div className="rule-list">
                <div className="section-heading">
                  <h3>{item.title}</h3>
                  <span className="tag tag-filled">{item.tag}</span>
                </div>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
