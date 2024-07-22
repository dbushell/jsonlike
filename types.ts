/**
 * Types for `jsr:@dbushell/jsonlike`.
 *
 * @module
 */
export type JSONValue = boolean | number | null | string | JSONArray | JSONObject;

export type JSONArray = Array<JSONValue>;

export interface JSONObject {
  [key: string]: JSONValue;
}

export type JSONPrimitive = 'array' | 'boolean' | 'number' | 'null' | 'object' | 'string';

export interface JSONSchema {
  [key: string]: JSONSchema | JSONPrimitive | Array<JSONSchema | JSONPrimitive>;
}
