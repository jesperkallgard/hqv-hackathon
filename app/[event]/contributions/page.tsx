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
    <div className="space-y-8">
      <header className="space-y-2">
        <Link href={`/${slug}`} className="text-sm text-ink-soft hover:text-lime">
          ← {event.name}
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Contributions</h1>
        <p className="max-w-2xl text-ink-soft">
          Everything the groups handed in, before the vote and before the curator.
          One file per group.
        </p>
      </header>

      {summaries.length === 0 ? (
        <p className="text-ink-soft">Nothing handed in yet.</p>
      ) : (
        <ul className="space-y-4">
          {summaries.map(({ cycle, docs }) => (
            <li key={cycle} className="border-t border-rule pt-4">
              <Link
                href={`/${slug}/contributions/${cycle}`}
                className="text-lg font-medium hover:text-lime"
              >
                Sprint {cycle}
              </Link>
              <p className="text-sm text-ink-soft">
                {docs.length} {docs.length === 1 ? "group" : "groups"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
