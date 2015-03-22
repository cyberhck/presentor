var socket=io();
socket.on('chat',function(data){
	if(data=="next"){
		console.log("Next");


		if(typeof(Reveal)!="undefined"){
			Reveal.next()
		}
		if(typeof(impress)!="undefined"){
			impress().next();
		}


	}else if(data=="prev"){
		

		console.log("Prev");
		

		if(typeof(Reveal)!="undefined"){
			Reveal.prev();
		}
		if(typeof(impress)!="undefined"){
			impress().prev();
		}
	}
});

