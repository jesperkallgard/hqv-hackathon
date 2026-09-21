import { renderMarkdown } from "@/lib/markdown";

/**
 * The base block. Every run of prose in a document becomes one of these.
 *
 * It is also the block the agent should reach for when a pair just wants to
 * write something — a named block is only worth generating when the content
 * needs a shape that prose cannot carry.
 */
export default function Post({ markdown }: { markdown?: string }) {
  if (typeof markdown !== "string" || !markdown.trim()) return null;
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
    />
  );
}
