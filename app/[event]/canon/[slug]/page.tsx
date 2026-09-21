import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/lib/blocks";
import { readCanonDoc } from "@/lib/content";
import { readEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function CanonDocPage({
  params,
}: {
  params: Promise<{ event: string; slug: string }>;
}) {
  const { event: eventSlug, slug } = await params;
  const [event, doc] = await Promise.all([readEvent(eventSlug), readCanonDoc(eventSlug, slug)]);
  if (!event || !doc) notFound();

  return (
    <article className="space-y-6">
      <Link
        href={`/${eventSlug}`}
        className="text-sm text-ink-soft hover:text-lime"
      >
        ← {event.name}
      </Link>
      {doc.frontmatter.title && (
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          {doc.frontmatter.title}
        </h1>
      )}
      <RenderBlocks blocks={doc.blocks} />
    </article>
  );
}
