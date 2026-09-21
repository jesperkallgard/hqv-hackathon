/**
 * The shape of the day.
 *
 * TODO(spec): the final goal and the six sprint goals come from section 6 of
 * `cykelmotorn-byggspec.md`, and the seven fields from section 12. The spec is
 * not in the repo yet, so the entries below are placeholders. They are marked
 * so nothing silently ships a guess.
 */

export const FACILITATOR = "The DBS Bot";

export const PROJECT_NAME = "CoHack Engine";

/** Six sprints. `goal` is what the screen shows above the countdown. */
export type Sprint = {
  cycle: number;
  goal: string;
  /** Minutes the pairs have in the chat. */
  minutes: number;
};

export const FINAL_GOAL = "TODO(spec): final goal — spec section 6";

export const SPRINTS: Sprint[] = [
  { cycle: 1, goal: "TODO(spec): sprint 1 goal", minutes: 25 },
  { cycle: 2, goal: "TODO(spec): sprint 2 goal", minutes: 25 },
  { cycle: 3, goal: "TODO(spec): sprint 3 goal", minutes: 25 },
  { cycle: 4, goal: "TODO(spec): sprint 4 goal", minutes: 25 },
  { cycle: 5, goal: "TODO(spec): sprint 5 goal", minutes: 25 },
  { cycle: 6, goal: "TODO(spec): sprint 6 goal", minutes: 25 },
];

/**
 * The seven fields the day has to cover. The coverage bars on `/live` are one
 * bar per field.
 */
export const FIELDS: { id: string; label: string }[] = [
  { id: "field-1", label: "TODO(spec): field 1" },
  { id: "field-2", label: "TODO(spec): field 2" },
  { id: "field-3", label: "TODO(spec): field 3" },
  { id: "field-4", label: "TODO(spec): field 4" },
  { id: "field-5", label: "TODO(spec): field 5" },
  { id: "field-6", label: "TODO(spec): field 6" },
  { id: "field-7", label: "TODO(spec): field 7" },
];

export function sprint(cycle: number): Sprint | undefined {
  return SPRINTS.find((s) => s.cycle === cycle);
}
