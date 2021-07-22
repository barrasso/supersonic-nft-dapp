/* MONGO DB CONFIGURATION (db.js) */

const config = require('./config');
var mongoose = require('mongoose');  

var mongodbUri = config.DBUri;
mongoose.connect(mongodbUri, {'useNewUrlParser': true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Successfully connected to Mongo DB!')
});