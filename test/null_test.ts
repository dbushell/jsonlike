import { jsonlike } from "../mod.ts";
import { assert } from "jsr:@std/assert";

Deno.test("null", async (test) => {
  await test.step("null value", () => {
    const result = jsonlike({ test: null }, { test: "null" });
    assert(result);
  });
  await test.step("non null value", () => {
    const result = jsonlike({ test: false }, { test: "null" });
    assert(result === false);
  });
  await test.step("undefined value", () => {
    const result = jsonlike({}, { test: "null" });
    assert(result === false);
  });
});
