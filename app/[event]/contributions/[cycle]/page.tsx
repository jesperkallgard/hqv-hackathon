import Link from "next/link";
import { notFound } from "next/navigation";
import { EventShell } from "@/components/EventShell";
import { IdeaCard } from "@/components/Idea";
import { listCycles, readCycle } from "@/lib/content";
import { readEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ event: string; cycle: string }>;
}) {
  const { event: slug, cycle } = await params;
  const event = await readEvent(slug);
  return { title: event ? `Sprint ${cycle} — ${event.name}` : "Made in a day" };
}

/**
 * One sprint's ideas, in full enough to judge.
 *
 * This is the page the projector points a QR code at while a sprint is being
 * voted on, so the five points have to be readable here — following a link per
 * group to find out what they are is a vote nobody casts. What is not here is
 * the requirements, which are written for whoever builds the thing and are one
 * click away on the idea's own page.
 */
export default async function SprintPage({
  params,
}: {
  params: Promise<{ event: string; cycle: string }>;
}) {
  const { event: slug, cycle: raw } = await params;
  const cycle = Number(raw);
  if (!Number.isInteger(cycle) || cycle < 1) notFound();

  const event = await readEvent(slug);
  if (!event) notFound();
  // "Sprint 99 — no group has handed in yet" reads as a true statement about a
  // real sprint. A day has as many sprints as it was set up with.
  if (cycle > event.sprintCount) notFound();

  const [docs, cycles] = await Promise.all([readCycle(slug, cycle), listCycles(slug)]);
  // Sprints that exist, plus this one. A link to sprint 5 in the middle of
  // sprint 2 is a link to an empty room.
  const known = [...new Set([...cycles, cycle])].sort((a, b) => a - b);

  return (
    <EventShell event={event}>
      <header>
        <p className="eyebrow">{event.sprintMinutes} minutes</p>
        <h1 className="mt-3">Sprint {cycle}</h1>
        {known.length > 1 && (
          <nav className="switcher mt-6">
            {known.map((n) =>
              n === cycle ? (
                <span key={n} aria-current="page" className="switcher-now">
                  {n}
                </span>
              ) : (
                <Link key={n} href={`/${slug}/contributions/${n}`}>
                  {n}
                </Link>
              ),
            )}
          </nav>
        )}
      </header>

      {docs.length === 0 ? (
        <p className="muted mt-12">
          No group has handed in yet. Ideas appear here as the sprint runs, and the clock
          running out writes up anything nobody had time to hand in.
        </p>
      ) : (
        <div className="ideas mt-12">
          {docs.map((doc) => (
            <IdeaCard
              key={doc.slug}
              doc={doc}
              href={`/${slug}/contributions/${cycle}/${doc.slug}`}
            />
          ))}
        </div>
      )}
    </EventShell>
  );
}
