function jogar(){
	var div = $("#bola")			
	div.animate({top:rand(), left:rand()}, "slow");	
}

function rand(){
	return Math.floor(Math.random() * (791 - 10) ) + 10;	
}
	
