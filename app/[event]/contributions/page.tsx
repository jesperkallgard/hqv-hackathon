import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

/**
 * There is nothing to see here any more.
 *
 * This used to be a page whose whole content was one link per sprint. The
 * result page carries that list beside the thing the sprints produced, which is
 * the only place it means anything — a sprint number on its own tells a reader
 * nothing. The address stays alive because it has been handed out.
 */
export default async function ContributionsIndex({
  params,
}: {
  params: Promise<{ event: string }>;
}) {
  const { event } = await params;
  redirect(`/${event}#ideas`);
}
