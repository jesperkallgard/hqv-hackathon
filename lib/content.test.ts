import assert from "node:assert/strict";
import { test } from "node:test";
import { INVALID_BLOCK, parseDocument } from "./content.ts";

const doc = (body: string) => parseDocument(body, "test.md", "test");

test("prose becomes Post blocks", () => {
  const { blocks } = doc("Hello.\n\nWorld.");
  assert.equal(blocks.length, 1);
  assert.equal(blocks[0].type, "Post");
  assert.equal(blocks[0].data.markdown, "Hello.\n\nWorld.");
});

test("frontmatter is parsed and removed from the body", () => {
  const { frontmatter, blocks } = doc("---\ntitle: T\npair: pair-07\n---\n\nBody.");
  assert.equal(frontmatter.title, "T");
  assert.equal(frontmatter.pair, "pair-07");
  assert.equal(blocks[0].data.markdown, "Body.");
});

test("a fenced block becomes its named block, prose around it stays prose", () => {
  const { blocks } = doc(
    "Before.\n\n```block\ntype: RoadmapTimeline\ndata:\n  items:\n    - label: Q1\n```\n\nAfter.",
  );
  assert.deepEqual(
    blocks.map((b) => b.type),
    ["Post", "RoadmapTimeline", "Post"],
  );
  assert.deepEqual(blocks[1].data, { items: [{ label: "Q1" }] });
});

test("a block without data still renders with empty props", () => {
  const { blocks } = doc("```block\ntype: Divider\n```");
  assert.deepEqual(blocks[0], { type: "Divider", data: {} });
});

test("a bad type is marked invalid rather than thrown", () => {
  for (const bad of ["lowercase", "Has-Dash", "", "12Block"]) {
    const { blocks } = doc("```block\ntype: " + bad + "\n```");
    assert.equal(blocks[0].type, INVALID_BLOCK, `expected ${bad} to be rejected`);
  }
});

test("unparseable YAML is marked invalid rather than thrown", () => {
  const { blocks } = doc("```block\ntype: X\n  bad: [indent\n```");
  assert.equal(blocks[0].type, INVALID_BLOCK);
});

test("broken frontmatter does not lose the body", () => {
  const { frontmatter, blocks } = doc("---\ntitle: [unclosed\n---\n\nBody survives.");
  assert.deepEqual(frontmatter, {});
  assert.equal(blocks[0].data.markdown, "Body survives.");
});

test("an HTML comment from the curator is kept in the document", () => {
  const { blocks } = doc("Text.\n\n<!-- merged from pair-07 -->");
  assert.match(String(blocks[0].data.markdown), /merged from pair-07/);
});
