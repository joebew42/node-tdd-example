'use strict'

const expect = require('chai').expect
const sinon = require('sinon')

const TranslationService = require('./TranslationService')
const FizzBuzz = require('./FizzBuzz')

const translationService = TranslationService.create()

const fizzBuzz = FizzBuzz.create(translationService)

describe('FizzBuzz', () => {
  it('should translate the number 0 to its string value', () => {
    expect(fizzBuzz.translate(0)).to.equal("0")
  })

  describe('should collaborate with a translation service', () => {
    const mock = sinon.mock(translationService)

    it('that returns the translated value', () => {
      mock.expects('translate').once().withArgs(1).returns("1")

      fizzBuzz.translate(1)

      mock.verify()
    })
  })
})
