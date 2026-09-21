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

export default async function CanonPage({ params }: { params: Promise<{ event: string }> }) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  if (!event) notFound();

  const docs = await readCanon(slug);

  return (
    <div className="stack">
      <section>
        <p className="muted text-sm font-medium">{event.name}</p>
        <h1 className="measure mt-3">
          {event.goal}
        </h1>
        {/* The thing first. Somebody arriving here wants to see what the room
            built, not read about it, and what they built has to survive being
            looked at without the commentary holding it up. */}
        <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link
            href={`/${slug}/live`}
            className="rule inline-block border px-4 py-2 font-bold underline-offset-4 hover:underline"
          >
            Open the page on its own
          </Link>
          <Link href={`/${slug}/contributions`} className="muted underline-offset-4 hover:underline">
            Everything handed in
          </Link>
        </p>
      </section>

      {docs.length === 0 ? (
        <p className="muted">
          Nothing in the canon yet. It fills up as the day&rsquo;s winners are merged.
        </p>
      ) : (
        <>
          <nav className="rule border-y py-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {docs.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    href={`/${slug}/canon/${doc.slug}`}
                    className="muted underline-offset-4 hover:underline"
                  >
                    {doc.frontmatter.title ?? doc.slug}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {docs.map((doc) => (
            <article key={doc.slug} id={doc.slug} className="stack scroll-mt-8">
              {doc.frontmatter.title && <h2>{doc.frontmatter.title}</h2>}
              {/* Set in a frame, so it reads as the thing being discussed
                  rather than an illustration dropped into an article. */}
              <div className="rule overflow-hidden border">
                <RenderBlocks blocks={doc.blocks} event={slug} />
              </div>
            </article>
          ))}
        </>
      )}
    </div>
  );
}
