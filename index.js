const serverless = require('serverless-http');
const express = require('express');

const helloApp = express();

helloApp.get('/', function(req, res) {
	res.send('Hello, world!');
});

helloApp.get('/:name', function(req, res) {
	const name = req.params.name
	res.send(`Hello, ${name}!`);
})

const byApp = express();

byApp.get('/', function(req, res) {
	res.send('By, world!');
});

const exportObject = {
	helloHandler: serverless(helloApp),
	byHandler: serverless(byApp)
}

module.exports = exportObject;
