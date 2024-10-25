import { jsonlike } from "../mod.ts";
import { assert } from "jsr:@std/assert";

Deno.test("boolean", async (test) => {
  await test.step("true value", () => {
    const result = jsonlike({ test: true }, { test: "boolean" });
    assert(result);
  });
  await test.step("false value", () => {
    const result = jsonlike({ test: false }, { test: "boolean" });
    assert(result);
  });
  await test.step("non boolean value", () => {
    const result = jsonlike({ test: 1 }, { test: "boolean" });
    assert(result === false);
  });
  await test.step("null value", () => {
    const result = jsonlike({ test: null }, { test: "boolean" });
    assert(result === false);
  });
  await test.step("undefined value", () => {
    const result = jsonlike({}, { test: "boolean" });
    assert(result === false);
  });
});
