var fs = require('fs')
var path = require('path')

module.exports = {
  home: home,
  form: form,
}

function home (req, res) {
  res.sendFile(__dirname + '/views/home.html')
}

function form (req, res) {
  res.sendFile(path.join(__dirname, 'public/form.html'))
}
