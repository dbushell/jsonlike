# 🍋‍🟩 jsonlike

Just enough JavaScript object validation.

[![JSR](https://jsr.io/badges/@dbushell/jsonlike?labelColor=98e6c8)](https://jsr.io/@dbushell/jsonlike) [![JSR Score](https://jsr.io/badges/@dbushell/jsonlike/score?labelColor=98e6c8)](https://jsr.io/@dbushell/jsonlike) [![JSR](https://jsr.io/badges/@dbushell?labelColor=98e6c8)](https://jsr.io/@dbushell)

**jsonlike** is a tiny < 1kB library used to validate JavaScript objects against a JSON-like schema.

It can:

* Match properties by primitive types
* Match arrays of single type values
* Match nested objects

## Usage

```ts
import {jsonlike} from '@dbushell/jsonlike';

const json = JSON.parse(`{
  "greeting": "Hello, World!",
  "items": [{"id": 1}, {"id": 2}, {"id": 3}]
}`);

const valid = jsonlike(json, {
  greeting: 'string',
  items: [{id: 'number'}]
});
```

## Notes

Use [Ajv](https://github.com/ajv-validator/ajv) for full schema validation.

* * *

[MIT License](/LICENSE) | Copyright © 2024 [David Bushell](https://dbushell.com)
