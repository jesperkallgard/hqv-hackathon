import { Marked } from "marked";

/**
 * One configured instance, reused. `async: false` keeps `parse` synchronous so
 * blocks can render inside a server component without an extra await.
 */
const marked = new Marked({ gfm: true, breaks: false, async: false });

export function renderMarkdown(source: string): string {
  return marked.parse(source) as string;
}
