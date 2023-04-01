# Description

SpellItOut is a library for writing numbers (and other things).

It was originally developed as a fun side project that would enable other projects to write out numbers on invoices, receipts, etc.

The library can be installed as an npm dependency (`npm install spell-it-out`). It is written in TypeScript, however it can be used in the following project types without any modifications (transpiled at build time):

- TypeScript (with type definitions)
- JavaScript (CommonJS)
- JavaScript (ESM)

# Supported functionalities

| Language  | ISO 696-3 code | Number |
| :-------- | :------------: | :----: |
| English   |      eng       |   ❌   |
| Slovenian |      slv       |   ✔️   |

NOTE: To support macrolanguages, we use ISO 696-3 codes. The implemented mapping between macrolanguages and their ISO 696-3 codes can be found at https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes.

## Number

Write out a number (up to 1e+66).

Example:

```js
import { number } from 'spell-it-out'

// Spell out a number in Slovenian
console.log(
	`Spelled out Slovenian number '1234567890' as '${number.slv.spellOut(
		'1234567890'
	)}'.`
)
// Output: ena milijarda dvesto štiriintrideset milijonov petsto sedeminšestdeset tisoč osemsto devetdeset

// Spell out a number in Slovenian (alternative syntax)
console.log(
	`Spelled out Slovenian number '-1234567890.123' as '${number.spellOut(
		'-1234567890.123',
		number.languages.slv
	)}'.`
)
// Output: minus ena milijarda dvesto štiriintrideset milijonov petsto sedeminšestdeset tisoč osemsto devetdeset cela ena dva tri
```

# Development

Refer to my template repository at https://github.com/RobertBarachini/npm-package-template to learn about guidelines and how to use this project locally.

# TODO

- [x] Write a README.md
- [x] Add functionalities table to README.md (language x functionality)
- [x] Write tests
  - [x] Numbers
    - [x] slv
- [x] Change default template values to actual ones
