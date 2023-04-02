// Aggregate all number modules into one module

import * as eng from './eng/index.js'
import * as slv from './slv/index.js'

// Languages 'enum' - TODO: leverage #utils/languageMap.ts
const languages = Object.freeze({
	eng: 'eng',
	slv: 'slv',
})

const spellOut = (numberString: string, language?: string): string => {
	if (!language) {
		language = languages.eng
	}
	// Do language mapping here (for dialects, etc.)
	// TODO
	if (language === languages.eng) {
		return eng.spellOut(numberString)
	}
	if (language === languages.slv) {
		return slv.spellOut(numberString)
	}
	throw new Error(
		`Language '${language}' is not supported for this functionality.`
	)
}

export { spellOut, languages, eng, slv }
