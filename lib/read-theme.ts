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

/**
 * The hackathon's own stylesheet, written by the curator from the graphic
 * tokens the facilitator set. Empty when there is none yet — before the first
 * build, the page is the goal in plain type and nothing else.
 */
export async function readStyles(event: string): Promise<string> {
  try {
    return await readFile(path.join(EVENTS_DIR, event, "styles.css"), "utf8");
  } catch {
    return "";
  }
}
