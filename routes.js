var fs = require('fs')
var path = require('path')

module.exports = {
  home: home,
  form: form,
  saveForm: saveForm
}

function home (req, res) {
  res.send("Hello world?")
}

function form (req, res) {
  res.sendFile(path.join(__dirname, 'public/form.html'))
}

function saveForm (req, res){
  fs.writeFile('./db/options.txt', JSON.stringify(req.body), function(err){
  if(err) throw err
  res.redirect('/answer')
  })
}
