var fs = require('fs')
var path = require('path')

module.exports = {
  home: home,
  form: form,
  saveForm: saveForm,
  getAnswer: getAnswer
}

function home (req, res) {
  res.sendFile(__dirname + '/views/home.html')
}

function form (req, res) {
  res.sendFile(path.join(__dirname, 'views/form.html'))
}

function saveForm (req, res){
  fs.writeFile('./db/options.txt', JSON.stringify(req.body), function(err){
  if (err) throw err
  console.log(req.body);
  res.redirect('/answer')
  })
}

function getAnswer(req, res){
  var num = Math.floor(Math.random() * 3)
  num = num.toString()
  var formObject = fs.readFileSync('./db/options.txt', 'utf-8')
  formObject = JSON.parse(formObject)
  console.log(formObject[num])
  res.send(formObject[num])
}
