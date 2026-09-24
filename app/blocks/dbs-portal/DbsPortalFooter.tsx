/**
 * Simple page footer with links.
 */
import React from "react";

export default function DbsPortalFooter({ footer }) {
  return (
    <footer className="site-footer">
      <div>{footer.text}</div>
      <div className="footer-links">
        {footer.links.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </div>
    </footer>
  );
}
