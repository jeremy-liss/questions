var fs = require('fs')
var path = require('path')

module.exports = {
  home: home,
  form: form,
  saveForm: saveForm,
  getAnswer: getAnswer
}

function home (req, res) {
  res.send("Hello world?")
}

function form (req, res) {
  res.sendFile(path.join(__dirname, 'public/form.html'))
}

function saveForm (req, res){
  fs.writeFile('./db/options.txt', JSON.stringify(req.body), function(err){
  if (err) throw err
  res.redirect('/answer')
  })
}

function getAnswer(req, res){
  var formObject = fs.readFile('./db/options.txt', 'utf-8')
  console.log(formObject)
  res.send('uuhejhear;')
}
