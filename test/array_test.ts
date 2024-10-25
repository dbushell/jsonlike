import { jsonlike } from "../mod.ts";
import { assert } from "jsr:@std/assert";

Deno.test("array", async (test) => {
  await test.step("empty value", () => {
    const result = jsonlike({ test: [] }, { test: "array" });
    assert(result);
  });
  await test.step("filled value", () => {
    const result = jsonlike({ test: Array(5).fill(5) }, { test: "array" });
    assert(result);
  });
  await test.step("empty test value", () => {
    const result = jsonlike({ test: [] }, { test: [] });
    assert(result);
  });
  await test.step("non array value", () => {
    const result = jsonlike({ test: false }, { test: "array" });
    assert(result === false);
  });
  await test.step("null value", () => {
    const result = jsonlike({ test: null }, { test: "array" });
    assert(result === false);
  });
  await test.step("undefined value", () => {
    const result = jsonlike({}, { test: "array" });
    assert(result === false);
  });
  await test.step("filled boolean value (1)", () => {
    const result = jsonlike({ test: Array(5).fill(true) }, {
      test: ["boolean"],
    });
    assert(result);
  });
  await test.step("filled boolean value (2)", () => {
    const result = jsonlike({ test: Array(5).fill(true) }, {
      test: ["number"],
    });
    assert(result === false);
  });
  await test.step("filled null value (1)", () => {
    const result = jsonlike({ test: Array(5).fill(null) }, {
      test: ["null"],
    });
    assert(result);
  });
  await test.step("filled null value (2)", () => {
    const result = jsonlike({ test: Array(5).fill(null) }, {
      test: ["boolean"],
    });
    assert(result === false);
  });
  await test.step("filled number value (1)", () => {
    const result = jsonlike({ test: Array(5).fill(5) }, {
      test: ["number"],
    });
    assert(result);
  });
  await test.step("filled number value (2)", () => {
    const result = jsonlike({ test: Array(5).fill(5) }, {
      test: ["boolean"],
    });
    assert(result === false);
  });
  await test.step("filled string value (1)", () => {
    const result = jsonlike({ test: Array(5).fill("test") }, {
      test: ["string"],
    });
    assert(result);
  });
  await test.step("filled string value (2)", () => {
    const result = jsonlike({ test: Array(5).fill("test") }, {
      test: ["boolean"],
    });
    assert(result === false);
  });
  await test.step("object value", () => {
    const result = jsonlike({ test: [{ i: 0 }, { i: 1 }, { i: 2 }] }, {
      test: ["object"],
    });
    assert(result);
  });
  await test.step("filled object value", () => {
    const result = jsonlike({ test: [{ i: 0 }, { i: 1 }, { i: 2 }] }, {
      test: [{ i: "number" }],
    });
    assert(result);
  });
});
