import Link from "next/link";
import { listEvents, readActiveEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function EventsIndex() {
  const [events, active] = await Promise.all([listEvents(), readActiveEvent()]);

  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 py-12">
      <section>
        <h1 className="max-w-[16ch] text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] font-black tracking-[-0.035em]">
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
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-medium"
                    style={{ background: "var(--ink)", color: "var(--paper)" }}
                  >
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
