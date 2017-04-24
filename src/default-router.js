'use strict'

const router = require('express').Router()

router.get('/', function (req, res) {
  res.send('hello world\n')
})

module.exports = router
