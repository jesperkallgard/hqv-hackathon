/**
 * The invitation, halfway down.
 *
 * The room said the site is meant to invite people to contribute rather than
 * only to be read. That only happens if the page asks, and asks somewhere a
 * person reaches having just seen what other people put in.
 */
import React from "react";

export default function DbsPortalPromo({ title, body, action }) {
  return (
    <section className="promo" id="submit">
      <div className="promo-copy">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <a className="button button-primary" href={action.href}>
        {action.label}
      </a>
    </section>
  );
}
