var socket=io();
socket.on('chat',function(data){
	if(data=="next"){
		console.log("Next");
		Reveal.next()
	}else if(data=="prev"){
		console.log("Prev");
		Reveal.prev();
	}
});

