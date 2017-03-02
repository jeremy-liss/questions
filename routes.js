var fs = require('fs')
var path = require('path')

module.exports = {
  home: home,
  form: form,
}

function home (req, res) {
  res.send("Hello world?")
}

function form (req, res) {
  res.sendFile(path.join(__dirname, 'public/form.html'))
}
