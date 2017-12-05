$(function(){		
	
	var x = $("#bola").position().left;
	var y = $("#bola"). position().top;

	var fundo  = $("#fundo");

	var direcaoX = 1;
	var direcaoY = 1;

	var top = fundo.offset().top;
	var bottom = fundo.offset().top + fundo.height();
	var left = fundo.offset().left;
	var right = fundo.offset().left + fundo.width();

	function jogar(){

		x += direcaoX;
		y += direcaoY;
        
        $('#bola').css("top", y);
        $('#bola').css("left", x);

	}

	var loop = setInterval(jogar, 10)
	
})
	
