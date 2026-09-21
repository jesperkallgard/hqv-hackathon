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
        <p className="muted mt-3 text-sm">
          <Link href={`/${slug}/contributions`} className="underline-offset-4 hover:underline">
            All contributions
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
              {doc.frontmatter.title && (
                <h2 >{doc.frontmatter.title}</h2>
              )}
              <RenderBlocks blocks={doc.blocks} event={slug} />
            </article>
          ))}
        </>
      )}
    </div>
  );
}
