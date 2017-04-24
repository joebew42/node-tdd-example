'use strict'

function FizzBuzz(translationService) {
  this.translationService = translationService

  this.translate = function (number) {
    return translationService.translate(number)
  }

  return {
    translate: this.translate
  }
}

function create(translationService) {
  return new FizzBuzz(translationService)
}

module.exports = {
  create
}
