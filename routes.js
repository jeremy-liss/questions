var fs = require('fs')

module.exports = {
  home: home,
  form: form,
}

function home (req, res) {
  res.send("Hello world?")
}

function form (req, res) {
  res.send("hello, world")
}
