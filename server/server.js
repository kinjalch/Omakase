var express = require('express');
var path = require('path')
var app = express();
var cors = require('cors')
var request = require('request')
var bodyParser = require('body-parser')
var db = require('./database/db.js')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/')) 
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), function() {
	db.ensureSchema()
	console.log('we are now listening on ', app.get('port'))
})

