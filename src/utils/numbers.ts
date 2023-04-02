// Common 'numbers' utilities

const sanitizeNumberString = (numberString: string): string => {
	return numberString
		.toString()
		.replace(/,/g, '')
		.replace(/ /g, '')
		.replace(/-/g, '')
		.replace(/^0+/, '') //.replace(/0+$/, "");
}

const getGroupsOfThree = (str: string): string[] => {
	if (str === '') {
		return ['']
	}
	const groupsOfThree = str
		.split('')
		.reverse()
		.reduce((acc, curr, index) => {
			const groupIndex = Math.floor(index / 3)
			if (!acc[groupIndex]) {
				acc[groupIndex] = []
			}
			acc[groupIndex].unshift(curr)
			return acc
		}, [])
		.reverse()
		.map((group) => group.join(''))
	groupsOfThree[0] = groupsOfThree[0].padStart(3, '0')
	return groupsOfThree
}

export { getGroupsOfThree, sanitizeNumberString }
