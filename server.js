const express = require('express');
const logger = require('morgan');
const path = require('path');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.port || 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const google = require('./google.js');

app.get('/token', google.getAccessToken, function(req, res){	
	res.json({token: res.access_token});  
});

app.listen(port, () => console.warn(`Listening on port ${port}!`));
