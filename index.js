password="defaultpassword";
if(process.argv[2]){
	password=process.argv[2];
}
var http = require("http")
var express = require("express");
app = express();
server = http.createServer(app);
app.use(express.static(__dirname + '/presentation/'));
server.listen(3000);
app.get("/", function(req, res) {
	res.sendfile('presentation/index.html');
});

app.get("/server", function(req, res) {
	console.log("server connected!");
	res.sendfile('presentation/index.html');
});

app.get("/client", function(req, res) {
	console.log("client connected!");
	res.end('support ended for the path client');
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
	
	//console.log(req.params.password);
	if(req.params.password==password){
		console.log("Next Hit");
		io.sockets.emit('chat','next');
		res.end("next!");
	}else{
		res.end("inv");
		console.log("Password Incorrect");
	}
});
app.get("/prev/:password", function(req, res) {
	//console.log(req.params.password);
	if(req.params.password==password){
		console.log("Next Hit");
		io.sockets.emit('chat','prev');
		res.end("prev!");
	}else{
		res.end("inv");
		console.log("Password Incorrect");
	}
});

app.get("/check/:password", function(req, res) {
	console.log("check hit!");
	//console.log(req.params.password);
	if(req.params.password==password){
		//io.sockets.emit('chat','check');
		res.end("check");
	}else{
		res.end("inv");
	}
});
