(function($) {
    "use strict";

	// Pre carregamento
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});

	// Esconder e exibir menu
	$('.menu-icon').on('click', function(){
		$('.main-menu').toggleClass('menu-oculto');
	});

	// Mascara com plugin mask do jQuery
	$('.cpf').mask('000.000.000-00');
	$('.telefone').mask('(00)00000-0000');

	// Função calcular
	$('#calcular').on("click", () => {
		debugger;
		let esquerda1Input = $("#esquerda_1");
		let esquerda2Input = $("#esquerda_2");
		let direita1Input = $("#direita_1");
		let direita2Input = $("#direita_2");

		const esquerda1 = parseFloat(esquerda1Input.val());
		const esquerda2 = parseFloat(esquerda2Input.val());
		const direita1 = parseFloat(direita1Input.val());

		const direita2 = (esquerda2 * direita1) / esquerda1;
		direita2Input.val(direita2.toFixed(2));
	});

	// Modal gatilho
	$('button[data-target="#imagemModal"]').click(function(){
		debugger;
		var imgSrc = $('#imagem').css('background-image');
		imgSrc = imgSrc.replace('url("', '').replace('")', '');
		$('#imagemModalSrc').attr('src', imgSrc);
	});
	
})(jQuery);

// Mascara sem plugin mask do jQuery
function verNumero(e){
	elNumero = e.parentElement.querySelector('.numero');
	numero = elNumero.innerText.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
	elNumero.innerText = numero;
	elNumero.style.display = 'block';
	e.style.display = 'none';
}

function print(){
	html2canvas(document.querySelector("#capture")).then(canvas => {
		const link = document.createElement("a");
		link.href = canvas.toDataURL("image/png");
		link.download = "print.png";
		link.click();
	});
}


	
