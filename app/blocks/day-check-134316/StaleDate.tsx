/**
 * Prints an updated date, and after 21 days adds "Not touched in N weeks" as plain text in the same weight — no colour, no badge. Team Ada.
 */
import React from "react";

function days(from, to) {
  const a = Date.parse(from + "T00:00:00Z");
  const b = Date.parse(to + "T00:00:00Z");
  if (isNaN(a) || isNaN(b)) return 0;
  return Math.floor((b - a) / 86400000);
}

export default function StaleDate({ updated, today, staleDays = 21 }) {
  if (!updated) return null;
  const age = today ? days(updated, today) : 0;
  const stale = age >= staleDays;
  const weeks = Math.round(age / 7);
  return (
    <span>
      updated {updated}
      {stale ? <span> — Not touched in {weeks} weeks</span> : null}
    </span>
  );
}
