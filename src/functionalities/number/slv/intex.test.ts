/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import assert from 'node:assert/strict'

import { describe, it } from 'mocha'

import * as maps from './maps.js'

import { spellOut, _private } from './index.js'

// TODO: Add tests for these functions
const {
	getGroupsOfThree,
	sanitizeNumberString,
	getSuffix,
	spellOutGroupOfThree,
	spellDecimalPart,
	spellOutGroupsOfThree,
} = _private

// TODO check for edge cases

describe('number/slv', () => {
	//
	////    spellOut
	//
	describe('spellOut', () => {
		it(`'0'`, () => {
			assert.strictEqual(spellOut('0'), 'nič')
		})

		it(`'     0.00000000    '`, () => {
			assert.strictEqual(spellOut('0'), 'nič')
		})

		it(`'1'`, () => {
			assert.strictEqual(spellOut('1'), 'ena')
		})

		it(`'1234567890'`, () => {
			assert.strictEqual(
				spellOut('1234567890'),
				'ena milijarda dvesto štiriintrideset milijonov petsto sedeminšestdeset tisoč osemsto devetdeset'
			)
		})

		// Test case for negative numbers with decimals
		it(`'-1234567890.123'`, () => {
			assert.strictEqual(
				spellOut('-1234567890.123'),
				'minus ena milijarda dvesto štiriintrideset milijonov petsto sedeminšestdeset tisoč osemsto devetdeset cela ena dva tri'
			)
		})

		it(`'2345909235908292390301235901409823423409890430928234098234234342290325813598' should throw a 'Number too large. Maximum supported number is ${
			Math.pow(10, maps.suffixes.length * 3) - 1
		}' exception`, () => {
			assert.throws(() => {
				spellOut(
					'2345909235908292390301235901409823423409890430928234098234234342290325813598'
				)
			}, new Error(`Number too large. Maximum supported number is ${Math.pow(10, maps.suffixes.length * 3) - 1}`))
		})
	})

	//
	////    getGroupsOfThree
	//
	describe('getGroupsOfThree', () => {
		it(`'1234567890'`, () => {
			assert.deepStrictEqual(getGroupsOfThree('1234567890'), [
				'001',
				'234',
				'567',
				'890',
			])
		})
	})

	//
	////    spellOutGroupsOfThree
	//
	describe('spellOutGroupOfThree', () => {
		it(`'000'`, () => {
			assert.strictEqual(spellOutGroupOfThree('000'), '')
		})

		it(`'001'`, () => {
			assert.strictEqual(spellOutGroupOfThree('001'), 'ena')
		})

		it(`'010'`, () => {
			assert.strictEqual(spellOutGroupOfThree('010'), 'deset')
		})

		it(`'011'`, () => {
			assert.strictEqual(spellOutGroupOfThree('011'), 'enajst')
		})

		it(`'100'`, () => {
			assert.strictEqual(spellOutGroupOfThree('100'), 'sto')
		})

		it(`'101'`, () => {
			assert.strictEqual(spellOutGroupOfThree('101'), 'sto ena')
		})

		it(`'110'`, () => {
			assert.strictEqual(spellOutGroupOfThree('110'), 'sto deset')
		})

		it(`'111'`, () => {
			assert.strictEqual(spellOutGroupOfThree('111'), 'sto enajst')
		})

		it(`'123'`, () => {
			assert.strictEqual(spellOutGroupOfThree('123'), 'sto triindvajset')
		})

		it(`'023'`, () => {
			assert.strictEqual(spellOutGroupOfThree('023'), 'triindvajset')
		})

		it(`'103'`, () => {
			assert.strictEqual(spellOutGroupOfThree('103'), 'sto tri')
		})

		it(`'003'`, () => {
			assert.strictEqual(spellOutGroupOfThree('003'), 'tri')
		})

		it(`'120'`, () => {
			assert.strictEqual(spellOutGroupOfThree('120'), 'sto dvajset')
		})

		it(`'020'`, () => {
			assert.strictEqual(spellOutGroupOfThree('020'), 'dvajset')
		})

		it(`'100'`, () => {
			assert.strictEqual(spellOutGroupOfThree('100'), 'sto')
		})

		it(`'999'`, () => {
			assert.strictEqual(
				spellOutGroupOfThree('999'),
				'devetsto devetindevetdeset'
			)
		})
	})
})

// TODO: Some more tests
// // testSpellOut('0');
// testSpellOut('0.15')
// testSpellOut('0.015')
// testSpellOut('0.0015')
// testSpellOut('151')
// testSpellOut('152.5')
// testSpellOut('-150.5')
// testSpellOut('1234567890')
// testSpellOut('10234567890')
// testSpellOut('10234567000')
// testSpellOut('10234567001')
// testSpellOut('10000000')
// testSpellOut('12309340910950912409')
// testSpellOut('12309340910950912409.123')
// testSpellOut('12309340910950912409.0123')
// testSpellOut('2345909235908292390301235901409823423409890430928234098')
// // testSpellOut("2345909235908292390301235901409823423409890430928234098234234342290325813598") // Number too large to spell exception check
// testSpellOut('0.0002349080002340980202034908098234098098348900000')
