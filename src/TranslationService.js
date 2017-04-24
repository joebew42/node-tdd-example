'use strict'

function TranslationService() {
  this.translate = function (number) {
    return '0'
  }

  return {
    translate: this.translate
  }
}

function create() {
  return new TranslationService()
}

module.exports = {
  create
}
