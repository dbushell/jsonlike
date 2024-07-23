# 🍋‍🟩 jsonlike

Just enough JavaScript object validation.

**jsonlike** is a tiny < 1kB library used to validate JavaScript objects against a JSON-like schema.

It can:

* Match properties by primitive types
* Match arrays of single type values
* Match nested objects

## Usage

Packages for all runtimes: [jsr.io/@dbushell/jsonlike](https://jsr.io/@dbushell/jsonlike)

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
