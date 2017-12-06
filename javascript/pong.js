$(function(){
	var bola = $("#bola");
	var barraVida = $("#barraVida");
	var barraVidaTamanho = barraVida.width();
	var x = bola.position().left;
	var y = bola.position().top;

	var movimentacao = 1;

	var direcaoX = movimentacao;
	var direcaoY = movimentacao;

	var tela  = $("#fundo");
	var limiteTela = new Object()
	var jogador1 = $("#jogador1");
	var jogador2 = $("#jogador2");

	jogador1.draggable({axis:"y", containment:"#fundo"});
	bola.draggable({containment:"#fundo"});

	var pontosJogador1 = 0;
	var pontosJogador2 = 0;

	jogador1.css("left", 50);
	jogador2.css("left", 750);

	var isGamb = false;

	function jogar(){
		

		if(pontosJogador1%2==0){
			if(isGamb){
				movimentacao+=0.5;
				isGamb = false;
			}

		}else{
			isGamb = true;
		}
		
		x += direcaoX;
		y += direcaoY;
        
        bola.css("top", y);
		bola.css("left", x);


		if(bola.position().top+(bola.height()/4)>= tela.height()){
			direcaoY = -(movimentacao);
		}
		else if(bola.offset().top -(bola.width()/4)<= tela.offset().top){
			direcaoY = movimentacao;
		}
		else if(bola.position().left+(bola.width()/4)>= tela.width()){
			/*x = 395;
			y = 255;
			pontosJogador1++;
			document.getElementById("player1").innerHTML = pontosJogador1;*/
			direcaoX = -(movimentacao);

		}
		else if(bola.offset().left -(bola.width()/4) <= tela.offset().left){
			x = 395;
			y = 255;
			barraVida.css("width",barraVida.width()-(barraVidaTamanho*0.2));
			pontosJogador2++;
			document.getElementById("player2").innerHTML = pontosJogador2;

		}
		else if (isColisaoJogador1()) {
			direcaoX = movimentacao;
			pontosJogador1++;
			document.getElementById("player1").innerHTML = pontosJogador1;
		}
		/*else if (isColisaoJogador2()) {
			direcaoX = -(movimentacao);
		}*/

		if(barraVida.width()<=10){
			alert("Perdeu, playboy!");
			location.reload();
		}
		
		window.addEventListener('keydown',botaoApertado,true);
	}


	function isColisaoJogador1(){
		var res = (bola.position().left+(bola.width()/2)-10 <= jogador1.position().left) && (bola.position().top >= jogador1.position().top && bola.position().top <= jogador1.position().top + jogador1.height());
				
		return (res);
	}
	
	function isColisaoJogador2(){
		var res = (bola.position().left+(bola.width()/2) == jogador2.position().left) && (bola.position().top >= jogador2.position().top && bola.position().top <= jogador2.position().top + jogador2.height());
		return res;
	}
	
	function botaoApertado(evt){
		switch (evt.keyCode) {
			case 87:
				if(jogador1.position().top > 10){
					jogador1.css("top", (jogador1.position().top - 20));
				}				
				console.log(jogador1.position().top)
				break;
			case 83: 
				if(jogador1.position().top < 450){
					jogador1.css("top", (jogador1.position().top + 20));
				}				
				break;
			case 38:
				if(jogador2.position().top > 10){  
					jogador2.css("top", (jogador2.position().top - 20));
				}
				break;
			case 40: 
				if(jogador2.position().top < 450)
					jogador2.css("top", (jogador2.position().top + 20));
				break;			
		}
	}
	
	var loop = setInterval(jogar, 1);
	
	
});
	
