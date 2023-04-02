// TODO: Get some language nerd to validate this:3

const decimals = new Map([
	['0', 'zero'],
	['1', 'one'],
	['2', 'two'],
	['3', 'three'],
	['4', 'four'],
	['5', 'five'],
	['6', 'six'],
	['7', 'seven'],
	['8', 'eight'],
	['9', 'nine'],
])

const ones = new Map([
	['0', ''],
	['1', 'one'],
	['2', 'two'],
	['3', 'three'],
	['4', 'four'],
	['5', 'five'],
	['6', 'six'],
	['7', 'seven'],
	['8', 'eight'],
	['9', 'nine'],
])

const teens = new Map([
	['0', 'ten'],
	['1', 'eleven'],
	['2', 'twelve'],
	['3', 'thirteen'],
	['4', 'fourteen'],
	['5', 'fifteen'],
	['6', 'sixteen'],
	['7', 'seventeen'],
	['8', 'eighteen'],
	['9', 'nineteen'],
])

const tens = new Map([
	['0', ''],
	['1', 'ten'],
	['2', 'twenty'],
	['3', 'thirty'],
	['4', 'forty'],
	['5', 'fifty'],
	['6', 'sixty'],
	['7', 'seventy'],
	['8', 'eighty'],
	['9', 'ninety'],
])

const hundreds = new Map([
	['0', ''],
	['1', 'one hundred'],
	['2', 'two hundred'],
	['3', 'three hundred'],
	['4', 'four hundred'],
	['5', 'five hundred'],
	['6', 'six hundred'],
	['7', 'seven hundred'],
	['8', 'eight hundred'],
	['9', 'nine hundred'],
])

// Following https://en.wikipedia.org/wiki/Names_of_large_numbers
const suffixes = [
	'',
	'thousand', // 10^3
	'million', // 10^6
	'billion', // 10^9
	'trillion', // 10^12
	'quadrillion', // 10^15
	'quintillion', // 10^18
	'sextillion', // 10^21
	'septillion', // 10^24
	'octillion', // 10^27
	'nonillion', // 10^30
	'decillion', // 10^33
	'undecillion', // 10^36
	'duodecillion', // 10^39
	'tredecillion', // 10^42
	'quattuordecillion', // 10^45
	'quindecillion', // 10^48
	'sexdecillion', // 10^51
	'septendecillion', // 10^54
	'octodecillion', // 10^57
	'novemdecillion', // 10^60
	'vigintillion', // 10^63
]

export { decimals, ones, teens, tens, hundreds, suffixes }
