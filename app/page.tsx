import Link from "next/link";
import { PROJECT_NAME } from "@/config/day";
import { listEvents, readActiveEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function EventsIndex() {
  const [events, active] = await Promise.all([listEvents(), readActiveEvent()]);

  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm font-medium text-ink-soft">{PROJECT_NAME}</p>
        <h1 className="mt-3 max-w-[16ch] text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] font-black tracking-[-0.035em]">
          Everything this room has built
        </h1>
      </section>

      {events.length === 0 ? (
        <p className="text-ink-soft">
          No hackathon has run yet. The facilitator starts one in the chat.
        </p>
      ) : (
        <ul className="space-y-6">
          {events.map((event) => (
            <li key={event.slug} className="border-t border-rule pt-5">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <Link
                  href={`/${event.slug}`}
                  className="text-xl font-semibold tracking-tight hover:text-lime"
                >
                  {event.name}
                </Link>
                {active?.slug === event.slug && (
                  <span className="rounded-full bg-[var(--ink)] px-2 py-0.5 text-xs font-medium text-white">
                    Running now
                  </span>
                )}
              </div>
              <p className="mt-1 max-w-2xl text-ink-soft">{event.goal}</p>
              <p className="mt-1 text-sm text-ink-soft">
                {event.sprintCount} sprints of {event.sprintMinutes} minutes
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
