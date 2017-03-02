var fs = require('fs')
// var views = require('./views')

module.exports = {
  home: home
}

function home (req, res) {
  res.sendFile(__dirname + '/views/home.html')
}
