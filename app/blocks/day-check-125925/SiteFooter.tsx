/**
 * The page footer: the name of the page, who keeps it, and the four areas again.
 */
export default function SiteFooter({ title, kept, links = [] }) {
  return (
    <footer className="section-tight rule-top">
      <div className="wrap split small muted">
        <span>{title}</span>
        <nav className="row small">
          {links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <span>{kept}</span>
      </div>
    </footer>
  );
}
