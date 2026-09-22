/**
 * Row now reads as a real list row: date and state tag lead on mobile in a decided order, the hover shows an accent edge from the stylesheet, and the meta line keeps owner and frequency on one baseline with drawn icons.
 */
import React from "react";

const LABEL = { shipped: "Shipped", testing: "Testing", planned: "Planned" };

function IconPerson() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="5.5" r="2.6" />
      <path d="M2.8 13.5c.7-2.4 2.7-3.7 5.2-3.7s4.5 1.3 5.2 3.7" />
    </svg>
  );
}

function IconRepeat() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 7a5.5 5.5 0 0 1 9.4-3.4L13.5 5" />
      <path d="M13.5 9a5.5 5.5 0 0 1-9.4 3.4L2.5 11" />
      <path d="M13.5 2v3h-3M2.5 14v-3h3" />
    </svg>
  );
}

export default function FeedRow({ date, title, text, owner, frequency, state, area }) {
  return (
    <li className="feed-item">
      <span className="feed-date">{date}</span>
      <div className="feed-body">
        <h3 className="feed-title">{title}</h3>
        {text ? <p className="feed-text">{text}</p> : null}
        <p className="feed-meta">
          <span><IconPerson /> <span className="feed-owner">{owner}</span></span>
          <span><IconRepeat /> Updated {frequency}</span>
        </p>
      </div>
      <div className="feed-side">
        <span className={"tag tag-" + state}>
          <span className="tag-dot" />
          {LABEL[state] || state}
        </span>
        <span className="feed-area">{area}</span>
      </div>
    </li>
  );
}
