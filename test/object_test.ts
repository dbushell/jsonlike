import type { JSONSchema } from "../types.ts";
import { jsonlike } from "../mod.ts";
import { assert } from "jsr:@std/assert";

const data = {
  array: [],
  boolean: true,
  null: null,
  number: 1,
  object: {},
  string: "test",
};

const schema: JSONSchema = {
  array: "array",
  boolean: "boolean",
  null: "null",
  number: "number",
  object: "object",
  string: "string",
};

Deno.test("null", async (test) => {
  await test.step("object value", () => {
    const result = jsonlike({ test: {} }, { test: "object" });
    assert(result);
  });
  await test.step("empty object value", () => {
    const result = jsonlike({ test: { i: 1 } }, { test: {} });
    assert(result);
  });
  await test.step("non object value", () => {
    const result = jsonlike({ test: false }, { test: "object" });
    assert(result === false);
  });
  await test.step("null value", () => {
    const result = jsonlike({ test: null }, { test: "object" });
    assert(result === false);
  });
  await test.step("undefined value", () => {
    const result = jsonlike({}, { test: "object" });
    assert(result === false);
  });
  await test.step("object properties", () => {
    const result = jsonlike(data, schema);
    assert(result);
  });
  await test.step("nested object properties", () => {
    const result = jsonlike({
      ...data,
      nested: data,
      array: [data, data, data],
    }, {
      ...schema,
      nested: schema,
      array: [schema],
    });
    assert(result);
  });
});
