import Link from "next/link";
import { notFound } from "next/navigation";
import { EventShell } from "@/components/EventShell";
import { IdeaSheet } from "@/components/Idea";
import { readContribution } from "@/lib/content";
import { readEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ event: string; cycle: string; pair: string }>;
}) {
  const { event: slug, cycle: raw, pair } = await params;
  const cycle = Number(raw);
  if (!Number.isInteger(cycle)) return { title: "Made in a day" };
  const doc = await readContribution(slug, cycle, pair);
  return { title: doc?.frontmatter.title ?? "Made in a day" };
}

/**
 * One group's hand-in, whole.
 *
 * This is the URL the group itself is given in the chat the moment their idea
 * is written down, so it is the one page on the site that has to make sense to
 * somebody who has read nothing else: it carries the requirements as well as
 * the five points.
 */
export default async function IdeaPage({
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
    <EventShell event={event}>
      <IdeaSheet doc={doc} event={slug} cycle={cycle} />
      <p className="rule mt-16 border-t pt-6 text-sm">
        <Link
          href={`/${slug}/contributions/${cycle}`}
          className="muted underline-offset-4 hover:underline"
        >
          Every idea from sprint {cycle}
        </Link>
      </p>
    </EventShell>
  );
}
