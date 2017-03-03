var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')

var routes = require('./routes')

var app = express()
module.exports = app

app.use(bodyParser.urlencoded())

//homepage
app.get('/', routes.home)

// fill in the form page
app.get('/form', routes.form)

// saves questions and options
app.post('/form', routes.saveForm)

//displays the answer to your question
app.get('/answer')

//middleware for handlebars
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
