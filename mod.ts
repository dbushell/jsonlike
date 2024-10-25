/**
 * @module
 *
 * Just enough JavaScript object validation.
 */
import type {
  JSONObject,
  JSONPrimitive,
  JSONSchema,
  JSONValue,
} from "./types.ts";

/** Returns `true` if `value` is non-null object */
export const isObject = (value: JSONValue): value is JSONObject =>
  value !== null && typeof value === "object" && Array.isArray(value) === false;

/** Returns `true` if `value` is of type `primitive` */
export const isPrimitive = (
  value: JSONValue,
  primitive: JSONPrimitive,
): boolean => {
  switch (primitive) {
    case "array":
      return Array.isArray(value);
    case "number":
      return typeof value === "number" && Number.isNaN(value) === false;
    case "null":
      return value === null;
    case "object":
      return isObject(value);
    case "boolean":
      return typeof value === "boolean";
    case "string":
      return typeof value === "string";
  }
};

/**
 * Validate parsed `json` object against `schema`
 *
 * @example
 * ```ts
 * import {jsonlike} from '@dbushell/jsonlike';
 *
 * const json = JSON.parse(`{
 *   "greeting": "Hello, World!",
 *   "is": [{"id": 1}, {"id": 2}, {"id": 3}]
 * }`);
 *
 * const valid = jsonlike(json, {
 *   greeting: 'string',
 *   is: [{id: 'number'}]
 * });
 * ```
 *
 * @param json   Parsed JSON object
 * @param schema Schema to validate against
 * @returns `true` if `json` matches `schema` otherwise `false`
 */
export const jsonlike = (json: JSONObject, schema: JSONSchema): boolean => {
  // Iterate over required keys
  for (const [key, type] of Object.entries(schema)) {
    // Check missing key
    if (Object.hasOwn(json, key) === false) {
      return false;
    }
    const value = json[key];
    // Check primitive type
    if (typeof type === "string") {
      if (isPrimitive(value, type)) {
        continue;
      }
      return false;
    }
    // Check single type array
    if (Array.isArray(type)) {
      if (Array.isArray(value) === false) {
        return false;
      }
      if (type.length) {
        for (const i of value) {
          if (typeof type[0] === "string") {
            if (isPrimitive(i, type[0])) {
              continue;
            }
          } else if (jsonlike({ i }, { i: type[0] })) {
            continue;
          }
          return false;
        }
      }
      continue;
    }
    // Check nested objects
    if (isObject(type) && isObject(value)) {
      if (jsonlike(value, type)) {
        continue;
      }
    }
    // Unknown type
    return false;
  }
  // Success!
  return true;
};
