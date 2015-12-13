var chatBox  = document.getElementsByName("message_body")[0];
var replyBut = document.getElementById("u_0_t");
 
var kitInt   = setInterval(function() {
	//if(Date().getHours() == Date().getMinutes())
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();
	if(hours == minutes){
    		chatBox.classList.remove("DOMControl_placeholder")
    		if(minutes > 10)
    			chatBox.value = new Date().getHours() + ":"+ new Date().getMinutes();
    		else
    			chatBox.value = new Date().getHours() + ":0"+ new Date().getMinutes();
	}
}, 6000);

var replyClicker = setInterval(function(){
	replyBut.click();
}, 1);
 
var stopKittens = function() { clearInterval(kitInt); };
