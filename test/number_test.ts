import { jsonlike } from "../mod.ts";
import { assert } from "jsr:@std/assert";

Deno.test("number", async (test) => {
  await test.step("number value", () => {
    const result = jsonlike({ test: 1 }, { test: "number" });
    assert(result);
  });
  await test.step("float value", () => {
    const result = jsonlike({ test: Math.random() / 2 }, { test: "number" });
    assert(result);
  });
  await test.step("constant value", () => {
    const result = jsonlike({ test: Number.MAX_VALUE }, { test: "number" });
    assert(result);
  });
  await test.step("notation value", () => {
    const result = jsonlike({ test: 10e5 }, { test: "number" });
    assert(result);
  });
  await test.step("non number value", () => {
    const result = jsonlike({ test: true }, { test: "number" });
    assert(result === false);
  });
  await test.step("null value", () => {
    const result = jsonlike({ test: null }, { test: "number" });
    assert(result === false);
  });
  await test.step("undefined value", () => {
    const result = jsonlike({}, { test: "number" });
    assert(result === false);
  });
});
