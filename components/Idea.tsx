import Link from "next/link";
import { RenderBlocks } from "@/lib/blocks";
import type { Doc } from "@/lib/content";
import { readIdea } from "@/lib/idea";
import { renderMarkdown } from "@/lib/markdown";

/**
 * An idea, shown as an idea.
 *
 * Two densities of the same thing and no third. `IdeaCard` is what you read
 * when you are scanning a sprint: the claim, the pitch, the five points. The
 * full sheet adds the requirements, which are written for whoever builds it and
 * are not what anybody skims.
 */

function byline(authors: string[], fallback: string): string {
  if (authors.length === 0) return fallback;
  if (authors.length === 1) return authors[0];
  return `${authors.slice(0, -1).join(", ")} and ${authors[authors.length - 1]}`;
}

function Points({ points }: { points: string[] }) {
  return (
    <ol className="points mt-5">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ol>
  );
}

/**
 * One idea in a list of them. The title is the link; nothing else is.
 *
 * It names the group and not the sprint: these only ever appear on a page that
 * is already one sprint, and repeating the number seven times down it is noise
 * where the byline is the thing that differs.
 */
export function IdeaCard({ doc, href }: { doc: Doc; href: string }) {
  const idea = readIdea(doc);
  if (!idea) return <LegacyCard doc={doc} href={href} />;

  return (
    <article className="idea">
      <p className="eyebrow">{byline(idea.authors, doc.slug)}</p>
      <h3 className="idea-title mt-2">
        <Link href={href}>{idea.title}</Link>
      </h3>
      {idea.ingress && <p className="lead muted mt-3">{idea.ingress}</p>}
      <Points points={idea.points} />
      <p className="mt-5 text-sm">
        <Link href={href} className="muted underline-offset-4 hover:underline">
          What it has to do →
        </Link>
      </p>
    </article>
  );
}

/** One idea on its own page: everything the group handed in. */
export function IdeaSheet({
  doc,
  event,
  cycle,
}: {
  doc: Doc;
  event: string;
  cycle: number;
}) {
  const idea = readIdea(doc);

  if (!idea) {
    // A hand-in from before ideas existed, when a group committed whatever it
    // had built. Rendered the way it was written.
    return (
      <article className="stack">
        <p className="eyebrow">Sprint {cycle}</p>
        <h1 className="display">{doc.frontmatter.title ?? doc.slug}</h1>
        <div className="bleed">
          <div className="canvas">
            <RenderBlocks blocks={doc.blocks} event={event} group={doc.slug} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article>
      <p className="eyebrow">
        Sprint {cycle} · {byline(idea.authors, doc.slug)}
      </p>
      <h1 className="display mt-3">{idea.title}</h1>
      {idea.ingress && <p className="lead measure mt-5">{idea.ingress}</p>}
      <Points points={idea.points} />

      {idea.requirements && (
        <section className="mt-12">
          <h2 className="section-label">What it has to do</h2>
          <div
            className="prose mt-4"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(idea.requirements) }}
          />
        </section>
      )}

      {idea.blocks.length > 0 && (
        <div className="bleed mt-12">
          <div className="canvas">
            <RenderBlocks blocks={idea.blocks} event={event} group={doc.slug} />
          </div>
        </div>
      )}
    </article>
  );
}

function LegacyCard({ doc, href }: { doc: Doc; href: string }) {
  return (
    <article className="idea">
      <h3 className="idea-title">
        <Link href={href}>{doc.frontmatter.title ?? doc.slug}</Link>
      </h3>
      <p className="muted mt-2 text-sm">
        {byline(
          Array.isArray(doc.frontmatter.authors) ? doc.frontmatter.authors : [],
          doc.slug,
        )}
      </p>
    </article>
  );
}
