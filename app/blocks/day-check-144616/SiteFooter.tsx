/**
 * Footer with site ownership, correction path, and latest check date.
 */
import React from "react";

export default function SiteFooter({ owner, contact, updated }) {
  return (
    <footer className="site-footer">
      <div className="footer-block">
        <strong>{owner}</strong>
        <span>{contact}</span>
      </div>
      <div className="footer-block">
        <span>{updated}</span>
        <div className="footer-actions">
          <a className="button button-quiet" href="#post-update">Post an update</a>
        </div>
      </div>
    </footer>
  );
}
