import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export const EVENTS_DIR = path.join(process.cwd(), "content", "events");

/**
 * A hackathon, as the agent wrote it when the facilitator started the day.
 * This repo holds every hackathon that has run, so nothing here is global.
 */
export type Participant = { name: string; discipline: string };

export type HackathonEvent = {
  slug: string;
  name: string;
  goal: string;
  participants: Participant[];
  sprintMinutes: number;
  sprintCount: number;
  createdAt: string;
};

function looksLikeEvent(value: unknown): value is HackathonEvent {
  if (!value || typeof value !== "object") return false;
  const e = value as Partial<HackathonEvent>;
  return typeof e.slug === "string" && typeof e.name === "string" && typeof e.goal === "string";
}

export async function readEvent(slug: string): Promise<HackathonEvent | null> {
  try {
    const raw = await readFile(path.join(EVENTS_DIR, slug, "event.json"), "utf8");
    const parsed: unknown = JSON.parse(raw);
    return looksLikeEvent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/** Newest first — the hackathon running today belongs at the top. */
export async function listEvents(): Promise<HackathonEvent[]> {
  let names: string[];
  try {
    names = await readdir(EVENTS_DIR);
  } catch {
    return [];
  }
  const events = await Promise.all(
    names.filter((name) => !name.startsWith(".") && !name.endsWith(".json")).map(readEvent),
  );
  return events
    .filter((event): event is HackathonEvent => event !== null)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function readActiveEvent(): Promise<HackathonEvent | null> {
  try {
    const raw = await readFile(path.join(EVENTS_DIR, "active.json"), "utf8");
    const slug = (JSON.parse(raw) as { slug?: unknown }).slug;
    return typeof slug === "string" ? readEvent(slug) : null;
  } catch {
    return null;
  }
}
