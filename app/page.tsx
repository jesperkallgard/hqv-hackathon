import Link from "next/link";
import { listEvents, readActiveEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

/**
 * The only page on the site that belongs to the repo rather than to a room.
 *
 * It says what these things are, because somebody landing here has no reason to
 * know, and then gets out of the way. Its look is its own — not a theme, not
 * any event's — so that stepping into a result is a visible change.
 */
export default async function EventsIndex() {
  const [events, active] = await Promise.all([listEvents(), readActiveEvent()]);

  return (
    <div className="index">
      <h1 className="index-title">Made in a day</h1>
      <p className="index-standfirst">
        Each of these is one room, one day. Groups hand in an idea a sprint, the room votes on
        every one, and what survives is built into a single thing before everyone goes home.
      </p>

      {events.length === 0 ? (
        <p className="index-standfirst">No day has run yet.</p>
      ) : (
        <ul className="mt-14">
          {events.map((event) => (
            <li key={event.slug} className="index-row">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <Link href={`/${event.slug}`}>{event.name}</Link>
                {active?.slug === event.slug && <span className="index-now">Running now</span>}
              </div>
              <p className="index-standfirst mt-1">{event.goal}</p>
              <p className="index-meta mt-2">
                {event.sprintCount} sprints of {event.sprintMinutes} minutes
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
