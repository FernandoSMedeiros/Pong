$(function(){		
	
	var bola = $("#bola");
	var x = bola.position().left;
	var y = bola. position().top;

	var direcaoX = 1;
	var direcaoY = 1;

	var tela  = $("#fundo");
	var limiteTela = new Object()
	var jogador1 = $("#jogador1");
	var jogador2 = $("#jogador2");

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
		
		if(bola.position().top+(bola.height()/4)>= tela.height()){
			direcaoY = -1;
		}
		if(bola.offset().top -(bola.width()/4)<= tela.offset().top){
			direcaoY = 1;
		}
		if(bola.position().left+(bola.width()/4)>= tela.width()){
			direcaoX = -1;
		}
		if(bola.offset().left -(bola.width()/4) <= tela.offset().left){
			direcaoX = 1;
		}
		
		


	}

	var loop = setInterval(jogar, 1)
	
})
	
