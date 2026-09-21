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

  const docs = await readCycle(slug, cycle);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <Link
          href={`/${slug}/contributions`}
          className="text-sm text-[var(--ink-soft)] hover:text-[var(--brand)]"
        >
          ← Contributions
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Sprint {cycle}</h1>
        <p className="text-[var(--ink-soft)]">
          {event.name} · {event.sprintMinutes} minutes
        </p>
      </header>

      {docs.length === 0 ? (
        <p className="text-[var(--ink-soft)]">No group has handed in yet.</p>
      ) : (
        docs.map((doc) => (
          <article key={doc.slug} className="space-y-4 border-t border-[var(--rule)] pt-8">
            <div>
              <Link
                href={`/${slug}/contributions/${cycle}/${doc.slug}`}
                className="text-xl font-semibold tracking-tight hover:text-[var(--brand)]"
              >
                {doc.frontmatter.title ?? doc.slug}
              </Link>
              <p className="text-sm text-[var(--ink-soft)]">
                {doc.slug}
                {doc.frontmatter.authors?.length
                  ? ` · ${doc.frontmatter.authors.join(" & ")}`
                  : ""}
              </p>
            </div>
            <RenderBlocks blocks={doc.blocks} />
          </article>
        ))
      )}
    </div>
  );
}
