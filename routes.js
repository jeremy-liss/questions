var fs = require('fs')

module.exports = {
  home: home
}

function home (req, res) {
  res.send("Hello world?")
}
