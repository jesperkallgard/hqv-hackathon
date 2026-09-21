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
    <article className="stack">
      <Link
        href={`/${eventSlug}`}
        className="muted text-sm underline-offset-4 hover:underline"
      >
        ← {event.name}
      </Link>
      {doc.frontmatter.title && (
        <h1 className="text-balance">
          {doc.frontmatter.title}
        </h1>
      )}
      <RenderBlocks blocks={doc.blocks} event={slug} />
    </article>
  );
}
