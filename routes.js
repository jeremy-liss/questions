var fs = require('fs')
var path = require('path')

module.exports = {
  home: home,
  form: form
}

function home (req, res) {
  res.send("Hello world?")
}

function form (req, res) {
  res.sendFile(path.join(__dirname, 'public/form.html'))
}

// function testing (req, res) {
//   var text = __dirname + '/db/text.txt'
//   var options = fs.readFileSync('./db/text.txt').toString()
//   options = JSON.parse(options)
//   console.log(options)
//   res.render('options', {
//     // check this part
//     opt1: options["opt1"],
//     opt2: options["opt2"],
//     opt3: options["opt3"],
//   })
// }
