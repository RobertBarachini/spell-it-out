// Slovenian number string to spelling converter

// TODO: Add jsdoc comments to all functions

import { getGroupsOfThree, sanitizeNumberString } from '#utils/numbers.js'

import * as maps from './maps.js'

const getSuffix = (
	numberStringPartsLength: number,
	tripletValue: number
): string => {
	const suffixIndex = Math.floor((numberStringPartsLength - 1) / 3)
	if (suffixIndex >= maps.suffixes.length) {
		throw new Error(
			`Number too large. Maximum supported number is ${
				Math.pow(10, maps.suffixes.length * 3) - 1
			}`
		)
	}
	if (tripletValue === 1) {
		return maps.suffixes[suffixIndex]
	}
	if (tripletValue === 2) {
		return maps.suffixesDual[suffixIndex]
	}
	if (tripletValue >= 3) {
		return maps.suffixesPlural[suffixIndex]
	}
	return ''
}

const spellOutGroupOfThree = (groupOfThree: string): string => {
	const [hundreds, tens, ones] = groupOfThree.split('')
	if (hundreds === '0' && tens === '0' && ones === '0') {
		return ''
	}
	let result = ''
	if (hundreds !== '0') {
		result += maps.hundreds.get(hundreds)
		if (tens !== '0' || ones !== '0') {
			result += ' '
		}
	}
	if (tens === '1') {
		result += maps.teens.get(ones)
	} else {
		if (ones !== '0') {
			result += maps.ones.get(ones)
		}
		if (tens !== '0') {
			if (ones !== '0') {
				result += 'in'
			}
			result += maps.tens.get(tens)
		}
	}
	return result
}

const spellDecimalPart = (decimalPart: string): string => {
	if (!decimalPart) {
		return ''
	}
	const decimalPartSpelling = decimalPart
		.split('')
		.map((digit) => maps.decimals.get(digit))
		.join(' ')
	return `${decimalPartSpelling}`
}

const spellOutGroupsOfThree = (groupsOfThree: string[]): string[] => {
	const numberStringPartsLength = groupsOfThree.join('').length
	const groupsOfThreeSpelling = groupsOfThree.reduce(
		(acc: string[], curr: string, index: number) => {
			const groupOfThreeSpelling = spellOutGroupOfThree(curr)
			if (groupOfThreeSpelling) {
				const groupValue = parseInt(curr)
				let suffix = getSuffix(numberStringPartsLength - index * 3, groupValue)
				acc.push(`${groupOfThreeSpelling} ${suffix}`)
			}
			return acc
		},
		[]
	)
	return groupsOfThreeSpelling
}

const spellOut = (numberString: string): string => {
	if (!numberString) {
		return ''
	}
	// Determine numberString properties and sanitized parts
	const isNegative = numberString.indexOf('-') !== -1
	const numberStringSafe = sanitizeNumberString(numberString)
	const [wholePart, decimalPart] = numberStringSafe.split('.')
	let result = ''
	// Split the whole part into groups of three digits starting from the right
	const groupsOfThree = getGroupsOfThree(wholePart)
	// Spell out the whole part (groups of three or zero) each group of three digits
	const wholePartSpellingArr = []
	if (groupsOfThree.length === 1 && groupsOfThree[0] === '') {
		wholePartSpellingArr.push(maps.decimals.get('0'))
	} else {
		// Construct the spelled out groups of three digits and their suffixes
		wholePartSpellingArr.push(...spellOutGroupsOfThree(groupsOfThree))
	}
	// Join the spelled out whole part
	const spelledOutWholePart = wholePartSpellingArr.join(' ')
	// Get the decimal part
	const decimalSpelling = spellDecimalPart(decimalPart) //spellOut(decimalPart);
	if (isNegative) {
		result += 'minus '
	}
	// Add the spelled out whole part
	result += spelledOutWholePart.replace(/^ +/, '').replace(/ +$/, '')
	// Add the decimal part
	if (decimalSpelling) {
		// TODO: Add additional switches for "cela" / "in" ?
		result += ` cela ${decimalSpelling}`
	}
	// Return the spelled out number
	return result
}

// Collection of functions that are meant to be private but are exported for testing purposes
const _private = {
	getSuffix,
	spellOutGroupOfThree,
	spellDecimalPart,
	spellOutGroupsOfThree,
}

export { spellOut, _private }
