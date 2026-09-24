/**
 * What was added most recently, with the newest one given the room.
 *
 * One highlight carries the newest thing; the others sit beside it, three
 * across, so the page has a clear newest-content entry point without the rest
 * disappearing behind a control somebody has to operate.
 */
import React from "react";

export default function DbsPortalRecent({ title, summary, featured, items }) {
  return (
    <section id="recent">
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>

      <article className="recent-featured">
        <p className="recent-kicker">Newest</p>
        <h3>{featured.title}</h3>
        <p className="recent-body">{featured.body}</p>
        <p className="recent-by">
          {featured.author ? <span className="owner-line">By {featured.author}</span> : null}
          {featured.date ? <span>{featured.date}</span> : null}
        </p>
      </article>

      <div className="recent-rail">
        {items.map((item) => (
          <article key={item.title} className="recent-card">
            <h4>{item.title}</h4>
            <p>{item.body}</p>
            <p className="recent-by">
              {item.author ? <span className="owner-line">By {item.author}</span> : null}
              {item.date ? <span>{item.date}</span> : null}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
