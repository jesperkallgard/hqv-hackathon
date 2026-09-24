import { notFound } from "next/navigation";
import { RenderBlocks } from "@/lib/blocks";
import { readCanon } from "@/lib/content";
import { readEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

/**
 * One page of the prototype, on its own, with nothing of ours around it.
 *
 * `/<event>/live` is the front door. Once a prototype is more than one page,
 * its own navigation has to lead somewhere that looks like the page it came
 * from — a link out of the bare view into our framed one reads as leaving the
 * product, which is exactly what this view exists to avoid.
 */
export default async function LiveDocPage({
  params,
}: {
  params: Promise<{ event: string; slug: string }>;
}) {
  const { event: eventSlug, slug } = await params;
  const event = await readEvent(eventSlug);
  if (!event) notFound();

  const doc = (await readCanon(eventSlug)).find((one) => one.slug === slug);
  if (!doc) notFound();

  const blocks = doc.blocks.filter((block) => block.type !== "Post");
  if (blocks.length === 0) notFound();

  return (
    <div className="canvas">
      <RenderBlocks blocks={blocks} event={eventSlug} />
    </div>
  );
}
