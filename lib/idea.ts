import type { Doc, ParsedBlock } from "./content";

/**
 * A group's hand-in, read as the thing it is.
 *
 * A sprint no longer produces a prototype per group; it produces an idea, and
 * an idea has a fixed shape: a title, an ingress, exactly five points, and the
 * requirements under them. The engine writes that shape twice — once in the
 * frontmatter so machines can read it, once in the body so the file reads like
 * something a person wrote. Rendering the body as markdown would therefore put
 * the ingress and the five points on the page a second time, as a wall of
 * prose, which is exactly what the five points exist to avoid.
 *
 * So the frontmatter is the source, and the body is mined only for what the
 * frontmatter does not carry: the requirements.
 */
export type Idea = {
  title: string;
  ingress: string;
  points: string[];
  authors: string[];
  /** Markdown. Whatever the group wrote under the five points. */
  requirements: string;
  /**
   * Anything in the file that is not prose. Ideas do not carry components any
   * more, but hackathons that ran when groups still built things do, and their
   * pages have to keep working.
   */
  blocks: ParsedBlock[];
};

export function readIdea(doc: Doc): Idea | null {
  const { title, ingress, points, authors } = doc.frontmatter;
  // No five points means this file predates ideas. The caller renders it the
  // old way rather than pretending it has a shape it never had.
  if (!Array.isArray(points) || points.length === 0) return null;

  const cleanPoints = points.filter((point): point is string => typeof point === "string");
  if (cleanPoints.length === 0) return null;

  const prose = doc.blocks
    .filter((block) => block.type === "Post")
    .map((block) => String(block.data.markdown ?? ""))
    .join("\n\n");

  const lead = typeof ingress === "string" ? ingress : "";

  return {
    title: typeof title === "string" ? title : doc.slug,
    ingress: lead,
    points: cleanPoints,
    authors: Array.isArray(authors) ? authors.filter((a): a is string => typeof a === "string") : [],
    requirements: requirementsOf(prose, lead, cleanPoints),
    blocks: doc.blocks.filter((block) => block.type !== "Post"),
  };
}

/**
 * The body with the ingress and the five points taken off the front.
 *
 * Each is consumed in turn and only if it actually matches, so a file that was
 * written by hand, or by an older engine, degrades to showing more of itself
 * rather than to showing nothing.
 */
function requirementsOf(body: string, ingress: string, points: string[]): string {
  let rest = body;
  if (ingress) rest = consume(rest, ingress) ?? rest;
  for (const point of points) {
    const next = consume(rest, `-${point}`);
    if (next === null) break;
    rest = next;
  }
  return rest.trim();
}

/**
 * Drops `candidate` from the front of `text`, ignoring every difference in
 * whitespace. The same sentence is hard-wrapped differently in the frontmatter
 * and in the body, so comparing them literally would never match.
 */
function consume(text: string, candidate: string): string | null {
  let i = 0;
  let j = 0;
  const isSpace = (char: string) => /\s/.test(char);

  while (j < candidate.length) {
    while (j < candidate.length && isSpace(candidate[j])) j++;
    if (j >= candidate.length) break;
    while (i < text.length && isSpace(text[i])) i++;
    if (i >= text.length || text[i] !== candidate[j]) return null;
    i++;
    j++;
  }
  return text.slice(i);
}
