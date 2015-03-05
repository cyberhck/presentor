password="defaultpassword";
var http = require("http")
var express = require("express");
app = express();
server = http.createServer(app);
app.use(express.static(__dirname + '/presentation/reveal.js/'));
server.listen(3000);
app.get("/", function(req, res) {
	res.sendfile('presentation/reveal.js/index.html');
});

app.get("/server", function(req, res) {
	console.log("server connected!");
	res.sendfile('presentation/reveal.js/index.html');
});

app.get("/client", function(req, res) {
	console.log("client connected!");
	res.sendfile('index.html');
});

io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	process.soc=socket;
	console.log("a user is connected!")
	socket.on('chat', function(data) {
		socket.broadcast.emit('chat', data);
		console.log(data);
	});
});

app.get("/next/:password", function(req, res) {
	console.log("next hit!");
	//console.log(req.params.password);
	if(req.params.password==password){
		io.sockets.emit('chat','next');
		res.end("next!");
	}
});
app.get("/prev/:password", function(req, res) {
	console.log("prev hit!");
	//console.log(req.params.password);
	if(req.params.password==password){
		io.sockets.emit('chat','prev');
		res.end("prev!");
	}
});

app.get("/check/:password", function(req, res) {
	console.log("check hit!");
	//console.log(req.params.password);
	if(req.params.password==password){
		//io.sockets.emit('chat','check');
		res.end("check");
	}
});
