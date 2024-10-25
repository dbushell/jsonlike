import { jsonlike } from "../mod.ts";
import { assert } from "jsr:@std/assert";

Deno.test("string", async (test) => {
  await test.step("string value", () => {
    const result = jsonlike({ test: "test" }, { test: "string" });
    assert(result);
  });
  await test.step("non string value", () => {
    const result = jsonlike({ test: false }, { test: "string" });
    assert(result === false);
  });
  await test.step("null value", () => {
    const result = jsonlike({ test: null }, { test: "string" });
    assert(result === false);
  });
  await test.step("undefined value", () => {
    const result = jsonlike({}, { test: "string" });
    assert(result === false);
  });
});
