import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/lib/blocks";
import { readCanon } from "@/lib/content";
import { readEvent } from "@/lib/events";
import { readTheme } from "@/lib/read-theme";
import { fontHref, themeCss } from "@/lib/theme";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ event: string }> }) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  return { title: event?.name ?? "Made in a day", description: event?.goal };
}

/**
 * The thing itself, with nothing around it.
 *
 * The document at `/<event>` is the record: what the room decided and why, with
 * the prototype set into it. Read that way it looks like an article somebody
 * dropped a widget into, which is not what was built. This is the other half:
 * every component the room has merged, in order, on the page, with no prose, no
 * headings and no site furniture.
 *
 * It deliberately does not use the event layout. A page you are judging has to
 * be judged on its own, and a footer saying who wrote it is exactly the kind of
 * help a real product would not get.
 */
export default async function LivePage({ params }: { params: Promise<{ event: string }> }) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  if (!event) notFound();

  const docs = await readCanon(slug);
  const blocks = docs.flatMap((doc) => doc.blocks);
  const theme = await readTheme(slug);

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={fontHref(theme)} />
      <style dangerouslySetInnerHTML={{ __html: themeCss(theme) }} />
      <div className="result" style={{ minHeight: "100dvh", background: "var(--paper)" }}>
        {blocks.length === 0 ? (
          <main className="mx-auto max-w-2xl px-6 py-24">
            <p className="muted">
              Nothing has been built yet. What the room makes appears here as each sprint is
              merged.
            </p>
            <p className="mt-4 text-sm">
              <Link href={`/${slug}`} className="underline underline-offset-4">
                Read what has been decided
              </Link>
            </p>
          </main>
        ) : (
          <RenderBlocks blocks={blocks} event={slug} />
        )}
      </div>
    </>
  );
}
