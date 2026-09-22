import Link from "next/link";
import { notFound } from "next/navigation";
import { EventShell } from "@/components/EventShell";
import { RenderBlocks } from "@/lib/blocks";
import { listCycles, readCanon, readCycle } from "@/lib/content";
import { readEvent } from "@/lib/events";
import { readIdea } from "@/lib/idea";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ event: string }> }) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  return { title: event?.name ?? "Made in a day", description: event?.goal };
}

/**
 * The whole day on one page, in the order a stranger needs it.
 *
 * Somebody arriving here has no idea what this is. They get, in this order:
 * what the room was trying to do, the thing it built, what it decided along the
 * way, and only then the ideas underneath — because the ideas are only worth
 * anything once you have seen what they turned into.
 *
 * Everything the canon holds is on this page. There is no second page showing
 * the same documents: `/<event>/canon/<slug>` now lands on the section here,
 * and `/<event>/live` is this same prototype with the page taken away rather
 * than a different one.
 */
export default async function ResultPage({ params }: { params: Promise<{ event: string }> }) {
  const { event: slug } = await params;
  const event = await readEvent(slug);
  if (!event) notFound();

  const [docs, cycles] = await Promise.all([readCanon(slug), listCycles(slug)]);
  const sprints = await Promise.all(
    cycles.map(async (cycle) => ({ cycle, docs: await readCycle(slug, cycle) })),
  );

  // Prose and prototype are two different things. Threaded together they read
  // as an article somebody dropped a widget into, which is not what was built.
  const prototype = docs.flatMap((doc) => doc.blocks).filter((block) => block.type !== "Post");
  const notes = docs
    .map((doc) => {
      const blocks = doc.blocks.filter((block) => block.type === "Post");
      return {
        doc,
        blocks,
        // A curated document nearly always opens with its own title as a
        // heading. Printing the frontmatter title above it says it twice.
        titled: String(blocks[0]?.data.markdown ?? "").trimStart().startsWith("#"),
      };
    })
    .filter((entry) => entry.blocks.length > 0);

  return (
    <EventShell event={event}>
      <div className="space-y-20">
        <section>
          <p className="eyebrow">What this room set out to do</p>
          <h1 className="measure mt-4">{event.goal}</h1>
        </section>

        <section>
          {prototype.length > 0 ? (
            <>
              <div className="frame-head">
                <h2 className="section-label">The prototype, as it stands</h2>
                <Link href={`/${slug}/live`} className="ghost-button">
                  Open it on its own
                </Link>
              </div>
              <div className="frame mt-4">
                <RenderBlocks blocks={prototype} event={slug} />
              </div>
            </>
          ) : (
            /* Before the first merge this is the page on the projector and on
               twenty-five phones. It has to say where the day has got to, not
               look broken. */
            <div className="waiting">
              <p className="eyebrow">Nothing built yet</p>
              <p className="waiting-line mt-4">
                The prototype appears here the moment the room&rsquo;s first sprint is voted
                through.
              </p>
              <p className="muted measure mt-4">
                Until then the day lives in the ideas below: every group hands one in, the room
                votes on each, and what survives is built into a single thing on this page.
              </p>
            </div>
          )}
        </section>

        {notes.length > 0 && (
          <section className="decisions">
            {/* Not "what was decided": the curator writes a document with its own
                headings, and one of them is usually exactly that. A label that
                repeats the first heading under it reads as a stutter. */}
            <h2 className="section-label">Why it looks like this</h2>
            <div className="mt-6 grid gap-12 md:grid-cols-2">
              {notes.map(({ doc, blocks, titled }) => (
                <article key={doc.slug} id={doc.slug} className="scroll-mt-24">
                  {doc.frontmatter.title && !titled && (
                    <h3 className="decision-title">{doc.frontmatter.title}</h3>
                  )}
                  <div className="mt-3 text-sm">
                    <RenderBlocks blocks={blocks} event={slug} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section id="ideas" className="scroll-mt-24">
          <h2 className="section-label">The thinking behind it</h2>
          <p className="muted measure mt-3">
            {/* Present tense on purpose: this page is read in the middle of a day as
                often as after it. */}
            Every group writes one idea a sprint — five points each, and the room votes on
            all of them.
          </p>

          {sprints.length === 0 ? (
            <p className="muted mt-6">Nothing handed in yet.</p>
          ) : (
            <ul className="mt-8">
              {sprints.map(({ cycle, docs: ideas }) => (
                <li key={cycle} className="rule border-t py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <Link href={`/${slug}/contributions/${cycle}`} className="sprint-link">
                      Sprint {cycle}
                    </Link>
                    <span className="muted text-sm">
                      {ideas.length} {ideas.length === 1 ? "idea" : "ideas"}
                    </span>
                  </div>
                  {ideas.length > 0 && (
                    <p className="muted mt-2 text-sm">
                      {ideas
                        .map((doc) => readIdea(doc)?.title ?? doc.frontmatter.title ?? doc.slug)
                        .join(" · ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </EventShell>
  );
}
