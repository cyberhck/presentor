var socket=io();
socket.on('chat',function(data){
	if(data=="next"){
		Reveal.next()
	}else if(data=="prev"){
		Reveal.prev();
	}
});

