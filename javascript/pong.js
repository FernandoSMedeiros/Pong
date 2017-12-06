$(function(){		
	
	var bola = $("#bola");
	var x = bola.position().left;
	var y = bola.position().top;

	var direcaoX = 1;
	var direcaoY = 1;

	var tela  = $("#fundo");
	var limiteTela = new Object()
	var jogador1 = $("#jogador1");
	var jogador2 = $("#jogador2");
	jogador1.css("left", 50);
	jogador2.css("left", 750);

	limiteTela.top = tela.offset().top;
	limiteTela.bottom = tela.offset().top + tela.height();
	limiteTela.left = tela.offset().left;
	limiteTela.right = tela.offset().left + tela.width();

	function jogar(){
		
		

		x += direcaoX;
		y += direcaoY;
        
        bola.css("top", y);
		bola.css("left", x);

        console.log(limiteTela.top)
        console.log(limiteTela.left)
		
		
		
		/*if(bola.position().left+(bola.width()/4)>= tela.width()){
			clearInterval(loop);
		}else if(bola.offset().left -(bola.width()/4) <= tela.offset().left){
			clearInterval(loop);
		}else */if(bola.position().top+(bola.height()/4)>= tela.height()){
			direcaoY = -1;
		}
		else if(bola.offset().top -(bola.width()/4)<= tela.offset().top){
			direcaoY = 1;
		}
		else if(bola.position().left+(bola.width()/4)>= tela.width()){
			direcaoX = -1;
		}else if(bola.offset().left -(bola.width()/4) <= tela.offset().left){
			direcaoX = 1;
		}else if (isColisaoJogador1()) {
			direcaoX = 1;
		}else if (isColisaoJogador2()) {
			direcaoX = -1;
		}
		
		window.addEventListener('keydown',KeyDown,true);
	}
	function isColisaoJogador1(){
		var res = (bola.position().left-(bola.width()/4) == jogador1.position().left) && (bola.position().top >= jogador1.position().top && bola.position().top <= jogador1.position().top + jogador1.height());
		return res;
	}
	
	function isColisaoJogador2(){
		var res = (bola.position().left+(bola.width()/2) == jogador2.position().left) && (bola.position().top >= jogador2.position().top && bola.position().top <= jogador2.position().top + jogador2.height());
		return res;
	}
	
	function KeyDown(evt){
		switch (evt.keyCode) {
			case 87:
				jogador1.css("top", (jogador1.position().top - 20));
				break;
			case 83: 
				jogador1.css("top", (jogador1.position().top + 20));
				break;
			case 38:  
				jogador2.css("top", (jogador2.position().top - 20));
				break;
			case 40: 
				jogador2.css("top", (jogador2.position().top + 20));
				break;
			
		}
	}

	var loop = setInterval(jogar, 1);
	
	
	
})
	
