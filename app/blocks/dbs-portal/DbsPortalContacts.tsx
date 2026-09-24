/**
 * Contact directory for the named owners.
 */
import React from "react";

function PersonIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="6.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 16c1.1-2.5 3.1-3.8 5.5-3.8S14.4 13.5 15.5 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function DbsPortalContacts({ title, summary, contacts }) {
  return (
    <section id="contacts">
      <div className="section-heading">
        <div className="section-heading-copy">
          <h2>{title}</h2>
          <p className="section-summary">{summary}</p>
        </div>
      </div>
      <div className="contact-grid">
        {contacts.map((contact) => (
          <article key={contact.name} className="contact-card">
            <div className="contact-avatar" aria-hidden="true">
              <PersonIcon />
            </div>
            <div className="contact-name">{contact.name}</div>
            <div className="contact-role">{contact.role}</div>
            <div className="contact-detail">{contact.detail}</div>
            <div className="meta-row">
              {contact.meta.map((item) => (
                <span key={item} className="tag tag-muted">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
