import Link from "next/link";
import { PROJECT_NAME } from "@/config/day";
import { listEvents, readActiveEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function EventsIndex() {
  const [events, active] = await Promise.all([listEvents(), readActiveEvent()]);

  return (
    <div className="space-y-10">
      <section>
        <p className="text-xs font-medium tracking-widest text-[var(--brand)] uppercase">
          {PROJECT_NAME}
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-balance">
          Everything this room has built
        </h1>
      </section>

      {events.length === 0 ? (
        <p className="text-[var(--ink-soft)]">
          No hackathon has run yet. The facilitator starts one in the chat.
        </p>
      ) : (
        <ul className="space-y-6">
          {events.map((event) => (
            <li key={event.slug} className="border-t border-[var(--rule)] pt-5">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <Link
                  href={`/${event.slug}`}
                  className="text-xl font-semibold tracking-tight hover:text-[var(--brand)]"
                >
                  {event.name}
                </Link>
                {active?.slug === event.slug && (
                  <span className="rounded-full bg-[var(--brand)] px-2 py-0.5 text-xs font-medium text-white">
                    Running now
                  </span>
                )}
              </div>
              <p className="mt-1 max-w-2xl text-[var(--ink-soft)]">{event.goal}</p>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">
                {event.participants.length} people · {event.sprintCount} sprints of{" "}
                {event.sprintMinutes} minutes
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
