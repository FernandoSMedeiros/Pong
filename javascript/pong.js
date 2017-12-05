$(function(){		
	
	var x = $("#bola").position().left;
	var y = $("#bola"). position().top;

	var direcaoX = 1;
	var direcaoY = 1;

	var tela  = $("#fundo");
	var limiteTela = new Object()	

	limiteTela.top = tela.offset().top;
	limiteTela.bottom = tela.offset().top + tela.height();
	limiteTela.left = tela.offset().left;
	limiteTela.right = tela.offset().left + tela.width();

	function jogar(){

		x += direcaoX;
		y += direcaoY;
        
        $('#bola').css("top", y);
        $('#bola').css("left", x);

        console.log(limiteTela.top)
        console.log(limiteTela.left)

	}

	var loop = setInterval(jogar, 10)
	
})
	
