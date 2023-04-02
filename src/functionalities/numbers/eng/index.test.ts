/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import assert from 'node:assert/strict'

import { describe, it } from 'mocha'

import * as maps from './maps.js'

import { spellOut, _private } from './index.js'

// TODO: Add tests for these functions
const {
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
			assert.strictEqual(spellOut('0'), 'zero')
		})

		it(`'     0.00000000    '`, () => {
			assert.strictEqual(spellOut('0'), 'zero')
		})

		it(`'1'`, () => {
			assert.strictEqual(spellOut('1'), 'one')
		})

		it(`'1234567890'`, () => {
			assert.strictEqual(
				spellOut('1234567890'),
				'one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred ninety'
			)
		})

		// // Test case for negative numbers with decimals
		it(`'-1234567890.123'`, () => {
			assert.strictEqual(
				spellOut('-1234567890.123'),
				'minus one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred ninety point one two three'
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
	////    spellOutGroupsOfThree
	//
	describe('spellOutGroupOfThree', () => {
		it(`'000'`, () => {
			assert.strictEqual(spellOutGroupOfThree('000'), '')
		})

		it(`'001'`, () => {
			assert.strictEqual(spellOutGroupOfThree('001'), 'one')
		})

		it(`'010'`, () => {
			assert.strictEqual(spellOutGroupOfThree('010'), 'ten')
		})

		it(`'011'`, () => {
			assert.strictEqual(spellOutGroupOfThree('011'), 'eleven')
		})

		it(`'100'`, () => {
			assert.strictEqual(spellOutGroupOfThree('100'), 'one hundred')
		})

		it(`'101'`, () => {
			assert.strictEqual(spellOutGroupOfThree('101'), 'one hundred one')
		})

		it(`'110'`, () => {
			assert.strictEqual(spellOutGroupOfThree('110'), 'one hundred ten')
		})

		it(`'111'`, () => {
			assert.strictEqual(spellOutGroupOfThree('111'), 'one hundred eleven')
		})

		it(`'123'`, () => {
			assert.strictEqual(
				spellOutGroupOfThree('123'),
				'one hundred twenty-three'
			)
		})

		it(`'023'`, () => {
			assert.strictEqual(spellOutGroupOfThree('023'), 'twenty-three')
		})

		it(`'103'`, () => {
			assert.strictEqual(spellOutGroupOfThree('103'), 'one hundred three')
		})

		it(`'003'`, () => {
			assert.strictEqual(spellOutGroupOfThree('003'), 'three')
		})

		it(`'120'`, () => {
			assert.strictEqual(spellOutGroupOfThree('120'), 'one hundred twenty')
		})

		it(`'020'`, () => {
			assert.strictEqual(spellOutGroupOfThree('020'), 'twenty')
		})

		it(`'100'`, () => {
			assert.strictEqual(spellOutGroupOfThree('100'), 'one hundred')
		})

		it(`'999'`, () => {
			assert.strictEqual(
				spellOutGroupOfThree('999'),
				'nine hundred ninety-nine'
			)
		})
	})
})
