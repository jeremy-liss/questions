var tape = require('tape')
var request = require('supertest')

var app = require('../server')

test ('readData callback', function(t) {
  //arrange
  request(app)
    .post()
  var expectedOption = {"opt1":"pink", "opt2":"red", "opt3":"blue"}
  //assert
  t.notOk(err)
    t.ok(typeof option === 'object', 'data is a JSON object')
    t.equal(option.opt1, expectedOption.opt1)
    t.deepEqual(option.opt2, expectedOption.opt2)
t.end()
  //act

})
//     opt1: options["opt1"],
//     opt2: options["opt2"],
//     opt3: options["opt3"],
