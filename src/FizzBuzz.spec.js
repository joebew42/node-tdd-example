'use strict'

const expect = require('chai').expect

const FizzBuzz = require('./FizzBuzz')

describe('FizzBuzz should', () => {
  it('translate the number 0 to its string value', () => {
    expect(FizzBuzz.translate(0)).to.equal("0")
  })
})
