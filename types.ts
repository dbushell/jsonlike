/**
 * Types for `jsr:@dbushell/jsonlike`.
 *
 * @module
 */
/** JSON value */
export type JSONValue =
  | boolean
  | number
  | null
  | string
  | JSONArray
  | JSONObject;

/** JSON array */
export type JSONArray = Array<JSONValue>;

/** JSON object */
export interface JSONObject {
  [key: string]: JSONValue;
}

/** JSON schema primitive */
export type JSONPrimitive =
  | "array"
  | "boolean"
  | "number"
  | "null"
  | "object"
  | "string";

/** JSON schema object */
export interface JSONSchema {
  [key: string]: JSONSchema | JSONPrimitive | Array<JSONSchema | JSONPrimitive>;
}
