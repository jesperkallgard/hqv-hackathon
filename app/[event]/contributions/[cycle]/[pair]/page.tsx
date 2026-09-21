import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/lib/blocks";
import { readContribution } from "@/lib/content";
import { readEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function ContributionPage({
  params,
}: {
  params: Promise<{ event: string; cycle: string; pair: string }>;
}) {
  const { event: slug, cycle: raw, pair } = await params;
  const cycle = Number(raw);
  if (!Number.isInteger(cycle) || cycle < 1) notFound();

  const [event, doc] = await Promise.all([
    readEvent(slug),
    readContribution(slug, cycle, pair),
  ]);
  if (!event || !doc) notFound();

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <Link
          href={`/${slug}/contributions/${cycle}`}
          className="text-sm text-ink-soft hover:text-lime"
        >
          ← Sprint {cycle}
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          {doc.frontmatter.title ?? doc.slug}
        </h1>
        <p className="text-sm text-ink-soft">
          {doc.frontmatter.authors?.length
            ? doc.frontmatter.authors.join(" and ")
            : doc.slug}
        </p>
      </header>
      <RenderBlocks blocks={doc.blocks} />
    </article>
  );
}
