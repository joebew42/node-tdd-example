'use strict'

function UsersRouter(users) {
  this.users = users

  this.router = function () {
    const router = require('express').Router()

    router.get('/', index)
    router.get('/:userId', show)

    function index (req, res) {
      res.send(users.all())
    }

    function show (req, res) {
      res.send(users.withId(req.params.userId))
    }

    return router
  }

  return {
    router: this.router
  }
}

function create (users) {
  return new UsersRouter(users).router()
}

module.exports = {
  create
}
