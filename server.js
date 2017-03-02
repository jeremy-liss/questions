var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
// var bodyParser = require('body-parser')

var routes = require('./routes')

var app = express()
module.exports = app

// app.use(bodyParser.urlencoded())

//middleware
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

//homepage
app.get('/', routes.home)

// //question input
app.get('/form', routes.form)

app.get('/testing', routes.testing)
//
// //sends question to next page
// app.post('/form')
//
// //loading page
// app.get('/form-loading')
//
// //answer page
// app.get('/answer')
//
// //return back to homepage
// res.redirect('/')
