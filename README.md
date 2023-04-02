# Description

SpellItOut is a library for writing numbers (and other things).

It was originally developed as a fun side project that would enable other projects to write out numbers on invoices, receipts, etc.

The library can be installed as an npm dependency (`npm install spell-it-out`). It is written in TypeScript, however it can be used in the following project types without any modifications (transpiled at build time):

- TypeScript (with type definitions)
- JavaScript (CommonJS)
- JavaScript (ESM)

# Supported functionalities

| Language  | ISO 696-3 code | Numbers |
| :-------- | :------------: | :-----: |
| English   |      eng       |   ✔️    |
| Slovenian |      slv       |   ✔️    |

NOTE: To support macrolanguages, we use ISO 696-3 codes. The implemented mapping between macrolanguages and their ISO 696-3 codes can be found at https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes.

## Number

Write out a number (up to 1e+66).

Example:

```js
import { numbers } from 'spell-it-out'

// Spell out a number in Slovenian
console.log(
	`Spelled out Slovenian number '1234567890' as '${numbers.slv.spellOut(
		'1234567890'
	)}'.`
)
// Output: ena milijarda dvesto štiriintrideset milijonov petsto sedeminšestdeset tisoč osemsto devetdeset

// Spell out a number in Slovenian (alternative syntax)
console.log(
	`Spelled out Slovenian number '-1234567890.123' as '${numbers.spellOut(
		'-1234567890.123',
		numbers.languages.slv
	)}'.`
)
// Output: minus ena milijarda dvesto štiriintrideset milijonov petsto sedeminšestdeset tisoč osemsto devetdeset cela ena dva tri
```

# Development

Refer to my template repository at https://github.com/RobertBarachini/npm-package-template to learn about guidelines and how to use this project locally.

## Scripts

These are just the main scripts. For a full list, refer to `package.json`.

The two build pipelines for `mjs` and `cjs` are separated, so you can only build one of them if you want to. Main leads to `cjs`, so if you intend on testing and debugging single files, you should use the specific `cjs` scripts.

- `build` - Build the project.
- `test` - Build the project and run all tests.
- `test:cjs:custom` - Build the project (CommonJS is enough for this) and run a custom Mocha command. Example: `npm run test:cjs:custom dist/lib/cjs/src/functionalities/number/eng/index.test.js`. Here we tell Mocha to run a specific test file.
- `lint` - Lint the project.

# TODO

- [x] Write a README.md
- [x] Add functionalities table to README.md (language x functionality)
- [x] Write tests
  - [x] Numbers
    - [x] slv
    - [x] eng
- [x] Change default template values to actual ones
