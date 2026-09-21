import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/lib/blocks";
import { readCycle } from "@/lib/content";
import { readEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function CyclePage({
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

  const docs = await readCycle(slug, cycle);

  return (
    <div className="stack">
      <header className="space-y-2">
        <Link
          href={`/${slug}/contributions`}
          className="muted text-sm underline-offset-4 hover:underline"
        >
          ← Contributions
        </Link>
        <h1 >Sprint {cycle}</h1>
        <p className="muted">
          {event.sprintMinutes} minutes of {event.name}
        </p>
      </header>

      {docs.length === 0 ? (
        <p className="muted">No group has handed in yet.</p>
      ) : (
        docs.map((doc) => (
          <article key={doc.slug} className="stack rule border-t pt-8">
            <div>
              <Link
                href={`/${slug}/contributions/${cycle}/${doc.slug}`}
                className="underline-offset-4 hover:underline"
              >
                {doc.frontmatter.title ?? doc.slug}
              </Link>
              <p className="muted text-sm">
                {doc.frontmatter.authors?.length
                  ? doc.frontmatter.authors.join(" and ")
                  : doc.slug}
              </p>
            </div>
            <RenderBlocks blocks={doc.blocks} />
          </article>
        ))
      )}
    </div>
  );
}
