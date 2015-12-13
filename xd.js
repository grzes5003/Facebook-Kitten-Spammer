var chatBox  = document.getElementsByName("message_body")[0];
var replyBut = document.getElementById("u_0_t");
 
var kitInt   = setInterval(function() {
	//if(Date().getHours() == Date().getMinutes())
	var time = new Date().getHours();
	if(time == 23){
    		chatBox.classList.remove("DOMControl_placeholder")
    		chatBox.value = new Date().getHours() + ":"+ new Date().getMinutes();
	}
}, 6000);

var replyClicker = setInterval(function(){
	replyBut.click();
}, 1);
 
var stopKittens = function() { clearInterval(kitInt); };
