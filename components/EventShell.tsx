import Link from "next/link";
import { isProduction } from "@/lib/blocks";
import type { HackathonEvent } from "@/lib/events";

/**
 * The chrome around a page you are reading: the way back, the gutter, and the
 * one line that says what this site is.
 *
 * It is a component rather than a layout because one page underneath
 * `/<event>` must not have it. `/<event>/live` is the prototype being judged on
 * its own, and a masthead naming the room that made it is exactly the help a
 * real product would not get. A layout cannot be opted out of, so the pages
 * that want chrome ask for it.
 *
 * Everything navigational lives here and nowhere else. Each page used to open
 * with a back-link of its own, which meant three spellings of "up" and no way
 * of telling where you were.
 */
export function EventShell({
  event,
  children,
}: {
  event: HackathonEvent;
  children: React.ReactNode;
}) {
  return (
    <>
      {!isProduction() && (
        <p
          className="px-6 py-1.5 text-center text-xs font-bold"
          style={{ background: "var(--accent)", color: "var(--paper)" }}
        >
          Preview — not merged yet
        </p>
      )}

      <header className="masthead">
        <div className="shell masthead-inner">
          <Link href={`/${event.slug}`} className="masthead-name">
            {event.name}
          </Link>
          <span className="muted text-sm">One day · {event.sprintCount} sprints</span>
        </div>
      </header>

      <main className="shell py-12 sm:py-16">{children}</main>

      <footer className="rule shell muted border-t py-10 text-sm">
        <p className="measure">
          Everything here was thought up and built in a single day by the room that turned up,
          in sprints of {event.sprintMinutes} minutes.
        </p>
        <p className="mt-3">
          <Link href="/" className="underline-offset-4 hover:underline">
            Other days
          </Link>
        </p>
      </footer>
    </>
  );
}
