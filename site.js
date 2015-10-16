var express 		       = require('express'),
	app 			       = express(),
	bodyParser 		       = require('body-parser');

app.use(bodyParser());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.use('/components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/partials', express.static(__dirname + '/partials'));

var port = 3000;

app.listen(port, function() {
	process.on('uncaughtException', function (err) {
	    console.log(err);
	});
	console.log('I\'m Listening on port...' + port);
});