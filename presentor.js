var socket=io();
socket.on('chat',function(data){
	if(data=="next"){
		console.log("Next");
		if(Reveal){
			Reveal.next()
		}
		if(impress()){
			impress().next();
		}
	}else if(data=="prev"){
		console.log("Prev");
		if(Reveal){
			Reveal.prev();
		}
		if(impress()){
			impress().prev();
		}
	}
});

