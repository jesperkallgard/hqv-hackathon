import { createElement, Suspense, type ComponentType } from "react";
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BlockComponent = ComponentType<any>;

export function isProduction(): boolean {
  return process.env.VERCEL_ENV === "production";
}

async function loadBlock(type: string): Promise<BlockComponent | null> {
  if (!BLOCK_TYPE.test(type)) return null;
  try {
    const mod = await import(`../app/blocks/${type}`);
    const component = (mod as { default?: BlockComponent }).default;
    return typeof component === "function" ? component : null;
  } catch {
    return null;
  }
}

export async function RenderBlock({ block }: { block: ParsedBlock }) {
  const production = isProduction();

  if (block.type === INVALID_BLOCK) {
    if (production) return null;
    return (
      <BlockWarning title="Block payload did not parse">
        {String(block.data.reason ?? "Unknown reason.")}
      </BlockWarning>
    );
  }

  const Component = await loadBlock(block.type);
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

  // The Suspense boundary is what makes the failure recoverable during server
  // rendering: without it a component that throws errors the whole response.
  return (
    <BlockBoundary fallback={fallback}>
      <Suspense fallback={null}>{createElement(Component, block.data)}</Suspense>
    </BlockBoundary>
  );
}

export function RenderBlocks({ blocks }: { blocks: ParsedBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <RenderBlock key={`${block.type}-${index}`} block={block} />
      ))}
    </>
  );
}
