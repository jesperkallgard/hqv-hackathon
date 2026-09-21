import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parse as parseYaml } from "yaml";

export const CONTENT_ROOT = path.join(process.cwd(), "content");
export const EVENTS_DIR = path.join(CONTENT_ROOT, "events");

/** Everything is scoped to one hackathon; this repo holds many. */
function canonDir(event: string): string {
  return path.join(EVENTS_DIR, event, "canon");
}

function contributionsDir(event: string): string {
  return path.join(EVENTS_DIR, event, "contributions");
}

/** A bare component name. `app/blocks/<type>.tsx` must exist for it to render. */
const BLOCK_TYPE = /^[A-Z][A-Za-z0-9]*$/;

/** Marker type for a block whose YAML payload did not parse. */
export const INVALID_BLOCK = "__invalid";

export type ParsedBlock = {
  type: string;
  data: Record<string, unknown>;
};

export type Frontmatter = {
  title?: string;
  cycle?: number;
  pair?: string;
  authors?: string[];
  field?: string;
  order?: number;
  [key: string]: unknown;
};

export type Doc = {
  /** File name without extension, e.g. `10-how-it-works` or `pair-07`. */
  slug: string;
  /** Path relative to the repo root, for links back to GitHub. */
  sourcePath: string;
  frontmatter: Frontmatter;
  blocks: ParsedBlock[];
};

/**
 * Splits a document into blocks.
 *
 * Prose runs become `Post` blocks. A fenced code block with the `block` info
 * string is parsed as YAML and becomes the block its `type` names. Nothing
 * else is special.
 */
export function parseDocument(raw: string, sourcePath: string, slug: string): Doc {
  const { frontmatter, body } = splitFrontmatter(raw);
  const blocks: ParsedBlock[] = [];

  // ```block ... ``` at the start of a line, non-greedy to the closing fence.
  const fence = /^```block[ \t]*\r?\n([\s\S]*?)^```[ \t]*$/gm;

  let cursor = 0;
  for (const match of body.matchAll(fence)) {
    const start = match.index ?? 0;
    pushProse(blocks, body.slice(cursor, start));
    blocks.push(parseBlockPayload(match[1]));
    cursor = start + match[0].length;
  }
  pushProse(blocks, body.slice(cursor));

  return { slug, sourcePath, frontmatter, blocks };
}

function pushProse(blocks: ParsedBlock[], text: string) {
  const markdown = text.trim();
  if (!markdown) return;
  blocks.push({ type: "Post", data: { markdown } });
}

function parseBlockPayload(yamlBody: string): ParsedBlock {
  let payload: unknown;
  try {
    payload = parseYaml(yamlBody);
  } catch (error) {
    return invalid(`YAML did not parse: ${(error as Error).message}`);
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return invalid("A block payload must be a YAML mapping with a `type` key.");
  }
  const record = payload as Record<string, unknown>;
  const type = record.type;
  if (typeof type !== "string" || !BLOCK_TYPE.test(type)) {
    return invalid(
      `\`type\` must be a component name matching ${BLOCK_TYPE.source}, got ${JSON.stringify(type)}.`,
    );
  }
  const data = record.data;
  return {
    type,
    data: data && typeof data === "object" && !Array.isArray(data)
      ? (data as Record<string, unknown>)
      : {},
  };
}

function invalid(reason: string): ParsedBlock {
  return { type: INVALID_BLOCK, data: { reason } };
}

function splitFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } {
  const normalised = raw.replace(/^﻿/, "");
  const match = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(normalised);
  if (!match) return { frontmatter: {}, body: normalised };
  let frontmatter: Frontmatter = {};
  try {
    const parsed = parseYaml(match[1]);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      frontmatter = parsed as Frontmatter;
    }
  } catch {
    // A broken frontmatter block must not take the page down; the document
    // still renders, it just has no metadata.
  }
  return { frontmatter, body: normalised.slice(match[0].length) };
}

async function readMarkdownDir(dir: string, relativeRoot: string): Promise<Doc[]> {
  let names: string[];
  try {
    names = await readdir(dir);
  } catch {
    return [];
  }
  const docs = await Promise.all(
    names
      .filter((name) => name.endsWith(".md"))
      .sort()
      .map(async (name) => {
        const raw = await readFile(path.join(dir, name), "utf8");
        const slug = name.replace(/\.md$/, "");
        return parseDocument(raw, path.posix.join(relativeRoot, name), slug);
      }),
  );
  return docs.sort(byOrderThenSlug);
}

function byOrderThenSlug(a: Doc, b: Doc): number {
  const ao = typeof a.frontmatter.order === "number" ? a.frontmatter.order : Number.MAX_SAFE_INTEGER;
  const bo = typeof b.frontmatter.order === "number" ? b.frontmatter.order : Number.MAX_SAFE_INTEGER;
  if (ao !== bo) return ao - bo;
  return a.slug.localeCompare(b.slug);
}

export function readCanon(event: string): Promise<Doc[]> {
  return readMarkdownDir(canonDir(event), `content/events/${event}/canon`);
}

export async function readCanonDoc(event: string, slug: string): Promise<Doc | null> {
  const docs = await readCanon(event);
  return docs.find((doc) => doc.slug === slug) ?? null;
}

/** `cycle` is the number, not the directory name. */
export function readCycle(event: string, cycle: number): Promise<Doc[]> {
  const dir = `cycle-${cycle}`;
  return readMarkdownDir(
    path.join(contributionsDir(event), dir),
    `content/events/${event}/contributions/${dir}`,
  );
}

export async function readContribution(
  event: string,
  cycle: number,
  pair: string,
): Promise<Doc | null> {
  const docs = await readCycle(event, cycle);
  return docs.find((doc) => doc.slug === pair) ?? null;
}

/** Cycle numbers that have a directory on disk, ascending. */
export async function listCycles(event: string): Promise<number[]> {
  let entries: string[];
  try {
    entries = await readdir(contributionsDir(event));
  } catch {
    return [];
  }
  return entries
    .map((name) => /^cycle-(\d+)$/.exec(name)?.[1])
    .filter((n): n is string => Boolean(n))
    .map(Number)
    .sort((a, b) => a - b);
}
