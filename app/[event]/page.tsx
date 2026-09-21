import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/lib/blocks";
import { readCanon } from "@/lib/content";
import { readEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function CanonPage({ params }: { params: Promise<{ event: string }> }) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  if (!event) notFound();

  const docs = await readCanon(slug);

  return (
    <div className="space-y-14">
      <section>
        <p className="text-sm font-medium text-ink-soft">{event.name}</p>
        <h1 className="mt-3 max-w-[22ch] text-[clamp(2rem,5.5vw,3.75rem)] leading-[0.98] font-black tracking-[-0.03em]">
          {event.goal}
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          <Link href={`/${slug}/contributions`} className="hover:text-lime">
            All contributions
          </Link>
        </p>
      </section>

      {docs.length === 0 ? (
        <p className="text-ink-soft">
          Nothing in the canon yet. It fills up as the day&rsquo;s winners are merged.
        </p>
      ) : (
        <>
          <nav className="border-y border-rule py-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {docs.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    href={`/${slug}/canon/${doc.slug}`}
                    className="text-ink-soft hover:text-lime"
                  >
                    {doc.frontmatter.title ?? doc.slug}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {docs.map((doc) => (
            <article key={doc.slug} id={doc.slug} className="scroll-mt-8 space-y-6">
              {doc.frontmatter.title && (
                <h2 className="text-2xl font-semibold tracking-tight">{doc.frontmatter.title}</h2>
              )}
              <RenderBlocks blocks={doc.blocks} />
            </article>
          ))}
        </>
      )}
    </div>
  );
}
