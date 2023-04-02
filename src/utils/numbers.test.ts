/* eslint-disable quotes */
import assert from 'node:assert/strict'

import { describe, it } from 'mocha'

import { getGroupsOfThree } from './numbers'

describe('#utils/numbers', () => {
	//
	////    getGroupsOfThree
	//
	describe('getGroupsOfThree', () => {
		it("'1234567890'", () => {
			assert.deepStrictEqual(getGroupsOfThree('1234567890'), [
				'001',
				'234',
				'567',
				'890',
			])
		})
	})
})
