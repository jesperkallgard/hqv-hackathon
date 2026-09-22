import assert from "node:assert/strict";
import { test } from "node:test";
import { parseDocument } from "./content.ts";
import { readIdea } from "./idea.ts";

/** Exactly what the engine writes: the same five things twice over. */
const HAND_IN = `---
title: "Stock lives on the product"
ingress: "A bike is only in stock if the one that fits you is in the building."
points:
  - "Stock is counted per size."
  - "Buy refuses a size that is out."
  - "Size defaults to the most common one."
  - "Four buttons, not a dropdown."
  - "No cart yet."
cycle: 1
pair: "pickle"
authors: ["Dag", "Ada"]
---

A bike is only in stock if the one
that fits you is in the building.

- Stock is counted per size.
- Buy refuses a size that is out.
- Size defaults to the most common one.
- Four buttons, not a dropdown.
- No cart yet.

It has to carry one real bike. **Out of scope:** checkout.
`;

test("an idea is read from the frontmatter, not the prose", () => {
  const idea = readIdea(parseDocument(HAND_IN, "pickle.md", "pickle"));
  assert.ok(idea);
  assert.equal(idea.title, "Stock lives on the product");
  assert.equal(idea.points.length, 5);
  assert.deepEqual(idea.authors, ["Dag", "Ada"]);
});

test("the body is stripped down to the requirements, across line wrapping", () => {
  const idea = readIdea(parseDocument(HAND_IN, "pickle.md", "pickle"));
  assert.ok(idea);
  assert.equal(idea.requirements, "It has to carry one real bike. **Out of scope:** checkout.");
});

test("a hand-in from before ideas existed is not mistaken for one", () => {
  const legacy = parseDocument("---\ntitle: T\n---\n\nWe built a thing.", "p.md", "p");
  assert.equal(readIdea(legacy), null);
});
