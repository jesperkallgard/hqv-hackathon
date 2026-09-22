import { createElement, type ComponentType } from "react";
import { BlockBoundary } from "@/components/BlockBoundary";
import { BlockWarning } from "@/components/BlockWarning";
import { INVALID_BLOCK, type ParsedBlock } from "@/lib/content";

/**
 * The block loader.
 *
 * There is no registry. `app/blocks/` is globbed by the bundler through the
 * template-literal dynamic import below, so dropping a new `.tsx` file in that
 * directory is all it takes to make a block type exist.
 *
 * An unknown or broken block renders as a warning box in preview and is
 * omitted in production. A component the agent generated badly must never be
 * able to take the site down.
 */

const BLOCK_TYPE = /^[A-Z][A-Za-z0-9]*$/;
/** A hackathon's own folder. Checked before it reaches an import path. */
const EVENT_SLUG = /^[a-z0-9][a-z0-9-]{0,63}$/;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BlockComponent = ComponentType<any>;

export function isProduction(): boolean {
  return process.env.VERCEL_ENV === "production";
}

/**
 * The component for a block, from this hackathon first.
 *
 * Every component a group builds is written to `app/blocks/<event>/`, because
 * one repo holds many hackathons and two rooms may both build something called
 * `ProductPage`. This only ever looked in the shared root, so nothing any group
 * built was ever found: the block was written, placed in the document, and then
 * silently omitted, and the room saw a page of prose where their prototype
 * should have been.
 *
 * The shared root is still the fallback, for the components that belong to the
 * site rather than to a day.
 */
async function loadBlock(
  type: string,
  event?: string,
  group?: string,
): Promise<BlockComponent | null> {
  if (!BLOCK_TYPE.test(type)) return null;
  if (event && !EVENT_SLUG.test(event)) return null;
  if (group && !EVENT_SLUG.test(group)) return null;

  // A group's own shelf first, then what the room has merged, then the site's
  // own components. Seven groups all wanting to call it ProductPage is why the
  // shelf exists.
  const places = event
    ? [...(group ? [`${event}/by/${group}/${type}`] : []), `${event}/${type}`, type]
    : [type];

  for (const path of places) {
    try {
      const mod = await import(`../app/blocks/${path}`);
      const component = (mod as { default?: BlockComponent }).default;
      if (typeof component === "function") return component;
    } catch {
      // Try the next place it could be.
    }
  }
  return null;
}

export async function RenderBlock({
  block,
  event,
  group,
}: {
  block: ParsedBlock;
  event?: string;
  group?: string;
}) {
  const production = isProduction();

  if (block.type === INVALID_BLOCK) {
    if (production) return null;
    return (
      <BlockWarning title="Block payload did not parse">
        {String(block.data.reason ?? "Unknown reason.")}
      </BlockWarning>
    );
  }

  const Component = await loadBlock(block.type, event, group);
  if (!Component) {
    if (production) return null;
    return (
      <BlockWarning title={`Unknown block type: ${block.type}`}>
        No component at <code>app/blocks/{block.type}.tsx</code>. This box is shown in
        preview only — in production the block is omitted.
      </BlockWarning>
    );
  }

  const fallback = production ? null : (
    <BlockWarning title={`${block.type} threw while rendering`}>
      The component exists but failed. This box is shown in preview only — in
      production the block is omitted.
    </BlockWarning>
  );

  // No Suspense here. With one, React streams the block: the HTML arrives
  // with the content in a hidden segment and a placeholder in the page, and a
  // completion script swaps them once the client bundle has run. Until then
  // — on a projector that has just loaded, in a screenshot, for anyone whose
  // JavaScript is slow — the prototype is a white page. The component was
  // already resolved above, so it renders in place; the boundary still keeps
  // a component that throws from taking the page down.
  return <BlockBoundary fallback={fallback}>{createElement(Component, block.data)}</BlockBoundary>;
}

export function RenderBlocks({
  blocks,
  event,
  group,
}: {
  blocks: ParsedBlock[];
  event?: string;
  group?: string;
}) {
  return (
    <>
      {blocks.map((block, index) => (
        <RenderBlock key={`${block.type}-${index}`} block={block} event={event} group={group} />
      ))}
    </>
  );
}
