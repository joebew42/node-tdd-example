'use strict'

const defaultRouter = require('./default-router')
const usersRouter = require('./users-router')

const users = require('./users').create()

function HTTPExample () {
  this.create = function (port) {
    const express = require('express')
    const app = express()

    app.use('/', defaultRouter)
    app.use('/users', usersRouter.create(users))

    return app.listen(port)
  }

  return {
    create: this.create
  }
}

function create () {
  return new HTTPExample()
}

module.exports = {
  create
}
