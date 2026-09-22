import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

/**
 * A canon document has no page of its own any more.
 *
 * The room builds one prototype, not a shelf of documents, and the result page
 * shows all of it — the prototype whole, and every note the curator wrote
 * beside it. A second page rendering the same file was the same content at a
 * different address, and the two drifted apart the moment either was changed.
 * Old links land on the note they were pointing at.
 */
export default async function CanonDocPage({
  params,
}: {
  params: Promise<{ event: string; slug: string }>;
}) {
  const { event, slug } = await params;
  redirect(`/${event}#${slug}`);
}
