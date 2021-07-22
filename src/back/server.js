/* MAIN SERVER FILE (index.js) */

// Include node module libs
var express = require('express')
var bodyParser = require('body-parser')

// Instantiate the express app
var app = express()

// Define the port and static file directory
app.set('port', (process.env.PORT || 8088))
app.use(express.static(__dirname + '/../public'))

// Setup body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Include the router
require('./routes')(app); 

// Start listening
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})