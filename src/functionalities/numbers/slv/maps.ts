// TODO: Get some language nerd to validate this:3

const decimals = new Map([
	['0', 'nič'],
	['1', 'ena'],
	['2', 'dva'], // ['2', 'dve'], ?
	['3', 'tri'],
	['4', 'štiri'],
	['5', 'pet'],
	['6', 'šest'],
	['7', 'sedem'],
	['8', 'osem'],
	['9', 'devet'],
])

const ones = new Map([
	['0', ''],
	['1', 'ena'],
	['2', 'dva'],
	['3', 'tri'],
	['4', 'štiri'],
	['5', 'pet'],
	['6', 'šest'],
	['7', 'sedem'],
	['8', 'osem'],
	['9', 'devet'],
])

const teens = new Map([
	['0', 'deset'],
	['1', 'enajst'],
	['2', 'dvanajst'],
	['3', 'trinajst'],
	['4', 'štirinajst'],
	['5', 'petnajst'],
	['6', 'šestnajst'],
	['7', 'sedemnajst'],
	['8', 'osemnajst'],
	['9', 'devetnajst'],
])

const tens = new Map([
	['0', ''],
	['1', 'deset'],
	['2', 'dvajset'],
	['3', 'trideset'],
	['4', 'štirideset'],
	['5', 'petdeset'],
	['6', 'šestdeset'],
	['7', 'sedemdeset'],
	['8', 'osemdeset'],
	['9', 'devetdeset'],
])

const hundreds = new Map([
	['0', ''],
	['1', 'sto'],
	['2', 'dvesto'],
	['3', 'tristo'],
	['4', 'štiristo'],
	['5', 'petsto'],
	['6', 'šeststo'],
	['7', 'sedemsto'],
	['8', 'osemsto'],
	['9', 'devetsto'],
])

// Following Peletier's numbering system
const suffixes = [
	'',
	'tisoč', // 10^3
	'milijon', // 10^6
	'milijarda', // 10^9
	'bilijon', // 10^12
	'bilijarda', // 10^15
	'trilijon', // 10^18
	'trilijarda', // 10^21
	'kvadrilijon', // 10^24
	'kvadrilijarda', // 10^27
	'kvintilijon', // 10^30
	'kvintilijarda', // 10^33
	'sekstilijon', // 10^36
	'sekstilijarda', // 10^39
	'septilijon', // 10^42
	'septilijarda', // 10^45
	'oktilijon', // 10^48
	'oktilijarda', // 10^51
	'nonilijon', // 10^54
	'nonilijarda', // 10^57
	'decilijon', // 10^60
	'decilijarda', // 10^63
]

const suffixesDual = [
	'',
	'tisoč',
	'milijona',
	'milijardi',
	'bilijona',
	'bilijardi',
	'trilijona',
	'trilijardi',
	'kvadrilijona',
	'kvadrilijardi',
	'kvintilijona',
	'kvintilijardi',
	'sekstilijona',
	'sekstilijardi',
	'septilijona',
	'septilijardi',
	'oktilijona',
	'oktilijardi',
	'nonilijona',
	'nonilijardi',
	'decilijona',
	'decilijardi',
]

const suffixesPlural = [
	'',
	'tisoč',
	'milijonov',
	'milijard',
	'bilijonov',
	'bilijard',
	'trilijonov',
	'trilijard',
	'kvadrilijonov',
	'kvadrilijard',
	'kvintilijonov',
	'kvintilijard',
	'sekstilijonov',
	'sekstilijard',
	'septilijonov',
	'septilijard',
	'oktilijonov',
	'oktilijard',
	'nonilijonov',
	'nonilijard',
	'decilijonov',
	'decilijard',
]

export {
	decimals,
	ones,
	teens,
	tens,
	hundreds,
	suffixes,
	suffixesDual,
	suffixesPlural,
}
