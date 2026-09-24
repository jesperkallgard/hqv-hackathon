import { notFound } from "next/navigation";
import Link from "next/link";
import { EventShell } from "@/components/EventShell";
import { RenderBlocks } from "@/lib/blocks";
import { readEvent } from "@/lib/events";
import { readCanon } from "@/lib/content";

export const dynamic = "force-dynamic";

/**
 * One canon document, as its own page.
 *
 * It used to redirect to an anchor on the result page, because a room builds
 * one prototype rather than a shelf of documents and two addresses for the
 * same file drift apart. That holds while the prototype is one page. It stops
 * holding when the prototype outgrows one page: ten thousand words of front
 * door is not a front door, and the room asked for the weight to be spread.
 *
 * So a document that is not the front door renders here, on its own, in the
 * same frame and the same stylesheet the hackathon wrote. `index` stays on the
 * result page, which is still where somebody arriving is sent.
 */
export default async function CanonDocPage({
  params,
}: {
  params: Promise<{ event: string; slug: string }>;
}) {
  const { event: eventSlug, slug } = await params;
  const event = await readEvent(eventSlug);
  if (!event) notFound();

  const docs = await readCanon(eventSlug);
  const doc = docs.find((one) => one.slug === slug);
  if (!doc) notFound();

  const prototype = doc.blocks.filter((block) => block.type !== "Post");
  if (prototype.length === 0) notFound();

  return (
    <EventShell event={event}>
      <div className="space-y-10">
        <div className="frame-head">
          <h2 className="section-label">{String(doc.frontmatter?.title ?? slug)}</h2>
          <Link href={`/${eventSlug}`} className="ghost-button">
            Back to the front door
          </Link>
        </div>
        <div className="bleed">
          <div className="frame canvas">
            <RenderBlocks blocks={prototype} event={eventSlug} />
          </div>
        </div>
      </div>
    </EventShell>
  );
}
