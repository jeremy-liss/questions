var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var fs = require('fs')

var routes = require('./routes')

module.exports = app

// app.use(bodyParser.urlencoded())

//homepage
app.get('/', routes.home)

// //question input
// app.get('/form')
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
