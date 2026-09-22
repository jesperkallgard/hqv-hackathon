import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/lib/blocks";
import { readCanon } from "@/lib/content";
import { readEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ event: string }> }) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  return { title: event?.name ?? "Made in a day", description: event?.goal };
}

/**
 * The thing itself, with nothing around it.
 *
 * The result page at `/<event>` is the record: the prototype set into what the
 * room decided and why. This is the other half — every component the room has
 * merged, in order, on the page, with no prose, no headings and no site
 * furniture.
 *
 * It is the one page under an event that asks for no chrome. A page you are
 * judging has to be judged on its own, and a masthead naming the room that made
 * it is exactly the help a real product would not get. The theme still comes
 * from the layout, because the prototype is the event's, not ours.
 */
export default async function LivePage({ params }: { params: Promise<{ event: string }> }) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  if (!event) notFound();

  const docs = await readCanon(slug);
  // Prose is a block too: the parser wraps every paragraph in a Post. Keeping
  // them here would put the commentary back on the page, which is the thing
  // this view exists to get away from.
  const blocks = docs.flatMap((doc) => doc.blocks).filter((block) => block.type !== "Post");

  if (blocks.length > 0) return <RenderBlocks blocks={blocks} event={slug} />;

  // Sprint one, on a projector, in front of the room that is about to fill it.
  // The goal in the room's own words is the most useful thing this page can
  // hold until there is something to show.
  return (
    <main className="holding">
      <p className="eyebrow">{event.name}</p>
      <p className="holding-goal">{event.goal}</p>
      <p className="muted holding-note">
        This page is empty on purpose. It fills with the first thing the room votes through.
      </p>
      <p className="holding-note">
        <Link href={`/${slug}`} className="underline underline-offset-4">
          See where the day has got to
        </Link>
      </p>
    </main>
  );
}
