/**
 * A door, not a preview: the name and when it was last updated.
 */
import React from "react";

export default function DoorCard({ index, name, updated }) {
  return (
    <li className="door">
      <a className="door-link" href="#">
        <span className="door-index">{index}</span>
        <span className="door-body">
          <span className="door-name">{name}</span>
          <span className="door-updated">{updated}</span>
        </span>
        <svg className="door-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 10h11" />
          <path d="M10.5 5.5 15 10l-4.5 4.5" />
        </svg>
      </a>
    </li>
  );
}
