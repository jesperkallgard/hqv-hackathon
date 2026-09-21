import Link from "next/link";
import { notFound } from "next/navigation";
import { listCycles, readCycle } from "@/lib/content";
import { readEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function ContributionsIndex({
  params,
}: {
  params: Promise<{ event: string }>;
}) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  if (!event) notFound();

  const cycles = await listCycles(slug);
  const summaries = await Promise.all(
    cycles.map(async (cycle) => ({ cycle, docs: await readCycle(slug, cycle) })),
  );

  return (
    <div className="stack">
      <header className="space-y-2">
        <Link href={`/${slug}`} className="muted text-sm underline-offset-4 hover:underline">
          ← {event.name}
        </Link>
        <h1 >Contributions</h1>
        <p className="measure muted">
          Everything the groups handed in, before the vote and before the curator.
          One file per group.
        </p>
      </header>

      {summaries.length === 0 ? (
        <p className="muted">Nothing handed in yet.</p>
      ) : (
        <ul className="space-y-4">
          {summaries.map(({ cycle, docs }) => (
            <li key={cycle} className="rule border-t pt-4">
              <Link
                href={`/${slug}/contributions/${cycle}`}
                className="underline-offset-4 hover:underline"
              >
                Sprint {cycle}
              </Link>
              <p className="muted text-sm">
                {docs.length} {docs.length === 1 ? "group" : "groups"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
