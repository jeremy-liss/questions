var fs = require('fs')

module.exports = {
  saveForm: saveForm
}
var num = Math.random() * 3
num = num.toString()
function saveForm (req, res){
  fs.writeFile('./db/options.txt', JSON.stringify(req.body), function(err){
  if(err) throw err
  console.log(num)
  res.redirect('/answer')
  })
}
