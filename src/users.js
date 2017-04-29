'use strict'

function Users() {
  this.all = function () {
    return []
  }

  this.withId = function (id) {
    return {
      name: "John",
      email: "john@somewhere.net"
    }
  }
}

function create () {
  return new Users()
}

module.exports = {
  create
}
