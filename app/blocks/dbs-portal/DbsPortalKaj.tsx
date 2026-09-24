/**
 * Kaj section with prompt chips and the primary call to action.
 */
import React from "react";

function ChatIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4 5.5h12v8H8.2L5 16v-2.5H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 8.5h6M7 11h4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function DbsPortalKaj({ kaj }) {
  return (
    <section id="kaj" className="kaj-panel">
      <div className="kaj-copy">
        <div className="section-kicker"><ChatIcon /><span>{kaj.title}</span></div>
        <h2>{kaj.title}</h2>
        <p className="section-summary section-summary-strong">{kaj.body}</p>
        <p className="kaj-prompt">{kaj.prompt}</p>
        <div className="chip-row">
          {kaj.chips.map((chip) => (
            <a key={chip} className="tag tag-action" href="#">{chip}</a>
          ))}
        </div>
      </div>
      <div className="kaj-action">
        <a className="button button-primary" href={kaj.action.href}>{kaj.action.label}</a>
      </div>
    </section>
  );
}
