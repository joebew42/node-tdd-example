'use strict'

const chai = require('chai')
    , chaiHttp = require('chai-http')
    , should = chai.should()
    , sinon = require('sinon')

chai.use(chaiHttp)

const httpExample = require('./http-example').create()

describe('HTTP Example', () => {
  let app = null

  before(() => {
    app = httpExample.create(8000)
  })

  after(() => {
    app.close()
  })

  describe('GET /', () => {
    it('returns "hello world"', (done) => {
      chai.request(app)
        .get("/")
        .then(function (res) {
          res.should.have.status(200)
          res.text.should.be.equal("hello world\n")
          done()
        })
        .catch(function (err) {
          console.error(err)
        })
    })
  })

  describe('GET /users', () => {
    it('returns the list of registered users', (done) => {
      chai.request(app)
        .get("/users")
        .then(function (res) {
          res.should.have.status(200)
          res.body.should.be.eql([])
          done()
        })
        .catch(function (err) {
          console.error(err)
        })
    })
  })

  describe('GET /users/:userId', () => {
    it('returns the detail of a registered user', (done) => {
      chai.request(app)
        .get("/users/1")
        .then(function (res) {
          res.should.have.status(200)
          res.body.should.be.eql({
            name: "John",
            email: "john@somewhere.net"
          })
          done()
        })
        .catch(function (err) {
          console.error(err)
        })
    })
  })

})
