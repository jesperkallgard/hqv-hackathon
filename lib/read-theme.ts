import { readFile } from "node:fs/promises";
import path from "node:path";
import { EVENTS_DIR } from "./events";
import { DEFAULT_THEME, parseTheme, type Theme } from "./theme";

/** An event with no theme looks plain, never like the last one that had one. */
export async function readTheme(event: string): Promise<Theme> {
  try {
    const raw = await readFile(path.join(EVENTS_DIR, event, "theme.json"), "utf8");
    return parseTheme(JSON.parse(raw));
  } catch {
    return DEFAULT_THEME;
  }
}
