/**
 * A full page for What’s Changed showing the site header, a newest-first feed list with one selected row, the opened post for “My Husqvarna login moved”, and a footer naming who keeps the site.
 */
import React from "react";

const FEED = [
  {
    title: "My Husqvarna login moved",
    owner: "Jonas B",
    date: "12 May 2025",
    cadence: "Monthly",
    active: true,
    status: "Live"
  },
  {
    title: "Checkout now shows Klarna before card",
    owner: "Mira Voss",
    date: "9 May 2025",
    cadence: "Weekly",
    active: false,
    status: "Monitoring"
  },
  {
    title: "Dealer locator keeps map position between searches",
    owner: "Elliot March",
    date: "7 May 2025",
    cadence: "Monthly",
    active: false,
    status: "Live"
  },
  {
    title: "Battery range table is under test on product pages",
    owner: "Lea Corbin",
    date: "5 May 2025",
    cadence: "Weekly",
    active: false,
    status: "Testing"
  },
  {
    title: "Service booking now sends workshop notes in the receipt",
    owner: "Noor Halden",
    date: "2 May 2025",
    cadence: "Monthly",
    active: false,
    status: "Live"
  },
  {
    title: "Search handles tyre and tire as the same query",
    owner: "Pavel Ivers",
    date: "29 April 2025",
    cadence: "Monthly",
    active: false,
    status: "Live"
  }
];

function StatusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.2 8.1 7 9.9l3.8-3.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 8h8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m8.5 4.5 3.5 3.5-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PortalPostPage() {
  return (
    <div>
      <header className="site-header">
        <div className="page">
          <a className="wordmark" href="#">What’s Changed</a>
          <nav className="site-nav" aria-label="Main">
            <a className="nav-link is-active" href="#feed" aria-current="page">Feed</a>
            <a className="nav-link" href="#owners">Who owns what</a>
            <a className="nav-link" href="#how">How we work</a>
            <a className="button button-primary" href="#post">Open latest change</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="page page-single">
          <section className="masthead masthead-compact">
            <h1>What changed this week</h1>
            <p className="lede">One place to see what changed, what it meant, and who to ask. Every post names an owner and how often it is updated.</p>
          </section>

          <section className="section" id="feed">
            <div className="section-head">
              <h2>Newest first</h2>
              <p className="lede">Each row stays short in the feed: headline, owner and date.</p>
            </div>

            <div className="feed-list" role="list" aria-label="What changed feed">
              {FEED.map(function (item) {
                return (
                  <a
                    key={item.title}
                    href={item.active ? "#post" : "#"}
                    className={"feed-row" + (item.active ? " is-active" : "")}
                    aria-current={item.active ? "true" : undefined}
                  >
                    <div className="feed-main">
                      <span className="feed-title">{item.title}</span>
                    </div>
                    <div className="feed-meta">
                      <span>{item.owner}</span>
                      <span>{item.date}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          <section className="section" id="post">
            <article className="opened-post">
              <div className="opened-post-head">
                <div className="stack-s">
                  <span className="tag">Live</span>
                  <h2>My Husqvarna login moved</h2>
                </div>
                <div className="post-actions">
                  <a className="button button-outline" href="#feed">Back to feed</a>
                </div>
              </div>

              <div className="post-grid">
                <div className="post-main stack-l">
                  <div className="post-field stack-s">
                    <h3>Audience</h3>
                    <p>Anyone who signs in to My Husqvarna from the website, plus service teams and dealers who help customers find the right route back in.</p>
                  </div>

                  <div className="post-field stack-s">
                    <h3>Summary</h3>
                    <p>The login entry point moved out of the old account area and into the main site header. People who bookmarked the earlier page now land on a sign-in screen with a new address. Support questions should point people to the new route, not the retired one.</p>
                  </div>

                  <div className="post-field stack-s">
                    <h3>What changed</h3>
                    <ul className="detail-list">
                      <li>The old account page no longer starts the sign-in flow.</li>
                      <li>The header link is now the main way in on desktop and mobile.</li>
                      <li>Links in help articles and dealer replies should use the new address.</li>
                    </ul>
                  </div>
                </div>

                <aside className="post-side stack">
                  <div className="meta-card">
                    <h3>Post details</h3>
                    <dl className="meta-list">
                      <div>
                        <dt>Status</dt>
                        <dd><span className="tag"><StatusIcon /> Live since 12 May 2025</span></dd>
                      </div>
                      <div>
                        <dt>Owner</dt>
                        <dd>Jonas B</dd>
                      </div>
                      <div>
                        <dt>Updated</dt>
                        <dd>Monthly</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="meta-card meta-card-plain">
                    <h3>Where to go next</h3>
                    <p className="small">Use the current sign-in route when you share help, answer support questions, or update dealer guidance.</p>
                    <a className="button button-primary" href="#">
                      Open the new login route
                      <ArrowIcon />
                    </a>
                  </div>
                </aside>
              </div>
            </article>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="page">
          <div>
            <h4>What’s Changed</h4>
            <p>Kept by the web operations team. Helena Drew, Web operations, keeps the site current and fixes gaps here rather than in chat threads.</p>
          </div>
          <div>
            <h4>On this site</h4>
            <ul>
              <li><a href="#feed">Feed</a></li>
              <li><a href="#owners">Who owns what</a></li>
              <li><a href="#how">How we work</a></li>
            </ul>
          </div>
          <div>
            <h4>Posting rule</h4>
            <ul>
              <li>Say what changed.</li>
              <li>Say what it meant.</li>
              <li>Name the owner and cadence.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
